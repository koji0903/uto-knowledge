---
id: moc_datalink_validation
type: moc
tags: [moc, datalink, validation]
created: 2026-05-03
---

# DataLink Validation

## 目的

`04_DataLink` 配下の Markdown が Firestore 連携に必要な frontmatter 標準を満たしているか検証する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/validate_datalink_frontmatter.mjs | DataLink 全体の frontmatter 検証 |
| scripts/validate_datalink_frontmatter.sh | Mac / Linux 用ラッパー |
| scripts/validate_datalink_frontmatter.ps1 | Windows PowerShell 用ラッパー |

## 検証内容

- frontmatter が存在する
- `id` が存在する
- `type` がフォルダに対応している
- `firestore_collection` がフォルダ名と一致する
- `firestore_doc_id` が `id` と一致する
- `id` prefix がルールに合っている
- `tags` が配列である

## 実行

Mac / Linux:

```bash
bash scripts/validate_datalink_frontmatter.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate_datalink_frontmatter.ps1
```

## CI

GitHub Actions の `Validate Vault` workflow でも実行する。
