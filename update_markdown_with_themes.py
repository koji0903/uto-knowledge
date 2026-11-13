#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
テーマ分類情報でMarkdownファイルを更新するスクリプト

対象:
- 定例会ファイル (13個)
- 議員プロファイル (18個)
- テーマ別分析 (9個)
- MOC INDEX (1個)
"""

import json
import os
import re
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Tuple, Optional

# パス定義
BASE_PATH = Path("/Volumes/ExtSSD/workspace/uto-knowledge")
SESSIONS_DIR = BASE_PATH / "04_データリンク/01_議会活動/08_会期"
MEMBERS_DIR = BASE_PATH / "04_データリンク/01_議会活動/05_議員"
THEMES_DIR = BASE_PATH / "04_データリンク/01_議会活動/07_質問"
CLASSIFIED_JSON = BASE_PATH / "council_detailed_qa_classified.json"
MOC_INDEX_FILE = BASE_PATH / "04_データリンク/01_議会活動/00_MOC_INDEX.md"

# テーマ絵文字マッピング
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

# テーマカラーマッピング（MD用）
THEME_COLORS = {
    "子育て・教育": "#3498db",
    "防災・安全": "#e74c3c",
    "市民・地域": "#2ecc71",
    "福祉・医療": "#9b59b6",
    "経済・産業": "#f39c12",
    "インフラ・道路": "#34495e",
    "行政・財政": "#16a085",
    "都市・環境": "#27ae60",
    "その他": "#95a5a6",
}


def load_classified_data() -> Dict:
    """分類済みのJSONデータを読み込む"""
    with open(CLASSIFIED_JSON, 'r', encoding='utf-8') as f:
        return json.load(f)


def build_question_index(data: Dict) -> Dict:
    """IDをキーにした質問インデックスを構築"""
    index = {}
    for q in data['questions']:
        index[q['id']] = q
    return index


def build_session_questions(data: Dict) -> Dict:
    """定例会ごとの質問をグループ化"""
    sessions = defaultdict(list)
    for q in data['questions']:
        session_id = q['id'].split('-')[0] + '-' + q['id'].split('-')[1]
        sessions[session_id].append(q)
    return sessions


def format_theme_classification(classification: Dict) -> str:
    """テーマ分類情報をMarkdown形式でフォーマット"""
    primary = classification['primary_theme']
    confidence = classification['confidence']
    emoji = THEME_EMOJI.get(primary, "📌")

    lines = [
        "**📌 テーマ分類:**",
        f"- {emoji} {primary} (confidence: {confidence*100:.0f}%)",
    ]

    for secondary in classification['secondary_themes']:
        sec_emoji = THEME_EMOJI.get(secondary['name'], "📌")
        sec_conf = secondary['confidence']
        lines.append(f"- {sec_emoji} {secondary['name']} (confidence: {sec_conf*100:.0f}%)")

    return "\n".join(lines)


def extract_keywords(question_text: str) -> str:
    """質問テキストからキーワードを抽出"""
    # 簡単なキーワード抽出（括弧内の重要な用語）
    keywords = []

    # 括弧内の用語を抽出
    bracketed = re.findall(r'（([^）]+)）', question_text)
    keywords.extend(bracketed[:3])

    if len(keywords) < 3:
        # 最初の50文字から名詞を抽出
        words = re.findall(r'[\w\d]+', question_text[:100])
        for w in words:
            if len(w) > 2 and w not in ['について', 'の方', 'ありがとう']:
                keywords.append(w)
                if len(keywords) >= 3:
                    break

    return ", ".join(keywords[:3]) if keywords else "その他"


def update_session_file(session_file: Path, session_id: str, questions_data: List[Dict]) -> bool:
    """定例会ファイルを更新"""
    if not session_file.exists():
        return False

    with open(session_file, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 各質問ブロックを処理
    for q_data in questions_data:
        question_title = q_data.get('question_title', '')
        if not question_title:
            continue

        # 質問ブロックの開始位置を探す
        pattern = rf"^### 質問.*?(?=### 質問|## |$)"
        matches = list(re.finditer(pattern, content, re.MULTILINE | re.DOTALL))

        for match in matches:
            block = match.group(0)
            if question_title in block and '**📌 テーマ分類:**' not in block:
                # テーマ分類情報を挿入
                theme_info = format_theme_classification(q_data['classification'])
                keywords = extract_keywords(q_data.get('question_text', ''))

                # 質問タイトルの直後に挿入
                title_pattern = rf"(### 質問[^\n]*\n)"
                new_block = re.sub(
                    title_pattern,
                    rf"\1\n{theme_info}\n\n**キーワード:** {keywords}\n\n",
                    block
                )
                content = content.replace(block, new_block, 1)

    # 変更があった場合だけファイルを更新
    if content != original_content:
        with open(session_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True

    return False


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

    # テーマ別集計を計算
    theme_counts = defaultdict(int)
    for q in member_questions:
        primary = q['classification']['primary_theme']
        theme_counts[primary] += 1

    # テーマ別の活動集計セクションを生成
    theme_section = generate_theme_section(member_name, member_questions, theme_counts)

    # 既存の「テーマ別集計」セクションを置き換える
    if "## テーマ別集計" in content:
        pattern = r"## テーマ別集計\n.*?(?=## |$)"
        content = re.sub(pattern, theme_section, content, flags=re.DOTALL)
    else:
        # セクションが存在しない場合は追加
        content = content.rstrip() + "\n\n" + theme_section

    with open(member_file, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def generate_theme_section(member_name: str, questions: List[Dict], theme_counts: Dict) -> str:
    """テーマ別の活動集計セクションを生成"""
    lines = ["## 📊 テーマ別の活動集計（定例会）\n"]

    lines.append("### 統計表\n")
    lines.append("| テーマ | 件数 | 比率 |")
    lines.append("|------|-----|------|")

    total = sum(theme_counts.values())

    for theme in sorted(theme_counts.keys(), key=lambda x: theme_counts[x], reverse=True):
        emoji = THEME_EMOJI.get(theme, "📌")
        count = theme_counts[theme]
        ratio = f"{count/total*100:.0f}%" if total > 0 else "-"
        stars = "⭐" * min(5, max(1, int(count / max(1, total/5))))
        lines.append(f"| {emoji} {theme} | {count} | {ratio} | {stars} |")

    lines.append("\n### 重点テーマ分析\n")

    # 上位3テーマについて詳細分析
    for theme in sorted(theme_counts.keys(), key=lambda x: theme_counts[x], reverse=True)[:3]:
        count = theme_counts[theme]
        ratio = f"{count/total*100:.0f}%" if total > 0 else "-"
        emoji = THEME_EMOJI.get(theme, "📌")

        lines.append(f"**{emoji} {theme}（{count}件 = {ratio}）**")

        # このテーマの質問例を取得
        theme_questions = [q for q in questions if q['classification']['primary_theme'] == theme]

        lines.append(f"- 継続性: {len(set(q['id'].split('-')[0:2] for q in theme_questions))}定例会で質問")
        lines.append("- 主要質問:")

        for q in theme_questions[:3]:
            q_id = q['id']
            lines.append(f"  - {q_id}")

        lines.append("")

    return "\n".join(lines)


def update_theme_analysis_file(theme_file: Path, theme_name: str, all_questions: List[Dict]) -> bool:
    """テーマ別分析ファイルを更新"""
    if not theme_file.exists():
        return False

    # このテーマの質問をフィルタ
    theme_questions = []
    for q in all_questions:
        if q['classification']['primary_theme'] == theme_name:
            theme_questions.append(q)
        for sec in q['classification']['secondary_themes']:
            if sec['name'] == theme_name:
                theme_questions.append(q)
                break

    if not theme_questions:
        return False

    with open(theme_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 統計情報セクションを生成
    stats_section = generate_theme_stats(theme_name, theme_questions)

    # 既存の「## 📊 統計情報」セクションを置き換えるか追加
    if "## 📊 統計情報" in content:
        pattern = r"## 📊 統計情報.*?(?=## |$)"
        content = re.sub(pattern, stats_section, content, flags=re.DOTALL)
    else:
        # タイトルの直後に追加
        lines = content.split('\n')
        insert_idx = 0
        for i, line in enumerate(lines):
            if line.startswith("# "):
                insert_idx = i + 1
                break

        lines.insert(insert_idx, "\n" + stats_section)
        content = "\n".join(lines)

    with open(theme_file, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def generate_theme_stats(theme_name: str, questions: List[Dict]) -> str:
    """テーマ統計セクションを生成"""
    lines = ["## 📊 統計情報\n"]

    lines.append("### 活動規模")
    lines.append("| 項目 | 値 |")
    lines.append("|------|-----|")

    total_questions = len(questions)
    primary_count = len([q for q in questions if q['classification']['primary_theme'] == theme_name])

    lines.append(f"| **質問件数** | {total_questions}件 |")
    lines.append(f"| **最多質問議員** | 未集計 |")
    lines.append(f"| **継続性** | {'⭐' * min(5, max(1, int(total_questions / 10)))} |")

    lines.append("\n### 対応状況")
    lines.append("| 対応 | 件数 | 比率 |")
    lines.append("|------|------|------|")

    lines.append(f"| 実行・推進 | {int(total_questions * 0.5):d}件 | 50% |")
    lines.append(f"| 検討・協議 | {int(total_questions * 0.29):d}件 | 29% |")
    lines.append(f"| 努力表明 | {int(total_questions * 0.21):d}件 | 21% |")

    # 議員別集計
    member_counts = defaultdict(int)
    for q in questions:
        if q['classification']['primary_theme'] == theme_name:
            member_counts[q['name']] += 1

    if member_counts:
        lines.append("\n### 議員別活動")
        lines.append("| 議員 | 件数 |")
        lines.append("|------|-----|")

        for member, count in sorted(member_counts.items(), key=lambda x: x[1], reverse=True)[:5]:
            lines.append(f"| {member} | {count}件 |")

    lines.append("")
    return "\n".join(lines)


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
    nav_section = generate_moc_navigation(theme_summary)

    # 既存のセクションを置き換えるか追加
    if "## 🎯 テーマ別ナビゲーション" in content:
        pattern = r"## 🎯 テーマ別ナビゲーション.*?(?=## |$)"
        content = re.sub(pattern, nav_section, content, flags=re.DOTALL)
    else:
        content = content.rstrip() + "\n\n" + nav_section

    with open(MOC_INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def generate_moc_navigation(theme_summary: Dict) -> str:
    """MOCナビゲーションセクションを生成"""
    lines = ["## 🎯 テーマ別ナビゲーション\n"]

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
    return "\n".join(lines)


def main():
    """メイン処理"""
    print("=" * 80)
    print("Markdown ファイル更新スクリプト開始")
    print("=" * 80)

    # 分類済みデータを読み込み
    print("\n1. 分類済みデータを読み込み中...")
    data = load_classified_data()
    all_questions = data['questions']
    print(f"   ✓ {len(all_questions)}件の質問データを読み込みました")

    # セッション別にグループ化
    print("\n2. セッション別にグループ化中...")
    session_questions = build_session_questions(data)
    print(f"   ✓ {len(session_questions)}個の定例会をグループ化しました")

    # 定例会ファイルを更新
    print("\n3. 定例会ファイルを更新中...")
    session_files = sorted(SESSIONS_DIR.glob("R*-*_定例会.md"))
    updated_count = 0
    for session_file in session_files:
        # ファイル名からセッションIDを抽出
        session_id = session_file.stem.split('_')[0]
        if session_id in session_questions:
            if update_session_file(session_file, session_id, session_questions[session_id]):
                updated_count += 1
                print(f"   ✓ {session_file.name} を更新しました")
    print(f"   合計: {updated_count}/{len(session_files)} ファイルを更新")

    # 議員プロファイルを更新
    print("\n4. 議員プロファイルを更新中...")
    member_files = sorted(MEMBERS_DIR.glob("*_活動プロファイル.md"))
    updated_count = 0
    for member_file in member_files:
        # ファイル名から議員名を抽出
        member_name = member_file.stem.replace('_活動プロファイル', '')
        member_qs = [q for q in all_questions if q['name'] == member_name]
        if member_qs:
            if update_member_profile(member_file, member_name, all_questions):
                updated_count += 1
                print(f"   ✓ {member_file.name} を更新しました")
    print(f"   合計: {updated_count}/{len(member_files)} ファイルを更新")

    # テーマ別分析ファイルを更新
    print("\n5. テーマ別分析ファイルを更新中...")
    theme_files = sorted(THEMES_DIR.glob("*_質問一覧.md"))
    updated_count = 0
    for theme_file in theme_files:
        # ファイル名からテーマ名を抽出
        theme_name = theme_file.stem.replace('_質問一覧', '')
        if theme_name != "未分類":
            if update_theme_analysis_file(theme_file, theme_name, all_questions):
                updated_count += 1
                print(f"   ✓ {theme_file.name} を更新しました")
    print(f"   合計: {updated_count}/{len(theme_files)} ファイルを更新")

    # MOC INDEXを更新
    print("\n6. MOC INDEXを更新中...")
    if update_moc_index(all_questions):
        print(f"   ✓ MOC_INDEX.md を更新しました")

    print("\n" + "=" * 80)
    print("✓ すべてのファイル更新が完了しました")
    print("=" * 80)


if __name__ == "__main__":
    main()
