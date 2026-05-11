# 🛰️ クロロフィル-a濃度データ取得システム

**実装完了日**: 2026-05-11  
**ステータス**: ✅ 本運用可能  
**データソース**: JAXA GCOM-C/SGLI衛星（「しきさい」）  
**データ提供元**: JAXA Earth API (Python SDK)

---

## 📊 システム概要

有明海・八代海のクロロフィル-a濃度を自動取得するシステムです。衛星観測データから海の植物プランクトン動態を監視し、色落ちリスク判定や生育管理に活用します。

### このデータで何ができる？
- ✅ **植物プランクトン量の把握** → 色落ちリスク予測
- ✅ **赤潮の検出** → 病害リスク判定  
- ✅ **海況変化をリアルタイム監視** → 収穫タイミング判定
- ✅ **栄養塩データとの相関分析** → 生育要因解析

---

## 🎯 実装内容

### スクリプト

**`fetch_chlorophyll_jaxa_api.py`**
- JAXA Earth API Python SDK を利用
- 100日単位のチャンク処理（API制限対応）
- 有明海・八代海の領域平均を自動計算
- CSV形式で出力

### 実行方法

```bash
# 仮想環境を有効化
source nori_env/bin/activate

# 標準実行（2025年1月～2026年5月）
python3 scripts/fetch_chlorophyll_jaxa_api.py

# カスタム期間
python3 scripts/fetch_chlorophyll_jaxa_api.py \
  --start 2025-04-01 \
  --end 2025-04-30
```

---

## 📋 データセット仕様

| 項目 | 仕様 |
|-----|------|
| **公式ID** | `JAXA.G-Portal_GCOM-C.SGLI_standard.L3-CHLA.daytime.v3_global_daily` |
| **衛星** | GCOM-C（しきさい） |
| **センサー** | SGLI（赤色物質観測センサ） |
| **観測項目** | クロロフィル-a濃度 (mg/m³) |
| **空間解像度** | ~1 km (L2), ~10 km (L3) |
| **時間解像度** | 日次観測、約2日ごとに更新 |
| **カバレッジ** | 全球（有明海・八代海を完全網羅） |
| **データレイテンシ** | 3-4日 |
| **時間範囲** | 2018-11-29 ～ 現在 |
| **更新頻度** | 日次観測、約2日ごと |
| **コスト** | **完全無料** |

### バンド定義
```
CHLA: クロロフィル-a濃度 (mg/m³)
  範囲: 0 ～ 4000 mg/m³
  有効数字: 2-3桁の精度
```

---

## 📊 過去データの統計

**取得期間**: 2025年4月13日 ～ 2026年5月4日  
**レコード数**: 192個

```
濃度統計 (mg/m³):
  最小値:     0.08
  最大値:     17.60（赤潮レベル）
  平均値:     1.14
  中央値:     0.80
  標準偏差:   1.64

濃度分布:
  低濃度 (<0.5):      69 (35.9%)
  中濃度 (0.5-1.0):   37 (19.3%)
  高濃度 (1.0-2.0):   68 (35.4%)
  赤潮レベル (≥2.0):  18 (9.4%)
```

---

## 🔧 技術詳細

### JAXA Earth API との統合

```python
from jaxa.earth import je
import numpy as np

# ImageCollection作成
dataset = je.ImageCollection("JAXA.G-Portal_GCOM-C.SGLI_standard.L3-CHLA.daytime.v3_global_daily")

# フィルター（順序が重要）
1. filter_date()      # 日付範囲（先に実行）
2. filter_resolution()  # 解像度設定
3. filter_bounds()    # 地域フィルター
4. select()          # バンド選択
5. get_images()      # データ取得

# データ処理
raster_data = images.raster.img  # Shape: (dates, lat, lon, bands)
mean_chla = np.nanmean(raster_data[date_idx, :, :, 0])
```

### API制限と対策
- **制限**: 一度に最大100日のデータ取得
- **対策**: 自動チャンク処理（100日単位に分割）
- **処理時間**: 約5-10分（1年分のデータ）

---

## 📂 出力ファイル形式

**ファイル**: `external_data/chlorophyll_jaxa_api_YYYYMMDD_YYYYMMDD.csv`

```csv
source,observation_date,location_name,location_lat,location_lon,chlorophyll_a_mg_m3,qa_flag,data_product,notes
JAXA Earth API (Python SDK),2026-05-04,有明海・八代海（平均）,33.25,130.0,0.37,,GCOM-C L3 CHLA V3,Regional mean (0.37 mg/m³)
```

### カラム説明
- `source`: データソース（JAXA Earth API）
- `observation_date`: 観測日（YYYY-MM-DD形式）
- `location_name`: 観測地域（有明海・八代海の地域平均）
- `location_lat/lon`: 代表座標（33.25, 130.0）
- `chlorophyll_a_mg_m3`: クロロフィル-a濃度（mg/m³）
- `qa_flag`: 品質フラグ（予約）
- `data_product`: データプロダクト情報
- `notes`: 備考（平均値など）

