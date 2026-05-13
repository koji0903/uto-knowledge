---
id: claude_code_responsibility_20260508
type: ai_responsibility
title: "Claude Code 責務領域定義"
created: 2026-05-08
status: active
tags: [AI協力, Claude Code, 並行開発, 責務分担]
---

# Claude Code（Anthropic Claude）の責務領域

**定義日:** 2026-05-08  
**有効期限:** 継続（変更は conflict_resolution.md に記録）

---

## 📋 **主要責務**

### **1. ナレッジベース構築・管理（最優先）**

**対象フォルダ:** 
- `04_DataLink/**` （全体）
- `05_Templates/`
- `mcp/ai_profiles/`
- `ホーム.md`, `README.md`

#### **1-1 知識体系の構築**
- 宇土OS の 8層構造定義
- 機能OS（教育、産業、移住、児童福祉、RMO）の仕様化
- レイヤ間の因果関係定義
- ビジョン→戦略→実装のマッピング

#### **1-2 実績データの記録・分析**
- ウトマチ百貨店の月次実績を `actual_performance_*.md` に記録
- 売上推移、生産者数、商品数の可視化
- 目標値との比較分析
- 課題・改善提案の文書化

#### **1-3 意思決定ドキュメント**
- プロジェクト決定履歴
- AI間の合意事項
- ビジネス上の重要判断の記録
- トレーサビリティ確保

---

### **2. AI協力メカニズムの実装**

**対象フォルダ:** `mcp/ai_profiles/`, `scripts/`

#### **2-1 矛盾検出・解決**
- Codex 実装と Claude Code ナレッジの乖離を検出
- 衝突した場合の自動解決プロセス
- conflict_manifest.json の管理
- 両AIへの提案・通知

#### **2-2 相互参照・学習ループ**
- Codex の技術決定を ナレッジに反映
- Claude Code の分析を Codex の実装に活かす
- 双方向のデータ流通

#### **2-3 ハンドオフ・プロンプト生成**
- Codex へのハンドオフドキュメント生成
- 要件・仕様書の自動生成
- 実装との齟齬チェック

---

### **3. 分析・レポート自動化**

**対象フォルダ:** `scripts/`, `tmp/`

#### **3-1 日次・週次レポート**
- `daily_dashboard.md` 自動生成
- `parallel_dev_sync_*.md` （両AI進捗同期）
- `conflict_alert_*.md` （競合警告）
- `obsidian_analysis.md` （ナレッジ構造分析）

#### **3-2 進捗管理レポート**
- プロジェクト進捗率
- マイルストーン達成状況
- KPI メトリクス
- リスク・課題追跡

#### **3-3 実績分析**
- ウトマチ百貨店月次実績分析
- チャネル別売上分析
- 生産者・商品数推移
- 目標達成見込み予測

---

### **4. スキーマ・メタデータ管理**

**対象フォルダ:** `04_DataLink/schema/`, `mcp/`

- DataLink frontmatter スキーマ定義
- Firestore スキーマ定義
- JSON スキーマ（决定、プロジェクト、ログなど）
- 検証ルール定義

---

## 🚫 **禁止事項（Codex に任せる）**

以下の領域には編集・更新しないでください：

- ✋ `implementation/` （実装コード）
- ✋ `technical_specs/api.md` （API仕様 - Codex が実装）
- ✋ `development_logs/` （開発ログ）
- ✋ package.json, requirements.txt （依存関係）
- ✋ Vercel 設定、デプロイパイプライン

**理由:** これらは Codex が実装・管理し、動作保証の責任を持つ

---

## 🔄 **共有リソースでの作業ルール**

### **specification.md（マスター仕様書）**

**ステータス：** SHARED（読み取り + 同期更新のみ）

**編集方法：**
1. Claude Code が分析で仕様改善を提案
2. `04_DataLink/ai_analysis/proposal_*.md` に理由を記載
3. Codex に通知
4. Codex が実装可能性を判定
5. 可能 → specification.md を Claude Code が更新
6. 不可 → 理由を記録し検討延期

**手順例：**
```
Claude Code: 「教育OSと産業OSの連携を強化する仕様を提案」
  ↓
Claude Code が ai_analysis/proposal_education_industry_sync.md に記載
  ↓
Codex が実装コスト・スケジュール評価
  ↓
仕様書を一緒に更新
  ↓
Codex が実装開始
```

---

## 📊 **分析・レポート進捗トラッキング**

### **毎日の報告形式**

```markdown
## [日付] 分析・ナレッジ進捗

【完成したドキュメント】
- ✅ [ドキュメント名] → 行数 XXX
- ✅ [ドキュメント名] → 図表 X個

【実施した分析】
- 🔍 [分析内容] → 結果
- 🔍 [提案] → ステータス

【発見された矛盾】
- 🔴 [矛盾内容] → Codex へ通知
- 🟡 [検討中]

【Codex への提案事項】
- 実装検討：[内容]
- 技術相談：[質問]

【明日の予定】
- [ ] [分析]
- [ ] [ドキュメント更新]
```

---

## 🔐 **ファイルロック・予約方法**

分析開始時：
```bash
bash scripts/ai_coordination/reserve_resource.mjs \
  --ai "claude_code" \
  --file "04_DataLink/actual_performance_2026.md" \
  --until "2026-05-09T18:00:00Z"
```

分析完了時：
```bash
bash scripts/ai_coordination/release_resource.mjs \
  --ai "claude_code" \
  --file "04_DataLink/actual_performance_2026.md"
```

---

## 📞 **競合発生時の対応**

**Claude Code が Codex と競合に気づいたら：**

1. **即座に作業を停止** → ファイルをロック解除
2. `04_DataLink/ai_environment_management/conflict_manifest.json` に記録
3. conflict_resolution.md の優先度ルールに従って判定
4. 必要に応じて Codex に相談
5. 解決策を実装・記録

**優先度ルール：**
- **優先度1：Codex 実装** → Claude Code が対応する
- **優先度2：Claude Code ナレッジ** → Codex が実装を調整
- **優先度3：共有リソース** → Git マージ + 人間判定

---

## ✅ **署名**

**AI:** Claude Code（Anthropic Claude）  
**定義責任者:** User（宇土市）  
**有効開始日:** 2026-05-08  
**最終確認日:** 2026-05-08

---

*このドキュメントは Codex との協力プロセスの一部です。*
*変更・更新については conflict_resolution.md を参照してください。*
