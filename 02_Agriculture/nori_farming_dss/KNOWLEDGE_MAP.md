# 🗺️ 海洋データ・海苔養殖ナレッジマップ

**プロジェクト:** Nori Farming Decision Support System × Utomachi Platform  
**更新日:** 2026-05-12  
**バージョン:** 2.0 (シーズン管理対応版)  
**目的:** 海洋データと海苔養殖に関するすべてのナレッジの体系的整理と相互関係の可視化

> ⭐ **NEW:** [[NORI_SEASON_DEFINITION|シーズンベース管理体系]] - データを海苔養殖シーズン（秋～春）で管理するための統合フレームワーク

---

## 📊 ナレッジベース全体構成

### 🌊 **シーズンベースの管理体系（NEW）**

```
海苔養殖シーズン: 秋(9-10月) → 冬(11-2月) → 春(3-4月) → オフシーズン(5-8月)
                    ↓            ↓            ↓
                  準備         最盛期         終盤
                  
各シーズンごとに Layer 1-4 を完全に管理:
  datasets/seasons/2025-26/  ← シーズン毎のデータ
  models/season_2025-26/     ← シーズン毎の予測モデル
  reports/season_2025-26/    ← シーズン毎の分析レポート
```

### 📐 **4層構造（シーズン独立）**

```
┌─────────────────────────────────────────────────────────────────┐
│         海洋データ・海苔養殖ナレッジベース全体                       │
└─────────────────────────────────────────────────────────────────┘
         ↓
    ┌─────────────────────────────────────────────────────────────┐
    │ 4つのレイヤーで構成（各シーズンで独立管理）                     │
    ├─────────────────────────────────────────────────────────────┤
    │ 1️⃣ データソース・取得 (Layer 1)                              │
    │ 2️⃣ データ統合・処理 (Layer 2) - シーズン毎スキーマ            │
    │ 3️⃣ 分析・予測モデル (Layer 3) - シーズン毎評価               │
    │ 4️⃣ 実装・運用 (Layer 4) - シーズン毎ダッシュボード            │
    └─────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ データソース・取得層（Layer 1）

### 📍 **概要ドキュメント**

| ドキュメント | 内容 | 対象読者 | 更新日 |
|-----------|------|---------|--------|
| [[nori_external_data_source_survey\|外部データ自動取得調査]] | 8つのデータソース調査 (JMA, MLIT, JAXA等)、取得方法、仕様 | データエンジニア | 2026-05-11 |
| [[ds_nori_marine_observation_1998_2026\|海況観測データ概要 1998-2026]] | 熊本市海況観測データの28年間の蓄積、統計値、期間範囲 | 全員 | 2026-05-11 |

### 📊 **データソース詳細**

#### A. JMA（気象庁）データ
- **ドキュメント:** Overview.md → 1. JMA 気象観測
- **収集項目:** 気温、降水量、風速・風向、日射量
- **観測地点:** 6地点（熊本中央、人吉など）
- **頻度:** 日次
- **使用目的:** 赤潮発生の気象条件の把握

#### B. MLIT（国土交通省）河川データ
- **ドキュメント:** Overview.md → 3. MLIT河川データ
- **収集項目:** 白川、緑川、坪井川の水位・流量
- **観測地点:** 3河川
- **頻度:** 日次
- **使用目的:** 淡水流入量と塩分低下の関係分析

#### C. Kumamoto 県漁業データ
- **ドキュメント:** Phase3a_Optimization.md
- **収集項目:** 水温、塩分、溶存酸素（DO）
- **観測地点:** 複数地点
- **頻度:** 日次～週次
- **使用目的:** 直接的な水質環境監視

#### D. JAXA 衛星クロロフィルデータ
- **ドキュメント:** [[01_CHLOROPHYLL_JAXA|クロロフィル-a濃度データ取得システム]]
- **収集項目:** クロロフィル-a濃度（衛星観測）
- **観測範囲:** 有明海全体
- **頻度:** 8～16日ごと
- **使用目的:** 赤潮検出の直接指標

#### E. JMA 潮位データ
- **ドキュメント:** Phase3a_Optimization.md
- **収集項目:** 潮位レベル、潮位レンジ
- **観測地点:** 佐賀関、唐津など
- **頻度:** 日次
- **使用目的:** 塩分変動、栄養塩供給の周期性

#### F. 陸測クロロフィル・透視度
- **ドキュメント:** Phase3b_Extended_Data_Integration.md
- **収集項目:** クロロフィル検測値、透視度
- **出所:** 環境省、熊本県水産研究所
- **頻度:** 月次～四半期
- **使用目的:** 衛星データの検証・補完

#### G. JAFIC 衛星赤潮確率
- **ドキュメント:** Phase3b_Extended_Data_Integration.md
- **収集項目:** 赤潮発生確率（機械学習ベース）
- **プロバイダー:** 日本水産資源保護協会
- **頻度:** 日次
- **使用目的:** 赤潮検出の高度な予測指標

#### H. JMA 波浪予報
- **ドキュメント:** Phase3b_Extended_Data_Integration.md
- **収集項目:** 最大波高、波周期
- **予報範囲:** 有明海、佐賀沖
- **頻度:** 日次更新
- **使用目的:** 収穫タイミング調整、作業安全性評価

### 📋 **データ品質・運用ドキュメント**

| ドキュメント | 内容 | 対象読者 |
|-----------|------|---------|
| [[nori_marine_data_quality_1998_2026\|データ品質メモ 1998-2026]] | フィル率分析、期間注意、欠損データ処理 | データエンジニア |
| [[nori_marine_data_operations\|運用メモ]] | 保管方針、アクセス、バージョン管理 | 運用チーム |

---

## 2️⃣ データ統合・処理層（Layer 2）

### 🔗 **統合パイプライン**

| ドキュメント | 内容 | 対象読者 | 関連フェーズ |
|-----------|------|---------|-----------|
| [[../04_DataLink/datasets/02_DATA_INTEGRATION_PIPELINE\|データ統合パイプライン]] | Tier 1/2/3統合アーキテクチャ、空間・時間解像度対応 | システム設計者 | Phase 2-3 |
| [[Phase3a_Optimization\|Phase 3a 設計・仕様]] | 地理スコープ最適化、スキーマ設計 | データエンジニア | Phase 3a |
| [[Phase3a_Geographic_Interpolation\|地理的距離補間]] | ハバーサイン距離計算、IDW補間実装 | データエンジニア | Phase 3a |
| [[Phase3b_Extended_Data_Integration\|Phase 3b 拡張統合]] | JAFIC/波浪/市場価格統合、スキーマ拡張 | データエンジニア | Phase 3b |

### 📐 **スキーマ進化**

```
Phase 2 (初期)
    ↓ 18列
