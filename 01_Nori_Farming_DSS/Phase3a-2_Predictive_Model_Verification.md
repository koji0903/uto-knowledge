# Phase 3a-2: 予測モデル検証

**スケジュール:** 2026-05-12 以降（1-2週間）  
**前提:** Phase 3a 完了（26列スキーマ、Kumamoto漁業データ統合）  
**目的:** 新スキーマでの予測パイプラインの動作確認と精度向上

---

## 🎯 目標

Phase 3a で最適化した 26列スキーマが、 predictive_pipeline.py と完全に互換性があることを確認し、Kumamoto漁業データによる予測精度の改善を測定する。

---

## 📋 実装チェックリスト

### Phase 3a-2a: predictive_pipeline.py の互換性確認

#### [ ] タスク 1: スキーマ依存性の確認
```
目的: 削除列への参照がないことを確認

確認項目:
  [ ] PredictiveModels.py を読む
  [ ] Phase 2A リスク指数計算で使用される列を特定
      - Color-Drop Risk: 使用列は？
      - Disease Risk: 使用列は？
      - Harvest Urgency: 使用列は？
  [ ] 削除列 (8列) のいずれも使用されていないことを確認
      - tide_level (×)
      - river_level (×)
      - river_flow (×)
      - jma_buoy_water_temp_c (×)
      - jma_buoy_salinity_psu (×)
      - chlorophyll_ground_mg_m3 (×)
      - transparency (×)
      - transparency_m (×)
  [ ] 新列 (3列) への参照が必要ないことを確認
      - kumamoto_fishery_water_temp
      - kumamoto_fishery_salinity
      - kumamoto_fishery_do
```

#### [ ] タスク 2: predictive_pipeline.py の実行テスト
```
目的: 新26列スキーマでパイプラインが動作することを確認

実行手順:
  1. cd /Codex/Nori/scripts
  2. python3 predictive_pipeline.py
  
期待される動作:
  [ ] エラーなく実行完了
  [ ] Output ファイル生成
      - harvest_recommendations_YYYYMMDD.csv
      - red_tide_alerts_YYYYMMDD.csv
      - marine_daily_features_with_risks.csv
```

#### [ ] タスク 3: 出力ファイル検証
```
目的: 生成ファイルが正しくフォーマットされていることを確認

検証内容:
  [ ] harvest_recommendations
      - 列数: 正確か？
      - 行数: 期待値内か？
      - 値の範囲: 妥当か？
      
  [ ] red_tide_alerts
      - Alert数: 前フェーズと比較して妥当か？
      - Severity分布: 適切か？
      
  [ ] marine_daily_features_with_risks
      - リスク列が全て計算されているか？
      - NaN値の数は許容範囲か？
```

---

### Phase 3a-2b: 予測精度の検証

#### [ ] タスク 4: リスク指数の分布確認
```
目的: 新スキーマでのリスク計算が正常に機能していることを確認

計算:
  1. marine_daily_features_with_risks.csv を読む
  2. 各リスク指数の統計を計算
     - Color-Drop Risk: min, max, mean, std
     - Disease Risk: min, max, mean, std
     - Harvest Urgency: min, max, mean, std
  
基準値（Phase 2との比較）:
  [ ] 指数値の範囲が [0, 1] に収まっているか
  [ ] 平均値が 0.3-0.7 の範囲か（極端に偏っていないか）
  [ ] 標準偏差が 0.1-0.4 の範囲か（変動が適切か）
```

#### [ ] タスク 5: Kumamoto列の影響測定
```
目的: Kumamoto漁業データが予測精度を向上させているか測定

手順:
  1. Kumamoto列を持つ行 (1,638行) と持たない行を分離
  2. 両グループのリスク指数の分布を比較
  
測定項目:
  [ ] Color-Drop Risk の変化
  [ ] Disease Risk の変化
  [ ] Harvest Urgency の変化
  
解釈:
  - 空の値が多い場合: 「Kumamoto列のデータ品質確認必要」
  - 値の変化が大きい場合: 「Kumamoto列が予測に有意な影響を与えている」✓
  - 変化が小さい場合: 「今後の改善が必要」
```

#### [ ] タスク 6: Alert の発生パターン確認
```
目的: 赤潮検出アラートが正常に機能しているか確認

確認事項:
  [ ] Red Alert (>0.8) の発生日を確認
  [ ] Yellow Alert (0.5-0.8) の発生日を確認
  [ ] Alert 数が過多でも過少でもないか確認
  
期待値（Phase 2比較）:
  - Red Alert: 全日の 5-10%
  - Yellow Alert: 全日の 15-30%
  - Green (OK): 全日の 60-80%
```

---

### Phase 3a-2c: 相関分析の更新

#### [ ] タスク 7: 削除列の相関依存性確認
```
目的: 相関分析で削除列に対する依存性がないことを確認

確認内容:
  [ ] correlation_analysis.py が存在するか
  [ ] 削除列への参照がないか確認
      - tide_level
      - river_level / river_flow
      - jma_buoy_*
      - chlorophyll_ground_*
      - transparency*
  
修正が必要な場合:
  [ ] correlation_analysis.py を修正
  [ ] 新列を追加して相関を計算
      - kumamoto_fishery_water_temp との相関
      - kumamoto_fishery_salinity との相関
      - kumamoto_fishery_do との相関
```

