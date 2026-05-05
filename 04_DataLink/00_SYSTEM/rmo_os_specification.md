---
id: rmo_os_specification_20260506
type: system_specification
title: "RMO OS 完全仕様書"
created: 2026-05-06
status: active
tags: [RMO, 宇土OS, 地域運営, デジタルプラットフォーム, specification]
---

# RMO OS - 完全仕様書

**関連する宇土OS層と機能OS:**
- [[layer_structure_guide|🟥 8層構造統合ガイド]]
- [[L3_organization_pfu|🟦 L3 組織レイヤ（PFU）]]
- [[rmo_os_implementation|📋 RMO OS 実装ガイド]]
- [[rmo_os_use_cases|📋 RMO OS ユースケース]]

---

## 📖 Executive Summary

**RMO OS** は、地域運営組織（RMO: Regional Management Organization）の活動をデジタル化・構造化し、**「人依存」から「構造依存」への転換**を実現するプラットフォーム。

対象組織：PTA、自治会、地域振興組織、NPO、実行委員会など

**キーワード：** 属人化排除、データ蓄積、自動化、誰でも運営可能

---

## 1. ビジョン & 課題定義

### 1.1 地域運営組織の構造的問題

```
【現状】
毎年リセット → 前年度データなし
      ↓
属人化 → 特定の人がいないと回らない
      ↓
情報分散 → LINE、紙、個人PC、複数ツール
      ↓
引き継ぎ不能 → 新役員が「前年度どうしてた？」から開始
      ↓
会計不透明 → 領収書どこ？決算書は？
      ↓
作業負担偏る → やる人が疲弊、やらない人が無関心
      ↓
データ蓄積なし → 「去年はいくらだった？」が答えられない
```

### 1.2 RMO OSの目的

```
「地域運営を人依存から構造依存に変える」

Before:
- 人 → 「Aさんが知ってる」
- 会議 → 「誰かがメモを取ってた」
- 会計 → 「Bさんの通帳から」
- 総会 → 「毎年手作り」

After:
- 人 → ユーザー管理システム
- 会議 → 議事録テンプレート + AI要約
- 会計 → 完全デジタル管理
- 総会 → 自動生成システム
```

### 1.3 期待される成果

```
【組織サイド】
✅ 年度切替時の作業時間 50%削減
✅ 会計透明性 100%確保
✅ データ蓄積で過去との比較可能
✅ 誰でも役員になれる環境

【市民サイド】
✅ 地域情報の一元管理
✅ イベント・会議情報の見える化
✅ 参加機会の増加

【行政サイド】
✅ 地域データの収集・分析が容易
✅ PTA・自治会との連携強化
✅ 市民参加の活性化が可能
```

---

## 2. コア思想 & 設計原則

### 2.1 4つの設計原則

#### 原則① 構造化（Structurization）
**すべてをデータとして扱う**

```
人間関係 → ユーザー、ロール、権限
活動 → イベント、プロジェクト、タスク
会議 → アジェンダ、議事録、決定事項
会計 → トランザクション、科目、根拠書類
```

#### 原則② テンプレート化（Templating）
**繰り返し業務は構造化・自動化**

```
総会資料 → 年度×名簿×会計 → PDF自動生成
決算書 → トランザクション → 科目別集計 → 自動生成
年間スケジュール → テンプレート → 前年度コピー → 差分更新
会議資料 → テンプレート → 議題入力 → 資料自動構成
```

#### 原則③ 一元管理（Centralization）
**情報は一箇所に集約**

```
バラバラ：LINE、メール、紙、個人PC、複数クラウド
     ↓
一元化：Firestore（単一データベース）
     ↓
効果：情報検索時間短縮、重複排除、版管理
```

#### 原則④ 非IT人材前提（Non-IT First）
**「パソコンが苦手」な人でも使える**

```
- 複雑な設定不要
- 最小限のクリックで目的達成
- エラーメッセージは日本語で親切に
- 電話・メールサポート体制
- 操作ガイド動画完備
```

---

## 3. 技術仕様

### 3.1 技術スタック

