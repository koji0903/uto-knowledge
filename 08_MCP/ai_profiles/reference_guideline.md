# AI間の相互参照・学習ループガイドライン

複数AIが同じナレッジベースで協力する際、後発AIが先発AIの推論・分析を参照・継承することで、**知識の蓄積と相互学習が加速**します。このガイドラインは、AI間の「思考の継承」を体系化します。

## AI間学習ループの流れ

```
ステップ1: 先発AI（Claude）が作業を実施
  └─ 複雑な分析、矛盾検出、戦略検討などを実施
  └─ 結果を 04_DataLink/ai_decisions/claude_*.md に記録

ステップ2: 後発AI（Gemini）がそれを参照
  └─ Claude の分析を読み込む
  └─ 自分の役割（市場調査など）でそれを補足
  └─ 結果を 04_DataLink/ai_decisions/gemini_*.md に記録

ステップ3: さらに後発AI（ChatGPT）がそれを参照
  └─ Claude と Gemini の成果を読む
  └─ それを実装スクリプト化
  └─ 結果を 04_DataLink/ai_decisions/chatgpt_*.md に記録

ステップ4: すべての結果を統合
  └─ logs/log_*.md に全AI の成果を統合記録
  └─ 次の AI 引き継ぎ時に参考情報として活用
```

## AI別の推奨参照パターン

### Claude → 次のAI への参考情報

Claude は **深い分析・矛盾検出・複数視点の検討** を提供します。後発AI が参照すべき情報：

**ファイル形式:** `04_DataLink/ai_decisions/claude_[task_name]_[date].md`

**例:**
```
04_DataLink/ai_decisions/claude_policy_analysis_20260507.md
04_DataLink/ai_decisions/claude_conflict_resolution_20260507.md
04_DataLink/ai_decisions/claude_strategy_review_20260507.md
```

**内容構成:**
```markdown
# Claude 分析結果: [タスク名]

## 背景
- 実施日時: 2026-05-07
- 依頼内容: [具体的なタスク]
- 対象ドキュメント: [pc_industry_001, prj_regional_trading_pfu など]

## 分析結果
### 発見1: [矛盾名]
- 詳細な分析
- 複数の視点からの評価
- リスク評価

### 発見2: ...

## 推奨アクション
- [ ] Gemini: 市場データで以下を確認してください
  - ...
- [ ] ChatGPT: 以下を実装スクリプト化してください
  - ...

## 根拠
- 参照したドキュメント
- 論理的根拠
- 不確実性の指摘
```

---

### Gemini → 次のAI への参考情報

Gemini は **外部情報・最新トレンド・市場調査** を提供します。後発AI が参照すべき情報：

**ファイル形式:** `04_DataLink/ai_decisions/gemini_[research_topic]_[date].md`

**例:**
```
04_DataLink/ai_decisions/gemini_market_research_20260507.md
04_DataLink/ai_decisions/gemini_competitor_analysis_20260507.md
04_DataLink/ai_decisions/gemini_trend_report_20260507.md
```

**内容構成:**
```markdown
# Gemini リサーチ結果: [リサーチトピック]

## リサーチ対象
- 実施日時: 2026-05-07
- リサーチ内容: [市場、競合、トレンドなど]
- 情報源: [外部サイト、データベース など]

## 調査結果

### トレンド1: [トピック]
- 概要
- 出典
- 宇土市への示唆

### トレンド2: ...

## 競合・参考事例
- 類似地域の実装例
- 成功・失敗パターン

## Claude への質問・検証依頼
- [ ] この市場トレンドと宇土市の戦略方針に矛盾はないか？
- [ ] 見積もった売上目標は現実的か？
  - ...

## ChatGPT への実装依頼
- [ ] 以下のデータを products 台帳にテンプレート化してください
  - ...
```

---

### ChatGPT → 次のAI への参考情報

ChatGPT は **実装・スクリプト・ドキュメント整備** を提供します。後発AI が参照すべき情報：

**ファイル形式:** `04_DataLink/ai_decisions/chatgpt_[implementation]_[date].md`

**例:**
```
04_DataLink/ai_decisions/chatgpt_producer_scaffold_20260507.md
04_DataLink/ai_decisions/chatgpt_validation_script_20260507.md
04_DataLink/ai_decisions/chatgpt_documentation_20260507.md
```

**内容構成:**
```markdown
# ChatGPT 実装結果: [実装内容]

## 実装内容
- 実施日時: 2026-05-07
- 実装タスク: [具体的な実装]
- 関連ドキュメント: [関連 scaffold / スクリプト]

## 実装内容

### 1. 生産者台帳 Scaffold テンプレート
```bash
# 使用方法
bash scripts/scaffold_datalink_note.sh --type producer \
  --id prodcr_apple_001 \
  --title "リンゴ農家 山田太郎"
