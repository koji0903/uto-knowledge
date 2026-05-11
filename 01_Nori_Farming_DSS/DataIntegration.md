# データ統合戦略と実装

**バージョン:** 2.0  
**最終更新:** 2026-05-11

---

## 統合概要

### チャレンジ

8つのデータソースを統合する際の問題：

```
問題 1: 空間解像度の混在
├─ JMA: 10観測点 × 日次
├─ MLIT河川: 3河川 × 日次
├─ JAXA衛星: 地域平均 × 8-16日
├─ 潮位: 1値 × 日次
├─ 栄養塩: 農場別 × 週次
└─ 市場価格: 地域平均 × 日次

問題 2: 時間解像度の混在
├─ JMA: 日次
├─ MLIT: 日次
├─ JAXA: スパース (8-16日間隔)
├─ 栄養塩: 週次
├─ 赤潮: イベントベース
└─ 陸測Chl: 月次

問題 3: 時間的ギャップ
├─ JAXA衛星: 雲で16日ギャップ可能
├─ 栄養塩: 冬季は測定なし (Oct-Mar only)
├─ 陸測Chl: 月1回測定のみ
└─ 赤潮: イベントが不定期
```

### ソリューション: 3層ティア戦略

```
┌──────────────────────────────────────────────┐
│  TIER 1: Station-Level Daily Base            │
│  (JMA weather + MLIT rivers + Kumamoto)      │
│  → 2,976行の基盤テーブル                      │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  TIER 2: Regional Broadcast                  │
│  (Satellites, Tides, Buoys, Water Quality)   │
│  → 日付マッチングで全観測点に展開             │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│  TIER 3: Sparse Forward-Fill                 │
│  (Ground Chl, Red Tide, Market Prices)       │
│  → 最後の値を前方継続充填                     │
└──────────────────────────────────────────────┘
```

---

## Tier 1: ベーステーブル構築

### 目的

- 全2,976行の行スケルトン作成
- 10観測点 × 298日のカバレッジ
- 日次の基盤環境データ充填

### 実装

```python
def integrate_marine_daily_features(self):
    """Create complete 2,976 × 31 integrated table"""
    
    # Step 1: Initialize base table from JMA
    base_rows = []
    for date in self.jma_data.keys():  # 298 dates
        for station in ALL_STATIONS:  # 10 stations
            row = {
                'date': date,
                'station_id': station,
                # JMA columns (9):
                'water_temp_mean': self.jma_data[date].get(station, {}).get('water_temp', ''),
                'water_temp_ma3': self.jma_data[date].get(station, {}).get('water_temp_ma3', ''),
                'salinity_mean': self.jma_data[date].get(station, {}).get('salinity', ''),
                'do_mg_l_mean': self.jma_data[date].get(station, {}).get('do', ''),
                'tide_level': self.jma_data[date].get(station, {}).get('tide', ''),
                'rainfall_mm': self.jma_data[date].get(station, {}).get('rainfall', ''),
                'solar_radiation': self.jma_data[date].get(station, {}).get('radiation', ''),
                'wind_speed': self.jma_data[date].get(station, {}).get('wind_speed', ''),
                'wind_direction': self.jma_data[date].get(station, {}).get('wind_dir', ''),
                # MLIT river columns (6):
                'shirakawa_level_m': self.river_data[date].get('shirakawa', {}).get('level', ''),
                'shirakawa_flow_m3_s': self.river_data[date].get('shirakawa', {}).get('flow', ''),
                'midorigawa_level_m': self.river_data[date].get('midorigawa', {}).get('level', ''),
                'midorigawa_flow_m3_s': self.river_data[date].get('midorigawa', {}).get('flow', ''),
                'tsuboigawa_level_m': self.river_data[date].get('tsuboigawa', {}).get('level', ''),
                # Kumamoto nutrient columns (2):
                'nutrient_n': self.nutrient_data[date].get(station, {}).get('n', ''),
                'nutrient_p': self.nutrient_data[date].get(station, {}).get('p', ''),
                # Tier 2/3 columns (remaining): initialized empty
                'tide_level_cm': '',
                'tidal_range_cm': '',
                # ... (remaining 13 columns initially empty)
            }
            base_rows.append(row)
    
    return base_rows  # 2,976 rows
```

