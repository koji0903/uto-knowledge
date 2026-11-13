#!/usr/bin/env python3
"""
宇土市議会 詳細質疑応答 JSON 生成スクリプト
既存 council_minutes.json を拡張し、完全な質問・答弁テキストを含める
"""

import json
import re
import pdfplumber
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from dataclasses import dataclass, asdict

@dataclass
class DetailedQuestion:
    """詳細質問データ"""
    id: str
    session_code: str
    questioner_seat: int
    questioner_name: str
    topic: str
    question_full_text: str
    responses: List[Dict[str, str]]
    page_range: str
    extracted_at: str

class DetailedQAExtractor:
    """詳細質疑応答抽出器"""

    # PDF ファイルパス
    PDF_DIR = Path("/Volumes/ExtSSD/VibeCoding/uto-os/追加入手資料/宇土市OS_一次情報アーカイブ/10_議会OS（議会資料・議事録分析）/01_定例会")
    R7_DIR = PDF_DIR / "r7"

    # セッションマッピング
    SESSIONS = [
        ("R4-12", "R4-12_12月定例会(令和4年11月30日招集).pdf"),
        ("R5-03", "R5-03_3月定例会(令和5年3月6日招集).pdf"),
        ("R5-06", "R5-06_6月定例会(令和5年6月16日招集).pdf"),
        ("R5-09", "R5-09_9月定例会(令和5年9月5日招集).pdf"),
        ("R5-12", "R5-12_12月定例会(令和5年11月30日招集).pdf"),
        ("R6-03", "R6-03_3月定例会(令和6年2月28日招集).pdf"),
        ("R6-06", "R6-06_6月定例会(令和6年6月17日招集).pdf"),
        ("R6-09", "R6-09_9月定例会(令和6年9月3日招集).pdf"),
        ("R6-12", "R6-12_12月定例会(令和6年11月29日招集).pdf"),
        ("R7-03", "3月定例会(令和7年2月28日召集)(PDF_約939KB).pdf"),
        ("R7-06", "6月定例会（令和７年6月16日招集）(PDF_約847KB).pdf"),
        ("R7-09", "9月定例会（令和7年9月5日招集）(PDF_約868KB).pdf"),
        ("R7-12", "12月定例会（令和７年11月28日招集）(PDF_約991KB).pdf"),
    ]

    def __init__(self):
        self.session_data = {}

    def _get_pdf_path(self, code: str, filename: str) -> Path:
        """PDF ファイルパス取得"""
        if code.startswith("R7"):
            return self.R7_DIR / filename
        return self.PDF_DIR / filename

    def extract_session_details(self, session_code: str, pdf_path: Path) -> Dict[str, Any]:
        """セッション詳細を抽出"""
        if not pdf_path.exists():
            print(f"[WARN] PDF not found: {pdf_path}")
            return None

        try:
            with pdfplumber.open(str(pdf_path)) as pdf:
                full_text = ""
                for page in pdf.pages:
                    text = page.extract_text()
                    if text:
                        full_text += text + "\n"

                # 質問ブロック抽出（簡略版）
                questions = self._extract_questions_from_text(session_code, full_text)

                return {
                    "session_code": session_code,
                    "pdf_path": str(pdf_path),
                    "total_pages": len(pdf.pages),
                    "total_questions": len(questions),
                    "questions": questions,
                    "extracted_at": datetime.now().isoformat(),
                }

        except Exception as e:
            print(f"[ERROR] Failed to extract {session_code}: {e}")
            return None

    def _extract_questions_from_text(self, session_code: str, full_text: str) -> List[Dict[str, Any]]:
        """テキストから質問を抽出"""
        questions = []

        # 議員別質問パターン
        # 例：「１番（土黒功司君）」または「１番 土黒功司君」
        zenkaku_digits = '０１２３４５６７８９'
        hankaku_digits = '0123456789'
        trans_table = str.maketrans(zenkaku_digits, hankaku_digits)

        # 議員名リスト（既知）
        known_members = [
            "土黒功司", "杉本寛", "中野洋一", "浦本晴美", "佐美三洋",
            "今中真之助", "樫﨑政治", "野口修一", "中口俊宏", "福田一",
        ]

        # 各議員ごとに質問を検索
        question_id = 1
        for member in known_members:
            # その議員の発言を検索
            # パターン：「○N番（議員名君）」または「○N番 議員名君」
            pattern = rf'○\s*([0-9０-９]+)\s*番\s*[（\(]?({re.escape(member)})[）\)]?\s*君'

            matches = list(re.finditer(pattern, full_text))
            for match_idx, match in enumerate(matches):
                try:
                    seat = int(match.group(1).translate(trans_table))
                    name = match.group(2).strip()

                    # 質問ブロックの範囲を決定（この発言から次の議員の発言まで）
                    start_pos = match.start()
                    next_member_pattern = r'○\s*[0-9０-９]+\s*番'
                    next_match = re.search(next_member_pattern, full_text[start_pos + 100:])

                    if next_match:
                        end_pos = start_pos + 100 + next_match.start()
                    else:
                        end_pos = len(full_text)

                    question_text = full_text[start_pos:end_pos]

                    # 答弁を抽出
                    # より広いパターンで答弁者を検出
                    response_pattern = r'(?:^|\n)○\s*([^（\n]+?)(?:[（\(]|\n)'
                    responses = []

                    for resp_match in re.finditer(response_pattern, question_text):
                        resp_name = resp_match.group(1).strip()

                        # 市長、教育長、部長、課長など、答弁権者のみを対象
                        if not any(keyword in resp_name for keyword in ["市長", "教育長", "副市長", "部長", "課長", "担当"]):
                            continue

                        resp_start = resp_match.start()
                        # 次の答弁者か質問者まで
                        next_resp = re.search(response_pattern, question_text[resp_start + 10:])
                        resp_end = resp_start + 10 + next_resp.start() if next_resp else len(question_text)

                        resp_text = question_text[resp_start:resp_end]

                        responses.append({
                            "respondent": resp_name,
                            "text": self._clean_text(resp_text[:2000]),
                        })

                    questions.append({
                        "id": f"{session_code}-{question_id:03d}",
                        "seat": seat,
                        "name": name,
                        "question_text": self._clean_text(question_text[:2000]),
                        "responses": responses,
                        "page_info": "[要確認]",
                    })
                    question_id += 1

                except Exception as e:
                    continue

        return questions

    def _clean_text(self, text: str) -> str:
        """テキスト正規化"""
        # 余分な空白・改行
        text = re.sub(r'\n\s*\n', '\n', text)
        text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', text)
        return text.strip()

    def extract_all_sessions(self):
        """全セッション抽出"""
        all_sessions = []

        for session_code, filename in self.SESSIONS:
            pdf_path = self._get_pdf_path(session_code, filename)
            print(f"[Processing] {session_code}...")

            session_data = self.extract_session_details(session_code, pdf_path)
            if session_data:
                all_sessions.append(session_data)
                print(f"  [OK] {session_data['total_questions']} questions extracted")
            else:
                print(f"  [SKIP] Failed to extract")

        return all_sessions

    def to_json(self, sessions: List[Dict[str, Any]]) -> Dict[str, Any]:
        """JSON に変換"""
        return {
            "metadata": {
                "project": "宇土市議会 詳細質疑応答",
                "total_sessions": len(sessions),
                "total_questions": sum(s["total_questions"] for s in sessions),
                "generated_at": datetime.now().isoformat(),
                "version": "2.0",
            },
            "sessions": sessions,
        }