| レイヤ | 技術 | 理由 |
|-------|------|------|
| Frontend | Next.js 14 + TypeScript | SSR対応、国際化対応、高速 |
| UI Library | Material-UI (MUI) + Tailwind | 高機能、カスタマイズ容易 |
| Database | Firestore | リアルタイム、スケーラブル、セキュリティ組み込み |
| Auth | Firebase Auth | メール/パスワード、OAuth対応、日本語対応 |
| Storage | Firebase Storage | ファイルアップロード、自動スケーリング |
| PDF生成 | @react-pdf/renderer + PDFKit | 複雑な帳票も対応 |
| AI | Gemini / Claude API | 議事録要約、文章生成 |
| Analytics | Firebase Analytics + BigQuery | ユーザー行動分析 |
| Hosting | Vercel | CI/CD自動化、無料枠あり |
| Email | SendGrid / Firebase Email | 一括送信、テンプレート対応 |

### 3.2 システムアーキテクチャ

```
┌─────────────────────────────────────────┐
│        ユーザー                          │
│   (PTA役員、自治会会長など)              │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│      Next.js Frontend (Vercel)          │
│  ├─ Authentication UI                  │
│  ├─ Dashboard                          │
│  ├─ Organization Management            │
│  ├─ Document Generation                │
│  └─ Analytics                          │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────┼─────────┐
        │         │         │
┌───────▼──┐  ┌───▼────┐  ┌─▼──────────┐
│ Firestore│  │Firebase│  │Firebase    │
│ Database │  │ Storage│  │ Functions  │
│          │  │        │  │(背景処理)  │
└──────────┘  └────────┘  └────────────┘
        │
┌───────▼─────────────────┐
│  外部API連携             │
│  ├─ Gemini API(AI要約)  │
│  ├─ SendGrid(メール)    │
│  └─ 行政ポータル        │
└─────────────────────────┘
```

### 3.3 URL構造（ルーティング）

```
/uto-rmo
├─ / (トップページ)
├─ /auth
│  ├─ /register (新規登録)
│  ├─ /login (ログイン)
│  └─ /forgot-password (パスワード再設定)
│
├─ /dashboard (メインダッシュボード)
│
├─ /organizations
│  ├─ / (団体一覧)
│  ├─ /[id] (団体詳細)
│  ├─ /[id]/settings (設定)
│  └─ /[id]/invite (メンバー招待)
│
├─ /[org-id]/members
│  ├─ / (メンバー一覧)
│  ├─ /add (メンバー追加)
│  └─ /[user-id] (メンバー詳細)
│
├─ /[org-id]/schedule
│  ├─ / (年間スケジュール)
│  ├─ /[event-id] (イベント詳細)
│  └─ /add (新規イベント)
│
├─ /[org-id]/meetings
│  ├─ / (会議一覧)
│  ├─ /[meeting-id] (会議詳細/議事録)
│  └─ /add (会議作成)
│
├─ /[org-id]/projects
│  ├─ / (事業一覧)
│  ├─ /[project-id] (事業詳細)
│  └─ /add (事業追加)
│
├─ /[org-id]/finance
│  ├─ / (会計ダッシュボード)
│  ├─ /transactions (取引一覧)
│  ├─ /reports (決算書等)
│  ├─ /categories (科目管理)
│  └─ /receipts (領収書管理)
│
├─ /[org-id]/documents
│  ├─ / (ドキュメント一覧)
│  ├─ /[doc-id] (閲覧/編集)
│  └─ /templates (テンプレート)
│
├─ /[org-id]/reports
│  ├─ /annual-report (年度報告書)
│  ├─ /general-meeting (総会資料)
│  └─ /finance-report (決算報告書)
│
└─ /admin (管理者画面)
   ├─ /users (ユーザー管理)
   ├─ /organizations (団体管理)
   └─ /analytics (統計分析)
```

---

## 4. Firestore データモデル

### 4.1 コレクション設計

#### **users** コレクション

```firestore
users/
├─ {uid}
│  ├─ email: string (メールアドレス)
│  ├─ name: string (名前)
│  ├─ phone: string (電話番号)
│  ├─ avatar: string (プロフィール画像URL)
│  ├─ createdAt: timestamp
│  ├─ lastLoginAt: timestamp
│  ├─ preferences: {
│  │  ├─ language: "ja" | "en"
│  │  ├─ timezone: "Asia/Tokyo"
│  │  └─ emailNotifications: boolean
│  │}
│  └─ status: "active" | "inactive" | "deleted"
```

