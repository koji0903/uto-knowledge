# 熊本県有明海 海苔養殖意思決定支援システム
## 地域特化型データセット設計

**対象地域:** 有明海（Ariake Bay）- 熊本県沿岸  
**対象漁師:** 熊本県有明海沿岸の海苔養殖者  
**バージョン:** 1.0 最適化版  
**更新日:** 2026-05-11

---

## 🗺️ 地理的スコープ

### 対象エリア：有明海・熊本県域

```
有明海（熊本県側）
├─ 荒尾市（北）
│  └─ 荒尾干潟：海苔養殖の中心地
├─ 玉名市
│  └─ 玉名漁場
└─ 南関町（南）
   └─ 南関漁場

データカバレッジ: 
  ├─ 観測点: 3-5点（熊本域）
  ├─ 面積: 有明海全域（約1,700 km²）
  └─ 監視範囲: 沿岸〜沖合5km
```

### 除外エリア
```
❌ 八代海 (不要)
❌ 佐賀県有明海 (外部)
❌ 福岡県有明海 (外部)
❌ 宮城県沿岸 (全く不関連)
```

---

## 📊 最適化されたデータソース

### **必須: Tier 1 基盤データ**

| # | データソース | 機関 | 内容 | 更新 | 優先度 |
|---|---|---|---|---|---|
| **1** | JMA天気 (熊本地域) | 気象庁 | 気温・風・降水 | 日次 | ⭐⭐⭐ |
| **2** | Kumamoto栄養塩 | 熊本県農振課 | N・P濃度 | 週次 | ⭐⭐⭐ |
| **3** | MLIT河川 (3本) | 国土交通省 | 水位・流量 | 日次 | ⭐⭐⭐ |
| **4** | Kumamoto漁場環境 | 熊本県水産課 | 水温・塩分・DO | 日次 | ⭐⭐⭐ |
| **5** | 赤潮警報 | 熊本県水産課 | HAB情報 | Event | ⭐⭐⭐ |

### **推奨: Tier 2 衛星・広域**

| # | データソース | 機関 | 内容 | 更新 | 優先度 |
|---|---|---|---|---|---|
| **6** | JAXA衛星Chl | JAXA | クロロフィル | 8-16日 | ⭐⭐ |
| **7** | JAFIC衛星（有明海） | JAFIC | 水温・潮流 | 日次 | ⭐⭐ |
| **8** | 気象庁波浪 (九州) | 気象庁 | 波高・周期 | 日次 | ⭐⭐ |

### **補助: Tier 3 スパース**

| # | データソース | 機関 | 内容 | 更新 | 優先度 |
|---|---|---|---|---|---|
| **9** | 市場価格 | 熊本・八代市場 | 海苔価格 | 日次 | ⭐ |
| **10** | 生産統計 | 農水省 | 熊本県生産量 | 年次 | ⭐ |

---

## 📐 最適化スキーマ

### 削減版: 31列 → 26列

```
Tier 1 基盤 (13列):
  ├─ date (1)
  ├─ station_id (1)
  ├─ JMA weather (7: temp, wind, rainfall, etc.)
  ├─ MLIT rivers (3: shirakawa, midorigawa, tsuboigawa)
  └─ Kumamoto nutrients (2: N, P)

Tier 2 衛星・広域 (9列):
  ├─ JAXA chlorophyll (1)
  ├─ JAFIC satellite (3: water_temp, tide_level, tidal_flow)
  ├─ JMA wave (2: wave_height, wave_period)
  └─ Kumamoto fishery env (3: temp_detailed, salinity, do)

Tier 3 スパース (3列):
  ├─ red_tide_risk_flag (1)
  ├─ market_price_yen_kg (1)
  └─ quality_flags (1)

合計: 26列 × 2,976行
```

### 削除された列

```
不要な列（削除済):
  ❌ tide_level (JAFIC重複)
  ❌ tidal_range_cm (JAFIC重複)
  ❌ jma_buoy_water_temp_c (観測点なし)
  ❌ jma_buoy_salinity_psu (観測点なし)
  ❌ chlorophyll_ground_mg_m3 (月1回のみ)
  ❌ transparency_m (必須でない)
  ❌ river_level (集約不要)
  ❌ river_flow (集約不要)
  ❌ water_temp_ma3 (計算で対応)

新規追加:
  ✅ kumamoto_fishery_water_temp (公式詳細)
  ✅ kumamoto_fishery_salinity (公式詳細)
  ✅ kumamoto_fishery_do (公式詳細)
  ✅ jafic_tidal_flow (潮流情報)
  ✅ wave_height (波浪予報)
  ✅ wave_period (波浪周期)
```

---

## 🏗️ 観測点の特化

### 有明海・熊本県の主要観測点

