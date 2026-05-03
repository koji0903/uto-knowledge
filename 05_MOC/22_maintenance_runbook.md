---
id: moc_maintenance_runbook
type: runbook
tags: [moc, maintenance, operations]
created: 2026-05-03
---

# Maintenance Runbook

## 目的

日常運用で Vault、GitHub、Firestore、Google Drive の状態を確認し、破損や drift を早めに検出する。

## Local Check

外部 API への実接続なしで確認する。

```bash
bash scripts/maintenance_check.sh local
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\maintenance_check.ps1 local
```

## Full Check

Firestore と Google Drive まで読み戻して確認する。

```bash
bash scripts/maintenance_check.sh full
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\maintenance_check.ps1 full
```

## 推奨タイミング

| timing | command |
| --- | --- |
| 作業開始時 | `bash scripts/maintenance_check.sh local` |
| Firestore / Drive 変更後 | `bash scripts/maintenance_check.sh full` |
| push 前 | `bash scripts/maintenance_check.sh local` |
| 週次確認 | `bash scripts/maintenance_check.sh full` |

## 確認ポイント

- `main...origin/main` で同期している
- DataLink frontmatter validation が通る
- Firestore dry-run document count が想定内である
- Firestore drift check が通る
- Drive structure verification が通る

## 出力

状態レポート:

```text
tmp/status_report.md
```

## 注意

- `tmp/` は Git 管理しない
- Full check は Google 認証が必要
- 失敗時は自動修復せず、差分を確認してから対応する
