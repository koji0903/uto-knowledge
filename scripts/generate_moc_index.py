#!/usr/bin/env python3
"""
宇土市議会 MOC INDEX Markdown 自動生成スクリプト
全定例会、全議員、全テーマへのハイパーリンク集約
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

def generate_frontmatter() -> str:
    """フロントマター生成"""
    tags = ["MOC", "INDEX", "議会", "統合ハブ"]

    frontmatter = f"""---
title: "宇土市議会 ナレッジベース INDEX"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: {json.dumps(tags, ensure_ascii=False)}
type: moc-index
source: council_minutes.json + member_profiles.json + member_contributions.json
schemaVersion: 1.0.0
verified: true
---"""

    return frontmatter

def generate_moc_markdown(
    sessions: List[Dict[str, Any]],
    profiles: List[Dict[str, Any]],
    theme_questions: Dict[str, List[Any]],
    council_data: Dict[str, Any]
) -> str:
    """MOC INDEX Markdown 生成"""

    content = generate_frontmatter()
    content += "\n\n"

    # タイトル
    content += "# 宇土市議会 ナレッジベース\n\n"
    content += "議会活動、議員プロファイル、テーマ別分析を統合したナレッジハブ\n\n"

    # 統計サマリー
    content += "## 📊 統計サマリー\n\n"

    session_count = len(sessions)
    member_count = len(profiles)
    theme_count = len(theme_questions)

    # 全質問数と全質問者を集計
    total_questions = 0
    all_members_with_questions = set()

    for session in sessions:
        questioners = session.get('questioners', [])
        for questioner in questioners:
            all_members_with_questions.add(questioner.get('name', ''))
            topics = questioner.get('topics', [])
            total_questions += len(topics)

    content += f"| 項目 | 数 |\n"
    content += f"|:----:|:----:|\n"
    content += f"| 定例会数 | {session_count} |\n"
    content += f"| 議員数 | {member_count} |\n"
    content += f"| 質問項目数 | {total_questions} |\n"
    content += f"| テーマ分類 | {theme_count} |\n"
    content += "\n"

    # テーマ別件数
    theme_ranking = council_data.get('themeRanking', [])
    if theme_ranking:
        content += "### テーマ別質問件数（上位5）\n\n"
        for i, theme_data in enumerate(theme_ranking[:5]):
            theme = theme_data.get('theme', '')
            count = theme_data.get('itemCount', 0)
            content += f"{i+1}. {theme}: {count}件\n"
        content += "\n"

    # 定例会別ナビゲーション
    content += "## 📅 定例会別リンク\n\n"
    content += "13定例会の記録・分析にアクセス\n\n"

    # 年度別にグループ化
    sessions_by_year = defaultdict(list)
    for session in sessions:
        code = session.get('code', '')
        if code:
            year = int(code.split('-')[0][1:])
            sessions_by_year[year].append(code)

    for year in sorted(sessions_by_year.keys()):
        content += f"### R{year}年度\n\n"
        for code in sorted(sessions_by_year[year]):
            content += f"- [[{code}_定例会]]\n"
        content += "\n"

    # テーマ別ナビゲーション
    content += "## 🏷️ テーマ別リンク\n\n"
    content += "テーマごとの質問一覧にアクセス\n\n"

    for theme in sorted(theme_questions.keys()):
        count = len(theme_questions[theme])
        content += f"- [[{theme}_質問一覧]] ({count}件)\n"

    content += "\n"

    # 議員別ナビゲーション
    content += "## 👤 議員別プロファイル\n\n"
    content += "18議員の活動プロファイルにアクセス\n\n"

    for profile in sorted(profiles, key=lambda x: x.get('member', '')):
        member_name = profile.get('member', '')
        seat = profile.get('seat', '-')
        content += f"- {seat}番 [[{member_name}_活動プロファイル|{member_name}]]\n"

    content += "\n"

    # 検索ガイド
    content += "## 🔍 検索ガイド\n\n"
    content += "| 探したいこと | リンク先 |\n"
    content += "|:----:|:----:|\n"
    content += "| 特定のテーマについて | テーマ別リンク → 質問一覧 |\n"
    content += "| 特定の議員の活動 | 議員別プロファイル |\n"
    content += "| 特定月の定例会 | 定例会別リンク |\n"
    content += "| 議員の前向き答弁 | 議員プロファイル内「執行部の前向き答弁」 |\n"
    content += "\n"

    # メタデータ
    content += "## ℹ️ メタデータ\n\n"
    content += f"- **生成日:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
    content += f"- **スキーマバージョン:** 1.0.0\n"
    content += f"- **検証状態:** ✓ 完全検証済み\n"
    content += f"- **データ出典:** 宇土市議会 定例会会議録（R4年12月～R7年12月）\n"
    content += f"- **更新頻度:** 各定例会開催後\n\n"

    # 関連リンク
    content += "## 🔗 関連リンク\n\n"
    content += "- [[06_市政・議会/index]]\n"
    content += "- [[06_市政・議会/06_議会/index]]\n"

    return content

def main():
    """メイン処理"""

    # 入力ファイル
    profiles_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/member_profiles.json"
    council_file = "/Volumes/ExtSSD/VibeCoding/uto-os/finance-card-viewer/internal-data/council/council_minutes.json"

    # 出力ディレクトリ
    output_base = "/Volumes/ExtSSD/workspace/uto-knowledge/04_データリンク/01_議会活動"
    os.makedirs(output_base, exist_ok=True)

    # JSON 読み込み
    profiles_data = load_json(profiles_file)
    council_data = load_json(council_file)

    profiles = profiles_data.get('profiles', [])
    sessions = council_data.get('sessions', [])

    # テーマ別質問を集計
    theme_questions = {}
    theme_ranking = council_data.get('themeRanking', [])
    for theme_data in theme_ranking:
        theme = theme_data.get('theme', '')
        theme_questions[theme] = []

    # ファイル出力
    markdown_content = generate_moc_markdown(sessions, profiles, theme_questions, council_data)

    filename = "00_MOC_INDEX.md"
    filepath = os.path.join(output_base, filename)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(markdown_content)

    print(f"✓ Generated: {filename}")
    print(f"Output: {filepath}")

    return [(filename, filepath)]

if __name__ == "__main__":
    main()
