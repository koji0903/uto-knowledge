---
id: knowledge_tech_index
type: index
title: "技術・システム知識ナレッジベース"
created: 2026-05-14
updated: 2026-05-14
status: active
tags: [ナレッジ, 技術, システム, アーキテクチャ, index]
---

# 技術・システム知識ナレッジベース 🔧

宇土OS プラットフォーム、農業DSS、マルチAI運用の技術基盤に関するナレッジを一元管理します。

---

## 🎯 このセクションについて

**対象領域**:
- Utomachi Platform（Next.js / React / Firebase / Google Cloud）
- 宇土OS全体の技術アーキテクチャ
- 海苔養殖意思決定支援システム（DSS）- ML・データ統合
- AgriOS（熊本県有機農業研究会）- 業務システム
- マルチAI運用基盤（Claude / ChatGPT / Gemini 協調）
- Firestore・Google Drive 連携設計

**使い方**:
- 「Utomachi Platform の全体像」 → **プラットフォーム設計** へ
- 「どの技術スタックを使ってるのか」 → **技術スタック** へ
- 「海苔養殖の予測モデル」 → **海苔養殖DSS** へ
- 「AI運用の仕組み」 → **AI協調運用基盤** へ

---

## 📚 ナレッジガイド

### **Utomachi Platform - システムアーキテクチャ**

宇土市の産業振興プラットフォーム全体の技術設計：

**まず読むべき**:
[[00_システム/architecture/Utomachi_Platform_Architecture|📐 Utomachi Platform Architecture]] 
- システム全体像
- マイクロサービス構成
- データフロー
- セキュリティ設計

**技術スタック**:
| レイヤ | 技術 |
|--------|------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Backend** | Cloud Functions, Node.js |
| **Database** | Firestore (NoSQL) |
| **Auth** | Firebase Authentication |
| **AI/ML** | Google Gemini API, Custom ML Models |
| **Storage** | Google Cloud Storage |
| **Hosting** | Firebase Hosting / Cloud Run |

**関連ドキュメント**:
- [[00_システム/vision/regional_trading_company_datalink_schema|地域商社スキーマ]] - Firestore データモデル
- [[04_データリンク/schema/|DataLink スキーマ]] - 実装されている構造

---

### **AI運用基盤 - Claude / ChatGPT / Gemini 協調運用**

複数の AI エージェントを効率的に連携させるための仕組み：

**まず読むべき**:
[[00_システム/architecture/AGENTS|🤖 AGENTS.md - AI運用ガイド]]
- 各AI（Claude / ChatGPT / Gemini）の役割分担
- タスク毎の最適AI選択
- 引き継ぎプロトコル
- 競合解決メカニズム

**関連設定**:
- [[../../mcp/ai_profiles/|mcp/ai_profiles/]] - 各AIのプロファイル・能力定義
- [[../../mcp/ai_environment_management/|mcp/ai_environment_management/]] - アクセス制御・競合管理

**実装例**:
- Claude → 深い分析・設計・矛盾検出
- ChatGPT → 広範な実装ガイダンス・ドキュメント作成
- Gemini → 検索・最新情報・リアルタイム処理

---

### **海苔養殖意思決定支援システム（Nori Farming DSS）**

海洋データを活用した海苔養殖の予測・最適化システム：

**システム概要**:
[[02_農業/海苔養殖業/KNOWLEDGE_MAP|🗺️ ナレッジ統合マップ]] - 全体像
[[02_農業/海苔養殖業/Overview|📖 Overview]] - 目的・背景

**技術構成**:

| コンポーネント | ドキュメント |
|--------------|-----------|
| **システム設計** | [[02_農業/海苔養殖業/アーキテクチャ|システムアーキテクチャ]] |
| **データ統合** | <!-- TODO: DataIntegration.md（未実装）-->[[04_データリンク/10_データセット|データセット・統合パイプライン]] |
| **予測モデル** | [[04_データリンク/04_モデル|ML統合・予測モデル]] |
| **シーズン管理** | [[02_農業/海苔養殖業/海苔_季節定義|シーズン定義]] |

**実装進捗**:
- Phase 3: データ統合パイプライン ✅
- Phase 4: ML統合・API構築 ✅
- Phase 5: Firestore最適化・UI ✅
- Phase 6: プラットフォーム統合 🔄

