---
id: relocation_os_specification_20260506
type: system_specification
title: "移住・定住OS 詳細仕様書"
created: 2026-05-06
status: active
tags: [移住・定住OS, 仕様書, 空き家活用, 定住促進]
---

# 移住・定住OS - 詳細仕様書

**関連する宇土OS層と機能OS:**
- [[layer_structure_guide|🟥 8層構造統合ガイド]]
- [[L2_issue_layer|🟧 L2 課題レイヤ（人口減少）]]
- [[L4_finance_layer|🟩 L4 財源レイヤ]]
- [[L6_policy_layer|🟪 L6 政策レイヤ（移住・定住）]]
- [[vision_uto_os|🟫 L7 ビジョンレイヤ]]
- [[industry_os_specification|🔗 産業OS（雇用創出）]]
- [[education_os_specification|🔗 教育OS（学校環境）]]
- [[childcare_os_specification|🔗 子育てOS（子育て環境）]]
- [[relocation_os_implementation|📋 移住・定住OS 実装ガイド]]
- [[relocation_os_use_cases|📋 移住・定住OS ユースケース]]

---

## 📋 概要

移住・定住OSは、**宇土市への移住を「試験的な試み」から「定住への確実な変換」に転換させるデジタルプラットフォーム**です。空き家活用、仕事マッチング、暮らしの情報統合を通じて、**年30-50世帯の定住化を実現**し、人口減少に歯止めをかけます。

**目的：**
- 空き家活用による移住受け入れ環境整備
- 移住候補者の「試す→定住」プロセスの支援
- 仕事・住宅・暮らしの総合マッチング
- 移住者と地域の継続的な関係構築
- 市の人口減少を年-2%から0%へ転換

**対象ユーザー：**
- 移住希望者（首都圏・福岡圏の30-50代、子育て世帯）
- 空き家オーナー（賃貸・売却希望者）
- 企業・自営業（移住者の就業先）
- 地域コミュニティ（RMO）
- 市職員（移住支援担当）

---

## 🏗️ Firestore データ構造

### 1. users コレクション

```
users/{userId}
├─ email: string
├─ name: string
├─ role: "migrant" | "homeowner" | "employer" | "resident" | "admin"
├─ phone: string
├─ avatar_url: string
├─ migrant_profile: {（移住希望者の場合）
│  ├─ status: "exploring" | "trial_period" | "settled"
│  ├─ age: number
│  ├─ household_type: "single" | "couple" | "family_with_children"
│  ├─ children_count: number
│  ├─ children_ages: array
│  ├─ job_preference: string
│  ├─ desired_location: string（地域希望）
│  ├─ budget_range: {min: number, max: number}（月額賃料等）
│  ├─ interests: array（農業、ものづくり、教育等）
│  ├─ trial_house_history: array（試験住宅の利用履歴）
│  └─ interview_results: array（市職員との面談記録）
├─ homeowner_profile: {（空き家オーナーの場合）
│  ├─ properties: array（property_id）
│  ├─ preferences: {
│  │  ├─ rental_or_sale: "rent" | "sale" | "both"
│  │  ├─ target_tenant: "migrant" | "any"
│  │  └─ rent_price: number
│  └─ contact_preference: "phone" | "email" | "direct"
└─ created_at: timestamp
```

### 2. properties コレクション

```
properties/{propertyId}
├─ address: string
├─ geopoint: geopoint
├─ owner_id: string
├─ property_type: "house" | "apartment" | "small_business_space"
├─ year_built: number
├─ condition: "good" | "fair" | "needs_repair"
├─ features: {
│  ├─ rooms: number
│  ├─ bathrooms: number
│  ├─ kitchen: "modern" | "basic" | "needs_upgrade"
│  ├─ yard: boolean
│  ├─ parking: boolean
│  ├─ proximity_to_school: number（距離）
│  └─ proximity_to_station: number
├─ images: array（URL）
├─ description: string
├─ listing_type: "sale" | "rental"
├─ price: number（売却価格または月額賃料）
├─ available_date: timestamp
├─ trial_house: boolean（試験住宅として利用可否）
├─ trial_house_duration: number（最大月数）
├─ trial_house_cost: number（試験期間中の費用）
├─ status: "available" | "reserved" | "occupied" | "delisted"
├─ inquiries: array（object）
│  ├─ inquirer_id: string
│  ├─ inquiry_date: timestamp
│  ├─ message: string
│  ├─ status: "new" | "contacted" | "viewing_scheduled" | "closed"
│  └─ notes: string
└─ created_at: timestamp
```

### 3. trial_houses コレクション

