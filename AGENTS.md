# AI運用ガイド

このVaultは、Obsidianを思考OS、FirestoreをデータOS、Google Driveをファイル実体、MCPをAI連携口として使う。

Claude、Gemini、ChatGPT、Codexなど複数AIが触れる前提のため、作業前にこのファイルを読む。

## 目的

- 宇土OS、議員活動、地域商社、子育て・教育、防災、財政、行政DXの知識を壊さず積み上げる
- Markdown、Firestore、Google Drive、GitHubの整合性を保つ
- AIごとの作業結果を、Obsidian上で追跡可能にする

## 最初に読む

1. [[README|README]]
2. [[運用ダッシュボード|運用ダッシュボード]]
3. [[04_DataLink/index|データ連携]]
4. [[04_DataLink/00_SYSTEM/index|宇土OS システム仕様]]
5. [[04_DataLink/02_POLICY_CARDS/index|政策実行カード]]
6. [[04_DataLink/02_POLICY_CARDS/policy_execution_board|政策実行ボード]]
7. [[04_DataLink/00_SYSTEM/regional_trading_company_datalink_schema|地域商社 DataLink 最小スキーマ]]
8. [[mcp/ai_profiles/task_router|Task Router]]
9. [[mcp/ai_profiles/handoff_prompt|AIハンドオフプロンプト]]
10. [[mcp/ai_profiles/conflict_detector|AI競合検出]]

## 書き込みルール

- 既存ファイルを更新する前に、関連する索引とリンク先を確認する
- 新しい政策実行カードを作る場合は、`related_questions` と `related_evidence` を可能な限り設定する
- Firestore対象データは、`04_DataLink/decisions`、`producers`、`products`、`projects`、`logs` に作る
- Firestore対象データを作る場合は、`firestore_collection` と `firestore_doc_id` を必ず設定する
- 作業ログが必要な変更は、`04_DataLink/logs` に残す
- Git管理前提で、変更後は `bash scripts/maintenance_check.sh local` を実行する

## 禁止事項

- `.env`、秘密鍵、OAuthトークン、サービスアカウントJSONをGitへ追加しない
- 個人情報や非公開連絡先を、公開可否確認前にDataLinkへ書かない
- Firestoreへ直接applyする前に、必ずdry-runと差分確認を行う
- 既存のフォルダ名、ファイル名、ID、Firestore collection名を安易に変更しない
- 他AIやユーザーの未確認変更を勝手に戻さない

## Firestore

Firestore対象は次のコレクションに限定する。

| collection | Obsidian |
| --- | --- |
| `decisions` | [[04_DataLink/decisions/index|意思決定台帳]] |
| `producers` | [[04_DataLink/producers/index|生産者台帳]] |
| `products` | [[04_DataLink/products/index|商品・産品台帳]] |
| `projects` | [[04_DataLink/projects/index|プロジェクト台帳]] |
| `logs` | [[04_DataLink/logs/index|ログ台帳]] |

基本コマンド:

```bash
bash scripts/datalink_to_firestore_dry_run.sh --out tmp/datalink.firestore.json
bash scripts/datalink_to_firestore_apply.sh --dry-run
```

本番反映は、ユーザー確認後にのみ行う。

## Google Drive

Google Drive構成は `drive.structure.json` を正とする。

ローカル構成検証:

```bash
bash scripts/validate_drive_structure_config.sh
bash scripts/create_drive_structure.sh --dry-run
```

実体確認や作成はGoogle認証が必要。認証なしで失敗した場合は、ローカル構成検証とdry-runを優先する。

## 検証コマンド

通常作業後:

```bash
bash scripts/maintenance_check.sh local
```

個別確認:

```bash
bash scripts/validate_vault.sh
bash scripts/validate_datalink_frontmatter.sh
bash scripts/validate_datalink_samples.sh
bash scripts/validate_datalink_references.sh
bash scripts/validate_policy_card_references.sh
bash scripts/generate_policy_card_report.sh
bash scripts/validate_obsidian_links.sh
bash scripts/detect_ai_conflicts.sh
```

## DataLink作成

新しいDataLinkノートはscaffoldを使う。

```bash
bash scripts/scaffold_datalink_note.sh --type project --id prj_example --title "新規プロジェクト" --dry-run
bash scripts/scaffold_datalink_note.sh --type project --id prj_example --title "新規プロジェクト"
```

対応タイプ:

- `decision`
- `producer`
- `product`
- `project`
- `log`

## AIごとの役割

| AI | 主な役割 |
| --- | --- |
| Claude | 政策分析、矛盾検出、設計レビュー |
| Gemini | Google Drive、外部情報、最新情報確認 |
| ChatGPT / Codex | 実装、検証、スクリプト、ドキュメント整備 |

役割の詳細は [[mcp/ai_profiles/task_router|Task Router]] を参照する。

## AIへの引き継ぎ

別AIへ作業を渡す場合は、[[mcp/ai_profiles/handoff_prompt|AIハンドオフプロンプト]] を使う。

最小手順:

1. `bash scripts/start_work.sh --ai claude --task "依頼内容"` を実行する
2. `tmp/ai_conflict_report.md` のHIGH競合が0件であることを確認する
3. 必要に応じて `bash scripts/generate_handoff_prompt.sh --ai claude --task "依頼内容" --conflict-report tmp/ai_conflict_report.md` で依頼文だけ再生成する
4. `tmp/ai_context.md`、`tmp/ai_conflict_report.md`、対象ファイルを渡す
5. 書き込み可能範囲と完了条件を明記する
6. 戻ってきた成果物を `bash scripts/maintenance_check.sh local` で検証する
