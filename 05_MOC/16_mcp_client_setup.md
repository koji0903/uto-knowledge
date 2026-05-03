---
id: moc_mcp_client_setup
type: moc
tags: [moc, mcp, client-setup]
created: 2026-05-03
---

# MCP Client Setup

## 目的

複数の AI クライアントが、この Vault を filesystem MCP 経由で参照できるようにする。

## 追加ファイル

| file | 用途 |
| --- | --- |
| mcp/clients/claude_desktop.example.json | Claude Desktop 向け雛形 |
| mcp/clients/generic_mcp_client.example.json | 汎用 MCP client 向け雛形 |
| mcp/clients/chatgpt_codex_notes.md | ChatGPT / Codex 向けメモ |
| mcp/clients/gemini_notes.md | Gemini 向けメモ |
| scripts/render_mcp_filesystem_config.* | 現在の Vault path で MCP 設定を生成 |

## 設定生成

Mac / Linux:

```bash
bash scripts/render_mcp_filesystem_config.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\render_mcp_filesystem_config.ps1
```

生成先:

```text
tmp/mcp.filesystem.json
```

`tmp/` は Git 管理しない。

## 初期接続

最初は filesystem MCP のみを有効にする。

```text
uto-knowledge-filesystem
```

Firestore / Google Drive はすでに検証スクリプトから接続できるため、MCP 書き込み接続は運用ルール確定後に追加する。

## 注意

- client 固有の秘密設定は Git 管理しない
- 書き込み可能な MCP server は最初から有効化しない
- 生成された `tmp/mcp.filesystem.json` を各クライアントの設定に写す
