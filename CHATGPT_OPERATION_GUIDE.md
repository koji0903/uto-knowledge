---
id: guide_chatgpt_operation
type: guide
created: 2026-05-05
status: active
tags: [guide, operation, maintenance, chatgpt-integration]
---

# ChatGPT データ統合 - 運用ガイド

📋 **作成日:** 2026-05-05  
🎯 **対象:** 1,171件のChatGPT統合ファイルの継続的運用

---

## 📝 新規ファイル追加時の手順

### 1. ファイルの分類・配置

**ステップA：グループ分類の決定**

新しいChatGPT会話を保存する場合、以下のいずれかに分類：

| グループ | キーワード例 | 保存先 |
|---------|-----------|--------|
| **A** (Admin) | 議会、議員、市、自治体、条例 | 04_DataLink/projects |
| **B** (Regional) | 企画、提案、活性化、イベント | 04_DataLink/projects |
| **C** (Business) | SNS、広告、価格、マーケティング | 03_Knowledge/business |
| **D** (Tech) | コード、API、データベース、プログラム | 03_Knowledge/tech |
| **E** (Knowledge) | 学習、リサーチ、調査、情報整理 | 03_Knowledge/tech |

### 2. frontmatter の記入（必須フィールド）

**プロジェクトファイル (04_DataLink/projects):**
```yaml
---
id: project_YYYYMMDDHHMM_XXXXX
type: project
firestore_collection: projects
firestore_doc_id: project_YYYYMMDDHHMM_XXXXX
title: [明確なプロジェクトタイトル]
source: chatgpt_import
source_id: [元ChatGPT conversation ID]
source_group: [A|B]
created: YYYY-MM-DD
status: active
tags: [imported_from_chatgpt, group-A/B]
---
```

**知識ノート (03_Knowledge/{domain}):**
```yaml
---
id: knowledge_YYYYMMDDHHMM_XXXXX
type: knowledge_note
domain: [business|tech|other]
source: chatgpt_import
source_id: [元ChatGPT conversation ID]
source_group: [C|D|E]
created: YYYY-MM-DD
status: active
tags: [chatgpt, domain, group-X]
---
```

### 3. ファイル構造の標準化

```markdown
---
[frontmatter]
---

# [ファイルタイトル]

## 📋 要約

簡潔な内容説明（2-3行）

## 📝 詳細

詳細な情報、プロジェクト内容、議論内容

## 🔗 関連ファイル

- [[related-file|関連タイトル]] (相似度: XX%)
- [[related-file2|関連タイトル2]]

---

## 💬 元のChatGPT会話

[元のJSON会話内容]
```

---

## 🔗 関連ファイルのリンク張り基準

### リンク対象の判定基準

| 相似度 | アクション | 例 |
|-------|----------|-----|
| **60%以上** | 必ずリンク | 同日付プロジェクト、同テーマ議論 |
| **40-60%** | 関連性確認後リンク | テーマに共通点あり |
| **40%未満** | リンク不要 | 無関係 |

### リンク張りのルール

1. **自動更新スクリプトの活用**
   ```bash
   # Projects のリンク張り
   node scripts/add_related_files_links.mjs
   
   # Business のリンク張り
   node scripts/add_business_links.mjs
   ```

2. **手動追加が必要な場合**
   - 新規グループの追加時
   - 既存ファイルの改編時
   - テーマクラスタの再整理時

3. **削除してはいけないリンク**
   - 元々スクリプトで生成されたリンク
   - 関連テーマのバックリンク
   - プロジェクト進捗の参照リンク

---

## 📊 グループ別のメンテナンス

### Projects（04_DataLink/projects）

**定期確認：月1回推奨**
- [ ] 新規プロジェクトの追加確認
- [ ] ステータスの更新（active → completed/archived）
- [ ] 誤分類ファイルの再分類（A→B など）

**リンク更新：新規ファイル追加後**
```bash
node scripts/add_related_files_links.mjs
```

### Business（03_Knowledge/business）

**定期確認：月1回推奨**
- [ ] マーケティング施策の状況確認
- [ ] SNS/広告関連ナレッジの更新確認
- [ ] 価格設定・セールス戦略の最新化

**リンク更新：新規ファイル追加後**
```bash
node scripts/add_business_links.mjs
```

