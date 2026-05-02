---
id: moc_system_overview
type: moc
tags: [moc, architecture]
created: {{date}}
---

# UTO Knowledge System Overview

## 目的

Obsidian を中心に思考と記録を管理し、Firestore と Google Drive を併用して、複数の AI から同じ情報基盤を参照できる状態を作る。

## 役割分担

| 領域 | 役割 |
| --- | --- |
| Obsidian | 思考、設計、日次ログ、MOC |
| GitHub | 履歴管理、復元、環境共有 |
| Firestore | 構造化データ、アプリ連携、AI 参照 |
| Google Drive | PDF、画像、契約書、表計算などのファイル実体 |
| MCP | Claude / Gemini / ChatGPT から各データへ接続する層 |

## Vault 構造

| フォルダ | 用途 |
| --- | --- |
| 00_Inbox | 未整理メモ |
| 01_Daily | 日次ログ |
| 02_Project | 実行中プロジェクト |
| 03_Knowledge | 横断知識 |
| 04_DataLink | Firestore 対応ノート |
| 05_MOC | 全体構造の地図 |
| 06_Templates | Obsidian テンプレート |
| 99_Archive | 過去資産 |

## 基本方針

- ローカル Vault を主軸にする
- Markdown は Git 管理する
- 機密情報は Git に含めない
- Firestore の document id と Markdown の frontmatter id を対応させる
- Google Drive の実体ファイルは URL または id で参照する
