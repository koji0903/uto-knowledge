---
id: moc_japanese_naming_map
type: runbook
tags: [moc, naming, japanese]
created: 2026-05-04
---

# 日本語運用名対応表

## 目的

実フォルダ名・実ファイル名は英数字のまま維持し、Obsidian 上の理解と日常運用では日本語名を使えるようにする。

## 基本方針

- 実パスは変更しない
- スクリプト、MCP、Firestore、GitHub Actions が参照する名前は維持する
- Obsidian 上の表示名、説明、見出し、索引は日本語化する
- 日本語名は `index.md` とこの対応表で管理する

## Vault 直下

| 実パス | 日本語運用名 | 役割 |
| --- | --- | --- |
| `00_Inbox` | 受信箱 | 未整理メモ、AI 下書き、一時メモ |
| `01_Daily` | 日次ログ | 日々の活動、気づき、次アクション |
| `02_Project` | プロジェクト | 実行中プロジェクトの作業メモ |
| `03_Knowledge` | 知識 | 横断的な知識資産 |
| `04_DataLink` | データ連携 | Firestore と対応する構造化ノート |
| `05_MOC` | 構造マップ | 設計、運用、索引、runbook |
| `06_Templates` | テンプレート | Obsidian / DataLink 用テンプレート |
| `99_Archive` | アーカイブ | 過去資産、退避データ |
| `docs` | ドキュメント | OS 別テストや補足資料 |
| `mcp` | MCP 設定 | AI クライアント連携設定 |
| `scripts` | 自動化スクリプト | 検証、生成、同期、運用コマンド |

## 知識領域

| 実パス | 日本語運用名 |
| --- | --- |
| `03_Knowledge/policy` | 政策 |
| `03_Knowledge/business` | 事業 |
| `03_Knowledge/tech` | 技術 |
| `03_Knowledge/agriculture` | 農業 |

## DataLink

| 実パス | 日本語運用名 | Firestore collection |
| --- | --- | --- |
| `04_DataLink/decisions` | 意思決定 | `decisions` |
| `04_DataLink/producers` | 生産者 | `producers` |
| `04_DataLink/products` | 商品 | `products` |
| `04_DataLink/projects` | プロジェクト | `projects` |
| `04_DataLink/logs` | 同期ログ | `logs` |

## 注意

- フォルダ名そのものを日本語に変更しない
- `firestore_collection` と `firestore_doc_id` は英数字のまま維持する
- スクリプト名は英数字のまま維持する
- 日本語表示を増やす場合は、まず `index.md` または Markdown 本文へ追加する

## Obsidian 上の見え方

ファイルツリーは実フォルダ名を表示するため、英数字のまま見える。
日本語表示は以下を入口にする。

| 入口 | 用途 |
| --- | --- |
| `ホーム.md` | Vault 全体の日本語ホーム |
| `.obsidian/bookmarks.json` | 左サイドバー Bookmarks の日本語表示 |
| 各フォルダの `index.md` | フォルダごとの日本語説明 |
