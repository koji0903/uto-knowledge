#!/usr/bin/env python3
"""
宇土市議会 Phase 4B: テーマ別キーワード辞書自動生成
機能:
- テーマごとのキーワード辞書を LLM で自動生成
- 既存の keywordTagging を拡張・検証
- 新しいテーマパターンを発見
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging
import anthropic

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class ThemeKeywordDictionaryGenerator:
    """テーマ別キーワード辞書生成エンジン"""

    # 入力ファイル
    COUNCIL_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_with_themes.json")
    COMMITTEE_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_with_themes.json")

    # 出力ファイル
    OUTPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/theme_keyword_dictionary.json")

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

    # 基本キーワード（既存版）
    BASE_KEYWORDS = {
        "子育て・教育": ["教育", "学校", "子ども", "保育", "学生", "児童", "生徒"],
        "防災・安全": ["防災", "安全", "災害", "火災", "地震", "避難", "警察"],
        "経済・産業": ["産業", "経済", "企業", "事業", "雇用", "就業", "商業"],
        "インフラ・道路": ["道路", "橋", "ライフライン", "通信", "水道", "下水", "整備"],
        "福祉・医療": ["医療", "健康", "福祉", "病院", "介護", "高齢", "障害"],
        "行政・財政": ["予算", "財政", "行政", "組織", "職員", "改革"],
        "市民・地域": ["地域", "市民", "住民", "自治会", "コミュニティ"],
        "都市・環境": ["環境", "緑化", "景観", "美化", "ごみ", "汚染"],
    }

    def __init__(self, model: str = "claude-3-5-sonnet-20241022"):
        """
        Args:
            model: Claude モデル ID
        """
        self.model = model
        self.client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

        self.council_data = None
        self.committee_data = None
        self.theme_keywords = {}
        self.new_keywords_found = {}

    def load_data(self) -> bool:
        """分類済みデータを読み込む"""
        try:
            if self.COUNCIL_WITH_THEMES.exists():
                with open(self.COUNCIL_WITH_THEMES, 'r', encoding='utf-8') as f:
                    self.council_data = json.load(f)
                logger.info(f"Loaded classified council data")

            if self.COMMITTEE_WITH_THEMES.exists():
                with open(self.COMMITTEE_WITH_THEMES, 'r', encoding='utf-8') as f:
                    self.committee_data = json.load(f)
                logger.info(f"Loaded classified committee data")

            return True
        except Exception as e:
            logger.error(f"Failed to load data: {e}")
            return False

    def _extract_keywords_from_text(self, text: str) -> List[str]:
        """テキストから候補キーワードを抽出"""
        if not text:
            return []

        # 名詞を簡易抽出（形態素解析なしの簡易実装）
        keywords = []

        # 1-3文字の連続した漢字またはカタカナを抽出
        import re
        patterns = [
            r'[一-鿿]{2,4}',  # 漢字2-4字
            r'[゠-ヿ]{2,4}',  # カタカナ2-4字
        ]

        for pattern in patterns:
            matches = re.findall(pattern, text)
            keywords.extend(matches)

        return list(set(keywords))

    def _extract_theme_examples(self, theme: str, limit: int = 5) -> List[Dict[str, str]]:
        """各テーマの実例を抽出"""
        examples = []

        # 定例会から例を取得
        if self.council_data:
            for session in self.council_data.get("sessions", []):
                for question in session.get("questions", []):
                    if question.get("primary_theme") == theme:
                        examples.append({
                            "type": "council_qa",
                            "text": question.get("question_text", "")[:200],
                            "confidence": max(
                                [t.get("confidence", 0) for t in question.get("themes", [])
                                 if t.get("name") == theme],
                                default=0
                            )
                        })
                        if len(examples) >= limit:
                            break

        # 委員会から例を取得
        if self.committee_data and len(examples) < limit:
            for record in self.committee_data.get("records", []):
                if record.get("primary_theme") == theme:
                    examples.append({
                        "type": "committee",
                        "text": record.get("remark", {}).get("body", "")[:200],
                        "confidence": max(
                            [t.get("confidence", 0) for t in record.get("themes", [])
                             if t.get("name") == theme],
                            default=0
                        )
                    })
                    if len(examples) >= limit:
                        break

        return examples

    def _generate_keywords_llm(self, theme: str, examples: List[Dict[str, str]]) -> Dict[str, Any]:
        """LLM でテーマ関連キーワード辞書を生成"""
        example_texts = "\n".join([e.get("text", "")[:100] for e in examples[:3]])

        prompt = f"""
以下のテーマについて、宇土市議会の議論で頻出する関連キーワード辞書を生成してください。

テーマ: {theme}

実例:
{example_texts}

JSON形式で以下のように返してください:
{{
  "keywords": ["キーワード1", "キーワード2", ...],
  "patterns": ["パターン1（例：〇〇学校）", "パターン2（例：教育〇〇）"],
  "exclusions": ["除外キーワード1（関連するが異なるテーマ）", ...],
  "subthemes": ["サブテーマ1", "サブテーマ2"],
  "new_keywords": ["基本キーワードに含まれない新規キーワード"]
}}

