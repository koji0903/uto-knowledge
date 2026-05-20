---
tags: [nori, obsidian, index, home]
aliases: [ウトマチナレッジベース, Utomachi Knowledge Base]
created: 2026-05-12
updated: 2026-05-12
---

# ウトマチナレッジベース 📚

**最終更新**: 2026年5月12日  
**プロジェクト全体進捗**: 70% 完了

---

## 🎯 このナレッジベースについて

ウトマチプラットフォーム - 海苔養殖意思決定支援システム(Nori Farming DSS)の実装進捗、技術情報、ドキュメントを一元管理するナレッジベースです。

### 🔗 全体 Vault ナビゲーション

このページは **Nori Farming DSS** に特化したホームページです。  
**宇土OS 全体**のナレッジベースは以下をご覧ください：

| 対象 | リンク |
|------|--------|
| **日本語版（全体説明）** | [[ホーム|🇯🇵 宇土OS ナレッジベース ホーム]] |
| **英語版（プロジェクト進捗）** | [[00_HOME|📊 Utomachi Platform Home]] |
| **ナレッジベース層** | [[03_Knowledge/_OVERVIEW|📚 03_Knowledge - 学習ガイド]] |

---

## 🚀 今すぐ実施すべきこと

### 🌊 海苔OS (Nori OS) インポート (準備完了)

**クイックスタート**:
1. `02_Agriculture/nori_farming_dss/NORI_OS_QUICKSTART.md` でセットアップ確認
2. ドライラン実行: `npm run import:nori:all:dry-run`
3. 本番インポート: `npm run import:nori:all`
4. 検証実行: `npm run verify:nori`
5. アプリケーション起動: `npm run dev`

**関連ドキュメント**:
- [[02_Agriculture/nori_farming_dss/NORI_OS_QUICKSTART|🚀 クイックスタートガイド]] (5分で開始)
- [[02_Agriculture/nori_farming_dss/Phase4_Utomachi_Integration|詳細統合ガイド]] (詳細な手順)
- [[02_Agriculture/nori_farming_dss/NORI_SEASON_DEFINITION|シーズン管理]] (運用体系)

### Phase 5C-2: Firestoreマイグレーション (準備完了)

**次のステップ**:
1. `02_Agriculture/nori_farming_dss/Phase5C_Migration_Execution_Guide.md` で詳細確認
2. `02_Agriculture/nori_farming_dss/MIGRATION_QUICK_START.md` で実行コマンド確認
3. Firestore バックアップ作成
4. ドライラン実行
5. 本番マイグレーション実行

**関連ドキュメント**:
- Phase5C_Migration_Execution_Guide.md
- MIGRATION_QUICK_START.md
- Phase5C_Status_Report.md

---

## 📊 現在の進捗

| フェーズ | 内容 | ステータス | 完了日 |
|---------|------|----------|--------|
| Phase 1 | 基盤構築 | ✅ 完了 | 2026-03-15 |
| Phase 2 | 予測モデル | ✅ 完了 | 2026-04-20 |
| Phase 3 | データ統合 | ✅ 完了 | 2026-05-11 |
| Phase 4 | ML統合 | ✅ 完了 | 2026-05-12 |
| Phase 5A | データモデル | ✅ 完了 | 2026-05-12 |
| Phase 5B | UIコンポーネント | ✅ 完了 | 2026-05-12 |
| **Phase 5C** | **Firestore最適化** | **🔄 準備完了** | **進行中** |
| Phase 5D | テスト・デプロイ | 📋 計画中 | 2026-05-26～ |

---

## 📂 ドキュメント構成

```
02_Agriculture/nori_farming_dss/
├── Phase5_Integration_Progress.md ← 全体進捗報告
├── Phase5B_UI_Component_Updates.md ← UI実装詳細
├── Phase5C_Implementation_Plan.md ← Firestore計画書
├── Phase5C_Status_Report.md ← Firestore状況報告
├── Phase5C_Migration_Execution_Guide.md ← 詳細実行ガイド
└── MIGRATION_QUICK_START.md ← クイックスタート
```

---

## 🔗 重要なドキュメント

### マイグレーション実行

