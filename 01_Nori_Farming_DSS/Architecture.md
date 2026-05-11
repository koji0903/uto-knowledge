# システムアーキテクチャ

**作成日:** 2026-05-11  
**フェーズ:** Phase 2 (8データソース統合版)

---

## 全体構成図

```
┌──────────────────────────────────────────────────────────────────┐
│                  NORI FARMING DECISION SUPPORT SYSTEM             │
│                       Phase 2 Architecture                        │
└──────────────────────────────────────────────────────────────────┘

EXTERNAL DATA SOURCES (8種)
├─ JMA Weather API            [Daily]
├─ Kumamoto Prefecture        [Weekly]  
├─ MLIT River System          [Daily]
├─ JAXA Satellite API         [8-16 days]
├─ JMA Tide Observations      [Daily]
├─ JMA Buoy Network           [Daily]
├─ Historical Water Quality   [Archived]
├─ Red Tide/Disease Records   [Event-based]
└─ Market Price Data          [Daily]
         ↓ (fetch_*.py scripts)
EXTERNAL DATA DIRECTORY
         ↓ (external_data/*.csv files)
         
    ┌─────────────────────────────┐
    │  INTEGRATION LAYER          │
    │  (integrate_data.py)        │
    │  Tier 1/2/3 Logic           │
    └─────────────────────────────┘
              ↓
    INTEGRATED DATA
    (marine_daily_features.csv)
    31列 × 2,976行
              ↓
    ┌─────────────────────────────┐
    │  PREDICTIVE PIPELINE        │
    │  (predictive_pipeline.py)   │
    ├─ Phase 2A: Risk Indices    │
    ├─ Phase 2B: Red Tide Alerts │
    ├─ Phase 2C: Harvest Recs    │
    └─ Phase 2D: Correlation     │
    └─────────────────────────────┘
              ↓
    OUTPUT LAYER
    ├─ Harvest Recommendations
    ├─ Red Tide Alerts
    └─ Risk Scores (dashboard)
              ↓
    END USERS
    └─ Nori Farmers (Daily alerts)
```

---

## レイヤー別詳細設計

### Layer 1: External Data Sources

#### データソース分類

```
┌─────────────────────────────────────┐
│      EXTERNAL DATA SOURCES          │
├─────────────────────────────────────┤
│                                     │
│  Tier 1: Base Station Data          │
│  ├─ JMA Weather (9列)               │
│  │  └─ Daily observations           │
│  ├─ Kumamoto Nutrients (2列)        │
│  │  └─ Seasonal sampling            │
│  └─ MLIT Rivers (7列)               │
│     └─ Daily river monitoring       │
│                                     │
│  Tier 2: Regional Broadcast         │
│  ├─ JAXA Satellite (1列)            │
│  │  └─ 8-16 day revisit            │
│  ├─ JMA Tides (2列)                 │
│  │  └─ Coastal predictions          │
│  ├─ JMA Buoys (2列)                 │
│  │  └─ Ocean buoy data              │
│  └─ Water Quality (3列)             │
│     └─ Historical aggregation       │
│                                     │
│  Tier 3: Sparse Forward-Fill        │
│  ├─ Ground Chlorophyll (2列)        │
│  │  └─ Monthly field sampling       │
│  ├─ Red Tide Events (1列)           │
│  │  └─ Event-based reporting        │
│  └─ Market Prices (1列)             │
│     └─ Daily market trading         │
│                                     │
└─────────────────────────────────────┘
```

#### Tier 1 詳細

```
JMA Weather Data
├─ Source: fetch_jma_weather.py
├─ Frequency: Daily (08:00 JST)
├─ Stations: 10 locations
├─ Columns: 9
│  ├─ water_temp_mean
│  ├─ water_temp_ma3 (3-day MA)
│  ├─ salinity_mean
│  ├─ do_mg_l_mean
│  ├─ rainfall_mm
│  ├─ solar_radiation
│  ├─ wind_speed
│  ├─ wind_direction
│  └─ (weather fields)
└─ Files: jma_weather_20*.csv

Kumamoto Nutrient Data
├─ Source: kumamoto_nori_nutrients.csv
├─ Frequency: Weekly (season Oct-Mar)
├─ Parameters: N, P
└─ Integration: Seasonal → Daily via forward-fill

MLIT River Data
├─ Source: fetch_river_data.py
├─ Frequency: Daily (08:00 JST)
├─ Rivers: 3 (Shirakawa, Midorigawa, Tsuboigawa)
├─ Measurements: Level (m), Flow (m³/s)
└─ Integration: Aggregated by river
```

#### Tier 2 詳細

```
Regional Broadcast Pattern:
  
  Regional Data (1 value per date)
  └─ Apply to all stations on same date
  
  Examples:
  ├─ Tide Level: 1 value → 10 stations
  ├─ JAXA Satellite: Regional avg → 10 stations
  └─ Buoy Data: Multi-buoy mean → 10 stations
```