---

## 🔗 統合パイプライン

### 統合テーブル

`integrate_data.py` 実行後、以下の統一スキーマに組み込まれます：

**`integrated_data/marine_daily_features.csv`**

```
date,station_id,rainfall_mm,nutrient_n,nutrient_p,chlorophyll,solar_radiation,wind_speed,...
2025-04-13,kosa,16.5,,,2.24,8.9,1.0,...
2025-04-13,kumamoto,17.0,,,2.24,9.7,1.2,...
```

**統合レコード数**: 1,170行（全2,976行中）  
**カバレッジ**: 2025年4月13日 ～ 2026年5月10日

---

## ⚙️ セットアップと実行

### 1. 環境準備

```bash
# 仮想環境作成
python3 -m venv nori_env
source nori_env/bin/activate

# 依存関係インストール
pip install jaxa-earth numpy

# 確認
python3 -c "from jaxa.earth import je; print('OK')"
```

### 2. 単一スクリプト実行

```bash
# クロロフィルデータのみ取得
python3 scripts/fetch_chlorophyll_jaxa_api.py --start 2026-05-01 --end 2026-05-10

# 出力
external_data/chlorophyll_jaxa_api_20260501_20260510.csv
```

### 3. 統合パイプライン

```bash
# 全データソース（気象+栄養塩+クロロフィル）を自動取得
python3 scripts/unified_data_fetcher.py --start 2026-05-01 --end 2026-05-10

# データ統合
python3 scripts/integrate_data.py

# 出力
integrated_data/marine_daily_features.csv  (統一スキーマ)
```

---

## 📈 利用シナリオ

### シナリオ1: 月次自動更新
```bash
# 毎月1日に前月分を取得（cron等で自動化）
python3 scripts/unified_data_fetcher.py \
  --start "$(date -d '1 month ago' +%Y-%m-01)" \
  --end "$(date +%Y-%m-01 -d '1 day ago')"

python3 scripts/integrate_data.py
```

### シナリオ2: リアルタイム監視
```bash
# 数日遅延で最新データを取得（3-4日遅延）
python3 scripts/fetch_chlorophyll_jaxa_api.py \
  --start "$(date -d '7 days ago' +%Y-%m-%d)" \
  --end "$(date +%Y-%m-%d)"
```

### シナリオ3: 過去データの一括取得
```bash
# 過去3年分をすべて取得
python3 scripts/fetch_chlorophyll_jaxa_api.py \
  --start 2023-01-01 \
  --end 2026-05-11
```

---

## 🐛 トラブルシューティング

### Q: `ModuleNotFoundError: No module named 'jaxa'`
```bash
# 仮想環境でインストール
source nori_env/bin/activate
pip install jaxa-earth
```

### Q: `Error! Date number is too large!`
データ取得期間が100日を超えています。スクリプトが自動的にチャンク処理します。数分待ってください。

### Q: データが取得できない
```bash
# 以下を確認：
# 1. インターネット接続
# 2. 指定期間にデータが存在するか（2018年11月以降）
# 3. APIの正常動作確認

python3 << 'EOF'
from jaxa.earth import je
dataset = je.ImageCollection('JAXA.G-Portal_GCOM-C.SGLI_standard.L3-CHLA.daytime.v3_global_daily')
print(f"Dataset loaded successfully")
EOF
```

### Q: 処理時間が長い
- 初回実行は 10-20分かかる場合があります（正常）
- ネットワーク環境によって変動

---

## 📚 参考資料

### 公式ドキュメント
- [JAXA GCOM-C データ](https://data.earth.jaxa.jp/ja/datasets/#/id/JAXA.G-Portal_GCOM-C.SGLI_standard.L3-CHLA.daytime.v3_global_daily)
- [JAXA Earth API Python](https://data.earth.jaxa.jp/api/python/)
- [Google Earth Engine カタログ](https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_OCEAN_CHLA_V3)

### 関連スクリプト
- `scripts/fetch_chlorophyll_jaxa_api.py` - クロロフィル取得
- `scripts/unified_data_fetcher.py` - 統合フェッチャー
- `scripts/integrate_data.py` - データ統合

---

## ✅ チェックリスト

- [x] JAXA GCOM-C データソース調査
- [x] JAXA Earth API Python SDK実装
- [x] 有明海・八代海カバレッジ確認
- [x] 100日制限への対応（自動チャンク処理）
- [x] 統合管理スクリプトに組み込み
- [x] 長期間データの取得テスト（2025年1月～2026年5月）
- [x] データ統合パイプルに統合
- [x] 本運用環境での動作確認

---

**最終更新**: 2026-05-11  
**次のアクション**: 月次自動実行設定、予測モデルの構築
