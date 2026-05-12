---
title: "Codex ↔ Claude Code 並行開発管理システム"
created: 2026-05-08
updated: 2026-05-08
---

# 🤖 AI並行開発管理システム

Codex（ChatGPT/Codex）と Claude Code（Anthropic Claude）が同時に同じプロジェクトを開発する際、**AI同士の競合を防止し、効率的に協力するためのシステム**です。

---

## 📋 **ドキュメント一覧**

### **1. codex_responsibility.md**
Codex（ChatGPT）が担当する責務領域を定義
- ウトマチ百貨店統合管理ツール開発
- フロントエンド・バックエンド実装
- データベース設計・実装
- 技術仕様書作成

### **2. claude_code_responsibility.md**
Claude Code（Anthropic Claude）が担当する責務領域を定義
- ナレッジベース構築・管理
- AI協力メカニズム実装
- 分析・レポート自動化
- スキーマ・メタデータ管理

### **3. access_control.json**
ファイル・フォルダの所有権とアクセス権を定義
- 誰が何を編集できるか
- 読み取り専用リソース
- 共有リソース（specification.md など）
- 並行編集ルール

### **4. conflict_resolution.md**
競合が発生した際の解決プロセス
- 優先度ルール（Codex実装優先 vs ナレッジ優先）
- SHARED リソースの扱い方
- エスカレーション手順
- デッドロック対応

---

## 🔄 **システムの動作**

### **毎日 19:00 に自動実行**

```
Step 1: 並行編集の競合チェック
        check_concurrent_edits.mjs
        └─ 両AIが同じファイルを編集していないか確認

Step 2: Git マージ競合の検出
        git status, git diff

Step 3: AI進捗レポート生成
        generate_ai_sync_report.mjs
        └─ 両AIの変更内容、ロック状態などを報告

Step 4: 非競合ファイルの自動マージ
        git merge (競合なしの場合のみ)

Step 5: 最終サマリー生成
        parallel_dev_summary_YYYY-MM-DD.md
```

### **実行コマンド（手動実行の場合）**

```bash
# 毎日 19:00 に自動実行されるが、手動で実行したい場合：
bash scripts/ai_coordination/parallel_dev_daily_sync.sh

# 結果は以下に出力される：
# - tmp/ai_sync_report_YYYY-MM-DD.md
# - tmp/concurrent_edits_YYYY-MM-DD.md
# - tmp/parallel_dev_summary_YYYY-MM-DD.md
```

---

## 🛡️ **競合が発生した場合**

### **1. 自動検出**
`check_concurrent_edits.mjs` が両AIの編集状態を監視

```
Codex が implementation/frontend/app.jsx を編集中
  ↓
Claude Code も同じファイルを編集しようとする
  ↓
⚠️ CONFLICT DETECTED!
```

### **2. 優先度判定**
`access_control.json` のルール に従って優先度を判定

```
優先度1: Codex 実装
        └─ implementation/*, technical_specs/* での編集が最優先

優先度2: Claude Code ナレッジ
        └─ 04_DataLink/*, specifications での編集が最優先

優先度3: SHARED リソース（specification.md）
        └─ Git マージ + 人間判定
```

### **3. 自動解決**
低優先度の AI が待機、高優先度の AI が作業完了

```
Codex が implementation/ にいるため優先度1
Claude Code が同じファイル編集を試みた
  ↓
Claude Code: 作業キャンセル、待機
Codex: 作業継続・完了
Claude Code: ロック解除後、作業再開
```

### **4. ログ記録**
すべての競合と解決方法を `conflict_manifest.json` に記録

```json
{
  "file": "implementation/frontend/app.jsx",
  "ai_1": "Codex",
  "ai_2": "Claude Code",
  "status": "RESOLVED",
  "resolution": "Priority 1: Codex implementation - Claude Code released lock"
}
```

---

## 📊 **ファイル構成**

