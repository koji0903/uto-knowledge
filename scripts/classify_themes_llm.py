#!/usr/bin/env python3
"""
宇土市議会 Phase 4B: テーマ自動分類
目標: 全発言（定例会 864 + 委員会 571）を 8 テーマに自動分類
精度目標: 90%+

機能:
- 質問テキスト / 委員会発言テキストを LLM で分析
- 複数テーマの可能性を判定
- 信頼度スコア付き
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging
import anthropic
from concurrent.futures import ThreadPoolExecutor, as_completed

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class ThemeClassifierLLM:
    """LLM を使用したテーマ分類エンジン"""

    # 入力ファイル
    COUNCIL_QA_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_detailed_qa.json")
    COMMITTEE_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks_gap_filled.json")

    # 出力ファイル
    COUNCIL_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_with_themes.json")
    COMMITTEE_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_with_themes.json")

    # テーマ定義
    THEMES = [
        "子育て・教育",
        "防災・安全",
        "経済・産業",
        "インフラ・道路",
        "福祉・医療",
        "行政・財政",
        "市民・地域",
        "都市・環境",
    ]

    def __init__(self, model: str = "claude-3-5-sonnet-20241022", batch_size: int = 5):
        """
        Args:
            model: Claude モデル ID
            batch_size: バッチ処理のサイズ
        """
        self.model = model
        self.batch_size = batch_size
        self.client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

        self.council_data = None
        self.committee_data = None
        self.classified_council = []
        self.classified_committee = []
        self.stats = {
            "council_classified": 0,
            "committee_classified": 0,
            "errors": 0,
            "average_confidence": 0.0,
        }

    def load_data(self) -> bool:
        """データを読み込む"""
        try:
            if self.COUNCIL_QA_FILE.exists():
                with open(self.COUNCIL_QA_FILE, 'r', encoding='utf-8') as f:
                    self.council_data = json.load(f)
                logger.info(f"Loaded council QA data: {len(self.council_data.get('sessions', []))} sessions")

            if self.COMMITTEE_FILE.exists():
                with open(self.COMMITTEE_FILE, 'r', encoding='utf-8') as f:
                    self.committee_data = json.load(f)
                logger.info(f"Loaded committee data: {self.committee_data.get('total_records', 0)} records")
            else:
                logger.warning(f"Committee file not found: {self.COMMITTEE_FILE}")

            return True
        except Exception as e:
            logger.error(f"Failed to load data: {e}")
            return False

    def _classify_text_llm(self, text: str, text_type: str = "general") -> Optional[Dict[str, Any]]:
        """LLM でテキストを分類"""
        if not text or len(text) < 10:
            return None

        # テキストを短縮（API コスト削減）
        text_truncated = text[:1000]

        prompt = f"""
以下の宇土市議会の{text_type}を分析して、最も適切なテーマを判定してください。

テキスト:
{text_truncated}

選択可能なテーマ:
{', '.join(self.THEMES)}

JSON形式で以下のように返してください:
{{
  "primary_theme": "最も関連性が高いテーマ",
  "themes": [
    {{"name": "テーマ1", "confidence": 0.95}},
    {{"name": "テーマ2", "confidence": 0.65}},
  ],
  "reasoning": "選択理由（1行）"
}}

