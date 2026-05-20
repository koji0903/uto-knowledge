# 海苔養殖意思決定支援システム - ナレッジベースインデックス

**プロジェクト:** Nori Farming Decision Support System × Utomachi Platform Integration  
**バージョン:** 4.1 (Phase 4 ML + Utomachi統合版)  
**更新日:** 2026-05-12  
**ステータス:** ✅ Phase 4完全実装 + Utomachi Platform統合完了  
**最新フェーズ:** Phase 4 (機械学習統合 + リアルタイムAPI + プラットフォーム統合)

---

## 📚 ナレッジベース構成

### 🚀 **NORI_OS_QUICKSTART.md** - クイックスタートガイド ⭐ ⭐ ⭐ NEW
   
   **5分で始める海苔OSセットアップ**
   
   - インポートコマンド（ドライラン・本番）
   - データ検証方法
   - アプリケーション起動
   - よくある質問 (FAQ)
   - デプロイ手順 (Vercel)
   - チェックリスト
   
   **対象読者:** 開発者・運用チーム（推奨！）・初心者

---

### 🌊 **NORI_SEASON_DEFINITION.md** - シーズン管理体系 ⭐ ⭐ ⭐
   
   **海苔養殖シーズン（秋～春）に基づいた管理体系**
   
   - 海苔養殖シーズン定義（9月～4月が1シーズン）
   - シーズンベースのデータ管理構造
   - シーズン毎の分析・予測フレームワーク
   - 進行中シーズンの運用手順
   - ダッシュボード表示の変更内容
   - 実装スケジュール・チェックリスト
   
   **対象読者:** 全員（必読！）・データエンジニア・運用チーム

---

### 🗺️ **KNOWLEDGE_MAP.md** - ナレッジ統合マップ ⭐ ⭐ ⭐ (v2.0)
   
   **このドキュメントから始めてください！**
   
   - 海洋データ・海苔養殖ナレッジの全体図
   - 4レイヤー構成（データソース → 統合 → 分析 → 実装）
   - **シーズンベース管理への対応（NEW）**
   - 全ドキュメント相互関係の可視化
   - トピック別・技術別ナビゲーション
   - 読者別学習ガイド（初心者/データエンジニア/ML/開発者）
   - クイック検索・相互参照リスト
   
   **対象読者:** 全員（推奨！）・新規参入者・管理者

---

### 1. **Overview.md** - システム概要
   - システムの目的と機能
   - 8つのデータソース概説
   - Phase 2実装の成果
   - ファイル構成と運用フロー

   **対象読者:** 全員（入口）

---

### 1.5. **Phase3a_Optimization.md** - Phase 3a 設計・仕様書 ⭐ NEW
   - Ariake Bay + Kumamoto 最適化
   - 地理スコープ縮小（全国 → 有明海）
   - スキーマ最適化（31列 → 26列）
   - 観測地点削減（10地点 → 6地点）
   - Kumamoto県漁業データ統合
   
   **対象読者:** 実装者・データエンジニア

---

### 1.6. **Phase3a_Implementation_Summary.md** - Phase 3a 実装完了報告 ⭐ NEW
   - 実装結果・動作検証
   - コード修正内容
   - パフォーマンス改善指標
   - 次フェーズ計画
   
   **対象読者:** 全員（状況把握）

---

### 1.7. **Phase3a_Geographic_Interpolation.md** - 地理的距離補間 ⭐ NEW
   - ハバーサイン公式による距離計算
   - 逆距離加重（IDW）補間
   - 5地点補間の詳細（最寄り3地点を選定）
   - 補間値の検証・精度評価
   
   **対象読者:** データエンジニア・実装者

---

### 1.8. **Phase3a-2_Completion_Report.md** - Phase 3a-2 検証完了報告 ⭐ NEW
   - 11地点完全カバレッジ検証
   - スキーマ互換性確認
   - 削除列依存性チェック
   - 予測パイプライン検証結果
   - 知識ベース更新（amita → ohda）
   
   **対象読者:** 全員（状況把握）、開発チーム

---

### 1.9. **Phase3b_Extended_Data_Integration.md** - Phase 3b 拡張データ統合 ⭐ NEW
   - JAFIC衛星画像ベース赤潮確率検出
   - JMA波浪予報データ統合
   - 市場価格グレード別データ統合
   - スキーマ拡張（26列 → 32列）
   - Tier 2/3統合アーキテクチャ
   - 予測パイプライン再検証結果
   - Phase 3c計画・技術教訓
   
   **対象読者:** 全員（最新状況）、データエンジニア

