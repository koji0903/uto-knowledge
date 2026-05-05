---
id: childcare_os_specification_20260506
type: system_specification
title: "子育てOS 完全仕様書"
created: 2026-05-06
status: active
tags: [子育てOS, 宇土OS, 子育て支援, デジタルプラットフォーム, specification]
---

# 子育てOS - 完全仕様書

**関連する宇土OS層と機能OS:**
- [[layer_structure_guide|🟥 8層構造統合ガイド]]
- [[L6_policy_layer|🟪 L6 政策レイヤ（子育て・教育）]]
- [[vision_uto_os|🟫 L7 ビジョンレイヤ]]
- [[childcare_os_implementation|📋 子育てOS 実装ガイド]]
- [[childcare_os_use_cases|📋 子育てOS ユースケース]]

---

## 📖 Executive Summary

**子育てOS** は、自治体が提供する子育て支援情報・制度・手続き・相談機能を統合し、**「迷わない子育て環境」を実現する市民向けプラットフォーム**。

対象ユーザー：妊娠中の家庭、乳幼児・未就学児の保護者、小中学生の保護者、子育て支援に関わる地域・団体

**キーワード：** ライフイベント起点、逆検索、ワンストップ、個別最適化

---

## 1. ビジョン & 課題定義

### 1.1 子育て支援の現状（課題）

```
【情報の課題】
支援制度は存在する ← が
  ↓
情報が分散している（市HP、PDF、窓口、チラシ）
  ↓
保護者が「何が使えるか分からない」
  ↓
結果：支援が届いていない

【例】
「認可保育園の手続き」について：
- 市HP内で5つの異なるページに情報が分散
- PDFファイルが3つある
- 窓口に行かないと分からないルールもある
- 制度変更時に情報が古いまま残る

【ユーザーの苦痛】
- 「うちの子はいくらの補助が出るの？」→ 分からない
- 「どの保育園がいいの？」→ 比較情報がない
- 「医療費はいくらかかるの？」→ どこに聞いていいか分からない
- 「困った時は誰に相談？」→ 複数の窓口をたらい回し
```

### 1.2 子育てOSの目的

```
「子育て支援を『存在するもの』から『使われるもの』へ」

必要な人に
  ↓
必要なタイミングで
  ↓
最短導線で
  ↓
届ける
```

### 1.3 期待される成果

```
【市民サイド】
✅ 「今の状況で何が使える？」が5分で分かる
✅ 手続きが自宅で完結できる（オンライン申請）
✅ 相談先が明確に見える
✅ 同じ状況の親同士が繋がれる

【市サイド】
✅ 制度利用率が向上（取りこぼし削減）
✅ 窓口業務が軽減（オンライン申請）
✅ 利用者データが蓄積（施策改善の根拠に）
✅ 市民満足度向上

【地域サイド】
✅ 支援施設の情報が一元化
✅ 地域の子育て活動が見える化
```

---

## 2. コア思想 & 設計原則

### 2.1 4つの設計原則

#### 原則① ライフイベント起点（Life-Event Centric）

```
「制度」ではなく「状況」から探せる設計

×（制度名で検索）
「児童手当」「保育料補助」「医療費補助」...

○（状況で検索）
- 妊娠した
- 出産した
- 保育園に入れたい
- 小学校に上がった
- 医療費を知りたい
- 困った、相談したい
```

#### 原則② 逆検索（Reverse Search）

```
従来の課題：
「宇土市にはどんな制度がありますか？」
→ 列挙されて「自分に関係あるかな...」と探す

逆検索：
「子どもが0歳で、世帯年収400万円です」
→ 該当する制度がすべて表示される

実装：
- 年齢
- 世帯構成
- 所得
- その他の条件

→ 自動マッチング
```

#### 原則③ ワンストップ（One-Stop Service）

```
従来：
「情報を集める」→ 別窓で「手続きする」→ 別窓で「相談する」

ワンストップ：
同一プラットフォームで
  ├─ 情報取得
  ├─ 手続き申請
  └─ 相談

すべてが繋がっている
```

#### 原則④ 個別最適化（Personalization）

