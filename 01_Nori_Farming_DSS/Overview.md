# 海苔養殖意思決定支援システム (Nori Farming Decision Support System)

**プロジェクト名:** Nori Farming DSS  
**バージョン:** Phase 2 (8データソース統合版)  
**開発期間:** 2025-01-01 ~ 2026-05-11  
**ステータス:** ✅ Phase E 完了 (統合・検証完了)

---

## 🎯 システムの目的

有明海・八代海における海苔養殖をサポートするAI駆動型の意思決定支援システム。複数の環境データと市場データを統合し、以下を実現します：

- **リスク評価**: 赤潮・病害発生の早期警戒
- **品質予測**: 海苔の等級と収穫時期の最適化
- **経済最適化**: 市場価格と品質を考慮した収穫スケジューリング
- **意思決定支援**: 農家への日次アラートと推奨提供

---

## 📊 システム概要

### 入力データ (8データソース)

| Tier | データソース | 頻度 | 用途 |
|---|---|---|---|
| **1** | JMA天気データ | 日次 | 基盤環境データ |
| **1** | Kumamoto栄養塩 | 週次 | 栄養状態監視 |
| **1** | MLIT河川データ | 日次 | 淡水流入管理 |
| **2** | JAXA衛星Chl | 8-16日 | 植物プランクトン監視 |
| **2** | JMA潮位 | 日次 | 海水交換監視 |
| **2** | JMAブイ | 日次 | 海洋環境詳細 |
| **3** | 陸測クロロフィル | 月次 | 衛星検証用 |
| **3** | 赤潮・病害記録 | イベント | リスク記録 |
| **3** | 市場価格 | 日次 | 経済最適化 |

### 処理フロー

```
External Data Files (8種)
         ↓
  integrate_data.py
  (Tier 1/2/3統合)
         ↓
marine_daily_features.csv
(2,976行 × 31列)
         ↓
predictive_pipeline.py
(Phase 2A-2D予測)
         ↓
出力: リスク指数・赤潮警報・収穫推奨
```

### 統合スキーマ

- **行数**: 2,976行 (298日 × 10観測点)
- **列数**: 31列
  - Tier 1 (基盤): 18列
  - Tier 2 (広域): 7列
  - Tier 3 (スパース): 5列
  - QA: 1列

---

## 🏗️ アーキテクチャ

[[Architecture]]

### ティア別統合戦略

#### Tier 1: Station-Level Base Data (日次)
- JMA気象 + MLIT河川 + Kumamoto栄養塩
- 2,976行の基盤テーブル作成
- 全10観測点 × 298日カバー

#### Tier 2: Regional Broadcast (日次/準日次)
- JAXA衛星、JMA潮位・ブイ、過去水質
- 日付マッチングで全観測点に展開
- 広域観測値を地点別に複製

#### Tier 3: Sparse Forward-Fill (月次/イベント)
- 陸測クロロフィル、赤潮記録、市場価格
- 最後の観測値を前方継続充填
- スパースデータの時間補間

詳細は [[DataIntegration]] を参照

---

## 📈 予測モデル (Phase 2)

[[PredictiveModels]]

### Phase 2A: リスク指数計算
- **Color-drop risk**: 栄養消費・変色リスク
- **Disease risk**: 水温・塩分・DO相互作用
- **Harvest acceleration**: 緊急度スコア

### Phase 2B: 赤潮検出
- 有害藻類ブルーム (HAB) 警報
- 3段階アラート (Green/Yellow/Red)
- イベントベース更新

### Phase 2C: 収穫推奨
- 最適収穫日提案
- 等級予測（上・中・下）
- 信頼度スコア

### Phase 2D: 相関分析
- 変数間の関係性可視化
- 主要ドライバー特定

詳細は [[PredictiveModels]] を参照

---

## 📁 ファイル構成

### コアスクリプト

```
/Codex/Nori/scripts/
├── integrate_data.py (500+行)
│   └─ 全8データソース統合エンジン
├── predictive_pipeline.py
│   ├─ risk_indices.py
│   ├─ red_tide_detector.py
│   ├─ harvest_recommender.py
│   └─ correlation_analysis.py
├── fetch_jma_*.py
├── fetch_river_data.py
├── fetch_tidal_data.py
├── fetch_jma_buoy.py
├── water_quality_loader.py
├── fetch_chlorophyll_data.py
├── fetch_red_tide_history.py
└── fetch_market_prices.py
```

### データファイル