#### Tier 3 詳細

```
Sparse Data Forward-Fill Strategy:

  Monthly Measurement
  └─ ├─ 2026-04-15: 5.2 mg/m³
     └─ │
        ├─ 2026-04-16-2026-05-14: 5.2 (copied)
        │
        └─ 2026-05-15: 6.1 mg/m³ (new measurement)
           └─ 2026-05-16-2026-06-14: 6.1 (copied)
```

---

### Layer 2: Data Integration Engine

#### integrate_data.py 構造

```python
class DataIntegrator:
  
  # ────────────────────────────────
  # Tier 1: Load Base Data
  # ────────────────────────────────
  
  def load_jma_weather()
    → jma_data[date][station] = {water_temp, salinity, ...}
  
  def load_kumamoto_nutrients()
    → nutrient_data[date][farm] = {nutrient_n, nutrient_p}
  
  def load_mlit_rivers()
    → river_data[date][river_name] = {level_m, flow_m3_s}
  
  # ────────────────────────────────
  # Tier 2: Load Regional Data
  # ────────────────────────────────
  
  def load_jaxa_satellite()
    → satellite_data[date] = chlorophyll_mg_m3
  
  def load_jma_tides()
    → tide_data[date] = {level_cm, range_cm}
  
  def load_jma_buoys()
    → buoy_data[date] = {temp_c, salinity_psu}
  
  def load_water_quality()
    → wq_data[date][station] = {temp, salinity, do}
  
  # ────────────────────────────────
  # Tier 3: Load Sparse Data
  # ────────────────────────────────
  
  def load_chlorophyll_ground()
    → chl_ground[date] = {mg_m3, transparency_m}
  
  def load_red_tide_history()
    → red_tide[date] = risk_flag ("none"/"high")
  
  def load_market_prices()
    → prices[date] = yen_per_kg
  
  # ────────────────────────────────
  # Integration Logic
  # ────────────────────────────────
  
  def integrate_marine_daily_features():
    
    # Step 1: Tier 1 Base Table (2,976 rows)
    for date in date_range:
      for station in all_stations:
        row = {date, station, jma_data[date][station], ...}
        base_table.append(row)
    
    # Step 2: Tier 2 Broadcast
    for date in satellite_data.keys():
      for station in all_stations:  # 10 stations
        base_table[date, station].chlorophyll = satellite_data[date]
    
    # Step 3: Tier 3 Forward-Fill
    for date in date_range:
      sparse_value = last_value_before(date)
      if sparse_value:
        base_table[date, all_stations].sparse_field = sparse_value
    
    return base_table (2,976 rows × 31 cols)
```

---

### Layer 3: Predictive Pipeline

#### Phase 2 モデル構造

```
Input: marine_daily_features.csv
       (2,976 rows × 31 columns)
         ↓
    ┌────────────────────────────┐
    │  Phase 2A: Risk Indices    │
    ├────────────────────────────┤
    │ Models:                    │
    │ ├─ Color-Drop Risk (Tier1) │
    │ │  └─ f(N, P, Temp, Light)│
    │ ├─ Disease Risk (Tier1)    │
    │ │  └─ f(Temp, Salinity, DO)│
    │ └─ Harvest Urgency (Tier2) │
    │    └─ f(Growth, Quality)   │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  Phase 2B: Alerting        │
    ├────────────────────────────┤
    │ Severity Map:              │
    │ ├─ Risk > 0.8 → Red Alert  │
    │ ├─ 0.5-0.8 → Yellow Alert  │
    │ └─ < 0.5 → Green (OK)      │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  Phase 2C: Recommendations │
    ├────────────────────────────┤
    │ For each farm area:        │
    │ ├─ Grade (上/中/下)        │
    │ ├─ Timing (next N days)    │
    │ └─ Confidence (%)          │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  Phase 2D: Correlation     │
    ├────────────────────────────┤
    │ Dependencies:              │
    │ ├─ Temp ↔ Chl             │
    │ ├─ Nutrients ↔ Growth     │
    │ └─ Tides ↔ Mixing         │
    └────────────────────────────┘
         ↓
Output: Predictions (CSV files)
  ├─ harvest_recommendations_*.csv
  ├─ red_tide_alerts_*.csv
  └─ marine_daily_features_with_risks.csv
```

---

### Layer 4: Output & Distribution

#### 出力ファイル構造

```
integrated_data/
├─ marine_daily_features.csv
│  └─ 統合データ (2,976 × 31)
│     Usage: Reference, audit
│
└─ predictions/
   ├─ harvest_recommendations_YYYYMMDD.csv
   │  ├─ Columns: farm_area, urgency, grade, confidence, timing
   │  └─ Usage: 農家への推奨
   │
   ├─ red_tide_alerts_YYYYMMDD.csv
   │  ├─ Columns: date, station, severity, alert_type, message
   │  └─ Usage: リスク警報
   │
   └─ marine_daily_features_with_risks.csv
      ├─ Original columns + risk_scores
      └─ Usage: 詳細分析・検証
```