```
ユーザーごとに異なる情報を表示

例1：
「妊娠した」と入力
→ 妊婦検診補助、出産祝い金、保育園説明会日程...
→ この情報だけが表示される

例2：
「3歳、シングルマザー」と入力
→ ひとり親世帯向けの制度
→ 保育料減免
→ 医療費助成
→ 相談窓口（相談しやすい雰囲気の場所）
→ これらが優先表示される
```

---

## 3. 技術仕様

### 3.1 技術スタック

| レイヤ | 技術 | 理由 |
|-------|------|------|
| Frontend | Next.js 14 + TypeScript | SSR対応、SEO対応（制度検索対象） |
| UI Library | Material-UI + Tailwind | アクセシビリティ重視（多様な保護者対応） |
| Database | Firestore | リアルタイム、スケーラブル |
| Auth | Firebase Auth | ソーシャルログイン対応（Google、LINE） |
| AI | Gemini / Claude API | 質問応答、制度説明 |
| Maps | Google Maps API | 施設マップ表示 |
| Analytics | Firebase Analytics | ユーザー行動分析 |
| Hosting | Vercel | 無料枠、自動デプロイ |
| CMS | Headless CMS / Firestore | 制度情報管理 |

### 3.2 システムアーキテクチャ

```
┌─────────────────────────────────────┐
│       保護者（スマートフォン）        │
│     ├─ 情報検索                     │
│     ├─ 手続き申請                   │
│     └─ AI相談                       │
└─────────────┬───────────────────────┘
              │
┌─────────────▼───────────────────────┐
│   Next.js Frontend (Vercel)          │
│  ├─ ライフイベントナビ              │
│  ├─ 制度逆検索                      │
│  ├─ AIチャットボット                │
│  ├─ 申請フォーム                    │
│  └─ マイページ                      │
└─────────────┬───────────────────────┘
              │
   ┌──────────┼──────────┬──────────┐
   │          │          │          │
┌──▼──┐  ┌───▼───┐  ┌───▼───┐  ┌──▼──┐
│制度│  │Firestore│  │Gemini │  │Google│
│DB │  │ユーザー  │  │API   │  │Maps │
└────┘  │データ   │  │(AI)  │  └─────┘
        └────────┘  └──────┘
        
        │
        └─ 市民ポータル（一元配信）
        └─ RMO OS（地域子育て活動の表示）
```

### 3.3 URL構造（ルーティング）

```
/uto-childcare
├─ / (トップページ)
│  └─ ライフイベント選択画面
│
├─ /life-events
│  ├─ /pregnancy (妊娠)
│  ├─ /birth (出産)
│  ├─ /childcare (乳幼児)
│  ├─ /preschool (未就学児)
│  ├─ /elementary (小学校)
│  └─ /support (支援・相談)
│
├─ /services
│  ├─ /search (制度検索・逆引き)
│  ├─ /[service-id] (制度詳細)
│  └─ /compare (制度比較)
│
├─ /ai-navi
│  └─ /chat (AIチャットボット)
│
├─ /facilities
│  ├─ /childcare-centers (保育園)
│  ├─ /hospitals (小児科医)
│  ├─ /support-centers (支援施設)
│  └─ /map (地図表示)
│
├─ /applications
│  ├─ / (申請フォーム一覧)
│  ├─ /[form-id] (個別申請フォーム)
│  └─ /status (申請状況確認)
│
├─ /community
│  ├─ /groups (親の会・サークル)
│  ├─ /events (地域イベント)
│  └─ /qa (Q&Aコミュニティ)
│
├─ /mypage
│  ├─ / (マイページ)
│  ├─ /children (子ども情報管理)
│  ├─ /benefits (利用している制度一覧)
│  ├─ /applications (申請履歴)
│  ├─ /notifications (通知設定)
│  └─ /favorites (お気に入り)
│
└─ /admin (管理画面・市職員向け)
   ├─ /services (制度情報管理)
   ├─ /applications (申請管理)
   ├─ /analytics (利用統計)
   └─ /users (ユーザー管理)
```

---

## 4. Firestore データモデル

### 4.1 コレクション設計

#### **users** コレクション（保護者情報）

