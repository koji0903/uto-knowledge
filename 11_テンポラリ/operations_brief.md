# 運用ブリーフ

Generated: 2026-05-30T22:34:38.922Z

## Git

| item | value |
| --- | --- |
| branch | develop |
| latest_commit | 223d6ac vault backup: 2026-05-31 07:20:49 |

```text
## develop...origin/develop
 M .claudian/claudian-settings.json
 M .gitignore
 M 00_System/architecture/Utomachi_Platform_Architecture.md
RM tmp/index.md -> 00_System/tmp_lifecycle.md
 M 02_Agriculture/kumayuken/Architecture/02-Directory-Structure.md
 M 02_Agriculture/kumayuken/BusinessLogic/05-Business-Logic.md
 M 02_Agriculture/kumayuken/DataModel/03-Data-Model.md
 M 02_Agriculture/kumayuken/Implementation/06-Implementation-Guide.md
 M 02_Agriculture/kumayuken/Masters/04-Master-Definition.md
 M 02_Agriculture/kumayuken/Overview/01-System-Overview.md
 M 02_Agriculture/nori_farming_dss/Phase3b_Extended_Data_Integration.md
 M 02_Agriculture/nori_farming_dss/Phase4_ML_Integration.md
 M 02_Agriculture/nori_farming_dss/WORKFLOW_GUIDE.md
 M 04_DataLink/decisions/decision_20260507_ai_handoff_operations.md
 M civic/concepts/人口減少.md
 M civic/themes/childcare-education.md
 M civic/uto-city-council/2026-06-general-assembly-qa-2nd-uto-high-school.md
 M civic/uto-city-council/2026-06-general-assembly-qa.md
 M scripts/scaffold_datalink_note.mjs
 M scripts/validate_ai_operations_docs.mjs
 M scripts/validate_datalink_scaffold.mjs
 M scripts/validate_obsidian_links.mjs
```

## AI競合

未生成

## 政策実行

| item | value |
| --- | ---: |
| policy_cards | 20 |
| missing_next_action | 0 |
| missing_kpi | 0 |
| missing_related_questions | 0 |
| missing_related_evidence | 0 |
| high_priority | 11 |

## 実行キュー

| order | id | card | priority | domain | first_next_action | first_kpi |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | pc_admin_dx_001 | [[04_データリンク/02_POLICY_CARDS/admin_dx/pc_admin_dx_001_自治体AI_ワークフローガイドライン|自治体AI活用ガイドラインと業務実装]] | high | admin_dx | R5-06とR5-12の答弁からAI・DXに関する行政の現状を抽出する | AI活用対象業務の登録件数 |
| 2 | pc_childedu_001 | [[04_データリンク/02_POLICY_CARDS/childcare_education/pc_childedu_001_giga_school_daily_use|GIGAスクールの日常活用と端末更新]] | high | childcare_education | R4-12、R6-03、R6-12の答弁から端末・支援・活用差に関する論点を抽出する | 端末の授業利用頻度 |
| 3 | pc_childedu_002 | [[04_データリンク/02_POLICY_CARDS/childcare_education/pc_childedu_002_child_third_place|子どもサードプレイスの運用設計]] | high | childcare_education | R6-06答弁から施設整備・周辺環境・運営上の配慮事項を抽出する | 利用者数 |
| 4 | pc_comm_001 | [[04_データリンク/02_POLICY_CARDS/community_infrastructure/pc_comm_001_district_disaster_plan_rollout|地区防災計画の横展開]] | high | community_infrastructure | R6-06答弁から走潟地区モデルと他地区展開の条件を抽出する | 地区防災計画の策定地区数 |
| 5 | pc_comm_002 | [[04_データリンク/02_POLICY_CARDS/community_infrastructure/pc_comm_002_autonomous_disaster_org_network|自主防災組織ネットワークの強化]] | high | community_infrastructure | R5-12とR4-12の答弁から自主防災組織と防災リーダーに関する情報を抽出する | 自主防災組織の登録件数 |
| 6 | pc_comm_003 | [[04_データリンク/02_POLICY_CARDS/community_infrastructure/pc_comm_003_school_route_road_marking_maintenance|通学路・道路標示メンテナンス]] | high | community_infrastructure | R5-06とR6-09の答弁から通学路安全プログラムと道路管理の運用を抽出する | 危険箇所台帳の登録件数 |
| 7 | pc_comm_004 | [[04_データリンク/02_POLICY_CARDS/community_infrastructure/pc_comm_004_disaster_data_web_operations|災害時のWeb・庁内データ安定運用]] | high | community_infrastructure | R6-03答弁からWeb・庁内データ運用の現状を抽出する | 災害時公開情報チェックリストの整備率 |
| 8 | pc_finance_001 | [[04_データリンク/02_POLICY_CARDS/finance_facilities/pc_finance_001_public_facility_finance_gap|公共施設・財政ギャップの見える化]] | high | finance_facilities | R5-06答弁から新庁舎建設費と災害復旧財源の論点を抽出する | 公共施設台帳の整備率 |
| 9 | pc_industry_001 | [[04_データリンク/02_POLICY_CARDS/industry/pc_industry_001_regional_trading_company|地域商社構想の実装準備]] | high | industry | R4-12、R5-09、R6-06の答弁から行政の既存取組を抜き出す | 産品・事業者台帳の登録件数 |
| 10 | pc_industry_002 | [[04_データリンク/02_POLICY_CARDS/industry/pc_industry_002_furusato_tax_strategy|ふるさと納税を地域商社の販路に接続]] | high | industry | 返礼品候補の棚卸し表を作る | 新規返礼品数 |
| 11 | pc_industry_005 | [[04_データリンク/02_POLICY_CARDS/industry/pc_industry_005_cross_department_industry_pfu|産業横断PFUの設計]] | high | industry | 現在存在する協議会・会議体を一覧化する | 横断会議の開催回数 |
| 12 | pc_admin_dx_002 | [[04_データリンク/02_POLICY_CARDS/admin_dx/pc_admin_dx_002_検査学習ナレッジベース|行政視察・議会知識のナレッジベース化]] | medium | admin_dx | R5-12答弁から行政視察受入実績と評価ポイントを抽出する | 視察テーマ台帳の登録件数 |

## DataLink

| collection | markdown_count | firestore_dry_run_count |
| --- | --- | --- |
| decisions | 2 | 1 |
| producers | 1 | 0 |
| products | 1 | 0 |
| projects | 3 | 2 |
| logs | 3 | 2 |

## Firestore Dry-run

| item | value |
| --- | --- |
| document_count | 5 |
| required_documents | 5 |
| required_documents_present | 5 |

## 最近の変更

- 223d6ac vault backup: 2026-05-31 07:20:49
- 6943763 fix(ci): Update validate_vault.sh for Phase-1/2 path changes
- 8142eb5 chore: Allow tmp/index.md tracking and finalize Phase-2 governance docs
- 596a764 vault backup: 2026-05-31 06:53:11
- 1d8f38f vault backup: 2026-05-31 06:52:58
- 75bae2c docs: Unify vault navigation and clean up root directory
- 86e93dd docs: Add PR workflow guide for knowledge base development
- 256299d docs: Integrate Nori OS (海苔養殖予測システム) documentation into knowledge base
- 46c0847 Step 3 Complete: Firestore production sync successful
- 548e4e1 Step 3: Update validation scripts for new 4-layer folder structure

## 次の基本操作

```bash
bash scripts/start_work.sh
bash scripts/maintenance_check.sh local
bash scripts/generate_operations_brief.sh
bash scripts/end_work.sh
```
