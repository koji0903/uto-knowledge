# ウトマチプラットフォーム システムアーキテクチャ

**プロジェクト**: Utomachi Platform (ウトマチ農業マルチテナント統合プラットフォーム)  
**保存先**: `/Users/hijikuro/ViveCoding/utomachi_PF`  
**バージョン**: 0.1.0  
**最終更新**: 2026-05-12  
**ステータス**: 🟢 Active Development

---

## 📋 目次

1. [システム概要](#システム概要)
2. [技術スタック](#技術スタック)
3. [アーキテクチャ](#アーキテクチャ)
4. [ロール・ベースの機能](#ロールベースの機能)
5. [コアコンポーネント](#コアコンポーネント)
6. [データモデル](#データモデル)
7. [サービス層](#サービス層)
8. [API設計](#api設計)
9. [Firebase統合](#firebase統合)
10. [デプロイメント](#デプロイメント)

---

## システム概要

### プラットフォーム目的

ウトマチプラットフォーム（Utomachi Platform）は、農業関係者（農家、生産者、卸売業者、秘書室）が以下を実現するための統合プラットフォームです:

- 🌾 **生産管理**: 作物の生育状況、病害虫、収穫タイミング
- 🌊 **海洋環境監視**: 水温、塩分、赤潮リスク（Nori統合）
- 📊 **市場価格分析**: グレード別価格、市場トレンド
- 💬 **コミュニケーション**: ステークホルダー間のメッセージング
- 📈 **AI インサイト**: 生成型AIによる意思決定支援
- 🗺️ **地理情報**: 農地位置、地形、微気候

### マルチテナント設計

複数の農業協同組合・生産者グループが独立したテナントとして利用可能:

```
[テナント A]  [テナント B]  [テナント C]
     ↓             ↓             ↓
  ┌─────────────────────────────────┐
  │  Utomachi Platform (共用SaaS)   │
  │  - Firestore DB (テナント分離)  │
  │  - Firebase Auth                │
  │  - Next.js フロントエンド       │
  │  - REST API                     │
  └─────────────────────────────────┘
```

---

## 技術スタック

### フロントエンド

| レイヤー | 技術 | 詳細 |
|---------|------|------|
| **フレームワーク** | Next.js 16 | App Router (最新版) |
| **言語** | TypeScript 5 | 型安全性強化 |
| **UI ライブラリ** | React 19 | 最新版、Server Components対応 |
| **スタイリング** | Tailwind CSS 4 | ユーティリティファースト |
| **アイコン** | Lucide React | 1,600+ アイコン |
| **グラフ表示** | Recharts 3.8 | 統計・時系列グラフ |
| **地図表示** | Leaflet + react-leaflet | OpenStreetMap統合 |
| **画像処理** | browser-image-compression | クライアント側圧縮 |
| **マークダウン** | react-markdown | コンテンツレンダリング |

### バックエンド・データベース

| レイヤー | 技術 | 詳細 |
|---------|------|------|
| **Runtime** | Node.js (Next.js) | サーバーサイド処理 |
| **言語** | TypeScript | バックエンド型安全性 |
| **データベース** | Firestore | NoSQL ドキュメント型 |
| **認証** | Firebase Auth | OAuth 2.0, メール/パスワード |
| **ストレージ** | Firebase Storage | 画像・メディア保存 |
| **メッセージング** | Firebase Cloud Messaging | プッシュ通知 |
| **データスクレイピング** | Cheerio | HTML解析 |
| **CSV処理** | csv-parse | CSV→JSONパーサー |

### 外部API・サービス

| サービス | 用途 | 詳細 |
|---------|------|------|
| **Google Gemini AI** | 生成型AI | テキスト生成、インサイト |
| **NANOTECH** | 海洋データ | 水質・潮位スクレイピング |
| **JAXA衛星API** | 衛星画像 | クロロフィル・透視度 |
| **JMA API** | 気象データ | 天気・気象予報 |
| **地名辞書** | ジオコーディング | 住所→座標変換 |
| **市場データAPI** | 価格情報 | 農産物相場データ |

### 開発・デプロイメント

| ツール | 用途 |
|--------|------|
| **パッケージ管理** | npm / pnpm |
| **バンドラー** | Webpack (Next.js内蔵) |
| **リンター** | ESLint 9 |
| **デプロイ** | Vercel |
| **CI/CD** | GitHub Actions (予定) |

---

## アーキテクチャ

### 全体構成図

```
┌─────────────────────────────────────────────────────────┐
│                     ウトマチプラットフォーム              │
│                   (SaaS マルチテナント)                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Vercel (Deployment & Edge Runtime)              │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Next.js 16 (App Router)                   │  │  │
│  │  │  ├─ /app/farmer/* (農家向け)              │  │  │
│  │  │  ├─ /app/producer/* (生産者向け)           │  │  │
│  │  │  ├─ /app/admin/* (管理者向け)              │  │  │
│  │  │  ├─ /app/secretariat/* (秘書室向け)        │  │  │
│  │  │  ├─ /app/store/* (流通・小売向け)          │  │  │
│  │  │  ├─ /app/api/* (REST API)                  │  │  │
│  │  │  └─ /app/login (認証ページ)                │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│                          ↓                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Firebase Backend                                │  │
│  │  ├─ Firestore (NoSQL DB, テナント分離)          │  │
│  │  ├─ Firebase Auth (認証)                        │  │
│  │  ├─ Firebase Storage (メディア)                  │  │
│  │  └─ Firebase Cloud Messaging (Push通知)        │  │
│  └──────────────────────────────────────────────────┘  │
│                          ↓                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │  External Data Sources                           │  │
│  │  ├─ NANOTECH (海洋データスクレイピング)           │  │
│  │  ├─ JMA (気象予報API)                            │  │
│  │  ├─ JAXA (衛星画像)                              │  │
│  │  ├─ 市場データAPI                                │  │
│  │  └─ Google Gemini AI (生成型AI)                 │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### レイヤー構成

```
┌──────────────────────────────────────────┐
│         Presentation Layer               │
│  ┌──────────────────────────────────────┐│
│  │ ロール別UI (Farmer/Producer/Admin)  ││
│  │ コンポーネントライブラリ              ││
│  │ クライアントサイド状態管理             ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
               ↓ (HTTP/GraphQL/Fetch)
┌──────────────────────────────────────────┐
│         API Layer                        │
│  ┌──────────────────────────────────────┐│
│  │ Next.js API Routes (/api/*)          ││
│  │ Firebase Cloud Functions (予定)       ││
│  │ エラーハンドリング・レート制限         ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
               ↓ (SDK)
┌──────────────────────────────────────────┐
│         Service Layer                    │
│  ┌──────────────────────────────────────┐│
│  │ Business Logic                       ││
│  │ Data Validation                      ││
│  │ External API Integration             ││
│  │ AI/ML Service Calls                  ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
               ↓ (SDK)
┌──────────────────────────────────────────┐
│         Data Layer                       │
│  ┌──────────────────────────────────────┐│
│  │ Firestore (NoSQL)                    ││
│  │ Firebase Auth                        ││
│  │ Firebase Storage                     ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
```

---

## ロール・ベースの機能

### 1. 🌾 農家向け (Farmer)

**ルート**: `/app/farmer/*`

**主要機能**:
- 🌊 赤潮予測・海洋環境監視 (Nori統合)
  - リアルタイム赤潮リスク表示
  - 警告レベル (Green/Yellow/Red)
  - 推奨アクション (OPTIMAL/MONITOR/DEFER)
- 📈 潮位・波浪情報
- 📊 市場価格情報
- 📸 作業記録・メディアアップロード
- 💬 秘書室・その他農家との連絡
- 📲 スマートフォン対応

**コンポーネント**:
- NoriPredictionDashboard (赤潮予測)
- MarineDataViewer (海洋環境)
- MarineRiskDiagnosis (リスク診断)
- MarineChart (グラフ表示)

### 2. 👨‍🌾 生産者向け (Producer)

**ルート**: `/app/producer/*` (計画中)

**主要機能**:
- 生産履歴管理
- 出荷管理
- グレード別品質記録
- 提案受け取り

### 3. 👔 管理者向け (Admin)

**ルート**: `/app/admin/*`

**主要機能**:
- ユーザー・テナント管理
- データインポート
- システム設定
- 監査ログ

**コンポーネント**:
- DataImporter (CSV/Firestore取り込み)
- SystemInfo (システム情報)

### 4. 📋 秘書室向け (Secretariat)

**ルート**: `/app/secretariat/*`

**主要機能**:
- 予定管理
- 文書・通知配信
- 農家サポート

### 5. 🏪 流通・小売向け (Store)

**ルート**: `/app/store/*`

**主要機能**:
- 仕入管理
- 在庫追跡
- 価格設定
- 販売データ

### 6. 💼 事務所向け (Office)

**ルート**: `/app/office/*`

**主要機能**:
- 統計レポート
- 経営分析
- 予測ダッシュボード

---

## コアコンポーネント

### レイアウトコンポーネント

| コンポーネント | 用途 | ロール |
|-------------|------|--------|
| **Header.tsx** | ナビゲーション・ユーザーメニュー | 全員 |
| **Sidebar.tsx** | サイドナビゲーション | 全員 |
| **DashboardContent.tsx** | メインダッシュボード | 全員 |

### 海洋・海苔関連

| コンポーネント | 用途 | 詳細 |
|-------------|------|------|
| **NoriPredictionDashboard** | 赤潮予測表示 | Phase 4 ML統合 |
| **MarineDataViewer** | 水質データ表示 | リアルタイム・履歴 |
| **MarineRiskDiagnosis** | リスク診断UI | 養殖適性判定 |
| **MarineChart** | グラフ表示 | Recharts利用 |
| **MarineLongTermTrends** | 長期トレンド | 年単位の推移 |
| **TideChart** | 潮位グラフ | 日次・月次表示 |
| **TideManager** | 潮位データ管理 | 管理者用 |

### データ管理

| コンポーネント | 用途 |
|-------------|------|
| **MarineDataManager** | 海洋データのCRUD |
| **MarineDataInput** | データ入力フォーム |
| **MediaGallery** | メディア表示・管理 |
| **ProducerDetailSheet** | 生産者詳細情報 |

### UI共通

| コンポーネント | 用途 |
|-------------|------|
| **ui/** (ディレクトリ) | Tailwind UI コンポーネント |
| **KPIDashboard** | KPI表示 |
| **LandingPage** | ランディングページ |
| **LoginForm** | 認証フォーム |
| **SystemInfo** | システム情報パネル |

---

## データモデル

### Firestore コレクション一覧

#### ユーザー・認証関連

```typescript
// users コレクション
{
  uid: string;                      // Firebase Auth UID
  email: string;
  name: string;
  role: "farmer" | "producer" | "admin" | "secretariat" | "store" | "office";
  tenantId: string;                 // マルチテナント対応
  phone?: string;
  address?: string;
  profileImage?: string;            // Firebase Storage URL
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// tenants コレクション
{
  name: string;                     // テナント（協同組合）名
  location: string;
  region: string;
  memberCount: number;
  subscriptionStatus: "active" | "inactive";
  createdAt: Timestamp;
}
```

#### 海洋・赤潮関連

```typescript
// water_quality_observations
{
  stationId: string;
  observedAt: Timestamp;
  date: string (YYYY-MM-DD);
  waterTemperature: number;         // °C
  salinity: number;                 // psu
  dissolvedOxygen: number;          // mg/L
  chlorophyll: number;              // mg/m³
  transparency: number;             // m
  qualityFlags: string[];
  timestamp: Timestamp;
}

// nori_predictions (Phase 4統合)
{
  date: string (YYYY-MM-DD);
  station_id: string;
  ensemble_probability: number;     // 赤潮確度
  alert_level: "Green" | "Yellow" | "Red";
  final_recommendation: "OPTIMAL" | "MONITOR" | "DEFER" | "WAIT";
  confidence: number;               // 信頼度
  timestamp: Timestamp;
}
```

#### 作業・生産関連

```typescript
// nori_process_logs
{
  producerId: string;
  date: string;
  taskType: "harvesting" | "maintenance" | "inspection";
  description: string;
  duration: number;                 // 分数
  mediaUrls: string[];              // 画像URL
  createdAt: Timestamp;
}

// nori_stories
{
  producerId: string;
  title: string;
  content: string;
  images: string[];
  tags: string[];
  publishedAt: Timestamp;
}
```

#### ビジネス関連

```typescript
// market_data
{
  date: string;
  product: string;
  gradeA: number;                   // ¥/kg
  gradeB: number;
  gradeC: number;
  market: string;
  timestamp: Timestamp;
}

// audit_logs
{
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  changes: Record<string, any>;
  timestamp: Timestamp;
}
```

---

## サービス層

### `/src/lib/services/` 構成

| ファイル | 機能 | 詳細 |
|--------|------|------|
| **aiService.ts** | Google Gemini AI統合 | テキスト生成、インサイト生成 |
| **marineSummaryService.ts** | 海洋データ集計 | 日次・年次サマリー生成 |
| **nanotechScraper.ts** | NANOTECHスクレイピング | 水質・潮位の自動取得 |
| **marketService.ts** | 市場データ処理 | グレード別価格の取得・管理 |
| **insightService.ts** | インサイト生成 | AI＋ビジネスロジック |
| **tideService.ts** | 潮位データ | 計算・予測 |
| **jaxa.ts** | JAXA衛星API | クロロフィル・透視度 |
| **csvService.ts** | CSV処理 | データエクスポート・インポート |
| **geocoding.ts** | ジオコーディング | 住所↔座標変換 |
| **marketDataSync.ts** | 市場データ同期 | 定期更新 |

### Firebase ラッパー層

| ファイル | 機能 |
|--------|------|
| **firestore.ts** | Firestore CRUD操作 |
| **config.ts** | Firebase設定 |
| **admin.ts** | 管理者操作 |
| **storage.ts** | ファイルアップロード |
| **messaging.ts** | プッシュ通知 |
| **media.ts** | メディア処理 |
| **transactions.ts** | トランザクション |

---

## API設計

### Next.js API Routes (`/app/api/*`)

```
/api/
├─ marine/
│  ├─ observations   (GET: 水質観測)
│  ├─ update         (POST: データ更新)
│  └─ summaries      (GET: サマリー)
├─ nori/
│  ├─ predictions    (GET: 赤潮予測)
│  └─ update         (POST: 定期更新)
├─ insights/
│  └─ generate       (POST: AI生成)
├─ market/
│  └─ prices         (GET: 市場価格)
├─ ai/
│  └─ gemini         (POST: AI呼び出し)
└─ test-models/
   └─ ... (テスト用)
```

### 認証

- Firebase Authentication (OAuth 2.0, メール/パスワード)
- JWT トークン (Firebase ID Token)
- RBAC (Role-Based Access Control)

### 課題管理

```
CORSハンドリング ✅
レート制限 (実装中)
キャッシング (実装中)
エラーハンドリング ✅
ロギング ✅
```

---

## Firebase統合

### Firestore セキュリティルール (例)

```javascript
// 基本的なロールベースアクセス
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // ユーザーは自身のデータのみアクセス可能
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }

    // テナントメンバーのみアクセス可能
    match /water_quality_observations/{document=**} {
      allow read: if request.auth != null &&
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.tenantId == resource.data.tenantId;
    }
  }
}
```

### Firebase Storage

```
storage/
├─ avatars/{userId}/*
├─ nori_media/{producerId}/*
├─ imports/{tenantId}/*
└─ exports/{userId}/*
```

---

## デプロイメント

### 環境設定

**ローカル開発**:
```bash
npm run dev                    # http://localhost:3000
npm run import:marine:all      # 海洋データインポート
npm run import:nori:all        # Noriデータインポート
```

**ステージング・本番**:
- デプロイ先: Vercel
- 自動デプロイ: GitHub → Vercel
- 環境変数: Vercel Project Settings

### 必須環境変数

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
FIREBASE_SERVICE_ACCOUNT=...  # JSON文字列
NEXT_PUBLIC_GEMINI_API_KEY=...
NANOTECH_LOGON_ID=...
NANOTECH_PASSWORD=...
CRON_SECRET=...               # Vercel Cron
```

### Cron Jobs (Vercel)

```json
{
  "crons": [
    {
      "path": "/api/marine/update",
      "schedule": "0 9 * * *"        // 毎日9時
    },
    {
      "path": "/api/nori/update",
      "schedule": "0 0 * * *"        // 毎日0時
    }
  ]
}
```

---

## 対応デバイス

### レスポンシブデザイン

- **デスクトップ**: 1280px以上
- **タブレット**: 768px～1279px
- **モバイル**: ～767px

### ブラウザ

- Chrome 最新版 ✅
- Firefox 最新版 ✅
- Safari 最新版 ✅
- Edge 最新版 ✅

### アクセシビリティ

- WCAG 2.1 AA準拠 (目標)
- キーボードナビゲーション対応
- スクリーンリーダー対応予定

---

## パフォーマンス指標

### ターゲット指標

| メトリック | ターゲット | 現在 |
|-----------|-----------|------|
| **FCP** (First Contentful Paint) | < 2.5s | TBD |
| **LCP** (Largest Contentful Paint) | < 4s | TBD |
| **CLS** (Cumulative Layout Shift) | < 0.1 | TBD |
| **TTFB** (Time to First Byte) | < 300ms | TBD |

### キャッシング戦略

```
静的assets:  Cache-Control: max-age=31536000
API応答:     Cache-Control: max-age=300 (5分)
ページ:      ISR (Incremental Static Regeneration)
```

---

## セキュリティ

### 実装済み

- [x] Firebase Authentication (OAuth)
- [x] RBAC (ロールベースアクセス制御)
- [x] Firestore セキュリティルール
- [x] HTTPS(Vercel)
- [x] CORS設定
- [x] CSP (Content Security Policy) 予定

### 監査・コンプライアンス

- [x] 監査ログ (audit_logs コレクション)
- [x] ユーザーアクション追跡
- [ ] GDPR対応 (予定)
- [ ] 個人情報保護方針 (予定)

---

## 開発ワークフロー

### ローカル開発

```bash
# 1. リポジトリクローン
git clone https://github.com/[org]/utomachi_pf.git
cd utomachi_pf

# 2. 依存関係インストール
npm install

# 3. 環境変数設定
cp .env.example .env.local
# .env.local を編集

# 4. 開発サーバー起動
npm run dev

# 5. ブラウザで確認
# http://localhost:3000
```

### コード品質

```bash
npm run lint              # ESLint
# npm run type-check      # TypeScript (準備中)
# npm run test            # Jest (準備中)
```

### ビルド・デプロイ

```bash
npm run build             # 本番ビルド
npm run start             # 本番サーバー起動
# git push → Vercel自動デプロイ
```

---

## 今後の計画

### Short-term (1-2ヶ月)

- [x] Nori Phase 4 ML統合 ✅
- [ ] テストスイート拡充 (Jest/Vitest)
- [ ] E2E テスト (Cypress/Playwright)
- [ ] パフォーマンス最適化

### Mid-term (3-6ヶ月)

- [ ] モバイル専用アプリ (React Native)
- [ ] オフラインモード (PWA)
- [ ] リアルタイム通知 (Socket.io)
- [ ] 多言語対応 (i18n)

### Long-term (6ヶ月以上)

- [ ] IoTセンサー統合
- [ ] ドローン画像解析
- [ ] ディープラーニング予測モデル
- [ ] ブロックチェーン (流通履歴)
- [ ] メタバース農業シミュレーション

---

## 関連ドキュメント

### 内部ドキュメント
- [[Phase4_Utomachi_Integration]] - Nori統合
- [[02_農業/海苔養殖業/DataIntegration|海洋データ取得ガイド]] - 海洋データ取得

### 外部ドキュメント
- [Nori Phase 4 ML Integration](../Codex/Nori/docs/Phase4_ML_Integration_Complete.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

---

## コンタクト・サポート

### 開発チーム

| 役割 | 連絡先 |
|------|--------|
| **プロジェクトリード** | [TBD] |
| **バックエンドエンジニア** | [TBD] |
| **フロントエンドエンジニア** | [TBD] |
| **データサイエンティスト** | [TBD] |

### リソース

- GitHub: [TBD]
- Jira: [TBD]
- Slack: [TBD]
- Wiki: [TBD]

---

**ステータス**: 🟢 Active Development  
**最終更新**: 2026-05-12  
**次レビュー**: 2026-06-12
