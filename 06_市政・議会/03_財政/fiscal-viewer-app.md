---
title: "宇土市財政戦略ビューア - 技術仕様・データスキーマ"
date: 2026-05-29
tags: [アプリケーション, 技術仕様, データスキーマ, JavaScript, JSON, 決算分析]
type: technical-spec
status: 運用中
version: 2.0.0
---

# 宇土市財政戦略ビューア - 技術仕様

## 📋 概要

**プロジェクト**: 宇土市 決算分析プラットフォーム  
**バージョン**: 2.0.0  
**実装完了**: 2026年5月25日  
**ホスト**: `/Volumes/ExtSSD/Codex/宇土市/finance-card-viewer`

---

## 🏗️ システム構成

### アーキテクチャ図

```
┌─────────────────────────────────────┐
│   ブラウザ (Chrome/Firefox/Safari)   │
├─────────────────────────────────────┤
│         index.html (134行)           │
│      app.js (1000+ 行) ⭐            │
│      styles.css (700+ 行) ⭐         │
├─────────────────────────────────────┤
│   Vanilla JavaScript (フレームワーク無)  │
├─────────────────────────────────────┤
│   consolidated-data.json (503KB)    │
│   └── 9年度分の決算・予算・監査データ  │
├─────────────────────────────────────┤
│   バックエンド (Python スクリプト)   │
│   ├── extract_cards.py              │
│   ├── extract_settlement_excel.py   │
│   ├── extract_audit_items.py        │
│   └── data_consolidation.py         │
└─────────────────────────────────────┘
```

---

## 📊 データスキーマ v2.0.0

### トップレベル構造

```json
{
  "schemaVersion": "2.0.0",
  "dataIntegrationDate": "2026-05-25T11:00:00Z",
  
  "dataset": {
    "name": "熊本県宇土市 財政分析統合データセット",
    "municipality": "宇土市",
    "prefecture": "熊本県",
    "dataSources": {
      "settlement": { "coverage": "H28-R6 (全9年度)" },
      "budget": { "coverage": "R2-R6 (5年度)" },
      "supplementaryBudget": { "coverage": "R2-R6 (5年度)" },
      "performance": { "coverage": "R4-R6 (段階的拡張予定)" }
    }
  },
  
  "unit": "千円",
  "units": {
    "amount": "千円",
    "ratio": "%",
    "index": "指数",
    "population": "人",
    "rate": "倍"
  },
  
  "cards": [
    { "era": "R6", ... },
    { "era": "R5", ... },
    // ... H28まで
  ]
}
```

### 年度別カード構造

```json
{
  "era": "R6",
  "fiscalYear": 2024,
  "yearLabel": "令和6年度",
  "file": "R6決算カード.pdf",
  "pdfFile": "pdfs/R6.pdf",
  "population": 36500,
  
  // 決算データ (必須)
  "settlement": {
    "basicMetrics": {
      "歳入総額": 22591123594,
      "歳出総額": 21992738559,
      "歳入歳出差引": 598385035,
      "実質収支": 148385035,
      "実質単年度収支": -6700000000,
      // ... 約40個の指標
    },
    "detailedSettlement": {
      "accounts": {
        "generalAccount": {
          "revenue": {
            "items": [
              {
                "sectionCode": 1,
                "sectionName": "市債",
                "itemCode": 1,
                "itemName": "市債",
                "amount": 2500000000
              },
              // ... 40個の歳入項目
            ],
            "totalRevenue": 22591123594
          },
          "expenditure": {
            "items": [
              {
                "sectionCode": 1,
                "sectionName": "議会費",
                "itemCode": 1,
                "itemName": "議会費",
                "amount": 250000000
              },
              // ... 37個の歳出項目
            ],
            "totalExpenditure": 21992738559
          }
        }
      }
    },
    "auditIssues": {
      "extractedItems": 15,
      "questions": [
        {
          "no": 1,
          "category": "一般会計",
          "title": "地方債発行額の妥当性",
          "description": "R6年度の市債発行額..."
        }
      ]
    }
  },
  
  // 予算データ (R2-R6)
  "budget": {
    "basicMetrics": {
      "歳入合計": 21500000000,
      "歳出合計": 21500000000,
      // ...
    },
    "detailedBudget": { /* 同様の構造 */ }
  },
  
  // 補正予算データ (R2-R6)
  "supplementaryBudget": {
    "amendments": [
      {
        "round": 1,
        "approvedDate": "2026-06-15",
        "type": "追加補正",
        "totalAmount": 200000000
      }
    ],
    "revisedBudget": { /* 修正後予算 */ }
  },
  
  // 成果データ (R4-R6, 将来版)
  "performance": null  // 未実装
}
```