```firestore
users/
├─ {userId}
│  ├─ email: string
│  ├─ phone: string
│  ├─ name: string
│  ├─ household: {
│  │  ├─ type: "married" | "single" | "blended"
│  │  ├─ parentCount: 1 | 2
│  │  ├─ childrenCount: integer
│  │  └─ annualIncome: integer (税込世帯年収)
│  │}
│  ├─ children: [{
│  │  ├─ id: string (子どもID)
│  │  ├─ name: string
│  │  ├─ birthDate: date
│  │  ├─ gender: "male" | "female"
│  │  └─ specialNeeds: [string] (特別支援が必要か等)
│  │}]
│  ├─ address: {
│  │  ├─ prefecture: string
│  │  ├─ city: "宇土市"
│  │  ├─ district: string
│  │  └─ coordinates: geopoint (緯度経度)
│  │}
│  ├─ preferences: {
│  │  ├─ language: "ja" | "en"
│  │  ├─ notifications: {
│  │  │   ├─ byEmail: boolean
│  │  │   ├─ byPush: boolean
│  │  │   └─ byAge: [0, 1, 3, 5, 6, 12] (年齢別通知)
│  │  │}
│  │  └─ favorites: [string] (よく見る制度ID)
│  │}
│  ├─ createdAt: timestamp
│  └─ lastLoginAt: timestamp
```

#### **services** コレクション（制度情報）

```firestore
services/
├─ {serviceId}
│  ├─ name: string (制度名)
│  ├─ category: string (カテゴリ)
│  │  例："保育", "医療", "助成金", "減免", "手当", "相談"
│  ├─ description: string (制度説明)
│  ├─ details: {
│  │  ├─ overview: string (概要)
│  │  ├─ eligibility: {
│  │  │   ├─ ageRange: {start: 0, end: 18}
│  │  │   ├─ incomeLimit: {
│  │  │   │   ├─ threshold: integer
│  │  │   │   └─ exceptions: [string]
│  │  │   │}
│  │  │   ├─ householdType: ["married", "single"]
│  │  │   ├─ specialConditions: [string]
│  │  │   └─ residencyRequirement: string
│  │  │}
│  │  ├─ benefits: {
│  │  │   ├─ type: "cash" | "reduction" | "service" | "information"
│  │  │   ├─ amount: decimal (助成額、判定例)
│  │  │   └─ frequency: string ("monthly", "annual", "one-time")
│  │  │}
│  │  ├─ applicationProcess: {
│  │  │   ├─ method: "online" | "document" | "hybrid"
│  │  │   ├─ requiredDocuments: [string]
│  │  │   ├─ processingTime: string ("1week", "2weeks", "1month")
│  │  │   └─ deadline: {
│  │  │       ├─ type: "fixed_date" | "rolling"
│  │  │       ├─ month: integer
│  │  │       └─ day: integer
│  │  │   }
│  │  │}
│  │  ├─ contactInfo: {
│  │  │   ├─ department: string
│  │  │   ├─ phone: string
│  │  │   ├─ email: string
│  │  │   └─ address: string
│  │  │}
│  │  └─ relatedServices: [string] (関連する制度ID)
│  │}
│  ├─ lifeEventTags: [string]
│  │  例：["pregnancy", "birth", "childcare", "preschool"]
│  ├─ matchingScore: {
│  │  ├─ factors: [string] (マッチング要因)
│  │  └─ algorithm: string (マッチング計算式)
│  │}
│  ├─ resourceUrl: string (詳細説明URL)
│  ├─ applicationUrl: string (オンライン申請URL)
│  ├─ status: "active" | "coming_soon" | "ended"
│  ├─ lastUpdatedAt: timestamp
│  ├─ views: integer (PV数)
│  └─ userRating: {
│     ├─ averageScore: decimal (1-5)
│     └─ reviewCount: integer
│  }
```

#### **lifeEvents** コレクション（ライフイベント）

