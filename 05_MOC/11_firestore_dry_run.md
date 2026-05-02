---
id: moc_firestore_dry_run
type: moc
tags: [moc, firestore, dry-run]
created: 2026-05-03
---

# Firestore Dry Run

## 目的

`04_DataLink` の Markdown frontmatter を読み取り、Firestore に投入する予定の document JSON を確認する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/datalink_to_firestore_dry_run.mjs | Markdown から Firestore 用 JSON を生成 |
| scripts/datalink_to_firestore_dry_run.sh | Mac / Linux 用ラッパー |
| scripts/datalink_to_firestore_dry_run.ps1 | Windows PowerShell 用ラッパー |

## 実行

Mac / Linux:

```bash
bash scripts/datalink_to_firestore_dry_run.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\datalink_to_firestore_dry_run.ps1
```

## ファイル出力

```bash
bash scripts/datalink_to_firestore_dry_run.sh --out tmp/datalink.firestore.json
```

`tmp/` は作業用出力先として Git 管理しない。

## 検証内容

- frontmatter が存在する
- `type` がフォルダの期待値と一致する
- `firestore_collection` がフォルダ名と一致する
- `firestore_doc_id` または `id` が存在する
- `obsidian_path` を Firestore 用 data に追加する

## 注意

このスクリプトは Firestore へ書き込まない。実投入前の確認専用とする。
