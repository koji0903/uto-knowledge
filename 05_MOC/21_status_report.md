---
id: moc_status_report
type: moc
tags: [moc, operations, status]
created: 2026-05-03
---

# Status Report

## 目的

Vault、Git、DataLink、Firestore dry-run の状態を 1 つのレポートで確認する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/generate_status_report.mjs | 状態レポート生成 |
| scripts/generate_status_report.sh | Mac / Linux 用ラッパー |
| scripts/generate_status_report.ps1 | Windows PowerShell 用ラッパー |

## 実行

Mac / Linux:

```bash
bash scripts/generate_status_report.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\generate_status_report.ps1
```

## 出力

```text
tmp/status_report.md
```

`tmp/` は Git 管理しない。

## 含まれる情報

- Git branch
- latest commit
- Git status
- `.env` / `.firebaserc` の有無
- DataLink collection ごとの Markdown 件数
- Firestore dry-run document 件数
- 主要検証コマンド

## DataLink 集計

| collection | note |
| --- | --- |
| decisions | `index.md` は Markdown 件数に含まれるが Firestore dry-run からは除外する |
| producers | Firestore 1:1 document |
| products | Firestore 1:1 document |
| projects | Firestore 1:1 document |
| logs | Firestore 1:1 document |

## 主要検証コマンド

```bash
bash scripts/start_work.sh
bash scripts/end_work.sh
bash scripts/verify_all.sh
bash scripts/check_firestore_drift.sh
```
