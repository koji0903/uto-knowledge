---
id: mcp_ai_profiles
type: guide
tags: [mcp, ai, profiles]
created: 2026-05-03
---

# AI Personas & Multi-Agent Coordination

複数の AI エージェント（Claude、Gemini、ChatGPT）が uto-knowledge を共有利用するための役割定義とタスク振り分けガイド。

## 目的

- 各 AI の強み・弱みを明確化
- タスク毎に最適な AI を選択する
- AI 間の重複作業・競合を防ぐ
- マルチエージェント環境での一貫性を保つ

## クイックスタート

1. **まず読む**
   - `AI運用ガイド.md`
   - `tmp/ai_context.md`（`bash scripts/start_work.sh` で生成）
   - `task_router.md` で自分のタスクに適した AI を確認
   - `handoff_prompt.md` で依頼文の型を確認

2. **AI プロファイルを確認**
   - `claude_profile.md` （深く、複雑に考える）
   - `gemini_profile.md` （素早く、検索する）
   - `chatgpt_profile.md` （幅広く、実装する）

3. **AI を選択して作業開始**
   - 該当プロフィールの「prompt guide」を参照
   - 「注意事項」に目を通す

## AI 毎の役割概要

### Claude
- **強み**: 深い分析、複雑な推論、エッジケース対応
- **推奨タスク**: 意思決定支援、設計検討、矛盾検出
- **コンテキスト特性**: 長い思考チェーンを活用可能

### Gemini
- **強み**: 検索・最新情報、実行速度、マルチモーダル
- **推奨タスク**: 情報収集、外部データ連携、リアルタイム更新
- **コンテキスト特性**: ウェブ検索、画像処理が得意

### ChatGPT
- **強み**: 幅広いスキル、実装ガイダンス、ユースケース知識
- **推奨タスク**: プログラミング、ドキュメント作成、スキル提案
- **コンテキスト特性**: 最新のプラグイン・スキル情報

## タスク振り分け判定フロー

```
あなたのタスク
    ↓
「複雑な分析・判断が中心か？」
    ├→ YES → Claude を推奨
    └→ NO
        ↓
「外部情報・検索が必要か？」
    ├→ YES → Gemini を推奨
    └→ NO
        ↓
「実装・コード・スキル活用か？」
    ├→ YES → ChatGPT を推奨
    └→ NO → task_router.md で詳細確認
```

詳細は `task_router.md` を参照してください。

## マルチエージェント運用ルール

### 同じタスクに複数 AI を使う場合

1. **リード AI を決める** （主担当）
2. **サブ AI に相談** （第二意見・検証用）
3. **比較分析を記録** （どちらの判断が採択されたか）

例：
```
メイン: Claude で深い分析 → 複数案を提案
サブ: Gemini で外部データ検索 → 最新情報補足
判定: Claude の案 A をベースに、Gemini の情報で改善
```

### 競合・重複を避けるために

- ✅ 大きなタスクは「リード AI」を明記する
- ✅ `04_DataLink/logs/` または `04_DataLink/decisions/` に判断内容を記録する
- ✅ AI 間で異なる結論に達した場合は、その理由を記す
- ❌ 同じタスクで複数 AI が独立して動かない

## セキュリティ・権限管理

各 AI は以下の権限スコープで動作します：

| AI | 読み取り | 書き込み |
|----|--------|--------|
| Claude | ✅ 全体 | 00_Inbox, 01_Daily, 04_DataLink/logs, decisions |
| Gemini | ✅ 全体 | 00_Inbox, 01_Daily, 04_DataLink/logs, Drive連携メモ |
| ChatGPT | ✅ 全体 | 00_Inbox, 01_Daily, 04_DataLink/logs, DataLink scaffold |

Firestore対象データを作る場合は `AI運用ガイド.md` に従い、`firestore_collection` と `firestore_doc_id` を必ず設定します。

## コンテキスト提供方法

各 AI に適したコンテキストを用意：

```bash
# 共通AIコンテキスト
bash scripts/generate_ai_context.sh

# 作業開始時の一括確認
bash scripts/start_work.sh
```

詳細は `AI運用ガイド.md` と `tmp/ai_context.md` を参照。

## フィードバック・改善

AI Personas に改善が必要な場合：

1. 該当ファイルの「フィードバック」セクションにコメント
2. `00_Inbox` または `04_DataLink/logs` に改善提案メモを作成
3. User の確認後に更新

## 関連ドキュメント

- `00_System/architecture/AI運用ガイド.md` — AI 運用ガイド（全体）
- `handoff_prompt.md` — AI間の引き継ぎテンプレート
- `README.md` — Vault の入口
- `04_DataLink/index.md` — DataLink 全体
- `04_DataLink/02_POLICY_CARDS/policy_execution_board.md` — 政策実行ボード
- `00_System/vision/regional_trading_company_datalink_schema.md` — Firestore連携スキーマ
