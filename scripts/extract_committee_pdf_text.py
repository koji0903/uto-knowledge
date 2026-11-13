#!/usr/bin/env python3
"""
宇土市議会 委員会 PDF テキスト抽出スクリプト
15個の委員会 PDF からテキスト抽出し、発言者ごとに分割
"""

import pdfplumber
import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging

# ロギング設定
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class CommitteePDFExtractor:
    """委員会 PDF テキスト抽出器"""

    # 委員会 PDF ディレクトリ
    COMMITTEE_PDF_DIR = Path("/Volumes/ExtSSD/VibeCoding/uto-os/追加入手資料/会議録（R7委員会）")
    OUTPUT_FILE = Path("/Volumes/ExtSSD/workspace/uto-knowledge/committee_raw_text.json")

    # 議員名リスト
    MEMBER_NAMES = {
        "土黒功司", "杉本寛", "中野洋一", "浦本晴美", "佐美三洋",
        "今中真之助", "樫﨑政治", "野口修一", "中口俊宏", "福田一",
        "小崎憲一", "西田和徳", "園田茂", "宮原雄一", "柴田正樹",
        "藤井慶峰", "山村保夫", "村田宣雄"
    }

    def __init__(self):
        self.records = []
        self.pdf_files = sorted(self.COMMITTEE_PDF_DIR.glob("*.pdf"))
        logger.info(f"Found {len(self.pdf_files)} PDF files in {self.COMMITTEE_PDF_DIR}")

    def _parse_filename(self, filename: str) -> Dict[str, Any]:
        """
        ファイル名から委員会情報を抽出
        例: R6(30) R7.3月定例会(3月11日)　総務.pdf
             R7(30) R7.6月定例会(6月23日)総務.pdf
             R6(30) 会議録_経済建設常任員会(R7.3.7).pdf
        """
        info = {
            "filename": filename,
            "fiscal_year": None,
            "session": None,
            "committee": None,
            "date": None,
        }

        # R7 or R6 の抽出
        match = re.search(r'R(\d+)', filename)
        if match:
            info["fiscal_year"] = f"R{match.group(1)}"

        # 委員会名の抽出
        if "総務" in filename and "常任" not in filename:
            info["committee"] = "総務市民常任委員会"
        elif "文教" in filename:
            info["committee"] = "文教厚生常任委員会"
        elif "経済建設" in filename or "経済" in filename:
            info["committee"] = "経済建設常任委員会"

        # セッションと日付の抽出
        if "3月定例会" in filename:
            info["session"] = "3月定例会"
            date_match = re.search(r'(\d+月\d+日)', filename)
            if date_match:
                info["date"] = date_match.group(1)
        elif "6月定例会" in filename:
            info["session"] = "6月定例会"
            date_match = re.search(r'(\d+月\d+日)', filename)
            if date_match:
                info["date"] = date_match.group(1)
        elif "9月定例会" in filename:
            info["session"] = "9月定例会"
            date_match = re.search(r'(\d+月\d+日)', filename)
            if date_match:
                info["date"] = date_match.group(1)
        elif "12月定例会" in filename:
            info["session"] = "12月定例会"
            date_match = re.search(r'(\d+月\d+日)', filename)
            if date_match:
                info["date"] = date_match.group(1)
        elif "第1回文教厚生常任委員会" in filename:
            info["session"] = "R8-1月定例会"
            info["committee"] = "文教厚生常任委員会"
            date_match = re.search(r'R8\.(\d+)\.(\d+)', filename)
            if date_match:
                info["date"] = f"{date_match.group(1)}月{date_match.group(2)}日"
        elif "R7.3.7" in filename:
            info["date"] = "3月7日"
            info["session"] = "3月定例会"
        elif "R7.3.10" in filename:
            info["date"] = "3月10日"
            info["session"] = "3月定例会"
        elif "R7.6.24" in filename:
            info["date"] = "6月24日"
            info["session"] = "6月定例会"
        elif "R7.6.25" in filename:
            info["date"] = "6月25日"
            info["session"] = "6月定例会"
        elif "R7.9.12" in filename:
            info["date"] = "9月12日"
            info["session"] = "9月定例会"
        elif "R7.9.17" in filename:
            info["date"] = "9月17日"
            info["session"] = "9月定例会"
        elif "R7.12.5" in filename or "R7.12.8" in filename:
            info["session"] = "12月定例会"
            if "R7.12.5" in filename:
                info["date"] = "12月5日"
            else:
                info["date"] = "12月8日"
        elif "R8.2.25" in filename or "R8.2.26" in filename:
            info["session"] = "R8-2月定例会"
            if "R8.2.25" in filename:
                info["date"] = "2月25日"
            else:
                info["date"] = "2月26日"
        elif "2月24日" in filename:
            info["session"] = "R8-2月定例会"
            info["date"] = "2月24日"

        return info

    def extract_pdf_text(self, pdf_path: Path) -> Optional[Dict[str, Any]]:
        """PDF ファイルからテキスト抽出"""
        try:
            filename = pdf_path.name
            file_info = self._parse_filename(filename)

            with pdfplumber.open(str(pdf_path)) as pdf:
                full_text = ""
                for page in pdf.pages:
                    text = page.extract_text()
                    if text:
                        full_text += text + "\n"

                # 発言者ごとにテキストを分割
                remarks = self._split_by_speaker(full_text)

                record = {
                    "filename": filename,
                    "file_info": file_info,
                    "total_pages": len(pdf.pages),
                    "total_remarks": len(remarks),
                    "remarks": remarks,
                    "extracted_at": datetime.now().isoformat(),
                }

                logger.info(f"[OK] {filename}: {len(remarks)} remarks extracted")
                return record

        except Exception as e:
            logger.error(f"[ERROR] Failed to extract {pdf_path.name}: {e}")
            return None

    def _split_by_speaker(self, text: str) -> List[Dict[str, Any]]:
        """
        テキストを発言者ごとに分割
        複数のパターンに対応：名前：, 名前： , 改行+名前：など
        """
        remarks = []
        seen_remarks = set()  # 重複排除用

        # パターン1: 議員名：発言内容
        for member_name in self.MEMBER_NAMES:
            # \n + 名前 + ： のパターン (複数行対応)
            pattern = r'\n' + re.escape(member_name) + r'[：:]\s*(.+?)(?=\n(?:[^\s\n]|$))'

            for match in re.finditer(pattern, text, re.DOTALL | re.MULTILINE):
                body = match.group(1).strip()

                if body and len(body) > 5:
                    # 重複チェック（同じ発言者の同じテキスト）
                    remark_key = (member_name, body[:50])
                    if remark_key not in seen_remarks:
                        seen_remarks.add(remark_key)
                        remarks.append({
                            "seat": None,
                            "name": member_name,
                            "body": body[:5000],
                            "type": "委員会発言"
                        })

        # パターン2: 役職付き発言（市長、部長など）
        positions = ["市長", "副市長", "教育長", "部長", "課長", "議長", "委員長", "次長"]
        for position in positions:
            # \n + [名前] + 役職 + ： のパターン
            pattern = r'\n([^\n]*?)' + re.escape(position) + r'[：:]\s*(.+?)(?=\n(?:[^\s\n]|$))'

            for match in re.finditer(pattern, text, re.DOTALL | re.MULTILINE):
                name_part = match.group(1).strip()
                body = match.group(2).strip()

                if body and len(body) > 5 and name_part:
                    name = name_part + position
                    remark_key = (name, body[:50])
                    if remark_key not in seen_remarks:
                        seen_remarks.add(remark_key)
                        remarks.append({
                            "seat": None,
                            "name": name,
                            "body": body[:5000],
                            "type": "執行部発言"
                        })

        # パターン3: より汎用的なパターン - 名前：で始まる行を検出
        # （より多くの発言をキャッチするための追加パターン）
        pattern = r'([^\n]{2,15}?)[：:]\s*(.+?)(?=\n(?:[^\s\n]{2,15}[：:]|$))'

        for match in re.finditer(pattern, text, re.DOTALL | re.MULTILINE):
            name_candidate = match.group(1).strip()
            body = match.group(2).strip()

            # フィルタリング：実際に議員名や役職を含む場合のみ
            is_valid_speaker = (
                any(member in name_candidate for member in self.MEMBER_NAMES) or
                any(pos in name_candidate for pos in positions)
            )

            if is_valid_speaker and body and len(body) > 5:
                remark_key = (name_candidate, body[:50])
                if remark_key not in seen_remarks:
                    seen_remarks.add(remark_key)
                    remarks.append({
                        "seat": None,
                        "name": name_candidate,
                        "body": body[:5000],
                        "type": "発言"
                    })

        logger.info(f"Split into {len(remarks)} remarks")
        return remarks

    def extract_all(self) -> List[Dict[str, Any]]:
        """全 PDF から抽出"""
        for pdf_path in self.pdf_files:
            result = self.extract_pdf_text(pdf_path)
            if result:
                self.records.append(result)

        return self.records

    def save_to_json(self):
        """JSON ファイルに保存"""
        output = {
            "extraction_date": datetime.now().isoformat(),
            "total_files": len(self.records),
            "total_remarks": sum(r["total_remarks"] for r in self.records),
            "records": self.records
        }

        self.OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

        with open(self.OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(output, f, ensure_ascii=False, indent=2)

        logger.info(f"[OK] Saved to {self.OUTPUT_FILE}")
        logger.info(f"Total: {len(self.records)} files, {output['total_remarks']} remarks")


def main():
    """メイン処理"""
    extractor = CommitteePDFExtractor()
    extractor.extract_all()
    extractor.save_to_json()

    logger.info("Extraction complete!")


if __name__ == "__main__":
    main()
