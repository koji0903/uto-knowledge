---
title: "Utomachi Platform - プロジェクト概要"
date: 2026-05-25
tags: [project, utomachi, next.js, firebase]
type: project
---

# Utomachi Platform - プロジェクト概要

## 基本情報
- **プロジェクト名**: utomachi_PF (Utomachi Platform)
- **リポジトリ**: `/Users/hijikuro/ViveCoding/utomachi_PF`
- **フレームワーク**: [[#技術スタック|Next.js 16.2.1]] + [[#技術スタック|React 19.2.4]]
- **言語**: TypeScript
- **ステータス**: Active Development

## プロジェクト目的

**地域産業OS** - 複数の産業ドメイン（海苔養殖、農業、小売等）にわたる統合プラットフォーム。以下を実現：

1. **マルチドメイン対応**: aquaculture.nori, agriculture.rice, store.retail など複数の産業領域
2. **組織・権限管理**: 漁協、生産者グループ、店舗グループ、自治体などの組織構造
3. **運用管理**: インシデント、イベント、タスク、ワークフロー管理
4. **データ統合**: 海洋データ、市場価格データ、予測データの一元管理
5. **意思決定支援**: シナリオシミュレーション、リソース配分、戦略的介入

## 技術スタック

### フロントエンド
- **Next.js**: 16.2.1 (App Router)
- **React**: 19.2.4
- **UI Components**: 
  - Tailwind CSS 4
  - Lucide React (icons)
  - React Leaflet (地図)
  - Recharts (チャート)
- **状態管理**: React Context (IdentityContext等)

### バックエンド・インフラ
- **認証**: Firebase Authentication
- **データベース**: Firestore (Firebase)
- **管理機能**: Firebase Admin SDK
- **スクリプト**: TypeScript + tsx

### 開発ツール
- **言語**: TypeScript 5
- **テスト**: Vitest + Testing Library
- **リント**: ESLint 9
- **ビルド**: TypeScript compiler

## 主要機能モジュール

### 1. **認証・アイデンティティ管理** [[auth-identity]]
- Firebase Authentication統合
- [[IdentityContext]] - 複雑なアイデンティティ状態管理
- マルチドメイン、マルチ組織対応

### 2. **組織・メンバーシップ管理** [[organization-membership]]
- Organization - 組織の定義・構成
- Membership - ユーザーと組織の関連付け、ロール・権能
- WorkspaceInvitation - メンバーシップ招待

### 3. **海洋データ管理** [[marine-data]]
- 水質データインポート (importMarineData.ts)
- 潮汐データ管理
- 日次・年次サマリー生成
- スクリプト:
  - `import:marine:water` - 水質データ
  - `import:marine:tide` - 潮汐データ
  - `generate:marine:daily` - 日次集計

### 4. **ノリ（海苔）予測システム** [[nori-prediction]]
- Noriデータインポート (importNoriData.ts)
- 統合予測データセット
- シーズン管理 (migrateNoriSeasons.ts)
- スクリプト:
  - `import:nori:predictions` - 決定結果
  - `import:nori:environment` - 環境データ
  - `verify:nori` - データ検証

### 5. **市場データ管理** [[market-data]]
- Wagri API連携 (外部農業データAPI)
- MarketPriceRecord - 卸売価格データ
- MarketTrend - 市場トレンド分析
- Recommendation - 推奨情報

### 6. **運用・イベント管理** [[operations-management]]
- **Event (OSEvent)** - システムイベント (info/warning/critical)
- **Incident (OSIncident)** - インシデント管理
- **OperationTask** - 運用タスク管理
- **Timeline (OSTimelineEntry)** - 監査ログ・タイムライン

### 7. **意思決定支援システム** [[decision-support]]
- **DecisionLog** - 意思決定の記録
- **ResponseScenario** - シナリオ分析
- **PredictiveSimulation** - 予測シミュレーション
- **OutcomeEvaluation** - 結果評価

### 8. **ワークフロー・タスク管理** [[workflow-management]]
- **ResponseWorkflow** - 対応ワークフロー
- **WorkflowStep** - ステップ・依存関係管理
- **OperationTask** - タスク割り当て・進捗

### 9. **監視・アラート** [[monitoring]]
- **MonitoringRule** - 監視ルール定義
- **TriggeredMonitoringAlert** - アラート発火
- **RegionalStateSnapshot** - リージョナルステート

### 10. **戦略的実行・リソース配分** [[strategic-execution]]
- **StrategicExecution** - 戦略実行計画
- **RegionalResourceAllocation** - リソース配分
- **StructuralWeakness** - 構造的弱点検出
- **StrategicIntervention** - 戦略的介入

## ディレクトリ構造

```
utomachi_PF/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components (46 files)
│   ├── contexts/         # React Context (IdentityContext)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities (zipcode, utils)
│   ├── providers/        # App providers (NoriRoleProvider)
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript definitions
│   └── __tests__/        # Unit tests
├── scripts/              # Data import/migration scripts (18 files)
├── public/
│   ├── images/           # Producer/store images
│   └── sea/              # Marine data CSV files
├── next.config.ts        # Next.js config
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies
└── CLAUDE.md             # Claude Code config reference
```

## スクリプト一覧

### 海洋データ処理
- `import:marine:water` - CSV水質データインポート
- `import:marine:tide` - CSV潮汐データインポート
- `generate:marine:daily` - 日次サマリー生成
- `generate:marine:yearly` - 年次サマリー生成
- `marine:update` - 更新・再生成

### ノリデータ処理
- `import:nori:predictions` - 予測結果インポート
- `import:nori:environment` - 環境データインポート
- `import:nori:all` - 全データインポート
- `verify:nori` - データ検証
- `migrate:nori:seasons` - シーズン移行

### その他
- `import:shared:data` - 共有データインポート
- `import:private:data` - プライベートデータ
- `test` / `test:watch` - ユニットテスト実行

## 主要な型定義

### Identity & Organization
- [[identity.ts]] - IdentityState, DomainType, Capability, Membership
- [[identity.ts]] - Organization, OrganizationType
- [[identity.ts]] - WorkspaceInvitation, WorkspacePresence

### Market Data
- [[market.ts]] - MarketPriceRecord, MarketTrend, WagriMarketItem

### Operations
- [[identity.ts]] - OSEvent, OSIncident, OperationTask, OSTimelineEntry

### Decision Support
- [[identity.ts]] - DecisionLog, ResponseScenario, PredictiveSimulation, OutcomeEvaluation

### Strategic Execution
- [[identity.ts]] - StrategicExecution, RegionalResourceAllocation, StructuralWeakness, StrategicIntervention

## 関連リンク
- [[auth-identity]] - 認証・アイデンティティシステム詳細
- [[marine-data]] - 海洋データ管理
- [[nori-prediction]] - ノリ予測システム
- [[components-architecture]] - UI コンポーネント構成