---

### 1.10. **Phase4_ML_Integration.md** - Phase 4 機械学習統合 ⭐ ⭐ LATEST
   - 機械学習へのパラダイムシフト
   - 5つのサブフェーズ（4A～4E）完全実装
   - 特徴量エンジニアリング（Z-スコア・マハラノビス距離）
   - MLモデル開発（LR/RF/XGBoost）
   - マルチモデル統合エンジン
   - REST API実装（4エンドポイント）
   - テストスイート（27/27合格）
   - 完全なドキュメント（5文書）
   - 本番対応・実装完了
   
   **対象読者:** 全員（最新状況）、ML エンジニア、運用チーム

---

### 1.11. **Phase4_Utomachi_Integration.md** - Phase 4 ウトマチプラットフォーム統合 ⭐ ⭐ ⭐ NEWEST
   - Phase 4 ML予測データの Utomachi Platform へ統合
   - バックエンド: importNoriData.ts & verifyNoriData.ts
   - フロントエンド: NoriPredictionDashboard コンポーネント
   - Firestore スキーマ設計 (nori_predictions, nori_environment_data)
   - 農家向けダッシュボード実装
   - データインポート完了 (5,456 × 2 ドキュメント)
   - 11観測地点カバレッジ
   - 本番対応・完全実装
   
   **対象読者:** 全員（プロジェクト概要）、開発チーム（実装詳細）、運用チーム（デプロイ）
   
   **関連リンク**: [[Phase4_Utomachi_Integration|ウトマチ統合の詳細]] | [[Phase4_ML_Integration|Phase 4 ML統合]] | [[../Utomachi_Platform_Architecture|プラットフォームアーキテクチャ]]

---

### 2. **Architecture.md** - システムアーキテクチャ
   - 全体構成図
   - レイヤー別詳細設計
   - Tier 1/2/3統合アーキテクチャ
   - データフロー詳細
   - エラーハンドリング戦略
   - パフォーマンス特性

   **対象読者:** 開発者・システム設計者

---

### 3. **DataIntegration.md** - データ統合戦略
   - 統合のチャレンジと解決策
   - Tier別統合実装詳細
   - 空間・時間解像度の対応
   - ギャップ処理とフォワードフィル
   - データ検証とQA
   - トラブルシューティング

   **対象読者:** データエンジニア・ML エンジニア

---

### 4. **PredictiveModels.md** - Phase 2 予測モデル
   - 3つのリスク指数計算
   - 赤潮検出アラートシステム
   - 最適収穫タイミング推奨
   - 相関分析フレームワーク
   - モデル精度とキャリブレーション
   - Phase 3-5の計画

   **対象読者:** データサイエンティスト・アナリスト

---

## 🗂️ 外部ドキュメント参照

### /Codex/Nori/docs/ フォルダ

```
docs/
├─ INTEGRATION_LOGIC_DESIGN.md
│  └─ Tier統合戦略の詳細設計書
├─ CACHING_ERROR_HANDLING_STRATEGY.md
│  └─ キャッシング・エラー処理のベストプラクティス
├─ DATA_ACQUISITION_GUIDE.md ★ NEW
│  └─ 全8データソース取得・管理ガイド (17 KB)
└─ INTEGRATED_DATA_SCHEMA.md ★ NEW
   └─ 31列スキーマ仕様・検証ルール (24 KB)
```

---

## 🔍 クイックリファレンス

### データソース一覧

| # | ソース | Tier | 頻度 | 状態 | フェーズ |
|---|---|---|---|---|---|
| 1 | JMA天気 | 1 | 日次 | ✅ | Phase 2 |
| 2 | Kumamoto栄養塩 | 1 | 週次 | ✅ | Phase 2 |
| 3 | MLIT河川 | 1 | 日次 | ✅ | Phase 2 |
| 4 | JAXA衛星 | 2 | 8-16日 | ✅ | Phase 2 |
| 5 | JMA潮位 | 2 | 日次 | 🔧 | Phase 2 |
| 6 | JMAブイ | 2 | 日次 | 🔧 | Phase 2 |
| 7 | 過去水質 | 2 | 日次 | 🔧 | Phase 2 |
| 8 | 赤潮履歴 | 3 | Event | 🔧 | Phase 2 |
| 9 | 市場価格 | 3 | 日次 | 🔧 | Phase 2 |
| 10 | **JAFIC衛星** | **2** | **日次** | **✅** | **Phase 3b** |
| 11 | **JMA波浪予報** | **2** | **日次** | **✅** | **Phase 3b** |
| 12 | **市場価格グレード** | **3** | **日次** | **✅** | **Phase 3b** |

