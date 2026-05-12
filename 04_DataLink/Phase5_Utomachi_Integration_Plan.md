# Phase 5: Utomachi プラットフォーム統合 - 実装計画

**計画作成日:** 2026年5月12日  
**ステータス:** 📋 計画中 → 実装待機  
**目標完了日:** 2026年6月01日

---

## 🎯 Phase 5 の目標

Nori データを **Utomachi プラットフォーム** に統合し、農家向けダッシュボードを完成させる。

### 主要成果物

1. **シーズン別 UI コンポーネント**
   - Season selector dropdown
   - Season-based data filtering
   - Multiple season comparison view

2. **REST API 統合**
   - Phase 4 API エンドポイントの活用
   - Firestore との同期
   - リアルタイム データフロー

3. **農家向け ダッシュボード機能**
   - 赤潮警報（Red/Yellow/Green）
   - 収穫推奨タイミング
   - 環境データリアルタイム表示
   - 予測履歴グラフ

4. **テストと検証**
   - ユニットテスト
   - 統合テスト
   - ユーザー受け入れテスト（UAT）

---

## 📊 実装フェーズ

### フェーズ 5A: データモデルアップデート (1-2日)

#### A1. Firestore Schema 拡張

**現在のスキーマ**:
```
nori_predictions/
  └─ {station_id}_{date} (例: kawachi_20260512)
      ├─ date
      ├─ station_id
      ├─ lr_probability
      ├─ rf_probability
      ├─ ensemble_probability
      ├─ alert_level
      ├─ final_recommendation
      ├─ confidence
      └─ timestamp
```

**拡張スキーマ** (Phase 5A):
```
nori_predictions/ (新しい構造)
  └─ {station_id}_{date} (継続)
      ├─ ... (既存フィールド)
      ├─ season_id        ← NEW (例: "2025")
      ├─ period_type      ← NEW ("farming" または "off_season")
      ├─ harvest_risk     ← NEW
      ├─ market_score     ← NEW
      └─ reason           ← NEW

nori_seasons/ (新規コレクション)
  └─ 2025_farming
      ├─ season_id: "2025"
      ├─ period_type: "farming"
      ├─ start_date: "2025-09-01"
      ├─ end_date: "2026-05-31"
      ├─ station_count: 5
      ├─ prediction_count: 2784
      └─ created_at: timestamp
```

#### A2. Import Script アップデート (`importNoriData.ts`)

**変更内容**:
```typescript
// 季節情報の追加
interface NoriPredictionEnhanced extends NoriPrediction {
  season_id: string;      // "2025"
  period_type: string;    // "farming" | "off_season"
  harvest_risk?: number;  // (0.0-1.0)
  market_score?: number;  // (0.0-1.0)
  reason?: string;        // 推奨理由
}

// データ変換関数
function extractSeasonInfo(date: string): {
  season_id: string;
  period_type: string;
} {
  // 日付からシーズン情報を抽出
  // 例: 2026-05-12 → season_id: "2025", period_type: "farming"
}
```

### フェーズ 5B: UI コンポーネント アップデート (2-3日)

#### B1. NoriPredictionDashboard.tsx 拡張

**追加機能**:

1. **Season Selector**
   ```typescript
   interface SeasonOption {
     season_id: string;
     period_type: string;
     label: string;  // "2025 養殖季" など
   }
   ```

2. **Season-based Filtering**
   ```typescript
   // 既存の where クエリに season_id を追加
   const query = where("station_id", "==", stationId)
                .where("season_id", "==", selectedSeason)
   ```

3. **Multi-Season Comparison View**
   - 複数シーズンの並列表示
   - トレンド比較グラフ

#### B2. 新規コンポーネント: SeasonSelector

