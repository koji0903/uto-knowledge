#!/usr/bin/env python3
"""
宇土市議会 委員会統計 Markdown 自動生成スクリプト
committee_minutes.json と committee_minutes_r7.json から委員会別統計を生成
"""

import json
import os
from datetime import datetime
from typing import Dict, List, Any

def load_json(filepath: str) -> Dict[str, Any]:
    """JSON ファイル読み込み"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_frontmatter(title: str, period: str) -> str:
    """フロントマター生成"""
    tags = ["委員会", "統計"]

    frontmatter = f"""---
title: "{title}"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: {json.dumps(tags, ensure_ascii=False)}
type: committee-summary
source: committee_minutes.json, committee_minutes_r7.json
schemaVersion: 1.0.0
verified: true
---"""

    return frontmatter

def generate_committee_markdown(data: Dict[str, Any], period: str) -> str:
    """委員会統計 Markdown 生成"""

    title = f"常任委員会統計 ({period})"
    content = generate_frontmatter(title, period)
    content += "\n\n"

    # タイトルと統計
    content += f"# 常任委員会統計\n\n"
    content += f"**時期:** {period}\n\n"

    # 概要統計
    session_count = data.get('sessionCount', 0)
    meeting_count = data.get('meetingCount', 0)
    total_remarks = data.get('totalRemarks', 0)

    content += "## 概要統計\n\n"
    content += f"| 項目 | 数 |\n"
    content += f"|:----:|:----:|\n"
    content += f"| 定例会数 | {session_count} |\n"
    content += f"| 委員会数 | {meeting_count} |\n"
    content += f"| 総発言数 | {total_remarks}件 |\n"
    content += "\n"

    # 委員会別統計
    committee_activity = data.get('committeeActivity', [])
    if committee_activity:
        content += "## 委員会別統計\n\n"
        content += "| 委員会 | 会議数 | 発言数 | 平均発言数 |\n"
        content += "|:----:|:----:|:----:|:----:|\n"

        for committee in committee_activity:
            name = committee.get('committee', '')
            meetings = committee.get('meetings', 0)
            remarks = committee.get('remarks', 0)
            avg_remarks = remarks / meetings if meetings > 0 else 0

            content += f"| {name} | {meetings} | {remarks} | {avg_remarks:.1f} |\n"

        content += "\n"

    # 議員別活動（上位10）
    member_activity = data.get('memberActivity', [])
    if member_activity:
        content += "## 議員別発言数（上位10）\n\n"
        content += "| 議員 | 発言数 | 総務市民 | 経済建設 | 文教厚生 |\n"
        content += "|:----:|:----:|:----:|:----:|:----:|\n"

        for i, member in enumerate(member_activity[:10]):
            name = member.get('member', '')
            remarks = member.get('remarks', 0)
            by_committee = member.get('byCommittee', {})

            total = by_committee.get('総務市民', 0)
            econ = by_committee.get('経済建設', 0)
            edu = by_committee.get('文教厚生', 0)

            content += f"| {name} | {remarks} | {total} | {econ} | {edu} |\n"

        content += "\n"

    # 関連リンク
    content += "## 関連リンク\n\n"
    content += f"- [[06_市政・議会/06_議会/index]]\n"
    content += f"- [[00_MOC_INDEX]]\n"

    return content

def main():
    """メイン処理"""

    # 入力ファイル
    committee_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/committee_minutes.json"
    committee_r7_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/committee_minutes_r7.json"

    # 出力ディレクトリ
    output_base = "/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/02_委員会"
    os.makedirs(output_base, exist_ok=True)

    generated_files = []

    # R4-R6 委員会統計
    if os.path.exists(committee_file):
        committee_data = load_json(committee_file)
        markdown_content = generate_committee_markdown(committee_data, "R4-R6年度")

        filename = "R4-R6_常任委員会統計.md"
        filepath = os.path.join(output_base, filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

        generated_files.append((filename, filepath))
        print(f"  ✓ Generated: {filename}")

    # R7 委員会統計
    if os.path.exists(committee_r7_file):
        committee_r7_data = load_json(committee_r7_file)
        markdown_content = generate_committee_markdown(committee_r7_data, "R7年度")

        filename = "R7_常任委員会統計.md"
        filepath = os.path.join(output_base, filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

        generated_files.append((filename, filepath))
        print(f"  ✓ Generated: {filename}")

    print(f"\n✓ Total: {len(generated_files)} files generated")
    print(f"Output directory: {output_base}")

    return generated_files

if __name__ == "__main__":
    main()
