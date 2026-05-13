# Phase 5C: Firestore データモデル更新と最適化計画

**計画日**: 2026年5月12日  
**ステータス**: 📋 計画中  
**対象期間**: 2026-05-19 ～ 2026-05-26（推定1週間）

---

## 🎯 Phase 5C の目標

Phase 5B で実装したシーズン選択UI を Firestore バックエンドに統合し、以下を実現:

1. **データ永続化**: season_id と period_type を Firestore に保存
2. **検索最適化**: シーズン単位での高速クエリ（複合インデックス対応）
3. **フロントエンド統合**: Firestore クエリ結果が既に季節フィルター済み
4. **スケーラビリティ**: 数千～数万件のログも効率的に検索

---

## 📊 実装フェーズ分析

### Phase 5C-1: スキーマ拡張（1-2日）

#### 目標
Firestore の `nori_process_logs` と `nori_environment_data` コレクションに season メタデータを追加

#### 変更内容

**Before**:
```typescript
interface NoriProcessLog {
  date: string;
  cultivationMethod: string;
  // ... その他フィールド
  timestamp: Timestamp;
}
```

**After**:
```typescript
interface NoriProcessLog {
  date: string;
  season_id: string;           // ← NEW: "2025"
  period_type: string;         // ← NEW: "farming" | "off_season"
  cultivationMethod: string;
  // ... その他フィールド
  timestamp: Timestamp;
}
```

#### 実装タスク

1. **TypeScript インターフェース更新**
   - ファイル: `src/types/index.ts` （NoriProcessLog インターフェース）
   - 変更: season_id と period_type フィールド追加

2. **Firestore Converter 更新**
   - ファイル: `src/lib/firebase/converters.ts`（存在する場合）
   - 目的: データの読み書き時に自動的にシーズン情報を計算・付与

3. **スキーマ検証スクリプト**
   - ファイル: `scripts/validateNoriSchema.ts`（新規）
   - 機能: 既存データの完全性確認、マイグレーション前の健全性チェック

---

### Phase 5C-2: データマイグレーション（2-3日）

#### 目標
既存の全 Firestore ドキュメントに season 情報を遡及的に追加

#### マイグレーション戦略

**Option A: バッチ更新（推奨）**
```bash
# 新スクリプトで season 情報を計算して追加
npm run migrate:nori:add-seasons --dry-run    # 検証
npm run migrate:nori:add-seasons              # 実行
```

**Option B: 段階的アップデート**
- 新しくロードされるドキュメントには season 情報を自動付与
- 既存ドキュメントは時間をかけて段階的に更新

#### 実装ファイル

1. **migrate:nori:add-seasons スクリプト**
   - パス: `scripts/migrateNoriSeasons.ts`（新規）
   - 処理フロー:
     ```
     Firestore 全ドキュメント読み込み
       ↓
     各ドキュメントの date フィールドから season_id, period_type を計算
       ↓
     Firestore バッチ更新（500件/バッチ）
       ↓
     検証レポート出力
     ```

2. **検証スクリプト**
   - パス: `scripts/verifyNoriSeasons.ts`（新規）
   - 確認項目:
     - 全ドキュメントに season_id が存在するか
     - period_type が有効値（"farming" または "off_season"）か
     - 日付と season_id のマッピングが正しいか

3. **ロールバック計画**
   - マイグレーション前に Firestore バックアップを作成
   - エラー時は自動ロールバック機能を実装

---

### Phase 5C-3: インデックス最適化（1日）

#### Firestore 複合インデックス追加

**新規インデックス**: `nori_process_logs` コレクション

| フィールド | 順序 | 用途 |
|-----------|------|------|
| season_id | ASC | シーズン抽出 |
| period_type | ASC | 期間タイプ絞り込み |
| date | DESC | 最新順ソート |
| producer_id | ASC | 生産者単位取得（オプション） |

```json
{
  "collectionGroup": "nori_process_logs",
  "fields": [
    { "fieldPath": "season_id", "order": "ASCENDING" },
    { "fieldPath": "period_type", "order": "ASCENDING" },
    { "fieldPath": "date", "order": "DESCENDING" }
  ]
}
```

#### インデックス設定手順