**データソース**:
- 国立研究開発機構（水産研究教育機構）
- 気象庁（波浪・水温データ）
- 衛星データ（クロロフィル）
- IoTセンサー（現地観測）

---

### **AgriOS - 熊本県有機農業研究会向け業務システム**

有機農業の生産・販売・流通管理を統合するシステム：

**まず読むべき**:
[[02_農業/熊本県有機農業研究会/index|📋 AgriOS インデックス]]
- システム概要
- データモデル
- ビジネスロジック
- 実装ガイド

**設計ドキュメント**:
| 内容 | ファイル |
|------|---------|
| **ディレクトリ構造** | [[02_ディレクトリ構造|ディレクトリ設計]] |
| **データモデル** | [[03_データモデル|データ構造]] |
| **マスタ定義** | [[04_マスター定義|マスタ定義]] |
| **ビジネスロジック** | [[05_ビジネスロジック|ビジネスロジック]] |

---

## 🔗 関連エリア

### general（制度・基礎理解）との関係

| 知識 | 技術支援 |
|------|---------|
| L5インフラレイヤ（施設最適化） | Firestore でのファシリティ管理 |
| L4財源レイヤ（自主財源化） | 実績データの可視化・ダッシュボード |
| L3組織（PFU設計） | AI協調ワークフロー |

### business（ビジネス・産業）との関係

| 要素 | 技術実装 |
|------|---------|
| ウトマチプラットフォーム | Next.js/Firebase でのEC実装 |
| 海苔養殖 × ウトマチ統合 | DSS予測をEC商品推奨に活用 |
| 多数の生産者管理 | Firestore での生産者マスタ管理 |

---

## 📊 技術スタック全体図

```
┌────────────────────────────────────────────────────────────────┐
│ User Interface (Next.js 16, React 19, TypeScript)              │
│ - Utomachi EC Platform                                          │
│ - Admin Dashboard                                               │
│ - DSS Visualization                                             │
└─────────────────┬────────────────────────────────────────────┘
                  │
┌─────────────────┴────────────────────────────────────────────┐
│ API Layer (Cloud Functions, Express, FastAPI)                 │
│ - Data Integration Pipeline                                    │
│ - ML Model Serving                                             │
│ - WebSocket for Real-time                                      │
└─────────────────┬────────────────────────────────────────────┘
                  │
┌─────────────────┴────────────────────────────────────────────┐
│ Data Layer (Firestore, Cloud Storage, BigQuery)              │
│ - Transactional Data                                           │
│ - Time Series Data (海況観測)                                  │
│ - ML Training Data                                             │
└─────────────────┬────────────────────────────────────────────┘
                  │
┌─────────────────┴────────────────────────────────────────────┐
│ External Integration                                            │
│ - Google Gemini AI                                             │
│ - Weather / Ocean APIs                                         │
│ - Satellite Data                                               │
│ - Multi-AI Orchestration                                       │
└────────────────────────────────────────────────────────────────┘
```

---

## 🚀 導入・実装ガイド

### 環境構築

```bash
# 1. Firestore セットアップ
firebase init firestore

# 2. 環境変数設定
cp .env.example .env.local
# GOOGLE_CLOUD_PROJECT, API_KEYS etc を入力

# 3. 依存関係インストール
npm install

# 4. ローカル開発サーバー起動
npm run dev
```

### デプロイ

```bash
# Firebase Hosting へのデプロイ
firebase deploy

# Cloud Functions
firebase deploy --only functions

# Firestore セキュリティルール
firebase deploy --only firestore
```

---

## 💡 よくある質問

### 「Firestore スキーマを変更したい」
→ [[00_システム/vision/regional_trading_company_datalink_schema|スキーマドキュメント]]を確認して、破壊的変更を避ける

### 「新しい AI を追加したい」
→ [[00_システム/architecture/AGENTS|AGENTS.md]]の「新規エージェント追加」セクション参照

### 「海苔データを追加したい」
→ <!-- TODO: DataIntegration.md（未実装）-->[[04_データリンク/10_データセット|データセット・統合パイプライン]]で既存パイプラインを確認（詳細実装待ち）

---

**最終更新**: 2026-05-14  
**関連セクション**: [[../business/index|business（ビジネス・産業）]] / [[../general/index|general（制度・基礎理解）]]
