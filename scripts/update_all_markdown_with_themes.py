#!/usr/bin/env python3
"""
宇土市議会 Phase 4: Markdown ファイル拡張
分類結果を既存の Markdown ファイルに反映
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class MarkdownThemeUpdater:
    """Markdown ファイルにテーマ分類を追加"""

    # 入力ファイル
    COUNCIL_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/council_with_themes.json")
    COMMITTEE_WITH_THEMES = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_with_themes.json")
    THEME_KEYWORD_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/theme_keyword_dictionary.json")

    # Markdown ファイルディレクトリ
    MARKDOWN_DIR = Path("/Volumes/ExtSSD/workspace/uto-knowledge/content/06_市政・議会")

    # テーマアイコン
    THEME_ICONS = {
        "子育て・教育": "🎓",
        "防災・安全": "🚨",
        "経済・産業": "💼",
        "インフラ・道路": "🏗️",
        "福祉・医療": "🏥",
        "行政・財政": "💰",
        "市民・地域": "👥",
        "都市・環境": "🌿",
    }

    def __init__(self):
        self.council_data = None
        self.committee_data = None
        self.keyword_data = None
        self.updated_files = []
        self.stats = {
            "files_updated": 0,
            "lines_added": 0,
        }

    def load_data(self) -> bool:
        """分類済みデータを読み込む"""
        try:
            if self.COUNCIL_WITH_THEMES.exists():
                with open(self.COUNCIL_WITH_THEMES, 'r', encoding='utf-8') as f:
                    self.council_data = json.load(f)
                logger.info("Loaded council data with themes")

            if self.COMMITTEE_WITH_THEMES.exists():
                with open(self.COMMITTEE_WITH_THEMES, 'r', encoding='utf-8') as f:
                    self.committee_data = json.load(f)
                logger.info("Loaded committee data with themes")

            if self.THEME_KEYWORD_FILE.exists():
                with open(self.THEME_KEYWORD_FILE, 'r', encoding='utf-8') as f:
                    self.keyword_data = json.load(f)
                logger.info("Loaded keyword dictionary")

            return True
        except Exception as e:
            logger.error(f"Failed to load data: {e}")
            return False

    def _format_themes(self, themes: List[Dict[str, Any]]) -> str:
        """テーマをマークダウン形式にフォーマット"""
        if not themes:
            return ""

        theme_strs = []
        for theme in themes[:3]:  # 最大3つまで表示
            name = theme.get("name", "")
            confidence = theme.get("confidence", 0)
            icon = self.THEME_ICONS.get(name, "📌")

            theme_strs.append(f"{icon} {name} ({confidence:.0%})")

        return " / ".join(theme_strs)

    def _generate_theme_section(self, themes: List[Dict[str, Any]], primary_theme: str) -> str:
        """テーマセクションを生成"""
        if not themes:
            return ""

        section = "\n**テーマ分類:**\n"
        for theme in themes[:3]:
            icon = self.THEME_ICONS.get(theme.get("name", ""), "📌")
            section += f"- {icon} {theme.get('name', '')} (confidence: {theme.get('confidence', 0):.0%})\n"

        return section

    def find_markdown_files(self) -> List[Path]:
        """Markdown ファイルを検索"""
        if not self.MARKDOWN_DIR.exists():
            logger.warning(f"Markdown directory not found: {self.MARKDOWN_DIR}")
            return []

        files = list(self.MARKDOWN_DIR.glob("**/*.md"))
        logger.info(f"Found {len(files)} Markdown files")
        return files

    def extract_session_from_filename(self, filename: str) -> Optional[str]:
        """ファイル名からセッション名を抽出
        例: "R4-12_定例会.md" → "R4-12"
        """
        match = re.search(r'(R\d+-\d+)', filename)
        if match:
            return match.group(1)
        return None

    def update_council_qa_files(self) -> bool:
        """定例会 QA ファイルを更新"""
        if not self.council_data:
            logger.warning("No council data to update")
            return True

        logger.info("Updating council QA markdown files...")

        # 定例会ファイルを検索
        council_dir = self.MARKDOWN_DIR / "01_定例会"
        if not council_dir.exists():
            logger.warning(f"Council directory not found: {council_dir}")
            return True

        files = list(council_dir.glob("*.md"))
        updated_count = 0

        for file in files:
            try:
                session_code = self.extract_session_from_filename(file.name)
                if not session_code:
                    continue

                # セッションデータを取得
                session_data = None
                for session in self.council_data.get("sessions", []):
                    if session_code in session.get("code", ""):
                        session_data = session
                        break

                if not session_data:
                    continue

                # ファイルを読み込む
                with open(file, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 各質問のテーマセクションを追加
                updated_content = content
                for question in session_data.get("questions", []):
                    question_text = question.get("question_text", "")[:100]
                    themes = question.get("themes", [])

                    if not themes:
                        continue

                    # 質問テキストを見つける
                    if question_text in content:
                        theme_section = self._generate_theme_section(themes, question.get("primary_theme", ""))
                        if theme_section and theme_section not in updated_content:
                            updated_content = updated_content.replace(
                                question_text,
                                question_text + theme_section,
                                1
                            )

                # ファイルが更新された場合のみ保存
                if updated_content != content:
                    with open(file, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    updated_count += 1
                    self.updated_files.append(str(file))
                    logger.info(f"Updated: {file.name}")

            except Exception as e:
                logger.warning(f"Error updating {file.name}: {e}")
                continue

        self.stats["files_updated"] += updated_count
        logger.info(f"Updated {updated_count} council QA files")
        return True

    def generate_theme_summary_file(self) -> bool:
        """テーマ別分析ファイルを生成"""
        logger.info("Generating theme summary files...")

        try:
            # テーマ分析ディレクトリを作成
            theme_dir = self.MARKDOWN_DIR / "08_テーマ別分析"
            theme_dir.mkdir(exist_ok=True)

            if not self.council_data and not self.committee_data:
                logger.warning("No data to generate theme summaries")
                return True

            # 各テーマについて統計を計算
            theme_stats = {}

            # 定例会から集計
            if self.council_data:
                for session in self.council_data.get("sessions", []):
                    for question in session.get("questions", []):
                        primary_theme = question.get("primary_theme", "その他")
                        if primary_theme not in theme_stats:
                            theme_stats[primary_theme] = {"council": 0, "committee": 0}
                        theme_stats[primary_theme]["council"] += 1

            # 委員会から集計
            if self.committee_data:
                for record in self.committee_data.get("records", []):
                    primary_theme = record.get("primary_theme", "その他")
                    if primary_theme not in theme_stats:
                        theme_stats[primary_theme] = {"council": 0, "committee": 0}
                    theme_stats[primary_theme]["committee"] += 1

            # 各テーマのファイルを生成
            for theme, stats in theme_stats.items():
                icon = self.THEME_ICONS.get(theme, "📌")
                filename = f"{theme}_質問一覧.md"
                filepath = theme_dir / filename

                content = f"""# {icon} {theme}

