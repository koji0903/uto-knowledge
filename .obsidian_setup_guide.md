---
tags: [obsidian, setup, configuration]
aliases: [Obsidian推奨設定, Setup Guide]
created: 2026-05-12
---

# Obsidian推奨設定ガイド

**ナレッジベース**: ウトマチ (Utomachi Nori Farming DSS)  
**設定版**: 1.0  
**最終更新**: 2026-05-12

---

## 🎯 はじめに

このナレッジベースをObsidianで最適に使用するための推奨設定をまとめています。

---

## 📋 初期セットアップ

### Step 1: ナレッジベースを開く

```bash
# Obsidianで /Users/hijikuro/workspace/uto-knowledge/ を開く
1. Obsidianを起動
2. "Open folder as vault" をクリック
3. /Users/hijikuro/workspace/uto-knowledge/ を選択
4. "Open" をクリック
```

### Step 2: デフォルト設定を確認

**Settings → Core → Default location for new notes**: 
- 設定: `01_Nori_Farming_DSS/` (ドロップダウンで選択)

**Settings → Core → Default view mode**:
- 設定: `Edit and preview side by side`

---

## 🔧 推奨コア設定

### Appearance (外観)

| 設定項目 | 推奨値 | 理由 |
|--------|--------|------|
| Theme | Obsidian (Default) | 標準で最適化 |
| Font size | 16px | 長時間読むため適度な大きさ |
| Line width | 50-70em | 読みやすさ重視 |
| Readable line length | ON | テキスト読み込みのため |
| Strict line breaks | ON | Markdownの整形崩れ防止 |

### Editor (エディタ)

| 設定項目 | 推奨値 | 理由 |
|--------|--------|------|
| Use tabs | OFF (spaces) | 整形の統一 |
| Tab indent size | 2 spaces | 見出し階層の明確化 |
| Line numbers | ON | 参照時に行番号指定可能 |
| Word wrap | ON | 長いテキストの読みやすさ |
| Smart indent lists | ON | リスト入力時の効率化 |
| Fold heading | ON | セクション折り畳み可能 |
| Fold indent | ON | インデント折り畳み可能 |

### Files & Links (ファイル・リンク)

| 設定項目 | 推奨値 | 理由 |
|--------|--------|------|
| Always update links | ON | リンク一貫性維持 |
| Auto-update internal links | ON | ファイル移動時に自動更新 |
| Use [[Wikilinks]] | ON | Obsidian相互リンク有効化 |
| Markdown link format | Markdown | マークダウン互換性 |

---

## 🎨 推奨プラグイン

### 必須プラグイン

#### 1. Dataview
**用途**: テーブル・リスト表示、データ抽出  
**設定**:
- Enable JavaScript queries: ON
- Enable inline queries: ON
- Enable inline field highlighting: ON

**使用例**:
```dataview
table without id
title as "タイトル",
status as "ステータス",
updated as "更新日"
from "01_Nori_Farming_DSS"
where status != "完了"
sort updated desc
```

#### 2. Backlinks
**用途**: 文書間の関連性確認  
**設定**:
- Show preview: ON
- Show file outline: ON
- Collapse results: ON

#### 3. Graph Analysis
**用途**: ナレッジグラフの視覚化  
**設定**:
- Show graph: ON
- Show local graph: ON
- Graph depth: 2-3

### 推奨プラグイン

#### 4. Search
**用途**: 高度なテキスト検索  
**使用例**:
- `tag:#firestore` - Firestore関連ドキュメント
- `tag:#migration` - マイグレーション関連
- `phase:5c` - Phase 5C関連

#### 5. Templater
**用途**: テンプレートによる効率化  
**推奨テンプレート**:
```
---
tags: []
aliases: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

**概要**:

---

**関連ドキュメント**:
```

---

## 🎯 ワークスペース設定

### ウィンドウレイアウト (推奨)

