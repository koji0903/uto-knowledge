---
id: moc_restore_runbook
type: runbook
tags: [moc, restore, onboarding]
created: 2026-05-03
---

# Restore Runbook

## 目的

別の Mac / Windows で `uto-knowledge` 環境を再現する。

## 前提

- Git が使える
- Node.js / npm / npx が使える
- GitHub にアクセスできる
- 外部連携を確認する場合は Google Cloud CLI が使える

## Clone

```bash
git clone https://github.com/koji0903/uto-knowledge.git
cd uto-knowledge
```

## Bootstrap

Mac / Linux:

```bash
bash scripts/bootstrap_local_env.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\bootstrap_local_env.ps1
```

## Google Login

Firestore / Google Drive まで検証する場合:

```bash
gcloud auth login --enable-gdrive-access
gcloud config set project uto-os
```

## Verify

ローカル検証:

```bash
bash scripts/check_environment.sh
```

外部連携込み:

```bash
bash scripts/verify_all.sh
```

## Obsidian

Obsidian では clone した `uto-knowledge` フォルダを Vault として開く。

## 注意

- `.env` は Git 管理しない
- `.firebaserc` は Git 管理しない
- `.obsidian/workspace.json` は共有しない
- Google Drive folder id は `.env.example` に含める
- OAuth token やサービスアカウント JSON は Git に含めない