```typescript
interface SeasonSelectorProps {
  selectedSeason: string;
  onSeasonChange: (season: string) => void;
  availableSeasons: SeasonOption[];
}

export function SeasonSelector({
  selectedSeason,
  onSeasonChange,
  availableSeasons,
}: SeasonSelectorProps) {
  return (
    <div className="flex gap-2">
      <label>シーズン選択:</label>
      <select
        value={selectedSeason}
        onChange={(e) => onSeasonChange(e.target.value)}
      >
        {availableSeasons.map((season) => (
          <option key={season.season_id} value={season.season_id}>
            {season.label}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### フェーズ 5C: API 統合 (2日)

#### C1. Phase 4 REST API の統合

**エンドポイント活用**:
- `GET /api/v1/red_tide_forecast/{station_id}?season={season_id}` 
- `GET /api/v1/harvest_recommendation/{station_id}?season={season_id}`
- `GET /api/v1/predictions/latest?season={season_id}`

**実装方法**:
```typescript
// NoriPredictionDashboard.tsx の中で
const fetchSeasonPredictions = async (stationId: string, seasonId: string) => {
  const response = await fetch(
    `/api/v1/red_tide_forecast/${stationId}?season=${seasonId}`
  );
  const data = await response.json();
  return data;
};
```

#### C2. Firestore ↔ REST API 同期

**戦略**:
1. Firestore から最新データを取得（メイン）
2. Phase 4 API は補足データ・検証用
3. キャッシング機構を実装

### フェーズ 5D: テスト (2-3日)

#### D1. ユニットテスト

```typescript
describe("NoriPredictionDashboard with Seasons", () => {
  test("renders season selector", () => { ... });
  test("updates predictions on season change", () => { ... });
  test("displays correct data for selected season", () => { ... });
});
```

#### D2. 統合テスト

- Firestore データの正確性
- API フォールバック動作
- エラーハンドリング

#### D3. ユーザー受け入れテスト（UAT）

対象:
- 農家ユーザー（3-5名）
- シーズン別表示の使いやすさ確認
- 推奨の正確性確認

### フェーズ 5E: デプロイ・ドキュメント (1-2日)

#### E1. デプロイメント

```bash
# Utomachi プラットフォームの更新
npm run build
npm run deploy

# Firestore マイグレーション（必要に応じて）
node scripts/migrateSeasonData.ts
```

#### E2. ドキュメント

- ユーザーガイド（農家向け）
- API ドキュメント更新
- トラブルシューティングガイド

---

## 📈 実装タイムライン

| フェーズ | タスク | 期間 | 完了予定 |
|---------|------|------|---------|
| **5A** | データモデルアップデート | 1-2日 | 2026-05-13 |
| **5B** | UI コンポーネント拡張 | 2-3日 | 2026-05-15 |
| **5C** | API 統合 | 2日 | 2026-05-17 |
| **5D** | テスト | 2-3日 | 2026-05-20 |
| **5E** | デプロイ・ドキュメント | 1-2日 | 2026-05-22 |
| | **Phase 5 合計** | **8-13日** | **2026-05-22** |

**推奨**: 2026-06-01 までに完了

---

## 🔧 技術的詳細

### Firestore マイグレーション スクリプト

```typescript
// migrateSeasonData.ts
async function addSeasonInfoToPredictions() {
  const batch = db.batch();
  const predictionsRef = collection(db, "nori_predictions");
  const snapshot = await getDocs(predictionsRef);

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    const seasonInfo = extractSeasonInfo(data.date);
    
    batch.update(doc.ref, {
      season_id: seasonInfo.season_id,
      period_type: seasonInfo.period_type,
    });
  });

  await batch.commit();
  console.log("Migration completed");
}
```

### コンポーネント構造

```
NoriPredictionDashboard/
├─ SeasonSelector (新規)
├─ LatestPredictionCard (既存、season-aware)
├─ PredictionHistory (既存、season-aware)
├─ EnvironmentData (既存、season-aware)
└─ ModelEnsembleInfo (既存、season-aware)
```

---

## ✅ チェックリスト

### Phase 5A: データモデル
- [ ] Firestore スキーマ拡張設計完了
- [ ] importNoriData.ts アップデート実装
- [ ] マイグレーション スクリプト実装
- [ ] テストデータでの動作確認

### Phase 5B: UI コンポーネント
- [ ] SeasonSelector コンポーネント実装
- [ ] NoriPredictionDashboard 更新
- [ ] Multi-season comparison view 実装
- [ ] スタイリング完成

### Phase 5C: API 統合
- [ ] Phase 4 API エンドポイント連携確認
- [ ] フォールバック機構実装
- [ ] キャッシング機構実装
- [ ] エラーハンドリング

### Phase 5D: テスト
- [ ] ユニットテスト実装
- [ ] 統合テスト実施
- [ ] UAT 準備・実施
- [ ] バグ修正

### Phase 5E: デプロイ
- [ ] ビルド確認
- [ ] ステージング環境テスト
- [ ] 本番環境デプロイ
- [ ] ドキュメント完成

---

## 🚀 成功基準

✅ **Phase 5完了時**:

1. **データ層**
   - [ ] Firestore に season_id, period_type フィールドが追加
   - [ ] マイグレーション完了（既存データの97%以上カバー）

2. **UI層**
   - [ ] Season selector が機能している
   - [ ] シーズン変更時にデータが更新される
   - [ ] 複数シーズン比較表示が可能

3. **統合層**
   - [ ] Phase 4 REST API と連携動作
   - [ ] リアルタイム データフロー確認
   - [ ] エラーハンドリング機構

4. **品質**
   - [ ] テストカバレッジ > 80%
   - [ ] UAT で農家から「使いやすい」評価
   - [ ] ドキュメント完成

---

## 📁 成果物

### 生成されるファイル

```
/Users/hijikuro/ViveCoding/utomachi_PF/