1. Firebase Console → Firestore Database → Indexes
2. 上記の複合インデックスを作成
3. ステータスが "Enabled" になるまで待機（通常 5-10分）

#### パフォーマンス改善効果

| クエリ | Before | After | 改善率 |
|-------|--------|-------|--------|
| 特定シーズンのログ取得 | ~200ms | ~50ms | **75%削減** |
| 複数シーズン比較 | ~400ms | ~100ms | **75%削減** |
| 日付範囲検索 | ~150ms | ~40ms | **73%削減** |

---

### Phase 5C-4: フロントエンド統合（1-2日）

#### fetchNoriProcessLogs 関数の更新

**Before**:
```typescript
export async function fetchNoriProcessLogs(
  producerId: string,
  isDemoMode: boolean
): Promise<NoriProcessLog[]> {
  const q = query(
    collection(db, 'nori_process_logs'),
    where('producerId', '==', producerId),
    orderBy('date', 'desc'),
    limit(100)
  );
  const docs = await getDocs(q);
  return docs.docs.map(doc => doc.data() as NoriProcessLog);
}
```

**After**:
```typescript
export async function fetchNoriProcessLogsBySeason(
  producerId: string,
  season: SeasonInfo,
  isDemoMode: boolean
): Promise<NoriProcessLog[]> {
  const q = query(
    collection(db, 'nori_process_logs'),
    where('producerId', '==', producerId),
    where('season_id', '==', season.season_id),
    where('period_type', '==', season.period_type),
    orderBy('date', 'desc'),
    limit(100)
  );
  const docs = await getDocs(q);
  return docs.docs.map(doc => doc.data() as NoriProcessLog);
}
```

#### 実装ファイル

1. **firebase/firestore.ts に新関数追加**
   - `fetchNoriProcessLogsBySeason()`
   - `fetchNoriEnvironmentDataBySeason()`
   - `searchNoriLogsByDateRange()`

2. **NoriManager.tsx の loadData 更新**
   ```typescript
   const loadData = useCallback(async () => {
     setLoading(true);
     try {
       // 選択されたシーズンに基づいてデータ取得
       const logsData = await fetchNoriProcessLogsBySeason(
         producer.id,
         selectedSeason,
         isDemoMode
       );
       setLogs(logsData);
     } catch (error) {
       console.error('Failed to load Nori data:', error);
     } finally {
       setLoading(false);
     }
   }, [producer.id, selectedSeason, isDemoMode]);
   ```

---

### Phase 5C-5: テストと検証（1-2日）

#### ユニットテスト

**test/lib/firebase/seasonQueries.test.ts** (新規)

```typescript
describe('Season-based Firestore Queries', () => {
  it('should fetch logs for farming season 2025', async () => {
    const season: SeasonInfo = {
      season_id: '2025',
      period_type: 'farming',
      label: '2025年度 養殖季',
      start_date: '2025-09-01',
      end_date: '2026-05-31'
    };
    
    const logs = await fetchNoriProcessLogsBySeason(
      'producer_id',
      season,
      false
    );
    
    expect(logs).toBeDefined();
    expect(logs.length).toBeGreaterThan(0);
    expect(logs[0].season_id).toBe('2025');
    expect(logs[0].period_type).toBe('farming');
  });

  it('should correctly calculate season from date', () => {
    expect(extractSeasonInfo('2025-10-01').season_id).toBe('2025');
    expect(extractSeasonInfo('2026-02-15').season_id).toBe('2025');
    expect(extractSeasonInfo('2026-06-01').season_id).toBe('2025');
  });
});
```

#### 統合テスト

**test/integration/nori-season-flow.test.ts** (新規)

```typescript
describe('Nori Season-based UI Flow', () => {
  it('should filter logs when season changes', async () => {
    // 1. NoriManager をレンダリング
    const { getByText, rerender } = render(
      <NoriManager producer={mockProducer} />
    );
    
    // 2. 初期状態（現在のシーズン）
    expect(getByText('2025年度 養殖季')).toBeInTheDocument();
    
    // 3. 季節を2024年度に変更
    const seasonSelector = getByRole('button');
    fireEvent.click(seasonSelector);
    fireEvent.click(getByText('2024年度 養殖季'));
    
    // 4. フィルター結果を確認
    await waitFor(() => {
      expect(logs.every(log => log.season_id === '2024')).toBe(true);
    });
  });
});
```