```
trial_houses/{trialId}
├─ property_id: string
├─ migrant_id: string
├─ start_date: timestamp
├─ end_date: timestamp
├─ duration_months: number
├─ cost_per_month: number（試験期間の月額）
├─ status: "ongoing" | "completed" | "cancelled"
├─ experience_log: array（object）
│  ├─ date: timestamp
│  ├─ entry: string（移住者の日記・感想）
│  ├─ mood: number（満足度 1-5）
│  └─ challenges: array（困ったことなど）
├─ community_interactions: array（object）
│  ├─ date: timestamp
│  ├─ activity: string（地域行事参加等）
│  ├─ people_met: array（string: 名前）
│  └─ impressions: string
├─ job_exploration: array（object）
│  ├─ company_name: string
│  ├─ position: string
│  ├─ interview_date: timestamp
│  ├─ result: "offered" | "rejected" | "pending"
│  └─ notes: string
├─ children_school_visits: array（学校見学記録）
├─ feedback_at_end: {
│  ├─ would_move_permanently: boolean
│  ├─ satisfaction_score: number
│  ├─ liked_most: string
│  ├─ challenges_faced: string
│  └─ suggestions: string
└─ settlement_decision: {
   ├─ decided: boolean
   ├─ decision_date: timestamp
   └─ next_steps: string
}
```

### 4. job_opportunities コレクション

```
job_opportunities/{jobId}
├─ title: string
├─ company_id: string
├─ description: string
├─ salary_range: {min: number, max: number}
├─ location: {address: string, geopoint: geopoint}
├─ remote_possible: boolean
├─ required_skills: array
├─ industry: string
├─ job_type: "full_time" | "part_time" | "freelance" | "startup"
├─ migrant_friendly: boolean（移住者歓迎）
├─ relocation_support: boolean（移住補助あり）
├─ posting_date: timestamp
├─ applications: array（object）
│  ├─ migrant_id: string
│  ├─ application_date: timestamp
│  ├─ status: "submitted" | "interviewed" | "offered" | "rejected"
│  └─ notes: string
└─ created_at: timestamp
```

### 5. migration_support_programs コレクション

```
migration_support_programs/{programId}
├─ name: string（例：「若年世帯移住支援」）
├─ description: string
├─ eligibility_criteria: {
│  ├─ age_range: {min: number, max: number}
│  ├─ household_type: array（single, family等）
│  ├─ income_requirement: string
│  └─ job_requirement: string
├─ benefits: array（object）
│  ├─ benefit_type: "housing_subsidy" | "job_placement" | "childcare_support"
│  ├─ amount: number
│  └─ duration_months: number
├─ total_budget: number（年間予算）
├─ applications_this_year: number
├─ approved_count: number
├─ success_rate: number
└─ created_at: timestamp
```

### 6. community_groups コレクション

```
community_groups/{groupId}
├─ name: string
├─ description: string
├─ type: "neighborhood_association" | "hobby_group" | "parent_group" | "volunteer"
├─ location: {address: string, geopoint: geopoint}
├─ leader_id: string
├─ members: array（user_id）
├─ meeting_schedule: string（月1回等）
├─ activities: array（例：清掃、祭り、勉強会等）
├─ newcomer_welcome_program: boolean
├─ contact_info: {phone: string, email: string}
└─ created_at: timestamp
```

### 7. relocation_progress_tracking コレクション

```
relocation_progress_tracking/{trackingId}
├─ migrant_id: string
├─ stage: "awareness" | "exploration" | "trial" | "decision" | "settlement"
├─ timeline: array（object）
│  ├─ stage_name: string
│  ├─ date_entered: timestamp
│  ├─ expected_duration: number（日数）
│  ├─ milestones: array
│  │  ├─ milestone_name: string
│  │  ├─ completed: boolean
│  │  └─ completion_date: timestamp
│  ├─ support_provided: array（市が提供したサポート）
│  └─ satisfaction: number
└─ overall_progress: number（%）
```

---

## 🛣️ URL ルート構造

