---
tags: [02_農業/熊本県有機農業研究会, index, navigation]
created: 2026-05-13
updated: 2026-05-13
---

# 📚 AgriOS 熊有研 - ナレッジベース INDEX

熊本県有機農業研究会向け業務管理システム「AgriOS」のナレッジベース。このページから各トピックへアクセスします。

---

## 🗂️ ナレッジ構成

```
02_農業/熊本県有機農業研究会/
├── Overview/               # システム概要
│   └── 01-System-Overview.md
├── Architecture/           # アーキテクチャ・設計
│   └── 02-Directory-Structure.md
├── DataModel/              # データモデル
│   └── 03-Data-Model.md
├── Masters/                # マスタデータ定義
│   └── 04-Master-Definition.md
├── BusinessLogic/          # ビジネスロジック
│   └── 05-Business-Logic.md
├── Implementation/         # 実装ガイドライン
│   └── 06-Implementation-Guide.md
└── _Index.md (このファイル)
```

---

## 📖 各カテゴリーの内容

### 📋 Overview（システム概要）

**ファイル**: [[Overview/01-System-Overview|01-System-Overview]]

**対象**: プロジェクト全体を理解したい方

- プロジェクト基本情報
- システムの役割と機能モジュール
- 技術スタック（Next.js、Firebase等）
- 今後の拡張アイデア

**👉 まずはここから読んでください**

---

### 🏗️ Architecture（アーキテクチャ・設計）

**ファイル**: [[Architecture/02-Directory-Structure|02-Directory-Structure]]

**対象**: コード構造を理解したい開発者

- `src/` 直下のディレクトリ構成
  - `app/` - ページ・ルーティング層
  - `components/` - UI コンポーネント層
  - `lib/` - ビジネスロジック層
  - `types/`, `constants/`, `hooks/`
- 実装パターンのガイドライン
  - Repository パターン
  - UI コンポーネント設計
  - ステート管理

**活用場面**: 新しいファイルを作るとき、プロジェクト構造を知りたいとき

---

### 💾 DataModel（データモデル）

**ファイル**: [[DataModel/03-Data-Model|03-Data-Model]]

**対象**: Firestore のスキーマを理解したい方

- 13 個のコレクション定義
  - users, members, vendors
  - expenseDetails, invoiceDetails
  - todos, departments, basicItems
  - units, expenseItems, travelExpenses
  - commonSettings, reports
- 詳細スキーマ（TypeScript インターフェース）
- リレーションシップ図
- データ不変性の原則（スナップショット保存）

**活用場面**: クエリを書くとき、新しいマスタを追加するとき、データフロー全体を理解したいとき

---

### 🗂️ Masters（マスタデータ定義）

**ファイル**: [[Masters/04-Master-Definition|04-Master-Definition]]

**対象**: マスタデータの仕様を知りたい方

- 主要マスタ
  - 名簿マスタ (`members`) - **旅費計算の基準**
  - 取引先マスタ (`vendors`)
  - 費目マスタ (`expenseItems`)
  - 旅費交通費マスタ (`travelExpenses`)
- 補助マスタ
  - 部門、基本項目、単位
- システム共通設定
- マスタ間のリレーション
- メンテナンスのポイント

**活用場面**: マスタを修正するとき、新しいマスタを追加するとき、会員情報の構造を確認するとき

---

### 💼 BusinessLogic（ビジネスロジック）

**ファイル**: [[BusinessLogic/05-Business-Logic|05-Business-Logic]]

**対象**: 計算ロジック・業務規則を理解したい方

- 帳票管理ポータルのワークフロー
- 旅費の自動計算
  - 基準距離 × 単価の計算
  - 高速料金の手動入力
- 源泉徴収税（源泉所得税）の計算
  - 10.21% のデフォルト計算
  - 税率変更時の対応
- 差引支払額の計算
- 帳票生成ロジック
  - 支払一覧表 (expense-summary)
  - 経費明細一覧 (expense-detail-list)
  - 請求書等一覧 (invoice-detail-list)
- データ不変性の原則（スナップショット保存）
- 複合計算シナリオ

**活用場面**: 計算ロジックを修正するとき、新しい帳票を追加するとき、業務ルール全体を理解したいとき

---

### 🛠️ Implementation（実装ガイドライン）

**ファイル**: [[Implementation/06-Implementation-Guide|06-Implementation-Guide]]

**対象**: 新しい機能を追加する開発者

- 新機能追加の 5 ステップ
  1. 型定義を作成 (`src/types/`)
  2. Firestore サービスを実装 (`src/lib/services/`)
  3. UI コンポーネントを実装 (`src/components/`)
  4. ページルートを追加 (`src/app/`)
  5. テストを実装
- UI コンポーネント設計ルール
  - Agri* プレフィックス
  - 緑ベースのクリーンデザイン
  - Framer Motion の活用
- Firestore スキーマ追加の手順
- 旅費計算ロジック実装パターン
- フォーム検証（Zod）
- リアルタイムデータ取得
- エラーハンドリング
- テスト実装（Jest + RTL）
- パフォーマンス最適化
- レポート生成機能の追加
- チェックリスト

