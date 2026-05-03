# AI Operating Guide

この Vault を扱う AI エージェント向けの運用ガイド。

## 最初に読む

1. `README.md`
2. `05_MOC/00_system_overview.md`
3. **`mcp/ai_profiles/README.md`** ← NEW: AI 毎の役割定義
4. **`mcp/ai_profiles/task_router.md`** ← NEW: タスク振り分けロジック
5. `05_MOC/08_ai_write_policy.md`
6. `05_MOC/09_sync_log_design.md`
7. `05_MOC/01_datalink_frontmatter.md`

## マルチエージェント（複数 AI）活用

複数の AI（Claude、Gemini、ChatGPT）を効率的に使い分けるためのガイド。

### AI 毎の役割

| AI | 強み | 推奨タスク |
|-----|------|---------|
| **Claude** | 深い分析、複雑な推論 | 意思決定支援、設計検討、矛盾検出 |
| **Gemini** | 検索、最新情報、マルチモーダル | 情報収集、外部データ連携、Google Workspace |
| **ChatGPT** | コード、実装、ドキュメント生成 | プログラミング、スクリプト、ドキュメント |

詳細は以下を参照：

- `mcp/ai_profiles/claude_profile.md` — Claude 詳細プロフィール
- `mcp/ai_profiles/gemini_profile.md` — Gemini 詳細プロフィール
- `mcp/ai_profiles/chatgpt_profile.md` — ChatGPT 詳細プロフィール
- `mcp/ai_profiles/task_router.md` — タスク判定フロー

### タスク振り分け方法

```
1. mcp/ai_profiles/task_router.md で判定フローを確認
2. 最適な AI（リード AI）を決定
3. 必要に応じてサポート AI を指定
4. 複合タスクの場合は流れを計画
5. 実施後に 04_DataLink/logs に記録
```

---

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

変更前後に security check を実行する。

```bash
bash scripts/security_check.sh
```

## 変更前チェック

```bash
git status --short --branch --ignored
bash scripts/check_environment.sh
bash scripts/generate_ai_context.sh
```

## 新しい環境での初期化

```bash
bash scripts/bootstrap_local_env.sh
```

## 外部連携チェック

```bash
bash scripts/verify_all.sh
```

## メンテナンスチェック

```bash
bash scripts/maintenance_check.sh local
bash scripts/maintenance_check.sh full
```

## AI 引き継ぎコンテキスト

```bash
bash scripts/generate_ai_context.sh
```

生成先:

```text
tmp/ai_context.md
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
- 本番投入前に `05_MOC/25_production_data_gate.md` を確認する
- DataLink ノート作成は `scripts/scaffold_datalink_note.sh` を優先する
- 外部連携や GitHub push 後は `scripts/create_sync_log.sh` で同期ログを残す

```bash
bash scripts/datalink_to_firestore_apply.sh --dry-run
bash scripts/datalink_to_firestore_apply.sh --apply
```

## 同期ログ

```bash
bash scripts/create_sync_log.sh --event git_push --target-system github --target-id main --summary "GitHub に変更を push"
```

## Google Drive

- Root folder: `uto-knowledge-assets`
- Folder IDs は `.env` に保存する
- Drive 変更時は `04_DataLink/logs` に記録する

## Git

- 小さくコミットする
- 変更意図を commit message に入れる
- Push 後に `git status --short --branch` を確認する
