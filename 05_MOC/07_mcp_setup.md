---
id: moc_mcp_setup
type: moc
tags: [moc, mcp, ai-integration]
created: {{date}}
---

# MCP Setup

## 目的

Claude、Gemini、ChatGPT が同じナレッジ基盤を参照できるように、MCP 接続の共通方針を定義する。

## 接続対象

| target | role | initial mode |
| --- | --- | --- |
| Obsidian Vault | Markdown の一次情報 | read |
| Firestore | 構造化データ | read |
| Google Drive | ファイル実体 | read |

## 初期 MCP サーバー

| server | 用途 |
| --- | --- |
| uto-knowledge-filesystem | ローカル Vault の読み取り |
| uto-knowledge-firestore | Firestore 参照用 placeholder |
| uto-knowledge-drive | Google Drive 参照用 placeholder |

## 設定雛形

```text
mcp/mcp.servers.example.json
```

## 運用ルール

- 最初は読み取り専用で開始する
- 書き込み権限は対象フォルダを限定する
- AI が生成した内容は Markdown と Git 履歴に残す
- Firestore は構造化インデックスとして扱う
- Google Drive はファイル実体の保存先として扱う

## AI 別の考え方

| AI | 使い方 |
| --- | --- |
| Claude | MCP 経由で Vault と構造化データを参照 |
| Gemini | Google 系データとの親和性を活かして Drive / Firestore を参照 |
| ChatGPT | 設計、実装、検証、GitHub 運用の中心として利用 |

## 次に決めること

- Firestore MCP サーバーの実装
- Google Drive MCP サーバーの実装
- 書き込みを許可するフォルダ
- AI が作成したログの保存先