### Tech（03_Knowledge/tech）

**定期確認：随時**
- 技術スタック変更時にタグを更新
- 新言語・フレームワーク導入時に対応ファイルを追加

**リンク更新：最小限（自動化スクリプト未作成）**
- 重要ファイルのみ手動リンク張り
- インデックスで充分

---

## ✏️ ファイル編集時の注意点

### frontmatter の変更

**変更可能:**
- `title`: ファイルタイトルの修正
- `status`: active → completed/archived
- `tags`: タグの追加・削除
- `domain`: tech ↔ business の変更可能

**変更厳禁:**
- `id`: ユニークキー（重複は致命的）
- `firestore_collection`, `firestore_doc_id`: Firestore同期用
- `source_id`: 元データ復旧に必須

### コンテンツ編集

**推奨される変更:**
- タイトルの改善（より説明的に）
- 要約セクションの充実
- 関連ファイルリンクの追加・修正
- タグの詳細化

**避けるべき変更:**
- 元のChatGPT会話内容を削除
- JSONブロックの改編
- source_id の変更

---

## 🔄 ファイル移動・統合

### グループ変更（分類の誤り）

**例：Business → Tech へ変更**

1. ファイルを `03_Knowledge/tech/` に移動
2. frontmatter を編集：
   ```yaml
   domain: tech
   source_group: D  # C → D に変更
   tags: [chatgpt, tech, group-D]  # business → tech に変更
   ```
3. インデックスを再生成
4. リンクを張り直し

### 複数ファイルの統合

1. 統合先ファイルに統合元の内容をセクションとして追加
2. 統合元ファイルを削除
3. 他のファイルのリンクを統合先に更新
4. インデックスを再生成

---

## 📈 統計情報の更新

### ダッシュボードの再生成

```bash
# グループ別インデックスの更新
node scripts/generate_chatgpt_indexes.mjs
```

更新タイミング：
- [ ] 月1回（定期メンテナンス時）
- [ ] 大量追加後（50ファイル以上）
- [ ] グループ構成変更時

### 統計情報の確認

[[CHATGPT_INTEGRATION_DASHBOARD]] で以下を確認：
- グループ別ファイル数
- ドメイン別分布
- リンク関連性

---

## 🚀 今後の拡張

### 検討中の改善

1. **Tech グループのリンク張り自動化**
   - 947個のファイルに対応
   - プログラミング言語別クラスタリング

2. **タグの自動抽出**
   - タイトルからテーマを抽出
   - タグの自動補完

3. **検索インデックスの強化**
   - Obsidian プラグイン活用
   - 高度な検索フィルタ実装

4. **Firestore 同期の自動化**
   - Projects の自動Firestore同期
   - リアルタイムdrift検出

---

## ❓ トラブルシューティング

### Q: リンクが機能しない

**原因:** ファイル名が変更された

**解決：**
1. ファイル名を確認
2. リンク内の fileId を正しい名前に修正
3. Obsidian キャッシュをクリア

### Q: frontmatter の形式が壊れている

**復旧方法：**
1. ファイルを元に戻す（git で復旧可能）
2. frontmatter を正しい形式で再記入
3. コミット

### Q: グループ変更後、リンクが古いまま

**解決：**
```bash
# インデックス再生成
node scripts/generate_chatgpt_indexes.mjs

# 関連ファイルリンクを張り直し
node scripts/add_related_files_links.mjs
```

---

## 📅 メンテナンススケジュール

| タイミング | 作業 | 担当 |
|----------|------|------|
| **毎月** | インデックス再生成、統計確認 | 自動化可能 |
| **四半期** | ファイル品質監査、タグの整理 | 手動 |
| **年1回** | グループ構成の見直し、計画更新 | ユーザー判断 |

---

## 📖 参考資料

- [[CHATGPT_INTEGRATION_DASHBOARD]] - 統計ダッシュボード
- [[04_DataLink/logs/log_20260505_chatgpt_migration|統合ログ]] - 初期化ログ
- [[04_DataLink/projects/index|Projects インデックス]] - プロジェクト一覧
- [[03_Knowledge/business/index|Business インデックス]] - ビジネス知識一覧

---

**最終更新:** 2026-05-05  
**バージョン:** 1.0  
**ステータス:** 運用開始
