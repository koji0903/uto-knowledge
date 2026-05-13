---
id: education_os_specification_20260506
type: system_specification
title: "教育OS 詳細仕様書"
created: 2026-05-06
status: active
tags: [教育OS, 仕様書, 学校統廃合, うと学, 学びの質向上]
---

# 教育OS - 詳細仕様書

**関連する宇土OS層と機能OS:**
- [[layer_structure_guide|🟥 8層構造統合ガイド]]
- [[L5_infrastructure_layer|🟦 L5 インフラレイヤ（学校統廃合）]]
- [[L6_policy_layer|🟪 L6 政策レイヤ（教育）]]
- [[vision_uto_os|🟫 L7 ビジョンレイヤ]]
- [[rmo_os_specification|🔗 RMO OS（地域連携）]]
- [[education_os_implementation|📋 教育OS 実装ガイド]]
- [[education_os_use_cases|📋 教育OS ユースケース]]

---

## 📋 概要

教育OSは、宇土市の学校統廃合（5校→2-3校）を通じて、**「少人数×質の高い教育環境」を実現し、地域資源を活用した学びの質を向上させるデジタルプラットフォーム**です。

**目的：**
- 児童数減への対応（統廃合の円滑実施）
- 教育環境の質向上（小規模校のメリット活用）
- 地域と学校の連携深化（うと学・ジオパーク学習）
- 保護者・児童の学習ポートフォリオ管理
- 分散型学習支援（RMO との連携）

**対象ユーザー：**
- 教育委員会職員、学校管理職、教員
- 児童・保護者
- 地域学習支援者（PTA、地域人材）
- 市民（学習参加者）

---

## 🏗️ Firestore データ構造

### 1. users コレクション

```
users/{userId}
├─ email: string（一意）
├─ name: string
├─ role: "teacher" | "parent" | "student" | "regional_partner" | "admin"
├─ school_id: string（教員・児童）
├─ phone: string
├─ avatar_url: string
└─ created_at: timestamp
```

### 2. schools コレクション

```
schools/{schoolId}
├─ name: string（例：「宇土小学校」）
├─ code: string（例：「UTO-P-001」）
├─ type: "elementary" | "junior_high"
├─ status: "active" | "consolidated" | "planning"
├─ address: string
├─ geopoint: geopoint
├─ phone: string
├─ principal_id: string
├─ created_year: number
├─ student_count: number（最新）
├─ teacher_count: number
├─ facilities: {
│  ├─ gymnasium: boolean
│  ├─ library: boolean
│  ├─ science_lab: boolean
│  ├─ computer_lab: boolean
│  ├─ classroom_count: number
│  └─ capacity: number
├─ consolidation_info: {
│  ├─ status: "none" | "planning" | "scheduled" | "completed"
│  ├─ target_date: timestamp（予定日）
│  ├─ target_school_id: string（統合先）
│  ├─ transition_plan: string（URL またはパス）
│  └─ communication_log: array
├─ uto_study_programs: array（string: program_id）
└─ community_partnerships: array
```

### 3. classes コレクション

```
schools/{schoolId}/classes/{classId}
├─ name: string（例：「4年1組」）
├─ grade: number（1-6）
├─ teacher_id: string（担任）
├─ co_teachers: array（string: user_id）
├─ student_count: number
├─ students: array（object）
│  ├─ user_id: string
│  ├─ name: string
│  ├─ joined_date: timestamp
│  └─ special_needs: string（optional）
├─ curriculum_id: string（学習指導要領参照）
├─ uto_study_assignments: array（program_id）
└─ class_schedule: {
   ├─ monday: array, tuesday: array, ...（時間割）
   └─ special_activities: array
}
```

### 4. students コレクション

```
students/{studentId}
├─ user_id: string
├─ name: string
├─ birth_date: timestamp
├─ grade: number
├─ class_id: string
├─ school_id: string
├─ parent_ids: array（string）
├─ special_needs: string（optional）
├─ learning_interests: array（例：「理科」「歴史」）
├─ attendance_record: {
│  ├─ present: number
│  ├─ absent: number
│  ├─ late: number
│  └─ updated_at: timestamp
├─ health_info: {
│  ├─ allergies: array
│  ├─ medical_conditions: array
│  └─ emergency_contact: string
├─ portfolio: {
│  ├─ achievements: array（object）
│  ├─ projects: array（reference）
│  ├─ reflection_entries: array（reference）
│  └─ growth_notes: array
└─ created_at: timestamp
```

### 5. uto_study_programs コレクション