---

## データフロー詳細

### Tier 1 ベーステーブル構築

```
Input: JMA weather (2,976行/10 stations)
         ↓
Output: 2,976行のスケルトン
  2025-01-01 | kosa     | ...
  2025-01-01 | kumamoto | ...
  2025-01-01 | matsushima | ...
  ...
  2026-05-11 | uto      | ...
```

### Tier 2 ブロードキャスト

```
Input Satellite Data (195日分):
  2025-01-15: Chlorophyll = 3.2 mg/m³
  
Output (to all 10 stations on 2025-01-15):
  2025-01-15 | kosa     | ... | 3.2 | ...
  2025-01-15 | kumamoto | ... | 3.2 | ...
  ... (10 rows total)
  2025-01-15 | uto      | ... | 3.2 | ...
```

### Tier 3 前方継続充填

```
Input Sparse Data (月次):
  2026-04-15: Ground Chl = 5.2 mg/m³
  2026-05-15: Ground Chl = 6.1 mg/m³
  
Forward-Fill Logic:
  2026-04-15: 5.2 (new)
  2026-04-16: 5.2 (filled)
  2026-04-17: 5.2 (filled)
  ...
  2026-05-14: 5.2 (filled)
  2026-05-15: 6.1 (new)
  2026-05-16: 6.1 (filled)
```

---

## エラーハンドリング戦略

### グレースフルデグラデーション

```
          API Request
                ↓
        Success? (Yes) → Use data
                ↓ (No)
        Retry (×3) with exponential backoff
                ↓
        Success? (Yes) → Use data
                ↓ (No)
        Use cached data from previous run
                ↓
        Cache available? (Yes) → Use cache
                ↓ (No)
        Use historical average
                ↓
        Default value or empty string
```

### データ検証チェックリスト

```
For each row:
  ✓ Date format (YYYY-MM-DD)
  ✓ Station ID valid (exists in base list)
  ✓ Numeric ranges within bounds
  ✓ No duplicate (date, station) pairs
  ✓ Temporal continuity
  ✓ Cross-source consistency checks
  
  If fail: Flag in quality_flags column
```

---

## パフォーマンス特性

### 処理時間

| タスク | 処理時間 | ボトルネック |
|---|---|---|
| データ読込 | ~1s | ディスク I/O |
| Tier 1 構築 | ~0.5s | メモリ割り当て |
| Tier 2 ブロードキャスト | ~1s | 日付マッチング |
| Tier 3 前方充填 | ~0.5s | ソート・比較 |
| リスク計算 | ~2s | 数値計算 |
| 全体実行 | ~5s | 許容範囲 |

### スケーラビリティ

```
Current: 10 stations × 298 days = 2,976 rows

Expansion scenarios:
├─ Add 5 more stations
│  └─ 15 stations × 298 = 4,470 rows (OK)
├─ Extend to 2 years
│  └─ 10 × 730 = 7,300 rows (OK)
└─ Full Ariake Bay coverage (30+ stations)
   └─ 30 × 730 = 21,900 rows (minor optimization needed)
```

---

## セキュリティと データプライバシー

### 入力検証

- API からのデータは自動検証
- 範囲チェック (temperature, salinity, etc.)
- フォーマットチェック (date, station_id)

### 出力セキュリティ

- 出力ファイルは `/integrated_data/` に限定
- ログファイルは `/scripts/logs/` に格納
- 個人識別情報は含まない (農家名なし)

### 監査ログ

```
scripts/logs/
├─ integrate_data_YYYYMMDD_HHMMSS.log
│  └─ データ処理の詳細記録
├─ predictive_pipeline_YYYYMMDD_HHMMSS.log
│  └─ 予測実行の記録
└─ fetch_*.py_YYYYMMDD_HHMMSS.log
   └─ API 取得の詳細記録
```

---

## 今後の拡張予定

### Phase 3 (計画中)

- **経済最適化モジュール**
  - 市場価格 × 品質スコア → 最適収穫日
  
- **リアルタイム赤潮検出**
  - 衛星画像の自動解析 (色の異常検知)

- **スケジューリングシステム**
  - 農家向け mobile app
  - 自動化された推奨通知

### Phase 4 (中期)

- **収量予測モデル** (Deep Learning)
- **AI チューニング** (ハイパーパラメータ最適化)
- **マルチ地域対応** (他の養殖地域への拡張)

---

## 関連ドキュメント

- [[DataIntegration]] - Tier別統合戦略詳細
- [[DataSources]] - 8データソース仕様
- [[Schema]] - 31列スキーマ詳細
- [[PredictiveModels]] - Phase 2 予測モデル詳細

---

**版:** 2.0  
**更新日:** 2026-05-11  
**ステータス:** ✅ Phase 2 実装完了

