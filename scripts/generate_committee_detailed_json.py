#!/usr/bin/env python3
"""
宇土市議会 委員会詳細 JSON 生成スクリプト
抽出テキストを構造化 JSON に変換
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from dataclasses import dataclass, asdict
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@dataclass
class CommitteeRemark:
    """委員会発言"""
    id: str
    session: str
    committee: str
    date: str
    speaker_seat: Optional[int]
    speaker_name: str
    remark_body: str
    char_count: int
    themes: List[str]


class CommitteeDetailedJSONGenerator:
    """委員会詳細 JSON 生成器"""

    INPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_raw_text.json")
    OUTPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks.json")

    # テーマ分類ルール
    THEME_KEYWORDS = {
        "子育て・教育": ["教育", "学校", "子ども", "保育", "学生", "児童", "生徒"],
        "防災・安全": ["防災", "安全", "災害", "火災", "地震", "避難", "警察"],
        "経済・産業": ["産業", "経済", "企業", "事業", "雇用", "就業", "商業"],
        "インフラ": ["道路", "橋", "ライフライン", "通信", "水道", "下水", "整備"],
        "福祉・医療": ["医療", "健康", "福祉", "病院", "介護", "高齢", "障害"],
        "行政・財政": ["予算", "財政", "行政", "組織", "職員", "改革"],
        "市民・地域": ["地域", "市民", "住民", "自治会", "コミュニティ"],
        "都市・環境": ["環境", "緑化", "景観", "美化", "ごみ", "汚染"],
    }

    def __init__(self):
        self.raw_data = None
        self.committee_records = []

    def load_raw_data(self) -> bool:
        """抽出済みデータを読み込む"""
        if not self.INPUT_FILE.exists():
            logger.error(f"Input file not found: {self.INPUT_FILE}")
            return False

        with open(self.INPUT_FILE, "r", encoding="utf-8") as f:
            self.raw_data = json.load(f)

        logger.info(f"Loaded {len(self.raw_data['records'])} records")
        return True

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

    def _extract_date_iso(self, date_str: str, fiscal_year: str) -> str:
        """
        日付文字列を ISO 形式に変換
        例: "3月11日", "R7" → "2025-03-11"
        """
        if not date_str or not fiscal_year:
            return None

        # 全角数字を半角に
        zenkaku = '０１２３４５６７８９'
        hankaku = '0123456789'
        trans = str.maketrans(zenkaku, hankaku)
        date_str = date_str.translate(trans)

        match = re.search(r'(\d+)月(\d+)日', date_str)
        if not match:
            return None

        month, day = int(match.group(1)), int(match.group(2))
        year_match = re.search(r'R(\d+)', fiscal_year)
        if not year_match:
            return None

        fiscal = int(year_match.group(1))
        # 令和元年 = 2019, 令和2年 = 2020...
        year = 2018 + fiscal

        try:
            return f"{year:04d}-{month:02d}-{day:02d}"
        except:
            return None

    def _generate_id(self, session: str, committee: str, seat: Optional[int], index: int) -> str:
        """ID生成 例: R7-3月-総務-1-001"""
        committee_short = {
            "総務市民常任委員会": "総務",
            "文教厚生常任委員会": "文教",
            "経済建設常任委員会": "経済建設",
        }.get(committee, "その他")

        session_clean = (session or "不明").replace("月定例会", "").replace("定例会", "")

        if seat:
            return f"{session_clean}-{committee_short}-{seat:02d}-{index:03d}"
        return f"{session_clean}-{committee_short}-{index:03d}"

    def generate_committee_records(self) -> List[Dict[str, Any]]:
        """委員会記録を生成"""
        record_index = {}

        for record in self.raw_data["records"]:
            filename = record["filename"]
            file_info = record["file_info"]

            session = file_info.get("session") or "不明"
            committee = file_info.get("committee") or "不明"
            date_str = file_info.get("date") or ""
            fiscal_year = file_info.get("fiscal_year") or ""

            date_iso = self._extract_date_iso(date_str, fiscal_year)

            for remark_index, remark in enumerate(record["remarks"], 1):
                seat = remark.get("seat")
                name = remark.get("name", "不明")
                body = remark.get("body", "")
                char_count = len(body)

                themes = self._classify_themes(body)

                # ID 生成（同じセッション・委員会内での通し番号）
                key = f"{session}_{committee}_{seat}"
                if key not in record_index:
                    record_index[key] = 0
                record_index[key] += 1

                id_str = self._generate_id(session, committee, seat, record_index[key])

                committee_record = {
                    "id": id_str,
                    "session": session,
                    "committee": committee,
                    "date": date_iso,
                    "date_str": date_str,
                    "speaker": {
                        "seat": seat,
                        "name": name,
                    },
                    "remark": {
                        "body": body,
                        "char_count": char_count,
                        "themes": themes,
                    },
                    "source_file": filename,
                }

                self.committee_records.append(committee_record)

        logger.info(f"Generated {len(self.committee_records)} committee records")
        return self.committee_records

    def save_to_json(self):
        """JSON ファイルに保存"""
        output = {
            "generated_at": datetime.now().isoformat(),
            "total_records": len(self.committee_records),
            "records": self.committee_records,
        }

        self.OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

        with open(self.OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(output, f, ensure_ascii=False, indent=2)

        logger.info(f"[OK] Saved to {self.OUTPUT_FILE}")
        logger.info(f"Total records: {len(self.committee_records)}")

        # 統計情報
        committees = set(r["committee"] for r in self.committee_records)
        speakers = set(r["speaker"]["name"] for r in self.committee_records if r["speaker"]["name"] != "不明")

        logger.info(f"Committees: {len(committees)}")
        logger.info(f"Speakers: {len(speakers)}")

        for committee in sorted(committees):
            count = sum(1 for r in self.committee_records if r["committee"] == committee)
            logger.info(f"  - {committee}: {count} remarks")


def main():
    """メイン処理"""
    generator = CommitteeDetailedJSONGenerator()
    if not generator.load_raw_data():
        return

    generator.generate_committee_records()
    generator.save_to_json()

    logger.info("Generation complete!")


if __name__ == "__main__":
    main()
