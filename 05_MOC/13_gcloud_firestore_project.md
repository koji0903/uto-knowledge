---
id: moc_gcloud_firestore_project
type: moc
tags: [moc, gcloud, firestore]
created: 2026-05-03
---

# Google Cloud Firestore Project

## 対象プロジェクト

```text
uto-os
```

## 確認結果

| item | value |
| --- | --- |
| projectId | uto-os |
| lifecycleState | ACTIVE |
| Firestore API | enabled |
| database | (default) |
| type | FIRESTORE_NATIVE |
| location | asia-northeast2 |
| freeTier | true |

## ローカル設定

Google Cloud CLI の対象プロジェクト:

```bash
gcloud config set project uto-os
```

Firebase CLI 用の `.firebaserc` は Git 管理しない。

```json
{
  "projects": {
    "default": "uto-os"
  }
}
```

## 次の手順

1. `.env` に `GOOGLE_CLOUD_PROJECT=uto-os` を設定する
2. `bash scripts/datalink_to_firestore_apply.sh --dry-run` を確認する
3. sample データのみで `--apply` を実行する
4. Firestore 上の document を確認する

## 実行結果

2026-05-03 に sample 4件を Firestore に投入し、REST API で読み戻し確認した。

```text
producers/prodcr_001
products/prod_001
projects/prj_001
logs/log_20260503_001
```
