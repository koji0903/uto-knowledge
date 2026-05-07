---
id: projects_index_20260507
type: index
title: プロジェクト台帳
created: 2026-05-07
status: active
tags: [DataLink, Firestore, プロジェクト, PFU, index]
---

# プロジェクト台帳

政策実行カードから派生した実装プロジェクト、PFU、検証活動を管理する場所。

## Firestore対応

| 項目 | 値 |
| --- | --- |
| collection | `projects` |
| Obsidian folder | `04_DataLink/projects` |
| Google Drive folder | `projects` |

## 最小項目

| 項目 | 用途 |
| --- | --- |
| `id` | `prj_` または `project_` で始まるプロジェクトID |
| `name` | プロジェクト名 |
| `domain` | 産業、教育、防災、財政、移住、行政DXなど |
| `status` | idea、planning、active、paused、done |
| `owner` | 主担当 |
| `stakeholders` | 関係者・関係部署 |
| `related_policy_cards` | 関連する政策実行カード |
| `related_collections` | producers、products、logsなど |
| `next_action` | 次にやること |

## 登録ルール

- 政策実行カードから実装に移す場合は、必ずプロジェクト台帳に登録する
- 会議、更新、同期、意思決定は [[../logs/index|ログ台帳]] に残す
- PFUを作る場合は、参加者と役割を明確にする

## 関連リンク

- [[../logs/index|ログ台帳]]
- [[../02_POLICY_CARDS/policy_execution_board|政策実行ボード]]
- [[../02_POLICY_CARDS/industry/pc_industry_005_cross_department_industry_pfu|産業横断PFUの設計]]
- [[../00_SYSTEM/L3_organization_pfu]]
