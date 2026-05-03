---
id: moc_security_check
type: runbook
tags: [moc, security, git]
created: 2026-05-03
---

# Security Check

## 目的

Git 管理対象に秘密情報や個人環境ファイルが混入していないか確認する。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/security_check.mjs | Git tracked files の検査 |
| scripts/security_check.sh | Mac / Linux 用ラッパー |
| scripts/security_check.ps1 | Windows PowerShell 用ラッパー |

## 検査対象

- `.env`
- `.env.*`
- `.firebaserc`
- `.obsidian/workspace.json`
- `.obsidian/graph.json`
- `tmp/`
- `serviceAccount*.json`
- `firebase-adminsdk*.json`
- `*.local.json`
- private key らしき文字列
- OAuth token らしき文字列
- GitHub token らしき文字列

## 実行

Mac / Linux:

```bash
bash scripts/security_check.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\security_check.ps1
```

## CI

GitHub Actions の `Validate Vault` workflow でも実行する。

## 注意

`.env.example` と `.firebaserc.example` はサンプルとして Git 管理する。ただし実 token や秘密鍵は含めない。
