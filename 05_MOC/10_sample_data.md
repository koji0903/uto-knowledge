---
id: moc_sample_data
type: moc
tags: [moc, sample, datalink]
created: 2026-05-03
---

# Sample Data

## 目的

DataLink、Firestore、Google Drive、MCP の連携を実データ投入前に確認する。

## サンプル一覧

| type | id | file | Firestore path |
| --- | --- | --- | --- |
| producer | prodcr_001 | 04_DataLink/producers/sample_prodcr_001.md | producers/prodcr_001 |
| product | prod_001 | 04_DataLink/products/sample_prod_001.md | products/prod_001 |
| project | prj_001 | 04_DataLink/projects/sample_prj_001.md | projects/prj_001 |
| log | log_20260503_001 | 04_DataLink/logs/sample_log_20260503_001.md | logs/log_20260503_001 |

## 運用ルール

- サンプルには `sample` タグを付ける
- 本番データと混在させない
- Firestore に投入する場合も sample として識別できるようにする
- 不要になったら Git 履歴を残したまま archive へ移動する
