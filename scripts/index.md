---
id: index_scripts
type: index
tags: [index, scripts]
created: 2026-05-04
---

# 自動化スクリプト

検証、生成、同期、Firestore / Google Drive 連携のスクリプトを置く場所。

## 入口

- `start_work.sh`: 作業開始チェック
- `end_work.sh`: 作業終了チェック
- `maintenance_check.sh`: ローカル / フルメンテナンス
- `validate_vault.sh`: Vault 構造検証
- `validate_datalink_samples.sh`: Firestore dry-run対象のDataLink実データ検証
- `validate_datalink_references.sh`: DataLink実データの政策カード・関連ファイル参照検証
- `validate_datalink_scaffold.sh`: DataLinkテンプレートとscaffold dry-run検証
- `validate_drive_structure_config.sh`: Drive構成とローカルDataLinkフォルダの対応検証
- `scaffold_datalink_note.sh`: DataLinkノート作成

## 注意

スクリプト名は他の設定から参照されるため変更しない。