Phase 3a (最適化)
    ↓ 26列（スコープ縮小、観測地点統一）
Phase 3b (拡張)
    ↓ 32列（JAFIC, 波浪, グレード別価格追加）
Phase 3c (検討中)
    ↓ 35-40列（履歴統計、クロロフィル陸測、赤潮イベント履歴統合予定）
```

### 🛠️ **統合技術**

| 技術 | 用途 | ドキュメント |
|-----|------|-----------|
| **IDW補間** | 5地点欠損値補完 | [[Phase3a_Geographic_Interpolation]] |
| **Tier別統合** | 異なる解像度データの結合 | [[../04_DataLink/datasets/02_DATA_INTEGRATION_PIPELINE]] |
| **前進充填** | 時系列ギャップ埋め | Architecture.md → エラーハンドリング |
| **Z-score正規化** | Phase 3c統計データの基準化 | [[Phase4_ML_Integration#特徴量エンジニアリング]] |
| **STL分解** | 季節変動の分離 | [[Phase4_ML_Integration#4A3季節分解]] |

---

## 3️⃣ 分析・予測モデル層（Layer 3）

### 📈 **予測モデル進化**

| フェーズ | 手法 | 主要成果 | ドキュメント |
|---------|------|---------|-----------|
| **Phase 2** | 規則ベース予測 | リスク指数・赤潮検出・収穫推奨 | [[PredictiveModels]] |
| **Phase 3c** | 統計分析・相関分析 | 28年データの特性把握 | [[../04_DataLink/reports/nori_marine_long_history_analysis_20260511\|長期分析レポート]] |
| **Phase 4A** | 特徴量エンジニアリング | Z-score化、マハラノビス距離 | [[Phase4_ML_Integration#フェーズ4A]] |
| **Phase 4B** | 機械学習（LR/RF/XGBoost） | AUC 0.85-1.0 の分類モデル | [[Phase4_ML_Integration#フェーズ4B]] |
| **Phase 4C** | マルチモデル統合 | 赤潮+収穫+市場価格の同時最適化 | [[Phase4_ML_Integration#フェーズ4C]] |

### 🤖 **Phase 4 機械学習統合**

**詳細:** [[Phase4_ML_Integration]]

#### 4A. 特徴量エンジニアリング
- Z-score正規化（28年統計を基準）
- マハラノビス距離による異常検出
- STL分解による季節分解
- 移動平均フィルタリング

#### 4B. モデル開発
- **ロジスティック回帰:** Baseline (AUC 0.919)
- **ランダムフォレスト:** Best performance (AUC 1.0)
- **XGBoost:** 高速予測版（実装計画中）

**訓練データ:** 赤潮イベント履歴 462件（教師ラベル）

#### 4C. マルチモデル統合
- アンサンブル投票平均
- 赤潮確度 + 収穫リスク + 市場価格の統合
- 最終推奨決定エンジン

### 📊 **分析成果**

| 分析内容 | 対象期間 | ドキュメント | キーファインディング |
|---------|---------|-----------|-----------------|
| **長期海況分析** | 1998-2026 (28年) | [[../04_DataLink/reports/nori_marine_long_history_analysis_20260511]] | 季節パターン、異常値、トレンド検出 |
| **相関分析** | 直近5-10年 | [[PredictiveModels#相関分析フレームワーク]] | 変数間の関係性（水温×赤潮、塩分×クロロフィル等） |
| **特徴量重要度** | Phase 4B結果 | [[Phase4_ML_Integration#4B4-5評価]] | 水温履歴平均が最重要(28.2%)、クロロフィル移動平均(25.0%) |

---

## 4️⃣ 実装・運用層（Layer 4）

### 🚀 **ウトマチプラットフォーム統合**

**詳細:** [[Phase4_Utomachi_Integration]]

#### バックエンド実装
- **importNoriData.ts:** 5,456×2 Firestore インポート
- **verifyNoriData.ts:** インポート検証スクリプト
- **Firestore スキーマ:** nori_predictions, nori_environment_data

#### フロントエンド実装
- **NoriPredictionDashboard:** React コンポーネント
  - 最新予測サマリー
  - アラートレベル表示（🟢 Green / 🟡 Yellow / 🔴 Red）
  - 推奨アクション表示（OPTIMAL / MONITOR / DEFER / WAIT）
  - 30日履歴テーブル
  - モデル精度比較

#### API エンドポイント（Phase 4D 予定）
- `/api/v1/red_tide_forecast/{station_id}` - 赤潮予測
- `/api/v1/harvest_recommendation/{farm_id}` - 収穫推奨
- `/api/v1/market_analysis/{period}` - 市場分析
- `/api/v1/environment_snapshot/{station_id}` - 環境スナップショット

### 📋 **実装ドキュメント**

| ドキュメント | 内容 | 対象 | ステータス |
|-----------|------|------|----------|
| [[Phase4_Utomachi_Integration]] | インポート・ダッシュボード・スキーマ | 開発/運用チーム | ✅ 完了 |
| [[../Utomachi_Platform_Architecture]] | プラットフォーム全体アーキテクチャ | システム設計者 | ✅ 完了 |
| [[../04_DataLink/datasets/00_IMPLEMENTATION_REPORT\|実装レポート]] | Phase 1-4 実装概要 | 全員 | ✅ 完了 |
| [[Phase4_API_QuickRef]] | API エンドポイント クイックリファレンス | 開発者 | ✅ 完了 |

### 📦 **デプロイ・運用**

**プラットフォーム:** Vercel + Firebase Firestore + Next.js 16

**自動化:**
- 週次予測実行（Vercel Cron）
- リアルタイムダッシュボード更新
- アラート配信（メール/プッシュ）

---

## 🔀 ナレッジ相互関係マトリックス

### **フロー: データソース → 統合 → 分析 → 実装**

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: データソース                                             │
│ ├─ JMA気象 / MLIT河川 / Kumamoto漁業 / JAXA衛星                  │
│ ├─ JMA潮位 / 陸測クロロフィル / JAFIC赤潮確度 / JMA波浪           │
│ └─ 28年海況観測データ（1998-2026）                               │
└─────────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 2: データ統合・処理                                         │
│ ├─ Phase 2: 基本統合（18列）                                    │
│ ├─ Phase 3a: 地理最適化（26列）                                  │
│ ├─ Phase 3b: データ拡張（32列）                                  │
│ └─ Phase 3c: 履歴統計統合（35-40列）予定                        │
└─────────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 3: 分析・予測モデル                                         │
│ ├─ Phase 2: 規則ベース予測                                       │
│ ├─ Phase 3: 相関分析・統計分析                                   │
│ ├─ Phase 4A: 特徴量エンジニアリング                              │
│ ├─ Phase 4B: ML モデル開発（LR/RF）AUC 0.92-1.0                 │
│ └─ Phase 4C: マルチモデル統合                                    │
└─────────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 4: 実装・運用                                              │
│ ├─ Firestore スキーマ実装                                        │
│ ├─ React ダッシュボード（NoriPredictionDashboard）               │
│ ├─ REST API エンドポイント                                      │
│ └─ ウトマチプラットフォーム統合                                  │
└─────────────────────────────────────────────────────────────────┘
```

