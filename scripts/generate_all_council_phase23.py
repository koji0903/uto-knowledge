#!/usr/bin/env python3
"""
宇土市議会 Phase 2・3 統合実行スクリプト
委員会 PDF 抽出 → JSON 構造化 → Markdown 生成 → 既存ファイル拡張
"""

import sys
import subprocess
import logging
from pathlib import Path
from datetime import datetime

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# スクリプトディレクトリ
SCRIPTS_DIR = Path(__file__).parent


class Phase23Pipeline:
    """Phase 2・3 パイプライン"""

    PHASE2_SCRIPTS = [
        "extract_committee_pdf_text.py",
        "generate_committee_detailed_json.py",
        "generate_committee_detail_files.py",
    ]

    PHASE3_SCRIPTS = [
        "expand_council_markdown_detailed.py",
        "expand_member_profiles_detailed.py",
        "expand_theme_analysis_detailed.py",
    ]

    def __init__(self, mode: str = "full"):
        """
        mode: 'test' (R7-3月総務 + R4-12 のみ) または 'full' (本番)
        """
        self.mode = mode
        self.executed_scripts = []
        self.failed_scripts = []

    def run_script(self, script_name: str) -> bool:
        """単一スクリプトを実行"""
        script_path = SCRIPTS_DIR / script_name

        if not script_path.exists():
            logger.error(f"Script not found: {script_path}")
            return False

        try:
            logger.info(f"Running: {script_name}")
            result = subprocess.run(
                [sys.executable, str(script_path)],
                capture_output=True,
                text=True,
                timeout=300
            )

            if result.returncode == 0:
                logger.info(f"[OK] {script_name} completed successfully")
                self.executed_scripts.append(script_name)
                return True
            else:
                logger.error(f"[ERROR] {script_name} failed with return code {result.returncode}")
                logger.error(f"STDERR: {result.stderr}")
                self.failed_scripts.append(script_name)
                return False

        except subprocess.TimeoutExpired:
            logger.error(f"[ERROR] {script_name} timed out")
            self.failed_scripts.append(script_name)
            return False
        except Exception as e:
            logger.error(f"[ERROR] Failed to run {script_name}: {e}")
            self.failed_scripts.append(script_name)
            return False

    def execute_phase2(self) -> bool:
        """Phase 2 を実行：委員会 PDF 抽出"""
        logger.info("\n" + "="*60)
        logger.info("PHASE 2: 委員会 PDF テキスト抽出")
        logger.info("="*60)

        for script in self.PHASE2_SCRIPTS:
            if not self.run_script(script):
                logger.error(f"Phase 2 failed at {script}")
                return False

        logger.info("Phase 2 completed successfully!")
        return True

    def execute_phase3(self) -> bool:
        """Phase 3 を実行：Markdown 拡張"""
        logger.info("\n" + "="*60)
        logger.info("PHASE 3: Markdown ファイル拡張")
        logger.info("="*60)

        for script in self.PHASE3_SCRIPTS:
            if not self.run_script(script):
                logger.warning(f"Phase 3 script failed: {script}")
                # Phase 3 は部分的な失敗を許容

        logger.info("Phase 3 completed!")
        return True

    def execute_all(self) -> bool:
        """全フェーズを実行"""
        logger.info(f"\nStarting Phase 2・3 Pipeline (mode={self.mode})")
        logger.info(f"Start time: {datetime.now().isoformat()}")

        # Phase 2
        if not self.execute_phase2():
            logger.error("Phase 2 failed!")
            return False

        # Phase 3
        if not self.execute_phase3():
            logger.warning("Phase 3 had some failures")

        logger.info(f"\nEnd time: {datetime.now().isoformat()}")
        return True

    def print_summary(self):
        """実行結果サマリーを出力"""
        logger.info("\n" + "="*60)
        logger.info("EXECUTION SUMMARY")
        logger.info("="*60)

        logger.info(f"\nMode: {self.mode}")
        logger.info(f"Executed scripts: {len(self.executed_scripts)}")
        for script in self.executed_scripts:
            logger.info(f"  ✓ {script}")

        if self.failed_scripts:
            logger.warning(f"\nFailed scripts: {len(self.failed_scripts)}")
            for script in self.failed_scripts:
                logger.warning(f"  ✗ {script}")
        else:
            logger.info("\n✓ All scripts executed successfully!")

        logger.info("\n" + "="*60)
        logger.info("Next steps:")
        logger.info("1. 生成ファイルを確認: 04_データリンク/01_議会活動/")
        logger.info("2. committee_detailed_remarks.json を確認")
        logger.info("3. Git でコミット・プッシュ")
        logger.info("="*60)


def main():
    """メイン処理"""
    import argparse

    parser = argparse.ArgumentParser(description="Phase 2・3 パイプライン実行")
    parser.add_argument(
        "--mode",
        choices=["test", "full"],
        default="full",
        help="実行モード: test (テスト) または full (本番)"
    )
    parser.add_argument(
        "--phase",
        choices=["2", "3", "all"],
        default="all",
        help="実行フェーズ: 2, 3, または all"
    )

    args = parser.parse_args()

    pipeline = Phase23Pipeline(mode=args.mode)

    try:
        if args.phase in ["2", "all"]:
            if not pipeline.execute_phase2():
                sys.exit(1)

        if args.phase in ["3", "all"]:
            if not pipeline.execute_phase3():
                logger.warning("Phase 3 had failures but continuing...")

        pipeline.print_summary()

    except KeyboardInterrupt:
        logger.info("\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        logger.error(f"Pipeline failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