注意:
- primary_theme は必須
- themes は最大3つまで、信頼度でソート（降順）
- 確信度が低い場合も理由を記載
"""

        try:
            message = self.client.messages.create(
                model=self.model,
                max_tokens=300,
                messages=[
                    {"role": "user", "content": prompt}
                ]
            )

            response_text = message.content[0].text.strip()

            # JSON抽出を試みる
            try:
                # JSON を抽出（```json ... ``` 形式に対応）
                if "```json" in response_text:
                    json_str = response_text.split("```json")[1].split("```")[0].strip()
                elif "```" in response_text:
                    json_str = response_text.split("```")[1].split("```")[0].strip()
                else:
                    json_str = response_text

                classification = json.loads(json_str)
                return classification

            except json.JSONDecodeError as e:
                logger.warning(f"Failed to parse JSON response: {e}")
                # フォールバック
                return {
                    "primary_theme": "その他",
                    "themes": [{"name": "その他", "confidence": 0.5}],
                    "reasoning": "パース失敗"
                }

        except anthropic.APIError as e:
            logger.warning(f"API error in classification: {e}")
            return None

    def classify_council_qa(self) -> bool:
        """定例会 QA を分類"""
        if not self.council_data:
            logger.error("No council data loaded")
            return False

        logger.info("Starting council QA classification...")

        total_questions = 0
        for session in self.council_data.get("sessions", []):
            for question in session.get("questions", []):
                total_questions += 1

                question_text = question.get("question_text", "")
                if not question_text:
                    continue

                # LLM で分類
                classification = self._classify_text_llm(question_text, "定例会質問")
                if not classification:
                    self.stats["errors"] += 1
                    classification = {
                        "primary_theme": "その他",
                        "themes": [{"name": "その他", "confidence": 0.5}],
                    }

                # 質問レコードに分類を追加
                question["themes"] = classification.get("themes", [])
                question["primary_theme"] = classification.get("primary_theme", "その他")
                question["classification_reasoning"] = classification.get("reasoning", "")

                self.stats["council_classified"] += 1

                if self.stats["council_classified"] % 50 == 0:
                    logger.info(f"Classified {self.stats['council_classified']} council items...")

        logger.info(f"Classified {self.stats['council_classified']} council QA items")
        return True

    def classify_committee_remarks(self) -> bool:
        """委員会発言を分類"""
        if not self.committee_data:
            logger.warning("No committee data loaded - skipping")
            return True

        logger.info("Starting committee remarks classification...")

        for record in self.committee_data.get("records", []):
            remark_body = record.get("remark", {}).get("body", "")
            if not remark_body:
                continue

            # LLM で分類
            classification = self._classify_text_llm(remark_body, "委員会発言")
            if not classification:
                self.stats["errors"] += 1
                classification = {
                    "primary_theme": "その他",
                    "themes": [{"name": "その他", "confidence": 0.5}],
                }

            # 発言レコードに分類を追加
            if "remark" in record:
                record["remark"]["themes"] = classification.get("themes", [])
                record["remark"]["primary_theme"] = classification.get("primary_theme", "その他")

            record["primary_theme"] = classification.get("primary_theme", "その他")
            record["themes"] = classification.get("themes", [])

            self.stats["committee_classified"] += 1

            if self.stats["committee_classified"] % 50 == 0:
                logger.info(f"Classified {self.stats['committee_classified']} committee items...")

        logger.info(f"Classified {self.stats['committee_classified']} committee remarks")
        return True

    def calculate_statistics(self) -> Dict[str, Any]:
        """分類統計を計算"""
        all_confidences = []

        # 定例会から信頼度を取得
        for session in self.council_data.get("sessions", []) if self.council_data else []:
            for question in session.get("questions", []):
                for theme in question.get("themes", []):
                    all_confidences.append(theme.get("confidence", 0.5))

        # 委員会から信頼度を取得
        for record in self.committee_data.get("records", []) if self.committee_data else []:
            for theme in record.get("themes", []):
                all_confidences.append(theme.get("confidence", 0.5))

        avg_confidence = sum(all_confidences) / len(all_confidences) if all_confidences else 0

        return {
            "total_classified": self.stats["council_classified"] + self.stats["committee_classified"],
            "council_classified": self.stats["council_classified"],
            "committee_classified": self.stats["committee_classified"],
            "errors": self.stats["errors"],
            "average_confidence": avg_confidence,
            "high_confidence_ratio": len([c for c in all_confidences if c >= 0.8]) / len(all_confidences) if all_confidences else 0,
        }

    def save_outputs(self) -> bool:
        """分類済みデータを保存"""
        try:
            # 定例会 QA を保存
            if self.council_data:
                with open(self.COUNCIL_WITH_THEMES, 'w', encoding='utf-8') as f:
                    json.dump(self.council_data, f, ensure_ascii=False, indent=2)
                logger.info(f"Saved classified council QA to {self.COUNCIL_WITH_THEMES}")

            # 委員会発言を保存
            if self.committee_data:
                with open(self.COMMITTEE_WITH_THEMES, 'w', encoding='utf-8') as f:
                    json.dump(self.committee_data, f, ensure_ascii=False, indent=2)
                logger.info(f"Saved classified committee remarks to {self.COMMITTEE_WITH_THEMES}")

            return True
        except Exception as e:
            logger.error(f"Failed to save outputs: {e}")
            return False

    def run(self) -> bool:
        """テーマ分類パイプラインの実行"""
        logger.info("="*60)
        logger.info("Phase 4B: テーマ自動分類")
        logger.info("="*60)

        if not self.load_data():
            return False

        if not self.classify_council_qa():
            return False

        if not self.classify_committee_remarks():
            return False

        if not self.save_outputs():
            return False

        stats = self.calculate_statistics()
        logger.info(f"\nTheme Classification Report:")
        logger.info(f"  Total Classified: {stats['total_classified']}")
        logger.info(f"  Council QA: {stats['council_classified']}")
        logger.info(f"  Committee Remarks: {stats['committee_classified']}")
        logger.info(f"  Errors: {stats['errors']}")
        logger.info(f"  Average Confidence: {stats['average_confidence']:.2%}")
        logger.info(f"  High Confidence Ratio: {stats['high_confidence_ratio']:.2%}")

        return True


def main():
    """メイン処理"""
    classifier = ThemeClassifierLLM(
        model="claude-3-5-sonnet-20241022",
        batch_size=5
    )
    success = classifier.run()

    if success:
        logger.info("\n✓ Phase 4B: Theme Classification completed successfully")
        return 0
    else:
        logger.error("\n✗ Phase 4B: Theme Classification failed")
        return 1


if __name__ == "__main__":
    exit(main())
