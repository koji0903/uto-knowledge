---
title: "認証・アイデンティティシステム"
parent: [[overview]]
date: 2026-05-25
tags: [architecture, auth, identity, firebase]
---

# 認証・アイデンティティシステム

[[overview|Utomachi Platform]] の複雑な認証・権限管理システムの詳細。

## コンポーネント

### 1. IdentityState (アイデンティティ状態)
**ファイル**: src/types/identity.ts

複数レイヤーの認証情報を統合管理する状態オブジェクト：

```typescript
interface IdentityState {
  // Firebase認証
  uid?: string;
  email?: string;
  displayName?: string;
  
  // Utomachi固有の属性
  authRole?: string;
  productionType?: string;
  noriRole?: string;
  
  // 現在のコンテキスト
  currentDomain?: DomainType;
  currentOrganization?: OrganizationRef | null;
  currentMembership?: Membership | null;
  
  // 権能・モード
  workspaceMode?: string;
  memberships: Membership[];
  capabilities: string[];
  isDemoMode?: boolean;
}
```

**主要属性**:
- `uid` - Firebase UID
- `currentDomain` - ユーザーが現在操作中の産業ドメイン
- `currentMembership` - 現在のメンバーシップ (ロール・権能含む)
- `memberships` - 所属する全組織のメンバーシップ配列

### 2. DomainType (ドメイン種別)
**ファイル**: src/types/identity.ts

複数の産業領域をサポート：

```typescript
type DomainType =
  | 'aquaculture.nori'          # 海苔養殖
  | 'agriculture.rice'          # 水田農業
  | 'agriculture.vegetable'     # 野菜農業
  | 'agriculture.citrus'        # 柑橘類農業
  | 'store.retail'              # 小売店舗
  | 'secretariat.general'       # 事務局
  | 'research.marine';          # 海洋研究
```

**用途**: アクセス制御・UI表示の分岐・データ表示範囲の制限

### 3. Organization (組織)
**ファイル**: src/types/identity.ts

地域産業OSの組織構造：

```typescript
interface Organization {
  id: string;
  name: string;
  slug: string;
  
  // 組織タイプ
  type: OrganizationType;
  
  // 親組織（ツリー構造）
  parentOrganizationId?: string | null;
  
  // サポート対象
  domains?: DomainType[];
  enabledFeatures?: string[];
  
  // ビジュアル・ポリシー
  theme?: { primary?: string; secondary?: string; };
  visibilityPolicy?: { visibility: 'public' | 'limited' | 'private'; };
  
  // システムフラグ
  isSystem?: boolean;
  isDemo?: boolean;
}
```

**OrganizationType**:
- `platform` - プラットフォーム全体
- `domain` - 産業ドメイン (e.g., 海苔養殖)
- `union` - 漁協・農協
- `producer_group` - 生産者グループ
- `store_group` - 店舗グループ
- `government` - 自治体
- `research` - 研究機関
- `school` - 教育機関

### 4. Membership (メンバーシップ)
**ファイル**: src/types/identity.ts

ユーザーと組織の関連付け・権限管理：

```typescript
interface Membership {
  id: string;
  
  userId: string;
  organizationId: string;
  
  // ロール・権能
  roles: string[];
  capabilities: string[];
  
  // ドメイン・スコープ
  domains: DomainType[];
  visibilityScopes?: string[];
  
  // ワークスペース
  workspaceType?: string;
  isPrimary?: boolean;
  
  // ライフサイクル
  status?: 'active' | 'inactive' | 'pending';
  lifecycleStatus?: MembershipLifecycleStatus;
  
  joinedAt?: Date;
  activatedAt?: Date;
  expiresAt?: Date;
  invitedBy?: string;
  approvedBy?: string;
}
```

**ライフサイクルステータス**:
- `active` - アクティブ
- `pending` - 承認待ち
- `invited` - 招待状態
- `suspended` - 一時停止
- `expired` - 期限切れ

### 5. Capability (権能)
**ファイル**: src/types/identity.ts

メンバーシップに紐付いた具体的な操作権限：

```typescript
interface Capability {
  id: string;
  label: string;
  description?: string;
}
```

**実装パターン**: カスタマイズ可能な権能ID体系
- 例: `nori.harvest.record`, `nori.market.view`, `incident.acknowledge`

### 6. WorkspaceInvitation (メンバーシップ招待)
**ファイル**: src/types/identity.ts

組織へのユーザー招待管理：

```typescript
interface WorkspaceInvitation {
  id?: string;
  organizationId: string;
  invitedEmail: string;
  
  invitedRole?: string;
  invitedCapabilities?: string[];
  invitedDomains?: string[];
  
  invitedBy: string;
  token: string;
  status: InvitationStatus;
  
  expiresAt?: Date;
  acceptedAt?: Date;
  rejectedAt?: Date;
}
```

**InvitationStatus**:
- `pending` - 招待送信済み
- `accepted` - 受け入れ
- `rejected` - 拒否
- `expired` - 期限切れ
- `cancelled` - キャンセル

### 7. WorkspacePresence (ワークスペースプレゼンス)
**ファイル**: src/types/identity.ts

リアルタイムユーザープレゼンス情報：

```typescript
interface WorkspacePresence {
  uid: string;
  organizationId?: string;
  currentRoute?: string;
  currentDomain?: string;
  status: PresenceStatus;
  lastSeenAt?: Date;
  heartbeatAt?: Date;
}
```

**PresenceStatus**:
- `online` - オンライン
- `idle` - アイドル
- `offline` - オフライン
- `monitoring` - 監視中
- `editing` - 編集中

## 実装参考

### コンポーネント
- **[[AuthContext]]** - src/components/AuthContext.tsx - Firebase認証との連携
- **[[IdentityContext]]** - src/contexts/IdentityContext.tsx - Utomachi固有のアイデンティティ管理
- **[[NoriRoleProvider]]** - src/providers/NoriRoleProvider.tsx - ノリドメイン特有のロール管理

### フック
- `useWorkspacePresence` - プレゼンス情報の管理
- `useIdentity` (推定) - IdentityStateの取得

### テスト
- `src/__tests__/` - 権限・ロール関連のテストケース

## デザインパターン

### マルチテナント対応
```
User (1)
  ↓ has multiple
Membership (n)
  ├─ organizationId
  ├─ roles (e.g., "admin", "operator")
  ├─ domains (e.g., ["aquaculture.nori", "store.retail"])
  └─ capabilities (e.g., ["nori.harvest.record", "incident.acknowledge"])
```

### コンテキスト切り替え
ユーザーが複数の組織・ドメインに属する場合、currentOrganization/currentDomainで現在のコンテキストを管理。

### 権能ベースのアクセス制御 (ABAC)
```typescript
// 権能チェック例 (実装推定)
if (identity.capabilities.includes('nori.harvest.record')) {
  // 収穫記録作成可能
}
```

## セキュリティ考慮事項

1. **Firebase Authentication** - UID・emailはFirebaseで管理
2. **メンバーシップライフサイクル** - 招待→承認→アクティブ→期限切れ
3. **監査ログ** - AuditLogEntry で組織・メンバーシップ変更を記録
4. **ドメインスコーピング** - ユーザーは assigned domains のデータのみアクセス可能

## 関連リンク
- [[overview]] - プロジェクト概要
- [[運用管理]] - オペレーション管理（監査ログ含む）
- [[workflow-management]] - ワークフロー内の権能チェック