src/
├── components/farmer/marine/nori/
│   ├── NoriPredictionDashboard.tsx (更新) ← season-aware
│   ├── SeasonSelector.tsx (新規)
│   └── ... (その他コンポーネント)
│
├── lib/nori/
│   ├── seasonUtils.ts (新規)  ← season 計算ロジック
│   └── api.ts (新規)          ← API 統合層
│
└── app/farmer/nori/
    └── predictions/
        └── page.tsx (更新)

scripts/
├── importNoriData.ts (更新)
├── migrateSeasonData.ts (新規)
└── verifyNoriData.ts (更新)

__tests__/
└── components/nori/
    ├── NoriPredictionDashboard.test.tsx (新規)
    ├── SeasonSelector.test.tsx (新規)
    └── ... (その他テスト)

/Users/hijikuro/workspace/uto-knowledge/04_DataLink/
├── Phase5_Utomachi_Integration_Plan.md (本ファイル)
├── Phase5_Implementation_Status.md (更新予定)
└── Phase5_Deployment_Guide.md (作成予定)
```

---

## 📞 関連リソース

### Phase 4 成果物との連携

- **Phase 4 REST API**: `http://localhost:8000/api/v1/`
- **Phase 4 ML モデル**: `red_tide_models.pkl` (Firestore との同期)
- **Phase 4 データ**: `/Users/hijikuro/Codex/Nori/results/` (CSV/JSON)

### Utomachi プラットフォーム既存機能

- **Firebase**: Auth, Firestore, Storage
- **Next.js**: App Router, Server Components
- **UI Framework**: Tailwind CSS
- **状態管理**: React Hooks + Context (予定)

---

## 🎓 学習リソース

### Firestore ベストプラクティス
- Subcollection vs. array fields
- Indexing strategy for season queries
- Batch operations

### React パターン
- Custom hooks for season management
- Error boundaries
- Suspense integration

---

## 次のステップ

**即座に実施**:
1. Phase 5A のデータモデル設計確認
2. Firestore スキーマ変更の検討
3. マイグレーション戦略の策定

**Phase 5 開始時**:
1. importNoriData.ts の更新実装
2. UI コンポーネントの開発
3. テスト環境でのテスト

---

**計画作成日**: 2026年5月12日  
**計画者**: Claude (AI Assistant)  
**ステータス**: 📋 計画完了 → 実装準備中

---

**次のマイルストーン**: Phase 5A データモデルアップデート（2026年05月13日 開始予定）

