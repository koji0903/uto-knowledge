---
id: mcp_readme
type: setup
tags: [mcp, ai]
created: {{date}}
---

# MCP Setup

## 目的

Claude、Gemini、ChatGPT から同じ Obsidian / Firestore / Google Drive 環境を参照できるようにする。

## 基本方針

- ローカル Vault を一次情報として扱う
- 秘密情報は `.env` または各 AI クライアントの安全な設定領域に置く
- GitHub には設定テンプレートだけを置く
- MCP サーバーは読み取りから開始する
- 書き込み権限は `AGENTS.md` の運用ルールとDataLink検証を通る範囲に限定する

## 設定ファイル

| file | 用途 |
| --- | --- |
| mcp.servers.example.json | MCP サーバー設定の雛形 |
| clients/claude_desktop.example.json | Claude Desktop 向け雛形 |
| clients/generic_mcp_client.example.json | 汎用 MCP client 向け雛形 |

## 初期接続

最初は filesystem MCP だけを有効にし、Obsidian Vault を読み取り対象にする。

```text
uto-knowledge-filesystem
```

Firestore と Google Drive は placeholder として定義し、利用する MCP サーバー実装を決めてから有効化する。

## 設定生成

```bash
bash scripts/render_mcp_filesystem_config.sh
```

生成された `tmp/mcp.filesystem.json` を利用する MCP client の設定へ反映する。

## 推奨順序

1. filesystem MCP で Vault を読む
2. Firestore MCP を読み取り専用で接続する
3. Google Drive MCP を読み取り専用で接続する
4. 書き込み操作は `AGENTS.md` の書き込みルールに沿って、dry-runと検証後に行う

## 注意

- サービスアカウント JSON を Git に含めない
- `.env` を Git に含めない
- AI からの通常書き込みは、`00_Inbox`、`01_Daily`、`04_DataLink/logs` を基本にする
- Firestore対象データを作る場合は、`04_DataLink/decisions`、`producers`、`products`、`projects`、`logs` のいずれかに作り、frontmatter検証を通す
