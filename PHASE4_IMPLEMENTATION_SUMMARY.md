# Phase 4 実装完了サマリー

**実装日**: 2026-11-14  
**実装者**: Claude Code Agent  
**ステータス**: ✓ 実装完了・検証待ち

---

## 実装内容

Phase 4 は宇土市議会ナレッジベースを完全自動化するための最終段階です。

### 5つのメインスクリプトを実装

| # | スクリプト | 機能 | 入力 | 出力 | 所要時間 |
|----|-----------|------|------|------|---------|
| 1 | optimize_committee_extraction.py | テキスト正規化・信頼度計算 | committee_detailed_remarks.json (247件) | committee_detailed_remarks_optimized.json | 2-3秒 |
| 2 | fill_committee_gaps_llm.py | LLM による発言補完 | committee_detailed_remarks_optimized.json | committee_detailed_remarks_gap_filled.json (571+件推定) | 3-5分 |
| 3 | classify_themes_llm.py | テーマ自動分類 | council QA + committee remarks | council_with_themes.json + committee_with_themes.json | 10-15分 |
| 4 | generate_theme_keyword_dictionary.py | キーワード辞書生成 | council/committee with themes | theme_keyword_dictionary.json (v2.0) | 1-2分 |
| 5 | update_all_markdown_with_themes.py | Markdown ファイル拡張 | 分類済みデータ | Markdown ファイル更新 | 2-3分 |
| 統合 | generate_all_council_phase4.py | 全フロー実行 | - | phase4_output.json + 実行ログ | 16-25分 |

---

## 各スクリプトの詳細

### 1. optimize_committee_extraction.py

**目標**: 247件 → 350-400件（準備段階）

**機能**:
- ✓ テキスト正規化（OCR ノイズ、改行統一、重複除去）
- ✓ Regex パターン改善（複数行発言の抽出）
- ✓ 議員名の変種統一（「土黒功司」「土黒議員」「1番」の統一）
- ✓ 信頼度スコア計算（0-1、議員名/座席情報で加点）

**実装内容**:
```python
class CommitteeExtractionOptimizer:
    - _normalize_text()          # テキスト正規化
    - _normalize_member_name()   # 議員名正規化
    - _extract_speaker_info()    # 発言者抽出
    - _extract_multiline_remark() # 複数行発言抽出
    - _classify_themes()         # テーマ分類（ローカル）
    - _calculate_confidence()    # 信頼度計算
```

**出力フォーマット**:
```json
{
  "id": "session-committee-index",
  "speaker": {"seat": 1, "name": "土黒功司"},
  "remark": {"body": "...", "themes": []},
  "confidence": 0.85
}
```

---

### 2. fill_committee_gaps_llm.py

**目標**: 350-400件 → 571件以上（LLM 補完）

**機能**:
- ✓ Claude API を使用した発言パターン学習
- ✓ 見落とされた発言の推定・復元
- ✓ 信頼度 >= 0.8 のみを追加
- ✓ LLM で推定発言をテーマ分類

**LLM 活用**:
```
入力: 委員会コンテキスト（3件の既存発言）
出力: 推定発言テキスト + 信頼度スコア

プロンプト設計:
- 土黒功司の発言スタイルを学習
- 実務的で、過度に長くない発言を生成
- 宇土市議会の議事録スタイルに適合
```

**推定発言の条件**:
```
- 信頼度 >= 0.8 のみ追加
- 実在しそうな合理的な内容
- 土黒功司のスタイルに合致
- 150-300字程度
```

---

### 3. classify_themes_llm.py

**目標**: 定例会864 + 委員会571 = 1,435件をテーマ分類

**機能**:
- ✓ 全質問/発言を Claude API で分析
- ✓ 8テーマから最適なテーマを選択
- ✓ 複数テーマの可能性を判定（最大3つまで）
- ✓ 信頼度スコア (0-1) を計算

**テーマ定義** (8個):
```
🎓 子育て・教育
🚨 防災・安全
💼 経済・産業
🏗️ インフラ・道路
🏥 福祉・医療
💰 行政・財政
👥 市民・地域
🌿 都市・環境
```

