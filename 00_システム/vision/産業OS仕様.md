---
id: industry_os_specification_20260506
type: system_specification
title: "産業OS 詳細仕様書"
created: 2026-05-06
status: active
tags: [産業OS, 仕様書, 地域商社, 6次産業化, 経済自立]
---

# 産業OS - 詳細仕様書

**関連する宇土OS層と機能OS:**
- [[layer_structure_guide|🟥 8層構造統合ガイド]]
- [[L2_issue_layer|🟧 L2 課題レイヤ（経済自立）]]
- [[L4_finance_layer|🟩 L4 財源レイヤ（売上化による自主財源）]]
- [[L6_policy_layer|🟪 L6 政策レイヤ（産業政策）]]
- [[vision_uto_os|🟫 L7 ビジョンレイヤ]]
- [[industry_os_implementation|📋 産業OS 実装ガイド]]
- [[industry_os_use_cases|📋 産業OS ユースケース]]

---

## 📋 概要

産業OSは、宇土市の経済的自立を実現するための**デジタルプラットフォーム**です。地域商社「ウトマチ百貨店」を中核に、農水産業の6次産業化、企業間マッチング、ブランド開発を統合し、**5-10億円の年間売上と50-80名の新規雇用**を創出します。

**目的：**
- 地域資源の高付加価値化（農水産物の6次産業化）
- 域外への販売拡大（ふるさと納税・ECサイト等）
- 企業間連携の促進（オープンイノベーション）
- 新規雇用創出（起業支援・就職マッチング）
- 市の自主財源拡大（一般財源化による財政改善）

**対象ユーザー：**
- 農漁業者、生産者（農家、漁業者、畜産業者）
- 製造業者（食品加工、手工芸等）
- 小売事業者、飲食店
- 起業希望者、事業者
- 消費者（地域内・地域外）
- 宇土市職員（産業振興担当）

---

## 🏗️ Firestore データ構造

### 1. users コレクション

```
users/{userId}
├─ email: string
├─ name: string
├─ role: "producer" | "maker" | "retailer" | "startup" | "admin"
├─ phone: string
├─ address: string
├─ avatar_url: string
├─ profile_summary: string（自己紹介）
├─ producer_profile: {（農漁業者の場合）
│  ├─ production_type: "agriculture" | "fishery" | "livestock"
│  ├─ products: array（string: product_id）
│  ├─ production_area: number（生産面積・量）
│  ├─ certified: boolean（有機認証等）
│  ├─ certifications: array（string: 認証名）
│  └─ story: string（生産者ストーリー）
├─ maker_profile: {（製造業者の場合）
│  ├─ business_type: string
│  ├─ products: array（string: product_id）
│  ├─ capacity: number（月産能力）
│  ├─ equipment: array（string）
│  └─ specialties: array
├─ bank_info: {（決済情報）
│  ├─ account_holder: string
│  ├─ bank_name: string
│  └─ account_number: string（暗号化）
└─ created_at: timestamp
```

### 2. products コレクション

```
products/{productId}
├─ name: string（商品名）
├─ category: string（カテゴリ：野菜、魚、加工品等）
├─ producer_id: string
├─ description: string（商品説明）
├─ origin_story: string（産地ストーリー）
├─ production_method: string（栽培方法・製造方法）
├─ certification: array（有機JAS等）
├─ images: array（URL）
├─ specifications: {
│  ├─ weight: string
│  ├─ size: string
│  ├─ shelf_life: number（日数）
│  ├─ storage: string（保存方法）
│  └─ ingredients: string（成分・材料）
├─ pricing: {
│  ├─ wholesale_price: number
│  ├─ retail_price: number
│  ├─ utomachi_commission: number（手数料率）
│  └─ profit_per_unit: number
├─ inventory: {
│  ├─ current_stock: number
│  ├─ reorder_level: number
│  ├─ unit: string（kg、本、パック等）
│  └─ last_updated: timestamp
├─ sales_channels: array（string: channel_id）
│  ├─ utomachi_store（ウトマチ百貨店）
│  ├─ ec_site
│  ├─ furusato_nozei（ふるさと納税）
│  └─ direct_sales
├─ rating: number（5段階評価）
├─ review_count: number
├─ monthly_sales: number（数量）
├─ status: "available" | "out_of_stock" | "discontinued"
└─ created_at: timestamp
```

