---
id: decisions_index
type: index
tags: [decisions, index]
created: 2026-05-03
---

# 決定ログ インデックス

uto-knowledge で行われた重要な意思決定の記録。

## 概要

| 項目 | 内容 |
|------|------|
| **保存先** | `04_DataLink/decisions/` |
| **日本語運用名** | 意思決定 |
| **Firestore collection** | `decisions` |
| **ファイル名規則** | `decision_YYYYMMDD_NNN.md` |
| **frontmatter** | 標準化（status, approved_by など） |
| **テンプレート** | `06_Templates/template_decision_log.md` |

## 全決定一覧

### 2026年5月

| # | 日付 | 決定内容 | リード AI | Status |
|----|------|---------|---------|--------|
| 001 | 2026-05-03 | AI Personas フレームワーク採用 | Claude | approved |

### 過去のアーカイブ

[過去の決定は日付別にフォルダ分けするか、archived status で管理]

---

## 決定の検索・集計

### カテゴリ別

**戦略・方針決定:**
- decision_20260503_001 — AI Personas フレームワーク採用

**設計決定:**
[該当する決定がない]

**リスク対応:**
[該当する決定がない]

**データリンク関連:**
[該当する決定がない]

### AI 別参加

**Claude がリード:**
- decision_20260503_001

**Gemini がリード:**
[該当する決定がない]

**ChatGPT がリード:**
[該当する決定がない]

### ステータス別

**Draft（検討中）:**
[該当する決定がない]

**Proposed（提案待ち）:**
[該当する決定がない]

**Approved（承認済み）:**
- decision_20260503_001

**Implemented（実装完了）:**
[該当する決定がない]

**Archived（参考用）:**
[該当する決定がない]

---

## 統計情報

**総決定数:** 1件

**承認率:** 100% (1/1)

**実装率:** 0% (0/1) ※ 新規のため

**AI 参加度:**
- Claude: 1件
- Gemini: 0件
- ChatGPT: 0件

---

## 新しい決定を作成する際

1. `06_Templates/template_decision_log.md` をコピー
2. ファイル名を `decision_YYYYMMDD_NNN.md` に変更
3. frontmatter を更新
4. 内容を記入
5. このインデックスに追加

---

## 決定ログシステムの詳細

詳しくは `05_MOC/29_decision_log_system.md` を参照してください。

**主な特徴:**

- 複数 AI の見方を記録: Claude / Gemini / ChatGPT の分析を比較
- 判断根拠を可視化: なぜこの判断をしたのか
- User 承認フロー: 重要な決定は User が最終判断
- 実装後の振返り: 判定の精度を検証
- 過去からの学習: 類似決定時に参照可能

---

## よくある質問

### Q: 小さな判断も記録する？

A: **いいえ**。以下の基準で判定：
- 複数選択肢がある
- システム全体に影響
- 逆転困難

すべてに YES なら記録。

### Q: 実装中に方針が変わったら？

A: 新しい決定ログを作成して、前の決定と関連付けてください。

### Q: AI の判定が間違っていたら？

A: **それが学習機会です**。振返りセクションに記録して、次回の改善に活かしてください。

## 注意

この `index.md` は索引用であり、Firestore dry-run からは除外される。

---

**Last Updated:** 2026-05-04
