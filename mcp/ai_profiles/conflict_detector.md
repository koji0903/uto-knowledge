# AI間矛盾検出フレームワーク

複数AIが同時に異なる視点でナレッジベースを編集する際、矛盾が生じる可能性があります。このフレームワークは、AI生成・更新されたドキュメント間の矛盾を**自動検出**し、解決を手引きします。

## 矛盾の種類と検出ロジック

### タイプA: 目標値矛盾

**定義:** 同じプロジェクトやビジョンに対して、異なるターゲット数値が設定されている

**検出対象:**
- プロジェクト A の `target_revenue` と、関連する政策カード B の売上見積もりが乖離
- プロジェクト A の `target_milestone_date` と、関連ログの `milestone_achieved_date` が矛盾

**検出方法:**
```
1. すべての projects/*.md から target_* フィールドを抽出
2. すべての decisions/*.md と policy_cards/*.md から数値言及を抽出
3. related_* リンクで関連ドキュメントを特定
4. 同一対象への矛盾値をマッチング
```

**例:**
```
項目A: prj_regional_trading_pfu の target_revenue = "¥500M-1000M"
項目B: pc_industry_001 の target_revenue = "¥3000M"
  → 関連プロジェクトなのに目標値が3倍異なる → 矛盾フラグ
```

---

### タイプB: 状態遷移矛盾

**定義:** ドキュメントの `status` フィールドが、前提条件なしに矛盾した状態に遷移

**検出対象:**
- 同一ドキュメントが、異なるセッションで `planning` と `done` を両立
- プロジェクト A が `done` なのに、関連ログが `failed` と記録
- decision A が `idea` 段階なのに、それに基づくプロジェクトが `active`

**検出方法:**
```
1. git diff を使い、直近 commit での frontmatter 変更を追跡
2. status フィールドの遷移を確認
3. 許可された状態遷移図（idea→planning→active→done）と比較
4. 遷移が許可パターンに合致するか検証
```

**状態遷移図（許可パターン）:**
```
idea → planning → active → done
       ↓                    ↓
      paused ─────────────┘
```

---

### タイプC: 参照矛盾

**定義:** ドキュメント内のリンク・参照先が、実際には存在しない、または古い

**検出対象:**
- `related_policy_cards: [pc_industry_001, pc_nonexistent_999]` → 999 が存在しない
- `related_collections: [producers/prod_apple_001]` → apple_001.md が削除されている
- `related_files: [.../archive/old_file.md]` → old_file.md が存在しない

**検出方法:**
```
1. DataLink frontmatter 内の related_* フィールドを抽出
2. ファイルシステムで存在確認
3. Firestore での存在確認（firestore_doc_id で照合）
4. 存在しない参照をリスト化
```

---

### タイプD: 相互矛盾

**定義:** AI A が A→B のリンクを張ったが、B が A をまったく参照していない場合の非対称参照

**検出対象:**
- プロジェクト A が政策カード B を `related_policy_cards` に参照しているが、政策カード B は A を認知していない（一方向）
- decision A が project B に基づいていると宣言したが、project B は decision A をまったく認知していない

**検出方法:**
```
1. すべての related_* リンクを抽出（発信側）
2. すべてのバックリンク（受け取り側）をカウント
3. 発信 > 受け取り の非対称性をフラグ
4. ただし「参考資料」のような一方向性が正当なケースは除外
```

**除外パターン：**
- `type: evidence` ドキュメント（参考資料は通常一方向）
- `type: log` ドキュメント（ログは履歴記録で一方向が正常）

---

### タイプE: タイムスタンプ矛盾

**定義:** ドキュメント作成日時や更新日時の論理矛盾

**検出対象:**
- ログ A の `created: 2026-05-07` だが、参照している decision B の `created: 2026-05-10`（未来の decision を参照）
- プロジェクト A の `updated: 2026-05-06` だが、関連ログが `created: 2026-05-05`（ログが先に作成）

**検出方法:**
```
1. すべてのドキュメントから created/updated をISO 8601形式で抽出
2. 参照関係のタイムラインを追跡
3. 因果関係に矛盾する時系列をフラグ
```

---

### タイプF: 説明矛盾（セマンティック）

**定義:** ドキュメント内のテキスト本文が、frontmatter と矛盾しているケース

**検出対象:**
- `status: done` なのに、本文に「実装予定」と書かれている
- `type: decision` で `status: idea` なのに、本文に「決定を下した」と書かれている
- `related_policy_cards: []` なのに、本文に「政策カード A に基づく」と明記

**検出方法:**
```
1. 本文から「実装予定」「決定予定」「検討中」などのキーワード抽出
2. status フィールド（done/active/planning）と照合
3. 不一致を検出
※ この検出は AI の言語理解が必要なため、Claude による post-processing 推奨
```

---

## 矛盾検出プロセス

### 自動検出フェーズ（scripts/detect_ai_conflicts.mjs）

```bash
bash scripts/detect_ai_conflicts.sh [--ai claude|gemini|chatgpt|all] [--output tmp/conflict_report.md]
```

