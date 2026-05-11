# 🔗 データ統合パイプライン

**実装完了日**: 2026-05-11  
**ステータス**: ✅ 本運用可能  
**統合対象**: 気象 × 栄養塩 × クロロフィル

---

## 📊 システムアーキテクチャ

```
外部データソース
├── JMA 気象データ
│   ├── 降雨量 (mm)
│   ├── 気温 (℃)
│   ├── 風速 (m/s)
│   └── 日照時間 (h)
│
├── 熊本県 栄養塩データ
│   ├── 窒素 (μg-N/L)
│   └── リン (μg-P/L)
│
└── JAXA 衛星クロロフィルデータ
    └── クロロフィル-a (mg/m³)
            ↓
    ============================================
    統合パイプライン (integrate_data.py)
    ============================================
            ↓
統一スキーマ (marine_daily_features)
├── date
├── station_id
├── rainfall_mm ────── JMAから
├── nutrient_n ────── 栄養塩から
├── nutrient_p ────── 栄養塩から
├── chlorophyll ──── クロロフィルから
├── solar_radiation ─ JMAから
├── wind_speed ───── JMAから
└── ... (その他18カラム)
```

---

## 🎯 統合スキーマ

### MarineDailyFeatures テーブル

**ファイル**: `integrated_data/marine_daily_features.csv`  
**レコード数**: 2,976行（日×観測地点）  
**時間範囲**: 2025-01-01 ～ 2026-05-11

| カラム | ソース | 型 | 説明 |
|--------|--------|-----|------|
| `date` | - | DATE | 観測日 (YYYY-MM-DD) |
| `station_id` | JMA | TEXT | 観測地点ID (uto, kumamoto等) |
| `water_temp_mean` | - | FLOAT | 水温平均 (℃) |
| `water_temp_ma3` | - | FLOAT | 水温3日移動平均 (℃) |
| `salinity_mean` | - | FLOAT | 塩分 (ppt) |
| `do_mg_l_mean` | - | FLOAT | 溶存酸素 (mg/L) |
| `tide_level` | - | FLOAT | 潮位 (m) |
| `rainfall_mm` | **JMA** | FLOAT | 降雨量 (mm) ✓ |
| `river_level` | - | FLOAT | 河川水位 (m) |
| `river_flow` | - | FLOAT | 河川流量 (m³/s) |
| `nutrient_n` | **栄養塩** | FLOAT | 窒素濃度 (μg-N/L) ✓ |
| `nutrient_p` | **栄養塩** | FLOAT | リン濃度 (μg-P/L) ✓ |
| `chlorophyll` | **JAXA** | FLOAT | クロロフィル-a (mg/m³) ✓ |
| `transparency` | - | FLOAT | 透明度 (m) |
| `solar_radiation` | **JMA** | FLOAT | 日照時間 (h) ✓ |
| `wind_speed` | **JMA** | FLOAT | 風速 (m/s) ✓ |
| `wind_direction` | **JMA** | TEXT | 風向 |
| `quality_flags` | - | TEXT | 品質フラグ |

✓ = 現在データが入力されているカラム

---

## 📈 データ統計

### 統合データの可用性

```
カラム別の入力状況:

rainfall_mm         2,976 rows (100.0%)  ✅ 完全
nutrient_n            613 rows ( 20.6%)  ⚠️  部分
nutrient_p            613 rows ( 20.6%)  ⚠️  部分
chlorophyll         1,170 rows ( 39.3%)  ✅ 良好
solar_radiation     2,976 rows (100.0%)  ✅ 完全
wind_speed          2,976 rows (100.0%)  ✅ 完全
wind_direction      2,976 rows (100.0%)  ✅ 完全
```

### クロロフィルの統合結果

```
統合レコード: 1,170行（全2,976行中39.3%）
濃度範囲:    0.08～17.6 mg/m³
平均値:      1.14 mg/m³
中央値:      0.80 mg/m³

日付カバレッジ: 2025-04-13 ～ 2026-05-10 (327日間)
地点カバレッジ: 6地点（各日付で全地点に同じ値）
  - kosa (宇土)
  - kumamoto (熊本)
  - matsushima (松島)
  - misumi (三角)
  - taimei (岱明)
  - amita (網田)
```

---

## 🚀 実行方法

### 1. 統合フェッチャー（推奨）

```bash
cd /Users/hijikuro/Codex/Nori
source nori_env/bin/activate

# すべてのデータソースを自動取得
python3 scripts/unified_data_fetcher.py \
  --start 2026-05-01 \
  --end 2026-05-11
```

**出力**:
```
✓ JMA Weather Data              2976 rows
✓ Kumamoto Nori Nutrients        613 rows
✓ River Data                        0 rows (未実装)
✓ Chlorophyll Data (JAXA)         192 rows
✓ Input Templates                  - (テンプレート)
```

### 2. データ統合

```bash
# 外部データを統一スキーマに変換
python3 scripts/integrate_data.py
```

