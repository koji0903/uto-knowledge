#!/usr/bin/env python3
"""
宇土市議会 議員別プロファイル Markdown 自動生成スクリプト
member_profiles.json と member_contributions.json から議員ごとの Markdown ファイルを生成
"""

import json
import os
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any

def load_json(filepath: str) -> Dict[str, Any]:
    """JSON ファイル読み込み"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_frontmatter(member_name: str) -> str:
    """フロントマター生成"""
    tags = ["議員", "活動プロファイル"]

    frontmatter = f"""---
title: "{member_name} - 活動プロファイル"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: {json.dumps(tags, ensure_ascii=False)}
type: member-profile
source: member_profiles.json + member_contributions.json
schemaVersion: 1.0.0
verified: true
---"""

    return frontmatter

def generate_member_markdown(profile: Dict[str, Any], contribution: Dict[str, Any] = None) -> str:
    """議員プロファイル Markdown 生成"""

    member_name = profile.get('member', '')
    seat = profile.get('seat', '-')

    content = generate_frontmatter(member_name)
    content += "\n\n"

    # タイトルと基本情報
    content += f"# {member_name} 活動プロファイル\n\n"
    content += f"**議席:** {seat}番\n\n"

    # 一般質問セクション
    gen_questions = profile.get('generalQuestions', {})
    sessions_attended = gen_questions.get('sessions', 0)
    items_count = gen_questions.get('items', 0)
    theme_count = gen_questions.get('themeCount', 0)
    top_themes = gen_questions.get('topThemes', [])

    content += "## 一般質問\n\n"
    content += f"- **出席定例会数:** {sessions_attended}\n"
    content += f"- **質問項目数:** {items_count}\n"
    content += f"- **テーマ数:** {theme_count}\n"
    content += f"- **出席率:** {(sessions_attended/13)*100:.0f}%\n\n"

    # テーマ別集計
    if top_themes:
        content += "### テーマ別集計\n\n"
        for theme in top_themes:
            theme_name = theme.get('theme', '')
            count = theme.get('count', 0)
            content += f"- {theme_name}: {count}件\n"
        content += "\n"

    # 質問例
    examples = gen_questions.get('examples', [])
    if examples:
        content += "### 質問例\n\n"
        for example in examples[:5]:
            era = example.get('era', '')
            title = example.get('title', '')
            tags = example.get('tags', [])
            tag_str = " | ".join(tags) if tags else "未分類"
            content += f"- **{era}** {title} ({tag_str})\n"
        content += "\n"

    # 委員会活動セクション
    committee = profile.get('committee', {})
    remarks_count = committee.get('remarks', 0)
    main_committee = committee.get('mainCommittee', '-')

    content += "## 委員会活動\n\n"
    content += f"- **発言数:** {remarks_count}件\n"
    content += f"- **主な委員会:** {main_committee}\n"

    by_committee = committee.get('byCommittee', {})
    if by_committee:
        content += "\n### 委員会別発言数\n\n"
        for committee_name, count in by_committee.items():
            content += f"- {committee_name}: {count}件\n"
        content += "\n"

    # 前向き答弁（あれば）
    if contribution:
        forward_answers = contribution.get('forwardAnswers', {})
        total_answers = contribution.get('forwardAnswerTotal', 0)

        content += "## 執行部の前向き答弁\n\n"
        content += f"- **合計:** {total_answers}件\n\n"

        if forward_answers:
            content += "### 答弁分類\n\n"
            for category, count in forward_answers.items():
                content += f"- {category}: {count}件\n"
            content += "\n"

        # 継続テーマ
        continuity_themes = contribution.get('continuityThemes', [])
        if continuity_themes:
            content += "### 継続テーマ（3定例会以上）\n\n"
            for theme in continuity_themes:
                theme_name = theme.get('theme', '')
                sessions = theme.get('sessions', 0)
                content += f"- {theme_name}: {sessions}定例会\n"
            content += "\n"

    # バッジ
    badges = profile.get('badges', [])
    if badges:
        content += "## 活動バッジ\n\n"
        for badge in badges:
            content += f"- {badge}\n"
        content += "\n"

    # 関連リンク
    content += "## 関連リンク\n\n"
    content += f"- [[06_市政・議会/06_議会/index]]\n"
    content += f"- [[00_MOC_INDEX]]\n"

    return content

def main():
    """メイン処理"""

    # 入力ファイル
    profiles_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/member_profiles.json"
    contributions_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/member_contributions.json"

    # 出力ディレクトリ
    output_base = "/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/05_議員"
    os.makedirs(output_base, exist_ok=True)

    # JSON 読み込み
    profiles_data = load_json(profiles_file)
    contributions_data = load_json(contributions_file)

    # 議員名から貢献データへマッピング
    contribution_map = {}
    for contrib in contributions_data.get('profiles', []):
        member_name = contrib.get('member')
        if member_name:
            contribution_map[member_name] = contrib

    profiles = profiles_data.get('profiles', [])

    print(f"Processing {len(profiles)} members...")

    generated_files = []
    for profile in profiles:
        member_name = profile.get('member', '')
        if not member_name:
            continue

        contribution = contribution_map.get(member_name)
        markdown_content = generate_member_markdown(profile, contribution)

        # ファイル名生成: 土黒功司_活動プロファイル.md
        filename = f"{member_name}_活動プロファイル.md"
        filepath = os.path.join(output_base, filename)

        # ファイル出力
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

        generated_files.append((filename, filepath))
        print(f"  ✓ Generated: {filename}")

    print(f"\n✓ Total: {len(generated_files)} files generated")
    print(f"Output directory: {output_base}")

    return generated_files

if __name__ == "__main__":
    main()
