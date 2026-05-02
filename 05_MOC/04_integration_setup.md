---
id: moc_integration_setup
type: moc
tags: [moc, setup, firestore, google-drive, mcp]
created: {{date}}
---

# Integration Setup

## 目的

Firestore、Google Drive、MCP を安全に併用するための初期設定手順をまとめる。

## 前提

- GitHub には秘密情報を保存しない
- `.env` はローカル専用とする
- `.env.example` をもとに各環境で `.env` を作成する
- サービスアカウント JSON は Git 管理しない

## 1. 環境変数

`.env.example` をコピーして `.env` を作成する。

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## 2. Firestore

Firestore は `04_DataLink` と対応させる。

| Firestore collection | Obsidian folder |
| --- | --- |
| producers | 04_DataLink/producers |
| products | 04_DataLink/products |
| projects | 04_DataLink/projects |
| logs | 04_DataLink/logs |

初期運用では、Firestore document id と Markdown frontmatter の `id` を同じ値にする。

## 3. Google Drive

Drive にはファイル実体を置き、Obsidian と Firestore には参照 URL または folder id を記録する。

フォルダ構造は `drive.structure.json` に定義する。

推奨ルート:

```text
uto-knowledge-assets
```

推奨サブフォルダ:

```text
producers
products
projects
logs
```

## 4. MCP

MCP は AI から共通環境へアクセスするための接続層として扱う。

初期段階では以下を読み取り対象にする。

- Obsidian Vault
- Firestore collections
- Google Drive assets folder

## 5. 検証

Mac / Linux:

```bash
bash scripts/validate_vault.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate_vault.ps1
```
