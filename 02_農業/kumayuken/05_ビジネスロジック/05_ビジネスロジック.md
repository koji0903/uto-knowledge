---
tags: [kumayuken, business-logic, calculation]
created: 2026-05-13
---

# AgriOS - ビジネスロジック・計算規則

## 帳票管理ポータルのワークフロー

```
1. マスタ整備
   ↓
2. 明細入力（個別またはインポート）
   ↓
3. 自動計算（旅費、源泉所得税、支払額）
   ↓
4. 帳票発行（集計表 / 明細一覧）
   ↓
5. 確定・出力（PDF / Excel）
```

---

## 1. 旅費の自動計算ロジック

### 計算基準

経費明細入力時に自動参照される値：
- **会員の基準距離** (`members.distance`)
- **旅費単価** (`travelExpenses.amount`)

### 計算式

```
旅費 = 基準距離(km) × 単価(円/km) × 回数
```

### 実装フロー

```typescript
// 1. 経費明細フォームで会員を選択
const memberId = form.values.memberId;

// 2. 会員マスタから距離を取得
const member = await MemberService.getById(memberId);
const baseDistance = member.distance;

// 3. 旅費交通費マスタから単価を取得
const travelExpense = await TravelExpenseService.getByDescription("交通費（自家用車）");
const unitPrice = travelExpense.amount;  // 22円/km

// 4. 初期値を自動入力（ユーザーが調整可能）
const initialTransport = baseDistance * unitPrice;
form.setFieldValue('transportAmount', initialTransport);
```

### 高速料金の扱い

- `highwayTotal` は手動入力
- システムは自動参照しない（地域変動が大きいため）
- ユーザーが領収書から入力

---

## 2. 源泉徴収税（源泉所得税）の計算

### 適用ルール

- **デフォルト**: 経費合計 × 10.21%
- **オフ可能**: フラグで無視できる（契約形態による）

### 計算式

```
withholding_tax = expense_total × withholding_rate

ここで:
  expense_total = materialFee + travelAllowance + transportAmount + highwayTotal
  withholding_rate = commonSettings.withholding_rate (= 0.1021)
```

### 実装例

```typescript
const expenseTotal = 
  materialFee + 
  travelAllowance + 
  transportAmount + 
  highwayTotal;

const withholdingRate = await CommonSettingsService.getWithholdingRate();
const withholdingTax = Math.floor(expenseTotal * withholdingRate);

// 支払額 = 経費 - 源泉徴収
const paymentAmount = expenseTotal - withholdingTax;
```

### 税率が変更された場合

1. `commonSettings.withholding_rate` を更新
2. 既存の `expenseDetails` は変更されない（過去帳票の不変性）
3. 新規入力分から新税率が適用

---

## 3. 差引支払額の計算

### 計算式

```
payment_amount = (
  materialFee + 
  travelAllowance + 
  transportAmount + 
  highwayTotal
) - withholdingTax
```

### リアルタイム更新

フロントエンドでは入力変更時に即座に計算：

```typescript
watch(
  [materialFee, travelAllowance, transportAmount, highwayTotal],
  (newVals) => {
    const total = newVals.reduce((a, b) => a + b, 0);
    const tax = Math.floor(total * 0.1021);
    setPaymentAmount(total - tax);
  }
);
```

---

## 4. 帳票生成の計算ロジック

### 帳票の種類と集計ルール

#### 4.1 支払一覧表 (`expense-summary`)

**集計単位**: 会員ごと × 期間

```
Report Item = {
  memberName: string,
  materialFee: sum,              // その会員の期間内合計
  travelAllowance: sum,
  transportAmount: sum,
  highwayTotal: sum,
  expenseTotal: sum,
  withholdingTax: sum,
  paymentAmount: sum,            // 銀行振込額
  bankAccount: {...}             // 振込先（スナップショット）
}
```

**用途**: 給与管理システムへのデータ連携、銀行振込一括処理

#### 4.2 経費明細一覧 (`expense-detail-list`)

**集計単位**: 全トランザクション（1件ずつ出力）

**用途**: 監査証跡、検査対応

#### 4.3 請求書等一覧 (`invoice-detail-list`)

**集計単位**: 請求先ごと × 期間

**用途**: 買掛金管理、資金計画

---

## 5. データ不変性の原則

### スナップショット保存

帳票発行時に、当時の情報をコピーして保存：

```typescript
interface ReportItem {
  // === スナップショット情報（将来の参照用） ===
  memberName: string;            // 当時の氏名
  bankAccount: BankAccount;      // 当時の振込先
  
  // === 金額情報（実績値） ===
  materialFee: number;
  travelAllowance: number;
  transportAmount: number;
  highwayTotal: number;
  expenseTotal: number;
  withholdingTax: number;
  paymentAmount: number;
}
```

### なぜ必要か？

1. **監査対応**: 過去の帳票内容を正確に再現可能
2. **マスタ更新の影響を回避**: 会員の口座が変更されても古い帳票は変わらない
3. **法務上の要件**: 支払証跡として信頼性を確保

---

## 6. 振込手数料の計算

### 請求明細での扱い

```typescript
interface InvoiceDetail {
  amount: number;                // 請求額（税抜き）
  amountTaxIncl: number;         // 消費税込金額
  transferFee: number;           // 振込手数料（別途加算される場合）
  
  // 最終支払額 = amountTaxIncl + transferFee
  paymentAmount: number;
}
```

### 消費税区分

```typescript
type TaxCategory = 
  | 'taxable'     // 消費税課税対象
  | 'tax-exempt'; // 消費税非課税
```

---

## 7. 複合計算シナリオ

### シナリオ 1: 複数回の出張を1つの経費明細に集約

会員 A が同一月内に3回出張した場合：

```
materialFee:        10,000円（講師料）
travelAllowance:    15,000円（日帰り × 3回 = 5,000 × 3）
transportAmount:    2,970円（距離 135km × 22円/km）
highwayTotal:       3,000円（高速料金3回分）
─────────────────────
expenseTotal:       30,970円

withholdingTax:     3,161円（30,970 × 10.21%）
─────────────────────
paymentAmount:      27,809円（銀行振込額）
```

---

## 8. バリデーションと制約

### 必須チェック

```typescript
const validate = (detail: ExpenseDetail) => {
  if (!detail.memberId) throw Error("支払対象者は必須");
  if (detail.expenseTotal < 0) throw Error("経費は負の数はNG");
  if (detail.withholdingTax < 0) throw Error("源泉所得税の計算エラー");
};
```

### 金額の丸め

```typescript
// 源泉所得税は円未満を切り捨て
withholdingTax = Math.floor(expenseTotal * withholdingRate);

// 支払額は自動計算（切り上げなし）
paymentAmount = expenseTotal - withholdingTax;
```

---

## 9. 拡張予定の計算ロジック

### AI自動集計
- 複数の経費明細から確定申告データを自動生成
- 勘定科目の分類を AI が学習・提案

### 出荷予測
- 過去12ヶ月の出荷データから季節パターンを検出
- 線形回帰で来月の出荷量を予測

---
## 関連ドキュメント

- [[../Masters/04-Master-Definition|マスタデータ詳細]] - マスタデータ
- [[../DataModel/03-Data-Model|データモデル]] - データモデル
- [[../Implementation/06-Implementation-Guide|実装ガイドライン]] - コード実装パターン
- [[../index|ナレッジベース索引]] - 全体INDEX