#### **organizations** コレクション

```firestore
organizations/
├─ {orgId}
│  ├─ name: string (団体名)
│  ├─ type: "pta" | "jichikai" | "npo" | "other"
│  ├─ description: string (説明)
│  ├─ logo: string (ロゴURL)
│  ├─ address: string (住所)
│  ├─ phone: string (電話番号)
│  ├─ website: string (ウェブサイト)
│  ├─ foundedAt: date (設立日)
│  ├─ adminId: string (管理者UID)
│  ├─ createdAt: timestamp
│  ├─ currentYear: integer (現在年度)
│  ├─ years: [{
│  │  ├─ year: integer (年度)
│  │  ├─ startDate: date (開始日)
│  │  ├─ endDate: date (終了日)
│  │  ├─ status: "planning" | "active" | "closed"
│  │  └─ createdAt: timestamp
│  │}]
│  ├─ settings: {
│  │  ├─ fiscalYearStart: "04-01" (会計年度開始)
│  │  ├─ requireReceiptsForExpenses: boolean
│  │  ├─ autoGenerateReports: boolean
│  │  └─ publicMode: boolean (一般公開)
│  │}
│  └─ metadata: {
│     ├─ totalMembers: integer
│     ├─ totalProjects: integer
│     ├─ totalBalance: decimal
│     └─ lastUpdatedAt: timestamp
│  }
```

#### **members** コレクション

```firestore
organizations/{orgId}/members/
├─ {memberId}
│  ├─ userId: string (ユーザーID)
│  ├─ organizationId: string
│  ├─ name: string (名前)
│  ├─ email: string (メール)
│  ├─ phone: string (電話)
│  ├─ position: string (役職)
│  │  例："会長", "副会長", "会計", "書記"
│  ├─ role: "admin" | "officer" | "member" | "viewer"
│  ├─ joinedAt: date (加入日)
│  ├─ term: {
│  │  ├─ startDate: date
│  │  └─ endDate: date
│  │}
│  ├─ responsibilities: [string] (担当分野)
│  ├─ contact: {
│  │  ├─ email: string
│  │  ├─ phone: string
│  │  └─ line: string (LINE ID)
│  │}
│  ├─ status: "active" | "inactive"
│  └─ notes: string (備考)
```

#### **schedule** コレクション（年間行事・イベント）

```firestore
organizations/{orgId}/schedule/
├─ {eventId}
│  ├─ title: string (イベント名)
│  ├─ description: string (説明)
│  ├─ type: "meeting" | "event" | "holiday" | "deadline"
│  ├─ startDate: date (開始日)
│  ├─ endDate: date (終了日)
│  ├─ startTime: timestamp (開始時刻、ある場合)
│  ├─ endTime: timestamp (終了時刻)
│  ├─ location: string (開催場所)
│  ├─ organizer: string (主催者UID)
│  ├─ attendees: [string] (参加予定者UID)
│  ├─ status: "scheduled" | "ongoing" | "completed" | "cancelled"
│  ├─ category: string (カテゴリ)
│  ├─ color: string (色コード：UI表示用)
│  ├─ reminders: [{
│  │  ├─ type: "email" | "push" | "sms"
│  │  ├─ daysBeforeEvent: integer
│  │  └─ sent: boolean
│  │}]
│  ├─ attachments: [string] (ファイルURL)
│  ├─ relatedProjects: [string] (関連事業ID)
│  ├─ createdAt: timestamp
│  ├─ createdBy: string (作成者UID)
│  └─ updatedAt: timestamp
```

#### **meetings** コレクション（会議・会合）