```
uto_study_programs/{programId}
├─ name: string（例：「有明海の生態系」）
├─ description: string
├─ grade_level: array（number: 1-6）
├─ duration_weeks: number
├─ learning_objectives: array（string）
├─ geopark_theme: string（例：「有明海」「火成岩」）
├─ content_modules: array（object）
│  ├─ module_id: string
│  ├─ title: string
│  ├─ type: "field_work" | "classroom" | "community_interview" | "lab"
│  ├─ duration_hours: number
│  ├─ location: string（optional）
│  ├─ community_partner_id: string（optional）
│  └─ learning_materials: array（reference）
├─ community_partners: array（object）
│  ├─ partner_id: string（RMO）
│  ├─ name: string
│  ├─ role: string（例：「指導」「現地案内」）
│  └─ contact_info: string
├─ resources: {
│  ├─ teaching_materials_url: string
│  ├─ video_links: array
│  ├─ reference_documents: array
│  └─ digital_content: array
├─ assessment_rubric: {
│  ├─ rubric_url: string
│  ├─ evaluation_criteria: array（object）
│  └─ self_reflection_template: string
├─ related_curriculum: array（string）
├─ status: "draft" | "active" | "archived"
└─ created_by_teacher_id: string
```

### 6. learning_portfolios コレクション

```
learning_portfolios/{portfolioId}
├─ student_id: string
├─ school_year: number（例：2026）
├─ achievements: array（object）
│  ├─ achievement_id: string
│  ├─ date: timestamp
│  ├─ title: string
│  ├─ description: string
│  ├─ category: "academic" | "character" | "skill" | "creative"
│  ├─ evidence_url: string（作品・画像・動画）
│  ├─ teacher_comment: string
│  └─ student_reflection: string
├─ uto_study_projects: array（reference: project_id）
├─ skill_progress: {
│  ├─ literacy: {score: number, date: timestamp, notes: string}
│  ├─ numeracy: {score: number, date: timestamp, notes: string}
│  ├─ scientific_thinking: {score: number, date: timestamp, notes: string}
│  ├─ collaboration: {score: number, date: timestamp, notes: string}
│  └─ creativity: {score: number, date: timestamp, notes: string}
├─ growth_narrative: string（教員による児童の成長描写）
├─ parent_comments: array（保護者からのフィードバック）
└─ updated_at: timestamp
```

### 7. uto_study_projects コレクション

```
schools/{schoolId}/classes/{classId}/uto_study_projects/{projectId}
├─ name: string
├─ program_id: string（参照）
├─ start_date: timestamp
├─ end_date: timestamp
├─ description: string
├─ student_teams: array（object）
│  ├─ team_id: string
│  ├─ name: string
│  ├─ student_ids: array
│  └─ team_lead_id: string
├─ milestones: array（object）
│  ├─ milestone_id: string
│  ├─ title: string
│  ├─ due_date: timestamp
│  ├─ description: string
│  └─ status: "pending" | "in_progress" | "completed"
├─ field_work_log: array（object）
│  ├─ date: timestamp
│  ├─ location: string
│  ├─ activity_description: string
│  ├─ participant_ids: array
│  ├─ photos_url: array
│  └─ observations: string
├─ community_interactions: array（object）
│  ├─ partner_id: string
│  ├─ date: timestamp
│  ├─ activity: string
│  ├─ feedback: string
│  └─ reflection: string
├─ deliverables: array（object）
│  ├─ deliverable_id: string
│  ├─ type: "report" | "poster" | "presentation" | "video" | "website"
│  ├─ title: string
│  ├─ url: string
│  ├─ submission_date: timestamp
│  └─ assessment_score: number
├─ reflection_entries: array（reference: reflection_id）
├─ status: "planning" | "active" | "completed" | "archived"
└─ created_by_teacher_id: string
```

### 8. community_partnerships コレクション

```
community_partnerships/{partnershipId}
├─ school_id: string
├─ rmo_id: string（RMO OS 参照）
├─ organization_name: string
├─ contact_person: string
├─ contact_email: string
├─ contact_phone: string
├─ partnership_type: "field_work_host" | "expert_instructor" | "resource_provider"
├─ programs_involved: array（string: program_id）
├─ start_date: timestamp
├─ status: "active" | "paused" | "concluded"
├─ agreement_doc_url: string（optional）
├─ feedback_log: array（object）
│  ├─ date: timestamp
│  ├─ feedback: string
│  └─ by_user_id: string
└─ updated_at: timestamp
```

### 9. teacher_professional_development コレクション