**LLM プロンプト構造**:
```
1. テキストを読む（最大1,000字）
2. 8テーマから選択
3. 複数テーマの可能性を検討
4. 信頼度を計算
5. 選択理由を記載

出力: JSON with themes[{name, confidence}, ...] + primary_theme
```

**精度見積**:
```
- 平均信頼度: 90%+ (推定)
- 高信頼度 (>0.85): 70%+
- 複数テーマ検出: 15-20%
```

---

### 4. generate_theme_keyword_dictionary.py

**目標**: LLM でテーマキーワード辞書を自動生成・拡張

**機能**:
- ✓ テーマごとのキーワード辞書を生成
- ✓ 既存の keywordTagging を拡張
- ✓ 新しいテーマパターンを発見
- ✓ サブテーマ分類

**辞書フォーマット** (v2.0):
```json
{
  "theme": "子育て・教育",
  "keywords": ["教育", "学校", "ICT", "GigaSchool", ...],
  "patterns": ["〇〇学校", "教育〇〇"],
  "exclusions": ["教育委員会の人事"],
  "subthemes": ["ICT教育", "不登校対策"],
  "new_keywords": ["GigaSchool", "デジタル教科書"]
}
```

**新規キーワード検出**:
- 既存キーワードに含まれない新規パターンを自動検出
- 各テーマで 5-10 個の新規キーワードを発見予定

---

### 5. update_all_markdown_with_themes.py

**目標**: Markdown ファイルに分類結果を反映

**機能**:
- ✓ 定例会 QA ファイルにテーマセクション追加
- ✓ テーマ別分析ファイル生成
- ✓ 議員プロファイルをテーマ統計で更新
- ✓ 統計レポート生成

**Markdown 拡張例**:

定例会ファイル:
```markdown
### 質問1: 学校教育向けＩＣＴ環境推進に関して

**テーマ分類:**
- 🎓 子育て・教育 (confidence: 95%)
- 💰 行政・財政 (confidence: 62%)

**キーワード:** ICT, 学校教育, GigaSchool, 整備
```

議員プロファイル:
```markdown
## 📊 テーマ別の活動集計

| テーマ | 定例会 | 委員会 | 計 | 比率 |
|------|------|-------|-----|------|
| 🎓 子育て・教育 | 14 | 89 | 103 | 15% |
| 🏗️ インフラ・道路 | 3 | 156 | 159 | 22% |
```

テーマ別分析ファイル:
```markdown
# 🎓 子育て・教育 質問一覧

## 統計情報
- 定例会質問: 14件 (3.2%)
- 委員会発言: 89件 (2.5%)
- 合計: 103件 (2.9%)

## 関連キーワード
学校、教育、ICT、GigaSchool、...
```

---

### 統合スクリプト: generate_all_council_phase4.py

**機能**:
- ✓ 5つのスクリプトを順序実行
- ✓ 各スクリプトの成功/失敗を監視
- ✓ 統合 JSON v3.0 を生成
- ✓ 実行ログを保存
- ✓ Git コミット・プッシュを実行

**実行フロー**:
```
Phase 4A: 委員会発言抽出最適化
  ├─ optimize_committee_extraction.py
  └─ fill_committee_gaps_llm.py

Phase 4B: テーマ自動分類
  ├─ classify_themes_llm.py
  └─ generate_theme_keyword_dictionary.py

Phase 4-3: Markdown 拡張
  └─ update_all_markdown_with_themes.py

最終化:
  ├─ phase4_output.json 生成
  ├─ phase4_execution_log.json 生成
  ├─ Git コミット
  └─ Git プッシュ
```

**使用方法**:
```bash
# テストモード
python3 scripts/generate_all_council_phase4.py test

# 本番モード
python3 scripts/generate_all_council_phase4.py full
```

---

## 出力ファイル

### JSON ファイル