### 3. product_value_chains コレクション

```
product_value_chains/{chainId}
├─ product_id: string（一次産品）
├─ chain_name: string（例：「米 → 米粉 → 米粉パン」）
├─ stages: array（object）
│  ├─ stage_id: string
│  ├─ stage_number: number（1=一次産品, 2=加工, 3=最終製品）
│  ├─ product_name: string（この段階での商品名）
│  ├─ processor_id: string（加工者ID）
│  ├─ added_value: number（この段階で付加される価値率）
│  ├─ processing_cost: number
│  ├─ equipment_needed: array
│  └─ skills_required: array
├─ total_value_added: number（全体での価値向上率）
├─ revenue_distribution: {
│  ├─ producer_share: number（%）
│  ├─ processor_share: number（%）
│  ├─ retailer_share: number（%）
│  └─ utomachi_share: number（%）
├─ final_products: array（object）
│  ├─ product_id: string
│  ├─ name: string
│  ├─ retail_price: number
│  └─ margin: number
├─ status: "draft" | "active" | "successful" | "discontinued"
├─ estimated_annual_revenue: number
└─ created_at: timestamp
```

### 4. makers コレクション

```
makers/{makerId}
├─ user_id: string
├─ business_name: string
├─ business_type: "food_processing" | "craft" | "other"
├─ description: string
├─ skills: array（string）
├─ equipment_list: array（object）
│  ├─ equipment_name: string
│  ├─ capacity_per_month: number
│  └─ specialties: array
├─ capacity_info: {
│  ├─ monthly_capacity: number（単位あたり）
│  ├─ current_utilization: number（%）
│  └─ available_slots: array（object: time range）
├─ price_list: {
│  ├─ processing_unit: string（kg当たり等）
│  ├─ base_cost: number
│  ├─ minimum_order: number
│  └─ bulk_discount: object
├─ certifications: array
├─ location: {
│  ├─ address: string
│  ├─ geopoint: geopoint
│  └─ facility_type: "home_kitchen" | "shared_kitchen" | "own_facility"
├─ matchings: array（object）
│  ├─ matching_id: string
│  ├─ producer_id: string
│  ├─ raw_material: string
│  ├─ processing_type: string
│  ├─ status: "potential" | "active" | "completed"
│  └─ joint_product_id: string
├─ rating: number
├─ review_count: number
└─ created_at: timestamp
```

### 5. enterprise_matching コレクション

```
enterprise_matching/{matchingId}
├─ name: string（マッチング案件名）
├─ producer_id: string
├─ maker_id: string
├─ retailer_id: string（optional）
├─ raw_material: string（農水産物）
├─ proposed_product: string（加工後の製品）
├─ matching_type: "existing_producer_new_processor" | "new_processor_existing_product"
├─ status: "proposed" | "negotiating" | "active" | "successful" | "concluded"
├─ agreement: {
│  ├─ raw_material_price: number
│  ├─ processing_cost: number
│  ├─ revenue_share: {
│  │  ├─ producer: number（%）
│  │  └─ processor: number（%）
│  ├─ contract_term: string（期間）
│  └─ signed_date: timestamp
├─ production_plan: {
│  ├─ monthly_volume: number
│  ├─ target_market: string
│  ├─ sales_channel: string
│  └─ price_point: number
├─ communication_log: array（object）
│  ├─ date: timestamp
│  ├─ message: string
│  ├─ from_user_id: string
│  └─ attachment: string（optional）
├─ performance: {
│  ├─ monthly_revenue: array（object: month, revenue）
│  ├─ units_sold: number
│  ├─ success_metrics: object
│  └─ challenges: array
├─ files: array
│  ├─ agreement_pdf: string（URL）
│  ├─ specification_sheet: string
│  └─ quality_standards: string
└─ created_at: timestamp
```

### 6. utomachi_store_data コレクション