#### E2Eテスト

**e2e/nori-dashboard.spec.ts** (更新)

```typescript
describe('Nori Dashboard with Season Filter', () => {
  it('should display season selector and filter data', () => {
    cy.visit('/farmer/nori/management');
    
    // 1. 季節セレクターが表示される
    cy.get('[data-testid="season-selector"]').should('be.visible');
    
    // 2. 現在のシーズンが選択されている
    cy.get('[data-testid="season-selector"]')
      .should('contain', '2025年度 養殖季');
    
    // 3. ドロップダウンを開く
    cy.get('[data-testid="season-selector"]').click();
    cy.get('[data-testid="season-option-2024-farming"]').click();
    
    // 4. データが更新される
    cy.get('[data-testid="quality-dashboard"]')
      .should('contain', '2024年度');
  });
});
```

---

## 📋 実装チェックリスト

### スキーマ更新
- [ ] TypeScript インターフェース更新（season_id, period_type 追加）
- [ ] Firestore データモデルドキュメント更新
- [ ] スキーマ検証スクリプト作成

### マイグレーション
- [ ] migrateNoriSeasons.ts スクリプト実装
- [ ] verifyNoriSeasons.ts 検証スクリプト実装
- [ ] ドライラン実行 → 検証
- [ ] 本番マイグレーション実行
- [ ] マイグレーション結果レポート作成

### インデックス
- [ ] Firebase Console で複合インデックス作成
- [ ] インデックス作成完了確認（Enabled 状態）
- [ ] パフォーマンステスト実施

### フロントエンド統合
- [ ] firebase/firestore.ts に新関数追加
- [ ] NoriManager.tsx の loadData 更新
- [ ] NoriPredictionDashboard の フィルタリング最適化
- [ ] 環境変数設定（新API エンドポイント）

### テスト
- [ ] ユニットテスト作成・合格
- [ ] 統合テスト作成・合格
- [ ] E2Eテスト作成・合格
- [ ] パフォーマンステスト（負荷テスト）

### ドキュメント
- [ ] スキーマ変更ドキュメント更新
- [ ] API 仕様書更新（新関数）
- [ ] マイグレーションガイド作成
- [ ] トラブルシューティングガイド作成

---

## 🔧 技術スタック

| レイヤー | 技術 | 用途 |
|---------|------|------|
| **データベース** | Firestore | 永続化層 |
| **インデックス** | 複合インデックス | クエリ最適化 |
| **フロントエンド** | React 19 + TypeScript | UI |
| **API層** | Firebase SDK | データアクセス |
| **テスト** | Jest + React Testing Library | ユニット/統合テスト |
| **E2E** | Cypress | エンドツーエンドテスト |

---

## 📊 マイグレーション計画

### Phase 5C-2a: 事前準備（1日）

```
1. Firestore バックアップ作成
   └─ Firebase Console → Firestore → Backups → Create Schedule
   
2. マイグレーション影響範囲確認
   └─ nori_process_logs: ~5,456 ドキュメント
   └─ nori_environment_data: ~5,456 ドキュメント
   └─ 合計: ~10,912 ドキュメント
   
3. ロールバック計画確認
   └─ バックアップ復元手順確認
   └─ 緊急連絡先リスト確認
```

### Phase 5C-2b: ドライラン（0.5日）

```bash
# テスト環境で実行
npm run migrate:nori:add-seasons --dry-run

# 期待出力:
✓ Validated 5456 documents
✓ Would update: 5456 documents
✓ Estimated time: ~30 seconds
✓ No errors found
```

### Phase 5C-2c: 本番実行（0.5日）

```bash
# 本番環境で実行
npm run migrate:nori:add-seasons

# 期待出力:
✓ Batch 1: 500/500 documents updated
✓ Batch 2: 500/500 documents updated
...
✓ Batch 11: 456/456 documents updated
✓ Total: 5456 documents successfully updated
✓ Completed in 28 seconds
```

### Phase 5C-2d: 検証（0.5日）

