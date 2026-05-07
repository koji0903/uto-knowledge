---
id: mcp_ai_conflict_detector
type: guide
tags: [mcp, ai, conflict, validation]
created: 2026-05-08
---

# AI競合検出

複数AIが同じVaultを扱うとき、DataLink、政策カード、作業ワークツリーの競合候補を早めに見つけるための運用メモ。

## 目的

- 必須DataLink文書がFirestore dry-run対象から外れていないか確認する
- DataLink IDや政策カードIDの重複を検出する
- 未コミット変更やClaude作業ワークツリーの存在を、AI引き継ぎ前に把握する

## 実行

```bash
bash scripts/detect_ai_conflicts.sh --out tmp/ai_conflict_report.md
```

HIGH競合があれば終了コードを失敗にする場合:

```bash
bash scripts/detect_ai_conflicts.sh --strict
```

## 出力

`tmp/ai_conflict_report.md` に次を出力する。

- HIGH / MEDIUM / LOW の件数
- Firestore dry-run対象文書数
- 必須DataLink文書数
- 政策カード数
- 競合候補と推奨アクション

## 運用ルール

- `LOW` は作業中の注意として扱う
- `HIGH` は他AIへ引き継ぐ前に解消する
- `.claude/` 配下の成果物は、必要なものだけmainへ選別して取り込む
- 検出結果を他AIに渡す場合は、[[handoff_prompt|AIハンドオフプロンプト]] と一緒に共有する
