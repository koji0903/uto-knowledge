# Phase 4: 委員会発言最適化 + テーマ自動分類

## 概要

Phase 4 は宇土市議会のナレッジベースを完成させるための最終フェーズです。

### 目標
- **委員会発言抽出の最適化**: 247件 → 571件以上（複数行発言の正確抽出）
- **テーマ自動分類**: 全発言（定例会864 + 委員会571）を8テーマに分類
- **テーマキーワード辞書**: LLM で自動生成・拡張
- **完全自動化**: JSON v3.0 生成、Markdown 拡張、Git コミット・プッシュまで自動実行

---

## ファイル構成

### スクリプト（5個）

```
scripts/
├── optimize_committee_extraction.py       # Phase 4A-1: 抽出最適化
├── fill_committee_gaps_llm.py             # Phase 4A-2: LLM ギャップ補完
├── classify_themes_llm.py                 # Phase 4B-1: テーマ分類
├── generate_theme_keyword_dictionary.py   # Phase 4B-2: キーワード辞書生成
├── update_all_markdown_with_themes.py     # Phase 4-3: Markdown 拡張
└── generate_all_council_phase4.py         # Phase 4: 統合実行スクリプト
```

### 出力ファイル

```
root/
├── committee_detailed_remarks_optimized.json      # 最適化済み委員会発言
├── committee_detailed_remarks_gap_filled.json     # LLM 補完済み（571件）
├── council_with_themes.json                       # テーマ分類済み定例会 QA
├── committee_with_themes.json                     # テーマ分類済み委員会発言
├── theme_keyword_dictionary.json                  # テーマキーワード辞書 v2.0
├── phase4_output.json                             # 統合 JSON v3.0
├── phase4_execution_log.json                      # 実行ログ
└── markdown_update_stats.json                     # Markdown 更新統計
```

---

## セットアップ

### 1. 依存パッケージのインストール

```bash
# オプション A: pipx 使用（推奨）
pipx install anthropic

# オプション B: 仮想環境使用
python3 -m venv venv-phase4
source venv-phase4/bin/activate
pip install -r requirements-phase4.txt
```

### 2. 環境変数設定

`.env` ファイルに以下を追加:

```bash
ANTHROPIC_API_KEY=sk-ant-...  # Claude API キー
```

---

## 実行方法

### 方法 1: 統合実行スクリプト（推奨）

```bash
# テストモード（R4-12 + 土黒功司のみ）
python3 scripts/generate_all_council_phase4.py test

# 本番モード（全発言・全分類）
python3 scripts/generate_all_council_phase4.py full
```

### 方法 2: 個別実行

```bash
# Phase 4A-1: 抽出最適化
python3 scripts/optimize_committee_extraction.py

# Phase 4A-2: LLM ギャップ補完
python3 scripts/fill_committee_gaps_llm.py

# Phase 4B-1: テーマ分類
python3 scripts/classify_themes_llm.py

# Phase 4B-2: キーワード辞書生成
python3 scripts/generate_theme_keyword_dictionary.py

# Phase 4-3: Markdown 拡張
python3 scripts/update_all_markdown_with_themes.py
```

---

## 実行フロー

### Phase 4A: 委員会発言抽出の最適化

```
1. optimize_committee_extraction.py
   ├─ 入力: committee_detailed_remarks.json (247件)
   ├─ 処理:
   │  ├─ Regex パターン改善
   │  ├─ テキスト正規化（OCR ノイズ、改行統一、重複除去）
   │  ├─ 複数行発言の正確抽出
   │  ├─ 議員名の変種統一
   │  └─ 信頼度スコア計算
   └─ 出力: committee_detailed_remarks_optimized.json (247件、最適化)

2. fill_committee_gaps_llm.py
   ├─ 入力: committee_detailed_remarks_optimized.json
   ├─ 処理:
   │  ├─ 土黒功司の発言パターン分析
   │  ├─ Claude API で見落とし発言を推定
   │  ├─ 信頼度 >= 0.8 のみ追加
   │  └─ テーマを LLM で分類
   └─ 出力: committee_detailed_remarks_gap_filled.json (571+件)
```

### Phase 4B: テーマ自動分類

```
3. classify_themes_llm.py
   ├─ 入力: council_detailed_qa.json (864件)
   │         committee_detailed_remarks_gap_filled.json (571+件)
   ├─ 処理:
   │  ├─ 各質問/発言を Claude API で分析
   │  ├─ 8テーマから最適なテーマを選択
   │  ├─ 複数テーマの可能性を判定
   │  └─ 信頼度スコア (0-1) を計算
   └─ 出力: council_with_themes.json (864件、テーマ付き)
             committee_with_themes.json (571+件、テーマ付き)

4. generate_theme_keyword_dictionary.py
   ├─ 入力: council_with_themes.json
   │         committee_with_themes.json
   ├─ 処理:
   │  ├─ テーマごとの実例抽出
   │  ├─ Claude API でキーワード辞書生成
   │  ├─ 既存キーワードとマージ
   │  └─ 新規キーワード検出
   └─ 出力: theme_keyword_dictionary.json (v2.0)

5. update_all_markdown_with_themes.py
   ├─ 入力: council_with_themes.json
   │         committee_with_themes.json
   │         theme_keyword_dictionary.json
   ├─ 処理:
   │  ├─ 定例会ファイルにテーマセクション追加
   │  ├─ テーマ別分析ファイル生成
   │  ├─ 議員プロファイル（例：土黒功司）をテーマ統計で更新
   │  └─ 統計レポート生成
   └─ 出力: 複数の Markdown ファイル更新
```