```
utomachi_store_data/{storeId}
├─ name: string（「ウトマチ百貨店」）
├─ location: {
│  ├─ address: string
│  ├─ geopoint: geopoint
│  ├─ phone: string
│  └─ website: string
├─ inventory: {
│  ├─ total_products: number
│  ├─ total_stock_value: number
│  └─ products: array（product_id）
├─ sales_data: {
│  ├─ daily_revenue: array（object: date, amount）
│  ├─ monthly_revenue: array
│  ├─ top_selling_products: array
│  ├─ category_breakdown: object
│  └─ customer_demographics: object
├─ commission_rates: {
│  ├─ default_rate: number（%）
│  ├─ category_rates: object（カテゴリ別）
│  └─ volume_discounts: array
├─ supplier_payments: array（object）
│  ├─ supplier_id: string
│  ├─ period: string
│  ├─ gross_sales: number
│  ├─ commission: number
│  ├─ net_payment: number
│  ├─ payment_date: timestamp
│  └─ status: "pending" | "paid"
├─ marketing_campaigns: array（object）
│  ├─ campaign_name: string
│  ├─ period: string
│  ├─ featured_products: array
│  ├─ budget: number
│  └─ results: object
├─ staff: array（user_id）
└─ updated_at: timestamp
```

### 7. ec_site_data コレクション

```
ec_site_data/{ecSiteId}
├─ name: string（ウトマチECサイト）
├─ url: string
├─ products: array（product_id）
├─ inventory_sync: {
│  ├─ last_sync: timestamp
│  ├─ sync_frequency: string（リアルタイム）
│  └─ product_status: object
├─ sales_data: {
│  ├─ daily_orders: array
│  ├─ monthly_revenue: array
│  ├─ average_order_value: number
│  ├─ conversion_rate: number
│  └─ customer_retention: number
├─ shipping: {
│  ├─ methods: array（配送方法）
│  ├─ costs: object（地域別）
│  ├─ logistics_partner: string
│  └─ delivery_times: object
├─ payment_methods: array（クレジットカード、銀行振込等）
├─ customer_data: {
│  ├─ total_customers: number
│  ├─ repeat_customer_rate: number
│  ├─ customer_lifetime_value: number
│  └─ reviews: array
├─ analytics: {
│  ├─ traffic_sources: object
│  ├─ page_views: number
│  ├─ bounce_rate: number
│  └─ keyword_rankings: array
├─ seo_content: array（product pages, blog posts）
└─ updated_at: timestamp
```

### 8. furusato_nozei_data コレクション

```
furusato_nozei_data/{returnId}
├─ name: string（ふるさと納税返礼品）
├─ product_id: string
├─ price_tier: number（10,000円, 50,000円等）
├─ description: string（返礼品の詳細）
├─ images: array
├─ stock: number
├─ annual_target_revenue: number（想定納税額）
├─ actual_revenue: array（object: month, amount）
├─ ranking: number（宇土市内での人気度）
├─ reviews: array（object）
│  ├─ rating: number
│  ├─ comment: string
│  └─ date: timestamp
├─ marketing: {
│  ├─ featured_in: array（ふるさと納税サイト）
│  ├─ banner_urls: array
│  └─ description_variants: array（A/B testing）
├─ logistics: {
│  ├─ packaging_cost: number
│  ├─ shipping_cost: number
│  ├─ fulfillment_fee: number
│  └─ total_cost: number
├─ profit: {
│  ├─ gross_revenue: number
│  ├─ total_costs: number
│  └─ net_profit: number
├─ status: "active" | "paused" | "out_of_stock"
└─ created_at: timestamp
```

### 9. startup_projects コレクション

