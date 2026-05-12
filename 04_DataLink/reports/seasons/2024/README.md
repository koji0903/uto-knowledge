# 2024シーズン 🌾 養殖季

**期間:** 🌾 養殖季 (9月～5月（養殖期間）)  
**日付範囲:** 2024年9月～2025年5月  

---

## 📊 このシーズンについて

### シーズン情報
- **シーズンID:** 2024
- **期間タイプ:** farming
- **説明:** 9月～5月（養殖期間）

### このフォルダの内容

このフォルダには、2024シーズンの環境データ、予測結果、分析レポートが含まれています：

- **海洋環境データ:** 水温、塩分、溶存酸素、潮位など
- **予測結果:** 赤潮警報、収穫推奨、統合判定
- **分析レポート:** シーズン別の詳細分析
- **予測モデル:** このシーズンで使用されたMLモデルと評価指標

---

## 🔗 関連ディレクトリ構成

```
04_DataLink/
├── datasets/seasons/2024/
│   ├── marine_daily_features.csv        ← 環境データ
│   └── season_metadata.json
├── predictions/seasons/2024/
│   ├── weekly_predictions_2024.csv
│   ├── harvest_recommendations_2024.csv
│   ├── red_tide_alerts_2024.csv
│   └── README.md (このファイル)
├── models/seasons/2024/
│   ├── predictive_models_2024.md
│   ├── feature_importance.csv
│   ├── model_evaluation.csv
│   └── README.md
└── reports/seasons/2024/
    ├── analysis_2024.md
    └── README.md
```

---

## 💡 利用ガイド

### 環境データの確認
```bash
# シーズン別データの確認
head -10 ../../../datasets/seasons/2024/marine_daily_features.csv

# レコード数の確認
wc -l ../../../datasets/seasons/2024/marine_daily_features.csv
```

### Pythonでの分析例
```python
import pandas as pd
import json

# 環境データの読み込み
marine_df = pd.read_csv('../../../datasets/seasons/2024/marine_daily_features.csv')

# シーズンメタデータの確認
with open('../../../datasets/seasons/2024/season_metadata.json') as f:
    metadata = json.load(f)
    print(f"期間: {metadata['start_date']} ～ {metadata['end_date']}")
    print(f"レコード数: {metadata['record_count']}")
    print(f"データ品質スコア: {metadata['data_quality']['completeness']:.1%}")

# 予測結果の読み込み
predictions = pd.read_csv('weekly_predictions_2024.csv')
alerts = pd.read_csv('red_tide_alerts_2024.csv')
```

---

## 📊 シーズン観測地点

このシーズンには以下の5つの観測地点が含まれています：

1. **kawachi** (河内)
2. **kojima** (小島)
3. **matsuo** (松尾)
4. **okishin** (沖新)
5. **shinkou_minami** (新港南)

---

## 🎯 次のステップ

- 予測結果の詳細確認: `../predictions/seasons/2024/`
- モデル評価の確認: `../models/seasons/2024/`
- 分析レポートの確認: `../reports/seasons/2024/`
- 他のシーズンとの比較: `../` ディレクトリで他年度のデータを確認

---

**最終更新:** 2026年5月12日  
**ステータス:** ✅ シーズン別整理完了
