---
id: moc_health_check_system
type: moc
tags: [moc, monitoring, quality]
created: 2026-05-03
---

# Health Check System

uto-knowledge の品質・整合性を継続的に監視するシステム。

## 目的

- **Firestore↔Markdown の乖離を検出** — データ同期の問題を早期に発見
- **整合性を定期的に検証** — frontmatter、リンク、参照の整合性確認
- **品質ダッシュボード化** — 健全性を可視化
- **自動アラート** — 問題が発生したら通知
- **トレンド追跡** — 品質の推移を追跡

## 検証項目

### 1. Firestore↔Markdown 同期確認

```
以下を自動チェック：

✅ frontmatter の id と Firestore doc_id の一致
✅ frontmatter の firestore_collection と実際のコレクションの一致
✅ Markdown ファイルが存在するが Firestore に record がない
✅ Firestore に record があるが Markdown ファイルがない
✅ 更新日時の乖離（どちらが新しいか）
```

### 2. DataLink frontmatter 整合性

```
✅ 必須フィールドの欠落
   ├─ id, type, firestore_collection, firestore_doc_id
   └─ status, created, updated

✅ id の命名規則
   ├─ prodcr_NNN
   ├─ prod_NNN
   ├─ prj_NNN
   └─ log_YYYYMMDD_NNN

✅ status の有効性（active / archived / draft など）

✅ created / updated の日付フォーマット
```

### 3. リンク・参照の整合性

```
✅ backlink の有効性
   └─ [[参照先]] が実際に存在するか

✅ 関連 DataLink の相互参照
   ├─ producer → product
   ├─ product → project
   └─ project → producer

✅ MOC ドキュメントへのリンク
   └─ 参照先が存在するか
```

### 4. セキュリティ・ガバナンス確認

```
✅ .env / .firebaserc / serviceAccount*.json が Git に追加されていない

✅ .obsidian/workspace.json が共有対象になっていない

✅ 秘密情報（APIキー、トークンなど）が Markdown に含まれていない

✅ AI 権限が適切か（00_Inbox / 01_Daily / 04_DataLink/logs 内に限定）
```

### 5. 統計・メトリクス

```
📊 DataLink ノート数
   ├─ Producer: N 件
   ├─ Product: N 件
   ├─ Project: N 件
   └─ Log: N 件

📊 ステータス分布
   ├─ Active: N 件
   └─ Archived: N 件

📊  最近の変更
   ├─ 24時間以内: N 件
   ├─ 7日以内: N 件
   └─ 30日以内: N 件

📊 Firestore 同期状況
   ├─ 同期済み: N 件
   ├─ 乖離: N 件
   └─ 未同期: N 件
```

## スクリプト構成

### 1. `firestore_markdown_drift_detection.mjs`

**用途:** Firestore と Markdown の差分検出

**入出力:**
```
入力: Firestore + 04_DataLink/ ファイル
出力: tmp/drift_report.json
```

**検出内容:**
```json
{
  "drift_detected": true,
  "issues": [
    {
      "type": "missing_in_markdown",
      "firestore_doc_id": "prod_001",
      "collection": "products",
      "message": "Firestore に prod_001 が存在するが、Markdown ファイルがない"
    },
    {
      "type": "missing_in_firestore",
      "markdown_id": "prj_002",
      "path": "04_DataLink/projects/prj_002.md",
      "message": "Markdown ファイル prj_002.md が存在するが、Firestore に record がない"
    },
    {
      "type": "id_mismatch",
      "markdown_id": "prod_001",
      "firestore_doc_id": "prod_001_old",
      "path": "04_DataLink/products/prod_001.md",
      "message": "Markdown の id と Firestore の doc_id が不一致"
    },
    {
      "type": "timestamp_skew",
      "id": "prod_001",
      "markdown_updated": "2026-05-03",
      "firestore_updated": "2026-05-01",
      "message": "Markdown が Firestore より新しい（3日のズレ）"
    }
  ],
  "summary": {
    "total_issues": 4,
    "critical": 1,
    "warning": 3
  }
}
```

### 2. `generate_health_dashboard.sh`

**用途:** 健全性ダッシュボード生成

**出力:** `tmp/health_dashboard.md`