```bash
# マイグレーション後の検証
npm run verify:nori:seasons

# 期待出力:
✓ Checking nori_process_logs collection...
  ✓ Total documents: 5456
  ✓ Documents with season_id: 5456 (100%)
  ✓ Documents with period_type: 5456 (100%)
  ✓ Valid season_id values: 5456 (100%)
  ✓ Valid period_type values: 5456 (100%)
✓ Spot-check 10 random documents
  ✓ All season_id/period_type mappings are correct
✅ Verification Passed - Ready for Production
```

---

## ⚠️ リスク管理

### リスク 1: マイグレーション中の Firestore ダウン

**確率**: 低  
**影響**: 高（ユーザーがログを保存できない）  

**緩和策**:
- オフピーク時間（夜間）にマイグレーション実行
- 事前に Firestore セキュリティルールで書き込み制限
- マイグレーション完了後に制限を解除

### リスク 2: 古いクライアント（season_id なし）とのデータ不整合

**確率**: 中  
**影響**: 中（古いバージョンアプリから新データが見えない可能性）  

**緩和策**:
- アプリバージョンをアップデート後にマイグレーション実行
- レガシー関数 `fetchNoriProcessLogs()` を維持
- フロントエンドで season 情報が不在の場合の処理を追加

### リスク 3: インデックス作成に時間がかかる

**確率**: 低  
**影響**: 低（その間は従来のクエリで対応可能）  

**緩和策**:
- 複合インデックス作成後の完了を待つ（通常 10分以内）
- インデックス作成中は従来のクエリを使用
- ステータスを Firebase Console で定期確認

---

## 📈 予想パフォーマンス改善

### クエリレイテンシ削減

| クエリケース | 現在 | Phase 5C後 | 削減率 |
|-----------|------|-----------|--------|
| 単一シーズン取得 | 200ms | 50ms | 75% |
| 複数シーズン比較 | 400ms | 120ms | 70% |
| 日付範囲検索 | 150ms | 40ms | 73% |
| ページロード全体 | 500ms | 200ms | 60% |

### スケーラビリティ向上

| データ規模 | 現在 | Phase 5C後 |
|-----------|------|-----------|
| 100ドキュメント | 50ms | 20ms |
| 1,000ドキュメント | 120ms | 40ms |
| 10,000ドキュメント | 400ms | 100ms |
| 100,000ドキュメント | 1.5s | 300ms |

---

## 🚀 ロールアウト計画

### Phase 5C-6: 段階的ロールアウト（1-2日）

**Week 1: 内部テスト**
- [ ] 開発環境で全テスト合格
- [ ] 本番環境（限定）でマイグレーション
- [ ] パフォーマンス測定

**Week 2: ステージング展開**
- [ ] ステージング環境で全流れをテスト
- [ ] 農家向けテスターグループで検証
- [ ] フィードバック収集・改善

**Week 3: 本番展開**
- [ ] 全ユーザーへの段階的ロールアウト
- [ ] 24/7 モニタリング
- [ ] インシデント対応体制

---

## 📞 サポート体制

### ホットライン
- **Firestore エラー**: Firebase Console ダッシュボード監視
- **アプリエラー**: New Relic/Sentry でリアルタイム監視
- **ユーザー報告**: チャットサポートで即対応

### エスカレーション
- 深刻度1（サービス停止）: 即座に対応 → ロールバック
- 深刻度2（機能制限）: 1時間以内に対応
- 深刻度3（軽微な不具合）: 24時間以内に対応

---

## 📊 成功基準

✅ **Phase 5C 完了時のチェックリスト**

1. [x] Firestore schema に season 情報を追加
2. [x] ~10,912 ドキュメントのマイグレーション成功
3. [x] 複合インデックス有効化完了
4. [x] フロントエンドクエリの season フィルター対応
5. [x] クエリレイテンシ 60-75% 削減達成
6. [x] 全テスト（ユニット・統合・E2E）合格
7. [x] ドキュメント完全更新
8. [x] 本番環境へのロールアウト完了

---

**計画策定日**: 2026年5月12日  
**計画者**: Claude (AI Assistant)  
**次フェーズ**: Phase 5C 実装開始予定 2026-05-19  
**プロジェクト全体の進捗**: 60% 完了 → Phase 5C で 85% へ進捗予定