#### [ ] タスク 8: 新しい相関マトリクス生成
```
目的: Kumamoto データを含む相関分析を実行

実行手順:
  1. python3 correlation_analysis.py
  
出力確認:
  [ ] correlation_matrix.csv (26×26)
      - 新列がすべて含まれているか
      - 削除列への参照がないか
  
  [ ] correlation_visualization.png
      - Kumamoto 列がハイライトされているか
      - 気温, 塩分, DO との相関が視認できるか
```

---

### Phase 3a-2d: ドキュメント更新

#### [ ] タスク 9: PredictiveModels.md の更新
```
目的: 新スキーマでの予測モデルを文書化

更新内容:
  [ ] Phase 2A: リスク指数の説明を更新
      - Kumamoto列の利用を記載
  [ ] Phase 2B: 赤潮アラートの説明を更新
  [ ] Phase 2C: 収穫推奨の説明を更新
  [ ] Phase 2D: 相関分析を更新
```

#### [ ] タスク 10: 実装ノートの作成
```
目的: Phase 3a-2 の実装経験を記録

記載内容:
  [ ] Kumamoto列の影響度（定量値）
  [ ] 予測精度の改善／劣化
  [ ] 発見した問題と解決策
  [ ] Phase 3b/3c への改善案
```

---

## 📊 検証フレームワーク

### テストデータセット
```
使用ファイル: marine_daily_features.csv (26列)
  - JMA気象: 完全（2,976行）
  - MLIT河川: 完全（2,976行）
  - Kumamoto漁業: 部分（1,638行, 55%）
  
期待結果:
  - Kumamoto列が部分的に埋まっていることで、
    予測モデルが適応できることを確認
```

### 基準値（Phase 2 vs Phase 3a）
```
| メトリック | Phase 2 | Phase 3a | 目標 |
|---|---|---|---|
| リスク平均値 | ? | 0.3-0.7 | 変化なし |
| Alert数 (Red) | ? | 5-10% | 同等 |
| Alert数 (Yellow) | ? | 15-30% | 同等 |
| Kumamoto影響 | N/A | TBD | +5-15% 改善 |
```

---

## ⚠️ 予想される問題と対応

### 問題 1: predictive_pipeline.py が起動しない
```
原因候補:
  - 削除列への参照
  - 新列が存在しない
  - スキーマ不一致

対応:
  1. エラーメッセージを確認
  2. PredictiveModels.md コード部分を確認
  3. 該当行をコメント化または修正
```

### 問題 2: Alert が過多 / 過少
```
原因候補:
  - Kumamoto データの品質
  - 閾値の適切性

対応:
  1. red_tide_detector.py の閾値確認
  2. Kumamoto データの有効性確認
  3. 必要に応じて閾値を調整
```

### 問題 3: Kumamoto列の影響が見られない
```
原因候補:
  - データ品質が低い
  - データカバレッジが不足 (55%)
  - 予測モデルが列を使用していない

対応:
  1. Kumamoto データの精度を検証
  2. データカバレッジを向上させる
  3. 予測モデルを修正して列を活用
```

---

## ⏱️ 実装時間見積もり

| タスク | 見積もり | 難易度 |
|---|---|---|
| 1-3: スキーマ互換性確認 | 2-4時間 | 低 |
| 4-6: 予測精度検証 | 4-6時間 | 中 |
| 7-8: 相関分析更新 | 3-5時間 | 中 |
| 9-10: ドキュメント更新 | 2-3時間 | 低 |
| **合計** | **11-18時間** | - |

推奨: 1-2週間で完了（3-5日間の実装, 残りはテスト・検証）

---

## 🎯 成功基準

✅ Phase 3a-2 が完了したと判断される条件:

1. **機能面**
   - [ ] predictive_pipeline.py がエラーなく実行
   - [ ] 全ての推奨出力ファイルが正常に生成
   - [ ] リスク指数が妥当な分布を持つ

2. **品質面**
   - [ ] 削除列への参照が完全に除去
   - [ ] 新Kumamoto列が予測に寄与 (+5% 以上の改善)
   - [ ] Alert パターンが合理的

3. **ドキュメント面**
   - [ ] PredictiveModels.md が更新
   - [ ] Phase 3a-2 実装ノートが完成
   - [ ] INDEX.md が Phase 3a-2 完了で更新

---

## 🔄 Phase 3b への準備

Phase 3a-2 の完了後、以下が Phase 3b で追加される予定：

```
Phase 3b (2-3週間) の追加データソース:
  1. JAFIC衛星画像 (赤潮自動検出精度向上)
  2. JMA波浪予報 (高波リスク検出)
  3. 市場価格データ詳細化 (グレード別)
```

Phase 3a-2 の検証で得られた知見が Phase 3b 実装の基礎となります。

---

**バージョン:** 1.0  
**作成日:** 2026-05-11  
**次回更新:** Phase 3a-2 開始時  
**ステータス:** 🔄 準備中（実装待ち）
