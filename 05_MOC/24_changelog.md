---
id: moc_changelog
type: moc
tags: [moc, changelog, operations]
created: 2026-05-03
---

# Changelog

## 目的

Git commit と `04_DataLink/logs` の操作ログをまとめて、最近の変更を追いやすくする。

## スクリプト

| file | 用途 |
| --- | --- |
| scripts/generate_changelog.mjs | changelog 生成 |
| scripts/generate_changelog.sh | Mac / Linux 用ラッパー |
| scripts/generate_changelog.ps1 | Windows PowerShell 用ラッパー |

## 実行

Mac / Linux:

```bash
bash scripts/generate_changelog.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\generate_changelog.ps1
```

## 出力

```text
tmp/changelog.md
```

## 含まれる情報

- 最近の Git commit
- `04_DataLink/logs` の operation log
- event / target / created

## 運用

- メンテナンス時に生成する
- `tmp/` は Git 管理しない
- 正式な履歴は Git log と DataLink logs を正とする