```firestore
lifeEvents/
├─ {eventId}
│  ├─ name: string ("妊娠", "出産", "乳幼児期"など)
│  ├─ description: string
│  ├─ ageRange: {start: integer, end: integer} (月齢)
│  ├─ timeline: [{
│  │  ├─ month: integer (妊娠月数または月齢)
│  │  ├─ title: string (このタイミングでするべきこと)
│  │  ├─ description: string
│  │  ├─ relatedServices: [string] (関連制度ID)
│  │  └─ priority: "high" | "medium" | "low"
│  │}]
│  ├─ checklistItems: [{
│  │  ├─ task: string
│  │  ├─ dueMonth: integer
│  │  ├─ relatedServices: [string]
│  │  └─ estimatedTime: string ("15分", "1時間"など)
│  │}]
│  ├─ resources: [{
│  │  ├─ title: string
│  │  ├─ type: "article" | "video" | "form"
│  │  └─ url: string
│  │}]
│  ├─ commonQuestions: [{
│  │  ├─ question: string
│  │  ├─ answer: string
│  │  └─ relatedServiceIds: [string]
│  │}]
│  └─ order: integer (表示順序)
```

#### **applications** コレクション（申請履歴）

```firestore
users/{userId}/applications/
├─ {applicationId}
│  ├─ serviceId: string (申請した制度ID)
│  ├─ status: "draft" | "submitted" | "accepted" | "rejected" | "expired"
│  ├─ submittedAt: timestamp
│  ├─ decidedAt: timestamp
│  ├─ results: {
│  │  ├─ approved: boolean
│  │  ├─ amount: decimal (承認額など)
│  │  ├─ reason: string (却下理由など)
│  │  └─ appealDeadline: date
│  │}
│  ├─ formData: {
│  │  ├─ ... (申請フォーム入力内容)
│  │}
│  ├─ attachments: [{
│  │  ├─ fileName: string
│  │  ├─ fileUrl: string
│  │  └─ uploadedAt: timestamp
│  │}]
│  ├─ notifications: [{
│  │  ├─ type: string ("status_change", "document_needed")
│  │  ├─ sentAt: timestamp
│  │  └─ read: boolean
│  │}]
│  └─ notes: string (本人用メモ)
```

#### **facilities** コレクション（施設情報）

```firestore
facilities/
├─ {facilityId}
│  ├─ name: string (施設名)
│  ├─ type: "childcare_center" | "hospital" | "support_center"
│  ├─ address: string
│  ├─ coordinates: geopoint
│  ├─ phone: string
│  ├─ website: string
│  ├─ operatingHours: {
│  │  ├─ weekday: {from: "8:00", to: "18:00"}
│  │  └─ weekend: {from: "9:00", to: "17:00"}
│  │}
│  ├─ childcareInfo: {
│  │  ├─ capacity: integer
│  │  ├─ vacancies: integer
│  │  ├─ ageGroups: ["0-1", "1-2", "2-3"]
│  │  ├─ features: [string] ("認可保育園", "給食あり", "延長保育あり"など)
│  │  └─ monthlyFee: {
│  │      ├─ standard: integer
│  │      └─ byIncome: [{income_range, fee}]
│  │  }
│  │}
│  ├─ hospital Info: {
│  │  ├─ specialty: [string]
│  │  ├─ acceptsNewPatients: boolean
│  │  └─ languages: [string]
│  │}
│  ├─ reviews: [{
│  │  ├─ userId: string
│  │  ├─ rating: 1-5
│  │  ├─ text: string
│  │  └─ createdAt: timestamp
│  │}]
│  ├─ relatedServices: [string]
│  └─ lastUpdatedAt: timestamp
```

#### **communityGroups** コレクション（地域の親の会等）

```firestore
communityGroups/
├─ {groupId}
│  ├─ name: string (グループ名)
│  ├─ description: string
│  ├─ type: "pta" | "playgroup" | "support_group" | "other"
│  ├─ ageTarget: {start: 0, end: 12}
│  ├─ location: {
│  │  ├─ address: string
│  │  ├─ district: string
│  │  └─ coordinates: geopoint
│  │}
│  ├─ schedule: {
│  │  ├─ day: string ("毎週木曜")
│  │  ├─ time: string ("10:00-12:00")
│  │  └─ frequency: string
│  │}
│  ├─ contact: {
│  │  ├─ phone: string
│  │  ├─ email: string
│  │  └─ person: string
│  │}
│  ├─ memberCount: integer
│  ├─ activities: [string] (どのような活動をしているか)
│  ├─ relatedRmoGroup: string (RMO OSでの団体ID)
│  └─ createdAt: timestamp
```