### スキーマ概要

```
統合データ: marine_daily_features.csv
  行数: 5,456 (11観測点 × 496日テスト期間)
  列数: 32 (Phase 3b拡張版) ⭐ NEW
  
構成:
  - JMA直接観測: 6地点 (uto, misumi, taimei, kosa, matsushima, kumamoto)
  - 距離補間: 5地点 (ohda, kawachi, kojima, matsuo, okishin)
  
列構成:
  - 時空間キー: 2列（date, station_id）
  - 水質・物理量: 10列（温度・塩分・DO・潮位など）
  - 気象: 3列（降水・日照・風速）
  - 河川: 5列（白川・緑川・坪井川）
  - 栄養塩: 2列（窒素・リン）
  - リスク・経済: 2列（赤潮フラグ・平均価格）
  - 熊本県漁業(Phase 3a): 3列（水温・塩分・DO）
  - Phase 3b拡張: 6列★（JAFIC赤潮確率・波高・波周期・グレード別価格）
  - 品質管理: 1列

データ型:
  - Date (YYYY-MM-DD)
  - Station ID (11個)
  - 30個の環境・経済指標 (float or string)
  - Kumamoto県漁業データ統合 (水温, 塩分, DO)
```

### 処理フロー（Phase 3b版）

```
08:00 JMA & MLIT 自動更新
  ↓
08:30 JAFIC/JMA波浪/市場価格 自動取得（新規 Phase 3b）
  ├─ python3 scripts/fetch_jafic_satellite.py (<1秒)
  ├─ python3 scripts/fetch_jma_wave_forecast.py (<1秒)
  └─ python3 scripts/fetch_market_prices_grade.py (<1秒)
  ↓
09:00 python3 scripts/integrate_data.py (~5秒)
     [JMA + MLIT + Kumamoto + JAFIC + 波浪 + 市場価格グレード]
  ↓
09:10 python3 scripts/predictive_pipeline.py (~10秒)
     [4つの予測モジュール実行]
  ↓
09:30 農家へ日次アラート配信（グレード別価格情報含む）
```

---

## 📖 トピック別ガイド

### 「統合データについて知りたい」

1. **Overview.md** で概要を把握
2. **DataIntegration.md** で詳細な統合ロジックを理解
3. **Schema.md** (外部doc) で31列を確認

### 「赤潮アラートの仕組みを理解したい」

1. **Architecture.md** で全体像を確認
2. **PredictiveModels.md の Phase 2B** で詳細を学習
3. **scripts/red_tide_detector.py** で実装を確認

### 「システムをセットアップしたい」

1. **Overview.md** でファイル構成を確認
2. **Operations.md** (関連doc) で運用手順を参照
3. **Troubleshooting.md** でよくある問題を確認

### 「予測精度を改善したい」

1. **PredictiveModels.md** で現在のモデルを理解
2. **Architecture.md** でシステム限界を確認
3. **PredictiveModels.md の Phase 3-5計画** で今後を学習

---

## 🎯 学習パス

### パス 1: システム理解 (初心者向け)

```
所要時間: ~30分

1. Overview.md (15分)
   └─ 何をするシステムか？

2. Architecture.md の全体図部分 (10分)
   └─ どのように動作するか？

3. DataIntegration.md の概念部分 (5分)
   └─ データはどう結合されるか？
```

### パス 2: データ処理 (データエンジニア向け)

```
所要時間: ~2時間

1. Architecture.md (30分)
   └─ システム全体を理解

2. DataIntegration.md (60分)
   └─ Tier別統合ロジックを詳細に学習

3. Schema.md (外部doc) (30分)
   └─ 31列のスキーマを完全に理解
```

### パス 3: 予測モデル (DS/ML向け)

```
所要時間: ~3時間

1. Overview.md (15分)
   └─ 背景を理解

2. PredictiveModels.md (90分)
   └─ Phase 2A-2Dを完全に理解

3. scripts/predictive_pipeline.py (30分)
   └─ 実装コードを確認

4. Architecture.md のパフォーマンス部分 (15分)
   └─ 最適化のチャンスを特定
```

### パス 4: 運用保守 (DevOps/SRE向け)

```
所要時間: ~1.5時間

1. Overview.md (15分)
   └─ システムの概要

2. Operations.md (関連doc) (45分)
   └─ 日次・定期運用フロー

3. Troubleshooting.md (関連doc) (30分)
   └─ よくある問題と対応
```