---

## 🔧 実装された機能

### 10のビューモード

#### 1. 📈 概況 (Overview)
- **表示内容**: KPI、推移チャート、主要指標
- **データソース**: 決算カード基本指標
- **実装**: renderOverview()

#### 2. 📊 グラフ (Charts)
- **表示内容**: 6種類の詳細チャート
  1. 歳入推移（折れ線）
  2. 歳出推移（折れ線）
  3. 歳入構成（円グラフ）
  4. 歳出構成（円グラフ）
  5. 指標比較（棒グラフ）
  6. 健全性推移（複合グラフ）
- **実装**: renderCharts()
- **技術**: SVG描画

#### 3. 💰 歳入 (Revenue)
- **表示内容**: 歳入の款項別内訳
- **データソース**: Excel決算書詳細
- **実装**: renderRevenue()

#### 4. 💸 歳出 (Expenditure)
- **表示内容**: 歳出の款項別内訳
- **データソース**: Excel決算書詳細
- **実装**: renderExpenditure()

#### 5. 📋 一覧 (Table)
- **表示内容**: 全指標をテーブル表示
- **機能**: ソート、フィルタ
- **実装**: renderTable()

#### 6. 📄 原本 (Original PDF)
- **表示内容**: 決算カード原本PDF
- **実装**: renderOriginalPDF()

#### 7. **⚖️ 比較 (Comparison) ⭐ NEW**
- **表示内容**: 前年度との比較
  - 前年度値
  - 当年度値
  - 差分（絶対値）
  - 増減率（%）
- **実装**: renderComparison()

```javascript
function renderComparison() {
  const currentYear = data.cards.find(c => c.era === selectedYear);
  const previousYear = data.cards.find(c => c.era === getPreviousYear());
  
  const comparison = {
    歳入総額: {
      当年度: currentYear.settlement.basicMetrics.歳入総額,
      前年度: previousYear.settlement.basicMetrics.歳入総額,
      差分: currentYear.settlement.basicMetrics.歳入総額 - 
            previousYear.settlement.basicMetrics.歳入総額,
      増減率: (... / ...) * 100
    },
    // ... 全指標
  };
  // テーブル描画
}
```

#### 8. **🔍 詳細分析 (Detailed Analysis) ⭐ NEW**
- **表示内容**: Excel決算書の詳細内訳
  - 歳入: 款項別（40項目）
  - 歳出: 款項別（37項目）
  - 一般会計収支サマリー
- **実装**: renderDetailedAnalysis()

#### 9. **📈 統計分析 (Statistics) ⭐ NEW**
- **表示内容**: H28-R6の9年間統計
  - 平均値（Mean）
  - 最大値（Max）
  - 最小値（Min）
  - 変動係数（CV）
  - 年度別成長率（YoY Growth）
- **実装**: renderStatistics()

```javascript
function renderStatistics() {
  const metrics = data.cards.map(c => c.settlement.basicMetrics.歳入総額);
  
  const mean = metrics.reduce((a,b) => a+b) / metrics.length;
  const variance = metrics.reduce((s, m) => s + Math.pow(m - mean, 2), 0) / metrics.length;
  const cv = Math.sqrt(variance) / mean * 100;  // 変動係数
  
  return {
    mean: mean,
    max: Math.max(...metrics),
    min: Math.min(...metrics),
    cv: cv,
    growth: metrics.map((m, i) => i > 0 ? (m / metrics[i-1] - 1) * 100 : null)
  };
}
```

#### 10. **💾 エクスポート (Export) ⭐ NEW**
- **表示内容**: CSV形式でダウンロード
- **形式**: 指標×年度マトリックス
- **実装**: renderExport() + generateCsvExport()

```javascript
function generateCsvExport() {
  // ヘッダー: 指標, H28, H29, H30, R1, R2, ...
  // データ行: 歳入総額, 217.5, 226.1, 218.9, ...
  
  const csv = [
    ['指標', ...eras].join(','),
    ['歳入総額', ...revenues].join(','),
    ['歳出総額', ...expenditures].join(','),
    // ... 全指標
  ].join('\n');
  
  return csv;
}
```

---

## 💻 JavaScript実装

### app.js の主要関数 (1000+ 行)

