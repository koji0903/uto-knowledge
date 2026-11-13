#!/usr/bin/env python3
"""
宇土市議会 テーマ別分析 Markdown 自動生成スクリプト
council_minutes.json をテーマ別に集計し、テーマごとの質問一覧を生成
"""

import json
import os
from datetime import datetime
from collections import defaultdict
from typing import Dict, List, Any

def load_json(filepath: str) -> Dict[str, Any]:
    """JSON ファイル読み込み"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_frontmatter(theme_name: str) -> str:
    """フロントマター生成"""
    tags = ["テーマ分析", "質問一覧"]

    frontmatter = f"""---
title: "{theme_name} - 質問一覧"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: {json.dumps(tags, ensure_ascii=False)}
type: theme-analysis
source: council_minutes.json
schemaVersion: 1.0.0
verified: true
---"""

    return frontmatter

def extract_year_month(code: str) -> tuple:
    """R4-12 → (2022, 12)"""
    parts = code.split('-')
    year = int(parts[0][1:])
    month = int(parts[1])
    return year, month

def generate_theme_markdown(theme_name: str, questions: List[Dict[str, Any]]) -> str:
    """テーマ別分析 Markdown 生成"""

    content = generate_frontmatter(theme_name)
    content += "\n\n"

    # タイトルと統計
    content += f"# {theme_name} - 質問一覧\n\n"
    content += f"**質問件数:** {len(questions)}件\n"
    content += f"**対象期間:** R4-12 ～ R7-12\n\n"

    # 時系列テーブル
    content += "## 時系列\n\n"
    content += "| 定例会 | 質問者 | 項目 | テーマ |\n"
    content += "|:----:|:----:|:----:|:----:|\n"

    for question in questions:
        session_code = question.get('session_code', '')
        questioner = question.get('questioner', '')
        item = question.get('item', '')
        themes = question.get('themes', [])
        theme_str = " / ".join(themes) if themes else theme_name

        # セルの長さが長い場合は省略
        if len(item) > 30:
            item = item[:30] + "…"

        content += f"| {session_code} | {questioner} | {item} | {theme_str} |\n"

    content += "\n"

    # 質問者別集計
    questioner_count = defaultdict(int)
    for question in questions:
        questioner = question.get('questioner', '')
        questioner_count[questioner] += 1

    if questioner_count:
        content += "## 質問者別集計\n\n"
        sorted_questioners = sorted(questioner_count.items(), key=lambda x: x[1], reverse=True)

        content += "| 質問者 | 質問数 |\n"
        content += "|:----:|:----:|\n"

        for questioner, count in sorted_questioners:
            content += f"| {questioner} | {count}件 |\n"

        content += "\n"

    # 月別集計
    month_count = defaultdict(int)
    for question in questions:
        session_code = question.get('session_code', '')
        month_count[session_code] += 1

    if month_count:
        content += "## 定例会別集計\n\n"
        sorted_sessions = sorted(month_count.items())

        for session_code, count in sorted_sessions:
            content += f"- {session_code}: {count}件\n"

        content += "\n"

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
    output_base = "/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動/07_質問"
    os.makedirs(output_base, exist_ok=True)

    # JSON 読み込み
    council_data = load_json(input_file)

    # テーマごとに質問を集計
    theme_questions = defaultdict(list)

    sessions = council_data.get('sessions', [])
    for session in sessions:
        session_code = session.get('code', '')
        questioners = session.get('questioners', [])

        for questioner in questioners:
            questioner_name = questioner.get('name', '')
            topics = questioner.get('topics', [])
            topic_tags = questioner.get('topicTags', [])

            for i, topic in enumerate(topics):
                tags = topic_tags[i] if i < len(topic_tags) else []

                for tag in tags:
                    theme_questions[tag].append({
                        'session_code': session_code,
                        'questioner': questioner_name,
                        'item': topic,
                        'themes': tags
                    })

    # テーマが全く無い質問も記録（未分類）
    for session in sessions:
        session_code = session.get('code', '')
        questioners = session.get('questioners', [])

        for questioner in questioners:
            questioner_name = questioner.get('name', '')
            topics = questioner.get('topics', [])
            topic_tags = questioner.get('topicTags', [])

            for i, topic in enumerate(topics):
                tags = topic_tags[i] if i < len(topic_tags) else []
                if not tags:  # タグが無い場合
                    theme_questions['未分類'].append({
                        'session_code': session_code,
                        'questioner': questioner_name,
                        'item': topic,
                        'themes': []
                    })

    print(f"Processing {len(theme_questions)} themes...")

    generated_files = []
    for theme_name in sorted(theme_questions.keys()):
        questions = theme_questions[theme_name]

        # 定例会コード順にソート
        sorted_questions = sorted(questions, key=lambda x: (
            int(x['session_code'].split('-')[0][1:]),
            int(x['session_code'].split('-')[1])
        ))

        markdown_content = generate_theme_markdown(theme_name, sorted_questions)

        # ファイル名生成: 子育て・教育_質問一覧.md
        filename = f"{theme_name}_質問一覧.md"
        filepath = os.path.join(output_base, filename)

        # ファイル出力
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

        generated_files.append((filename, filepath))
        print(f"  ✓ Generated: {filename} ({len(sorted_questions)} questions)")

    print(f"\n✓ Total: {len(generated_files)} files generated")
    print(f"Output directory: {output_base}")

    return generated_files

if __name__ == "__main__":
    main()
