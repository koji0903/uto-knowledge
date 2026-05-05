---
id: dashboard_chatgpt_integration
type: dashboard
created: 2026-05-05
status: active
tags: [chatgpt, integration, dashboard, statistics]
---

# ChatGPT データ統合ダッシュボード

📊 **統合完了日:** 2026-05-05  
🎯 **総ファイル数:** 1,171件  
✅ **成功率:** 100%

---

## 📈 全体統計

| カテゴリ | グループ | 件数 | 保存先 |
|---------|--------|---:|--------|
| **プロジェクト** | A (行政・議会) | 116 | 04_DataLink/projects |
| | B (地域活性化) | 70 | 04_DataLink/projects |
| **ビジネス知識** | C (ビジネス・マーケティング) | 38 | 03_Knowledge/business |
| **技術知識** | D (技術・IT) | 64 | 03_Knowledge/tech |
| | E (情報整理・ナレッジ) | 883 | 03_Knowledge/tech |
| **合計** | - | **1,171** | - |

---

## 📁 ディレクトリ別アクセス

### プロジェクト
- **[[04_DataLink/projects/index|プロジェクト一覧]]** (187件)
  - Admin (A): 116件
  - Regional (B): 70件
  - 既存プロジェクト: 1件

### ビジネス知識
- **[[03_Knowledge/business/index|ビジネス知識一覧]]** (38件)
  - SNS/Instagram: マーケティング関連
  - 価格設定・セールス: 営業関連
  - ブランド戦略: 広告・販売戦略

### 技術知識
- **[[03_Knowledge/tech/index|技術知識一覧]]** (947件)
  - プログラミング: Python, JavaScript, Git など
  - データ分析: データベース、API関連
  - 学習・リサーチ: 参考資料、知識整理

---

## 🎯 グループ別分布

```
プロジェクト (186件) ████████ 16%
ビジネス知識 (38件)  ██ 3%
技術知識 (947件)    ████████████████████████████████████████████████████ 81%
```

---

## 📋 データ移行詳細

### ソース
- **入力:** ChatGPT web UI JSON export (1,346件)
- **処理:** 重複排除 174件、スキーマ検証エラー 1件
- **出力:** 1,171件の標準化ファイル

### フロントマター構造
```yaml
# プロジェクト
id: project_YYYYMMDDHHMM_XXXXX
type: project
firestore_collection: projects
firestore_doc_id: project_YYYYMMDDHHMM_XXXXX
source: chatgpt_import
source_id: [Original ChatGPT ID]
source_group: [A|B|C|D|E]
tags: [imported_from_chatgpt, group-X]

# 知識ノート
id: knowledge_YYYYMMDDHHMM_XXXXX
type: knowledge_note
domain: [business|tech]
source: chatgpt_import
source_id: [Original ChatGPT ID]
source_group: [A|B|C|D|E]
tags: [chatgpt, domain, group-X]
```

---

## 🔍 検索・参照方法

### タグで絞り込み
- `#imported_from_chatgpt` - 全移行ファイル
- `#group-A` - Admin グループ
- `#group-B` - Regional グループ
- `#group-C` - Business グループ
- `#group-D` - Tech グループ
- `#group-E` - Knowledge グループ

### グループ別インデックス
各ディレクトリの `index.md` で全ファイルを一覧表示
- グループ内でソート（最新ファイルを優先表示）
- ワンクリックで該当ファイルにジャンプ

---

## 💡 活用のヒント

### 推奨される使い方

1. **新規プロジェクト企画時**
   - [[04_DataLink/projects/index]] で関連プロジェクトを検索
   - 過去の Admin/Regional プロジェクトから学習

2. **マーケティング施策立案時**
   - [[03_Knowledge/business/index]] で Instagram/広告関連の過去ノートを確認
   - 価格設定・セールス戦略を参考

3. **技術開発時**
   - [[03_Knowledge/tech/index]] で Python/JavaScript など言語別に検索
   - データベース設計や API 設計の参考資料を確認

4. **知識体系化**
   - 関連ファイル間に [[backlinks]] を追加
   - タグを活用して関連テーマをクラスタ化

---

## 📊 ファイル統計

### ファイルサイズ分布
- 最小: 4.9KB (チャット履歴短編)
- 最大: 71KB (詳細な議論・提案)
- 平均: 3.6MB ÷ 1,171 = ~3.1KB/ファイル

### コンテンツタイプ
- 📋 **議論・提案:** Admin/Regional プロジェクト
- 💼 **戦略・計画:** Business マーケティングノート
- 📚 **学習・リサーチ:** Tech 知識ノート

---

## 🔄 メンテナンス

### 定期確認（月1回推奨）
- [ ] 新規ファイルの追加確認
- [ ] 誤分類ファイルの再分類
- [ ] 関連リンクの補強

### インデックス更新
```bash
# インデックスを再生成する場合
node scripts/generate_chatgpt_indexes.mjs
```

### グループ変更
ファイルの frontmatter で `source_group` を編集
```yaml
source_group: A  # → B に変更など
```

---

## 📝 ログ・ドキュメント

詳細なマイグレーション情報：
- [[04_DataLink/logs/log_20260505_chatgpt_migration|統合ログ (2026-05-05)]]

---

## 🎯 宇土OS ビジョン統合（2026-05-06）

**[[04_DataLink/00_SYSTEM/vision_uto_os|宇土OS ビジョン書]]** が完全統合されました。

### ビジョン内容
- 統一的なプラットフォーム思想を文書化
- **8層構造アーキテクチャを定義：**
  - L0（前提）：人口・財政・地理の現実
  - L1（事実）：資産・データの棚卸し
  - L2（課題）：構造的課題の抽出
  - L3（組織）：PFU（課題解決ユニット）
  - L4（財源）：多元的資金戦略
  - L5（インフラ）：施設最適化
  - L6（政策）：生活政策の実装
  - L7（ビジョン）：2040年の宇土市像
  
- 1,171件の ChatGPT データの8層別配置を明記
- 実行ロードマップ（4フェーズ）を提示

### 8層別ドキュメント
- [[04_DataLink/00_SYSTEM/layer_structure_guide|8層構造統合ガイド]]
- [[04_DataLink/00_SYSTEM/L0_premise_layer|L0 前提レイヤ]]
- [[04_DataLink/00_SYSTEM/L1_fact_layer|L1 事実レイヤ]]
- [[04_DataLink/00_SYSTEM/L2_issue_layer|L2 課題レイヤ]]
- [[04_DataLink/00_SYSTEM/L3_organization_pfu|L3 組織レイヤ（PFU）]]
- [[04_DataLink/00_SYSTEM/L4_finance_layer|L4 財源レイヤ]]
- [[04_DataLink/00_SYSTEM/L5_infrastructure_layer|L5 インフラレイヤ]]
- [[04_DataLink/00_SYSTEM/resources|参考資料・Notionリンク集]]

### 次ステップ
- DataLink + Knowledge ファイルの8層別再分類
- 議会・財政データの L1～L2 への構造化
- PFU 組織の編成と立ち上げ準備
- フェーズ2：意思決定支援システム構築

---

**最終更新:** 2026-05-06  
**ステータス:** ✅ Vision + Layer Structure Complete  
**フェーズ進捗:** Phase 1 (100%) → Phase 2 準備中
