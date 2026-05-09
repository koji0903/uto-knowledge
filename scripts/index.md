---
id: index_scripts
type: index
tags: [index, scripts]
created: 2026-05-04
---

# 自動化スクリプト

検証、生成、同期、Firestore / Google Drive 連携のスクリプトを置く場所。

## 入口

- `start_work.sh`: 作業開始チェック。`--ai` と `--task` 指定で競合レポート付きハンドオフも生成
- `end_work.sh`: 作業終了チェック。検証後に運用ブリーフも更新
- `maintenance_check.sh`: ローカル / フルメンテナンス
- `generate_ai_context.sh`: 複数AIへ渡す共通コンテキスト生成
- `generate_handoff_prompt.sh`: AI別ハンドオフ依頼文生成。`--conflict-report` で競合レポートを添付
- `detect_ai_conflicts.sh`: AI作業の競合候補検出
- `generate_policy_card_report.sh`: 政策実行カードの棚卸しレポート生成
- `generate_operations_brief.sh`: Git、AI競合、政策実行、DataLinkをまとめた運用ブリーフ生成
- `validate_vault.sh`: Vault 構造検証
- `validate_ai_operations_docs.sh`: AI運用ドキュメントの古い参照・入口整合性検証
- `validate_datalink_samples.sh`: Firestore dry-run対象のDataLink実データ検証
- `validate_datalink_references.sh`: DataLink実データの政策カード・関連ファイル参照検証
- `validate_datalink_scaffold.sh`: DataLinkテンプレートとscaffold dry-run検証
- `validate_drive_structure_config.sh`: Drive構成とローカルDataLinkフォルダの対応検証
- `validate_policy_card_references.sh`: 政策カードと議会質問・根拠資料の参照検証
- `scaffold_datalink_note.sh`: DataLinkノート作成

## 注意

スクリプト名は他の設定から参照されるため変更しない。
