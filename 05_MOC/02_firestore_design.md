---
id: moc_firestore_design
type: moc
tags: [moc, firestore, data-os]
created: {{date}}
---

# Firestore Design

## 目的

Firestore を構造化データの保存先とし、Obsidian の Markdown と対応できる最小 collection を用意する。

## Collections

| collection | 対応フォルダ | 用途 |
| --- | --- | --- |
| producers | 04_DataLink/producers | 生産者、取引先、関係者 |
| products | 04_DataLink/products | 商品、SKU、品目 |
| projects | 04_DataLink/projects | 実行案件、開発案件 |
| logs | 04_DataLink/logs | 活動ログ、同期ログ、意思決定ログ |

## 共通フィールド

| field | type | 用途 |
| --- | --- | --- |
| id | string | document id と同一 |
| name | string | 表示名 |
| type | string | producer / product / project / log |
| status | string | active / archived / pending |
| obsidian_path | string | 対応 Markdown の Vault 内パス |
| drive_url | string | 関連 Drive URL |
| tags | array | 分類タグ |
| created_at | timestamp | 作成日時 |
| updated_at | timestamp | 更新日時 |

## 最小運用

- 最初は手動で Markdown と Firestore の id を揃える
- 自動同期は後から追加する
- Firestore に本文全文を入れず、要約と参照パスを中心にする
- Markdown を一次情報、Firestore を構造化インデックスとして扱う
