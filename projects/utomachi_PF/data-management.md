---
title: "データ管理システム"
parent: [[overview]]
date: 2026-05-25
tags: [data, marine, market, csv, import]
---

# データ管理システム

[[overview|Utomachi Platform]] が統合管理する複数のデータドメイン。

## 1. 海洋データ (Marine Data)

### 概要
沿岸地域の水質・潮汐データを一元管理。長期的なトレンド分析・予測に活用。

### インポート処理
**ファイル**: scripts/importMarineData.ts

```bash
npm run import:marine:water -- --file public/sea/all_points_water_quality_19980101_20260510.csv
npm run import:marine:tide -- --file public/sea/all_points_water_tide_19980101_20260510.csv
```

**プロセス**:
1. CSV パース (papa-parse)
2. 日時・座標の正規化
3. Firestore へのバッチインサート
4. インポート完了ログ

### データスキーマ

#### 水質データ
**コレクション**: `marine_water_quality`

```javascript
{
  date: "2026-05-10",           // YYYY-MM-DD
  location: "point_id_123",     // 測定地点ID
  latitude: 35.1234,
  longitude: 139.5678,
  
  // 水質指標
  pH: 8.2,
  dissolved_oxygen: 6.5,        // mg/L
  salinity: 34.2,               // ppt
  temperature: 18.5,            // °C
  turbidity: 2.1,               // NTU
  
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

#### 潮汐データ
**コレクション**: `marine_tide`

```javascript
{
  date: "2026-05-10",
  location: "point_id_123",
  time: "09:30",
  
  // 潮汐情報
  tidalHeight: 0.85,            // m (相対値)
  tidalPhase: "flood",          // "flood", "ebb", "slack"
  tidalCurrent: 0.45,           // m/s
  
  createdAt: Timestamp
}
```

### 日次・年次サマリー生成

**日次サマリー生成**: `generate:marine:daily`
- ファイル: scripts/generateDailySummaries.ts
- 集計単位: 地点 × 日
- 集計内容: 
  - 平均値、最小値、最大値
  - 異常フラグ（threshold超過）
  - トレンド指標

**年次サマリー生成**: `generate:marine:yearly`
- ファイル: scripts/generateYearlySummaries.ts
- 集計単位: 地点 × 年
- 集計内容:
  - 月別集計
  - 季節別変動
  - 長期トレンド

### 外部データ連携

**Nanotech データ取得**: scripts/fetchNanotechData.ts
- リアルタイム測定データ自動同期
- キャッシュ管理

## 2. 市場データ (Market Data)

### 概要
農産物・海産物の卸売市場価格データ。意思決定・販売タイミング判断に活用。

### データスキーマ

**型定義**: src/types/market.ts

#### MarketPriceRecord
**コレクション**: `market_prices`

```typescript
interface MarketPriceRecord {
  id?: string;
  date: string;        // YYYY-MM-DD
  market: string;      // 市場名（東京, 大阪, 福岡など）
  item: string;        // 品目名（キャベツ, トマトなど）
  itemCode: string;    // 品目コード
  
  price: number;       // 卸売価格（円/単位）
  volume: number;      // 入荷量（トンまたはkg）
  origin: string;      // 産地（熊本, 長崎など）
  unit: string;        // 単位（kg, 箱など）
  
  createdAt: Timestamp | Date;
}
```

#### MarketTrend
リアルタイム分析結果：

```typescript
interface MarketTrend {
  item: string;
  market: string;
  
  currentPrice: number;
  prevPrice: number;
  diff: number;
  percent: number;     // 変動率（%）
  