```
┌─────────────────────────────────┐
│  File Explorer  │  Main Editor  │
│  (left panel)   │ (center)      │
├─────────────────┼───────────────┤
│                 │ Outline Panel │
│                 │ (right)       │
└─────────────────┴───────────────┘
```

### 左パネル設定

- **File Explorer**: ON
  - Folder collapse: ON
  - Show new file button: ON
  - Show folder creation button: ON

- **Search**: ON
  - Collapse search results: ON
  - Show match count: ON

### 右パネル設定

- **Outline**: ON
  - Outline collapse: ON
  - Show heading level: ON

- **Backlinks**: ON
  - Show preview: ON
  - Collapse linked references: ON

- **Outgoing Links**: ON
  - Show linked references: ON

---

## 🏷️ タグ設定と管理

### 推奨タグ体系

```
# プロジェクト
#nori - ノリプロジェクト全般
#phase1 - Phase 1
#phase2 - Phase 2
#phase3 - Phase 3
#phase4 - Phase 4
#phase5 - Phase 5
#phase5a - Phase 5A データモデル
#phase5b - Phase 5B UI
#phase5c - Phase 5C Firestore
#phase5d - Phase 5D テスト・デプロイ

# 機能分類
#firestore - Firestore関連
#database - データベース全般
#ui - UIコンポーネント
#react - React実装
#api - API・REST
#ml - 機械学習
#season - 季節機能

# ドキュメント種類
#status - ステータスレポート
#progress - 進捗報告
#guide - ガイド・手順書
#reference - 参考資料
#plan - 計画書
#spec - 技術仕様

# マイグレーション特定
#migration - マイグレーション全般
#dry-run - ドライラン関連
#verification - 検証
#rollback - ロールバック計画
```

### タグの使用例

ファイルの先頭に以下のようにタグを設定:

```yaml
---
tags: [phase5c, firestore, migration, status]
aliases: [Firestore状況報告, Migration Status]
created: 2026-05-12
updated: 2026-05-12
---
```

---

## 🔍 検索テンプリート

### よく使う検索

```
# Phase 5C関連をすべて検索
tag:#phase5c

# マイグレーション関連をすべて検索
tag:#migration

# ステータスレポートをすべて検索
tag:#status sort:modified

# 最近更新されたドキュメント
sort:modified limit:10

# 特定フレーズを含むドキュメント
"Firestore" tag:#firestore

# タグ AND 検索
tag:#phase5c tag:#firestore
```

---

## 📊 ダッシュボード設定 (オプション)

### ホームノートの設定

`00_HOME.md` を以下のように設定:

```markdown
# ウトマチナレッジベース ホーム

## 🔥 ホットトピック
- [[Phase5C_Status_Report]]
- [[MIGRATION_QUICK_START]]

## 📊 最新の更新
Dataview クエリで最新5ファイルを自動表示

## 🎯 進行中のタスク
- tag:#phase5c tag:#status
```

---

## ⌨️ キーボードショートカット (カスタマイズ推奨)

### Settings → Hotkeys で設定

| アクション | 推奨ショートカット |
|---------|-----------|
| Open quick switcher | Cmd+P |
| Search in vault | Cmd+Shift+F |
| Toggle preview | Cmd+Alt+P |
| Open graph view | Cmd+Shift+G |
| Open local graph | Cmd+Alt+G |
| New note | Cmd+N |
| New folder | Cmd+Shift+N |

---

## 📱 マルチプラットフォーム設定

### macOS (このマシン)
- ✅ Obsidian Desktop 推奨
- ✅ iCloud Sync 対応

### 設定同期
```
Settings → Account
→ Sign in with Obsidian account
→ Settings sync: ON
→ Vault size: <50MB 推奨
```

---

## 🔐 セキュリティ設定

### プライベート/パブリック

```yaml
# プライベートドキュメント
---
visibility: private
---

# パブリックドキュメント
---
visibility: public
---
```

### バックアップ
- **自動保存**: Git で管理推奨
- **定期バックアップ**: iCloud Drive 自動同期

---