```firestore
organizations/{orgId}/meetings/
├─ {meetingId}
│  ├─ title: string (会議名)
│  ├─ type: "general-meeting" | "board-meeting" | "committee"
│  ├─ date: date (開催日)
│  ├─ startTime: timestamp
│  ├─ endTime: timestamp
│  ├─ location: string
│  ├─ organizer: string (主催者UID)
│  ├─ attendees: [{
│  │  ├─ userId: string
│  │  ├─ name: string
│  │  ├─ attended: boolean
│  │  └─ role: string (役割)
│  │}]
│  ├─ agenda: [{
│  │  ├─ order: integer (順序)
│  │  ├─ title: string (議題)
│  │  ├─ description: string
│  │  ├─ responsible: string (担当者UID)
│  │  ├─ timeAllocation: integer (予定時間・分)
│  │  └─ notes: string
│  │}]
│  ├─ minutes: {
│  │  ├─ content: string (議事録本文)
│  │  ├─ decisions: [string] (決定事項)
│  │  ├─ actionItems: [{
│  │  │   ├─ action: string
│  │  │   ├─ owner: string
│  │  │   └─ deadline: date
│  │  │}]
│  │  ├─ aiSummary: string (AI自動要約)
│  │  └─ recordedAt: timestamp
│  │}
│  ├─ documents: [string] (関連ファイルURL)
│  ├─ status: "scheduled" | "ongoing" | "completed"
│  ├─ createdAt: timestamp
│  └─ updatedAt: timestamp
```

#### **projects** コレクション（事業・プロジェクト）

```firestore
organizations/{orgId}/projects/
├─ {projectId}
│  ├─ title: string (事業名)
│  ├─ description: string (説明)
│  ├─ budget: decimal (予算額)
│  ├─ spent: decimal (支出額)
│  ├─ status: "planning" | "active" | "completed" | "cancelled"
│  ├─ category: string (分類)
│  │  例："教育", "福祉", "地域振興", "イベント"
│  ├─ owner: string (責任者UID)
│  ├─ team: [string] (チームメンバーUID)
│  ├─ startDate: date
│  ├─ endDate: date (予定終了日)
│  ├─ actualEndDate: date (実際の終了日)
│  ├─ goals: [string] (目標)
│  ├─ outcomes: [string] (成果)
│  ├─ risks: [{
│  │  ├─ description: string
│  │  ├─ probability: "low" | "medium" | "high"
│  │  └─ mitigation: string
│  │}]
│  ├─ milestones: [{
│  │  ├─ name: string
│  │  ├─ dueDate: date
│  │  ├─ completed: boolean
│  │  └─ completedDate: date
│  │}]
│  ├─ documents: [string] (関連ファイルURL)
│  ├─ createdAt: timestamp
│  ├─ updatedAt: timestamp
│  └─ completedAt: timestamp
```

#### **transactions** コレクション（会計取引）

```firestore
organizations/{orgId}/finance/transactions/
├─ {transactionId}
│  ├─ date: date (取引日)
│  ├─ type: "income" | "expense"
│  ├─ category: string (科目ID)
│  ├─ categoryName: string (科目名)
│  │  例："会費", "寄付金", "補助金", "消耗品費", "交通費"
│  ├─ amount: decimal (金額)
│  ├─ description: string (説明)
│  ├─ paymentMethod: "cash" | "bank_transfer" | "credit_card"
│  ├─ project: string (関連事業ID)
│  ├─ responsible: string (責任者UID)
│  ├─ receipts: [{
│  │  ├─ fileUrl: string
│  │  ├─ fileName: string
│  │  ├─ uploadedAt: timestamp
│  │  └─ uploadedBy: string
│  │}]
│  ├─ status: "pending" | "approved" | "rejected"
│  ├─ approvalHistory: [{
│  │  ├─ approvedBy: string
│  │  ├─ approvedAt: timestamp
│  │  └─ comment: string
│  │}]
│  ├─ createdAt: timestamp
│  ├─ createdBy: string
│  └─ updatedAt: timestamp
```

#### **financialReports** コレクション（決算書等）

```firestore
organizations/{orgId}/finance/reports/
├─ {reportId}
│  ├─ year: integer (年度)
│  ├─ type: "balance_sheet" | "income_statement" | "cash_flow"
│  ├─ generatedAt: timestamp
│  ├─ generatedBy: string (作成者UID)
│  ├─ summary: {
│  │  ├─ totalIncome: decimal
│  │  ├─ totalExpense: decimal
│  │  ├─ balance: decimal
│  │  └─ changeFromPreviousYear: decimal
│  │}
│  ├─ byCategory: [{
│  │  ├─ categoryName: string
│  │  ├─ income: decimal
│  │  ├─ expense: decimal
│  │  └─ netChange: decimal
│  │}]
│  ├─ pdfUrl: string (生成されたPDFファイルURL)
│  ├─ approved: boolean
│  ├─ approvalDate: date
│  ├─ approvalBy: string
│  └─ notes: string (備考)
```