  average7Days: number;  // 7日平均
  isHigh: boolean;       // 平均より高いか
}
```

#### Recommendation
推奨情報：

```typescript
interface Recommendation {
  item: string;
  bestMarket: string;   // 最高値市場
  bestPrice: number;
  reason: string;
  shippingTiming: string; // "tomorrow_morning" など
}
```

### Wagri API 統携

**Wagri API**: 外部農業データプラットフォーム

**型定義**:
```typescript
interface WagriMarketItem {
  MarketName?: string;
  ItemName?: string;
  ItemCode?: string;
  Price?: number;
  Volume?: number;
  OriginName?: string;
  UnitName?: string;
}
```

**インポート処理** (推定):
- 定期的な API ポーリング
- データの正規化・マッピング
- ローカルDB への同期

## 3. ノリ（海苔）予測データ

### 概要
海苔の成長・品質予測データセット。ノリロール管理・出荷タイミング判断に活用。

### インポート処理
**ファイル**: scripts/importNoriData.ts

```bash
npm run import:nori:predictions -- /Users/hijikuro/Codex/Nori/results/integrated_decisions.csv
npm run import:nori:environment -- /Users/hijikuro/Codex/Nori/integrated_data/marine_daily_features.csv
npm run import:nori:all
```

### データスキーマ

**コレクション**: `nori_data`, `nori_predictions` など (推定)

```javascript
{
  date: "2026-05-10",
  farmId: "farm_123",
  
  // 環境データ
  waterTemp: 18.5,
  salinity: 34.2,
  phValue: 8.2,
  
  // 成長指標
  bladeLength: 12.5,    // cm
  color: "deep_green",
  fatContent: 4.2,
  
  // 予測値
  predicted_harvest_date: "2026-05-15",
  predicted_quality_grade: "A",
  confidence: 0.92,
  
  createdAt: Timestamp
}
```

### シーズン管理

**シーズン移行**: scripts/migrateNoriSeasons.ts
- 新シーズン開始時のデータ整理
- 前シーズン履歴の保存
- 来シーズン予測データの準備

## 4. データ検証・保守

### 検証スクリプト

**marine**: scripts/verifyNoriData.ts
```bash
npm run verify:nori
```

**nori シーズン**: scripts/verifyNoriSeasons.ts
```bash
npm run verify:nori:seasons
```

**データセットカタログ**: scripts/verifyDatasetCatalog.ts
```bash
npm run verify:datasets
```

### エラーハンドリング

- **ドライランモード**: `--dry-run` フラグでテスト実行
- **ロールバック**: トランザクション失敗時のリカバリ
- **ログ出力**: 詳細なインポート・処理ログ

## 5. 外部データソース

### Nanotech データフェッチ
**ファイル**: scripts/fetchNanotechData.ts
- リアルタイムセンサーデータ
- 自動同期スケジュール

### 外部データ統合
**ファイル**: scripts/fetchExternalData.ts
- 複数の公開データソース統合
- メタデータ管理

### 共有・プライベートデータ
**ファイル**: 
- scripts/importSharedData.ts - 協力機関との共有データ
- scripts/importPrivateData.ts - 内部プライベートデータ

## 6. データパイプライン全体

```
External Data Sources
  ↓
Import Scripts (tsx)
  ├─ importMarineData.ts
  ├─ importNoriData.ts
  ├─ importDatasetMetadata.ts
  └─ fetchExternalData.ts
  ↓
Firestore Collections
  ├─ marine_water_quality
  ├─ marine_tide
  ├─ nori_data / nori_predictions
  ├─ market_prices
  └─ [others]
  ↓
Aggregation Scripts
  ├─ generateDailySummaries.ts
  ├─ generateYearlySummaries.ts
  └─ [others]
  ↓
Application (Next.js)
  ├─ Dashboard
  ├─ Analytics
  └─ Decision Support
```

## パフォーマンス考慮事項

1. **バッチ処理**: Firestore へのライト最適化
2. **インデックス**: 日付・地点・品目でのクエリ最適化
3. **キャッシュ**: 集計結果の再利用
4. **ページネーション**: 大量データの表示最適化

## 関連リンク
- [[overview]] - プロジェクト概要
- [[nori-prediction]] - ノリ予測システム詳細
- [[operations-management]] - データ異常検出とイベント化
