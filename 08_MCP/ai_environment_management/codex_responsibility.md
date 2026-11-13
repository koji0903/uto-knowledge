---
id: codex_responsibility_20260508
type: ai_responsibility
title: "Codex 責務領域定義"
created: 2026-05-08
status: active
tags: [AI協力, Codex, 並行開発, 責務分担]
---

# Codex（ChatGPT/Codex）の責務領域

**定義日:** 2026-05-08  
**有効期限:** 継続（変更は conflict_resolution.md に記録）

---

## 📋 **主要責務**

### **1. ウトマチ百貨店統合管理ツール開発（最優先）**

**対象フォルダ:** `04_DataLink/utomachi_100_store/implementation/`

#### **1-1 フロントエンド実装**
- React/Vue コンポーネント開発
- ダッシュボード UI/UX
- ユーザーインターフェース
- 画面遷移・ナビゲーション
- リアルタイムデータ表示

#### **1-2 バックエンド・API開発**
- Node.js/Python サーバー構築
- REST API エンドポイント設計・実装
- 認証・認可ロジック
- ビジネスロジック実装

#### **1-3 データベース設計・実装**
- Firebase/Firestore スキーマ定義
- コレクション構造設計
- インデックス・クエリ最適化
- データ永続化・バックアップ

#### **1-4 技術スタック管理**
- npm/pip 依存関係管理
- ビルド・デプロイメントパイプライン
- 本番環境設定（Vercel など）
- セキュリティ設定

---

### **2. 実装技術仕様書作成**

**対象フォルダ:** `04_DataLink/utomachi_100_store/technical_specs/`

- API ドキュメント（OpenAPI/Swagger）
- データベーススキーマ定義
- 技術アーキテクチャ図
- デプロイメント手順
- トラブルシューティングガイド

---

### **3. 開発ログ・進捗管理**

**対象フォルダ:** `04_DataLink/utomachi_100_store/development_logs/`

- 実装完了機能の記録
- バグ・フィックスログ
- パフォーマンス改善記録
- リリースノート
- 既知の問題と回避方法

---

## 🚫 **禁止事項（Claude Code に任せる）**

以下の領域には編集・更新しないでください：

- ✋ `actual_performance_*.md` （実績レポート）
- ✋ `operational_logs/` （運用ログ）
- ✋ `ai_analysis/` （AI分析結果）
- ✋ `specification.md` （マスター仕様書 - 共有リソース）

**理由:** これらは Claude Code が統合・管理し、Codex の技術実装と混在させない

---

## 🔄 **共有リソースでの作業ルール**

### **specification.md（マスター仕様書）**

**ステータス：** SHARED（読み取り + 同期更新のみ）

**編集方法：**
1. Codex が実装で仕様変更が必要な場合
2. `technical_specs/implementation_note.md` に変更理由を記載
3. Claude Code に通知
4. Claude Code が specification.md を更新
5. Codex が更新内容を確認

**手順例：**
```
Codex: 「ふるさと納税 API のレスポンス形式を変更する必要がある」
  ↓
Codex が technical_specs/implementation_note_20260508.md に記載
  ↓
Claude Code が specification.md を更新
  ↓
Codex が最新仕様を確認して実装
```

---

## 📊 **実装進捗トラッキング**

### **毎日の報告形式（開発ログに記録）**

```markdown
## [日付] 実装進捗

【完了した機能】
- ✅ [機能名]
- ✅ [機能名]

【本日の課題・ブロッカー】
- 🔴 [課題] → 解決予定日
- 🟡 [調査中]

【明日の予定】
- [ ] [機能]

【Claude Code への依頼事項】
- 仕様書更新：[項目]
- 分析：[内容]
```

---

## 🔐 **ファイルロック・予約方法**

実装開始時：
```bash
bash scripts/ai_coordination/reserve_resource.mjs \
  --ai codex \
  --file implementation/frontend/dashboard.jsx \
  --until "2026-05-10T17:00:00Z"
```

実装完了時：
```bash
bash scripts/ai_coordination/release_resource.mjs \
  --ai codex \
  --file implementation/frontend/dashboard.jsx
```

---

## 📞 **競合発生時の対応**

**Codex が Claude Code と競合に気づいたら：**

1. **即座に作業を停止** → ファイルをロック解除
2. `04_DataLink/ai_environment_management/conflict_manifest.json` に記録
3. Claude Code に通知
4. Claude Code が競合を解析・解決
5. Codex が解決内容を確認して再開

---

## ✅ **署名**

**AI:** Codex（ChatGPT）  
**定義責任者:** User（宇土市）  
**有効開始日:** 2026-05-08  
**最終確認日:** 2026-05-08

---

*このドキュメントは Claude Code との協力プロセスの一部です。*
*変更・更新については conflict_resolution.md を参照してください。*
