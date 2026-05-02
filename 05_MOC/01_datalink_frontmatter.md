---
id: moc_datalink_frontmatter
type: moc
tags: [moc, datalink, frontmatter]
created: {{date}}
---

# DataLink Frontmatter Standard

## 目的

`04_DataLink` 配下の Markdown と Firestore document を 1 対 1 で対応させる。

## 共通 frontmatter

```yaml
---
id: 
type: 
firestore_collection: 
firestore_doc_id: 
drive_folder_id: 
drive_url: 
tags: []
created: {{date}}
updated: 
status: active
---
```

## id 命名規則

| 対象 | prefix | 例 |
| --- | --- | --- |
| producer | prodcr_ | prodcr_001 |
| product | prod_ | prod_001 |
| project | prj_ | prj_001 |
| log | log_ | log_20260503_001 |

## type

| フォルダ | type | firestore_collection |
| --- | --- | --- |
| 04_DataLink/producers | producer | producers |
| 04_DataLink/products | product | products |
| 04_DataLink/projects | project | projects |
| 04_DataLink/logs | log | logs |

## 運用ルール

- `id` と `firestore_doc_id` は原則同じ値にする
- `firestore_collection` は Firestore 側 collection 名と一致させる
- Drive ファイルがある場合は `drive_url` または `drive_folder_id` を記録する
- AI が読む前提で、本文には判断理由や文脈を残す
