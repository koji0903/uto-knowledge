---
id: dec_20260507_ai_handoff_operations
type: decision
firestore_collection: decisions
firestore_doc_id: dec_20260507_ai_handoff_operations
created: 2026-05-07
status: active
tags: [DataLink, Firestore, decision, AI運用, MCP]
related_files: [AGENTS.md, mcp/ai_profiles/handoff_prompt.md, scripts/generate_handoff_prompt.mjs, scripts/validate_ai_operations_docs.mjs]
related_collections: [logs, projects]
---

# 決定: 複数AI運用をハンドオフ生成とCI検証で管理する

## 概要

Claude、Gemini、ChatGPT / Codex が同じVaultを扱う前提で、AI間の作業引き継ぎを `AGENTS.md`、`tmp/ai_context.md`、ハンドオフプロンプトで標準化する。

## 背景

uto-knowledge は、Obsidianを思考OS、FirestoreをデータOS、Google Driveをファイル実体、MCPをAI連携口として使う。

複数AIが同じ構造を読む場合、依頼文、書き込み範囲、完了条件が曖昧だと、リンク切れ、DataLink frontmatter不整合、Firestore反映前の確認漏れが起きやすい。

## 決定内容

- AI作業の入口は [[AGENTS|AI運用ガイド]] と `tmp/ai_context.md` に統一する
- AI別の依頼文は [[mcp/ai_profiles/handoff_prompt|AIハンドオフプロンプト]] を正とする
- 依頼文生成は `bash scripts/generate_handoff_prompt.sh --ai claude --task "依頼内容"` を使う
- 作業開始時は `bash scripts/start_work.sh --ai claude --task "依頼内容"` を使える状態にする
- `scripts/validate_ai_operations_docs.sh` でハンドオフ生成をCI検証する
- GitHub Actions `Validate Vault` で、AI運用ドキュメント、DataLink、Obsidianリンク、Firestore dry-runをまとめて検証する

## 根拠

- AIごとに役割が異なるため、共通前提とAI別重点を分ける必要がある
- `tmp/` はGit管理外のため、生成物を安全に作り直せる
- ハンドオフ生成をCIで実行すれば、テンプレートやスクリプト変更による破損を早期検出できる
- Firestore対象データは `firestore_collection` と `firestore_doc_id` を持つため、DataLinkからデータOSへ展開できる

## 関連リンク

- [[AGENTS|AI運用ガイド]]
- [[mcp/ai_profiles/handoff_prompt|AIハンドオフプロンプト]]
- [[mcp/ai_profiles/task_router|Task Router]]
- [[../logs/index|ログ台帳]]
- [[../projects/index|プロジェクト台帳]]
