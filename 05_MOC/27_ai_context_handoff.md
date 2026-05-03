---
id: moc_ai_context_handoff
type: runbook
tags: [moc, ai, handoff]
created: 2026-05-03
---

# AI Context Handoff

## 目的

複数 AI が同じ Vault を扱う前に、現在の運用ルールと Git 状態を短く共有する。

## 生成ファイル

```text
tmp/ai_context.md
```

`tmp/` は Git 管理外のため、実行環境ごとに生成する。

## 実行コマンド

Mac / Linux:

```bash
bash scripts/generate_ai_context.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\generate_ai_context.ps1
```

## 使い方

1. 作業開始前に `generate_ai_context` を実行する
2. 生成された `tmp/ai_context.md` を AI クライアントへ渡す
3. 変更前に `git status --short --branch --ignored` を確認する
4. 変更後に `maintenance_check local` を実行する

## 含める情報

- Vault root
- Git branch / latest commit / remote
- 現在の Git status
- AI 書き込みルール
- 禁止事項
- 主要検証コマンド
- Firestore / Google Drive の運用要点