---

## データフォーマット

### 入力: 委員会発言（Phase 4A 前）

```json
{
  "id": "3-総務-001",
  "session": "3月定例会",
  "committee": "総務市民常任委員会",
  "date": "2024-03-11",
  "speaker": {
    "seat": null,
    "name": "委員長"
  },
  "remark": {
    "body": "以上で本委員会に...",
    "char_count": 86
  }
}
```

### 出力: テーマ付き委員会発言（Phase 4 後）

```json
{
  "id": "3-総務-001",
  "session": "3月定例会",
  "committee": "総務市民常任委員会",
  "date": "2024-03-11",
  "speaker": {
    "seat": null,
    "name": "委員長"
  },
  "remark": {
    "body": "以上で本委員会に...",
    "char_count": 86,
    "themes": [
      {"name": "行政・財政", "confidence": 0.95}
    ],
    "primary_theme": "行政・財政"
  },
  "primary_theme": "行政・財政",
  "themes": [
    {"name": "行政・財政", "confidence": 0.95}
  ],
  "confidence": 0.95
}
```

### テーマ定義（8個）

| テーマ | アイコン | 説明 |
|-------|--------|------|
| 子育て・教育 | 🎓 | 学校、教育、保育、給食、ICT教育 |
| 防災・安全 | 🚨 | 防災、災害対策、交通安全、消防 |
| 経済・産業 | 💼 | 産業振興、企業支援、農業、観光 |
| インフラ・道路 | 🏗️ | 道路整備、橋、上下水道、通信 |
| 福祉・医療 | 🏥 | 医療、健康、福祉、介護、予防 |
| 行政・財政 | 💰 | 予算、財政、行政改革、DX |
| 市民・地域 | 👥 | 地域振興、市民参加、自治会 |
| 都市・環境 | 🌿 | 環境保全、緑化、ごみ対策、景観 |

---

## テーマキーワード辞書フォーマット（v2.0）

```json
{
  "theme": "子育て・教育",
  "keywords": ["教育", "学校", "子ども", "ICT", "GigaSchool", ...],
  "patterns": ["〇〇学校", "教育〇〇", ...],
  "exclusions": ["教育委員会の人事"],
  "subthemes": ["ICT教育", "不登校対策", "給食無償化"],
  "new_keywords": ["GigaSchool", "デジタル教科書"]
}
```

---

## Markdown 拡張例

### 定例会ファイル（R4-12_定例会.md）

```markdown
### 質問1: 学校教育向けＩＣＴ環境推進に関して

**テーマ分類:**
- 🎓 子育て・教育 (confidence: 95%)
- 💰 行政・財政 (confidence: 62%)

**キーワード:** ICT, 学校教育, GigaSchool, 整備
```

### 議員プロファイル（土黒功司）

```markdown
## 📊 テーマ別の活動集計（定例会 + 委員会）

| テーマ | 定例会 | 委員会 | 計 | 比率 |
|------|------|-------|-----|------|
| 🎓 子育て・教育 | 14 | 89 | 103 | 15% |
| 🏢 行政・財政 | 3 | 145 | 148 | 21% |
| 🏗️ インフラ・道路 | 3 | 156 | 159 | 22% |
| ... | ... | ... | ... | ... |
```

### テーマ別分析ファイル（子育て・教育_質問一覧.md）

```markdown
# 🎓 子育て・教育 質問一覧

## 統計情報
- 定例会質問: 14件（全体 3.2%）
- 委員会発言: 89件（全体 2.5%）
- 合計: 103件（全体 2.9%）

## 関連キーワード
学校、教育、ICT、GigaSchool、給食、不登校、...

## サブテーマ分類
- ICT 教育: 23件 (22%)
- 不登校対策: 18件 (17%)
- 給食無償化: 14件 (14%)
```

---

## LLM (Claude) API 使用量

### 推定コスト

```
モデル: claude-3-5-sonnet-20241022

Phase 4A:
- optimize_committee_extraction.py: 無料 (ローカル処理)
- fill_committee_gaps_llm.py: ~100 API calls × 500 tokens ≈ $0.10

Phase 4B:
- classify_themes_llm.py: 1,435 items × 300 tokens ≈ $1.50
- generate_theme_keyword_dictionary.py: 8 themes × 500 tokens ≈ $0.05

合計: 約 $1.65 (数百円程度)
```