| ドキュメント | 用途 | 対象者 |
|-----------|------|--------|
| MIGRATION_QUICK_START.md | コマンドリファレンス | エンジニア |
| Phase5C_Migration_Execution_Guide.md | 詳細なステップバイステップ手順 | エンジニア |
| Phase5C_Status_Report.md | 進捗状況と背景情報 | 全員 |
| Phase5C_Implementation_Plan.md | 技術仕様書 | 技術者 |

### 全体進捗

| ドキュメント | 内容 |
|-----------|------|
| Phase5_Integration_Progress.md | 全Phaseの進捗状況 |
| Phase5B_UI_Component_Updates.md | UIコンポーネント実装詳細 |

---

## 💡 タグ別情報検索

### #firestore #database
- Phase5C_Implementation_Plan.md
- Phase5C_Status_Report.md
- Phase5C_Migration_Execution_Guide.md

### #season #feature
- Phase5B_UI_Component_Updates.md
- Phase5_Integration_Progress.md

### #react #frontend
- Phase5B_UI_Component_Updates.md

### #migration #execution
- MIGRATION_QUICK_START.md
- Phase5C_Migration_Execution_Guide.md

### #status #progress
- Phase5_Integration_Progress.md
- Phase5C_Status_Report.md

---

## ⚡ クイックコマンド

### Firestore マイグレーション

```bash
# 1. ドライラン (テスト、本番前に必ず実行)
cd /Users/hijikuro/ViveCoding/utomachi_PF
node scripts/migrateNoriSeasons.js --dry-run

# 2. 本番実行 (バックアップ作成後に実行)
node scripts/migrateNoriSeasons.js

# 3. 検証
node scripts/verifyNoriSeasons.js
```

### 開発環境

```bash
# プロジェクト移動
cd /Users/hijikuro/ViveCoding/utomachi_PF

# ビルド
npm run build

# 開発サーバー
npm run dev
```

---

## 📍 ファイル場所

### ナレッジベース
- 場所: `/Users/hijikuro/workspace/uto-knowledge/`
- Obsidian対応: ✅ はい

### ソースコード
- プロジェクト: `/Users/hijikuro/ViveCoding/utomachi_PF/`
- スクリプト: `scripts/migrateNoriSeasons.ts`, `scripts/verifyNoriSeasons.ts`
- コンポーネント: `src/components/farmer/marine/nori/`
- ユーティリティ: `src/lib/nori/`

---

## 🎯 次のマイルストーン

### 2026-05-12 (本日) 🎉
- ✅ Phase 5C-1: 完全完了 (スキーマ拡張)
- ✅ Phase 5C-2: 準備完了 (マイグレーション実行待機)

### 2026-05-19 予定
- 📋 Phase 5C-2: マイグレーション実行
- 📋 Phase 5C-3: 複合インデックス作成

### 2026-05-26 予定
- 📋 Phase 5D: テスト開始

### 2026-06-02 予定
- 📋 本番デプロイ

---

## 📞 よくある質問

**Q: マイグレーション手順を確認したい**
→ `MIGRATION_QUICK_START.md` を確認

**Q: マイグレーションのリスクを理解したい**
→ `Phase5C_Migration_Execution_Guide.md` の「リスク・緩和策」セクション

**Q: 全体的な進捗を知りたい**
→ `Phase5_Integration_Progress.md` を確認

**Q: 実装の背景と詳細を知りたい**
→ `Phase5C_Status_Report.md` を確認

---

## 🔄 最新の更新履歴

| 日付 | 更新内容 |
|------|--------|
| 2026-05-12 | Phase 5C マイグレーション準備完了、ドキュメント整備 |
| 2026-05-12 | Obsidian ナレッジベース構築 |

---

**ステータス**: 🟢 最新  
**最終更新**: 2026-05-12  
**次の更新**: Phase 5C-2 実行後

---

## 📚 すべてのドキュメント

1. **Phase5_Integration_Progress.md** - 全体進捗報告 (70% 完了)
2. **Phase5B_UI_Component_Updates.md** - UIコンポーネント実装詳細
3. **Phase5C_Implementation_Plan.md** - Firestore実装計画書
4. **Phase5C_Status_Report.md** - Firestore状況報告
5. **Phase5C_Migration_Execution_Guide.md** - マイグレーション詳細ガイド
6. **MIGRATION_QUICK_START.md** - クイックスタートガイド