---

## 🔗 外部リンク

### データソース公式ドキュメント

| ソース | URL |
|---|---|
| JMA Data | https://www.data.jma.go.jp/ |
| MLIT Water | https://www1.river.go.jp/ |
| JAXA EarthObs | https://eorc.jaxa.jp/ |
| Kumamoto Pref | https://www.pref.kumamoto.jp/ |
| Env. Ministry | https://www.env.go.jp/ |

### コード・スクリプトリポジトリ

```
/Codex/Nori/scripts/

【中心エンジン】
├─ integrate_data.py (32列統合エンジン、Phase 3b対応)
└─ predictive_pipeline.py (4つの予測モデルパイプライン)

【Phase 3b 新規スクリプト】⭐
├─ fetch_jafic_satellite.py (JAFIC赤潮確率)
├─ fetch_jma_wave_forecast.py (JMA波浪予報)
└─ fetch_market_prices_grade.py (市場価格グレード別)

【Phase 2/3a データ取得】
├─ fetch_jma_weather.py
├─ fetch_kumamoto_nori_nutrients.py
├─ fetch_river_data.py
├─ fetch_chlorophyll_jaxa_api.py
├─ fetch_tidal_data.py
├─ fetch_jma_buoy.py
├─ fetch_red_tide_history.py
└─ fetch_market_prices.py

【ユーティリティ】
├─ generate_input_templates.py
├─ correlation_analysis.py
├─ risk_indices.py
├─ red_tide_detector.py
├─ harvest_recommender.py
└─ logs/ (実行ログ)
```

---

## ❓ よくある質問

### Q: 統合データはどこにあるか？
**A:** `/Codex/Nori/integrated_data/marine_daily_features.csv`  
**Phase 3b版:**
- サイズ: ~405 KB
- 行数: 5,456行 (11地点 × 496日)
- 列数: 32列 ⭐ (Phase 3a 26列 + Phase 3b 6列)

### Q: 予測結果はどこに出力される？
**A:** `/Codex/Nori/integrated_data/predictions/`  
- `harvest_recommendations_YYYYMMDD.csv`
- `red_tide_alerts_YYYYMMDD.csv`
- `marine_daily_features_with_risks.csv`

### Q: Phase 3bで何が追加されたか？
**A:** 3つの先進予測データソース（全6列）:
1. **JAFIC衛星赤潮確率** (0.0-1.0) - 赤潮リスク検出
2. **JMA波浪予報** (波高, 波周期) - 高波リスク検出
3. **市場価格グレード別** (A/B/C) - 経済最適化用

### Q: 処理時間はどのくらい？
**A:** エンドツーエンド ~20秒
- JAFIC/波浪/価格取得: <3秒
- データ統合: ~5秒
- 予測実行: ~10秒
- 農家通知: ~2秒
- `marine_daily_features_with_risks.csv`

### Q: 新しいデータソースを追加するには？
**A:** 
1. `fetch_newsource.py` を作成（既存パターンに従う）
2. `integrate_data.py` に `load_newsource()` を追加
3. スキーマに列を追加（31 → 32+列）

### Q: モデルの信頼度が低いのはなぜ？
**A:** 履歴データが5ヶ月のみだから (2+ 年推奨)。  
時系列が長くなるとともに精度向上します。

### Q: 赤潮アラートが多すぎる/少なすぎる場合
**A:** `red_tide_detector.py` の閾値を調整：
- 現在: 0.8 (Red) / 0.5 (Yellow)
- 感度UP: 0.7 / 0.4 に低下
- 感度DOWN: 0.9 / 0.6 に上昇

---

## 📊 実装フェーズ成果

### Phase E 成果（2026-05-11 完了）

| フェーズ | 成果 | ステータス |
|---|---|---|
| E1 | integrate_data.py 完全実装 | ✅ 完了 |
| E2 | 統合パイプラインテスト | ✅ 完了 |
| E3 | 予測モデル検証 | ✅ 完了 |
| E4 | ドキュメント作成 | ✅ 完了 |

### Phase 3a 成果（2026-05-11 完了）⭐

| フェーズ | 成果 | ステータス |
|---|---|---|
| 3a-1 | Ariake Bay 最適化 + 11地点完全カバレッジ | ✅ 完了 |
| 3a-1.5 | 地理的距離補間（Haversine + IDW） | ✅ 完了 |
| 3a-2 | スキーマ最適化 (31→26列) | ✅ 完了 |
| 3a-3 | Kumamoto漁業データ統合 | ✅ 完了 |
| 3a-4 | 統合パイプライン検証 | ✅ 完了 |

