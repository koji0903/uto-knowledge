---
id: moc_google_drive_setup
type: moc
tags: [moc, google-drive, setup]
created: {{date}}
---

# Google Drive Setup

## 目的

Google Drive をファイル実体の保存先として使い、Obsidian と Firestore から同じ asset を参照できる状態にする。

## 追加ファイル

| file | 用途 |
| --- | --- |
| drive.structure.json | Drive フォルダ構造の定義 |
| .env.example | Drive folder id の環境変数サンプル |

## 推奨フォルダ構造

```text
uto-knowledge-assets/
├── producers/
├── products/
├── projects/
└── logs/
```

## 対応表

| Drive folder | Firestore collection | Obsidian folder |
| --- | --- | --- |
| producers | producers | 04_DataLink/producers |
| products | products | 04_DataLink/products |
| projects | projects | 04_DataLink/projects |
| logs | logs | 04_DataLink/logs |

## 環境変数

```text
GOOGLE_DRIVE_ROOT_FOLDER_ID=
GOOGLE_DRIVE_PRODUCERS_FOLDER_ID=
GOOGLE_DRIVE_PRODUCTS_FOLDER_ID=
GOOGLE_DRIVE_PROJECTS_FOLDER_ID=
GOOGLE_DRIVE_LOGS_FOLDER_ID=
```

## 初期設定

1. Google Drive に `uto-knowledge-assets` フォルダを作成する
2. その配下に `producers`、`products`、`projects`、`logs` を作成する
3. 各フォルダの id を `.env` に記録する
4. Markdown frontmatter の `drive_folder_id` または `drive_url` に参照を保存する

## 命名ルール

Drive に置くファイル名には、対応する Obsidian / Firestore id を含める。

```text
prodcr_001_contract.pdf
prod_001_photo_01.jpg
prj_001_requirements.pdf
log_20260503_001_meeting.pdf
```

## 運用ルール

- Drive にはファイル実体を置く
- Obsidian には文脈、判断、リンクを残す
- Firestore には検索・連携用の構造化メタデータを置く
- Drive の共有権限は必要最小限にする
