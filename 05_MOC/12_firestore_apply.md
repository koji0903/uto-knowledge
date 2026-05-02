---
id: moc_firestore_apply
type: moc
tags: [moc, firestore, apply]
created: 2026-05-03
---

# Firestore Apply

## 目的

`04_DataLink` の Markdown frontmatter を Firestore に投入するための安全な実行手順を定義する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/datalink_to_firestore_apply.mjs | Firestore 書き込み用スクリプト |
| scripts/datalink_to_firestore_apply.sh | Mac / Linux 用ラッパー |
| scripts/datalink_to_firestore_apply.ps1 | Windows PowerShell 用ラッパー |

## 安全設計

- 既定は dry-run
- `--apply` を明示した場合だけ Firestore に書き込む
- `GOOGLE_CLOUD_PROJECT` が未設定なら apply は失敗する
- access token が取れない場合は apply は失敗する
- Firestore document path は `collection/firestore_doc_id` とする

## Dry-run

Mac / Linux:

```bash
bash scripts/datalink_to_firestore_apply.sh --dry-run
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\datalink_to_firestore_apply.ps1 --dry-run
```

## Apply

Mac / Linux:

```bash
bash scripts/datalink_to_firestore_apply.sh --apply
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\datalink_to_firestore_apply.ps1 --apply
```

## 認証

`--apply` では以下のいずれかを使う。

```text
GOOGLE_OAUTH_ACCESS_TOKEN
```

または:

```bash
gcloud auth print-access-token
```

## 注意

このスクリプトは Firestore REST API の `PATCH` を使う。既存 document がある場合は同じ document path に更新されるため、最初は sample データのみで確認する。