#### **documents** コレクション（ドキュメント）

```firestore
organizations/{orgId}/documents/
├─ {docId}
│  ├─ title: string (タイトル)
│  ├─ type: "minutes" | "report" | "guideline" | "template" | "other"
│  ├─ content: string (本文)
│  ├─ author: string (作成者UID)
│  ├─ createdAt: timestamp
│  ├─ updatedAt: timestamp
│  ├─ lastEditedBy: string (最終編集者UID)
│  ├─ version: integer
│  ├─ status: "draft" | "published" | "archived"
│  ├─ fileUrl: string (ファイルURL、PDFなど)
│  ├─ tags: [string] (タグ)
│  ├─ relatedItems: {
│  │  ├─ meetingId: string
│  │  ├─ projectId: string
│  │  └─ year: integer
│  │}
│  ├─ visibility: "internal" | "members_only" | "public"
│  ├─ editHistory: [{
│  │  ├─ editedBy: string
│  │  ├─ editedAt: timestamp
│  │  └─ changes: string (変更内容)
│  │}]
│  └─ comments: [{
│     ├─ userId: string
│     ├─ content: string
│     └─ createdAt: timestamp
│  }]
```

---

## 5. 機能仕様

### 5.1 基本機能

#### 5.1.1 認証 & アカウント管理

```
【ユーザーロール】
- 管理者(Admin): 全権限、団体設定変更可
- 役員(Officer): 基本的な編集権限
- メンバー(Member): 閲覧・限定編集
- 閲覧者(Viewer): 閲覧のみ

【認証方式】
- メール/パスワード
- Google OAuth
- Microsoft OAuth
- （将来）LINE Login

【セキュリティ】
- 2段階認証オプション
- パスワード復旧メール
- セッションタイムアウト（非アクティブ30分）
- IP制限（カスタマイズ可能）
```

#### 5.1.2 団体管理

```
【年度管理】
- 新年度作成時に前年度をテンプレートとしてコピー
- 前年度のメンバー、スケジュール、事業を引き継ぎ
- 差分更新（変更部分だけ修正）

【メンバー管理】
- CSVインポート対応
- 役職・任期管理
- 一括招待メール送信
- QRコード招待リンク

【設定管理】
- 会計年度開始月設定
- 承認フロー設定
- 通知設定
```

### 5.2 スケジュール管理

```
【機能】
- カレンダービュー（月表示、週表示、日表示）
- イベント・会議・期限の一元管理
- リマインダー（メール/プッシュ通知）
- 自動同期（Google Calendar等）

【テンプレート】
- PTA向けテンプレート（年間スケジュール既設定）
- 自治会向けテンプレート
- カスタムテンプレート作成
```

### 5.3 会議管理 & 議事録

```
【会議管理】
- アジェンダ事前設定
- 参加者管理（出欠確認）
- タイマー機能（時間管理）

【議事録】
- テンプレートベース入力
- AI自動要約（Gemini API）
- 決定事項・アクション項目の自動抽出
- 版管理（変更履歴）
- メンバーへ自動配信

【AI機能】
```
入力：会議の音声/テキスト
→ Gemini APIで処理
→ 自動要約＋キーワード抽出
→ 決定事項の自動検出
→ アクション項目の提案
```

### 5.4 事業・プロジェクト管理

```
【機能】
- 事業の予算・実績管理
- マイルストーン管理
- チーム割り当て
- リスク管理
- 成果記録

【進捗管理】
- ガントチャート表示
- タスク一覧
- 完了度合い可視化
- 自動アラート（期限切れ）
```

### 5.5 会計管理

```
【機能】
- 収支管理（日次、月次、年次）
- 科目別集計
- 決算書自動生成
- 領収書管理（画像アップロード）
- 承認フロー

【決算書出力】
- 収支報告書
- 科目別内訳表
- 前年度比較表
- 監査対応資料

【API連携】
- 銀行口座連携（将来対応予定）
```

### 5.6 ドキュメント管理

```
【機能】
- テンプレートからの作成
- リッチテキストエディタ
- 版管理
- コメント・レビュー
- 承認ワークフロー

