---
id: regional_trading_company_datalink_schema_20260507
type: system_specification
title: 地域商社 DataLink 最小スキーマ
created: 2026-05-07
status: active
tags: [DataLink, Firestore, 地域商社, ふるさと納税, schema]
---

# 地域商社 DataLink 最小スキーマ

地域商社、ふるさと納税、宇土ブランド、特産品PRを進めるために、Obsidian、Firestore、Google Driveで共通利用する最小データ設計。

## 目的

- 生産者、商品、販路、政策カードを同じ構造で扱う
- ふるさと納税、EC、物産展、商談会へ展開できる台帳を作る
- AIが検索・要約・提案しやすい形で情報を蓄積する

## コレクション

| コレクション | Obsidian | 役割 |
| --- | --- | --- |
| `producers` | [[../producers/index|生産者台帳]] | 生産者・事業者・団体 |
| `products` | [[../products/index|商品・産品台帳]] | 商品、産品、返礼品候補 |
| `projects` | [[../projects/index|プロジェクト台帳]] | 地域商社PFU、販路開拓、商品化 |
| `logs` | [[../logs/index|ログ台帳]] | 同期、会議、更新、意思決定 |

## producers

| フィールド | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `id` | string | yes | `prodcr_` で始まるID |
| `type` | string | yes | `producer` |
| `firestore_collection` | string | yes | `producers` |
| `firestore_doc_id` | string | yes | `id` と同一 |
| `name` | string | yes | 生産者・事業者名 |
| `category` | string | yes | 農産、水産、加工、飲食、小売、その他 |
| `area` | string | no | 地区・所在地 |
| `contact_status` | string | yes | 未確認、確認中、連携可、保留 |
| `main_products` | array | no | 主な商品・産品 |
| `sales_channels` | array | no | 直売、EC、ふるさと納税、物産展、卸 |
| `related_products` | array | no | 商品ID |
| `related_policy_cards` | array | no | 政策カードID |
| `created` | string | yes | 作成日 |
| `status` | string | yes | active、draft、archived |

## products

| フィールド | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `id` | string | yes | `prod_` で始まるID |
| `type` | string | yes | `product` |
| `firestore_collection` | string | yes | `products` |
| `firestore_doc_id` | string | yes | `id` と同一 |
| `name` | string | yes | 商品・産品名 |
| `producer_id` | string | no | 生産者ID |
| `category` | string | yes | 農産品、水産品、加工品、体験、サービス |
| `sales_status` | string | yes | 未調査、商品化候補、販売中、休止 |
| `furusato_status` | string | yes | 未登録、登録検討、登録済み、改善対象 |
| `channels` | array | no | EC、直売、物産展、ふるさと納税、卸 |
| `strengths` | array | no | 強み・訴求点 |
| `issues` | array | no | 課題 |
| `related_policy_cards` | array | no | 政策カードID |
| `created` | string | yes | 作成日 |
| `status` | string | yes | active、draft、archived |

## projects

| フィールド | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `id` | string | yes | `prj_` または `project_` で始まるID |
| `type` | string | yes | `project` |
| `firestore_collection` | string | yes | `projects` |
| `firestore_doc_id` | string | yes | `id` と同一 |
| `name` | string | yes | プロジェクト名 |
| `domain` | string | yes | 産業、教育、防災、財政、移住、行政DX |
| `owner` | string | no | 主担当 |
| `stakeholders` | array | no | 関係者・関係部署 |
| `related_policy_cards` | array | no | 政策カードID |
| `related_collections` | array | no | producers、products、logsなど |
| `next_action` | string | no | 次にやること |
| `created` | string | yes | 作成日 |
| `status` | string | yes | idea、planning、active、paused、done |

## logs

| フィールド | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `id` | string | yes | `log_` で始まるID |
| `type` | string | yes | `log` |
| `firestore_collection` | string | yes | `logs` |
| `firestore_doc_id` | string | yes | `id` と同一 |
| `event_type` | string | yes | sync、meeting、decision、question_update、data_update |
| `summary` | string | yes | ログ概要 |
| `related_files` | array | no | 関連ファイル |
| `related_policy_cards` | array | no | 政策カードID |
| `created` | string | yes | 作成日 |
| `status` | string | yes | active、archived |

## 最初に登録する候補

| 種別 | 候補 | 接続先 |
| --- | --- | --- |
| project | 地域商社準備PFU | [[../02_POLICY_CARDS/industry/pc_industry_001_regional_trading_company|地域商社構想の実装準備]] |
| project | ふるさと納税返礼品強化 | [[../02_POLICY_CARDS/industry/pc_industry_002_furusato_tax_strategy|ふるさと納税を地域商社の販路に接続]] |
| product | 宇土ブランド候補商品 | [[../02_POLICY_CARDS/industry/pc_industry_003_uto_brand_product_catalog|宇土ブランド・特産品カタログ整備]] |
| producer | 地域商社連携候補事業者 | [[../producers/index|生産者台帳]] |

## 関連リンク

- [[industry_os_specification]]
- [[utomachi_100_store_specification]]
- [[industry_rmo_connectivity]]
- [[../02_POLICY_CARDS/policy_execution_board]]