## 🎓 使用テクニック

### テンプレートの活用

新しいドキュメント作成時:
```
1. Cmd+N で新規作成
2. 最初の文字入力で自動テンプレート適用 (Templater設定)
3. フロントマター編集
4. コンテンツ作成
```

### バックリンクの活用

**他のドキュメントから参照**:
```markdown
[[01_Nori_Farming_DSS/Phase5C_Status_Report]]
```

**参照元を確認**:
- 右パネル → Backlinks タブ
- 参照しているドキュメントが自動表示

### グラフビューの活用

**Cmd+Shift+G** でグラフビュー表示:
- ノードをクリック → ドキュメント開く
- グラフをドラッグ → ズーム可能
- ノードのサイズ = 参照数

---

## 🐛 トラブルシューティング

### リンクが機能しない場合

```
Settings → Files & Links
→ Always update links: ON
→ Auto-update internal links: ON
を確認
```

### グラフビューが重い場合

```
Settings → Graph
→ Limit depth: 2-3 に削減
→ Show attachments: OFF
を試す
```

### プラグインが読み込まれない場合

```
1. Settings → Community plugins
2. プラグインの有効化確認
3. Obsidian 再起動
```

---

## 📈 パフォーマンス最適化

| 項目 | 推奨値 |
|------|--------|
| ファイル数 (このVault) | <1000 |
| ファイルサイズ平均 | <100KB |
| キャッシュサイズ | 自動 |
| Graph refresh | 自動 |

### ナレッジベース統計

**現在の規模**:
- ファイル数: 7
- 総行数: ~2,440
- 総サイズ: ~150KB
- Relationships: 多数

---

## 🎯 ベストプラクティス

### ドキュメント作成時

```yaml
---
tags: [適切なタグ]
aliases: [別名1, 別名2]
created: 作成日
updated: 更新日
---

# タイトル

**概要**: 1-2文で要約

---

## 本文

...

---

## 関連ドキュメント

- [[関連1]]
- [[関連2]]
```

### ファイル命名規則

```
01_Nori_Farming_DSS/
├── 00_ファイル構成ガイド.md (ガイド)
├── Phase5_Integration_Progress.md (進捗報告)
├── Phase5B_UI_Component_Updates.md (実装詳細)
├── Phase5C_Status_Report.md (ステータス)
├── Phase5C_Migration_Execution_Guide.md (実行ガイド)
└── MIGRATION_QUICK_START.md (クイックスタート)
```

---

## 📞 問題が発生した場合

### 設定リセット
```bash
# Obsidian設定フォルダをバックアップ
cp -r /Users/hijikuro/workspace/uto-knowledge/.obsidian ./obsidian_backup/

# リセット後に再設定
```

### ドキュメント復旧
```bash
# Gitを使用した復旧
cd /Users/hijikuro/workspace/uto-knowledge/
git status # 変更確認
git restore <filename> # ファイル復旧
```

---

## 🚀 次のステップ

1. **このガイドを読み終えたら**:
   - [ ] Obsidian アプリケーション起動
   - [ ] ナレッジベースを開く
   - [ ] 推奨プラグインをインストール
   - [ ] タグ体系を確認

2. **セットアップ完了後**:
   - [ ] 00_HOME.md を読む
   - [ ] 各ドキュメントを閲覧
   - [ ] グラフビュー確認
   - [ ] 検索機能試す

3. **本格使用開始**:
   - [ ] マイグレーション手順確認
   - [ ] 実行ガイド参照
   - [ ] 必要に応じてドキュメント追加

---

## 📚 参考リソース

- **Obsidian公式**: https://obsidian.md
- **Obsidianコミュニティ**: https://obsidian.md/community
- **プラグイン一覧**: https://obsidian.md/plugins

---

**ガイド版**: v1.0  
**最終更新**: 2026-05-12  
**対象Obsidianバージョン**: v1.4.0以上

---

🎉 セットアップ完了したら、`00_HOME.md` に進みましょう!
