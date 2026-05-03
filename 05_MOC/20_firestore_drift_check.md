---
id: moc_firestore_drift_check
type: moc
tags: [moc, firestore, drift-check]
created: 2026-05-03
---

# Firestore Drift Check

## 目的

Obsidian の `04_DataLink` と Firestore の document がズレていないか確認する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/check_firestore_drift.mjs | Firestore drift check |
| scripts/check_firestore_drift.sh | Mac / Linux 用ラッパー |
| scripts/check_firestore_drift.ps1 | Windows PowerShell 用ラッパー |

## 実行

Mac / Linux:

```bash
bash scripts/check_firestore_drift.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check_firestore_drift.ps1
```

## 比較フィールド

- `id`
- `type`
- `firestore_collection`
- `firestore_doc_id`
- `drive_folder_id`
- `drive_url`
- `created`
- `updated`
- `status`
- `obsidian_path`

## 運用ルール

- Firestore へ apply した後に drift check を実行する
- drift が出た場合は Obsidian と Firestore のどちらを正とするか判断する
- 自動修復はしない

## CI

この検証は Google Cloud 認証が必要なため、GitHub Actions では実行しない。ローカルの `bash scripts/verify_all.sh` に含める。