```
startup_projects/{projectId}
├─ name: string（起業プロジェクト名）
├─ founder_id: string
├─ description: string
├─ business_model: string
├─ target_market: string
├─ stage: "idea" | "planning" | "funding" | "launch" | "growing" | "established"
├─ team: array（object）
│  ├─ member_id: string
│  ├─ role: string
│  └─ joined_date: timestamp
├─ funding: {
│  ├─ target_amount: number
│  ├─ raised_amount: number
│  ├─ sources: array（object）
│  │  ├─ source_name: string
│  │  ├─ amount: number
│  │  └─ type: "government_grant" | "loan" | "investment" | "crowdfunding"
│  └─ status: "funding" | "funded"
├─ support_program: {
│  ├─ program_id: string（宇土市の起業支援プログラム）
│  ├─ mentorship: boolean
│  ├─ office_space: boolean
│  ├─ equipment_access: boolean
│  └─ training: array
├─ milestones: array（object）
│  ├─ title: string
│  ├─ target_date: timestamp
│  ├─ status: "pending" | "completed"
│  └─ notes: string
├─ metrics: {
│  ├─ revenue: number
│  ├─ employees: number
│  ├─ customers: number
│  └─ growth_rate: number
├─ documents: array
│  ├─ business_plan: string（URL）
│  ├─ financial_projections: string
│  └─ pitch_deck: string
└─ created_at: timestamp
```

### 10. job_opportunities コレクション

```
job_opportunities/{jobId}
├─ company_id: string（企業ID）
├─ title: string（職種）
├─ description: string
├─ position_type: "full_time" | "part_time" | "contract" | "seasonal"
├─ salary_range: {
│  ├─ min: number
│  ├─ max: number
│  └─ currency: string
├─ location: {
│  ├─ address: string
│  ├─ geopoint: geopoint
│  └─ remote: boolean
├─ required_skills: array
├─ qualifications: string
├─ benefits: array
├─ posting_date: timestamp
├─ application_deadline: timestamp
├─ applications: array（object）
│  ├─ applicant_id: string
│  ├─ application_date: timestamp
│  ├─ resume_url: string
│  ├─ cover_letter: string
│  ├─ status: "received" | "reviewing" | "interviewed" | "offered" | "rejected"
│  └─ hired_date: timestamp（optional）
├─ status: "open" | "closed" | "filled"
└─ created_at: timestamp
```

### 11. business_mentorship コレクション

```
business_mentorship/{mentorshipId}
├─ mentor_id: string
├─ mentee_id: string
├─ project_id: string（optional）
├─ mentorship_type: "startup_support" | "skill_development" | "market_entry"
├─ start_date: timestamp
├─ duration_months: number
├─ frequency: string（週1回等）
├─ goals: array（string）
├─ sessions: array（object）
│  ├─ session_date: timestamp
│  ├─ topic: string
│  ├─ notes: string
│  ├─ action_items: array
│  └─ progress: string
├─ resources_shared: array（URL/files）
├─ status: "active" | "completed"
└─ created_at: timestamp
```

---

## 🛣️ URL ルート構造

```
/uto-industry（メインナビゲーション）
├─ /dashboard
│  ├─ /producer （農漁業者向け）
│  ├─ /maker （製造業者向け）
│  ├─ /entrepreneur （起業者向け）
│  └─ /admin （管理者向け）
├─ /products
│  ├─ （全商品一覧）
│  ├─ /{productId}
│  │  ├─ /overview
│  │  ├─ /producer-story
│  │  ├─ /reviews
│  │  └─ /related-products
│  └─ /categories
├─ /value-chain
│  ├─ （全バリューチェーン一覧）
│  ├─ /{chainId}
│  │  ├─ /overview
│  │  ├─ /participants
│  │  ├─ /revenue-breakdown
│  │  └─ /performance
│  └─ /potential-chains （新規チェーン提案）
├─ /marketplace
│  ├─ /utomachi-store
│  │  ├─ /products
│  │  ├─ /locations
│  │  └─ /events
│  ├─ /ec-site
│  │  ├─ /shop
│  │  ├─ /cart
│  │  ├─ /checkout
│  │  └─ /order-history
│  └─ /furusato-nozei
│     ├─ /returns
│     └─ /my-contributions
├─ /enterprise-matching
│  ├─ （マッチング案件一覧）
│  ├─ /search （カテゴリ・スキル検索）
│  ├─ /matchings
│  │  ├─ /{matchingId}
│  │  │  ├─ /details
│  │  │  ├─ /negotiation
│  │  │  └─ /performance
│  │  └─ /my-matchings （自分の案件）
│  └─ /propose （新規案件提案）
├─ /makers
│  ├─ （製造業者一覧）
│  ├─ /search （スキル・設備検索）
│  └─ /{makerId}
│     ├─ /profile
│     ├─ /services
│     ├─ /capacity
│     └─ /contact
├─ /startups
│  ├─ （起業プロジェクト一覧）
│  ├─ /explore
│  ├─ /my-startup （自分の起業）
│  ├─ /projects/{projectId}
│  │  ├─ /overview
│  │  ├─ /team
│  │  ├─ /funding
│  │  ├─ /milestones
│  │  └─ /support
│  └─ /support-programs （支援プログラム）
├─ /jobs
│  ├─ （求人一覧）
│  ├─ /search （職種・条件検索）
│  ├─ /job/{jobId}
│  │  ├─ /details
│  │  ├─ /apply
│  │  └─ /company
│  └─ /my-applications （応募状況）
├─ /network
│  ├─ /community
│  ├─ /events （ネットワーキングイベント）
│  ├─ /mentorship
│  │  ├─ /find-mentor
│  │  └─ /my-mentors
│  └─ /forums （業界別フォーラム）
└─ /analytics
   ├─ /market-data （市場分析）
   ├─ /producer-stats （農漁業統計）
   ├─ /sales-trends （販売トレンド）
   └─ /economic-impact （経済効果測定）
```