**処理フロー:**
```
1. 過去 24 時間の Git 変更を検出
   → git diff HEAD~24h で変更ファイルを特定

2. 変更ファイルの frontmatter をパース
   → 新規追加・変更されたドキュメントのみ対象

3. 各タイプ（A～F）の矛盾をチェック
   → A: 目標値，B: 状態遷移，C: 参照，D: 相互参照，E: タイムスタンプ
   → F（セマンティック）は スキップ（後で手動確認）

4. 矛盾を分類・優先度付け
   → HIGH: プロジェクト失敗リスク
   → MEDIUM: 調査・確認が必要
   → LOW: 参考情報

5. tmp/conflict_report.md に出力
   → Markdown 形式で矛盾ペアと根拠を記録
```

---

### AI への通知フェーズ

**矛盾が見つかった場合:**
```
1. tmp/conflict_report.md をハンドオフドキュメントに含める
   → `bash scripts/generate_interactive_handoff.sh --ai claude`

2. AI へ矛盾解決を依頼
   → 「どちらが正しいか」ではなく「確認・調整が必要」と指摘

3. AI の解決策を 04_DataLink/ai_decisions/ に記録
   → claude_conflict_resolution_20260507.md
```

---

## 矛盾検出レポート（tmp/conflict_report.md）の形式

```markdown
# AI間矛盾検出レポート
生成日時: 2026-05-07T19:45:30Z
対象期間: 過去 24 時間
検出AI: スクリプト自動検出

## 矛盾サマリー
- 検出件数: 5
- HIGH: 2件、MEDIUM: 2件、LOW: 1件

## 詳細

### [HIGH] タイプA: 目標値矛盾 (#1)
**矛盾ペア:**
- prj_regional_trading_pfu → target_revenue: "¥500M-1000M" (2032年目標)
- pc_industry_001 → revenue_estimate: "¥3000M" (2032年目標)

**分析:**
- prj_regional_trading_pfu の関連政策カード pc_industry_001
- 同一プロジェクト・同一期間なのに 3 倍の乖離

**推奨アクション:**
- [ ] Claude: どちらが正確な見積もりか確認してください
- [ ] Gemini: 市場データで根拠を確認してください
- [ ] 調整結果を decisions/dec_20260507_revenue_alignment.md に記録してください

---

### [MEDIUM] タイプC: 参照矛盾 (#2)
**矛盾ペア:**
- log_20260507_001 → related_policy_cards: [pc_industry_001, pc_nonexistent_999]
- 存在確認: pc_industry_001 ✓、pc_nonexistent_999 ✗

**推奨アクション:**
- [ ] pc_nonexistent_999 の正しい ID は？（typo か削除済みか確認）
- [ ] 該当ドキュメントを修正してください

...（以下、他の矛盾）
```

---

## AI の矛盾解決ワークフロー

```
1. tmp/conflict_report.md を読み込み
2. 推奨アクション の [ ] チェック項目を処理
3. 根拠・調査結果を 04_DataLink/ai_decisions/claude_conflict_resolution_*.md に記録
4. 修正すべき ドキュメントを更新
5. `bash scripts/detect_ai_conflicts.sh` で再検出 → 矛盾解決を確認
```

---

## 手動検出・確認フェーズ（Claude 推奨）

タイプF（セマンティック矛盾）は、自動検出できないため Claude の手動確認推奨：

```
1. 変更されたドキュメント本文を読む
2. frontmatter（特に type、status）と本文が一貫しているか確認
3. 矛盾があれば、その旨を 04_DataLink/ai_decisions/ に記録
```

例：
```markdown
# Claude による矛盾確認結果（2026-05-07）

## セマンティック矛盾

### prj_regional_trading_pfu.md
- status: "planning" → OK（本文で「計画段階」と記載）

### pc_industry_001.md
- status: "active" だが、本文に「2026年中に開始予定」
  → 矛盾あり：status を "planning" に修正すべき

...
```

---

## 検出フレームワーク設定

### 矛盾検出の有効化

`04_DataLink/conflict_detection_config.json`:
```json
{
  "enabled": true,
  "schedule": "daily_00:30",
  "detection_types": ["A", "B", "C", "D", "E"],
  "semantic_detection": false,
  "lookback_hours": 24,
  "ai_notification": {
    "enabled": true,
    "include_in_handoff": true,
    "notify_ai": ["claude", "gemini"]
  },
  "auto_repair": {
    "enabled": false,
    "types": ["simple_ref_update"]
  }
}
```

---

## ベストプラクティス

1. **矛盾解決の最優先**
   - 毎朝、first thing として `tmp/conflict_report.md` を確認
   - HIGH 優先度は即座に対応

2. **参照先の更新時は related_* も更新**
   - ドキュメント ID を変更したら、すべての参照元を更新
   - `validate_datalink_references.sh` で検証

3. **frontmatter の厳密性**
   - type、status は enum 値に厳密
   - 曖昧な値（"ing", "unknown" など）を避ける

4. **タイムスタンプの慎重な編集**
   - created フィールドは絶対に変更しない
   - updated のみ手動編集可能

