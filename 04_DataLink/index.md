---
id: index_datalink
type: index
tags: [index, datalink]
created: 2026-05-04
---

# データ連携

Firestore と対応する構造化ノートを置く場所。

## 重要ルール

- `firestore_collection` と `firestore_doc_id` を維持する
- Firestore へ反映する前に dry-run を行う
- 反映後は drift check を行う

## Collection

| フォルダ | 日本語名 | Firestore collection |
| --- | --- | --- |
| `decisions` | 意思決定 | `decisions` |
| `producers` | 生産者 | `producers` |
| `products` | 商品 | `products` |
| `projects` | プロジェクト | `projects` |
| `logs` | 同期ログ | `logs` |