### **トピック別相互参照**

#### 🔴 赤潮検出
- **データ:** JAXA 衛星クロロフィル(Layer 1)
- **処理:** クロロフィル > 3.0 mg/m³ で検出(Layer 2)
- **分析:** JAFIC確度スコア、マハラノビス距離異常検出(Layer 3)
- **実装:** NoriPredictionDashboard alert_level フィールド(Layer 4)

関連ドキュメント: [[Overview.md#赤潮検出]] → [[Phase3b_Extended_Data_Integration#B1JAFIC衛星画像統合]] → [[Phase4_ML_Integration#4B赤潮検出モデル]] → [[Phase4_Utomachi_Integration#フロントエンド実装]]

#### 💧 塩分・淡水影響
- **データ:** MLIT河川流量、JMA潮位(Layer 1)
- **処理:** 河川別・日次単位の統合(Layer 2)
- **分析:** 淡水流入量と赤潮発生の相関(Layer 3)
- **実装:** environment_data コレクション salinity_mean フィールド(Layer 4)

関連ドキュメント: [[Overview.md#MLIT河川]] → [[Architecture.md#河川データ統合]] → [[PredictiveModels#水質相関]] → [[Phase4_Utomachi_Integration#Firestore構成]]

#### 🌡️ 水温トレンド
- **データ:** Kumamoto 漁業観測、JMAブイ(Layer 1)
- **処理:** 28年統計データ基準化(Layer 2)
- **分析:** Z-score異常検出、季節分解(Layer 3)
- **実装:** enhanced_features 内 water_temp_anomaly_z フィールド(Layer 4)

関連ドキュメント: [[ds_nori_marine_observation_1998_2026]] → [[Phase3a_Optimization#Kumamoto最適化]] → [[Phase4_ML_Integration#4A特徴量エンジニアリング]] → [[Phase4_Utomachi_Integration#データモデル]]

#### 📈 市場価格・収穫タイミング
- **データ:** グレード別市場価格、JMA波浪(Layer 1)
- **処理:** グレード別統合(Layer 2)
- **分析:** リスク×価格の同時最適化(Layer 3)
- **実装:** harvest_recommendations コレクション recommendation フィールド(Layer 4)

関連ドキュメント: [[Phase3b_Extended_Data_Integration#B3市場価格詳細化]] → [[PredictiveModels#最適収穫タイミング]] → [[Phase4_ML_Integration#4C統合決定エンジン]] → [[Phase4_Utomachi_Integration#推奨アクション]]

---

## 📚 ドキュメント一覧（分類別）

### **A. システム概要・アーキテクチャ**
```
Overview.md
└─ システム目的、8データソース、Phase 2成果

Architecture.md
└─ 全体構成、Tier別設計、データフロー、エラーハンドリング

../Utomachi_Platform_Architecture.md (NEW)
└─ プラットフォーム全体、技術スタック、マルチテナント設計
```

### **B. データソース・取得（Layer 1）**
```
nori_external_data_source_survey.md
└─ 8データソース調査、取得方法、利用条件

ds_nori_marine_observation_1998_2026.md
└─ 熊本市28年海況観測データの蓄積

01_CHLOROPHYLL_JAXA.md
└─ JAXA衛星クロロフィル取得システム

nori_marine_data_quality_1998_2026.md
└─ フィル率分析、期間注意、欠損処理

nori_marine_data_operations.md
└─ 保管方針、運用手順、バージョン管理
```

### **C. データ統合・処理（Layer 2）**
```
02_DATA_INTEGRATION_PIPELINE.md
└─ Tier 1/2/3統合、空間・時間解像度対応

Phase3a_Optimization.md
└─ スコープ最適化、スキーマ設計、観測地点統一

Phase3a_Implementation_Summary.md
└─ 実装結果、パフォーマンス

Phase3a_Geographic_Interpolation.md
└─ IDW補間、距離計算、精度検証

Phase3a-2_Completion_Report.md
└─ 11地点カバレッジ検証

Phase3b_Extended_Data_Integration.md
└─ JAFIC/波浪/市場価格統合、スキーマ拡張（26→32列）
```

### **D. 分析・予測モデル（Layer 3）**
```
PredictiveModels.md
└─ 3つのリスク指数、赤潮検出、収穫推奨、相関分析

../04_DataLink/reports/nori_marine_long_history_analysis_20260511.md
└─ 1998-2026 28年間の傾向分析、季節パターン

Phase4_ML_Integration.md
└─ 特徴量エンジニアリング、LR/RF/XGBoostモデル、AUC 0.92-1.0
└─ マルチモデル統合、テストスイート（27/27合格）
```

### **E. 実装・運用（Layer 4）**
```
Phase4_Utomachi_Integration.md
└─ Firestore スキーマ、importNoriData.ts、NoriPredictionDashboard

Phase4_API_QuickRef.md
└─ APIエンドポイント、使用例、レスポンス形式

../Utomachi_Platform_Architecture.md
└─ システムアーキテクチャ、Next.js、Firebase、デプロイ

00_IMPLEMENTATION_REPORT.md
└─ Phase 1-4 実装概要、進捗、成果
```

### **F. インデックス・参照**
```
INDEX.md
└─ Nori DSS ナレッジベースインデックス（当ドキュメント）

nori_integrated_data_roadmap.md
└─ フェーズ計画、優先度、期間見積もり

../04_DataLink/datasets/index.md
└─ データセット台帳
```

---

## 🎯 ナレッジの活用ガイド

### **読み方ガイド**

#### 🟢 **はじめて学ぶ人向け**
```
1. Overview.md で全体像を理解
2. nori_external_data_source_survey.md で8つのデータソースを学ぶ
3. Architecture.md で統合アーキテクチャを理解
4. PredictiveModels.md で予測の考え方を学ぶ
```

#### 🟡 **データエンジニア向け**
```
1. Phase3a_Optimization.md でスキーマ設計を理解
2. 02_DATA_INTEGRATION_PIPELINE.md で統合ロジックを学ぶ
3. Phase3a_Geographic_Interpolation.md で補間技術を学ぶ
4. Phase3b_Extended_Data_Integration.md で拡張を理解
```

#### 🔴 **ML・データサイエンティスト向け**
```
1. ../04_DataLink/reports/nori_marine_long_history_analysis_20260511.md でデータを理解
2. Phase4_ML_Integration.md で特徴量とモデルを学ぶ
3. PredictiveModels.md で既存手法と比較
4. Phase4_ML_Integration.md のテスト結果を確認
```

#### 🔵 **開発・実装者向け**
```
1. Phase4_Utomachi_Integration.md で実装方法を学ぶ
2. ../Utomachi_Platform_Architecture.md でシステムを理解
3. Phase4_API_QuickRef.md でAPIを確認
4. 00_IMPLEMENTATION_REPORT.md で全体進捗を確認
```

---

## 🔗 相互参照リスト

### **データソース → 処理 → 分析 → 実装**

| データソース | 処理フェーズ | 分析モデル | 実装フィールド | ドキュメント連鎖 |
|-----------|----------|---------|-----------|-------------|
| **JAXA衛星** | Phase 2 | リスク指数 | chlorophyll | Overview → Architecture → PredictiveModels → Phase4_Integration |
| **JMA気象** | Phase 2 | 相関分析 | wind_speed, solar_radiation | Overview → Architecture → PredictiveModels |
| **MLIT河川** | Phase 3a | 塩分相関 | shirakawa_flow | Phase3a_Optimization → PredictiveModels |
| **Kumamoto漁業** | Phase 3a | 水質ベース | water_temp_mean | Phase3a_Optimization → PredictiveModels |
| **JMA潮位** | Phase 3a | 季節パターン | tide_level | Architecture → Phase3a_Optimization |
| **陸測ｸﾛﾛﾌｨﾙ** | Phase 3b | 衛星検証 | chlorophyll_ground | Phase3b_Extended → long_history_analysis |
| **JAFIC赤潮** | Phase 3b | ML確度 | jafic_red_tide_probability | Phase3b_Extended → Phase4_ML |
| **JMA波浪** | Phase 3b | 収穫リスク | wave_height_max | Phase3b_Extended → PredictiveModels |
| **市場価格** | Phase 3b | 経済最適化 | market_price_grade | Phase3b_Extended → Phase4_ML |
| **28年統計** | Phase 3c | 異常検出 | water_temp_anomaly_z | ds_nori_observation → Phase4_ML (4A) |

---

## 📈 ナレッジ成熟度指標

### **各レイヤーの完成度**

| Layer | フェーズ | ドキュメント | テスト | 本番対応 | 成熟度 |
|------|---------|-----------|--------|---------|--------|
| **1: データソース** | Phase 2-3b | 8/8完成 | ✅ | ✅ | 🟢 完全 |
| **2: 統合・処理** | Phase 3a-3b | 8/8完成 | ✅ | ✅ | 🟢 完全 |
| **3: 分析・予測** | Phase 2-4 | 8/8完成 | ✅ | ✅ | 🟢 完全 |
| **4: 実装・運用** | Phase 4 | 6/6完成 | ✅ | ✅ | 🟢 完全 |

### **次フェーズ（Phase 5以降）**

- [ ] **Phase 5:** モバイルアプリ / オフラインモード / 多言語対応
- [ ] **Phase 6:** IoTセンサー統合 / ドローン画像解析
- [ ] **Phase 7:** ディープラーニング予測 / ブロックチェーン流通履歴

---

## 🔍 検索・クイックナビゲーション

### **トピック別**
- 🔴 赤潮検出: [[PredictiveModels#赤潮検出]] → [[Phase4_ML_Integration#赤潮検出モデル]]
- 💧 塩分・淡水: [[PredictiveModels#水質相関]] → [[Architecture#河川データ統合]]
- 🌡️ 水温: [[ds_nori_marine_observation_1998_2026]] → [[Phase4_ML_Integration#4A特徴量]]
- 📈 市場価格: [[Phase3b_Extended_Data_Integration#市場価格]] → [[PredictiveModels#最適収穫]]
- 🌊 波浪: [[Phase3b_Extended_Data_Integration#波浪]] → [[PredictiveModels#リスク指数]]

### **技術別**
- 補間技術: [[Phase3a_Geographic_Interpolation]]
- 統合アーキテクチャ: [[02_DATA_INTEGRATION_PIPELINE]]
- 機械学習: [[Phase4_ML_Integration]]
- API設計: [[Phase4_API_QuickRef]]

### **ドキュメント検索**
| キーワード | 関連ドキュメント |
|---------|-------------|
| データ取得 | [[nori_external_data_source_survey]] |
| スキーマ | [[Phase3a_Optimization]], [[Phase3b_Extended_Data_Integration]] |
| 品質管理 | [[nori_marine_data_quality_1998_2026]] |
| 分析 | [[../04_DataLink/reports/nori_marine_long_history_analysis_20260511]] |
| 予測 | [[PredictiveModels]], [[Phase4_ML_Integration]] |
| 実装 | [[Phase4_Utomachi_Integration]] |
| アーキテクチャ | [[Architecture]], [[../Utomachi_Platform_Architecture]] |

---

## ✅ 最後に: ナレッジ使用チェックリスト

このナレッジマップを活用する際のチェックリスト：

- [ ] 必要なレイヤー（1-4）を特定したか？
- [ ] 関連するドキュメント鎖を確認したか？
- [ ] データソースの信頼性を確認したか？
- [ ] 処理パイプラインの最新バージョンを確認したか？
- [ ] 予測モデルのテスト結果を確認したか？
- [ ] 実装ドキュメントに従ったか？
- [ ] 本番運用の手順を確認したか？

---

**ナレッジベース完成日:** 2026-05-12  
**最終チェック:** ✅ 全ドキュメント相互参照完成  
**次更新予定:** Phase 5 開始時またはドキュメント追加時

