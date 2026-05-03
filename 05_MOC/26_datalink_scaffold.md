---
id: moc_datalink_scaffold
type: runbook
tags: [moc, datalink, scaffold]
created: 2026-05-03
---

# DataLink Scaffold

## 目的

DataLink ノートをテンプレートから安全に作成する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/scaffold_datalink_note.mjs | DataLink ノート生成 |
| scripts/scaffold_datalink_note.sh | Mac / Linux 用ラッパー |
| scripts/scaffold_datalink_note.ps1 | Windows PowerShell 用ラッパー |

## 実行例

```bash
bash scripts/scaffold_datalink_note.sh --type project --id prj_002 --title "新規プロジェクト"
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\scaffold_datalink_note.ps1 --type project --id prj_002 --title "新規プロジェクト"
```

## 対応 type

| type | id prefix | output folder |
| --- | --- | --- |
| producer | prodcr_ | 04_DataLink/producers |
| product | prod_ | 04_DataLink/products |
| project | prj_ | 04_DataLink/projects |
| log | log_ | 04_DataLink/logs |

## 安全設計

- 既存ファイルがある場合は失敗する
- id prefix が不正な場合は失敗する
- Firestore へは書き込まない
- 作成後に `validate_datalink_frontmatter` を実行する

## 次の手順

```bash
bash scripts/validate_datalink_frontmatter.sh
bash scripts/datalink_to_firestore_apply.sh --dry-run
```
