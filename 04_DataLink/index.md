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
| [[decisions/index|decisions]] | 意思決定 | `decisions` |
| [[producers/index|producers]] | 生産者 | `producers` |
| [[products/index|products]] | 商品・産品 | `products` |
| [[projects/index|projects]] | プロジェクト | `projects` |
| [[logs/index|logs]] | ログ | `logs` |

## 地域商社向けDataLink

- [[00_SYSTEM/regional_trading_company_datalink_schema|地域商社 DataLink 最小スキーマ]]
- [[02_POLICY_CARDS/industry/pc_industry_001_regional_trading_company|地域商社構想の実装準備]]
- [[02_POLICY_CARDS/policy_execution_board|政策実行ボード]]