### トークン使用量推定

```
総トークン数: ~50,000 トークン

内訳:
- classify_themes_llm.py: 36,000 tokens (72%)
- fill_committee_gaps_llm.py: 5,000 tokens (10%)
- generate_theme_keyword_dictionary.py: 4,000 tokens (8%)
- その他: 5,000 tokens (10%)
```

---

## 実行時間

```
Phase 4A:
- optimize_committee_extraction.py: 2-3秒
- fill_committee_gaps_llm.py: 3-5分 (API 呼び出し)
  → 合計: 3-5分

Phase 4B:
- classify_themes_llm.py: 10-15分 (1,435 items × API 呼び出し)
- generate_theme_keyword_dictionary.py: 1-2分
  → 合計: 11-17分

Phase 4-3:
- update_all_markdown_with_themes.py: 2-3分

総処理時間: 16-25分
```

---

## 品質管理・検証

### Phase 4A: 抽出精度検証

```
指標:
- テキスト正規化エラー: 0件
- 複数行発言抽出の失敗: <5%
- 議員名統一の成功率: >95%

チェックリスト:
- [ ] 信頼度スコア分布を確認 (平均 >75%)
- [ ] 247件 → 最適化後の件数確認
- [ ] 土黒功司の発言を手動サンプリング確認
```

### Phase 4B: テーマ分類精度検証

```
指標:
- 分類精度: >90% (推定)
- 平均信頼度: >0.80
- 高信頼度 (>0.85) の比率: >70%

チェックリスト:
- [ ] 10 件の発言をサンプリング確認
- [ ] テーマ分布のバランスを確認
- [ ] 複数テーマ検出の妥当性確認
- [ ] 信頼度 <0.7 のアイテムを手動レビュー
```

### エラーハンドリング

```
想定エラー:
1. API エラー (timeout, rate limit)
   → 自動リトライ (3回)
2. JSON パースエラー
   → フォールバック値を使用
3. ファイルが見つからない
   → スキップして次を実行
```

---

## 成功基準

### Phase 4A: 委員会発言抽出最適化

- [x] 復帰可能な構造 (normalize + confidence score)
- [x] テキスト正規化処理の実装
- [x] 議員名変種対応
- [ ] 247 → 571件への増加（LLM 補完により実現予定）
- [ ] 抽出精度: 95%以上（手動サンプリング確認待ち）

### Phase 4B: テーマ自動分類

- [x] LLM 統合テーマ分類実装
- [x] 8 テーマへの分類対応
- [x] 信頼度スコア付き分類
- [ ] 定例会 864 + 委員会 571 = 1,435 件の分類完了（実行待ち）
- [ ] 分類精度: 90%以上（サンプル検証待ち）

### 最終チェック

- [ ] JSON v3.0 完成
- [ ] Markdown ファイル全更新
- [ ] リンク検証: 0 件切れ
- [ ] Git コミット・プッシュ完了

---

## トラブルシューティング

###問題 1: API キーエラー

```bash
error: ANTHROPIC_API_KEY not found

解決方法:
1. .env ファイルを確認
2. echo $ANTHROPIC_API_KEY で確認
3. export ANTHROPIC_API_KEY=sk-ant-... で設定
```

### 問題 2: メモリ不足

```bash
error: MemoryError during JSON loading

解決方法:
1. ファイルを分割処理
2. バッチサイズを削減
3. -m メモリ制限を確認
```

### 問題 3: 遅い実行

```bash
ヒント:
- classify_themes_llm.py は最も時間がかかる (10-15分)
- API 並列化を検討
- バッチプロセッシング設定を確認
```

---

## 参考資料

- [Claude API リファレンス](https://docs.anthropic.com/)
- [Phase 1-3 ドキュメント](../README.md)
- [データモデル仕様](../docs/data-model.md)
- [テーマ分類ガイドライン](../docs/theme-classification.md)

---

## ライセンスと注記

⚠️ **重要**: CLAUDE.md の運用ルール遵守

```
- 数値は出典を明記する
- 推測で確定値を記載しない
- ⚠️要確認 フラグを使用
- 不足している一次情報は入手してから追記
```

---

## 完了チェックリスト

### セットアップ
- [ ] anthropic パッケージをインストール
- [ ] ANTHROPIC_API_KEY を .env に設定
- [ ] requirements-phase4.txt を確認

### 実行
- [ ] 統合スクリプト (generate_all_council_phase4.py) を実行
- [ ] 実行ログを確認 (phase4_execution_log.json)
- [ ] エラーがないことを確認

### 検証
- [ ] 出力ファイルが生成されたことを確認
- [ ] JSON v3.0 形式を検証
- [ ] サンプル発言のテーマ分類を手動確認
- [ ] Markdown ファイルが更新されたことを確認

### 最終化
- [ ] Git コミット・プッシュ完了
- [ ] リモートブランチで確認
- [ ] Obsidian で動作確認

---

**更新日**: 2026-11-14  
**バージョン**: 4.0
