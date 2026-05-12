---
id: conflict_resolution_20260508
type: process_definition
title: "AI並行開発 - 競合解決プロセス"
created: 2026-05-08
status: active
tags: [AI協力, 競合解決, 並行開発, プロセス]
---

# Codex ↔ Claude Code 競合解決プロセス

**有効開始日:** 2026-05-08  
**最終更新:** 2026-05-08

---

## 📋 **競合の種類と対応**

### **【タイプ1】ファイル同時編集競合（最も一般的）**

**シナリオ:**
```
Codex が implementation/frontend/dashboard.jsx を編集中
  ↓
Claude Code が同じファイルを編集しようとする
  ↓
check_concurrent_edits.mjs が競合を検出
```

**解決手順:**

| ステップ | 実行者 | アクション |
|---------|-------|-----------|
| 1 | システム | `check_concurrent_edits.sh` が競合を検出 |
| 2 | 検出されたAI | 作業を即座に停止、ファイルロック解除 |
| 3 | 優先度判定 | access_control.json の優先度ルール適用 |
| 4 | 低優先度AI | 自分の作業をキャンセル、待機 |
| 5 | 高優先度AI | 作業継続・完了 |
| 6 | 高優先度AI | ファイルロック解除 |
| 7 | 低優先度AI | 作業再開 |
| 8 | システム | 競合をRESOLVED としてマーク |

**優先度ルール（access_control.json から）:**

```
優先度1: Codex 実装
    └─ 適用される競合：
       - implementation/* で Codex が作業中
       - technical_specs/* で Codex が作業中
       └─ 対応：Claude Code は待機
       
優先度2: Claude Code ナレッジ
    └─ 適用される競合：
       - 04_DataLink/* で Claude Code が作業中
       - actual_performance_* で Claude Code が作業中
       └─ 対応：Codex は待機
       
優先度3: SHARED リソース
    └─ 適用される競合：
       - specification.md, access_control.json
       └─ 対応：Git マージ + 人間判定
```

---

### **【タイプ2】スキーマ・仕様の矛盾**

**シナリオ:**
```
Codex が Firebase collection を変更
  ↓
Claude Code のスキーマ定義が古い状態のまま
  ↓
矛盾検出スクリプトが検出
```

**解決手順:**

1. **Codex 実装完了時：**
   ```
   Codex が technical_specs/database_schema_update.md に変更内容を記載
   └─ 変更フィールド名
   └─ 新しいデータ型
   └─ マイグレーション方法
   ```

2. **Claude Code が対応：**
   ```
   Claude Code が以下を更新
   ├─ 04_DataLink/schema/firestore_schema.json
   ├─ specification.md の関連部分
   └─ actual_performance_*.md のドキュメント説明
   ```

3. **同期完了確認：**
   ```
   generate_ai_sync_report.sh で両者が同期している事を確認
   └─ ✅ スキーマ一致
   ```

---

### **【タイプ3】ビジネスロジックの矛盾**

**シナリオ:**
```
Codex が「ふるさと納税の返礼品手数料 15%」を実装
  ↓
Claude Code の仕様書では「12%」と記載
  ↓
矛盾検出
```

**解決手順:**

1. **検出と記録：**
   ```
   conflict_manifest.json に記録：
   {
     "type": "business_logic",
     "issue": "Furusato fee percentage mismatch",
     "codex_implementation": "15%",
     "claude_specification": "12%",
     "detected_at": "2026-05-08T15:30:00Z"
   }
   ```

2. **根拠確認：**
   - Codex: 「なぜ 15% に変更したのか」技術仕様に記載
   - Claude Code: 「なぜ 12% が正しいのか」ナレッジに記載

3. **優先度判定：**
   ```
   優先度1適用（Codex 実装優先）
   └─ Codex の 15% が正しいと判断
   └─ Claude Code が specification.md を 15% に更新
   └─ 更新理由を記録
   ```

4. **決定ログ：**
   ```
   04_DataLink/ai_decisions/decision_furusato_fee_20260508.md
   └─ 誰が：AI自動判定（優先度ルール）
   └─ 何を：ふるさと納税手数料を 12% → 15% に変更
   └─ なぜ：Codex の技術実装に基づく調整
   └─ 根拠：実装の効率性、マージンの最適化
   ```

