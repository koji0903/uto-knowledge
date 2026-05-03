---
id: moc_sync_log_creation
type: runbook
tags: [moc, sync, log]
created: 2026-05-03
---

# Sync Log Creation

## 目的

AI / Firestore / Google Drive / GitHub の操作履歴を、DataLink 形式の同期ログとして安全に残す。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/create_sync_log.mjs | 同期ログ生成 |
| scripts/create_sync_log.sh | Mac / Linux 用ラッパー |
| scripts/create_sync_log.ps1 | Windows PowerShell 用ラッパー |

## 実行例

Mac / Linux:

```bash
bash scripts/create_sync_log.sh --event git_push --target-system github --target-id main --summary "GitHub に変更を push"
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\create_sync_log.ps1 --event git_push --target-system github --target-id main --summary "GitHub に変更を push"
```

## 主なオプション

| option | 用途 |
| --- | --- |
| --event | `git_push`, `ai_note_created`, `firestore_doc_updated` など |
| --summary | 概要 |
| --changes | `;` 区切りの変更内容 |
| --results | `;` 区切りの確認結果 |
| --next-action | 次アクション |
| --target-system | `obsidian`, `github`, `firestore`, `google_drive`, `mcp` など |
| --target-id | 対象 ID |
| --git-commit | commit hash。省略時は現在の HEAD |

## 安全設計

- 出力先は `04_DataLink/logs`
- id は `log_YYYYMMDD_NNN` 形式で自動採番する
- 既存ファイルがある場合は失敗する
- Firestore / Drive へは書き込まない
- 作成後に `validate_datalink_frontmatter` で検証する
