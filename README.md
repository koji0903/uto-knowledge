# uto-knowledge

[![Validate Vault](https://github.com/koji0903/uto-knowledge/actions/workflows/validate.yml/badge.svg)](https://github.com/koji0903/uto-knowledge/actions/workflows/validate.yml)

Obsidian を中心に、GitHub、Firestore、Google Drive、MCP を併用するナレッジ管理環境。

## 目的

- Obsidian を思考 OS として使う
- Firestore を構造化データ OS として使う
- Google Drive をファイル実体の保存先として使う
- MCP 経由で Claude / Gemini / ChatGPT から共通参照できる状態にする

## 構成

| path | role |
| --- | --- |
| 00_Inbox | 未整理メモ、AI 下書き |
| 01_Daily | 日次ログ |
| 02_Project | 実行中プロジェクト |
| 03_Knowledge | 横断知識 |
| 04_DataLink | Firestore 対応ノート |
| 05_MOC | 全体設計、運用ルール |
| 06_Templates | Obsidian テンプレート |
| 99_Archive | 過去資産 |
| mcp | MCP 設定雛形 |
| scripts | 検証、自動化スクリプト |

## 外部連携

| system | status |
| --- | --- |
| GitHub | connected |
| Firestore | connected to `uto-os` |
| Google Drive | `uto-knowledge-assets` created |
| MCP | scaffolded |

## 基本コマンド

ローカル検証:

```bash
bash scripts/check_environment.sh
```

DataLink frontmatter 検証:

```bash
bash scripts/validate_datalink_frontmatter.sh
```

Security check:

```bash
bash scripts/security_check.sh
```

ローカル環境 bootstrap:

```bash
bash scripts/bootstrap_local_env.sh
```

外部連携まで含む検証:

```bash
bash scripts/verify_all.sh
```

Firestore drift check:

```bash
bash scripts/check_firestore_drift.sh
```

状態レポート生成:

```bash
bash scripts/generate_status_report.sh
```

Changelog 生成:

```bash
bash scripts/generate_changelog.sh
```

本番 DataLink 投入前の確認:

```text
05_MOC/25_production_data_gate.md
06_Templates/template_production_checklist.md
```

メンテナンス確認:

```bash
bash scripts/maintenance_check.sh local
bash scripts/maintenance_check.sh full
```

GitHub Actions では外部接続なしの構造検証を実行する。

MCP filesystem 設定生成:

```bash
bash scripts/render_mcp_filesystem_config.sh
```

Firestore dry-run:

```bash
bash scripts/datalink_to_firestore_apply.sh --dry-run
```

Firestore apply:

```bash
bash scripts/datalink_to_firestore_apply.sh --apply
```

## 重要ルール

- `.env` は Git 管理しない
- `.firebaserc` は Git 管理しない
- サービスアカウント JSON は Git 管理しない
- AI の書き込みは `00_Inbox`、`01_Daily`、`04_DataLink/logs` から始める
- Firestore / Drive 変更時は `04_DataLink/logs` にログを残す

詳細は `05_MOC/08_ai_write_policy.md` を参照する。

復元手順は `05_MOC/17_restore_runbook.md` を参照する。

日常メンテナンスは `05_MOC/22_maintenance_runbook.md` を参照する。
