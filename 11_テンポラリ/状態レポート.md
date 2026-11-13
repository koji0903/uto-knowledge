# uto-knowledge Status Report

Generated: 2026-05-30T22:34:38.777Z

## Git

| item | value |
| --- | --- |
| branch | develop |
| latest_commit | 223d6ac vault backup: 2026-05-31 07:20:49 |

```text
## develop...origin/develop
 M .claudian/claudian-settings.json
 M .gitignore
 M 00_System/architecture/宇土プラットフォーム_アーキテクチャ.md
RM tmp/index.md -> 00_System/一時ファイル_ライフサイクル.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/02_アーキテクチャ/02_ディレクトリ構造.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/05_ビジネスロジック/05_ビジネスロジック.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/03_データモデル/03_データモデル.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/06_実装ガイド/06_実装ガイド.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/04_マスター定義/04_マスター定義.md
 M 02_Agriculture/02_農業/熊本県有機農業研究会/01_概要/01_システム概要.md
 M 02_Agriculture/02_農業/海苔養殖業/Phase3b_Extended_Data_Integration.md
 M 02_Agriculture/02_農業/海苔養殖業/Phase4_ML_Integration.md
 M 02_Agriculture/02_農業/海苔養殖業/WORKFLOW_GUIDE.md
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

## Local Files

| item | value |
| --- | --- |
| .env | yes |
| .firebaserc | yes |
| README.md | yes |
| AI運用ガイド.md | no |

## Knowledge Assets

| item | value |
| --- | --- |
| policy_cards | 20 |
| assembly_questions | 9 |
| evidence_notes | 9 |

## AI Operations

| item | value |
| --- | --- |
| ai_profiles | 9 |
| context_generator | yes |
| handoff_generator | yes |
| operations_validator | yes |
| task_router | yes |
| handoff_prompt | yes |

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

## Required DataLink Documents

| path | status | reason |
| --- | --- | --- |
| decisions/dec_20260507_ai_handoff_operations | present | 複数AI運用の意思決定ログ |
| projects/prj_regional_trading_pfu | present | 地域商社準備PFUの初期プロジェクト |
| projects/prj_furusato_return_gift_boost | present | ふるさと納税返礼品強化の初期プロジェクト |
| logs/log_20260507_001 | present | 地域商社DataLink初期整備ログ |
| logs/log_20260507_002 | present | 複数AI運用整備ログ |

## Firestore Planned Documents

| path | source |
| --- | --- |
| decisions/dec_20260507_ai_handoff_operations | 04_DataLink/decisions/decision_20260507_ai_handoff_operations.md |
| projects/prj_furusato_return_gift_boost | 04_DataLink/projects/prj_furusato_return_gift_boost.md |
| projects/prj_regional_trading_pfu | 04_DataLink/projects/prj_regional_trading_pfu.md |
| logs/log_20260507_001 | 04_DataLink/logs/log_20260507_001.md |
| logs/log_20260507_002 | 04_DataLink/logs/log_20260507_002.md |

## Verification Commands

```bash
bash scripts/start_work.sh
bash scripts/start_work.sh --ai claude --task "依頼内容"
bash scripts/generate_ai_context.sh
bash scripts/generate_handoff_prompt.sh --ai claude --task "依頼内容"
bash scripts/detect_ai_conflicts.sh
bash scripts/generate_policy_card_report.sh
bash scripts/generate_operations_brief.sh
bash scripts/end_work.sh
bash scripts/verify_all.sh
bash scripts/check_firestore_drift.sh
```

## Local CI Checks

- `bash scripts/validate_vault.sh`
- `bash scripts/security_check.sh`
- `bash scripts/validate_mcp_config.sh`
- `bash scripts/validate_ai_operations_docs.sh`
- `bash scripts/detect_ai_conflicts.sh --strict`
- `bash scripts/validate_datalink_samples.sh`
- `bash scripts/validate_datalink_frontmatter.sh`
- `bash scripts/validate_datalink_scaffold.sh`
- `bash scripts/validate_datalink_references.sh`
- `bash scripts/validate_policy_card_references.sh`
- `bash scripts/generate_policy_card_report.sh`
- `bash scripts/generate_operations_brief.sh`
- `bash scripts/validate_obsidian_links.sh`
- `bash scripts/datalink_to_firestore_apply.sh --dry-run`
- `bash scripts/validate_drive_structure_config.sh`
- `bash scripts/create_drive_structure.sh --dry-run`