def main():
    """メイン処理"""
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--all",
        action="store_true",
        help="全セッション処理（本番モード）",
    )

    args = parser.parse_args()

    print("\n=== 宇土市議会 詳細質疑応答 JSON 生成 ===\n")

    extractor = DetailedQAExtractor()

    if args.all:
        print("[PRODUCTION MODE] Extracting all sessions...\n")
        sessions = extractor.extract_all_sessions()
        json_output = extractor.to_json(sessions)

        output_path = Path("council_detailed_qa.json")
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(json_output, f, indent=2, ensure_ascii=False)
        print(f"\n[SAVED] {output_path}")
        print(f"[STATS] {len(sessions)} sessions, {json_output['metadata']['total_questions']} questions")

    else:
        print("[TEST MODE] Extracting R4-12 session only...\n")

        test_session_code = "R4-12"
        test_filename = "R4-12_12月定例会(令和4年11月30日招集).pdf"
        test_pdf_path = extractor._get_pdf_path(test_session_code, test_filename)

        result = extractor.extract_session_details(test_session_code, test_pdf_path)

        if result:
            json_output = extractor.to_json([result])
            print(f"\n[OK] Generated JSON with {result['total_questions']} questions")

            # ファイルに保存
            output_path = Path("council_detailed_qa_test.json")
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(json_output, f, indent=2, ensure_ascii=False)
            print(f"\n[SAVED] {output_path}")

        else:
            print("\n[FAIL] Test extraction failed")

if __name__ == "__main__":
    main()
