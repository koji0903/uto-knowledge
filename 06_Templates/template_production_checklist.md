---
id: checklist_
type: checklist
tags: [production-check]
created: {{date}}
status: draft
---

# 本番投入チェックリスト

## 対象

| 項目 | 内容 |
| --- | --- |
| 対象ID |  |
| 種別 |  |
| Obsidian path |  |
| Firestore path |  |
| Drive URL |  |

## 事前確認

- [ ] `id` と `firestore_doc_id` が一致している
- [ ] `firestore_collection` が保存先フォルダと一致している
- [ ] `tags` が配列になっている
- [ ] `status` が設定されている
- [ ] Drive folder / file が必要な場合、`drive_url` が入っている
- [ ] 本文に判断理由や文脈が残っている

## Dry-run

- [ ] `bash scripts/validate_datalink_frontmatter.sh`
- [ ] `bash scripts/datalink_to_firestore_apply.sh --dry-run`

## Apply

- [ ] apply 対象が sample ではなく本番データであることを確認した
- [ ] `bash scripts/datalink_to_firestore_apply.sh --apply`
- [ ] `bash scripts/check_firestore_drift.sh`

## ログ

- [ ] `04_DataLink/logs` に操作ログを作成した
- [ ] Git commit message に変更意図を含めた
- [ ] GitHub Actions が成功した

## 結果

## 次アクション
