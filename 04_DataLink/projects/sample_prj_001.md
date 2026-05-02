---
id: prj_001
type: project
firestore_collection: projects
firestore_doc_id: prj_001
drive_folder_id: 1DgsDPQNP8oM8Sg1ULfPfPjv27fP_QNsf
drive_url: https://drive.google.com/drive/folders/1DgsDPQNP8oM8Sg1ULfPfPjv27fP_QNsf
tags: [sample]
created: 2026-05-03
updated: 2026-05-03
status: active
---

# サンプルプロジェクト

## 目的

Obsidian、Firestore、Google Drive、MCP の連携設計を確認する。

## 背景

複数 AI が同じナレッジ基盤を参照できるよう、実データ投入前にサンプルで構造を確認する。

## KPI

- DataLink frontmatter が標準に沿っている
- Firestore collection と document id が明確である
- Drive 参照欄が用意されている

## 関係者

- [[sample_prodcr_001]]

## タスク
- [ ] Firestore へのサンプル投入方法を決める
- [ ] Drive フォルダ id を `.env` に設定する

## 意思決定

サンプルデータは `sample` タグを付け、本番データと区別する。

## 関連リンク

- [[sample_prod_001]]