注意:
- keywords は最大15個
- patterns は見落としやすいパターン
- exclusions は混同しやすいが異なるテーマのキーワード
- new_keywords は特に重要（基本辞書に追加候補）
"""

        try:
            message = self.client.messages.create(
                model=self.model,
                max_tokens=500,
                messages=[
                    {"role": "user", "content": prompt}
                ]
            )

            response_text = message.content[0].text.strip()

            # JSON 抽出
            try:
                if "```json" in response_text:
                    json_str = response_text.split("```json")[1].split("```")[0].strip()
                elif "```" in response_text:
                    json_str = response_text.split("```")[1].split("```")[0].strip()
                else:
                    json_str = response_text

                result = json.loads(json_str)
                return result

            except json.JSONDecodeError as e:
                logger.warning(f"Failed to parse JSON for {theme}: {e}")
                return {
                    "keywords": self.BASE_KEYWORDS.get(theme, []),
                    "patterns": [],
                    "exclusions": [],
                    "subthemes": [],
                    "new_keywords": [],
                }

        except anthropic.APIError as e:
            logger.warning(f"API error for {theme}: {e}")
            return {
                "keywords": self.BASE_KEYWORDS.get(theme, []),
                "patterns": [],
                "exclusions": [],
                "subthemes": [],
                "new_keywords": [],
            }

    def generate_dictionary(self) -> bool:
        """キーワード辞書を生成"""
        if not self.council_data and not self.committee_data:
            logger.error("No data loaded")
            return False

        logger.info("Generating theme keyword dictionary...")

        for theme in self.THEMES:
            logger.info(f"Processing theme: {theme}")

            # テーマの例を抽出
            examples = self._extract_theme_examples(theme, limit=3)
            if not examples:
                logger.warning(f"No examples found for {theme}")
                # 基本キーワードを使用
                self.theme_keywords[theme] = {
                    "keywords": self.BASE_KEYWORDS.get(theme, []),
                    "patterns": [],
                    "exclusions": [],
                    "subthemes": [],
                    "new_keywords": [],
                    "source": "base",
                }
                continue

            # LLM でキーワード辞書を生成
            llm_result = self._generate_keywords_llm(theme, examples)

            # 基本キーワードと LLM 結果をマージ
            merged = {
                "keywords": list(set(
                    self.BASE_KEYWORDS.get(theme, []) +
                    llm_result.get("keywords", [])
                )),
                "patterns": llm_result.get("patterns", []),
                "exclusions": llm_result.get("exclusions", []),
                "subthemes": llm_result.get("subthemes", []),
                "new_keywords": llm_result.get("new_keywords", []),
                "example_count": len(examples),
            }

            self.theme_keywords[theme] = merged

            # 新規キーワードを記録
            new_kw = llm_result.get("new_keywords", [])
            if new_kw:
                self.new_keywords_found[theme] = new_kw
                logger.info(f"  Found {len(new_kw)} new keywords for {theme}")

        logger.info("Dictionary generation completed")
        return True

    def save_output(self) -> bool:
        """辞書を保存"""
        try:
            output = {
                "generated_at": datetime.now().isoformat(),
                "version": "2.0",
                "themes": self.theme_keywords,
                "new_keywords_summary": self.new_keywords_found,
                "total_keywords": sum(len(d.get("keywords", [])) for d in self.theme_keywords.values()),
                "total_patterns": sum(len(d.get("patterns", [])) for d in self.theme_keywords.values()),
                "statistics": {
                    "themes_processed": len(self.theme_keywords),
                    "themes_with_new_keywords": len(self.new_keywords_found),
                    "total_new_keywords": sum(len(k) for k in self.new_keywords_found.values()),
                }
            }

            with open(self.OUTPUT_FILE, 'w', encoding='utf-8') as f:
                json.dump(output, f, ensure_ascii=False, indent=2)

            logger.info(f"Saved theme keyword dictionary to {self.OUTPUT_FILE}")
            return True
        except Exception as e:
            logger.error(f"Failed to save output: {e}")
            return False

    def run(self) -> bool:
        """キーワード辞書生成パイプラインの実行"""
        logger.info("="*60)
        logger.info("Phase 4B: テーマキーワード辞書生成")
        logger.info("="*60)

        if not self.load_data():
            return False

        if not self.generate_dictionary():
            return False

        if not self.save_output():
            return False

        logger.info(f"\nKeyword Dictionary Report:")
        logger.info(f"  Themes Processed: {len(self.theme_keywords)}")
        logger.info(f"  Total Keywords: {sum(len(d.get('keywords', [])) for d in self.theme_keywords.values())}")
        logger.info(f"  Themes with New Keywords: {len(self.new_keywords_found)}")

        for theme, keywords in self.new_keywords_found.items():
            logger.info(f"    {theme}: {', '.join(keywords[:3])}...")

        return True


def main():
    """メイン処理"""
    generator = ThemeKeywordDictionaryGenerator(
        model="claude-3-5-sonnet-20241022"
    )
    success = generator.run()

    if success:
        logger.info("\n✓ Phase 4B: Keyword Dictionary Generation completed successfully")
        return 0
    else:
        logger.error("\n✗ Phase 4B: Keyword Dictionary Generation failed")
        return 1


if __name__ == "__main__":
    exit(main())