**内容:**
```markdown
# Health Dashboard

## ⚠️ 課題サマリー

🔴 **Critical Issues:** 0
🟡 **Warnings:** 2
🟢 **Healthy:** 285 items

## 📊 メトリクス

### DataLink 統計
- Producers: 1 active, 0 archived
- Products: 1 active, 0 archived
- Projects: 0 active, 0 archived
- Logs: 15 recent

### Firestore 同期状況
- ✅ Synced: 2
- ⚠️ Drifted: 0
- ❌ Missing: 0

### セキュリティチェック
- 秘密情報検出: ✅ クリア
- Git ignore 確認: ✅ クリア
- 権限確認: ✅ クリア

### 品質トレンド
[7日分のグラフ]

## 詳細レポート

### Firestore↔Markdown 同期
[差分レポート]

### frontmatter 整合性
[問題の詳細]

### リンク整合性
[無効なリンク一覧]

## アクション項目

- [ ] issue1 を修正
- [ ] issue2 を確認
```

## 実行スケジュール

### パターン A: 毎日自動実行（推奨）

```yaml
# .github/workflows/daily_health_check.yml

name: Daily Health Check

on:
  schedule:
    - cron: '0 1 * * *'  # 毎日 01:00 JST
    
jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: bash scripts/generate_health_dashboard.sh
      - name: Commit if changes
        run: |
          git config user.name "Health Check Bot"
          git add tmp/health_dashboard.md
          git commit -m "Daily health check" || true
          git push
```

### パターン B: 手動実行

```bash
bash scripts/generate_health_dashboard.sh
```

### パターン C: Git hook で実行

```bash
# .git/hooks/post-commit に追加
bash scripts/generate_health_dashboard.sh
```

## ダッシュボード出力例

```
生成ファイル: tmp/health_dashboard.md

内容:
  1. 課題サマリー（Critical / Warning / OK）
  2. データ統計
  3. Firestore 同期状況
  4. セキュリティチェック
  5. 品質トレンド（7日）
  6. 詳細レポート
  7. アクション項目（チェックリスト）
```

## 問題検出時の対応

### Level 1: Critical （即座に対応必須）

```
🔴 Critical Issue の例：
- Firestore に record があるが Markdown ファイルが削除されている
- 秘密情報が Markdown に含まれている
- .env が Git に追加されている
```

**対応:**
1. 即座に原因を調査
2. 修正を実施
3. 決定ログに記録（重大な乖離の場合）
4. 再度 health check を実行

### Level 2: Warning （確認・計画が必要）

```
🟡 Warning の例：
- Markdown と Firestore の更新日時が大きくズレている
- frontmatter フィールドが欠落している
- 参照先が見つからない
```

**対応:**
1. 24時間以内に確認
2. 必要に応じて修正計画
3. 月次レビューで議論

### Level 3: Info （情報のみ）

```
🟢 情報の例：
- 最近追加されたノートの統計
- 品質トレンド
```

**対応:**
- 参考情報として参照

## メンテナンス・チューニング

### 毎月確認項目

- [ ] ダッシュボードが正確に生成されているか
- [ ] 検出ルールの見直し（誤検出がないか）
- [ ] 新しい検証項目が必要か
- [ ] 自動実行スケジュールの最適化

### クエリ・分析

```bash
# 過去7日の issue トレンド
grep "timestamp" tmp/health_dashboard.md | tail -7

# Critical issue の履歴
grep -r "critical" tmp/health_reports/

# 特定の DataLink の健全性
grep "prod_001" tmp/drift_report.json
```

## 統合

### AGENTS.md との連携

AI が実装を行う際：
```bash
# 実装前
bash scripts/generate_health_dashboard.sh
→ 現在の問題を把握

# 実装後
bash scripts/generate_health_dashboard.sh
→ 改善したか確認
```

### Decision Log との連携

大きな乖離が検出された場合：
```
→ 04_DataLink/decisions/ に記録
  ├─ 何が起きたのか
  ├─ なぜ乖離が生じたのか
  ├─ どう修正するのか
  └─ 今後の防止策
```

## 関連ドキュメント

- `05_MOC/09_sync_log_design.md` — 同期ログ設計
- `05_MOC/08_ai_write_policy.md` — AI 書き込みルール
- `05_MOC/29_decision_log_system.md` — 決定ログ
- `AGENTS.md` — AI 運用ガイド

## よくある質問

### Q1: Health check が毎日必要？

A: **最初は毎日推奨**。運用が安定したら週1に減らせます。

### Q2: Issue が大量に検出されたら？

A: Priority を付けて段階的に対応：
1. Critical → 即対応
2. Warning → 1週間以内
3. Info → 月次レビュー

### Q3: 自動修正できないか？

A: 一部可能（frontmatter 補正など）ですが、データ削除など重大な変更は手動に限定。

### Q4: 検出ルールのカスタマイズは？

A: `scripts/firestore_markdown_drift_detection.mjs` の設定セクションで調整可能。
