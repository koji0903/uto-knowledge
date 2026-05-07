---
id: decisions_index_20260507
type: index
title: 意思決定台帳
created: 2026-05-07
status: active
tags: [DataLink, Firestore, 意思決定, index]
---

# 意思決定台帳

政策実行、データ連携、Firestore反映、Google Drive更新などの意思決定を管理する場所。

## Firestore対応

| 項目 | 値 |
| --- | --- |
| collection | `decisions` |
| Obsidian folder | `04_DataLink/decisions` |
| Google Drive folder | `decisions` |

## 最小項目

| 項目 | 用途 |
| --- | --- |
| `id` | `dec_` で始まる意思決定ID |
| `type` | `decision` |
| `firestore_collection` | `decisions` |
| `firestore_doc_id` | Firestore document ID |
| `created` | 作成日 |
| `status` | draft、active、archived |

## 関連リンク

- [[../projects/index|プロジェクト台帳]]
- [[../logs/index|ログ台帳]]
- [[../02_POLICY_CARDS/policy_execution_board|政策実行ボード]]
