#!/usr/bin/env python3
"""
宇土市議会 Phase 4A: 委員会発言抽出の最適化
目標: 247件 → 571件（複数行・複雑な発言の正確抽出）

機能:
- Regex パターンの改善
- テキスト正規化の強化
- 議員名の変種対応
- 複数行発言の正確な取得
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@dataclass
class OptimizedRemark:
    """最適化済み委員会発言"""
    id: str
    session: str
    committee: str
    date: str
    date_str: str
    speaker: Dict[str, Any]
    remark: Dict[str, Any]
    source_file: str
    confidence: float  # 抽出精度信頼度


class CommitteeExtractionOptimizer:
    """委員会発言抽出の最適化エンジン"""

    # 関連ファイル
    RAW_TEXT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_raw_text.json")
    CURRENT_JSON_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks.json")
    OUTPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks_optimized.json")

    # テーマ分類ルール（拡張版）
    THEME_KEYWORDS = {
        "子育て・教育": [
            "教育", "学校", "子ども", "保育", "学生", "児童", "生徒",
            "給食", "いじめ", "ICT", "GigaSchool", "不登校", "授業",
            "教職員", "教室", "運動会", "修学旅行", "PTA"
        ],
        "防災・安全": [
            "防災", "安全", "災害", "火災", "地震", "避難", "警察",
            "消防", "安心", "危機", "警戒", "緊急", "対策", "訓練"
        ],
        "経済・産業": [
            "産業", "経済", "企業", "事業", "雇用", "就業", "商業",
            "農業", "林業", "漁業", "観光", "振興", "支援", "発展"
        ],
        "インフラ・道路": [
            "道路", "橋", "ライフライン", "通信", "水道", "下水", "整備",
            "舗装", "修繕", "工事", "交通", "駅", "バス", "上下水道"
        ],
        "福祉・医療": [
            "医療", "健康", "福祉", "病院", "介護", "高齢", "障害",
            "健康診断", "予防", "治療", "ワクチン", "感染症", "成人"
        ],
        "行政・財政": [
            "予算", "財政", "行政", "組織", "職員", "改革", "議案",
            "決算", "収支", "債務", "効率化", "行革", "DX", "デジタル"
        ],
        "市民・地域": [
            "地域", "市民", "住民", "自治会", "コミュニティ", "交流",
            "協働", "参加", "活動", "団体", "催し", "イベント"
        ],
        "都市・環境": [
            "環境", "緑化", "景観", "美化", "ごみ", "汚染", "リサイクル",
            "公園", "緑地", "空き家", "土地利用", "都市計画", "まちづくり"
        ],
    }

    # 議員名の変種マッピング
    MEMBER_NAME_VARIANTS = {
        "土黒": {"variants": ["土黒功司", "土黒議員", "1番"]},
        "福田": {"variants": ["福田一", "福田議員"]},
        "出口": {"variants": ["出口八十郎", "出口議員"]},
        # 他の議員名も追加可能
    }

    # マーカーパターン（複数行発言の境界判定）
    SPEAKER_MARKERS = [
        r"^○(\d+)番?（(.+?)君）",  # ○1番（土黒功司君）
        r"^○(.+?)（執行部）",      # ○（執行部）木村課長
        r"^○委員長",               # ○委員長
        r"^○副委員長",             # ○副委員長
        r"^○（委員長）",           # ○（委員長）園田
    ]

    # 終了マーカー
    END_MARKERS = [
        r"^○(?:【|●|○|△|\d|[ァ-ヴー]|[あ-ん]|[A-Za-z])",  # 次の発言の始まり
    ]

    def __init__(self, mode: str = "enhanced"):
        """
        mode: 'enhanced' (改善版) または 'llm' (LLM補完待ち)
        """
        self.mode = mode
        self.raw_data = None
        self.current_data = None
        self.optimized_records = []
        self.extraction_stats = {
            "original_count": 0,
            "optimized_count": 0,
            "added_count": 0,
            "improved_count": 0,
        }

    def load_data(self) -> bool:
        """データを読み込む"""
        try:
            # 現在のデータを読み込む
            if self.CURRENT_JSON_FILE.exists():
                with open(self.CURRENT_JSON_FILE, 'r', encoding='utf-8') as f:
                    self.current_data = json.load(f)
                    self.extraction_stats["original_count"] = self.current_data.get("total_records", 0)
                logger.info(f"Loaded current data: {self.extraction_stats['original_count']} records")

            # 生のテキストデータも読み込む
            if self.RAW_TEXT_FILE.exists():
                with open(self.RAW_TEXT_FILE, 'r', encoding='utf-8') as f:
                    self.raw_data = json.load(f)
                logger.info(f"Loaded raw text data: {len(self.raw_data.get('records', []))} files")

            return True
        except Exception as e:
            logger.error(f"Failed to load data: {e}")
            return False

    def _normalize_text(self, text: str) -> str:
        """テキスト正規化"""
        if not text:
            return ""

        # OCR ノイズの統一
        text = re.sub(r'[―─━—−−]', '－', text)
        text = re.sub(r'[　 ]+', ' ', text)  # 複数の空白を統一

        # 改行の正規化
        text = re.sub(r'\r\n', '\n', text)
        text = re.sub(r'\n{3,}', '\n\n', text)  # 複数の改行を統一

        # 重複行の除去
        lines = text.split('\n')
        seen = set()
        unique_lines = []
        for line in lines:
            if line.strip() not in seen:
                unique_lines.append(line)
                seen.add(line.strip())

        return '\n'.join(unique_lines)

    def _normalize_member_name(self, name: str) -> Optional[str]:
        """議員名を正規化（変種を統一）"""
        if not name:
            return None

        name = name.replace("　", " ").strip()

        # 敬称を除去
        name = re.sub(r'君$|さん$|議員$', '', name)

        # 座席番号から議員名を抽出
        seat_match = re.match(r'^(\d+)番', name)
        if seat_match:
            seat = int(seat_match.group(1))
            # 座席番号から議員名を特定（要実装：議員マスターデータが必要）
            return name

        return name

    def _extract_speaker_info(self, line: str) -> Optional[Dict[str, Any]]:
        """発言者情報を抽出"""
        for marker_pattern in self.SPEAKER_MARKERS:
            match = re.match(marker_pattern, line)
            if match:
                if "番" in marker_pattern:
                    # ○1番（名前君）形式
                    seat_num = match.group(1)
                    name = match.group(2)

                    try:
                        seat = int(seat_num) if seat_num.isdigit() else None
                    except:
                        seat = None

                    return {
                        "seat": seat,
                        "name": self._normalize_member_name(name)
                    }
                elif "執行部" in marker_pattern:
                    # ○（執行部）部長名形式
                    return {
                        "seat": None,
                        "name": match.group(1) if match.lastindex >= 1 else "執行部"
                    }
                else:
                    # ○委員長など
                    return {
                        "seat": None,
                        "name": line.replace("○", "").strip()[:50]
                    }

        return None

    def _extract_multiline_remark(self, lines: List[str], start_idx: int) -> Tuple[str, int]:
        """複数行の発言を抽出"""
        remark_lines = []

        for i in range(start_idx, len(lines)):
            line = lines[i]

            # 次の発言者マーカーで終了
            if i > start_idx and self._is_speaker_marker(line):
                return '\n'.join(remark_lines), i

            # 括弧内のテキストを抽出（例：（異議なし））
            if line.strip().startswith("（") and line.strip().endswith("）"):
                remark_lines.append(line.strip())
            elif line.strip():
                remark_lines.append(line)

        return '\n'.join(remark_lines), len(lines)

    def _is_speaker_marker(self, line: str) -> bool:
        """行が発言者マーカーかどうか"""
        for marker_pattern in self.SPEAKER_MARKERS:
            if re.match(marker_pattern, line):
                return True
        return False

    def _classify_themes(self, text: str) -> List[str]:
        """テーマ分類"""
        themes = []
        text_lower = text.lower()

        for theme, keywords in self.THEME_KEYWORDS.items():
            for keyword in keywords:
                if keyword in text_lower:
                    if theme not in themes:
                        themes.append(theme)
                    break

        return themes if themes else ["その他"]

    def _calculate_confidence(self, speaker_info: Dict, remark_text: str) -> float:
        """抽出精度信頼度を計算"""
        confidence = 0.5  # ベース値

        # 議員名がある場合
        if speaker_info and speaker_info.get("name"):
            confidence += 0.2

        # 座席番号がある場合
        if speaker_info and speaker_info.get("seat"):
            confidence += 0.1

        # 発言テキストの長さ
        if len(remark_text) > 50:
            confidence += 0.1

        # テーマが検出された場合
        themes = self._classify_themes(remark_text)
        if themes and themes[0] != "その他":
            confidence += 0.1

        return min(confidence, 1.0)

    def _generate_id(self, session: str, committee: str, seat: Optional[int], index: int) -> str:
        """ID生成"""
        committee_short = {
            "総務市民常任委員会": "総務",
            "文教厚生常任委員会": "文教",
            "経済建設常任委員会": "経済建設",
        }.get(committee, "その他")

        session_clean = (session or "不明").replace("月定例会", "").replace("定例会", "")

        if seat and seat > 0:
            return f"{session_clean}-{committee_short}-{seat:02d}-{index:03d}"
        return f"{session_clean}-{committee_short}-{index:03d}"

    def optimize_extraction(self) -> bool:
        """最適化の実行"""
        if not self.current_data:
            logger.error("No data to optimize")
            return False

        logger.info("Starting optimized extraction...")

        for record in self.current_data.get("records", []):
            try:
                # 現在のレコードをコピー
                optimized_record = {
                    "id": record.get("id"),
                    "session": record.get("session"),
                    "committee": record.get("committee"),
                    "date": record.get("date"),
                    "date_str": record.get("date_str"),
                    "speaker": record.get("speaker"),
                    "remark": record.get("remark"),
                    "source_file": record.get("source_file"),
                    "confidence": 0.8  # デフォルト信頼度
                }

                # テキストを正規化
                if optimized_record.get("remark"):
                    body = optimized_record["remark"].get("body", "")
                    normalized_body = self._normalize_text(body)
                    optimized_record["remark"]["body"] = normalized_body

                    # 信頼度を再計算
                    optimized_record["confidence"] = self._calculate_confidence(
                        optimized_record["speaker"],
                        normalized_body
                    )

                self.optimized_records.append(optimized_record)

            except Exception as e:
                logger.warning(f"Error processing record {record.get('id')}: {e}")
                continue

        self.extraction_stats["optimized_count"] = len(self.optimized_records)
        logger.info(f"Optimized {len(self.optimized_records)} records")

        return True

    def generate_report(self) -> Dict[str, Any]:
        """抽出統計レポートを生成"""
        stats = {
            "timestamp": datetime.now().isoformat(),
            "optimization_mode": self.mode,
            "statistics": self.extraction_stats,
            "before": {
                "total_records": self.extraction_stats["original_count"],
            },
            "after": {
                "total_records": self.extraction_stats["optimized_count"],
                "added": self.extraction_stats["added_count"],
                "improved": self.extraction_stats["improved_count"],
            },
            "quality_metrics": {
                "average_confidence": (
                    sum(r.get("confidence", 0.8) for r in self.optimized_records) / len(self.optimized_records)
                    if self.optimized_records else 0
                ),
                "high_confidence_ratio": (
                    len([r for r in self.optimized_records if r.get("confidence", 0.8) >= 0.8]) /
                    len(self.optimized_records) if self.optimized_records else 0
                ),
            }
        }
        return stats

    def save_output(self) -> bool:
        """最適化済みデータを保存"""
        try:
            output_data = {
                "generated_at": datetime.now().isoformat(),
                "total_records": len(self.optimized_records),
                "optimization_mode": self.mode,
                "records": self.optimized_records,
                "statistics": self.generate_report(),
            }

            with open(self.OUTPUT_FILE, 'w', encoding='utf-8') as f:
                json.dump(output_data, f, ensure_ascii=False, indent=2)

            logger.info(f"Saved optimized records to {self.OUTPUT_FILE}")
            return True
        except Exception as e:
            logger.error(f"Failed to save output: {e}")
            return False

    def run(self) -> bool:
        """最適化パイプラインの実行"""
        logger.info("="*60)
        logger.info("Phase 4A: 委員会発言抽出の最適化")
        logger.info("="*60)

        if not self.load_data():
            return False

        if not self.optimize_extraction():
            return False

        if not self.save_output():
            return False

        # レポートを表示
        report = self.generate_report()
        logger.info(f"\nOptimization Report:")
        logger.info(f"  Before: {report['before']['total_records']} records")
        logger.info(f"  After: {report['after']['total_records']} records")
        logger.info(f"  Average Confidence: {report['quality_metrics']['average_confidence']:.2%}")
        logger.info(f"  High Confidence Ratio: {report['quality_metrics']['high_confidence_ratio']:.2%}")

        return True


def main():
    """メイン処理"""
    optimizer = CommitteeExtractionOptimizer(mode="enhanced")
    success = optimizer.run()

    if success:
        logger.info("\n✓ Phase 4A: Optimization completed successfully")
        return 0
    else:
        logger.error("\n✗ Phase 4A: Optimization failed")
        return 1


if __name__ == "__main__":
    exit(main())
