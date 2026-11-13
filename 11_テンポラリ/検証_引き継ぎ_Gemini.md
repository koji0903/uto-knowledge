# AIハンドオフ

Generated: 2026-05-30T23:22:58.257Z

## 宛先

- AI: gemini
- 役割: Google Drive、外部情報、最新情報確認担当

## 前提

- このVaultは Obsidian を思考OS、FirestoreをデータOS、Google Driveをファイル実体、MCPをAI連携口として使います。
- 作業前に `AI運用ガイド.md`、`tmp/ai_context.md`、`tmp/ai_競合レポート.md` を読んでください。
- 既存のフォルダ名、ファイル名、ID、Firestore collection名を安易に変更しないでください。
- `.env`、秘密鍵、OAuthトークン、サービスアカウントJSONはGitへ追加しないでください。

## リポジトリ状態

| item | value |
| --- | --- |
| branch | develop |
| latest_commit | ec35a0f fix(ci): Update stale paths in DataLink logs and inbound references |

```text
## develop...origin/develop
 M .claudian/sessions/conv-1780114052686-nmaxlwol9.meta.json
 M 00_System/architecture/AI運用ガイド.md
 M 04_DataLink/datasets/index.md
 M 04_DataLink/reports/index.md
 M README.md
 M scripts/ai_coordination/generate_ai_sync_report.mjs
 M scripts/repair_obsidian_links.mjs
```

## AI競合検出

- report: `tmp/ai_競合レポート.md`
- status: 未生成
- 作業前に `bash scripts/detect_ai_conflicts.sh --out tmp/ai_競合レポート.md` を実行し、HIGH競合が0件であることを確認してください。


## 今回の依頼

validate gemini handoff

## 対象範囲

読むファイル:
- AI運用ガイド.md
- tmp/ai_context.md

書いてよい場所:
- 00_Inbox
- 01_Daily
- 04_DataLink/logs

## 重点

- Google Drive内の関連ファイルを探す
- 最新情報や公式情報を確認する
- 出典、日付、更新タイミングを明記する

## 成果物

- 要点
- 変更案
- 検証結果
- 未確定事項

## 完了条件

- 関連リンクが壊れていない
- Firestore対象データは `firestore_collection` と `firestore_doc_id` を持つ
- AI競合検出でHIGH競合が0件である
- 必要な検証コマンドが通っている
- 未確定事項は「未確定」と明記している

## 最小チェック

```bash
bash scripts/generate_ai_context.sh
bash scripts/detect_ai_conflicts.sh --out tmp/ai_競合レポート.md
bash scripts/validate_ai_operations_docs.sh
bash scripts/maintenance_check.sh local
```