### 出力イメージ

```csv
date,station_id,water_temp_mean,water_temp_ma3,...,nutrient_n,nutrient_p,tide_level_cm,...
2025-01-01,kosa,,,,,,0.0,8.9,1.0,北東,,,,,,,,,,,,,,
2025-01-01,kumamoto,,,,,,1.2,9.7,1.2,,,,,,,,,,,,,,,
...
2026-05-11,uto,,,,,,,10.1,0.8,北,,,,,,,,,,,,,,,
```

---

## Tier 2: 地域データのブロードキャスト

### 概念

```
Regional Data (1 value per date)
    ↓
Apply to ALL stations on same date

Example - JAXA Satellite:
  2025-01-15: Chlorophyll = 3.2 mg/m³
  
  Broadcast to:
  2025-01-15 | kosa     | ... | 3.2 | ...
  2025-01-15 | kumamoto | ... | 3.2 | ...
  2025-01-15 | matsushima | ... | 3.2 | ...
  ... (10 stations total)
```

### 実装例: JAXA衛星データ

```python
# Step 2: Broadcast Tier 2 regional data
for date in self.satellite_data.keys():
    satellite_value = self.satellite_data[date]
    
    # Find all rows matching this date
    for row in base_rows:
        if row['date'] == date:
            row['chlorophyll'] = satellite_value
            
# Result: All 10 stations on same date get same satellite value
```

### Tier 2 データソース別処理

#### JAXA衛星 (1列)

```
Input: chlorophyll_jaxa_*.csv
  2025-01-15: 3.2 mg/m³
  2025-01-23: 3.5 mg/m³ (next satellite pass)
  
Output to base_rows:
  ✓ 2025-01-15 (all 10 stations): 3.2
  ✓ 2025-01-23 (all 10 stations): 3.5
  ✓ Gap between: Filled by Tier 3 logic
```

#### JMA潮位 (2列)

```
Input: tidal_data_*.csv
  Averaging 2 tide stations:
  - Karatsu (唐津)
  - Saga Seki (佐賀関)
  
  2025-01-15: tide_level_cm = 45, range = 250
  
Output to base_rows:
  ✓ 2025-01-15 (all 10 stations):
    - tide_level_cm: 45
    - tidal_range_cm: 250
```

#### JMAブイ (2列)

```
Input: jma_buoy_*.csv
  Aggregation of 2-3 buoys:
  - Buoy A: 18.5°C, 31.2 PSU
  - Buoy B: 18.8°C, 31.1 PSU
  
  Average:
  - Water temp: 18.65°C
  - Salinity: 31.15 PSU
  
Output to base_rows:
  ✓ Date (all 10 stations):
    - jma_buoy_water_temp_c: 18.65
    - jma_buoy_salinity_psu: 31.15
```

#### 過去水質 (3列)

```
Input: water_quality_aggregated_*.csv
  Already aggregated by date & station from raw data
  
  2025-01-15 | kosa:
    - water_temp_mean: 15.2°C
    - salinity_mean: 29.5 PSU
    - do_mg_l_mean: 7.8 mg/L
  
Output to base_rows:
  ✓ Direct station-matching (not broadcast)
```

---

## Tier 3: スパースデータの前方継続充填

### 戦略

```
Sparse Measurement Timeline:

Time ──────────────────────────────────────────────>
      M₁             M₂             M₃
      │              │              │
      2026-04-15     2026-05-15    2026-06-15
      Value=5.2      Value=6.1     Value=5.8
      
Forward-Fill Logic:

2026-04-15: 5.2 (first measurement)
2026-04-16: 5.2 (carried forward)
2026-04-17: 5.2 (carried forward)
...
2026-05-14: 5.2 (carried forward)
2026-05-15: 6.1 (new measurement)
2026-05-16: 6.1 (carried forward)
...
2026-06-14: 6.1 (carried forward)
2026-06-15: 5.8 (new measurement)
```

### 実装