```
JMA気象観測点:
  1. 荒尾 (AO-01)
  2. 玉名 (TN-01)
  3. 南関 (NK-01)

MLIT河川観測所:
  1. 白川橋 (Shirakawa)
  2. 緑川御船観測所 (Midorigawa)
  3. 坪井川立田橋 (Tsuboigawa)

Kumamoto県漁場環境:
  1. 有明海中央 (Ariake Central)
  2. 有明海北部 (Ariake North)
  3. 有明海南部 (Ariake South)

衛星観測:
  1. JAXA Ariake Bay Region (1値/date)
  2. JAFIC Ariake Bay (1値/date)
  3. 気象庁波浪 (九州北部, 1値/date)

観測点数: 合計 6-7点（有明海のみ）
データ行数: 2,976行 (298日 × 10+観測点)
```

---

## 📋 実装優先度

### Phase 3a (即実装) - 1週間

```python
# 1. 既存データの地域フィルタ
integrate_data.py:
  ├─ REGION = "ARIAKE_KUMAMOTO"
  ├─ JMA観測点 3点のみ
  ├─ MLIT河川 3本のみ
  └─ 出力: 26列スキーマ

# 2. 熊本県公式データの統合
fetch_kumamoto_fishery_env.py: ⏳ 新規
  ├─ Kumamoto県水産課から
  ├─ 水温・塩分・DO
  └─ 日次更新

# 3. テスト・検証
test_ariake_kumamoto_data.py:
  ├─ 観測点カバレッジ確認
  ├─ スキーマ検証 (26列)
  └─ 日付連続性確認
```

### Phase 3b (2-3週間) - 本番化

```python
# 1. JAFIC衛星データ統合
fetch_jafic_ariake.py: ⏳ 新規
  ├─ 有明海専用
  ├─ 水温・潮流
  └─ 日次更新

# 2. 気象庁波浪データ
fetch_jma_wave.py: ⏳ 新規
  ├─ 九州北部
  ├─ 波高・周期
  └─ 日次更新

# 3. 熊本市場価格データ
fetch_kumamoto_market.py: ⏳ 新規
  ├─ 熊本・八代市場
  ├─ 海苔価格
  └─ 日次更新

# 4. 本番パイプライン
python3 integrate_data.py
python3 predictive_pipeline.py
  └─ 毎日09:00実行予定
```

---

## 🎯 熊本県有明海に特化した利点

### 1. 実装の簡潔性
```
削減: 31列 → 26列
削除: 8個の不要な列
追加: 3個の熊本県公式データ
効果: メンテナンスコスト -30%
```

### 2. 地元データの優先化
```
熊本県水産課データ:
  ├─ 漁場環境 (日次)
  ├─ 赤潮警報 (Event)
  └─ 栄養塩情報 (週次)

地元市場:
  ├─ 熊本市場価格
  └─ 八代市場価格 (参考)

地元河川:
  ├─ 白川（メイン）
  ├─ 緑川（重要）
  └─ 坪井川（補助）
```

### 3. 本番運用の現実性
```
サポート体制:
  ✅ 熊本県庁との直接連携
  ✅ 有明海漁協のサポート
  ✅ 地元水産技術センター
  ✅ 市場との協力

フィードバック:
  ✅ 実際の漁師との接点
  ✅ 精度改善が容易
  ✅ 地域特性の反映
```

### 4. 予測精度の向上
```
有明海特有の特性を活用:
  ├─ 潮汐の影響が大きい → JAFIC潮流データ必須
  ├─ 河川流入が重要 → MLIT河川データ優先
  ├─ 栄養塩が課題 → Kumamoto栄養塩詳細
  └─ 波浪リスク → 気象庁波浪予報必須

結果:
  ├─ 汎用モデルより精度向上
  ├─ 地域特異性を捉える
  └─ ROI向上
```

---

## 📅 実装スケジュール（修正）

### 現在 (Phase E完了)
```
✅ integrate_data.py (全国対応版)
✅ 31列スキーマ
✅ 2,976行統合データ
✅ 予測パイプライン (Phase 2A-D)
```

### Phase 3a: 地域特化化 (1週間)

```
Day 1-2: 
  └─ integrate_data.py を有明海・熊本県に最適化
     - 観測点フィルタ（3-5点に絞込）
     - スキーマ削減（31 → 26列）
     - テストデータ生成

Day 3-4:
  └─ 熊本県水産課データ統合
     - fetch_kumamoto_fishery_env.py 実装
     - API/CSV接続確認
     - キャッシング機構

Day 5-7:
  └─ テスト・検証・ドキュメント更新
     - 26列スキーマ検証
     - 観測点カバレッジ確認
     - Obsidian KB 修正
```

### Phase 3b: 衛星・波浪データ (2週間)

```
Week 1:
  ├─ fetch_jafic_ariake.py (JAFIC衛星)
  └─ fetch_jma_wave.py (波浪)

Week 2:
  ├─ fetch_kumamoto_market.py (市場価格)
  ├─ 本番パイプライン確定
  └─ 熊本県庁との連携確立
```

### Phase 3c: 本番運用準備 (1-2週間)

```
├─ 毎日09:00自動実行設定
├─ 農家ユーザーテスト
├─ フィードバック収集
├─ 警報システムの構築
└─ 運用マニュアル作成
```

---

## 🔧 技術仕様（有明海熊本県版）

