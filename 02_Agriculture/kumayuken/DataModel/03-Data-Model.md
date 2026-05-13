---
tags: [kumayuken, database, firestore]
created: 2026-05-13
---

# AgriOS - データモデル (Firestore 構成)

## Firestore コレクション一覧

| コレクション | 説明 | 主なフィールド |
|---|---|---|
| `users` | ログインユーザー情報 | name, email, role, deptId |
| `members` | 組合員マスタ | name, adminNo, positions, distance, bankAccount |
| `vendors` | 取引先マスタ | name, code |
| `expenseDetails` | 経費明細 | date, memberId, amount, categoryId |
| `invoiceDetails` | 請求明細 | date, amount, memberId |
| `todos` | タスク・要望管理 | title, type, status, priority, assignedTo |
| `departments` | 部門（支部・班）マスタ | name, code |
| `basicItems` | 基本項目マスタ（勘定科目） | name |
| `units` | 単位マスタ | name |
| `expenseItems` | 費目テンプレート | managementNumber, departmentId, basicItemId, description |
| `travelExpenses` | 旅費交通費単価設定 | description, amount, remarks |
| `commonSettings` | システム全体設定 | transport_rate, withholding_rate, system_name |
| `reports` | 生成済みレポート | title, type, data, createdAt |

## 詳細スキーマ

### 1. users - ユーザー情報

```typescript
interface User {
  id: string;                    // ドキュメントID = email
  name: string;                  // ユーザー名
  email: string;                 // メールアドレス
  role: 'admin' | 'manager' | 'user';
  deptId: string;                // 所属部門ID
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 2. members - 組合員マスタ

```typescript
interface Member {
  id: string;
  name: string;                  // 氏名
  furigana: string;              // フリガナ（ソート用）
  adminNo: string;               // 管理番号（一意）
  positions: string[];           // 役職配列（監事、理事、受入農家等）
  distance: number;              // 旅費計算の基準距離 (km)
  carType: 'normal' | 'light';   // 普通車 / 軽
  bankAccount: {
    bank: string;                // 銀行名
    branch: string;              // 支店名
    type: 'savings' | 'checking'; // 口座種別
    number: string;              // 口座番号
    holder: string;              // 名義
  };
  invoiceNo: string;             // インボイス登録番号
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 3. vendors - 取引先マスタ

```typescript
interface Vendor {
  id: string;
  name: string;                  // 取引先名称
  code: string;                  // 取引先コード
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 4. expenseDetails - 経費明細

```typescript
interface ExpenseDetail {
  id: string;
  date: Timestamp;               // 支払日
  memberId: string;              // 支払対象者（会員マスタ参照）
  memberSnapshot: {              // スナップショット（将来の参照用）
    name: string;
    bankAccount: Member['bankAccount'];
  };
  
  // 経費内訳
  materialFee: number;           // 資料作成代（講師料等）
  travelAllowance: number;       // 出張手当（日当）
  transportAmount: number;       // 交通費（距離×回数×単価）
  highwayTotal: number;          // 高速料金合計
  
  // 自動計算項目
  expenseTotal: number;          // 経費合計
  withholdingTax: number;        // 源泉所得税 (経費合計 × 10.21%)
  paymentAmount: number;         // 差引支払額
  
  categoryId: string;            // 費目カテゴリー（expenseItems参照）
  remarks: string;               // 摘要
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 5. invoiceDetails - 請求明細

```typescript
interface InvoiceDetail {
  id: string;
  date: Timestamp;               // 請求日
  vendorId: string;              // 取引先（vendorsマスタ参照）
  vendorSnapshot: {              // スナップショット
    name: string;
  };
  
  amount: number;                // 請求額（税抜き）
  amountTaxIncl: number;         // 消費税込金額
  taxCategory: 'taxable' | 'tax-exempt'; // 消費税区分
  paymentMethod: 'cash' | 'transfer' | 'auto-pay' | 'other';
  transferFee: number;           // 振込手数料
  
  remarks: string;               // 摘要
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 6. todos - タスク・要望管理

```typescript
interface Todo {
  id: string;
  title: string;                 // タスクのタイトル
  type: 'feature' | 'bug' | 'memo'; // タイプ
  status: 'open' | 'in-progress' | 'done'; // ステータス
  priority: 'low' | 'medium' | 'high'; // 優先度
  
  description: string;           // 詳細説明
  assignedTo: string;            // 担当者ID
  
  comments: Array<{              // コメント履歴
    userId: string;
    text: string;
    createdAt: Timestamp;
  }>;
  
  createdBy: string;             // 作成者ID
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 7-13. その他マスタ

- **departments** - 部門マスタ
- **basicItems** - 基本項目マスタ
- **units** - 単位マスタ
- **expenseItems** - 費目テンプレート
- **travelExpenses** - 旅費交通費単価設定
- **commonSettings** - システム共通設定
- **reports** - 生成済みレポート

詳細は [[04-Master-Definition|マスタデータ定義]] を参照。

## リレーションシップ図

```
MEMBER (組合員)
  ├── expenseDetails (経費明細) -- 支払対象者として参照
  └── users (ユーザー) -- ログインユーザー

VENDOR (取引先)
  └── invoiceDetails (請求明細) -- 発行元として参照

DEPARTMENT (部門)
  └── expenseItems (費目) -- 所属部門として参照

BASIC_ITEM (基本項目)
  └── expenseItems (費目) -- 分類として参照

UNIT (単位)
  └── expenseItems (費目) -- 単位として参照

TRAVEL_EXPENSE (旅費交通費)
  └── expenseDetails (経費明細) -- 単価引用

EXPENSE_DETAIL (経費明細)
  └── reports (レポート) -- 集計元として参照

INVOICE_DETAIL (請求明細)
  └── reports (レポート) -- リスト化として参照
```

## データ不変性の原則

**帳票発行時のスナップショット保存**:
- マスタ情報（氏名、口座情報、費目名）を `*Snapshot` フィールドに保存
- 将来マスタが更新されても、過去の帳票内容は変化しない
- 監査証跡としての信頼性を確保

詳細は [[05-Business-Logic|ビジネスロジック]] を参照。

---
## 関連ドキュメント

- [[../Masters/04-Master-Definition|マスタデータ詳細]] - 各マスタの詳細定義
- [[../BusinessLogic/05-Business-Logic|ビジネスロジック]] - 計算ロジック・不変性の原則
- [[../Overview/01-System-Overview|システム概要]] - システム全体像
- [[../_Index|ナレッジベース索引]] - 全体INDEX