**出力**:
```
integrated_data/
├── marine_daily_features.csv     (2976 rows)
├── nori_farm_operations.csv      (1 row)
└── nori_production_results.csv   (1 row)
```

### 3. 統合データの検証

```bash
# 統合結果の確認
python3 << 'EOF'
import csv

with open('integrated_data/marine_daily_features.csv', 'r') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# クロロフィルデータの統計
chla_values = [float(r['chlorophyll']) 
               for r in rows if r['chlorophyll']]

print(f"クロロフィル統計:")
print(f"  レコード数: {len(chla_values)}")
print(f"  範囲: {min(chla_values):.2f} - {max(chla_values):.2f} mg/m³")
print(f"  平均: {sum(chla_values)/len(chla_values):.2f} mg/m³")
EOF
```

---

## 🔄 自動化スケジュール

### Option 1: 月次更新（推奨）

```bash
#!/bin/bash
# /Users/hijikuro/Codex/Nori/run_monthly_fetch.sh

cd /Users/hijikuro/Codex/Nori
source nori_env/bin/activate

# 前月分のデータを取得
START=$(date -d '1 month ago' +%Y-%m-01)
END=$(date -d 'today' +%Y-%m-01 -d '-1 day')

echo "Fetching data from $START to $END"
python3 scripts/unified_data_fetcher.py --start $START --end $END

# データを統合
python3 scripts/integrate_data.py

echo "Integration complete!"
```

**cron設定**:
```bash
# 毎月1日の午前2時に実行
0 2 1 * * /Users/hijikuro/Codex/Nori/run_monthly_fetch.sh
```

### Option 2: 継続的監視

```bash
# 毎日最新データをチェック
0 6 * * * cd /Users/hijikuro/Codex/Nori && \
  source nori_env/bin/activate && \
  python3 scripts/fetch_chlorophyll_jaxa_api.py \
    --start $(date -d '7 days ago' +%Y-%m-%d) \
    --end $(date +%Y-%m-%d)
```

---

## 🐛 トラブルシューティング

### クロロフィルが統合されない

**原因**: クロロフィルファイルのファイル名が異なる

```bash
# 確認
ls -la external_data/chlorophyll_jaxa_api_*.csv

# スクリプルが期待するファイル名
chlorophyll_jaxa_api_YYYYMMDD_YYYYMMDD.csv
```

### 統合後もカラムが空のままの場合

**原因1**: 日付形式のミスマッチ

```python
# 期待される形式
observation_date: YYYY-MM-DD
date: YYYY-MM-DD
```

**原因2**: integrate_data.py の統合ロジック

確認する関数:
- `load_chlorophyll_data()` - ファイル読み込み
- `integrate_marine_daily_features()` - マージ処理

---

## 📊 拡張可能性

### 今後追加予定のデータソース

| ソース | ステータス | 説明 |
|--------|----------|------|
| 河川水位・流量 | ⏳ 実装中 | MLIT河川局データベース |
| 水温・塩分 | ⏳ 計画中 | 熊本県水産庁 |
| 病害リスク指数 | ⏳ 計画中 | AI予測モデル |
| 生産実績 | ✓ テンプレート用意 | 農家入力 |

### 拡張手順

1. `scripts/fetch_xxxxx.py` を新規作成
2. `unified_data_fetcher.py` に `fetch_xxxxx()` メソッドを追加
3. `integrate_data.py` に統合ロジックを追加
4. `integrated_data/marine_daily_features.csv` にカラムを追加

---

## 🔗 関連スクリプト

```
scripts/
├── fetch_jma_weather.py              (気象データ取得)
├── fetch_kumamoto_nori_nutrients.py  (栄養塩データ取得)
├── fetch_chlorophyll_jaxa_api.py     (クロロフィル取得) ✨ NEW
├── fetch_river_data.py               (河川データ取得・未実装)
├── generate_input_templates.py       (入力テンプレート生成)
├── unified_data_fetcher.py           (統合フェッチャー)
└── integrate_data.py                 (データ統合)
```

---

## 📚 参考資料

### JMA 気象データ
- [JMA地域気象観測システム](https://www.jma.go.jp/jma/kishou/know/amedas/)
- [降雨量・風向風速の定義](https://www.jma.go.jp/jma/kishou/know/)

### 栄養塩データ
- [熊本県水産研究センター](http://www.pref.kumamoto.jp/)

### クロロフィルデータ
- [[01_CHLOROPHYLL_JAXA.md]] を参照

---

## ✅ チェックリスト

- [x] JMA気象データの統合
- [x] 栄養塩データの統合
- [x] クロロフィルデータの統合
- [x] 統一スキーマの定義
- [x] 統合パイプラインの実装
- [x] データ検証ツール
- [ ] 月次自動実行設定
- [ ] 予測モデルの統合
- [ ] ダッシュボード構築

---

**最終更新**: 2026-05-11  
**管理者**: Nori Farming Decision Support Team
