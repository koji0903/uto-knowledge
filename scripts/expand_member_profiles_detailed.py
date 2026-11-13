#!/usr/bin/env python3
"""
宇土市議会 議員プロファイル拡張スクリプト
委員会発言一覧と詳細リンクを追加
"""

import json
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from collections import defaultdict
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class MemberProfileExpander:
    """議員プロファイル拡張器"""

    COMMITTEE_JSON_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks.json")
    COUNCIL_QA_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_detailed_qa.json")
    PROFILE_DIR = Path("/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/05_議員")

    def __init__(self):
        self.committee_records = []
        self.council_qa = []
        self.profiles_expanded = []

    def load_data(self) -> bool:
        """データを読み込む"""
        # 委員会データ
        if self.COMMITTEE_JSON_FILE.exists():
            with open(self.COMMITTEE_JSON_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                self.committee_records = data.get("records", [])
            logger.info(f"Loaded {len(self.committee_records)} committee records")
        else:
            logger.warning(f"Committee file not found: {self.COMMITTEE_JSON_FILE}")

        # 定例会 QA データ
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
        else:
            logger.warning(f"Council QA file not found: {self.COUNCIL_QA_FILE}")

        return True

    def _organize_committee_remarks_by_member(self) -> Dict[str, Dict[str, Any]]:
        """議員ごと、委員会ごとに委員会発言を整理"""
        organized = defaultdict(lambda: defaultdict(list))

        for record in self.committee_records:
            speaker_name = record["speaker"]["name"]
            committee = record["committee"]
            date_str = record.get("date_str", "")
            session = record.get("session", "")

            organized[speaker_name][committee].append({
                "date": date_str,
                "session": session,
                "body": record["remark"]["body"][:100],
                "char_count": record["remark"]["char_count"],
            })

        return organized

    def _generate_committee_section(self, member_name: str, organized: Dict) -> str:
        """委員会セクションを生成"""
        section = ""

        if member_name not in organized or not organized[member_name]:
            return ""

        section += "\n## 📝 委員会での発言一覧\n\n"

        member_committees = organized[member_name]

        # 委員会別に集計
        committee_stats = {}
        for committee, remarks in member_committees.items():
            committee_stats[committee] = {
                "count": len(remarks),
                "total_chars": sum(r["char_count"] for r in remarks),
            }

        # 委員会別セクション
        for committee in sorted(member_committees.keys()):
            remarks = member_committees[committee]
            stats = committee_stats[committee]

            committee_short = committee.replace("常任委員会", "")

            section += f"### {committee_short}\n\n"
            section += f"**発言数: {stats['count']}件** (総文字数: {stats['total_chars']:,})\n\n"

            # 会議別の発言
            session_remarks = defaultdict(list)
            for remark in remarks:
                session = remark["session"]
                session_remarks[session].append(remark)

            for session in sorted(session_remarks.keys()):
                session_items = session_remarks[session]
                total_remarks = len(session_items)
                date = session_items[0]["date"]

                # リンク形式を生成
                session_clean = session.replace("月定例会", "").replace("定例会", "")
                committee_file = f"[[{committee_short}/{session_clean}_{committee_short}]]"

                section += f"#### {session} ({date}の発言)\n\n"
                section += f"{committee_file} - {total_remarks}件の発言\n\n"

        return section

    def _organize_council_qa_by_member(self) -> Dict[str, List[Dict]]:
        """議員ごとに定例会質問を整理"""
        organized = defaultdict(list)

        for qa in self.council_qa:
            questioner = qa.get("questioner_name", "")
            organized[questioner].append(qa)

        return organized

    def _generate_council_section(self, member_name: str, council_qa_by_member: Dict) -> str:
        """定例会セクションを生成"""
        section = ""

        if member_name not in council_qa_by_member:
            return ""

        qa_list = council_qa_by_member[member_name]

        section += "\n## 📝 定例会での質問一覧\n\n"
        section += f"### 質問履歴\n\n"
        section += f"- **定例会数:** {len(set(qa['session_code'] for qa in qa_list))}\n"
        section += f"- **総質問項目数:** {len(qa_list)}\n\n"

        # セッション別に集計
        by_session = defaultdict(list)
        for qa in qa_list:
            session_code = qa.get("session_code", "")
            by_session[session_code].append(qa)

        # テーブル形式
        section += "| 定例会 | 項目数 | テーマ |\n"
        section += "|:----:|:----:|:----:|\n"

        for session_code in sorted(by_session.keys()):
            items = by_session[session_code]
            themes = set()
            for item in items:
                # テーマを抽出（タグから最初の1-2個）
                # 簡略版：ここでは項目数のみ表示
                pass

            session_display = session_code.replace("-", "_")
            section += f"| {session_code} | {len(items)} | 複数テーマ |\n"

        section += "\n### 定例会別の詳細リンク\n\n"

        for session_code in sorted(by_session.keys()):
            items = by_session[session_code]
            session_display = session_code.replace("-", "_")
            section += f"- [[{session_display}_定例会#{member_name}の質問]] - {len(items)}項目の質問へリンク\n"

        return section

    def expand_profile(self, file_path: Path, organized_committee: Dict, council_qa_by_member: Dict) -> bool:
        """プロファイルファイルを拡張"""
        if not file_path.exists():
            return False

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # 議員名を抽出
            import re
            match = re.search(r'# ([^\s]+) ', content)
            if not match:
                logger.debug(f"Could not extract member name from {file_path.name}")
                return False

            member_name = match.group(1)

            # セクション生成
            committee_section = self._generate_committee_section(member_name, organized_committee)
            council_section = self._generate_council_section(member_name, council_qa_by_member)

            # 既存ファイル末尾に追加
            if committee_section or council_section:
                expanded_content = content.rstrip() + "\n"

                if council_section:
                    expanded_content += council_section

                if committee_section:
                    expanded_content += committee_section

                expanded_content += "\n## 関連リンク\n\n"
                expanded_content += f"- [[06_市政・議会/06_議会/index]]\n"
                expanded_content += f"- [[04_データリンク/01_議会活動/index]]\n"

                # ファイルに上書き保存
                file_path.write_text(expanded_content, encoding="utf-8")

                logger.info(f"[OK] Expanded {file_path.name}")
                return True
            else:
                logger.debug(f"[SKIP] No content to expand for {member_name}")

        except Exception as e:
            logger.error(f"[ERROR] Failed to expand {file_path.name}: {e}")
            return False

        return False

    def expand_all_profiles(self):
        """全プロファイルを拡張"""
        organized_committee = self._organize_committee_remarks_by_member()
        council_qa_by_member = self._organize_council_qa_by_member()

        profile_files = sorted(self.PROFILE_DIR.glob("*_活動プロファイル.md"))

        for file_path in profile_files:
            if self.expand_profile(file_path, organized_committee, council_qa_by_member):
                self.profiles_expanded.append(file_path.name)

    def print_summary(self):
        """サマリーを出力"""
        logger.info(f"\nProfile Expansion Summary:")
        logger.info(f"Profiles expanded: {len(self.profiles_expanded)}")
        for profile_file in self.profiles_expanded:
            logger.info(f"  - {profile_file}")


def main():
    """メイン処理"""
    expander = MemberProfileExpander()

    if not expander.load_data():
        return

    expander.expand_all_profiles()
    expander.print_summary()

    logger.info("Expansion complete!")


if __name__ == "__main__":
    main()
