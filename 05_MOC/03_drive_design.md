---
id: moc_drive_design
type: moc
tags: [moc, google-drive, assets]
created: {{date}}
---

# Google Drive Design

## 目的

Markdown に直接入れにくいファイル実体を Google Drive に置き、Obsidian と Firestore から参照できる状態にする。

## 推奨フォルダ

```text
uto-knowledge-assets/
├── producers/
├── products/
├── projects/
└── logs/
```

## 使い分け

| 対象 | 保存先 |
| --- | --- |
| 思考メモ、設計、ログ | Obsidian |
| 構造化データ | Firestore |
| PDF、画像、契約書、表計算 | Google Drive |

## 参照ルール

- Markdown には Drive URL または folder id を記録する
- Firestore にも同じ Drive URL を保持できるようにする
- ファイル名には対象 id を含める

## ファイル名例

```text
prj_001_requirements.pdf
prod_001_photo_01.jpg
prodcr_001_contract.pdf
log_20260503_meeting_notes.pdf
```