```
/uto-relocation（メインナビゲーション）
├─ /dashboard
│  ├─ /migrant （移住希望者向け）
│  ├─ /homeowner （空き家オーナー向け）
│  ├─ /employer （企業向け）
│  └─ /admin （市職員向け）
├─ /properties
│  ├─ （物件一覧）
│  ├─ /search （検索・フィルタリング）
│  ├─ /properties/{propertyId}
│  │  ├─ /overview
│  │  ├─ /images
│  │  ├─ /contact-owner
│  │  ├─ /trial-house-inquiry
│  │  └─ /reviews
│  └─ /register-property （オーナー向け物件登録）
├─ /trial-houses
│  ├─ （試験住宅一覧）
│  ├─ /how-it-works （仕組み説明）
│  ├─ /my-trial-house （現在の試験住宅）
│  ├─ /experience-log （体験記）
│  └─ /feedback （終了後フィードバック）
├─ /jobs
│  ├─ （求人一覧）
│  ├─ /search （職種・給与検索）
│  ├─ /job/{jobId}
│  │  ├─ /details
│  │  ├─ /company-info
│  │  └─ /apply
│  └─ /my-applications （応募状況）
├─ /community
│  ├─ （地域コミュニティ一覧）
│  ├─ /groups （自治会・PTA等）
│  ├─ /events （地域イベント）
│  ├─ /volunteer （ボランティア）
│  └─ /newcomer-welcome （移住者ウェルカムプログラム）
├─ /support
│  ├─ /programs （支援プログラム一覧）
│  ├─ /schools （教育環境）
│  ├─ /healthcare （医療・福祉）
│  ├─ /childcare （保育）
│  ├─ /lifestyle （生活情報）
│  └─ /faq （よくある質問）
├─ /my-journey
│  ├─ /progress （進捗状況）
│  ├─ /checklist （やることリスト）
│  ├─ /contacts （相談相手）
│  └─ /documents （申請書類等）
└─ /admin
   ├─ /analytics （移住統計）
   ├─ /program-management （支援プログラム管理）
   ├─ /property-management （物件管理）
   └─ /migrant-support （移住者支援）
```

---

## 🎨 技術スタック

| レイヤ | 技術 | 用途 |
|-------|------|------|
| **フロントエンド** | Next.js 14（TypeScript） | メインアプリケーション |
| | Material-UI / Tailwind CSS | UI |
| **バックエンド** | Firebase Cloud Functions | サーバーレス関数 |
| **データベース** | Firestore | NoSQL |
| **認証** | Firebase Auth | ユーザー認証 |
| **ストレージ** | Firebase Storage | 物件画像・ドキュメント |
| **地図** | Google Maps API | 物件検索・地域情報表示 |
| **CRM** | SendGrid | メール通知 |
| **AI** | Gemini API | 移住相談チャット |
| **ホスティング** | Vercel | 本番運用 |

---

## 🎯 主要機能

### 1. 空き家物件情報管理

**機能：**
- オーナーが物件を登録（売却・賃貸・試験住宅）
- 画像・説明・設備情報
- リアルタイム在庫管理
- 問い合わせ・内見予約機能

### 2. 試験住宅（Trial House）システム

**機能：**
- 数ヶ月の試験居住
- 体験日記・コミュニティ交流ログ
- 実際に暮らして「本当に移住するか」を判断
- 移住への心理的ハードル低減

**特徴：**
```
「試験住宅」 = 「移住への変換装置」
試験期間中の月額：通常賃料より安い
試験終了後：購入・賃貸契約への円滑な転換
```

### 3. 仕事マッチング

**機能：**
- 移住者向けの求人検索
- 企業の「移住者歓迎」フラグ
- 移住補助制度のある企業情報
- 試験住宅期間中の就職活動支援

### 4. 「家 × 仕事 × 暮らし」統合サポート

**機能：**
- ワンストップでの移住準備
- チェックリスト（やることリスト）
- 市職員との個別相談
- 進捗管理ダッシュボード

### 5. コミュニティ融合プログラム

**機能：**
- 移住者ウェルカムプログラム
- 地域コミュニティとのマッチング
- イベント・ボランティア情報
- 「地域の一員」になるための支援

### 6. 移住支援プログラム管理

**機能：**
- 住宅補助（初期費用補助、月額補助）
- 就職支援（給与補助、資格取得支援）
- 子育て支援（保育料補助等）
- 移住者の段階に応じた支援

### 7. AI 移住相談チャット

**機能：**
- 「〇〇について知りたい」→ Gemini API が自動回答
- 学校環境、医療、生活費等の質問対応
- 24/7利用可能

---

## 📊 KPI と目標

### 3年間の成長目標

```
【移住者数】
2026年：20世帯
2027年：35世帯
2028年：50世帯
→ 累計105世帯の定住化

【人口への寄与】
毎年 -2% → 毎年 -1% へ（-100人削減）
3年で 300人の流出減少

【空き家活用】
登録物件数：50件 → 100件
活用中の空き家：10件 → 40件

【就職マッチング】
移住者就業率：80%以上
移住による新規雇用：100名

【試験住宅の成功率】
試験後の定住率：70%以上
```

---

## 🚀 展開フェーズ

| フェーズ | 時期 | 主要活動 |
|---------|------|--------|
| **フェーズ1** | 2026年5月～7月 | 基盤構築、物件登録開始（20件） |
| **フェーズ2** | 2026年8月～12月 | 試験住宅開始、就職マッチング機能追加 |
| **フェーズ3** | 2027年～ | 全国展開、定住率追跡 |

---

**最終更新:** 2026-05-06  
**ステータス:** 仕様書完成  
**次ステップ:** 実装ロードマップ作成
