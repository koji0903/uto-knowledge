---
id: mcp_gemini_notes
type: setup
tags: [mcp, gemini, google]
created: 2026-05-03
---

# Gemini Notes

## 目的

Gemini から Firestore / Google Drive / Obsidian Vault を参照するときの考え方をまとめる。

## 方針

- Google Drive と Firestore は Google アカウント側の権限で管理する
- Obsidian Vault は filesystem MCP または GitHub 経由で参照する
- Firestore の構造は `04_DataLink/00_SYSTEM/regional_trading_company_datalink_schema.md` と `04_DataLink/index.md` を参照する
- Drive の構造は `drive.structure.json` を参照する

## 注意

Gemini 側の MCP 対応や接続方式は利用環境によって異なるため、この Vault では共通設定の雛形だけを管理する。