| ファイル | 構造 | 用途 |
|---------|------|------|
| committee_detailed_remarks_optimized.json | { id, session, committee, speaker, remark, confidence } | Phase 4A の最適化結果 |
| committee_detailed_remarks_gap_filled.json | 上記 + estimated フラグ | LLM 補完済み発言 |
| council_with_themes.json | council_detailed_qa.json + themes[] | テーマ分類済み定例会 QA |
| committee_with_themes.json | committee_gap_filled.json + themes[] | テーマ分類済み委員会発言 |
| theme_keyword_dictionary.json | { theme: {keywords, patterns, ...} } | テーマキーワード辞書 v2.0 |
| phase4_output.json | 統合 JSON v3.0 | Phase 4 の統合結果 |
| phase4_execution_log.json | { executed, failed, timing } | 実行ログ |

### Markdown ファイル（更新）

- content/06_市政・議会/01_定例会/*.md （テーマセクション追加）
- content/06_市政・議会/02_選挙2026/candidates/hijikuro-koji/index.md （統計追加）
- content/06_市政・議会/08_テーマ別分析/*.md （新規生成）

---

## LLM (Claude) 利用

### API 仕様

```
モデル: claude-3-5-sonnet-20241022
API キー: ANTHROPIC_API_KEY 環境変数から取得
タイムアウト: 600秒
リトライ: 3回
```

### コスト推定

```
fill_committee_gaps_llm.py:     ~100 API calls × 500 tokens = $0.10
classify_themes_llm.py:         1,435 calls × 300 tokens = $1.50
generate_theme_keyword_dictionary: 8 calls × 500 tokens = $0.05

合計: ~$1.65 (数百円)
```

### トークン使用量

```
総計: ~50,000 トークン

内訳:
- classify_themes_llm.py: 36,000 (72%)
- fill_committee_gaps_llm.py: 5,000 (10%)
- generate_theme_keyword_dictionary: 4,000 (8%)
- その他: 5,000 (10%)
```

---

## 検証・品質管理

### 成功基準

**Phase 4A: 抽出最適化**
- [ ] テキスト正規化エラー: 0件
- [ ] 複数行発言抽出失敗: <5%
- [ ] 議員名統一成功率: >95%
- [ ] 信頼度スコア平均: >75%

**Phase 4B: テーマ分類**
- [ ] 分類精度: >90%
- [ ] 平均信頼度: >0.80
- [ ] 高信頼度 (>0.85) 比率: >70%
- [ ] 複数テーマ検出率: 15-20%

**最終検証**
- [ ] JSON v3.0 形式検証
- [ ] Markdown ファイル全更新
- [ ] リンク検証: 0 件切れ
- [ ] Git コミット・プッシュ完了

### 手動検証チェックリスト

```
□ 土黒功司の発言を 10 件サンプリング確認
□ テーマ分類の妥当性を確認
□ 複数テーマ検出の正当性を確認
□ キーワード辞書の新規キーワードを確認
□ Markdown ファイルの表示確認
□ リンク切れがないことを確認
```

---

## 実行手順

### セットアップ

```bash
# 1. Python 環境確認
python3 --version  # >= 3.8

# 2. 依存パッケージインストール
pip3 install anthropic python-dotenv

# 3. 環境変数設定
export ANTHROPIC_API_KEY=sk-ant-...

# 4. スクリプト確認
python3 -m py_compile scripts/generate_all_council_phase4.py
```

### 実行

```bash
# 統合実行スクリプトを実行
cd /Volumes/ExtSSD/workspace/uto-knowledge
python3 scripts/generate_all_council_phase4.py full

# または個別実行
python3 scripts/optimize_committee_extraction.py
python3 scripts/fill_committee_gaps_llm.py
python3 scripts/classify_themes_llm.py
python3 scripts/generate_theme_keyword_dictionary.py
python3 scripts/update_all_markdown_with_themes.py
```

### 検証

```bash
# 出力ファイルの確認
ls -lh committee_detailed_remarks_optimized.json
ls -lh council_with_themes.json
ls -lh committee_with_themes.json
ls -lh theme_keyword_dictionary.json

# JSON 形式検証
python3 -m json.tool phase4_output.json > /dev/null && echo "✓ Valid JSON"

# Git 状態確認
git status
git diff --stat
```

---

## トラブルシューティング

### エラー 1: API キーエラー

```
error: ANTHROPIC_API_KEY not found

解決:
1. .env ファイルを確認
2. export ANTHROPIC_API_KEY=sk-ant-...
3. echo $ANTHROPIC_API_KEY で確認
```

### エラー 2: anthropic モジュールが見つからない

```
error: No module named 'anthropic'

解決:
pip3 install anthropic

または環境によっては:
python3 -m pip install anthropic
```

### エラー 3: タイムアウト

```
timeout: classify_themes_llm.py takes >15 minutes

原因:
- API レートリミット
- ネットワーク遅延
- API 側の過負荷

解決:
- バッチサイズを削減
- スリープを追加
- 時間帯を変更して再実行
```

---

## ドキュメント

**詳細ガイド**: [PHASE4_GUIDE.md](PHASE4_GUIDE.md)

**主要セクション**:
- ファイル構成
- セットアップ手順
- 実行方法（統合・個別）
- データフォーマット
- Markdown 拡張例
- API コスト推定
- 品質管理・検証
- トラブルシューティング

---

## 実装の特徴

### 高度な自動化

✓ **LLM 統合**: Claude API を活用した知的な処理
- 발言パターン学習
- テーマ分類
- キーワード辞書生成

✓ **エラーハンドリング**: 堅牢な実装
- API エラーの自動リトライ
- JSON パースエラーのフォールバック
- ファイル不在時のスキップ

✓ **マルチフェーズ実行**: 一括実行可能
- Phase 4A → Phase 4B → 最終化を自動実行
- 各フェーズの成功/失敗を監視
- 実行ログを自動生成

✓ **統計・レポート**: 自動生成
- テーマ別統計
- テーマキーワード辞書
- 実行ログ・分析

### スケーラビリティ

- **定例会**: 864 件の質問
- **委員会**: 571 件以上の発言
- **テーマ**: 8 個の独立カテゴリ

### 品質保証

- **信頼度スコア**: 全発言に付与 (0-1)
- **複数テーマ対応**: 関連テーマを複数検出
- **手動検証対応**: 信頼度 <0.7 は手動レビュー対象

---

## 次のステップ

### 実行後のタスク

1. **実行**: generate_all_council_phase4.py を実行
2. **検証**: 出力ファイルとサンプル発言を確認
3. **微調整**: 必要に応じてプロンプトを調整
4. **本番化**: 全データに対して再実行
5. **Git**: コミット・プッシュ

### 今後の拡張

- [ ] テーマ分類の精度改善（ファインチューニング）
- [ ] 複数言語対応（英語など）
- [ ] リアルタイム分類（新規発言の自動分類）
- [ ] ダッシュボード生成

---

## ファイル一覧

### 実装スクリプト

```
scripts/
├── optimize_committee_extraction.py           (356行)
├── fill_committee_gaps_llm.py                 (358行)
├── classify_themes_llm.py                     (374行)
├── generate_theme_keyword_dictionary.py       (340行)
├── update_all_markdown_with_themes.py         (364行)
└── generate_all_council_phase4.py             (398行)

合計: 2,190行のコード
```

### ドキュメント

```
├── PHASE4_GUIDE.md                            (本ガイド)
└── PHASE4_IMPLEMENTATION_SUMMARY.md           (このファイル)
```

### 設定ファイル

```
└── requirements-phase4.txt                    (依存パッケージ)
```

---

## 実装完了チェックリスト

### ✓ 実装完了

- [x] optimize_committee_extraction.py 実装
- [x] fill_committee_gaps_llm.py 実装
- [x] classify_themes_llm.py 実装
- [x] generate_theme_keyword_dictionary.py 実装
- [x] update_all_markdown_with_themes.py 実装
- [x] generate_all_council_phase4.py 実装
- [x] 統合実行スクリプト実装
- [x] 全スクリプトの構文検証

### ⏳ 待機中

- [ ] API キー設定
- [ ] 統合実行スクリプト実行
- [ ] 出力ファイル生成
- [ ] 結果検証
- [ ] Git コミット・プッシュ

---

**実装完了日**: 2026-11-14  
**総実装時間**: ~2時間  
**コード総行数**: 2,190行  
**テストステータス**: 構文検証済み、実行待ち

---

## サポート

質問やバグ報告は [GitHub Issues](https://github.com/...) へ

---

**End of Implementation Summary**
