---
id: producers_index_20260507
type: index
title: 生産者台帳
created: 2026-05-07
status: active
tags: [DataLink, Firestore, 生産者, 地域商社, index]
---

# 生産者台帳

地域商社、ふるさと納税、特産品PRに接続する生産者・事業者情報を管理する場所。

## Firestore対応

| 項目 | 値 |
| --- | --- |
| collection | `producers` |
| Obsidian folder | `04_DataLink/producers` |
| Google Drive folder | `producers` |

## 最小項目

| 項目 | 用途 |
| --- | --- |
| `id` | `prodcr_` で始まる生産者ID |
| `name` | 生産者・事業者名 |
| `category` | 農産、水産、加工、飲食、小売、その他 |
| `area` | 地区・所在地 |
| `contact_status` | 未確認、確認中、連携可、保留 |
| `main_products` | 主な商品・産品 |
| `sales_channels` | 直売、EC、ふるさと納税、物産展、卸など |
| `related_products` | [[../products/index|商品台帳]] へのリンク |
| `related_policy_cards` | 関連する政策実行カード |

## 登録ルール

- 個人情報や非公開連絡先は、公開可否を確認するまで書かない
- Firestore反映前に `bash scripts/datalink_to_firestore_dry_run.sh` を実行する
- 産品・販路・支援履歴は、商品台帳・プロジェクト台帳へ分けて記録する

## 関連リンク

- [[../products/index|商品台帳]]
- [[../projects/index|プロジェクト台帳]]
- [[../02_POLICY_CARDS/industry/pc_industry_001_regional_trading_company|地域商社構想の実装準備]]
- [[../02_POLICY_CARDS/industry/pc_industry_003_uto_brand_product_catalog|宇土ブランド・特産品カタログ整備]]
- [[../00_SYSTEM/industry_os_specification]]
- [[../00_SYSTEM/utomachi_100_store_specification]]
