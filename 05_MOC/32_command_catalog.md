---
id: moc_command_catalog
type: runbook
tags: [moc, operations, commands]
created: 2026-05-04
---

# Command Catalog

## 目的

日常運用、検証、Firestore / Google Drive 連携、AI 引き継ぎで使うコマンドを一覧化する。

## 作業開始

| 目的 | Mac / Linux | Windows PowerShell |
| --- | --- | --- |
| ローカル初期化 | `bash scripts/bootstrap_local_env.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\bootstrap_local_env.ps1` |
| 環境セットアップ | `bash scripts/setup-environment.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\setup-environment.ps1` |
| マルチ環境検証 | `bash scripts/verify-multienv-setup.sh` | `bash scripts/verify-multienv-setup.sh` |
| AI コンテキスト生成 | `bash scripts/generate_ai_context.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\generate_ai_context.ps1` |

## ローカル検証

| 目的 | Mac / Linux | Windows PowerShell |
| --- | --- | --- |
| Vault 構造検証 | `bash scripts/validate_vault.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\validate_vault.ps1` |
| セキュリティ検証 | `bash scripts/security_check.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\security_check.ps1` |
| MCP 設定検証 | `bash scripts/validate_mcp_config.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\validate_mcp_config.ps1` |
| DataLink frontmatter 検証 | `bash scripts/validate_datalink_frontmatter.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\validate_datalink_frontmatter.ps1` |
| ローカル総合検証 | `bash scripts/maintenance_check.sh local` | `powershell -ExecutionPolicy Bypass -File .\scripts\maintenance_check.ps1 local` |

## 外部連携検証

| 目的 | Mac / Linux | Windows PowerShell |
| --- | --- | --- |
| 外部連携込み総合検証 | `bash scripts/verify_all.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\verify_all.ps1` |
| Firestore sample 読み戻し | `bash scripts/verify_firestore_samples.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\verify_firestore_samples.ps1` |
| Firestore drift check | `bash scripts/check_firestore_drift.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\check_firestore_drift.ps1` |
| Google Drive 構造確認 | `bash scripts/verify_drive_structure.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\verify_drive_structure.ps1` |
| Firestore / Drive link 確認 | `bash scripts/verify_firestore_drive_links.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\verify_firestore_drive_links.ps1` |
| フルメンテナンス | `bash scripts/maintenance_check.sh full` | `powershell -ExecutionPolicy Bypass -File .\scripts\maintenance_check.ps1 full` |

## 生成

| 目的 | Mac / Linux | Windows PowerShell |
| --- | --- | --- |
| DataLink ノート作成 | `bash scripts/scaffold_datalink_note.sh --type project --id prj_002 --title "新規プロジェクト"` | `powershell -ExecutionPolicy Bypass -File .\scripts\scaffold_datalink_note.ps1 --type project --id prj_002 --title "新規プロジェクト"` |
| 同期ログ作成 | `bash scripts/create_sync_log.sh --event git_push --target-system github --target-id main --summary "GitHub に変更を push"` | `powershell -ExecutionPolicy Bypass -File .\scripts\create_sync_log.ps1 --event git_push --target-system github --target-id main --summary "GitHub に変更を push"` |
| 状態レポート生成 | `bash scripts/generate_status_report.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\generate_status_report.ps1` |
| Changelog 生成 | `bash scripts/generate_changelog.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\generate_changelog.ps1` |
| MCP filesystem 設定生成 | `bash scripts/render_mcp_filesystem_config.sh` | `powershell -ExecutionPolicy Bypass -File .\scripts\render_mcp_filesystem_config.ps1` |

## Firestore 書き込み

| 目的 | コマンド |
| --- | --- |
| apply 前確認 | `bash scripts/datalink_to_firestore_apply.sh --dry-run` |
| Firestore 反映 | `bash scripts/datalink_to_firestore_apply.sh --apply` |
| 反映後確認 | `bash scripts/check_firestore_drift.sh` |

## GitHub

| 目的 | コマンド |
| --- | --- |
| 状態確認 | `git status --short --branch --ignored` |
| commit | `git add <files>` -> `git commit -m "message"` |
| push | `git push` |
| Actions 確認 | `gh run list --repo koji0903/uto-knowledge --workflow validate.yml --limit 3` |

## 注意

- `.env`, `.env.local`, `.firebaserc`, `.obsidian/workspace.json`, `tmp/` は Git 管理しない
- Firestore / Drive 変更後は同期ログを作成する
- Firestore apply は dry-run と drift check をセットで行う
- Windows 実機検証は `docs/WINDOWS_SETUP_TEST.md` を参照する
