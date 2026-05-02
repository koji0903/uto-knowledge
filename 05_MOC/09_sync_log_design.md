---
id: moc_sync_log_design
type: moc
tags: [moc, sync, log]
created: {{date}}
---

# Sync Log Design

## 目的

Obsidian、Firestore、Google Drive、MCP の間で行われた操作を追跡できるようにする。

## 保存先

```text
04_DataLink/logs
```

## ログ対象

| event | description |
| --- | --- |
| ai_note_created | AI が Markdown を作成 |
| ai_note_updated | AI が Markdown を更新 |
| firestore_doc_created | Firestore document を作成 |
| firestore_doc_updated | Firestore document を更新 |
| drive_file_added | Google Drive にファイルを追加 |
| drive_file_moved | Google Drive のファイルを移動 |
| mcp_config_changed | MCP 設定を変更 |
| git_push | GitHub へ Push |

## frontmatter

```yaml
---
id: log_{{date}}_
type: log
event:
actor:
target_system:
target_id:
firestore_collection:
firestore_doc_id:
drive_file_id:
drive_url:
git_commit:
tags: [sync]
created: {{date}}
status: active
---
```

## 本文

```text
# 同期ログ

## 概要

## 変更内容

## 影響範囲

## 確認結果

## 次アクション
```

## 運用ルール

- 1 操作 1 ログを基本にする
- 小さな Markdown 追記だけなら日次ログで代替できる
- Firestore / Drive / MCP の変更は専用ログを残す
- Git commit hash がある場合は `git_commit` に記録する