---

## 5. 機能仕様

### 5.1 ライフイベントナビ

```
【ユーザーフロー】

Step 1: ライフイベント選択
  └─ 「今のあなたの状況は？」
  └─ ボタン：「妊娠した」「出産した」「乳幼児」「未就学児」「小学校」「困った・相談」

Step 2: 詳細入力
  └─ 「詳しく教えてください」
  └─ 月数・月齢、世帯構成、所得（任意）

Step 3: 時間軸表示
  └─ 「これからのステップ」
  └─ 月ごとに「今月やること」「使える制度」を表示

Step 4: チェックリスト
  └─ 「やることリスト」
  └─ 期限、関連制度、所要時間を表示

【出力】
- ライフイベント用タイムライン
- 制度・手続きのチェックリスト
- 相談窓口（ステージごとに最適な窓口を提示）
```

### 5.2 制度検索（逆検索）

```
【入力】
- 子どもの年齢（月齢）
- 世帯構成（両親、シングル、祖父母など）
- 世帯年収（任意）
- その他の条件（障害、療育中など）

【処理】
Firestore から該当する service を抽出
  ├─ eligibility 条件でフィルタリング
  ├─ マッチングスコア計算
  └─ 関連度順にソート

【出力】
- 該当制度一覧（優先度順）
- 各制度の要約
- 「詳しく見る」のリンク
- 「今すぐ申請」のボタン
```

### 5.3 AIナビ（キラー機能）

```
【仕組み】

ユーザー入力：
「保育園に入れたいけど、費用がいくらかかるか分からない」

AI処理：
1. Gemini API に送信
2. 質問の意図を解析
3. 関連する制度を特定
   ├─ 「保育料」
   ├─ 「保育料補助」（所得による）
   ├─ 「多子世帯減免」
   └─ 「待機児童家庭支援」
4. ユーザーの条件に基づく計算
5. 自然言語での回答生成

出力例：
「お子さんが2歳で、世帯年収550万円の場合、
月額保育料は約35,000円です。
ただし、宇土市の保育料補助制度で、
月額約8,000円が助成されるため、
実質負担は約27,000円になります。
また、下のお子さんが生まれた場合は
さらに減免があります。」

【会話履歴】
- ユーザーとAIの会話を保存
- 「この質問を後で見る」機能
- 「この内容を家族と共有」機能
```

### 5.4 マイページ & 通知

```
【子ども情報管理】
- 子どもの生年月日入力
- 成長段階に応じた情報の自動推奨

【申請状況確認】
- 過去の申請一覧
- 現在進行中の申請状況
- 通知管理

【個別化通知】
例：「〇〇さん、来月▲▲の申請期限が近づいています」
例：「お子さんが3歳になりました。新しく使える制度があります」

【お気に入り & ブックマーク】
- よく見る制度
- 後で見たい記事
```

### 5.5 マップ機能

```
【表示内容】
- 保育園（空き情報付き）
- 小児科医・病院
- 子育て支援センター
- 図書館など

【インタラクション】
- 現在地から検索
- 施設の詳細情報表示
- 電話・ナビゲーション

【フィルター】
- 年齢対応
- 開館時間
- 評価スコア
```

---

## 6. 制度データベース（仕様例）

### 宇土市が管理する制度例

```
【妊娠・出産】
- 妊婦検診費補助：最大15回×3000円
- 出産祝い金：30万円（第3子以降50万円）
- 母子健康手帳の配布：妊娠届出時
- 両親学級：妊娠7ヶ月～

【乳幼児】
- 児童手当：月額5,000～15,000円
- 医療費助成：自己負担200円（就学前）
- 保育園入園選考
- 一時保育

【保育園・教育**
- 認可保育園：月額5,000～39,500円（世帯年収による）
- 幼稚園：月額10,000～25,000円
- 保育料補助：多子世帯、ひとり親世帯
- 就園奨励金

【小中学校】
- 就学援助：給食費・教科書代補助
- 医療費助成継続：小学6年生まで
- スクールバス利用：無料

【困った時・相談】
- 児童発達支援：月額0～15,000円（所得限度あり）
- 療育相談窓口：無料
- 子育てホットライン：24時間
- 親子支援センター：利用料無料
```

