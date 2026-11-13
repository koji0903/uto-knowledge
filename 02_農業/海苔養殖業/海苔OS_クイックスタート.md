---
id: nori_os_quickstart
type: guide
title: "海苔OS (Nori OS) - クイックスタートガイド"
created: 2026-05-12
updated: 2026-05-20
status: active
tags: [nori, quickstart, deployment, tutorial]
---

# 🌊 海苔OS (Nori OS) - クイックスタートガイド

**最終更新**: 2026-05-20  
**ステータス**: ✅ 本番対応完了  
**関連フェーズ**: [[Phase4_Utomachi_Integration|Phase 4 ウトマチプラットフォーム統合]]

---

## 📍 このガイドについて

ウトマチプラットフォームに統合された「海苔養殖予測システム (Nori OS)」の使い方・セットアップ方法をまとめたクイックガイドです。

**対象者**：
- 🔧 開発者・運用チーム (セットアップ・データインポート)
- 👨‍🌾 農家ユーザー (ダッシュボード利用)
- 📊 プロジェクトマネージャー (進捗管理)

---

## ⚡ 5分で始める

### 1️⃣ ドライラン実行（テスト）

```bash
cd /Users/hijikuro/ViveCoding/utomachi_PF

# 5,456レコードをテスト検証
npm run import:nori:all:dry-run
```

**期待される出力**:
```
✓ Parsed 5456 rows from CSV
✓ [DRY-RUN] Batch 1-11: ... records validated
✅ Successfully processed: 5456 records
```

### 2️⃣ データインポート（本番）

```bash
# Firestore へデータを書き込む
npm run import:nori:all
```

実行時間: **2-3分** (ネットワーク遅延に依存)

### 3️⃣ インポート検証

```bash
npm run verify:nori
```

**期待される出力**:
```
🔍 Verifying Nori Data Import
📊 Checking nori_predictions collection...
   ✓ Total documents: 5456
🌊 Checking nori_environment_data collection...
   ✓ Total documents: 5456
✅ Status: ✅ READY FOR PRODUCTION
```

### 4️⃣ アプリケーション起動

```bash
npm run dev
```

ブラウザで開く: **`http://localhost:3000/farmer/nori/predictions`**

---

## 📚 完全なドキュメント

| ドキュメント | 用途 | 読了時間 |
|-----------|------|--------|
| **NORI_README.md** | システム概要・ファイル構成 | 15分 |
| **NORI_INTEGRATION_GUIDE.md** | 統合方法の詳細ガイド | 30分 |
| **[[Phase4_Utomachi_Integration|Phase4統合ドキュメント]]** | 実装詳細・トラブル対応 | 45分 |
| **NORI_INTEGRATION_SUMMARY.md** | 完了報告書・技術仕様 | 20分 |

---

## 🎯 実装されたコンポーネント

### 📦 バックエンド スクリプト

#### `importNoriData.ts` - CSV → Firestore インポート

```bash
# 両方のデータセットをインポート
npm run import:nori:all

# 個別インポート
npm run import:nori:predictions          # 赤潮予測のみ
npm run import:nori:environment          # 環境データのみ

# ドライラン（本番前の検証）
npm run import:nori:all:dry-run
```

**特徴**:
- ✅ バッチ書き込み: 500ドキュメント単位
- ✅ ドライラン対応: 本番前検証
- ✅ エラーハンドリング: 不正データをスキップ
- ✅ タイムスタンプ記録: 監査ログ対応

#### `verifyNoriData.ts` - データ検証

```bash
npm run verify:nori
```

確認事項:
- ✅ コレクション数 (nori_predictions, nori_environment_data)
- ✅ ドキュメント数 (5,456 × 2)
- ✅ 観測地点カバレッジ (11地点)
- ✅ 日付範囲 (2025-01-01 ～ 2026-05-11)
- ✅ サンプルデータ表示

### 🎨 フロントエンド コンポーネント

#### `NoriPredictionDashboard` - 農家向けダッシュボード

**特徴**:
- 🌊 **赤潮確度**: リアルタイム予測確度表示
- 🔴 **警告レベル**: Green (低) / Yellow (中) / Red (高)
- 📋 **推奨アクション**: OPTIMAL / MONITOR / DEFER / WAIT
- 📊 **環境データ**: 水温・塩分・市場価格
- 📈 **予測履歴**: 過去30日のトレンド
- 🤖 **モデル精度**: ロジ回帰 vs ランダムフォレスト