```python
# Step 3: Forward-fill Tier 3 sparse data
sparse_fields = [
    'chlorophyll_ground_mg_m3',
    'transparency_m',
    'red_tide_risk_flag',
    'market_price_yen_kg'
]

for field in sparse_fields:
    last_value = None
    
    for row in sorted(base_rows, key=lambda x: x['date']):
        if row[field]:  # New measurement available
            last_value = row[field]
        elif last_value:  # No new measurement
            row[field] = last_value  # Carry forward
```

### Tier 3 データソース別

#### 陸測クロロフィル (2列)

```
Input: chlorophyll_ground_*.csv
  Sample dates (月1回):
  2026-04-15: 5.2 mg/m³, 2.1m transparency
  2026-05-15: 6.1 mg/m³, 1.9m transparency
  
Forward-Fill:
  2026-04-15: 5.2 (new)
  2026-04-16~2026-05-14: 5.2 (filled)
  2026-05-15: 6.1 (new)
  2026-05-16~: 6.1 (filled until next)
```

#### 赤潮履歴 (1列)

```
Input: red_tide_history_*.csv
  Events (irregular):
  2025-07-01: "high" (outbreak detected)
  2025-07-15: Reset to "none" (cleared)
  
Integration:
  2025-07-01: "high"
  2025-07-02~2025-07-14: "high" (carried forward)
  2025-07-15: "none" (event ended)
```

#### 市場価格 (1列)

```
Input: market_prices_*.csv
  Daily prices (weekdays):
  2026-05-08: 2100 ¥/kg
  2026-05-09: 2100 ¥/kg
  2026-05-10: (weekend - no trading)
  2026-05-11: (weekend - no trading)
  2026-05-12: 2050 ¥/kg
  
Forward-Fill:
  2026-05-08: 2100 (trading day)
  2026-05-09: 2100 (trading day)
  2026-05-10: 2100 (weekend - filled)
  2026-05-11: 2100 (weekend - filled)
  2026-05-12: 2050 (new trading day)
```

---

## 空間解像度の対応

### Tier 1: 観測点別処理

```
JMA Weather: Per-station data
├─ Station 01 (kosa): Individual values
├─ Station 02 (kumamoto): Individual values
└─ ... (10 stations total)

MLIT Rivers: River-specific data
├─ Shirakawa: level_m, flow_m³/s
├─ Midorigawa: level_m, flow_m³/s
└─ Tsuboigawa: level_m (no flow data)

Integration by date:
  Each date has 10 rows (one per station)
  Rivers are broadcast to all stations
```

### Tier 2: 地域ブロードキャスト

```
JAXA Satellite:
├─ Source: Regional average (Ariake Bay)
├─ Resolution: 1 value per date
└─ Integration: Copy to all 10 stations

JMA Tides:
├─ Source: 2 tide stations averaged
├─ Resolution: 1 value per date
└─ Integration: Broadcast to all 10 stations
```

### Tier 3: 全面適用

```
Market Prices:
├─ Source: 3 markets averaged
├─ Resolution: 1 value per date
└─ Integration: Apply to all 10 stations
```

---

## 時間的ギャップの処理

### ギャップタイプと対応

| ギャップタイプ | 発生源 | 長さ | 対応方法 |
|---|---|---|---|
| 短期 (1-3日) | JMA API 一時的エラー | 1-3日 | 直前値で充填 |
| 中期 (8-16日) | JAXA衛星雲 | 8-16日 | Last observation carry forward |
| 季節 (Oct-Mar) | Kumamoto 栄養塩冬季なし | 季節 | 季節平均値を使用 |
| イベント | 赤潮未発生 | 数日～数か月 | Flag "none" で初期化 |
| スパース | 陸測Chl 月1回 | 30日 | Forward-fill |

### 具体例: JAXA衛星ギャップ

```
Timeline:
  2025-01-15: JAXA観測 = 3.2 mg/m³
  2025-01-16~2025-01-22: 雲で観測不可 (ギャップ)
  2025-01-23: JAXA観測 = 3.5 mg/m³
  
処理方法: Forward-fill
  2025-01-15: 3.2 (new data)
  2025-01-16: 3.2 (filled)
  2025-01-17: 3.2 (filled)
  ...
  2025-01-22: 3.2 (filled)
  2025-01-23: 3.5 (new data)
```

---

## データ検証とQA

### 統合前チェック