## 統計情報
- 定例会質問: {stats['council']}件
- 委員会発言: {stats['committee']}件
- 合計: {stats['council'] + stats['committee']}件

## 関連キーワード
"""

                # キーワードを追加
                if self.keyword_data and theme in self.keyword_data.get("themes", {}):
                    theme_kw = self.keyword_data["themes"][theme]
                    keywords = theme_kw.get("keywords", [])[:10]
                    content += f"{', '.join(keywords)}\n"

                content += """
## 見出し
（各テーマ別の詳細な分析内容をここに追加）
"""

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

                self.updated_files.append(str(filepath))
                logger.info(f"Generated: {filename}")

            self.stats["files_updated"] += len(theme_stats)
            return True

        except Exception as e:
            logger.error(f"Failed to generate theme summary: {e}")
            return False

    def update_member_profile(self, member_name: str) -> bool:
        """議員プロファイルを更新（例：土黒功司）"""
        logger.info(f"Updating member profile: {member_name}...")

        try:
            # 議員プロファイルファイルを検索
            member_dir = self.MARKDOWN_DIR / "02_選挙2026" / "candidates"
            if not member_dir.exists():
                logger.warning(f"Member directory not found: {member_dir}")
                return True

            # 議員ファイルを検索
            member_files = list(member_dir.glob(f"**/{member_name.lower()}*/**/*.md"))
            if not member_files:
                logger.warning(f"No profile files found for {member_name}")
                return True

            for profile_file in member_files:
                try:
                    with open(profile_file, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # テーマ別統計セクションを追加
                    theme_stats = self._get_member_theme_stats(member_name)
                    if theme_stats:
                        stats_section = self._generate_member_theme_stats_table(theme_stats)

                        # 既存のセクションを置換または追加
                        if "## 📊 テーマ別の活動集計" in content:
                            # 既存セクションを置換
                            pattern = r"## 📊 テーマ別の活動集計.*?(?=##|$)"
                            content = re.sub(pattern, stats_section, content, flags=re.DOTALL)
                        else:
                            # 新規セクションを追加
                            content += "\n\n" + stats_section

                        with open(profile_file, 'w', encoding='utf-8') as f:
                            f.write(content)

                        self.updated_files.append(str(profile_file))
                        logger.info(f"Updated: {profile_file.name}")

                except Exception as e:
                    logger.warning(f"Error updating {profile_file}: {e}")
                    continue

            return True

        except Exception as e:
            logger.error(f"Failed to update member profile: {e}")
            return False

    def _get_member_theme_stats(self, member_name: str) -> Dict[str, int]:
        """議員のテーマ別活動統計を計算"""
        stats = {}

        # 定例会から集計
        if self.council_data:
            for session in self.council_data.get("sessions", []):
                for question in session.get("questions", []):
                    if member_name in question.get("name", ""):
                        primary_theme = question.get("primary_theme", "その他")
                        stats[primary_theme] = stats.get(primary_theme, 0) + 1

        # 委員会から集計
        if self.committee_data:
            for record in self.committee_data.get("records", []):
                if member_name in record.get("speaker", {}).get("name", ""):
                    primary_theme = record.get("primary_theme", "その他")
                    stats[primary_theme] = stats.get(primary_theme, 0) + 1

        return stats

    def _generate_member_theme_stats_table(self, stats: Dict[str, int]) -> str:
        """議員テーマ別統計テーブルを生成"""
        total = sum(stats.values()) if stats else 0

        table = "## 📊 テーマ別の活動集計\n\n"
        table += "| テーマ | 件数 | 比率 |\n"
        table += "|-------|------|------|\n"

        for theme in sorted(stats.keys(), key=lambda x: stats[x], reverse=True):
            icon = self.THEME_ICONS.get(theme, "📌")
            count = stats[theme]
            ratio = (count / total * 100) if total > 0 else 0
            table += f"| {icon} {theme} | {count} | {ratio:.1f}% |\n"

        return table

    def save_statistics(self) -> bool:
        """更新統計を保存"""
        try:
            stats_file = Path("/Volumes/ExtSSD/workspace/uto-knowledge/markdown_update_stats.json")

            output = {
                "updated_at": datetime.now().isoformat(),
                "files_updated": self.stats["files_updated"],
                "updated_files": self.updated_files,
            }

            with open(stats_file, 'w', encoding='utf-8') as f:
                json.dump(output, f, ensure_ascii=False, indent=2)

            logger.info(f"Saved update statistics: {stats_file}")
            return True
        except Exception as e:
            logger.error(f"Failed to save statistics: {e}")
            return False

    def run(self) -> bool:
        """Markdown 更新パイプラインの実行"""
        logger.info("="*60)
        logger.info("Phase 4: Markdown ファイル拡張")
        logger.info("="*60)

        if not self.load_data():
            return False

        if not self.update_council_qa_files():
            logger.warning("Failed to update council QA files")

        if not self.generate_theme_summary_file():
            logger.warning("Failed to generate theme summary")

        if not self.update_member_profile("土黒功司"):
            logger.warning("Failed to update member profile")

        if not self.save_statistics():
            logger.warning("Failed to save statistics")

        logger.info(f"\nMarkdown Update Report:")
        logger.info(f"  Files Updated: {self.stats['files_updated']}")
        logger.info(f"  Updated Files: {len(self.updated_files)}")

        return True


def main():
    """メイン処理"""
    updater = MarkdownThemeUpdater()
    success = updater.run()

    if success:
        logger.info("\n✓ Phase 4: Markdown Update completed successfully")
        return 0
    else:
        logger.error("\n✗ Phase 4: Markdown Update had warnings")
        return 1


if __name__ == "__main__":
    exit(main())
