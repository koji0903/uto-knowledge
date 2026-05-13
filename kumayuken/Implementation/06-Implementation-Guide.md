---
tags: [kumayuken, implementation, guidelines]
created: 2026-05-13
---

# AgriOS - 実装ガイドライン

このドキュメントは、AgriOS に機能追加や拡張を行う際の標準パターンをまとめたものです。

---

## 1. 新しい機能を追加する際の流れ

### ステップ 1: 型定義を最初に作成

`src/types/` に必要な TypeScript インターフェースを定義。

```typescript
// src/types/myfeature.ts
export interface MyFeatureData {
  id: string;
  name: string;
  // ... フィールド定義
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### ステップ 2: Firestore サービスを実装

`src/lib/services/` にRepository パターンでサービスを作成。

### ステップ 3: UI コンポーネントを実装

`src/components/` に React コンポーネントを作成。

### ステップ 4: ページルートを追加

`src/app/(dashboard)/` 配下にページを追加。

### ステップ 5: テストを実装

Jest + React Testing Library でテストを作成。

詳細は本ドキュメントの各セクションを参照。

---

## 2. UI コンポーネント設計のルール

### 必須: Agri* プレフィックスを使用

農業らしい統一感を保つため、共通 UI は `AgriButton`, `AgriCard` 等のプレフィックスを使用。

```typescript
// ✓ Good
<AgriButton variant="primary">送信</AgriButton>
<AgriCard title="会計レポート">...</AgriCard>

// ✗ Avoid
<Button>送信</Button>
<Card>...</Card>
```

### 色使い: 緑ベースのクリーンなデザイン

```typescript
// Tailwind クラス例
className="bg-green-50 border-green-200 text-green-900"
```

### アニメーション: Framer Motion の活用

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  コンテンツ
</motion.div>
```

---

## 3. Firestore スキーマ追加の手順

### ① Firestore ドキュメントを定義

`src/types/` に新しいインターフェースを作成。

### ② Firestore インデックスを生成（必要に応じて）

複合クエリが必要な場合、`firestore.indexes.json` に追加。

### ③ セキュリティルールを更新

Firebase Console で Firestore セキュリティルールを設定。

---

## 4. 旅費計算ロジックを実装する場合

### 既存パターンを参照

`src/lib/services/expenseDetails.ts` を参考に実装。

詳細は [[../BusinessLogic/05-Business-Logic|ビジネスロジック]] を参照。

---

## 5. フォーム検証パターン

### Zod による型安全な検証

```typescript
import { z } from 'zod';

const MyFeatureSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  amount: z.number().positive('金額は正の数である必要があります'),
  email: z.string().email('有効なメールアドレスを入力してください')
});

type MyFeatureInput = z.infer<typeof MyFeatureSchema>;
```

---

## 6. リアルタイムデータ取得

Firestore のリアルタイムリスナーを活用：

```typescript
import { onSnapshot } from 'firebase/firestore';

export const useRealtimeData = (collectionName: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(docs);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [collectionName]);

  return { data, loading };
};
```

---

## 7. エラーハンドリング

### Try-Catch パターン

```typescript
try {
  const result = await MyFeatureService.create(data);
  showToast('作成しました', 'success');
} catch (error) {
  if (error instanceof Error) {
    showToast(error.message, 'error');
  }
}
```

---

## 8. テスト実装

### Jest + React Testing Library

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyFeatureForm } from '@/components/myfeature/MyFeatureForm';

describe('MyFeatureForm', () => {
  it('フォーム送信が動作する', async () => {
    render(<MyFeatureForm />);
    
    const input = screen.getByLabelText('名前');
    await userEvent.type(input, 'テスト');
    
    const submitBtn = screen.getByRole('button', { name: '保存' });
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('作成しました')).toBeInTheDocument();
    });
  });
});
```

---

## 9. パフォーマンス最適化

### React.memo の活用

```typescript
export const MyFeatureCard = React.memo(({ data }: Props) => {
  return <div>{data.name}</div>;
});
```

### useMemo / useCallback

```typescript
const memoizedList = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);

const handleClick = useCallback(() => {
  // 処理
}, [dependency]);
```

---

## 10. レポート生成機能の追加

### 帳票発行のパターン

帳票生成の詳細は [[../BusinessLogic/05-Business-Logic|ビジネスロジック]] の「帳票生成の計算ロジック」を参照。

---

## チェックリスト

新機能追加時の確認事項：

- [ ] `src/types/` に型定義を作成
- [ ] `src/lib/services/` にサービスを実装
- [ ] Firestore セキュリティルールを設定
- [ ] `src/components/` に UI を実装
- [ ] `src/app/` にページルートを追加
- [ ] Tailwind / Agri* スタイルを適用
- [ ] バリデーションを実装
- [ ] エラーハンドリングを実装
- [ ] テストケースを作成
- [ ] ドキュメントを更新

---
## 関連ドキュメント

- [[../Architecture/02-Directory-Structure|ディレクトリ構成]] - プロジェクト構造
- [[../DataModel/03-Data-Model|データモデル]] - データベース設計
- [[../BusinessLogic/05-Business-Logic|ビジネスロジック]] - 計算ロジック
- [[../_Index|ナレッジベース索引]] - 全体INDEX