```
/Codex/Nori/
├── external_data/ (入力: 8データソース)
│   ├── jma_weather_*.csv
│   ├── kumamoto_nori_nutrients.csv
│   ├── river_data_*.csv
│   ├── chlorophyll_jaxa_*.csv
│   └── ...
├── integrated_data/ (統合データ)
│   ├── marine_daily_features.csv (31列×2,976行)
│   └── predictions/
│       ├── harvest_recommendations_*.csv
│       ├── red_tide_alerts_*.csv
│       └── marine_daily_features_with_risks.csv
└── data/ (過去データ)
    └── all_points_water_quality_19980101_20260510.csv
```

### ドキュメント

```
/Codex/Nori/docs/
├── INTEGRATION_LOGIC_DESIGN.md (9.6 KB)
│   └─ Tier統合戦略の詳細設計
├── CACHING_ERROR_HANDLING_STRATEGY.md (12 KB)
│   └─ キャッシング・エラー処理パターン
├── DATA_ACQUISITION_GUIDE.md (17 KB) ★ NEW
│   └─ 全8データソースの取得・管理ガイド
└── INTEGRATED_DATA_SCHEMA.md (24 KB) ★ NEW
    └─ 31列の完全仕様書・検証ルール
```

---

## 🚀 Phase E 完成成果

### Phase E1: integrate_data.py 完全実装
- 7つの新規ロード関数 (load_mlit_river_data, load_jma_tide_data, etc.)
- Tier 1/2/3統合ロジック完全実装
- 31列の統合スキーマ出力

### Phase E2: 統合パイプラインテスト成功
- 2,976行 × 31列の統合データ生成確認
- JAXA衛星データ195日分統合
- 処理時間: ~5秒

### Phase E3: 予測モデル検証完了
- 赤潮警報: 42件検出
- 収穫推奨: 全6農場で生成
- 信頼度: 65%

### Phase E4: ドキュメント完成
- DATA_ACQUISITION_GUIDE.md (17 KB)
- INTEGRATED_DATA_SCHEMA.md (24 KB)
- 計4個のドキュメント (63 KB)

詳細は [[Accomplishments]] を参照

---

## 🔧 運用ガイド

[[Operations]]

### 日次運用フロー

```
08:00 JMA天気データ自動更新
        ↓
08:30 MLIT河川データ自動更新
        ↓
09:00 python3 scripts/integrate_data.py
        ↓
09:15 python3 scripts/predictive_pipeline.py
        ↓
09:30 農家へ日次アラート配信
```

### 定期メンテナンス

- **週次**: Kumamoto栄養塩レポート確認
- **月次**: 赤潮・病害イベント記録更新
- **季節別**: JAXA衛星データ検証

詳細は [[Operations]] を参照

---

## 🐛 トラブルシューティング

[[Troubleshooting]]

### よくある問題

| 問題 | 原因 | 解決方法 |
|---|---|---|
| integrate_data.py がファイル未検出エラー | fetch_*.py スクリプト未実行 | `python3 scripts/fetch_*.py` を実行 |
| 出力行数が 2,976 より少ない | 入力ファイルが不完全 | `wc -l external_data/*.csv` で確認 |
| 予測モデルが scipy エラー | ライブラリ未インストール | `pip install scipy` |
| JAXA データが 0 行 | 衛星データ API ダウン | 手動取得、キャッシュを使用 |

詳細は [[Troubleshooting]] を参照

---

## 📚 関連ドキュメント

- [[Architecture]] - システムアーキテクチャ
- [[DataIntegration]] - データ統合戦略
- [[DataSources]] - 8データソースの詳細
- [[PredictiveModels]] - Phase 2 予測モデル
- [[Schema]] - 31列スキーマ仕様
- [[Operations]] - 運用手順
- [[Troubleshooting]] - トラブルシューティング
- [[Accomplishments]] - Phase E 成果物
- [[Glossary]] - 用語集

---

## 🔗 外部リソース

| リソース | URL |
|---|---|
| JMA Data | https://www.data.jma.go.jp/ |
| MLIT Water System | https://www1.river.go.jp/ |
| JAXA Earth Obs | https://eorc.jaxa.jp/ |
| Kumamoto Prefecture | https://www.pref.kumamoto.jp/ |
| Ministry of Environment | https://www.env.go.jp/ |

---

**最終更新:** 2026-05-11  
**バージョン:** 2.0 (Phase 2 完全版)  
**ステータス:** ✅ 本番運用可能