### Phase 3a-2 成果（2026-05-11 完了）⭐

| フェーズ | 成果 | ステータス |
|---|---|---|
| 3a-2a | スキーマ互換性確認（4スクリプト） | ✅ 完了 |
| 3a-2b | 予測精度検証 | ✅ 完了 |
| 3a-2c | 相関分析更新 | ✅ 完了 |
| 3a-2d | ドキュメント更新 + 知識ベース修正 | ✅ 完了 |

### 生成ファイル

Phase E:
- `integrate_data.py` (500+行)
- `marine_daily_features.csv` (2,976 × 31)
- `harvest_recommendations_*.csv`
- `red_tide_alerts_*.csv`
- 4個のドキュメント (計63 KB)

Phase 3a:
- `integrate_data.py` 修正版 (652行, 26列対応)
- `fetch_kumamoto_fishery_env.py` (新規)
- `kumamoto_fishery_env_*.csv` (合成テストデータ)
- `marine_daily_features.csv` (2,976 × 26) ⭐ 最適化版
- 2個のドキュメント (Phase3a_Optimization.md, Implementation_Summary.md)

---

## 🚀 次のステップ

### ✅ Phase 3a-2 予測モデル検証 (完了: 2026-05-11)

- [x] predictive_pipeline.py を新26列スキーマに対応
- [x] リスク指数の再計算・検証
- [x] 削除列への依存性チェック (transparency削除対応)
- [x] Kumamoto列を使用した予測改善効果測定
- [x] 11地点完全カバレッジ検証
- [x] 知識ベース更新（amita → ohda, 6地点 → 11地点）

### 短期 (2-3週間) - Phase 3b 追加データ統合

- [ ] JAFIC衛星画像データ統合（赤潮自動検出精度 +20%目標）
- [ ] JMA波浪予報データ統合（高波リスク検出）
- [ ] 市場価格データ詳細化（グレード別）
- [ ] 実際のKumamoto漁業データ取得・置き換え（カバレッジ 55% → 100%）

### 中期 (1ヶ月) - Phase 3c 本番運用準備

- [ ] 農家向けフロントエンド実装開始
- [ ] ユーザーテスト実施・フィードバック収集
- [ ] アラート配信メカニズム構築
- [ ] 本番デプロイ・日次自動更新開始

### 長期 (2ヶ月) - Phase 4-5

- [ ] Phase 4: 機械学習モデル導入（Random Forest, LSTM）
- [ ] Phase 5: マルチ地域対応（有明海以外の海苔養殖地）

---

## 📞 サポート・問い合わせ

### ドキュメント内での矛盾や不明点

→ 該当の `.md` ファイルを確認し、ナレッジベースを更新

### システム動作上の問題

→ [[Troubleshooting]] 参照、またはログを確認：
```
/Codex/Nori/scripts/logs/
```

### 新機能提案

→ [[Accomplishments]] でPhase E成果を確認し、  
次フェーズ計画を参照

---

## 📝 更新履歴

| 日付 | バージョン | 主な更新 |
|---|---|---|
| 2026-05-11 | 3.1 | **Phase 3a-2 完成** - 予測モデル検証、知識ベース更新（amita→ohda, 6地点→11地点）|
| 2026-05-11 | 3.0 | **Phase 3a 完成** - Ariake Bay + Kumamoto 最適化（31→26列、11地点完全カバレッジ）|
| 2026-05-11 | 2.0 | Phase E完成、Obsidianナレッジベース開始 |
| 2026-04-01 | 1.5 | Phase C-D実装完了 |
| 2026-02-15 | 1.0 | Phase A-B実装完了 |

---

## 🎓 推奨学習順序

```
初心者
├─ Overview.md (30分)
├─ Architecture.md - 全体図部分 (15分)
└─ 実際にスクリプト実行: python3 scripts/integrate_data.py

中級者
├─ DataIntegration.md (全文) (90分)
├─ PredictiveModels.md (60分)
└─ スクリプトコードを読む (120分)

上級者
├─ 全ドキュメント (精読) (300分)
├─ スクリプト実装詳細 (180分)
└─ 新機能実装・改善 (開放時間)
```

---

**このインデックスページを起点に、各トピックへ深掘りしてください。**

質問や改善提案は、該当ドキュメントの更新、または  
新しい `.md` ファイル追加の形でナレッジベースに統合されます。

