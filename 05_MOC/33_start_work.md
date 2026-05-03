---
id: moc_start_work
type: runbook
tags: [moc, operations, start]
created: 2026-05-04
---

# Start Work

## 目的

作業開始時の確認をワンコマンド化し、複数 AI / 複数 OS で同じ入口から始められるようにする。

## コマンド

Mac / Linux:

```bash
bash scripts/start_work.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start_work.ps1
```

## 実行内容

1. `git status --short --branch --ignored`
2. `tmp/ai_context.md` の生成
3. `maintenance_check local`

## 出力

```text
tmp/ai_context.md
tmp/status_report.md
tmp/CHANGELOG.md
```

## 使い方

- 作業開始時に実行する
- 別 AI に引き継ぐ前に実行する
- push 前の軽い確認にも使う

## 注意

- 外部 API への読み戻しは行わない
- Firestore / Google Drive まで確認する場合は `maintenance_check full` を使う
- `tmp/` は Git 管理しない
