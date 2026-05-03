---
id: moc_production_data_gate
type: runbook
tags: [moc, production, datalink, firestore]
created: 2026-05-03
---

# Production Data Gate

## 目的

sample ではない本番 DataLink ノートを Firestore / Google Drive と連携する前に、必要な確認を行う。

## 対象

| data type | folder | Firestore collection |
| --- | --- | --- |
| producer | 04_DataLink/producers | producers |
| product | 04_DataLink/products | products |
| project | 04_DataLink/projects | projects |
| log | 04_DataLink/logs | logs |

## チェックリスト

テンプレート:

```text
06_Templates/template_production_checklist.md
```

## Gate 1: Obsidian

- `id` が命名規則に沿っている
- `firestore_doc_id` が `id` と一致している
- `firestore_collection` が保存先フォルダと一致している
- `tags` が配列である
- `status` が設定されている
- 本文に判断理由や文脈がある

## Gate 2: Google Drive

- ファイル実体が必要な場合、Drive に保存されている
- ファイル名に関連 id が含まれている
- `drive_url` または `drive_folder_id` が frontmatter に入っている
- 共有範囲が必要最小限である

## Gate 3: Firestore Dry-run

```bash
bash scripts/validate_datalink_frontmatter.sh
bash scripts/datalink_to_firestore_apply.sh --dry-run
```

## Gate 4: Apply

```bash
bash scripts/datalink_to_firestore_apply.sh --apply
bash scripts/check_firestore_drift.sh
```

## Gate 5: Logs

- `04_DataLink/logs` に操作ログを作成する
- Git commit message に変更意図を含める
- Push 後に GitHub Actions の成功を確認する

## 禁止事項

- `.env` や token を Git に含めない
- Firestore 既存 document を確認なしで上書きしない
- Google Drive のファイルを削除で処理しない
- 不確実な内容を本番 collection に直接入れない