```
schools/{schoolId}/teacher_pd/{pdId}
├─ teacher_id: string
├─ training_type: "uto_study_design" | "small_school_pedagogy" | "digital_tools" | "assessment"
├─ title: string
├─ description: string
├─ date: timestamp
├─ duration_hours: number
├─ facilitator: string
├─ resources: array（URL）
├─ reflection: string（受講者による振り返り）
├─ certificate_url: string（optional）
└─ updated_at: timestamp
```

### 10. consolidation_timeline コレクション

```
consolidation_timeline/{timelineId}
├─ from_school_id: string（統合元）
├─ to_school_id: string（統合先）
├─ planned_date: timestamp
├─ status: "planning" | "scheduled" | "in_progress" | "completed"
├─ milestones: array（object）
│  ├─ title: string
│  ├─ date: timestamp
│  ├─ description: string
│  ├─ responsible_person_id: string
│  └─ status: "pending" | "completed"
├─ communication_plan: array（object）
│  ├─ date: timestamp
│  ├─ audience: "students" | "parents" | "staff" | "community"
│  ├─ message: string
│  └─ delivery_method: "email" | "meeting" | "web"
├─ transition_support: {
│  ├─ buddy_system: boolean
│  ├─ orientation_program: string（URL）
│  ├─ counseling_available: boolean
│  └─ transition_class_info: object
├─ documents: array（object）
│  ├─ title: string
│  ├─ url: string
│  └─ date_created: timestamp
└─ created_at: timestamp
```

### 11. geopark_learning_resources コレクション

```
geopark_learning_resources/{resourceId}
├─ title: string
├─ theme: string（例：「有明海」「火成岩」「干潟」「河川」）
├─ grade_level: array（number）
├─ resource_type: "video" | "article" | "interactive_tool" | "field_guide" | "dataset"
├─ url: string
├─ description: string
├─ aligned_programs: array（string: program_id）
├─ learning_objectives: array
├─ preview_image_url: string
└─ created_at: timestamp
```

### 12. student_reflections コレクション

```
students/{studentId}/reflections/{reflectionId}
├─ date: timestamp
├─ context: string（何を学んでいたか）
├─ reflection_text: string（児童の記述）
├─ project_id: string（optional）
├─ program_id: string（optional）
├─ emotional_tone: "positive" | "neutral" | "challenging"
├─ skills_developed: array
├─ next_steps: string（児童が次に学びたいこと）
├─ teacher_feedback: string（optional）
└─ created_at: timestamp
```

---

## 🛣️ URL ルート構造

```
/uto-education（メインナビゲーション）
├─ /dashboard
│  ├─ /student （児童向けダッシュボード）
│  ├─ /teacher （教員向けダッシュボード）
│  ├─ /parent （保護者向けダッシュボード）
│  └─ /admin （教育委員会・管理者向け）
├─ /schools
│  ├─ /{schoolId}
│  │  ├─ /overview （学校紹介）
│  │  ├─ /classes （学級管理）
│  │  ├─ /consolidation-info （統廃合情報）
│  │  ├─ /community-partnerships （地域連携）
│  │  └─ /resources （学校資源）
│  └─ /consolidation （統廃合スケジュール・進捗）
├─ /uto-study
│  ├─ /programs （うと学プログラム一覧）
│  ├─ /programs/{programId}
│  │  ├─ /overview
│  │  ├─ /curriculum
│  │  ├─ /resources
│  │  └─ /community-partners
│  ├─ /my-projects （自分のプロジェクト）
│  ├─ /projects/{projectId}
│  │  ├─ /overview
│  │  ├─ /milestones
│  │  ├─ /field-work-log
│  │  ├─ /team-collaboration
│  │  ├─ /community-interactions
│  │  └─ /deliverables
│  └─ /geopark-resources （ジオパーク学習リソース）
├─ /portfolio
│  ├─ /my-portfolio （自分のポートフォリオ）
│  ├─ /{studentId}/portfolio （児童ポートフォリオ）
│  ├─ /achievements （成果物一覧）
│  └─ /skill-progress （スキル進捗）
├─ /community
│  ├─ /partners （地域連携先一覧）
│  ├─ /organizations ({rmoId} リンク)
│  ├─ /success-stories （学習成果事例）
│  └─ /feedback （フィードバック・評価）
├─ /teacher-tools
│  ├─ /design （うと学プログラム設計ツール）
│  ├─ /assessment （評価ツール・ルーブリック）
│  ├─ /class-management （学級運営）
│  ├─ /professional-development （研修）
│  └─ /collaboration （教員間連携）
├─ /parent-portal
│  ├─ /student-progress （児童の成長確認）
│  ├─ /notifications （お知らせ）
│  ├─ /communication （学校との連絡）
│  └─ /events （学校行事）
└─ /admin
   ├─ /school-management （学校管理）
   ├─ /consolidation-management （統廃合管理）
   ├─ /program-library （プログラムライブラリ）
   ├─ /teacher-pd （教員研修）
   ├─ /analytics （分析・ダッシュボード）
   ├─ /community-partnerships （地域連携管理）
   └─ /settings （システム設定）
```

