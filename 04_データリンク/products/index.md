---
id: products_index_20260507
type: index
title: 商品・産品台帳
created: 2026-05-07
status: active
tags: [DataLink, Firestore, 商品, 特産品, 地域商社, index]
---

# 商品・産品台帳

宇土ブランド、特産品、ふるさと納税返礼品、地域商社で扱う商品情報を管理する場所。

## Firestore対応

| 項目 | 値 |
| --- | --- |
| collection | `products` |
| Obsidian folder | `04_DataLink/products` |
| Google Drive folder | `products` |

## 最小項目

| 項目 | 用途 |
| --- | --- |
| `id` | `prod_` で始まる商品ID |
| `name` | 商品・産品名 |
| `producer_id` | 生産者ID |
| `category` | 農産品、水産品、加工品、体験、サービスなど |
| `sales_status` | 未調査、商品化候補、販売中、休止 |
| `furusato_status` | 未登録、登録検討、登録済み、改善対象 |
| `channels` | EC、直売、物産展、ふるさと納税、卸など |
| `strengths` | 強み・訴求点 |
| `issues` | 課題 |
| `related_policy_cards` | 関連する政策実行カード |

## 登録ルール

- 商品化前の情報は `sales_status` を明確にする
- ふるさと納税と接続する場合は `furusato_status` を必ず更新する
- 生産者情報は [[../producers/index|生産者台帳]] に分ける

## 関連リンク

- [[../producers/index|生産者台帳]]
- [[../projects/index|プロジェクト台帳]]
- [[../02_POLICY_CARDS/industry/pc_industry_002_furusato_tax_strategy|ふるさと納税を地域商社の販路に接続]]
- [[../02_POLICY_CARDS/industry/pc_industry_003_uto_brand_product_catalog|宇土ブランド・特産品カタログ整備]]
- [[../00_SYSTEM/industry_os]]
- [[../00_SYSTEM/utomachi_100_store_specification]]