| 関数 | 行数 | 役割 |
|------|-----|------|
| `renderComparison()` | 150 | 年度別比較 |
| `renderDetailedAnalysis()` | 200 | Excel詳細データ表示 |
| `renderStatistics()` | 180 | 統計計算・表示 |
| `renderExport()` | 100 | エクスポート画面 |
| `generateCsvExport()` | 80 | CSV形式化 |
| `applyViewVisibility()` | 100 | ビュー切り替え (拡張版) |
| その他補助関数 | 190 | ユーティリティ等 |

### 主な処理フロー

```
ページロード
    ↓
consolidated-data.json 読み込み
    ↓
年度セレクタの初期化
    ↓
デフォルトビュー (Overview) 描画
    ↓
ユーザーイベントリッスン
  - 年度変更 → 全ビュー再描画
  - ビューモード切り替え → 該当ビューのみ描画
  - エクスポートボタン → CSV生成・DL
```

---

## 🎨 CSS実装

### styles.css の構成 (700+ 行)

#### グリッド・レイアウト
```css
.view-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  // レスポンシブ: モバイル時は単列
}

@media (max-width: 768px) {
  .view-container {
    grid-template-columns: 1fr;
  }
}
```

#### ビューモード別スタイル
```css
/* 比較テーブル */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.comparison-table td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;
}

.comparison-table .positive { color: #ff6b6b; }  /* 増加 */
.comparison-table .negative { color: #228be6; }  /* 減少 */

/* 統計カード */
.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* グリッドレイアウト */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

#### 新規スタイル（v2.0.0で追加）
- `.comparison-table` - 比較テーブル
- `.stat-card` - 統計カード
- `.stat-grid` - 統計グリッド
- `.export-actions` - エクスポートセクション
- `.export-button` - ダウンロードボタン
- 合計約40行の新規CSS

---

## 📝 データパイプライン

### Python抽出スクリプト

#### 1. extract_cards.py (既存)
```python
# 決算カードPDFをパース
# 出力: JSON (構造化データ)
# カバー: H28-R6（9年度）
```

#### 2. extract_settlement_excel.py (新規)
```python
# Excel決算書から款項別データを抽出
# 対象: R2-R6年度（5年度）
# 抽出項目:
#   - 歳入: 40項目
#   - 歳出: 37項目
# 出力: JSON (詳細構造化データ)

def extract_settlement(excel_path):
    workbook = openpyxl.load_workbook(excel_path)
    
    # シート07-13を処理
    revenue_items = []
    expenditure_items = []
    
    for row in sheet.iter_rows():
        # 款コード、項コード、金額を抽出
        revenue_items.append({
            'sectionCode': section,
            'sectionName': section_name,
            'itemCode': item,
            'itemName': item_name,
            'amount': amount
        })
    
    return revenue_items, expenditure_items
```

#### 3. extract_audit_items.py (新規)
```python
# 決算審査委員会抽出項目をパース
# 対象: H28-R6（9年度分）
# ファイル形式自動検出 (Excel/PDF)
# 出力: JSON (監査項目リスト)
```

#### 4. data_consolidation.py (新規)
```python
# 複数ソースを統合
# 入力:
#   1. extract_cards.py の出力（決算カードJSON）
#   2. extract_settlement_excel.py の出力（詳細Excel)
#   3. extract_audit_items.py の出力（監査項目）
# 処理:
#   - データソース別に整合性検証
#   - スキーマv2.0.0に変換
#   - 年度別に統合
# 出力: consolidated-data.json (503KB)

def consolidate(settlement, budget, audit):
    consolidated = {
        'schemaVersion': '2.0.0',
        'cards': []
    }
    
    for era in eras:  # H28-R6
        card = {
            'era': era,
            'settlement': settlement[era],
            'budget': budget.get(era),
            'supplementaryBudget': budget_supp.get(era),
            'auditIssues': audit[era]
        }
        consolidated['cards'].append(card)
    
    return consolidated