**👉 機能開発を始める前に読んでください**

---

## 🎯 よくあるタスク別・読むべきドキュメント

### 新しいマスタを追加したい
1. [[Masters/04-Master-Definition|マスタデータ詳細]] - 既存マスタの構造を確認
2. [[DataModel/03-Data-Model|データモデル]] - Firestore スキーマを定義
3. [[Implementation/06-Implementation-Guide|実装ガイド]] - コード実装の流れを確認

### 計算ロジックを修正したい
1. [[BusinessLogic/05-Business-Logic|ビジネスロジック]] - 現在のルールを確認
2. [[Masters/04-Master-Definition|マスタデータ詳細]] - 関連するマスタを確認
3. [[Implementation/06-Implementation-Guide|実装ガイド]] - 検証パターンを確認

### 新しい帳票を追加したい
1. [[BusinessLogic/05-Business-Logic|ビジネスロジック]] - 帳票生成セクションを確認
2. [[Masters/04-Master-Definition|マスタデータ詳細]] - 必要なマスタを確認
3. [[Implementation/06-Implementation-Guide|実装ガイド]] - レポート生成パターンを確認

### UIコンポーネントを修正したい
1. [[Architecture/02-Directory-Structure|ディレクトリ構成]] - コンポーネント配置を確認
2. [[Implementation/06-Implementation-Guide|実装ガイド]] - UI 設計ルールを確認
3. [[Overview/01-System-Overview|システム概要]] - ブランドガイドを確認

### Firestore クエリを書きたい
1. [[DataModel/03-Data-Model|データモデル]] - コレクション・フィールド定義を確認
2. [[Architecture/02-Directory-Structure|ディレクトリ構成]] - サービス実装パターンを確認
3. [[Implementation/06-Implementation-Guide|実装ガイド]] - リアルタイム取得パターンを確認

---

## 🔗 ドキュメント間の関連図

```
Overview (入口)
    ↓
  ├─→ Architecture (構造)
  │     ↓
  │   Implementation (コード開発)
  │
  ├─→ DataModel (スキーマ)
  │     ↓
  │   Masters (マスタ仕様)
  │
  └─→ BusinessLogic (業務ルール)
        ↓
      計算ロジック実装
```

---

## 📊 技術スタック リファレンス

| 層 | 技術 | 用途 |
|---|---|---|
| **Frontend** | Next.js 15+ | App Router, SSR |
| **UI Framework** | React 19 | コンポーネント基盤 |
| **言語** | TypeScript | 型安全性 |
| **スタイリング** | Tailwind CSS | ユーティリティ CSS |
| **CSS加工** | @tailwindcss/postcss v4 | PostCSS |
| **アニメーション** | Framer Motion | UI遷移 |
| **アイコン** | Lucide React | アイコンセット |
| **グラフ** | Recharts | 可視化 |
| **Backend/DB** | Firebase | Firestore, Auth, Storage |
| **検証** | Zod | スキーマ検証 |
| **テスト** | Jest + RTL | ユニット・統合テスト |

---

## 💡 実装の基本原則

### 1. 型安全性
- `src/types/` で型を先に定義
- Zod でランタイム検証

### 2. リポジトリパターン
- `src/lib/services/` で Firestore 操作を隠蔽
- コンポーネントはサービス経由でアクセス

### 3. UI統一性
- `AgriButton`, `AgriCard` 等のプレフィックス
- 緑ベースのクリーンデザイン

### 4. データ不変性
- 帳票発行時にスナップショットを保存
- マスタ更新後も過去帳票は変わらない

---

## 📝 ドキュメント情報

- **作成日**: 2026-05-13
- **最終更新**: 2026-05-13
- **ドキュメント数**: 6 本
- **保存場所**: `/Users/hijikuro/workspace/uto-knowledge/02_農業/熊本県有機農業研究会/`

---

## 🚀 クイックスタート

1. **プロジェクト全体を知りたい** → [[Overview/01-System-Overview|システム概要]] を読む
2. **開発を始めたい** → [[Implementation/06-Implementation-Guide|実装ガイド]] の 5 ステップを読む
3. **データスキーマを確認したい** → [[DataModel/03-Data-Model|データモデル]] を読む
4. **計算ロジックを理解したい** → [[BusinessLogic/05-Business-Logic|ビジネスロジック]] を読む
5. **マスタを修正したい** → [[Masters/04-Master-Definition|マスタデータ詳細]] を読む

---

## 📞 サポート

ナレッジベースに関する質問や改善提案は、各ドキュメントのファイルを参照してください。不足している内容がある場合は、該当するドキュメントを更新してください。

**関連リソース**:
- プロジェクトコード: `/Users/hijikuro/ViveCoding/02_農業/熊本県有機農業研究会`
- ナレッジベース: `/Users/hijikuro/workspace/uto-knowledge/02_農業/熊本県有機農業研究会/`
