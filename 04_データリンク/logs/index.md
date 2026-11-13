---
id: logs_index_20260507
type: index
title: ログ台帳
created: 2026-05-07
status: active
tags: [DataLink, Firestore, ログ, 同期, index]
---

# ログ台帳

Firestore、Google Drive、Obsidian、議会活動、政策実行カードの更新履歴を管理する場所。

## Firestore対応

| 項目 | 値 |
| --- | --- |
| collection | `logs` |
| Obsidian folder | `04_DataLink/logs` |
| Google Drive folder | `logs` |

## 最小項目

| 項目 | 用途 |
| --- | --- |
| `id` | `log_` で始まるログID |
| `event_type` | sync、meeting、decision、question_update、data_updateなど |
| `summary` | ログ概要 |
| `related_files` | 関連ファイル |
| `related_policy_cards` | 関連政策カード |
| `created` | 作成日 |
| `status` | active、archivedなど |

## 登録ルール

- Firestore反映、Drive構成更新、政策カード更新など、後で追跡したい作業を残す
- 議会答弁を受けて政策カードを更新した場合は、該当質問ノートもリンクする
- 作業ログは短くてもよいが、関連ファイルを必ず残す

## 登録済みログ

| ログ | 種別 | 概要 |
| --- | --- | --- |
| [[log_20260507_001|log_20260507_001]] | data_update | 地域商社向けDataLinkスキーマと初期プロジェクトを追加 |
| [[log_20260507_002|log_20260507_002]] | data_update | 複数AI運用のハンドオフ生成とCI検証を整備 |

## 関連リンク

- [[../projects/index|プロジェクト台帳]]
- [[../02_POLICY_CARDS/policy_execution_board|政策実行ボード]]
- [[../01_ASSEMBLY/questions/index|一般質問・質疑]]
- [[../01_ASSEMBLY/evidence/index|根拠資料]]