**使用方法**:
```tsx
import NoriPredictionDashboard from '@/components/farmer/marine/nori/NoriPredictionDashboard';

<NoriPredictionDashboard 
  stationId="kawachi"  // 観測地点ID
  maxDays={30}         // 過去日数
/>
```

---

## 🗺️ 観測地点一覧

データには以下の **11地点** が含まれています：

| 地点ID | 地名 | 地域 |
|--------|------|------|
| kawachi | 河内 | 有明海西部 |
| kojima | 小島 | 有明海中央 |
| kosa | 古佐 | 有明海東部 |
| kumamoto | 熊本 | 熊本県沿岸 |
| matsuo | 松尾 | 有明海北部 |
| matsushima | 松島 | 有明海中央 |
| misumi | 三角 | 有明海東部 |
| ohda | 大田 | 熊本県沿岸 |
| okishin | 沖新 | 有明海中央 |
| taimei | 大明 | 有明海南部 |
| uto | 宇土 | 有明海南部 |

---

## 📊 データ統計

| 項目 | 値 |
|------|-----|
| **予測データ (nori_predictions)** | 5,456ドキュメント ✅ |
| **環境データ (nori_environment_data)** | 5,456ドキュメント ✅ |
| **観測地点** | 11地点 |
| **データ期間** | 2025-01-01 ～ 2026-05-11 (496日) |
| **インポート時間** | 2-3分 |
| **ストレージ使用量** | 約10.5 MB |

### モデル精度

| モデル | AUC | 備考 |
|--------|-----|------|
| ロジスティック回帰 | 0.919 | 安定性重視 |
| ランダムフォレスト | 1.0 | 高精度 |
| **アンサンブル** | **0.95+** | **推奨** |

---

## 🔍 Firestore スキーマ

### `nori_predictions` コレクション

赤潮予測データを保存:

```json
{
  "id": "kawachi_20260512",
  "date": "2026-05-12",
  "station_id": "kawachi",
  "lr_probability": 0.42,              // ロジ確度
  "rf_probability": 0.42,              // RF確度
  "ensemble_probability": 0.42,        // アンサンブル平均 ⭐
  "alert_level": "Yellow",             // Green/Yellow/Red
  "final_recommendation": "MONITOR",   // 推奨アクション
  "confidence": 0.775,                 // 信頼度
  "factors": "...",                    // 分析因子説明
  "timestamp": <Timestamp>
}
```

### `nori_environment_data` コレクション

環境データを保存 (41列):

```json
{
  "id": "kawachi_20260512",
  "date": "2026-05-12",
  "station_id": "kawachi",
  "water_temp_mean": 18.5,             // 水温 (°C)
  "salinity_mean": 33.2,               // 塩分 (psu)
  "do_mg_l_mean": 8.5,                 // 溶存酸素 (mg/L)
  "chlorophyll": 2.1,                  // クロロフィル
  "market_price_yen_kg": 2500,         // 市場価格 (¥/kg)
  "tide_level_cm": 45,                 // 潮位
  "rainfall_mm": 5.2,                  // 降雨量
  "wind_speed": 3.5,                   // 風速
  "nutrient_n": 0.45,                  // 窒素濃度
  "nutrient_p": 0.08,                  // リン濃度
  "... (その他31列)" : "...",
  "timestamp": <Timestamp>
}
```

---

## 📝 よくある質問 (FAQ)

### Q1: インポートに失敗した。どうすればいい？

**A**: 以下の手順で対応:

1. Firestore が接続できるか確認
   ```bash
   grep NEXT_PUBLIC_FIREBASE_PROJECT_ID .env.local
   ```

2. ドライランで再検証
   ```bash
   npm run import:nori:all:dry-run
   ```

3. ログを確認
   ```bash
   npm run import:nori:all 2>&1 | tail -50
   ```

### Q2: 予測データが表示されない

**A**: Firestore セキュリティルールを確認:

```javascript
match /nori_predictions/{document=**} {
  allow read: if request.auth != null;
  allow write: if false; // 読み取り専用
}
```

### Q3: 処理が遅い

**A**: Firestore インデックスの確認・デプロイ:

```bash
firebase deploy --only firestore:indexes
```

### Q4: 別の観測地点を表示したい

**A**: stationId を変更するだけ:

```tsx
<NoriPredictionDashboard 
  stationId="misumi"  // 地点を変更
  maxDays={30}
/>
```

---

## 🚀 デプロイ (Vercel)

### 1. Push to Git

```bash
git add .
git commit -m "feat: Add Nori integration"
git push origin main
```

### 2. Vercel 自動デプロイ

Vercel が自動で本番環境にデプロイします。

### 3. 環境変数設定

Vercel Project Settings で以下を設定:

```
NEXT_PUBLIC_FIREBASE_PROJECT_ID=utomachipf
NEXT_PUBLIC_FIREBASE_API_KEY=...
```

### 4. 定期更新の設定 (オプション)

`vercel.json`:
```json
{
  "crons": [{
    "path": "/api/nori/update",
    "schedule": "0 0 * * *"
  }]
}
```

毎日午前0時にデータ更新

---

## 🔐 セキュリティ

### Firestore Security Rules (推奨)

```javascript
match /nori_predictions/{document=**} {
  allow read: if request.auth != null;
  allow write: if false; // 読み取り専用
}

match /nori_environment_data/{document=**} {
  allow read: if request.auth != null;
  allow write: if false; // 読み取り専用
}
```

### 注意点

- ✅ 個人識別情報 (PII) は含まれない
- ✅ 予測データは読み取り専用 (農家は書き込み不可)
- ✅ タイムスタンプで監査ログ実装可能

---

## 📂 ファイル構成

```
/Users/hijikuro/ViveCoding/utomachi_PF/
├── scripts/
│   ├── importNoriData.ts       ← CSV → Firestore
│   └── verifyNoriData.ts       ← データ検証
├── src/
│   ├── components/farmer/marine/nori/
│   │   └── NoriPredictionDashboard.tsx  ← ダッシュボード
│   └── app/farmer/nori/predictions/
│       └── page.tsx            ← デモページ
├── firestore.indexes.json      ← インデックス設定
└── package.json                ← npm スクリプト
```

---

## 📚 関連ドキュメント

| ドキュメント | リンク | 対象 |
|-----------|--------|------|
| **Phase 4 統合** | [[Phase4_Utomachi_Integration|詳細ガイド]] | 開発者 |
| **Phase 4 ML** | [[Phase4_ML_Integration|ML統合]] | ML エンジニア |
| **ナレッジマップ** | [[KNOWLEDGE_MAP|全体図]] | 全員 |
| **シーズン管理** | [[NORI_SEASON_DEFINITION|シーズン定義]] | 運用チーム |

---

## 🎯 次のステップ

### 短期 (1-2週間)
- [ ] 本番環境での動作確認
- [ ] セキュリティレビュー
- [ ] ユーザーテスト (農家評価)

### 中期 (1-2ヶ月)
- [ ] 定期更新の自動化
- [ ] プッシュ通知機能
- [ ] 複数地点同時表示

### 長期 (3-6ヶ月)
- [ ] 全国対応
- [ ] 予測精度向上
- [ ] リアルタイムデータ連携

---

## 📞 サポート

問題が発生した場合:

1. **このガイド** の FAQ セクションを確認
2. **詳細ドキュメント** を参照 ([[Phase4_Utomachi_Integration|Phase 4統合]])
3. **ログを確認** (`npm run import:nori:all 2>&1`)
4. **検証を実行** (`npm run verify:nori`)

---

## 📊 チェックリスト

### インストール後の確認

- [ ] ドライラン成功 (`npm run import:nori:all:dry-run`)
- [ ] 本番インポート成功 (`npm run import:nori:all`)
- [ ] 検証成功 (`npm run verify:nori`)
- [ ] アプリケーション起動 (`npm run dev`)
- [ ] ダッシュボード表示確認 (`/farmer/nori/predictions`)

### デプロイ前の確認

- [ ] Firestore インデックス設定完了
- [ ] セキュリティルール設定完了
- [ ] 環境変数設定完了
- [ ] テスト実行成功

---

**バージョン**: 1.0  
**最終更新**: 2026-05-20  
**ステータス**: ✅ Production Ready  
**関連フェーズ**: [[Phase4_Utomachi_Integration|Phase 4]]

---

## 🔗 相互リンク

← [[KNOWLEDGE_MAP|ナレッジマップに戻る]] | [[Phase4_Utomachi_Integration|Phase 4 詳細ガイドへ]] →