---

## 🔄 **SHARED リソース（specification.md）の競合解決**

**最も慎重に対応が必要**

### **シナリオ:**
```
Codex: 「教育OSの仕様を拡張したい」
Claude Code: 「教育OSの層構造は変更できない」
  ↓
両者が specification.md を編集しようとする
```

### **解決手順:**

1. **提案段階：**
   ```
   Codex: technical_specs/proposal_education_expansion.md
   Claude Code: ai_analysis/proposal_education_structure.md
   
   互いに提案を読んで理解
   ```

2. **協議（ハンドオフ）:**
   ```
   Claude Code が generate_interactive_handoff.sh で
   Codex へ「教育OSの展開は可能か」を問う
   
   Codex が「実装コスト・スケジュール」を返答
   ```

3. **最終判定：**
   ```
   合意に至った場合：
   └─ 両者で specification.md を更新
   └─ 更新内容を decision_log.md に記録
   
   合意に至らない場合：
   └─ 人間（User）に判定を仰ぐ
   └─ User の決定を specification.md に反映
   ```

---

## 📊 **競合の追跡・管理**

### **conflict_manifest.json の構造**

```json
{
  "conflicts": [
    {
      "id": "CONFLICT_001",
      "type": "concurrent_edit | schema_mismatch | logic_mismatch | shared_resource",
      "file": "path/to/file",
      "ai_1": "Codex",
      "ai_2": "Claude Code",
      "detected_at": "2026-05-08T15:30:00Z",
      "status": "OPEN | RESOLVED",
      "priority": "P1 | P2 | P3",
      "resolution": {
        "rule_applied": "Priority 1: Codex implementation",
        "action_taken": "Claude Code released lock",
        "resolved_at": "2026-05-08T15:35:00Z",
        "resolved_by": "automatic"
      }
    }
  ],
  "resolved": [
    { ... }
  ]
}
```

### **毎日のレポート生成：**

```bash
bash scripts/ai_coordination/generate_ai_sync_report.sh --date 2026-05-08

# 出力: tmp/ai_sync_report_2026-05-08.md
# 内容：
# - 本日の競合数
# - 各競合の解決状況
# - まだ解決待ちの競合
# - 手動対応が必要な項目
```

---

## ⚡ **緊急対応（デッドロック時）**

**もし両AIが互いに待機状態（デッドロック）に陥った場合：**

1. **即座に検出：**
   ```bash
   bash scripts/ai_coordination/check_concurrent_edits.sh --emergency
   ```

2. **タイムアウト自動解除：**
   ```
   4時間以上ロックされたファイル
   └─ 自動的にロック解除（access_control.json > auto_release_after_hours: 4）
   ```

3. **人間への エスカレーション：**
   ```
   デッドロック検出 → ユーザーに通知
   └─ User が manual_release コマンド実行
   bash scripts/ai_coordination/manual_release.sh --ai codex --file spec.md
   ```

---

## ✅ **チェックリスト**

AIが競合に気づいたら：

- [ ] **即座にロック解除** → ファイルを編集しない
- [ ] **競合を conflict_manifest.json に記録** → 自動でされる
- [ ] **優先度ルールを確認** → access_control.json
- [ ] **待機 or 再開判定** → 優先度に基づく
- [ ] **完了時にロック解除** → release_resource.mjs
- [ ] **daily_sync 時に検証** → 競合解決を確認

---

## 📞 **問い合わせ・エスカレーション**

**Claude Code（本セッション）が手動対応が必要と判断したら：**

```
conflict_manifest.json に以下を記録：
{
  "requires_human_decision": true,
  "reason": "SHARED resource conflict / Priority unclear",
  "escalation_to": "User",
  "decision_options": [...]
}
```

**User に通知 → User が最終判定を specification.md に記録**

---

## 🎯 **目標**

このプロセスにより：
- ✅ AI同士の競合を **自動検出**
- ✅ **優先度ルール**に基づいて **自動解決**
- ✅ 解決困難な場合のみ **人間に判定を仰ぐ**
- ✅ すべての決定を **トレーサブルに記録**

---

*このドキュメントは codex_responsibility.md, claude_code_responsibility.md, access_control.json と連動します。*
