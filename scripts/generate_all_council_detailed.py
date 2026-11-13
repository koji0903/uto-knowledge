#!/usr/bin/env python3
"""
宇土市議会 詳細ナレッジ化 マスター実行スクリプト
定例会・委員会の全質問・発言を抽出し、JSON・Markdown を生成
"""

import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime

class CouncilDetailedPipelineExecutor:
    """ナレッジ化パイプラインマスター"""

    # スクリプトパス
    SCRIPTS_DIR = Path("scripts")

    # 出力パス
    OUTPUT_DIR = Path("internal-data/council")

    SCRIPT_PIPELINE = [
        ("extract_council_pdf_text.py", "PDF テキスト抽出"),
        ("generate_council_detailed_qa_json.py", "詳細質疑応答 JSON 生成"),
    ]

    def __init__(self, test_mode: bool = True):
        self.test_mode = test_mode
        self.results = {
            "status": "pending",
            "start_time": datetime.now().isoformat(),
            "steps": {},
        }

    def run_script(self, script_name: str, description: str, extra_args: list = None) -> bool:
        """スクリプト実行"""
        script_path = self.SCRIPTS_DIR / script_name

        if not script_path.exists():
            print(f"[ERROR] Script not found: {script_path}")
            self.results["steps"][script_name] = {
                "status": "error",
                "message": "Script not found",
            }
            return False

        print(f"\n{'='*60}")
        print(f"[STEP] {description}")
        print(f"       Script: {script_name}")
        if extra_args:
            print(f"       Args: {' '.join(extra_args)}")
        print(f"{'='*60}\n")

        try:
            cmd = [sys.executable, str(script_path)]
            if extra_args:
                cmd.extend(extra_args)

            result = subprocess.run(
                cmd,
                cwd=Path.cwd(),
                capture_output=True,
                text=True,
                timeout=600,  # 10 minutes timeout
            )

            if result.returncode == 0:
                print(f"[OK] {description} completed")
                self.results["steps"][script_name] = {
                    "status": "success",
                    "output": result.stdout[-500:] if result.stdout else "",
                }
                return True
            else:
                print(f"[ERROR] {description} failed")
                print(f"STDERR: {result.stderr[-500:] if result.stderr else ''}")
                self.results["steps"][script_name] = {
                    "status": "error",
                    "error": result.stderr[-500:] if result.stderr else "",
                }
                return False

        except subprocess.TimeoutExpired:
            print(f"[ERROR] {description} timed out")
            self.results["steps"][script_name] = {
                "status": "timeout",
            }
            return False
        except Exception as e:
            print(f"[ERROR] {description} exception: {e}")
            self.results["steps"][script_name] = {
                "status": "exception",
                "error": str(e),
            }
            return False

    def run_pipeline(self):
        """パイプライン実行"""
        print(f"\n{'#'*60}")
        print(f"# 宇土市議会 詳細ナレッジ化 パイプライン")
        print(f"# {'TEST MODE' if self.test_mode else 'PRODUCTION MODE'}")
        print(f"# Started: {datetime.now().isoformat()}")
        print(f"{'#'*60}\n")

        success_count = 0
        for script_name, description in self.SCRIPT_PIPELINE:
            # 本番モードでは --all を追加
            extra_args = ["--all"] if not self.test_mode and "qa_json" in script_name else None
            if self.run_script(script_name, description, extra_args=extra_args):
                success_count += 1
            else:
                print(f"[WARN] Pipeline continuing despite failure in {script_name}")

        # パイプライン完了
        self.results["status"] = "completed"
        self.results["end_time"] = datetime.now().isoformat()
        self.results["successful_steps"] = success_count
        self.results["total_steps"] = len(self.SCRIPT_PIPELINE)

        self._print_summary()
        self._save_results()

    def _print_summary(self):
        """実行結果サマリー表示"""
        print(f"\n{'='*60}")
        print(f"PIPELINE EXECUTION SUMMARY")
        print(f"{'='*60}")
        print(f"Mode: {'TEST' if self.test_mode else 'PRODUCTION'}")
        print(f"Start: {self.results['start_time']}")
        print(f"End: {self.results['end_time']}")
        print(f"Successful: {self.results['successful_steps']}/{self.results['total_steps']}")

        for step, detail in self.results["steps"].items():
            status_icon = "[OK]" if detail["status"] == "success" else "[FAIL]"
            print(f"  {status_icon} {step}: {detail['status']}")

        print(f"{'='*60}\n")

    def _save_results(self):
        """結果をファイルに保存"""
        result_path = Path(f"pipeline_execution_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json")
        with open(result_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
        print(f"[SAVED] Pipeline results: {result_path}\n")

def main():
    """メイン"""
    import argparse

    parser = argparse.ArgumentParser(
        description="宇土市議会 詳細ナレッジ化 パイプライン"
    )
    parser.add_argument(
        "--production",
        action="store_true",
        help="本番モード（全セッション処理）",
    )
    parser.add_argument(
        "--test",
        action="store_true",
        default=True,
        help="テストモード（R4-12 のみ）",
    )

    args = parser.parse_args()

    executor = CouncilDetailedPipelineExecutor(test_mode=not args.production)
    executor.run_pipeline()

if __name__ == "__main__":
    main()
