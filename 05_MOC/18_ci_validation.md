---
id: moc_ci_validation
type: runbook
tags: [moc, ci, github-actions]
created: 2026-05-03
---

# CI Validation

## 目的

GitHub 上でも Vault の構造と設定ファイルの破損に気づけるようにする。

## Workflow

```text
.github/workflows/validate.yml
```

## 実行タイミング

- `main` への push
- pull request
- 手動実行

## 検証内容

| step | command |
| --- | --- |
| Vault structure | `bash scripts/validate_vault.sh` |
| MCP config | `bash scripts/validate_mcp_config.sh` |
| DataLink samples | `bash scripts/validate_datalink_samples.sh` |
| Firestore dry-run | `bash scripts/datalink_to_firestore_dry_run.sh --out tmp/datalink.firestore.json` |
| Firestore apply dry-run | `bash scripts/datalink_to_firestore_apply.sh --dry-run` |
| Drive dry-run | `bash scripts/create_drive_structure.sh --dry-run` |
| MCP render | `bash scripts/render_mcp_filesystem_config.sh` |

## 外部接続

CI では Google Cloud / Google Drive への実接続は行わない。

理由:

- GitHub Actions に OAuth token を保存しない
- Firestore / Drive の write 操作を CI から実行しない
- 外部接続検証はローカルの `bash scripts/verify_all.sh` で行う

## ローカルとの差分

| command | scope |
| --- | --- |
| `bash scripts/check_environment.sh` | ローカル dry-run |
| `bash scripts/verify_all.sh` | 外部接続込み |
| GitHub Actions | 外部接続なし |