```
mcp/ai_environment_management/
├── README.md （このファイル）
├── codex_responsibility.md
├── claude_code_responsibility.md
├── conflict_resolution.md
├── access_control.json
├── codex_lock_state.json （自動更新）
├── claude_lock_state.json （自動更新）
└── conflict_manifest.json （自動更新）

scripts/ai_coordination/
├── check_concurrent_edits.mjs
├── generate_ai_sync_report.mjs
├── parallel_dev_daily_sync.sh
└── （将来：merge、release など）

tmp/ （毎日生成）
├── ai_sync_report_YYYY-MM-DD.md
├── concurrent_edits_YYYY-MM-DD.md
└── parallel_dev_summary_YYYY-MM-DD.md
```

---

## ✅ **チェックリスト**

### **Codex（ChatGPT）が確認すべき事項**

- [ ] `codex_responsibility.md` を読み、自分の責務を理解した
- [ ] `access_control.json` で「自分が編集できるファイル」と「禁止ファイル」を確認した
- [ ] `conflict_resolution.md` で優先度ルールを理解した
- [ ] 毎日の作業前に `ai_sync_report_*.md` をチェックする

### **Claude Code（Anthropic Claude）が確認すべき事項**

- [ ] `claude_code_responsibility.md` を読み、自分の責務を理解した
- [ ] `access_control.json` で「自分が編集できるファイル」と「禁止ファイル」を確認した
- [ ] `conflict_resolution.md` で優先度ルールを理解した
- [ ] 毎日 19:00 の自動同期後に `ai_sync_report_*.md` を確認する

### **User（宇土市）が確認すべき事項**

- [ ] このシステムの目的を理解した
- [ ] 両AIの責務分担が適切か判断した
- [ ] 優先度ルールに同意した
- [ ] 必要に応じて `conflict_resolution.md` の手動判定セクションに目を通した

---

## 🔧 **トラブルシューティング**

### **Q: 毎日 19:00 の自動同期が実行されない**

```bash
# スケジュールを確認
scheduled_task list | grep ai_parallel_dev

# 手動実行してみる
bash scripts/ai_coordination/parallel_dev_daily_sync.sh

# ログをチェック
tail -f ~/.claude/scheduled-tasks/ai_parallel_dev_daily_check/execution.log
```

### **Q: 競合が検出されたが、どうすればいいか？**

1. `conflict_manifest.json` で競合内容を確認
2. `conflict_resolution.md` の優先度ルールを適用
3. 低優先度の AI が作業を停止・ロック解除
4. 高優先度の AI が作業完了
5. 低優先度の AI が作業再開

### **Q: SHARED リソース（specification.md）に競合が起きた**

```
→ conflict_resolution.md の「タイプ3」セクションを参照
→ User（人間）が最終判定を行う
```

### **Q: スケジュールされた自動タスクを削除したい**

```bash
scheduled_task list
scheduled_task delete ai_parallel_dev_daily_check
```

---

## 📞 **問い合わせ・改善提案**

このシステムに問題や改善案がある場合：

1. `conflict_manifest.json` に詳細を記録
2. User に通知
3. User が`access_control.json`、`conflict_resolution.md` を更新
4. 両AIに通知

---

## 🎯 **目標**

このシステムの成功指標：

- ✅ **自動検出率 99%** - 競合をほぼ自動検出
- ✅ **自動解決率 95%** - 優先度ルールで即座に解決
- ✅ **手動介入 5% 以下** - 人間の判断が必要な件数
- ✅ **デッドロック 0** - 両AIが互いに待機する状況なし

---

## 📈 **進化予定（Future）**

- [ ] AI間の自動交渉機能（優先度ルール意外の柔軟な解決）
- [ ] 機械学習ベースの競合予測
- [ ] Slack/メール通知統合
- [ ] UI ダッシュボード（Web ベース）
- [ ] 複数プロジェクトへの拡張

---

## 📝 **ドキュメント更新履歴**

| 日付 | 更新内容 | 更新者 |
|------|--------|-------|
| 2026-05-08 | 初版作成 | Claude Code |
| - | - | - |

---

*このシステムは Codex と Claude Code による効率的な協力を実現します。*
