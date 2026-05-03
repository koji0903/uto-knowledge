---
id: moc_end_work
type: runbook
tags: [moc, operations, end]
created: 2026-05-04
---

# End Work

## 目的

作業終了時の確認をワンコマンド化し、未検証の変更や Firestore drift を残しにくくする。

## コマンド

Mac / Linux:

```bash
bash scripts/end_work.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\end_work.ps1
```

## 実行内容

1. `maintenance_check local`
2. `git status --short --branch --ignored`
3. 直近 commit の確認

## このコマンドがしないこと

- 自動 commit
- 自動 push
- Firestore apply
- Google Drive への書き込み

## 終了前チェック

- GitHub に push したか
- GitHub Actions が成功しているか
- DataLink を変更した場合、Firestore dry-run / apply / drift check を行ったか
- 外部連携を変更した場合、同期ログを作成したか

## 注意

- Firestore / Google Drive まで読み戻す場合は `maintenance_check full` を使う
- 未追跡ファイルがある場合は、管理対象にするか ignore するかを判断する