---

## 🎨 技術スタック

| レイヤ | 技術 | 用途 |
|-------|------|------|
| **フロントエンド** | Next.js 14（TypeScript） | メインアプリケーション |
| | Material-UI / Tailwind CSS | UI コンポーネント・スタイリング |
| | React Hook Form | フォーム管理 |
| | Chart.js / D3.js | データ可視化（成長グラフ等） |
| **バックエンド** | Firebase Cloud Functions | サーバーレス関数 |
| | Node.js 20+ | ランタイム |
| **データベース** | Firestore | NoSQL データ保存 |
| **認証** | Firebase Auth | ユーザー認証（メール・Google・Microsoft） |
| **ストレージ** | Firebase Storage | ポートフォリオ画像・動画・プレゼン |
| **AI/検索** | Gemini API | 学習サポート（児童向けAI チューター） |
| | Algolia | テキスト検索（プログラム・リソース） |
| **地図** | Google Maps API | 学習フィールド・地域資源マッピング |
| **コミュニケーション** | SendGrid | メール通知 |
| | Slack API | 教員・管理者向けSlack 連携 |
| **PDF 生成** | @react-pdf/renderer | ポートフォリオPDF 出力 |
| **ホスティング** | Vercel | CI/CD・本番運用 |
| **モニタリング** | Firebase Analytics / Sentry | 分析・エラー追跡 |

---

## 🎯 主要機能

### 1. 学校統廃合管理

**機能：**
- 統廃合スケジュール・進捗可視化
- 保護者・児童・教職員向け情報配信
- 統廃合前後の支援体制管理（バディシステム、カウンセリング等）
- ドキュメント・リソース一元管理
- 統廃合の教訓・ベストプラクティス記録

**UI:**
- タイムライン表示（重要な日付・イベント）
- 段階的な情報開示（秘密保持 → 事前告知 → 公開）
- FAQ/よくある質問の自動生成

### 2. うと学（地域学習）プログラム管理

**機能：**
- 学年別・テーマ別プログラム設計・公開
- カリキュラム・学習目標の明示
- フィールドワーク・地域人材マッチング
- ジオパーク学習リソース（有明海・火成岩等）の一元管理
- 教員向けプログラム設計ツール（テンプレート・ベストプラクティス）

**特徴：**
- 各プログラムにRMO 組織と「直結」（地域人材の動員確度を高める）
- 学習目標の明示により、教員の指導計画立案を支援
- 児童の成長を「プログラム→スキル→達成」の流れで可視化

### 3. 学習ポートフォリオ

**機能：**
- 児童の学習成果物（レポート・作品・動画等）の収集・管理
- スキル進捗の可視化（読み書き・計算・科学的思考・協働・創造性）
- 児童自身による振り返り記入（メタ認知の育成）
- 教員による成長ナラティブ（児童の成長ストーリー記述）
- 保護者へのフィードバック・コメント機能
- ポートフォリオのPDF 出力（進学・参考資料）

**学習指標：**
```
【小規模校のメリット活用】
- 児童1人ひとりの成長を細かく把握（大規模校では困難）
- 多様な学習スタイルに対応
- 協働学習・異学年交流が豊富
```

### 4. 地域連携マネジメント

**機能：**
- 地域学習支援者（RMO 組織・NPO・企業・地域人材）の登録・管理
- フィールドワーク受け入れ機関の情報管理
- 学習プロジェクトとの自動マッチング
- 協力者からのフィードバック・評価の記録

**RMO 連携：**
```
RMO OS ← → 教育OS
├─ PTA （学習支援・ボランティア）
├─ 地域学習支援組織（現地案内・専門知識）
├─ 自治会（地域資源情報・交流）
└─ 企業・NPO （職人技術・環境学習等）
```

### 5. 教員向け専門職開発

