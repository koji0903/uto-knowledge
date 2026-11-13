#!/usr/bin/env python3
"""
宇土市議会 テーマ別分析拡張スクリプト
定例会 + 委員会発言を統合した統計を追加
"""

import json
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from collections import defaultdict
import logging
import re

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class ThemeAnalysisExpander:
    """テーマ別分析拡張器"""

    COMMITTEE_JSON_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks.json")
    COUNCIL_QA_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_detailed_qa.json")
    THEME_DIR = Path("/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/07_質問")

    # テーママッピング
    THEME_MAPPING = {
        "子育て・教育": ["教育", "学校", "子ども", "保育", "学生", "児童", "生徒"],
        "防災・安全": ["防災", "安全", "災害", "火災", "地震", "避難"],
        "経済・産業": ["産業", "経済", "企業", "事業", "雇用", "就業"],
        "インフラ": ["道路", "橋", "通信", "水道", "下水"],
        "福祉・医療": ["医療", "健康", "福祉", "病院", "介護"],
        "行政・財政": ["予算", "財政", "行政", "職員"],
        "市民・地域": ["地域", "市民", "住民", "自治会"],
        "都市・環境": ["環境", "緑化", "景観", "美化", "ごみ"],
    }

    def __init__(self):
        self.committee_records = []
        self.council_qa = []
        self.themes_expanded = []

    def load_data(self) -> bool:
        """データを読み込む"""
        if self.COMMITTEE_JSON_FILE.exists():
            with open(self.COMMITTEE_JSON_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                self.committee_records = data.get("records", [])
            logger.info(f"Loaded {len(self.committee_records)} committee records")

        if self.COUNCIL_QA_FILE.exists():
            with open(self.COUNCIL_QA_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                # 新しい構造に対応
                if "sessions" in data:
                    sessions = data.get("sessions", [])
                    if isinstance(sessions, list):
                        for session_data in sessions:
                            if isinstance(session_data, dict) and "questions" in session_data:
                                self.council_qa.extend(session_data.get("questions", []))
                    elif isinstance(sessions, dict):
                        for session_key, session_data in sessions.items():
                            if isinstance(session_data, dict) and "questions" in session_data:
                                self.council_qa.extend(session_data.get("questions", []))
                else:
                    self.council_qa = data.get("council_qa", [])
            logger.info(f"Loaded {len(self.council_qa)} council QA records")

        return True

    def _classify_theme(self, text: str) -> Optional[str]:
        """テキストからテーマを分類"""
        text_lower = text.lower()

        for theme, keywords in self.THEME_MAPPING.items():
            for keyword in keywords:
                if keyword in text_lower:
                    return theme

        return None

    def _collect_theme_data(self, theme: str) -> Dict[str, Any]:
        """テーマに関連するデータを収集"""
        data = {
            "theme": theme,
            "council_questions": [],
            "committee_remarks": [],
        }

        # 定例会質問を抽出
        for qa in self.council_qa:
            # テーママッチング
            question_text = qa.get("question_full_text", "").lower()
            if any(keyword in question_text for keyword in self.THEME_MAPPING[theme]):
                data["council_questions"].append(qa)

        # 委員会発言を抽出
        for record in self.committee_records:
            record_themes = record.get("remark", {}).get("themes", [])
            if theme in record_themes:
                data["committee_remarks"].append(record)

        return data

    def _generate_expanded_content(self, theme: str, data: Dict) -> str:
        """拡張されたマークダウンコンテンツを生成"""
        council_q = data["council_questions"]
        committee_r = data["committee_remarks"]

        content = f"\n## 📊 統計・分析（拡張）\n\n"

        # 定例会質問の統計
        if council_q:
            content += f"### 定例会での質問（{len(council_q)}項目）\n\n"

            by_session = defaultdict(list)
            for qa in council_q:
                session = qa.get("session_code", "")
                by_session[session].append(qa)

            for session in sorted(by_session.keys()):
                items = by_session[session]
                content += f"#### {session}定例会\n\n"

                for item in items:
                    questioner = item.get("questioner_name", "")
                    topic = item.get("topic", "")
                    question_preview = item.get("question_full_text", "")[:100] + "..."

                    content += f"- **{questioner}**: {topic}\n"
                    content += f"  {question_preview}\n\n"

        # 委員会発言の統計
        if committee_r:
            content += f"### 委員会での発言（{len(committee_r)}件）\n\n"

            by_committee = defaultdict(list)
            for record in committee_r:
                committee = record.get("committee", "")
                by_committee[committee].append(record)

            for committee in sorted(by_committee.keys()):
                remarks = by_committee[committee]
                committee_short = committee.replace("常任委員会", "")

                content += f"#### {committee_short}\n\n"
                content += f"- 発言数: {len(remarks)}件\n\n"

                # セッション別
                by_session = defaultdict(list)
                for remark in remarks:
                    session = remark.get("session", "")
                    by_session[session].append(remark)

                for session in sorted(by_session.keys()):
                    session_items = by_session[session]
                    content += f"- {session}: {len(session_items)}件\n"

        # 質問者別集計
        if council_q:
            content += f"\n### 質問者別（定例会）\n\n"

            by_questioner = defaultdict(int)
            for qa in council_q:
                questioner = qa.get("questioner_name", "")
                by_questioner[questioner] += 1

            content += "| 議員名 | 質問数 | 比率 |\n"
            content += "|:---:|:---:|:---:|\n"

            total = len(council_q)
            for questioner in sorted(by_questioner.keys(), key=lambda x: by_questioner[x], reverse=True):
                count = by_questioner[questioner]
                percentage = (count / total * 100) if total > 0 else 0
                content += f"| {questioner} | {count} | {percentage:.1f}% |\n"

        return content

    def expand_theme_file(self, file_path: Path) -> bool:
        """テーマファイルを拡張"""
        if not file_path.exists():
            return False

        try:
            # テーマ名をファイル名から抽出
            match = re.search(r'([^_]*?)_質問一覧\.md', file_path.name)
            if not match:
                return False

            theme = match.group(1)

            # データ収集
            data = self._collect_theme_data(theme)

            # 拡張コンテンツ生成
            expanded = self._generate_expanded_content(theme, data)

            # ファイル読み込みと追加
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # 既存の "## " セクションの後に追加
            if "## テーマ別集計" not in content:
                expanded_content = content.rstrip() + expanded
            else:
                expanded_content = content.rstrip() + expanded

            # ファイルに上書き保存
            file_path.write_text(expanded_content, encoding="utf-8")

            logger.info(f"[OK] Expanded {file_path.name}")
            return True

        except Exception as e:
            logger.error(f"[ERROR] Failed to expand {file_path.name}: {e}")
            return False

    def expand_all_themes(self):
        """全テーマファイルを拡張"""
        theme_files = sorted(self.THEME_DIR.glob("*_質問一覧.md"))

        for file_path in theme_files:
            if self.expand_theme_file(file_path):
                self.themes_expanded.append(file_path.name)

    def print_summary(self):
        """サマリーを出力"""
        logger.info(f"\nTheme Analysis Expansion Summary:")
        logger.info(f"Theme files expanded: {len(self.themes_expanded)}")
        for theme_file in self.themes_expanded:
            logger.info(f"  - {theme_file}")


def main():
    """メイン処理"""
    expander = ThemeAnalysisExpander()

    if not expander.load_data():
        return

    expander.expand_all_themes()
    expander.print_summary()

    logger.info("Expansion complete!")


if __name__ == "__main__":
    main()