【ドキュメントタイプ】
- 総会資料
- 規約
- 会議資料
- 年間報告書
- その他
```

---

## 6. キラー機能：総会資料自動生成

### 6.1 概要

```
入力データ：
  ├─ メンバー情報（名簿）
  ├─ 会計データ（決算書）
  ├─ 事業実績（プロジェクト成果）
  └─ 変更事項（新規メンバー、役員交代）

処理：
  → Firestore から自動抽出
  → テンプレートにデータ埋め込み
  → @react-pdf/renderer で PDF生成

出力：
  → PDFファイル（自動ダウンロード可）
  → Word形式（カスタマイズ可能）
  → Google Docs へのエクスポート

【時間短縮】
Before：資料作成に10～20時間
After：クリック1つで5分
```

### 6.2 実装フロー

```
ステップ1：データ確認画面
  → 抽出されたメンバー、会計、事業を確認
  → 必要に応じて手動修正

ステップ2：テンプレート選択
  → PTA標準テンプレート
  → 自治会テンプレート
  → カスタムテンプレート

ステップ3：プレビュー
  → 生成内容の確認
  → レイアウト調整

ステップ4：生成 & ダウンロード
  → PDF生成
  → 自動ダウンロード開始
```

---

## 7. PTA特化機能

```
【自動化された年度更新】
1. 新年度を「テンプレートモード」で作成
2. 前年度データを自動コピー
3. 次期役員情報を入力（新旧役員）
4. 年間スケジュール確認・修正
5. 総会資料を自動生成
6. メンバーに共有

【時間削減】
従来：5～10時間
新方式：30分
```

---

## 8. セキュリティ & プライバシー

### 8.1 データ保護

```
【Firestore セキュリティルール】
- 組織ごとにデータ分離
- ロールベースアクセス制御（RBAC）
- メンバーは自分の組織データのみアクセス
- 管理者のみ全体データアクセス
```

### 8.2 暗号化

```
- 通信：TLS 1.3（HTTPS）
- 保存：Firestore デフォルト暗号化
- 個人情報：フィールドレベル暗号化（オプション）
```

### 8.3 コンプライアンス

```
- 個人情報保護方針準拠
- GDPR対応（EU対応）
- ログ記録（操作ログ、変更履歴）
- 定期バックアップ
```

---

## 9. 拡張機能（Phase 2以降）

```
【Phase 1完成後】
- SNS連携（Facebook、LINE）
- SMS通知
- 多言語対応（英語、中国語）
- オフライン対応
- モバイルアプリ（iOS/Android）
```

---

## 10. 関連レイヤー & OS連携

```
【宇土OS全体での位置づけ】
RMO OS
  ├─ L3（組織PFU）→ RMO がPFUの実装組織を管理
  ├─ L5（インフラ） → 学校跡地の施設管理
  ├─ L6（政策）→ PTA、自治会が政策を推進
  └─ 他OS層との連携
     ├─ 教育OS → PTA連携、学校イベント管理
     ├─ 産業OS → 地域商社の運営
     └─ 移住OS → 移住者の地域統合

【行政ポータルとの連携】
RMO OS → 宇土市ポータル
  → PTA・自治会活動を市民に可視化
  → イベント情報の一元配信
  → 市民参加機会の拡大
```

---

## 11. 成功指標（KPI）

```
【導入後6ヶ月】
- 登録団体数：50団体以上
- アクティブユーザー数：500人以上
- 総会資料自動生成数：20件以上
- ユーザー満足度：4.0以上（5段階）

【導入後12ヶ月】
- 登録団体数：100団体以上
- アクティブユーザー数：1,000人以上
- 平均時間削減：月10時間/団体
- 会計透明性スコア：90%以上
```

---

## 12. 開発・運用体制

```
【開発】
- Phase 1（基本機能）：3ヶ月
- Phase 2（PTA特化）：2ヶ月
- Phase 3（高度な分析）：2ヶ月

【運用・サポート】
- メールサポート：平日対応
- 電話サポート：週2日
- 操作ガイド動画：20本以上
- 月次ウェビナー（無料）
```

---

**最終更新:** 2026-05-06  
**ステータス:** 完全仕様書完成  
**次ステップ:** 実装ガイド、使用例の作成