**機能：**
- うと学プログラム設計研修
- 小規模校の効果的な教育実践（異学年授業等）
- デジタル教材・ツール活用研修
- 児童理解・評価技術の向上
- 教員間のコラボレーション・実践共有

**目標：**
- 統廃合による組織再編時の教員の不安軽減
- 小規模校のメリットを最大化する指導力向上
- 地域学習に対応できる教員スキル向上

### 6. 児童向けAI チューター

**機能：**
- 「うと学について質問」→ Gemini API が自動回答
- 学習内容の疑問解決（例：「有明海の干潟はどうしてできるの？」）
- プロジェクト進行中のサポート
- 自分のポートフォリオについての質問応答

**特徴：**
- 児童に身近な日本語での対話
- 地域知識に基づいた回答（ジオパーク学習に最適化）

### 7. 保護者ポータル

**機能：**
- 児童の学習成果・ポートフォリオの閲覧
- 学校からのお知らせ・連絡
- 学校行事の参加申し込み
- 先生との連絡（チャット・メール）
- 児童の成長を視覚的に確認

---

## 📊 データ分析・可視化

### 教育委員会向けダッシュボード

```
【統廃合進捗管理】
- 各学校の児童数推移グラフ
- 統廃合スケジュール進捗（Gantt 図）
- コミュニケーション実績（配信数・開封率）

【教育の質向上の可視化】
- うと学プログラム参加数・成果
- 児童のスキル進捗（平均値・分布）
- ポートフォリオ作成数・質的評価

【地域連携の効果】
- 協力機関数・連携回数
- フィールドワーク実績
- 地域人材の活用度

【小規模校のメリット指標】
- 児童の満足度・学習意欲
- 協働学習実施率
- 異学年交流の頻度
```

---

## 🔐 アクセス制御・ロール

| ロール | アクセス範囲 | 主要操作 |
|--------|-----------|--------|
| **学生** | 自分のポートフォリオ、プロジェクト、クラス情報 | 成果物アップロード、振り返り記入、AI相談 |
| **教員** | 自分の学級・プロジェクト、全校プログラム | 成績記録、評価、プログラム設計、ポートフォリオコメント |
| **保護者** | 自分の子どもの情報のみ | ポートフォリオ閲覧、学校との連絡 |
| **学校管理職** | 学校内の全情報 | 統廃合スケジュール管理、統計分析 |
| **教育委員会** | 全校・全プログラム情報 | ダッシュボード分析、資源配分決定 |
| **地域パートナー** | 関連プロジェクト・フィールドワーク情報 | フィードバック入力、スケジュール確認 |
| **システム管理者** | 全機能・全データ | ユーザー管理、設定、バックアップ |

---

## 📈 KPI と成功指標

### 短期（統廃合実行～1年）

```
【学校統廃合の円滑化】
- 保護者・児童・教職員の不安度低下（事前アンケート → 50%減）
- 統廃合後の児童いじめ・不登校の防止（過去の統廃合事例 +20% → 0% 増加に抑制）
- 教職員の離職率低下（3%以下）

【教育の質向上（小規模校メリット）】
- 児童1人あたりの教員時間配分増加（実績データ化）
- 協働学習実施率：80%以上
- 児童の学習満足度：85%以上

【うと学プログラム立ち上げ】
- 全学年でプログラム実施（1学年1つ以上）
- ジオパーク学習実施率：70%以上
- 地域パートナー協力機関数：20機関以上
```

### 中期（2-3年）

```
【ポートフォリオの充実】
- 児童のポートフォリオ完成率：90%以上
- 保護者による子どもの成長実感：80%以上
- ポートフォリオを進学時に活用した事例：10件以上

【地域連携の深化】
- 地域人材による学習支援回数：年 100回以上
- 地域パートナーの満足度：85%以上
- RMO との連携事例：各学校 5件以上

【教員の専門職開発】
- 研修参加率：90%以上
- うと学プログラム設計スキルの向上（自己評価）
- 教員間の実践共有会開催：月1回以上
```

---

## 🚀 展開フェーズ

| フェーズ | 時期 | 主要活動 |
|---------|------|--------|
| **フェーズ1** | 2026年5月～7月 | 基盤インフラ整備、パイロット学校2校での実装 |
| **フェーズ2** | 2026年8月～2027年1月 | 統廃合推進と並行してシステム拡張、全学校への展開 |
| **フェーズ3** | 2027年2月～ | 本格運用、ジオパーク学習の全市的展開 |

---

**最終更新:** 2026-05-06  
**ステータス:** 仕様書完成  
**次ステップ:** 実装ロードマップ作成
