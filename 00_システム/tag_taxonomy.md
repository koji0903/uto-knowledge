---
id: tag_taxonomy
type: guide
title: "タグ語彙集 (Tag Taxonomy)"
created: 2026-05-31
updated: 2026-05-31
status: active
tags: [meta, taxonomy, governance, moc]
---

> ⬅ [[ホーム|🏠 ホーム]]

# 🏷️ タグ語彙集 (Tag Taxonomy)

Vault全体で使用するタグの**正規語彙集**。新しいタグを追加する前にこのページで類似タグを確認してください。

> **検証**: `bash scripts/validate_tags.sh` で frontmatter `tags:` フィールドの語彙整合性を確認できます。

---

## 🎯 タグ設計の3原則

1. **小文字スネークケース推奨** — 例: `policy-layer`（英）/ `市政`（日本語は短語）
2. **接頭辞による分類** — `type/*`, `domain/*`, `os/*`, `phase/*`, `status/*`
3. **タグは検索性であり、フォルダではない** — 重要な所属は frontmatter `type:` / `domain:` で。タグは横断検索用

---

## 📚 正規タグ語彙

### 1. type/* — ノートの種別（必須推奨）

| タグ | 用途 | 例 |
|------|------|----|
| `moc` | Map of Content（フォルダMOC） | `index.md` |
| `specification` | 仕様書・設計書 | `*_os_specification.md` |
| `implementation` | 実装ガイド | `*_os_implementation.md` |
| `use_case` | ユースケース | `*_use_cases.md` |
| `report` | レポート・分析 | `Phase*_*Report.md` |
| `dashboard` | ダッシュボード | `運用ダッシュボード.md` |
| `concept` | 概念定義 | `civic/concepts/*` |
| `policy_card` | 政策実行カード | `pc_*.md` |
| `assembly_question` | 議会一般質問 | `r*_*_hijikuro_general_question.md` |
| `evidence` | 根拠資料 | `04_DataLink/01_議会活動/evidence/*` |
| `decision` | 意思決定ログ | `decisions/decision_*.md` |
| `log` | 運用ログ | `logs/log_*.md` |
| `template` | テンプレート | `05_Templates/*` |
| `guide` | ガイド・手引き | このノート、AGENTS.md等 |
| `index` | レガシー（=`moc`） | 旧式ノートに残存 |

### 2. domain/* — 業務領域

| タグ | 領域 |
|------|------|
| `civic` | 市政・議員活動 |
| `assembly` | 議会 |
| `finance` | 財政・予算 |
| `policy` | 政策設計 |
| `agriculture` | 農業全般 |
| `nori` | 海苔養殖 |
| `02_農業/熊本県有機農業研究会` | 有機農業（くまゆうけん） |
| `infrastructure` | インフラ・公共施設 |
| `population` | 人口動態 |
| `industry` | 産業・地域経済 |
| `dx` | デジタル変革 |

### 3. os/* — 6つの機能OS

| タグ | OS |
|------|----|
| `os/rmo` | RMO OS（地域組織運営） |
| `os/childcare` | 子育てOS |
| `os/education` | 教育OS |
| `os/industry` | 産業OS |
| `os/relocation` | 移住・定住OS |
| `os/utomachi-store` | ウトマチ百貨店 |

> 互換タグ: 既存ノートに `子育てOS`, `教育OS`, `産業OS`, `移住・定住OS`, `RMO`, `ウトマチ百貨店`（日本語）が混在しています。新規ノートでは英語 `os/*` を推奨。

### 4. layer/* — 宇土OS 8層構造

| タグ | 層 |
|------|----|
| `layer/l0` | L0 前提 |
| `layer/l1` | L1 事実 |
| `layer/l2` | L2 課題 |
| `layer/l3` | L3 組織 |
| `layer/l4` | L4 財源 |
| `layer/l5` | L5 インフラ |
| `layer/l6` | L6 政策 |
| `layer/l7` | L7 ビジョン |
| `宇土OS` | 全層横断（互換） |

### 5. phase/* — プロジェクトフェーズ

| タグ | フェーズ |
|------|---------|
| `phase/nori-phase3` | 海苔DSS Phase 3（データ統合） |
| `phase/nori-phase4` | 海苔DSS Phase 4（ML統合） |
| `phase/nori-phase5` | 海苔DSS Phase 5（Firestore統合） |

### 6. status/* — ノートのライフサイクル状態

| タグ | 状態 |
|------|------|
| `status/draft` | ドラフト・作成中 |
| `status/active` | 運用中（標準） |
| `status/archived` | アーカイブ |
| `status/deprecated` | 非推奨 |

> 互換: frontmatter `status: active`（フィールド形式）でも代替可能。

### 7. tech/* — 技術スタック

| タグ | 技術 |
|------|------|
| `tech/firestore` | Firestore |
| `tech/firebase` | Firebase |
| `tech/react` | React |
| `tech/nextjs` | Next.js |
| `tech/gemini` | Google Gemini AI |
| `tech/mcp` | MCP（AI協調） |
| `tech/obsidian` | Obsidian |
| `tech/ml` | 機械学習 |

### 8. meta/* — メタ情報

| タグ | 用途 |
|------|------|
| `meta` | メタドキュメント（このノート等） |
| `home` | ホームノート |
| `taxonomy` | 語彙集 |
| `governance` | 運用ルール |
| `migration` | データ移行 |

---

## ✅ 推奨記法

### Frontmatter での記述

```yaml
---
id: my_note_id
type: specification
domain: civic
status: active
tags: [type/specification, domain/civic, os/utomachi-store, status/active]
---
```

### インラインタグ（本文中）

```markdown
このノートは #civic #財政 に関連します。
```

> ⚠️ インラインタグはfrontmatterタグと**重複しない**ようにしてください（Obsidianは両方を統合検索）。

---

## 🚫 非推奨パターン

| パターン | 理由 | 代替 |
|---------|------|------|
| `tags: [tag1 tag2]` | スペース区切りは曖昧 | カンマ + 角括弧 |
| `#TAG_WITH_UPPER` | 大文字混在は検索性低下 | 小文字に統一 |
| `tags: ['quoted']` | 引用符は不要 | `tags: [unquoted]` |
| 同義タグの混在 | `市政` と `civic` が両在 | どちらか1つに統一 |

---

## 🔄 既存タグの統合計画（漸進的）

新規ノートから順次以下に置き換え。一括変換は実施しません（リスク管理）。

| 既存 | 推奨新タグ |
|------|----------|
| `子育てOS` | `os/childcare` |
| `教育OS` | `os/education` |
| `産業OS` | `os/industry` |
| `移住・定住OS` | `os/relocation` |
| `RMO` | `os/rmo` |
| `ウトマチ百貨店` | `os/utomachi-store` |
| `premise`, `fact-layer`, `issue-layer` ... | `layer/l0`, `layer/l1`, `layer/l2` ... |
| `index` | `moc` |

---

## 🛠 検証スクリプト

```bash
# 全 frontmatter tags を抽出して語彙集に存在しないタグを警告
bash scripts/validate_tags.sh

# 出力例:
#   ✅ 認知済みタグ: 142個
#   ⚠️  未登録タグ (5):
#       - 'foo'    (使用: 1ファイル) → 00_System/vision/example.md
```

タグを新規追加するときは、必ずこのファイルに登録してから使用してください。

---

## 📅 更新履歴

| 日付 | 変更 |
|------|------|
| 2026-05-31 | 初版作成（タグ8カテゴリ + 統合計画） |