```python
def validate_integration():
    """Pre-integration validation"""
    
    # Check 1: Date continuity
    dates = sorted(set(row['date'] for row in base_rows))
    for i in range(len(dates)-1):
        assert (dates[i+1] - dates[i]).days == 1
    
    # Check 2: Station coverage
    for date in dates:
        stations_on_date = set(
            row['station_id'] for row in base_rows 
            if row['date'] == date
        )
        assert len(stations_on_date) == 10
    
    # Check 3: No duplicates
    keys = [(r['date'], r['station_id']) for r in base_rows]
    assert len(keys) == len(set(keys))
    
    # Check 4: Column count
    assert len(base_rows[0].keys()) == 31
    
    return True
```

### 統合後検証

```python
def validate_output(output_csv):
    """Post-integration validation"""
    
    with open(output_csv) as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    
    # Check dimensions
    assert len(rows) == 2976, f"Expected 2976 rows, got {len(rows)}"
    assert len(rows[0]) == 31, f"Expected 31 columns, got {len(rows[0])}"
    
    # Check data types
    for row in rows:
        assert validate_date_format(row['date'])
        assert row['station_id'] in VALID_STATIONS
        
        # Numeric fields
        for field in NUMERIC_FIELDS:
            if row[field]:
                try:
                    float(row[field])
                except ValueError:
                    raise ValueError(f"Invalid value in {field}: {row[field]}")
    
    return True
```

### Quality Flags

```csv
quality_flags column values:

"OK"                        - All checks passed
"MISSING_JMA"              - JMA weather data missing
"MISSING_NUTRIENT"         - Nutrient data missing (season)
"IMPUTED_TEMP"            - Temperature interpolated
"OUTDATED_SATELLITE"      - Satellite data > 20 days old
"INVALID_RANGE"           - Value outside expected range
"DUPLICATE_KEY"           - (Should not occur)

Multiple flags: Comma-separated
  e.g., "MISSING_JMA, IMPUTED_TEMP"
```

---

## パフォーマンス最適化

### メモリ効率

```python
# For large water quality file (2.9M rows):
# Use streaming instead of load all

with open(water_quality_file) as f:
    for line_num, row in enumerate(csv.DictReader(f)):
        # Process one row at a time
        key = (row['date'], row['station_id'])
        # Aggregate without loading all rows
        
# Result: Constant memory usage
```

### 処理時間

```
Benchmark (2,976 rows × 31 cols):

Load Tier 1:    0.5s  (JMA + Rivers + Kumamoto)
Load Tier 2:    1.0s  (Satellite + Tides + Buoys)
Load Tier 3:    0.5s  (Sparse data)
Build base:     0.5s  (Row structure creation)
Broadcast Tier2: 1.0s  (Date matching × 10 stations)
Forward-fill:   0.5s  (Sparse data iteration)
Write output:   1.0s  (CSV write)
─────────────────────
Total:          ~5.0s
```

---

## トラブルシューティング

### 問題: Tier 2 ブロードキャストで値が反映されない

**原因:** 日付形式の不一致  
**解決方法:**
```python
# Ensure consistent date format
def normalize_date(date_str):
    dt = datetime.fromisoformat(date_str)
    return dt.strftime('%Y-%m-%d')

satellite_data_normalized = {
    normalize_date(k): v for k, v in satellite_data.items()
}
```

### 問題: Forward-fill が意図した値を使わない

**原因:** データが日付でソートされていない  
**解決方法:**
```python
# Sort by date before forward-fill
sorted_rows = sorted(base_rows, key=lambda x: x['date'])

for row in sorted_rows:
    # Now forward-fill works correctly
```

### 問題: 行数が 2,976 ではなく 1,488

**原因:** Tier 1 で1つ以上の駅が欠けている  
**解決方法:**
```python
# Verify all 10 stations present
for date in unique_dates:
    stations_on_date = [r['station_id'] for r in base_rows if r['date'] == date]
    assert len(stations_on_date) == 10, f"Missing stations on {date}: {stations_on_date}"
```

---

## 関連ドキュメント

- [[Architecture]] - システム全体設計
- [[DataSources]] - 8データソース詳細
- [[Schema]] - 31列スキーマ仕様

---

**バージョン:** 2.0  
**最終更新:** 2026-05-11