```

### 2. 検証スクリプト生成
- `scripts/validate_producer_data.sh` を新規作成
- [具体的な検証内容]

## テスト実績
- [実施したテスト]
- [成功・失敗の詳細]

## 次ステップへの注意
- [ ] Claude: このスクリプトの検証ロジックは妥当か？
- [ ] Gemini: テストデータで想定される業界標準に合致しているか？
```

---

## 学習コンテキストの自動生成

複数AI がそれぞれの役割を果たす際、全体的なコンテキストが必要です。`scripts/generate_ai_learning_context.mjs` がこれを自動生成します。

### 使用方法

```bash
# Gemini 向けの学習コンテキストを生成
bash scripts/generate_ai_learning_context.sh --target-ai gemini

# Claude 向けの学習コンテキストを生成
bash scripts/generate_ai_learning_context.sh --target-ai claude
```

### 出力内容

**tmp/gemini_learning_context.md:**
```markdown
# Gemini 向け 学習コンテキスト (2026-05-07)

## 直前の Claude 分析（過去3件）
1. claude_conflict_resolution_20260507.md
   - 地域商社とふるさと納税の売上見積もりが矛盾
   - 推奨: 市場データで検証が必要

2. claude_policy_analysis_20260506.md
   - 産業OS の重工業戦略と農業戦略の親和性確認
   - 推奨: 両産業の市場規模と成長率を調査

## Gemini が補足すべき情報
- [ ] 地域商社の売上ベンチマーク（類似規模自治体）
- [ ] 返礼品市場トレンド（過去3年）
- [ ] ふるさと納税の成功事例

## 先週の ChatGPT 実装実績
- producer scaffold テンプレート完成
- validate_producer_data.sh スクリプト公開
- [参考になる実装パターン]

## 今日の Claude からの引き継ぎメモ
[新規決定事項や重要指摘]
```

---

## ベストプラクティス

### 1. AI間の「思考の チェーン」を記録

各AI が作業完了時に、以下を記録：

```
1. 何を実施したか
2. その根拠（どの情報を使ったか）
3. 次のAI への推奨アクション
4. 不確実性・要確認事項
```

### 2. 参照元を明示する

AI が先発AI の成果を参照したら、必ず記録：

```markdown
## 参照した先発AI の成果
- claude_policy_analysis_20260507.md → 目標値矛盾の検出
- gemini_market_research_20260506.md → 市場規模データ

## 本分析での活用方法
[具体的にどう使ったか]
```

### 3. 矛盾を見つけたら即座に記録

相互参照で矛盾を見つけたら、それを claude_conflict_resolution_*.md に記録：

```markdown
# Claude 矛盾検出結果

## 矛盾: 売上目標の不一致
- gemini_market_research_20260507.md では「150M円/年」
- claude_policy_analysis_20260506.md では「500M円/年」

## 根拠の確認
- gemini の出典は？
- claude の前提は？

## 推奨解決
- Gemini に出典の詳細を確認
- 前提条件を統一
```

### 4. 段階的な知識の深化を目指す

```
Day 1:
  Claude: 基本戦略の分析 → claude_strategy_20250501.md
  Gemini: 市場調査でそれを補足 → gemini_market_20250501.md

Day 2:
  Claude: Gemini の市場データを使い、戦略を再評価
  ChatGPT: それを実装スクリプト化

Day 3:
  実装されたスクリプトで実際のデータが集まる
  → 次のラウンドの分析へ
```

---

## AI 間のコミュニケーション例

### 例1: 矛盾解決のループ

```
Claude が矛盾を検出:
  └─ claude_conflict_detection_20260507.md
     「地域商社とふるさと納税の売上見積もりが乖離」

↓

Gemini が補足:
  └─ gemini_market_research_20260507.md
     「実市場では～という理由で、こちらが正確」

↓

Claude が再分析:
  └─ claude_resolution_20260507.md
     「Gemini の市場データを使い、戦略を修正」

↓

ChatGPT が実装:
  └─ chatgpt_scripts_20260507.md
     「修正された戦略をスクリプト化」
```

### 例2: 逐次的な知識追加

```
Claude が prj_regional_trading_pfu を分析:
  └─ claude_strategy.md
     「必要な生産者数は 30～50」

↓

Gemini が市場調査:
  └─ gemini_research.md
     「実際の農家数は現在 200」
     「うち有機農業は 20～30」

↓

Claude が新情報で再評価:
  └─ claude_updated_strategy.md
     「有機農業に特化すべき」

↓

ChatGPT が実装:
  └─ chatgpt_producer_classifier.sh
     「有機農業フィルタ付き producer scaffold」
```

---

## トラブルシューティング

### Q: AI 間の情報がかみ合わない

**A:** 必ず `scripts/detect_ai_conflicts.sh` を実行して矛盾を特定してください。

### Q: 古い情報を参照してしまった

**A:** `04_DataLink/ai_decisions/` ファイルは日付付けで整理されます。必ず直近のファイルを参照してください。

### Q: 参考情報が多すぎて整理が追いつかない

**A:** `scripts/generate_ai_learning_context.sh` は過去3件のみ提示します。それで十分なら、古い分は `archive/` に移動してください。