---

## 🎨 技術スタック

| レイヤ | 技術 | 用途 |
|-------|------|------|
| **フロントエンド** | Next.js 14（TypeScript） | メインアプリケーション |
| | Material-UI / Tailwind CSS | UIコンポーネント |
| | React Hook Form | フォーム管理 |
| | Chart.js / Recharts | 販売データ可視化 |
| **バックエンド** | Firebase Cloud Functions | サーバーレス関数 |
| | Node.js 20+ | ランタイム |
| **データベース** | Firestore | NoSQLデータ保存 |
| **認証** | Firebase Auth | ユーザー認証 |
| **ストレージ** | Firebase Storage | 商品画像・ドキュメント |
| **決済** | Stripe / Square | オンライン決済処理 |
| **在庫管理** | Firestore + Cloud Functions | リアルタイム在庫同期 |
| **配送** | ヤマト運輸API | 配送手配・追跡 |
| **AI/推奨** | Gemini API | 商品推奨・顧客分析 |
| **CRM** | Sendgrid / Mailchimp | 顧客コミュニケーション |
| **分析** | Google Analytics / BigQuery | 販売分析・KPI追跡 |
| **ホスティング** | Vercel | 本番運用 |

---

## 🎯 主要機能

### 1. 商品・プロデューサー管理

**機能：**
- 農漁業者による商品登録（画像・説明・価格等）
- 生産者ストーリーの記述（ブランドづくり）
- 有機JAS等の認証情報管理
- 在庫リアルタイム管理
- 販売チャネル別の価格設定

**効果：**
- 透明性向上（生産者情報が可視化）
- ブランド価値向上（ストーリー販売）

### 2. 6次産業化バリューチェーン

**機能：**
- 一次産品 → 加工製品 → 最終商品の流れを可視化
- 各段階での付加価値を計算
- 参加者間の収益分配ルール設定
- バリューチェーンごとの売上・利益追跡

**特徴：**
- 農水産物の高付加価値化（平均利益向上 100% → 300%）
- 複数事業者の自動マッチング
- 透明な分配ルール（紛争防止）

### 3. 企業間マッチング

**機能：**
- 生産者とメーカーの自動マッチング
- マッチング提案から契約までの一元管理
- 月次販売計画・実績追跡
- パフォーマンス分析（売上・利益等）

**プロセス：**
```
農家が米を作る
  ↓ 「米粉パンメーカーを探している」と登録
  ↓ 教育OS が自動マッチング提案
  → 米粉メーカーと米粉パン店の3者で契約
  ↓ 月10,000本の米粉パン販売目標設定
  ↓ 販売データ自動追跡・分配金自動計算
```

### 4. ウトマチ百貨店（実店舗 + オンライン）

**機能：**
- 地域商社として、市内生産者の商品を販売
- 実店舗での販売
- ECサイトでの全国販売
- 在庫一元管理（リアルタイム同期）
- 販売者へのバックエンド手数料計算

