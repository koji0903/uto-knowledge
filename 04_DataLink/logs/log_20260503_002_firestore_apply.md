---
id: log_20260503_002
type: log
event: firestore_doc_created
actor: chatgpt
target_system: firestore
target_id: sample_datalink
firestore_collection: logs
firestore_doc_id: log_20260503_002
drive_file_id: 
drive_url: 
git_commit: 
tags: [sync, firestore, sample]
created: 2026-05-03
status: active
---

# 同期ログ

## 概要

`uto-os` の Firestore に DataLink sample 4件を投入した。

## 変更内容

- `producers/prodcr_001` を作成または更新
- `products/prod_001` を作成または更新
- `projects/prj_001` を作成または更新
- `logs/log_20260503_001` を作成または更新

## 影響範囲

Google Cloud project `uto-os` の Firestore `(default)` database。

## 確認結果

Firestore REST API で 4件すべて読み戻し確認済み。

## 次アクション

本番データ投入前に、sample 以外の書き込みルールとレビュー手順を確認する。
