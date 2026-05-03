# AI Operating Guide

この Vault を扱う AI エージェント向けの運用ガイド。

## 最初に読む

1. `README.md`
2. `05_MOC/00_system_overview.md`
3. `05_MOC/08_ai_write_policy.md`
4. `05_MOC/09_sync_log_design.md`
5. `05_MOC/01_datalink_frontmatter.md`

## 書き込みルール

| path | policy |
| --- | --- |
| 00_Inbox | allowed |
| 01_Daily | allowed with date |
| 04_DataLink/logs | allowed |
| 02_Project | review required |
| 03_Knowledge | review required |
| 05_MOC | review required |
| 06_Templates | review required |
| 99_Archive | manual only |

## 禁止事項

- `.env` を Git に追加しない
- `.firebaserc` を Git に追加しない
- `serviceAccount*.json` を Git に追加しない
- `.obsidian/workspace.json` を共有対象にしない
- Firestore / Drive を確認なしで削除しない

## 変更前チェック

```bash
git status --short --branch --ignored
bash scripts/check_environment.sh
```

## 新しい環境での初期化

```bash
bash scripts/bootstrap_local_env.sh
```

## 外部連携チェック

```bash
bash scripts/verify_all.sh
```

## CI

GitHub Actions は外部接続なしの dry-run 検証のみを行う。

```text
.github/workflows/validate.yml
```

## MCP 設定生成

```bash
bash scripts/render_mcp_filesystem_config.sh
```

生成先:

```text
tmp/mcp.filesystem.json
```

## Firestore

- Project: `uto-os`
- Database: `(default)`
- Collections: `producers`, `products`, `projects`, `logs`
- Apply は必ず dry-run 後に行う

```bash
bash scripts/datalink_to_firestore_apply.sh --dry-run
bash scripts/datalink_to_firestore_apply.sh --apply
```

## Google Drive

- Root folder: `uto-knowledge-assets`
- Folder IDs は `.env` に保存する
- Drive 変更時は `04_DataLink/logs` に記録する

## Git

- 小さくコミットする
- 変更意図を commit message に入れる
- Push 後に `git status --short --branch` を確認する
