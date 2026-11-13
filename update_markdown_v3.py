#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
テーマ分類情報でMarkdownファイルを更新するスクリプト v3
日本語ファイル名に対応
"""

import json
import os
import re
from pathlib import Path
from collections import defaultdict
from typing import Dict, List

# パス定義
BASE_PATH = Path("/Volumes/ExtSSD/workspace/uto-knowledge")
CLASSIFIED_JSON = BASE_PATH / "council_detailed_qa_classified.json"
MEMBERS_DIR = BASE_PATH / "04_データリンク/01_議会活動/05_議員"
MOC_INDEX_FILE = BASE_PATH / "04_データリンク/01_議会活動/00_MOC_INDEX.md"

THEME_EMOJI = {
    "子育て・教育": "🎓",
    "防災・安全": "🛡️",
    "市民・地域": "👥",
    "福祉・医療": "🏥",
    "経済・産業": "💼",
    "インフラ・道路": "🏗️",
    "行政・財政": "💰",
    "都市・環境": "🌳",
    "その他": "📌",
}


def load_classified_data() -> Dict:
    """分類済みのJSONデータを読み込む"""
    with open(CLASSIFIED_JSON, 'r', encoding='utf-8') as f:
        return json.load(f)


def generate_member_profile_section(member_name: str, questions: List[Dict]) -> str:
    """議員プロファイル用のテーマ別統計セクションを生成"""
    if not questions:
        return ""

    # テーマ別集計
    theme_counts = defaultdict(int)
    sessions_per_theme = defaultdict(set)

    for q in questions:
        primary = q['classification']['primary_theme']
        theme_counts[primary] += 1
        session_id = '-'.join(q['id'].split('-')[0:2])
        sessions_per_theme[primary].add(session_id)

    lines = []
    lines.append("## 📊 テーマ別の活動集計（定例会）\n")
    lines.append("### 統計表\n")
    lines.append("| テーマ | 件数 | 比率 | 継続性 |")
    lines.append("|------|-----|------|--------|")

    total = sum(theme_counts.values())
    for theme in sorted(theme_counts.keys(), key=lambda x: theme_counts[x], reverse=True):
        emoji = THEME_EMOJI.get(theme, "📌")
        count = theme_counts[theme]
        ratio = f"{count/total*100:.0f}%" if total > 0 else "-"
        stars = "⭐" * min(5, max(1, len(sessions_per_theme[theme])))
        lines.append(f"| {emoji} {theme} | {count}件 | {ratio} | {stars} |")

    lines.append("\n### 重点テーマ分析\n")

    # 上位3テーマについて詳細分析
    for theme in sorted(theme_counts.keys(), key=lambda x: theme_counts[x], reverse=True)[:3]:
        count = theme_counts[theme]
        ratio = f"{count/total*100:.0f}%" if total > 0 else "-"
        emoji = THEME_EMOJI.get(theme, "📌")
        session_count = len(sessions_per_theme[theme])

        lines.append(f"**{emoji} {theme}（{count}件 = {ratio}）**")
        lines.append(f"- 継続性: {session_count}定例会で継続質問")

        # このテーマの質問例を取得
        theme_questions = [q for q in questions if q['classification']['primary_theme'] == theme]
        lines.append("- 主要サブテーマ:")

        # セカンダリテーマの集計
        secondary_themes = defaultdict(int)
        for q in theme_questions:
            for sec in q['classification']['secondary_themes']:
                secondary_themes[sec['name']] += 1

        for sec_theme, sec_count in sorted(secondary_themes.items(), key=lambda x: x[1], reverse=True)[:3]:
            lines.append(f"  - {sec_theme}（{sec_count}件）")

        lines.append("")

    return "\n".join(lines)


def update_member_profile(member_file: Path, member_name: str, all_questions: List[Dict]) -> bool:
    """議員プロファイルをテーマ別活動集計で更新"""
    if not member_file.exists():
        return False

    # この議員の質問をフィルタ
    member_questions = [q for q in all_questions if q['name'] == member_name]

    if not member_questions:
        return False

    with open(member_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # テーマ別活動集計セクションを生成
    theme_section = generate_member_profile_section(member_name, member_questions)

    # 既存の「## 📊 テーマ別の活動集計（定例会）」セクションを置き換える
    # または「## 委員会活動」の前に挿入
    if "## 📊 テーマ別の活動集計（定例会）" in content:
        pattern = r"## 📊 テーマ別の活動集計（定例会）\n.*?(?=## |$)"
        content = re.sub(pattern, theme_section, content, flags=re.DOTALL)
    elif "## 委員会活動" in content:
        # 委員会活動の前に挿入
        content = content.replace("## 委員会活動", theme_section + "## 委員会活動")
    else:
        # ファイルの最後に追加
        content = content.rstrip() + "\n\n" + theme_section

    with open(member_file, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def update_moc_index(all_questions: List[Dict]) -> bool:
    """MOC INDEXを更新"""
    if not MOC_INDEX_FILE.exists():
        return False

    # テーマ別集計
    theme_summary = defaultdict(int)
    for q in all_questions:
        primary = q['classification']['primary_theme']
        theme_summary[primary] += 1

    with open(MOC_INDEX_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # テーマ別ナビゲーションセクションを生成
    lines = []
    lines.append("## 🎯 テーマ別ナビゲーション\n")

    total = sum(theme_summary.values())
    lines.append(f"### 最新テーマ統計（全{total}件）\n")

    lines.append("| テーマ | 件数 | リンク |")
    lines.append("|------|------|------|")

    for theme in sorted(theme_summary.keys(), key=lambda x: theme_summary[x], reverse=True):
        emoji = THEME_EMOJI.get(theme, "📌")
        count = theme_summary[theme]
        theme_filename = f"{theme}_質問一覧"
        lines.append(f"| {emoji} {theme} | {count}件 | [[{theme_filename}]] |")

    lines.append("")
    nav_section = "\n".join(lines)

    # 既存のセクションを置き換えるか追加
    if "## 🎯 テーマ別ナビゲーション" in content:
        pattern = r"## 🎯 テーマ別ナビゲーション\n.*?(?=## |$)"
        content = re.sub(pattern, nav_section, content, flags=re.DOTALL)
    else:
        content = content.rstrip() + "\n\n" + nav_section

    with open(MOC_INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def main():
    """メイン処理"""
    print("=" * 80)
    print("Markdown ファイル更新スクリプト v3 開始")
    print("=" * 80)

    # 分類済みデータを読み込み
    print("\n1. 分類済みデータを読み込み中...")
    data = load_classified_data()
    all_questions = data['questions']
    print(f"   ✓ {len(all_questions)}件の質問データを読み込みました")

    # 議員リストを取得
    members = set()
    for q in all_questions:
        members.add(q['name'])
    print(f"   ✓ {len(members)}人の議員を確認しました: {', '.join(sorted(members))}")

    # 議員プロファイルを更新
    print("\n2. 議員プロファイルを更新中...")
    updated_count = 0

    # iterdir を使用してファイルを列挙（日本語ファイル名対応）
    for member_file in sorted(MEMBERS_DIR.iterdir()):
        if not member_file.is_file():
            continue
        if not member_file.name.endswith('_活動プロファイル.md'):
            continue

        member_name = member_file.stem.replace('_活動プロファイル', '')

        if member_name in members:
            if update_member_profile(member_file, member_name, all_questions):
                updated_count += 1
                print(f"   ✓ {member_file.name} を更新しました")
        else:
            print(f"   - {member_file.name} (JSONデータにない議員)")

    print(f"   合計: {updated_count} ファイルを更新")

    # MOC INDEXを更新
    print("\n3. MOC INDEXを更新中...")
    if update_moc_index(all_questions):
        print(f"   ✓ MOC_INDEX.md を更新しました")

    print("\n" + "=" * 80)
    print("✓ 議員プロファイルとMOC INDEX の更新が完了しました")
    print("=" * 80)


if __name__ == "__main__":
    main()