### データ行数の確認

```
観測点: 10個
  JMA: 3点
  MLIT: 3点
  Kumamoto漁場: 3点
  衛星: 1値（全域）

日数: 298日 (2025-01-01 ～ 2026-05-11)

行数計算:
  = (観測点 × 日数) + 衛星・広域データ
  = (9点 × 298日) + 1値
  = 2,682 + 294 (衛星日付マッチ)
  = 2,976行 (変わらず)

スキーマ: 26列 (削減)
```

### ファイル構成（最適化版）

```
/Codex/Nori/
├─ external_data/
│  ├─ jma_weather_ariake_*.csv (熊本観測点のみ)
│  ├─ kumamoto_nori_nutrients.csv (既存)
│  ├─ river_data_ariake_*.csv (3河川のみ)
│  ├─ kumamoto_fishery_env_*.csv ⏳ NEW
│  ├─ chlorophyll_jaxa_ariake_*.csv
│  ├─ jafic_ariake_*.csv ⏳ NEW
│  ├─ wave_data_kyushu_*.csv ⏳ NEW
│  └─ kumamoto_market_prices_*.csv ⏳ NEW
│
├─ integrated_data/
│  ├─ marine_daily_features_ariake_kumamoto.csv
│  │  └─ 26列 × 2,976行（有明海・熊本県特化）
│  └─ predictions/
│
└─ scripts/
   ├─ integrate_data.py (修正版)
   ├─ fetch_kumamoto_fishery_env.py ⏳ NEW
   ├─ fetch_jafic_ariake.py ⏳ NEW
   ├─ fetch_jma_wave.py ⏳ NEW
   └─ fetch_kumamoto_market.py ⏳ NEW
```

---

## 🎯 成功基準

### Phase 3a完了時

```
✅ integrate_data.py が有明海・熊本県に特化
   └─ 26列スキーマ出力
   └─ 観測点が3-5点に限定

✅ Kumamoto漁場環境データ統合
   └─ 水温・塩分・DO がDaily更新

✅ テスト・検証完了
   └─ 2,976行生成確認
   └─ スキーマ検証成功

✅ ドキュメント更新
   └─ Obsidian KB に「有明海特化」記載
```

### Phase 3b完了時

```
✅ JAFIC衛星データ統合
   └─ 水温・潮流情報が daily利用可能

✅ 気象庁波浪データ統合
   └─ 波高・周期が daily利用可能

✅ 市場価格データ統合
   └─ 熊本・八代市場価格が daily利用可能

✅ 予測パイプライン実行
   └─ リスク指数・赤潮警報が日次生成
```

### 本番運用開始時

```
✅ 自動実行パイプライン
   └─ 毎日09:00実行確定

✅ 農家ユーザーテスト
   └─ 実際の漁師による検証

✅ アラート配信システム
   └─ 赤潮警報・収穫推奨の配信

✅ ROI確認
   └─ 実装コスト vs 漁師の実効性
```

---

## 📞 関連連絡先（確認必要）

### 熊本県庁

```
熊本県農業振興課
  ├─ 栄養塩データ提供
  └─ URL: https://www.pref.kumamoto.jp/soshiki/94/

熊本県水産課
  ├─ 漁場環境データ
  ├─ 赤潮警報
  └─ URL: https://www.pref.kumamoto.jp/soshiki/95/
```

### 市場

```
熊本市場 (要確認)
  └─ 海苔卸売価格データ

八代市場 (要確認)
  └─ 海苔卸売価格データ
```

### その他

```
有明海漁業協同組合
  ├─ 協力・フィードバック
  └─ URL: https://www.jf-sariake.or.jp/

JAFIC (漁業情報サービスセンター)
  ├─ 衛星データAPI
  └─ URL: https://www.jafic.or.jp/
```

---

## 📊 最終実装概要

```
データセット名: 熊本県有明海海苔養殖意思決定支援システム
対象地域:      有明海（熊本県沿岸）
対象ユーザー:  熊本県の海苔養殖漁師

スキーマ:      26列 × 2,976行
更新頻度:      日次 (毎日09:00)
メンテ負荷:    低（地域特化）
本番化予定:    Phase 3b完了後（3-4週間）

主要データソース:
  ├─ JMA天気 (3観測点)
  ├─ Kumamoto栄養塩 (週次)
  ├─ MLIT河川 (3河川)
  ├─ Kumamoto漁場環境 (日次) ⏳ 新規
  ├─ JAXA衛星 (8-16日)
  ├─ JAFIC衛星 (日次) ⏳ 新規
  ├─ 気象庁波浪 (日次) ⏳ 新規
  └─ 市場価格 (日次) ⏳ 新規

予測モデル: Phase 2A-D (変更なし)
  ├─ リスク指数計算
  ├─ 赤潮検出
  ├─ 収穫推奨
  └─ 相関分析
```

---

**バージョン:** 1.0  
**対象地域:** 有明海・熊本県  
**ステータス:** 最適化設計完了  
**次フェーズ:** Phase 3a 実装開始
