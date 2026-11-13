#!/usr/bin/env python3
"""
宇土市議会 定例会 Markdown ファイル拡張スクリプト
質問本文と答弁をコンシル詳細 JSON から追加
"""

import json
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging
import re

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class CouncilMarkdownExpander:
    """定例会 Markdown 拡張器"""

    COUNCIL_QA_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_detailed_qa.json")
    SESSION_DIR = Path("/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/08_会期")

    def __init__(self):
        self.qa_data = {}
        self.sessions_expanded = []

    def load_qa_data(self) -> bool:
        """質疑応答 JSON を読み込む"""
        if not self.COUNCIL_QA_FILE.exists():
            logger.error(f"QA file not found: {self.COUNCIL_QA_FILE}")
            return False

        with open(self.COUNCIL_QA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            # 新しい構造に対応
            qa_list = []
            if "sessions" in data:
                sessions = data.get("sessions", [])
                if isinstance(sessions, list):
                    for session_data in sessions:
                        if isinstance(session_data, dict) and "questions" in session_data:
                            qa_list.extend(session_data.get("questions", []))
                elif isinstance(sessions, dict):
                    for session_key, session_data in sessions.items():
                        if isinstance(session_data, dict) and "questions" in session_data:
                            qa_list.extend(session_data.get("questions", []))
            else:
                qa_list = data.get("council_qa", [])

            # セッションコード別にインデックス化
            for qa in qa_list:
                session_code = qa.get("session_code", "")
                if session_code not in self.qa_data:
                    self.qa_data[session_code] = []
                self.qa_data[session_code].append(qa)

        logger.info(f"Loaded QA data for {len(self.qa_data)} sessions")
        return True

    def _extract_session_code(self, filename: str) -> str:
        """ファイル名からセッションコードを抽出"""
        # R4-12_定例会.md → R4-12
        match = re.search(r'(R\d+-\d+)_', filename)
        if match:
            return match.group(1)
        return None

    def _shorten_text(self, text: str, max_length: int = 200) -> str:
        """テキストを短縮（最初の max_length 字 + ...）"""
        if len(text) > max_length:
            return text[:max_length] + "..."
        return text

    def expand_session_file(self, file_path: Path) -> Optional[str]:
        """セッションファイルを拡張"""
        if not file_path.exists():
            return None

        session_code = self._extract_session_code(file_path.name)
        if not session_code or session_code not in self.qa_data:
            logger.warning(f"No QA data for {session_code}")
            return None

        qa_list = self.qa_data[session_code]

        # 既存ファイルを読み込む
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # パースして拡張
        lines = content.split("\n")
        expanded_lines = []
        in_questions_section = False
        current_member = None
        member_qa_dict = {}

        # QA データを議員別に整理
        for qa in qa_list:
            questioner = qa.get("questioner_name", "")
            question_text = qa.get("question_full_text", "")
            responses = qa.get("responses", [])

            if questioner not in member_qa_dict:
                member_qa_dict[questioner] = []
            member_qa_dict[questioner].append({
                "topic": qa.get("topic", ""),
                "question_text": question_text,
                "responses": responses,
            })

        # 既存ファイルを解析して拡張
        i = 0
        while i < len(lines):
            line = lines[i]

            # ### N番 名前 セクションを検出
            if line.startswith("### ") and "番" in line:
                expanded_lines.append(line)

                # 議員名を抽出
                match = re.search(r'(\d+)番[　\s]*([^\n]*)', line)
                if match:
                    member_name = match.group(2).strip()

                    # QA データがあれば追加
                    if member_name in member_qa_dict:
                        expanded_lines.append("")
                        for qa_item in member_qa_dict[member_name]:
                            expanded_lines.append(f"- **{qa_item['topic']}**")
                            expanded_lines.append("")

                            # 質問本文
                            question_preview = self._shorten_text(qa_item["question_text"], 150)
                            expanded_lines.append(f"  **質問:**")
                            expanded_lines.append(f"  {question_preview}")
                            expanded_lines.append("")

                            # 答弁
                            if qa_item["responses"]:
                                for response in qa_item["responses"]:
                                    respondent = response.get("respondent", "")
                                    response_text = response.get("text", "")
                                    response_preview = self._shorten_text(response_text, 150)

                                    expanded_lines.append(f"  **{respondent}の答弁:**")
                                    expanded_lines.append(f"  {response_preview}")
                                    expanded_lines.append("")

                            expanded_lines.append("")
            else:
                expanded_lines.append(line)

            i += 1

        return "\n".join(expanded_lines)

    def expand_all_sessions(self):
        """全セッションファイルを拡張"""
        session_files = sorted(self.SESSION_DIR.glob("*_定例会.md"))

        for file_path in session_files:
            try:
                expanded_content = self.expand_session_file(file_path)

                if expanded_content:
                    # ファイルに上書き保存
                    file_path.write_text(expanded_content, encoding="utf-8")
                    logger.info(f"[OK] Expanded {file_path.name}")
                    self.sessions_expanded.append(file_path.name)
                else:
                    logger.warning(f"[SKIP] No expansion for {file_path.name}")

            except Exception as e:
                logger.error(f"[ERROR] Failed to expand {file_path.name}: {e}")

    def print_summary(self):
        """サマリーを出力"""
        logger.info(f"\nExpansion Summary:")
        logger.info(f"Sessions expanded: {len(self.sessions_expanded)}")
        for session_file in self.sessions_expanded:
            logger.info(f"  - {session_file}")


def main():
    """メイン処理"""
    expander = CouncilMarkdownExpander()

    if not expander.load_qa_data():
        return

    expander.expand_all_sessions()
    expander.print_summary()

    logger.info("Expansion complete!")


if __name__ == "__main__":
    main()
