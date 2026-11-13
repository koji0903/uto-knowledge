#!/usr/bin/env python3
"""
宇土市議会 定例会 Markdown 自動生成スクリプト
council_minutes.json から定例会ごとの Markdown ファイルを生成
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

def extract_year_month(code: str) -> tuple:
    """R4-12 → (4, 12)"""
    parts = code.split('-')
    year = int(parts[0][1:])
    month = int(parts[1])
    return year, month

def generate_frontmatter(session_code: str, session_data: Dict[str, Any]) -> str:
    """フロントマター生成"""
    year, month = extract_year_month(session_code)
    era = f"令和{year+2018}年度"

    tags = [
        "定例会",
        f"R{year}年度",
        f"{month}月"
    ]

    frontmatter = f"""---
title: "{session_code} - 宇土市議会定例会"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: {json.dumps(tags, ensure_ascii=False)}
type: council-session
source: council_minutes.json
schemaVersion: 1.0.0
verified: true
---"""

    return frontmatter

def generate_questioner_table(questioners: List[Dict[str, Any]]) -> str:
    """質問者一覧テーブル生成"""
    table = "| 議席 | 氏名 | テーマ数 |\n"
    table += "|:----:|:----:|:----:|\n"

    for questioner in questioners:
        seat = questioner.get('seat', '-')
        name = questioner.get('name', '-')
        topic_count = len(questioner.get('topics', []))
        table += f"| {seat} | {name} | {topic_count} |\n"

    return table

def generate_questioner_details(questioners: List[Dict[str, Any]], session_code: str) -> str:
    """質問者別の詳細情報を生成"""
    details = "## 質問詳細\n\n"

    for questioner in questioners:
        name = questioner.get('name')
        seat = questioner.get('seat')
        topics = questioner.get('topics', [])
        tags = questioner.get('topicTags', [])

        details += f"### {seat}番 {name}\n\n"

        for i, topic in enumerate(topics):
            topic_tags = tags[i] if i < len(tags) else []
            tag_str = " | ".join(topic_tags) if topic_tags else "未分類"
            details += f"- **{topic}** ({tag_str})\n"

        details += "\n"

    return details

def generate_theme_ranking(session_code: str, questioners: List[Dict[str, Any]]) -> str:
    """テーマ別集計を生成"""
    theme_count = {}

    for questioner in questioners:
        tags = questioner.get('topicTags', [])
        for tag_list in tags:
            for tag in tag_list:
                theme_count[tag] = theme_count.get(tag, 0) + 1

    if not theme_count:
        return ""

    ranking_str = "## テーマ別集計\n\n"
    sorted_themes = sorted(theme_count.items(), key=lambda x: x[1], reverse=True)

    for theme, count in sorted_themes:
        ranking_str += f"- {theme}: {count}件\n"

    ranking_str += "\n"
    return ranking_str

def generate_council_markdown(session_code: str, session_data: Dict[str, Any]) -> str:
    """定例会 Markdown 全体生成"""

    questioners = session_data.get('questioners', [])
    item_count = session_data.get('itemCount', 0)
    questioner_count = session_data.get('questionerCount', 0)

    content = generate_frontmatter(session_code, session_data)
    content += "\n\n"

    # タイトルと統計
    year, month = extract_year_month(session_code)
    era = f"令和{year+2018}年度"
    content += f"# {session_code} 宇土市議会定例会\n\n"
    content += f"**時期:** {era} {month}月\n"
    content += f"**質問者数:** {questioner_count}名\n"
    content += f"**質問項目数:** {item_count}件\n\n"

    # 質問者一覧
    content += "## 質問者一覧\n\n"
    content += generate_questioner_table(questioners)
    content += "\n"

    # テーマ別集計
    content += generate_theme_ranking(session_code, questioners)

    # 質問詳細
    content += generate_questioner_details(questioners, session_code)

    # 関連リンク
    content += "## 関連リンク\n\n"
    content += f"- [[06_市政・議会/06_議会/index]]\n"
    content += f"- [[00_MOC_INDEX]]\n"

    return content

def main():
    """メイン処理"""

    # 入力ファイル
    input_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/council_minutes.json"

    # 出力ディレクトリ
    output_base = "/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/08_会期"
    os.makedirs(output_base, exist_ok=True)

    # JSON 読み込み
    council_data = load_json(input_file)
    sessions = council_data.get('sessions', [])

    print(f"Processing {len(sessions)} sessions...")

    generated_files = []
    for session in sessions:
        code = session.get('code')
        if not code:
            continue

        markdown_content = generate_council_markdown(code, session)

        # ファイル名生成: R4-12_定例会.md
        filename = f"{code}_定例会.md"
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