---

## 7. AI活用の実装詳細

### 7.1 Gemini APIの連携

```
【環境変数】
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-2.0-flash (最新)

【プロンプト設計】
システムプロンプト：
"""
あなたは宇土市の子育て支援制度に詳しい
アシスタントです。

ユーザーの質問に対して：
1. 関連する制度を特定
2. ユーザーの状況に基づいて計算
3. 簡潔で分かりやすく説明する
4. 常に最新の制度情報を使用

参考データ：
{{services_database}}
"""

【実装フロー】
1. ユーザー入力受取
2. ユーザー情報（子どもの年齢、世帯状況）をコンテキストに追加
3. Gemini API にリクエスト
4. レスポンスをパース
5. 関連リンク・ボタンを自動追加
```

### 7.2 制度DB との連携

```
Gemini の回答で制度が言及された場合：
  ↓
「詳しく見る」リンクを自動生成
  ↓
「今すぐ申請」ボタンを自動生成
  ↓
申請フォーム or 市HPへ遷移
```

---

## 8. UX / UI 設計原則

```
【デザイン原則】
1. シンプルで分かりやすい
   - 色数を制限（2～3色）
   - アイコン多用
   - テキストは最小限

2. スマートフォン最適化
   - タッチターゲット：48px以上
   - タップ可能な要素が明確
   - スクロール最小化

3. 進捗が見える
   - プロセスインジケーター
   - チェックボックス
   - ビジュアルな進捗表示

4. 親切なエラーハンドリング
   - 何がダメかをはっきり説明
   - 修正方法を提示
   - 日本語で親切に

【アクセシビリティ】
- WCAG 2.1 AA 準拠
- スクリーンリーダー対応
- 高コントラスト
- フォント：最小14px
```

---

## 9. 宇土OS連携

```
【市民ポータル との連携】
- ログイン統一（Firebase Auth）
- 制度情報を市民ポータルにシンジケート
- 申請状況を一元表示

【RMO OS との連携】
- 地域の親の会情報を表示
- PTA活動の日程共有
- コミュニティイベント情報

【教育OS との連携】
- 学校情報と子育て支援のセット表示
- 就学支援情報

【行政内部との連携】
- 申請データが福祉課に自動送信
- 受付・処理状況の自動更新
- 承認通知の自動配信
```

---

## 10. 成功指標（KPI）

```
【利用指標】
- 月間ユーザー数：目標2,000人
- 月間制度検索数：目標5,000件
- AIナビ利用数：目標1,000件
- マイページ登録率：目標40%

【成果指標】
- 制度利用率：従来の80% → 95%（+15pt）
- オンライン申請率：目標60%
- ユーザー満足度：4.0以上（5段階）
- クリック数削減：平均5クリック → 3クリック

【市内効果】
- 窓口業務削減：事務員 0.5人分
- 取りこぼし削減：申請漏れ 30%削減
```

---

## 11. セキュリティ & プライバシー

```
【個人情報保護】
- Firestore セキュリティルール：ユーザー自身のデータのみアクセス
- 子ども情報：保護者のみアクセス
- 所得情報：暗号化フィールド

【GDPR / 個人情報保護法対応】
- プライバシーポリシー明示
- 同意フロー
- データ削除機能

【監査証跡】
- すべての申請・変更をログ記録
- 市の監査対応可能
```

---

## 12. 開発・運用体制

```
【開発】
Phase 1（基本機能）：3ヶ月
Phase 2（AI ナビ）：2ヶ月
Phase 3（拡張・最適化）：2ヶ月

【運用】
- 制度情報の更新（市職員が実施）
- 利用者サポート（メール・LINE）
- 定期的な改善（ユーザーフィードバック）

【チーム】
- エンジニア：2～3名
- デザイナー：1名
- PM：1名
- 市担当者：0.5人分
```

---

**最終更新:** 2026-05-06  
**ステータス:** 完全仕様書完成  
**次ステップ:** 実装ガイド、使用例の作成
