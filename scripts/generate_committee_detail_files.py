#!/usr/bin/env python3
"""
宇土市議会 委員会詳細 Markdown ファイル生成スクリプト
委員会別、会議別に Markdown ファイルを生成
"""

import json
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from collections import defaultdict
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class CommitteeDetailFileGenerator:
    """委員会詳細ファイル生成器"""

    INPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_detailed_remarks.json")
    OUTPUT_DIR = Path("/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/02_委員会")

    def __init__(self):
        self.records = []
        self.files_created = []

    def load_data(self) -> bool:
        """データを読み込む"""
        if not self.INPUT_FILE.exists():
            logger.error(f"Input file not found: {self.INPUT_FILE}")
            return False

        with open(self.INPUT_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            self.records = data.get("records", [])

        logger.info(f"Loaded {len(self.records)} records")
        return True

    def _organize_by_committee_and_session(self) -> Dict[str, Dict[str, List[Dict]]]:
        """委員会別、セッション別に整理"""
        organized = defaultdict(lambda: defaultdict(list))

        for record in self.records:
            committee = record.get("committee", "不明")
            session = record.get("session", "不明")

            organized[committee][session].append(record)

        return organized

    def _format_date(self, date_str: Optional[str]) -> str:
        """日付をフォーマット"""
        if not date_str or date_str == "":
            return "日付不明"
        if len(date_str) == 10:  # ISO 形式
            return date_str
        return date_str

    def _generate_committee_markdown(
        self,
        committee: str,
        session: str,
        records: List[Dict]
    ) -> str:
        """委員会別マークダウンを生成"""
        # 発言者ごとにグループ化
        by_speaker = defaultdict(list)
        for record in records:
            speaker_name = record["speaker"]["name"]
            by_speaker[speaker_name].append(record)

        # ヘッダー
        markdown = f"""---
title: "{committee} - {session}"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: ["委員会", "{committee}", "{session}"]
type: committee-record
source: committee_detailed_remarks.json
schemaVersion: 1.0.0
verified: false
---

# {committee} - {session}

**生成日:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## 会議情報

- **委員会:** {committee}
- **セッション:** {session}
- **発言者数:** {len(by_speaker)}
- **総発言数:** {len(records)}
- **総文字数:** {sum(r['remark']['char_count'] for r in records):,}

## 発言者一覧

| 議席 | 氏名 | 発言数 | 文字数 |
|:---:|:---:|:---:|:---:|
"""

        # 発言者ごとの統計
        for speaker_name in sorted(by_speaker.keys()):
            speaker_records = by_speaker[speaker_name]
            seat = speaker_records[0]["speaker"]["seat"] or "-"
            remark_count = len(speaker_records)
            total_chars = sum(r["remark"]["char_count"] for r in speaker_records)
            markdown += f"| {seat} | {speaker_name} | {remark_count} | {total_chars:,} |\n"

        # 発言内容
        markdown += "\n## 発言内容\n\n"

        for speaker_name in sorted(by_speaker.keys()):
            speaker_records = by_speaker[speaker_name]
            seat = speaker_records[0]["speaker"]["seat"] or "-"
            remark_count = len(speaker_records)

            markdown += f"### {seat}番 {speaker_name} ({remark_count}件の発言)\n\n"

            for idx, record in enumerate(speaker_records, 1):
                themes = ", ".join(record["remark"]["themes"])
                char_count = record["remark"]["char_count"]
                body = record["remark"]["body"]

                # 最初の300字まで表示、以降は省略
                if len(body) > 300:
                    body_preview = body[:300] + "..."
                else:
                    body_preview = body

                markdown += f"#### 発言{idx}\n\n"
                markdown += f"**テーマ:** {themes}\n\n"
                markdown += f"**文字数:** {char_count}\n\n"
                markdown += f"**本文:**\n\n"
                markdown += f"{body_preview}\n\n"
                markdown += "---\n\n"

        return markdown

    def generate_all_files(self):
        """全ファイルを生成"""
        organized = self._organize_by_committee_and_session()

        for committee in sorted(organized.keys()):
            # 委員会フォルダを作成
            committee_dir = self.OUTPUT_DIR / committee
            committee_dir.mkdir(parents=True, exist_ok=True)

            for session in sorted(organized[committee].keys()):
                records = organized[committee][session]

                # ファイル名を生成
                session_clean = session.replace("月定例会", "").replace("定例会", "")
                committee_short = committee.replace("常任委員会", "")

                filename = f"{session_clean}_{committee_short}.md"
                file_path = committee_dir / filename

                # マークダウンを生成
                markdown = self._generate_committee_markdown(committee, session, records)

                # ファイルに保存
                file_path.write_text(markdown, encoding="utf-8")

                logger.info(f"[OK] Generated {file_path.relative_to(self.OUTPUT_DIR.parent.parent)}")
                self.files_created.append(str(file_path))

    def print_summary(self):
        """サマリーを出力"""
        logger.info(f"\nGeneration Summary:")
        logger.info(f"Total files created: {len(self.files_created)}")
        logger.info(f"Total records processed: {len(self.records)}")

        # 委員会別の統計
        by_committee = defaultdict(int)
        for record in self.records:
            by_committee[record["committee"]] += 1

        logger.info(f"\nRecords by committee:")
        for committee in sorted(by_committee.keys()):
            logger.info(f"  - {committee}: {by_committee[committee]}")


def main():
    """メイン処理"""
    generator = CommitteeDetailFileGenerator()

    if not generator.load_data():
        return

    generator.generate_all_files()
    generator.print_summary()

    logger.info("File generation complete!")


if __name__ == "__main__":
    main()