```

---

## 🧪 テスト・検証

### 実施したテスト

#### ✅ 単体テスト
- `[x]` renderComparison() - 年度比較データ正確性
- `[x]` renderDetailedAnalysis() - Excel データマッピング
- `[x]` renderStatistics() - 統計計算の妥当性
- `[x]` generateCsvExport() - CSV形式の正確性
- `[x]` applyViewVisibility() - ビュー切り替え動作

#### ✅ 統合テスト
- `[x]` consolidated-data.json の読み込み
- `[x]` 年度セレクタとの連動
- `[x]` 複数ビューモード間の切り替え

#### ✅ データ検証
結果: **55/57 OK** (96.5% 合格)

```
検証項目例:
- [OK] H28 決算歳入歳出差引 = 10.9億円（照合値: 10.9億円）✓
- [OK] H28 決算実質収支 = 6.7億円（照合値: 6.7億円）✓
- ...
- [OK] R6 予算決算比率 = 99.3%（期待値: ±3%圏内）✓
- [WARN] H30 実質単年度収支 = 0.0億円（欠測）⚠️
- [WARN] R1 実質単年度収支 = 0.0億円（欠測）⚠️
```

---

## 🚀 デプロイ・運用

### ローカル実行

```bash
cd /Volumes/ExtSSD/Codex/宇土市/finance-card-viewer

# Webサーバー起動
python3 -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

### Vercelデプロイ (計画中)

```bash
# vercel.json に設定
{
  "buildCommand": "echo 'Static site'",
  "outputDirectory": "."
}

# デプロイコマンド
vercel deploy
```

### データ更新フロー

```bash
# 1. 新規決算データをsettlements/に配置
# 2. Python抽出スクリプト実行
python3 extract_settlement_excel.py settlements/ -o settlement.json
python3 extract_audit_items.py audit_reports/ -o audit.json

# 3. 統合処理
python3 data_consolidation.py \
  --settlement-dir ./settlements \
  --budget-dir ./budgets \
  --output consolidated-data.json \
  --validate

# 4. Webサーバー再起動
# ブラウザキャッシュクリア
```

---

## 📦 ファイル一覧

### Webアプリケーション
- `index.html` (134行) - HTML5 構造
- `app.js` (1000+ 行) - メイン処理・4つの新規rendering関数
- `styles.css` (700+ 行) - UI・スタイル（新規40行追加）

### データファイル
- `consolidated-data.json` (503KB) - 統合済みデータ（本体）
- `structured-data.json` (483KB) - 決算カードのみ（互換性用）
- `consolidated-schema.json` - スキーマ定義書

### Python処理
- `extract_cards.py` - PDF解析 (既存)
- `extract_settlement_excel.py` - Excel解析 (新規)
- `extract_audit_items.py` - 監査項目抽出 (新規)
- `data_consolidation.py` - データ統合 (新規)

### ドキュメント
- `IMPLEMENTATION_SUMMARY.md` - 実装完了レポート
- `DATA_SCHEMA.md` - v1.0.0 スキーマ定義
- `DATA_SCHEMA_MULTISOURCE.md` - v2.0.0 スキーマ定義
- `PUBLIC_FACILITIES_ANALYSIS.md` - 公共施設分析
- `VALIDATION_REPORT.md` - データ検証レポート

### PDF・資料
- `pdfs/H28.pdf` ～ `pdfs/R6.pdf` - 決算カード原本

---

## ⚠️ 既知の制限事項

1. **ブラウザ互換性**: ES6以降が必須
   - Chrome 最新版 ✅
   - Firefox 最新版 ✅
   - Safari 最新版 ✅
   - IE11以下 ❌

2. **データ更新**: 手動でPython処理を実行
   - 自動定期処理なし
   - スケジューリング未実装

3. **PDF埋め込み**: 同一オリジンのPDFのみ対応
   - CORS制限あり
   - 外部PDFは不可

4. **オフライン利用**: JavaScript実行環境必須
   - 静的サイトだが、ローカルファイルプロトコルでは動作困難

---

## 🔮 将来の拡張

### v2.1 (短期, Q3 2026)
- [ ] 監査項目の詳細表示と決算データ連動
- [ ] 国庫補助対象事業のカテゴリ別集計
- [ ] 複数年度の相関分析ダッシュボード

### v3.0 (中期, 2027年)
- [ ] リアルタイム予算執行情報の統合
- [ ] インタラクティブな施策分析機能
- [ ] モバイルアプリ化 (React Native)

### v4.0 (長期, 2028年以降)
- [ ] AI予測分析モジュール
- [ ] 複数自治体の比較機能
- [ ] データウェアハウス化

---

## 📞 メタ情報

**バージョン**: 2.0.0  
**実装完了**: 2026年5月25日  
**テスト完了**: 2026年5月27日  
**ドキュメント整備**: 2026年5月29日  

**開発者**: Claude Code  
**ステータス**: ✅ 運用中・拡張予定

