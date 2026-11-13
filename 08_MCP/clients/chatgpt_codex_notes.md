---
id: mcp_chatgpt_codex_notes
type: setup
tags: [mcp, chatgpt, codex]
created: 2026-05-03
---

# ChatGPT / Codex Notes

## 目的

ChatGPT / Codex からこの Vault を扱うときの前提をまとめる。

## 方針

- Codex はローカル workspace のファイルを直接扱える
- まず `README.md` と `AGENTS.md` を読む
- MCP 設定が必要なクライアントでは `mcp/clients/generic_mcp_client.example.json` を使う
- 外部連携検証は `bash scripts/verify_all.sh` を使う

## 注意

ChatGPT 側の MCP 接続方式は利用環境によって異なるため、この Vault では client 固有の秘密設定を Git 管理しない。
