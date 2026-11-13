#!/usr/bin/env python3
"""
宇土市議会 定例会 PDF テキスト抽出スクリプト
PDF から質問・答弁ブロックを構造化して抽出
"""

import pdfplumber
import json
import re
from pathlib import Path
from typing import Dict, List, Any, Tuple, Optional
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class QuestionBlock:
    """質問ブロック"""
    id: str
    session_code: str
    questioner_seat: Optional[int]
    questioner_name: str
    topic: str
    question_body: str
    page_range: str
    responses: List[Dict[str, Any]]
    follow_ups: List[Dict[str, Any]]

class CouncilPDFExtractor:
    """議会 PDF テキスト抽出器"""

    # 議員名と議席の正規化マッピング
    MEMBER_NAMES = {
        "土黒功司", "杉本寛", "中野洋一", "浦本晴美", "佐美三洋",
        "今中真之助", "樫﨑政治", "野口修一", "中口俊宏", "福田一",
        "小崎憲一", "西田和徳", "園田茂", "宮原雄一", "柴田正樹",
        "藤井慶峰", "山村保夫", "村田宣雄"
    }

    POSITION_KEYWORDS = ["市長", "副市長", "教育長", "部長", "課長", "担当課長"]

    def __init__(self, pdf_path: str):
        self.pdf_path = pdf_path
        self.pdf = None
        self.full_text = None
        self.session_code = self._extract_session_code()

    def _extract_session_code(self) -> str:
        """ファイル名から年度・月を抽出"""
        filename = Path(self.pdf_path).stem
        # R4-12_12月定例会 → R4-12
        match = re.search(r'R(\d+)-(\d+)', filename)
        if match:
            return f"R{match.group(1)}-{match.group(2)}"
        return "UNKNOWN"

    def load_pdf(self):
        """PDF 読み込み"""
        try:
            self.pdf = pdfplumber.open(self.pdf_path)
            print(f"[OK] PDF loaded: {self.session_code} ({len(self.pdf.pages)} pages)")
        except Exception as e:
            print(f"[ERROR] Failed to load PDF: {e}")
            return False
        return True

    def extract_all_text(self) -> str:
        """全ページのテキスト抽出"""
        if not self.pdf:
            return ""

        texts = []
        for i, page in enumerate(self.pdf.pages):
            text = page.extract_text()
            texts.append(text if text else "")

        self.full_text = "\n".join(texts)
        return self.full_text

    def _normalize_seat(self, seat_str: str) -> int:
        """議席番号の正規化（全角・半角対応）"""
        # 全角数字を半角に変換
        zenkaku_digits = '０１２３４５６７８９'
        hankaku_digits = '0123456789'
        trans_table = str.maketrans(zenkaku_digits, hankaku_digits)
        return int(seat_str.translate(trans_table))

    def _normalize_name(self, name: str) -> str:
        """議員名の正規化（スペース・改行を除去）"""
        return re.sub(r'[\s\n]+', '', name)

    def _clean_text(self, text: str) -> str:
        """テキストのクリーニング"""
        # 余分な空白・改行の正規化
        text = re.sub(r'\n\s*\n', '\n', text)  # 複数行の空行を 1 行に
        text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', text)  # 制御文字削除
        return text.strip()

    def find_question_blocks(self) -> List[Dict[str, Any]]:
        """質問ブロックを抽出"""
        if not self.full_text:
            self.extract_all_text()

        questions = []

        # パターン：「○1番（土黒功司君）」または「○１番 土黒功司君」
        # 全角・半角数字両対応
        question_pattern = r'○\s*([0-9０-９]+)\s*番\s*[（\(]?([^\）\)0-9０-９]+?)[）\)]?\s*君'

        for match in re.finditer(question_pattern, self.full_text):
            try:
                seat = self._normalize_seat(match.group(1))
                member_name = self._normalize_name(match.group(2))

                # 議員名が登録済みかチェック
                is_valid_member = any(
                    self._normalize_name(m) == member_name
                    for m in self.MEMBER_NAMES
                )

                if not is_valid_member:
                    continue

                # 質問の内容を抽出（この議員の質問から次の議員まで）
                start_pos = match.start()
                next_member_match = re.search(
                    r'\n○\s*[0-9０-９]+\s*番',
                    self.full_text[start_pos + 50:]
                )

                if next_member_match:
                    end_pos = start_pos + 50 + next_member_match.start()
                else:
                    end_pos = len(self.full_text)

                question_text = self.full_text[start_pos:end_pos]

                # 質問と答弁を分割
                response_pattern = r'(?:^|\n)○\s*(?:市長|教育長|副市長|部長|課長)'
                response_match = re.search(response_pattern, question_text)

                if response_match:
                    question_body = question_text[:response_match.start()]
                    response_body = question_text[response_match.start():]
                else:
                    question_body = question_text
                    response_body = ""

                questions.append({
                    "seat": seat,
                    "name": member_name,
                    "start_pos": start_pos,
                    "end_pos": end_pos,
                    "question_body": self._clean_text(question_body)[:1500],
                    "response_body": self._clean_text(response_body)[:2000],
                })

            except Exception as e:
                continue

        return questions

    def to_json(self, questions: List[Dict[str, Any]]) -> Dict[str, Any]:
        """JSON 形式に変換"""
        return {
            "metadata": {
                "session_code": self.session_code,
                "pdf_path": str(self.pdf_path),
                "extracted_at": datetime.now().isoformat(),
                "total_pages": len(self.pdf.pages) if self.pdf else 0,
                "total_questions": len(questions),
            },
            "questions": questions
        }

    def close(self):
        """PDF クローズ"""
        if self.pdf:
            self.pdf.close()

def extract_session_pdf(pdf_path: str) -> Dict[str, Any]:
    """単一 PDF ファイルの抽出"""
    extractor = CouncilPDFExtractor(pdf_path)

    if not extractor.load_pdf():
        return None

    extractor.extract_all_text()
    questions = extractor.find_question_blocks()
    result = extractor.to_json(questions)
    extractor.close()

    return result

if __name__ == "__main__":
    import sys

    # テスト実行
    test_pdf = "/Volumes/ExtSSD/VibeCoding/uto-os/追加入手資料/宇土市OS_一次情報アーカイブ/10_議会OS（議会資料・議事録分析）/01_定例会/R4-12_12月定例会(令和4年11月30日招集).pdf"

    print(f"\n[TEST] Extracting: {test_pdf}")
    result = extract_session_pdf(test_pdf)

    if result:
        print(f"[OK] Extracted {result['metadata']['total_questions']} question blocks")
        print(json.dumps(result, indent=2, ensure_ascii=False)[:2000])
    else:
        print("[FAIL] Extraction failed")