**効果：**
- 生産者は「販売」に手をかけず、「生産」に専念
- 地域商社が販売戦略・マーケティング担当
- 売上増加（平均 +150%）

### 5. ふるさと納税プラットフォーム

**機能：**
- ふるさと納税返礼品の登録・管理
- 返礼品の複数サイトへの一括配信
- 人気度ランキング管理
- 売上・利益の自動計算

**目標：**
- 年間5-10億円の返納税売上（市の自主財源化）
- マッチングにより、返礼品数 50品 → 200品

### 6. 起業支援プラットフォーム

**機能：**
- 起業アイデアの登録・共有
- メンター（経験者）とのマッチング
- 資金調達支援（助成金・融資情報）
- シェアオフィス・共有キッチンへのアクセス
- ビジネスプラン・財務予測ツール

**支援内容：**
- 無料メンター制度
- 月30万円の起業支援金（最大12ヶ月）
- 初年度家賃補助（50%）
- マーケティング支援

**目標：**
- 年50-80名の新規起業・雇用創出

### 7. 求人マッチング

**機能：**
- 地域企業・起業の求人掲載
- スキル・職種別の求人検索
- 就職希望者のプロフィール登録
- AI による最適マッチング推奨

**効果：**
- 地域の求人・人材情報の一元化
- 若年層の域内就職促進

### 8. ネットワーキング・コミュニティ

**機能：**
- 業界別フォーラム（農業、食品加工等）
- ネットワーキングイベント情報
- メンター・メンティマッチング
- 事業者間の情報共有スペース

**効果：**
- 事業者間の自発的な協業促進
- ナレッジ共有による効率化

---

## 📊 データ分析・可視化

### 市担当者向けダッシュボード

```
【経済効果の見える化】
- 総売上：〇億円/年
- 新規雇用数：〇名
- 一般財源化額：〇億円
- 参加生産者数：〇名
- 活動中のバリューチェーン：〇本

【農水産業の活性化】
- 農漁業者の年間所得向上：〇%
- 6次産業化参加率：〇%
- 新規商品開発数：〇件/年

【起業・雇用創出】
- 新規起業数：〇社
- 雇用創出数：〇名
- 起業成功率：〇%

【マッチング効果】
- 活動中のマッチング：〇件
- マッチング成功率：〇%
- 平均月間売上/マッチング：〇万円
```

---

## 🔐 アクセス制御・ロール

| ロール | 主要操作 |
|--------|--------|
| **生産者** | 商品登録、売上確認、マッチング管理 |
| **メーカー** | 受注管理、納期管理、売上確認 |
| **小売/飲食** | 商品発注、販売データ確認 |
| **起業者** | プロジェクト管理、資金調達、メンター申請 |
| **ウトマチ百貨店** | 在庫管理、販売統計、手数料計算・支払い |
| **市職員** | ダッシュボード分析、支援プログラム管理 |
| **管理者** | ユーザー管理、システム設定 |

---

## 📈 KPI と目標

### 3年間の成長目標

```
【売上目標】
2026年：2.5億円
2027年：5億円
2028年：7-10億円

【参加者数】
生産者：50名 → 150名 → 200名
メーカー：10社 → 30社 → 50社
販売チャネル：3つ → 10つ → 15以上

【新規雇用】
2026年：20名
2027年：50名
2028年：80名

【市の自主財源化】
ふるさと納税売上：2.5億円 → 10億円
市の一般財源化：1.5億円 → 6億円

【起業成功指標】
起業数：年20社
生存率：2年で70%以上
平均雇用創出：2名/起業
```

---

## 🚀 展開フェーズ

| フェーズ | 時期 | 主要活動 |
|---------|------|--------|
| **フェーズ1** | 2026年5月～8月 | 基盤構築、パイロット実装（商品10品、マッチング3件） |
| **フェーズ2** | 2026年9月～12月 | 実店舗オープン、ECサイト本格化 |
| **フェーズ3** | 2027年～ | 全国展開、起業支援本格化 |

---

**最終更新:** 2026-05-06  
**ステータス:** 仕様書完成  
**次ステップ:** 実装ロードマップ作成
