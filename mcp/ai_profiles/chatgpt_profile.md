---
id: profile_chatgpt
type: ai_profile
ai_name: ChatGPT
organization: OpenAI
created: 2026-05-03
---

# ChatGPT AI Profile

## 概要

OpenAI による大規模言語モデル。幅広いスキル、実装ガイダンス、プラグイン/スキル情報が強み。

## 基本情報

| 項目 | 内容 |
|------|------|
| **組織** | OpenAI |
| **最新モデル** | GPT-4o / GPT-4 Turbo |
| **特徴** | 多才、プラグイン対応、Code Interpreter |
| **推奨用途** | プログラミング、実装ガイド、スキル提案 |

## 強み

### 1. プログラミング・実装
- コード生成・デバッグが得意
- 複数言語対応（Python、JavaScript、Go など）
- フレームワーク・ライブラリ知識が豊富
- テスト・ドキュメント生成

### 2. 幅広いスキル
- ライティング・編集
- 資料作成・プレゼン
- データ分析（Code Interpreter）
- デザイン・UI/UX 相談

### 3. プラグイン・スキル情報
- 最新プラグイン情報
- 統合ツール（Zapier など）の使い方
- 自動化スクリプト作成
- API 統合ガイド

### 4. ユースケース知識
- 実装パターン集
- ベストプラクティス
- アンチパターン指摘
- 代替手段提案

## 弱み・制限

| 弱み | 対策 |
|------|------|
| **深い分析・複雑な推論** | Claude に複雑な判断を依頼 |
| **最新の Web 情報** | Gemini に検索を依頼 |
| **セキュリティ専門分析** | Claude に安全性評価を依頼 |
| **Obsidian/MCP 統合** | Code Interpreter で補完 |

## 推奨タスク

### ✅ ChatGPT が最適

```
プログラミング・実装
  ├─ コード生成・リファクタリング
  ├─ バグ修正・デバッグ
  ├─ テストコード作成
  ├─ 複数言語間の移植
  └─ パフォーマンス最適化

スクリプト自動化
  ├─ bash / Python スクリプト
  ├─ CI/CD パイプライン
  ├─ Webhook・API クライアント
  └─ バッチ処理

ドキュメント・資料
  ├─ 技術ドキュメント作成
  ├─ README / API ドキュメント
  ├─ Markdown ファイル生成
  └─ プレゼン資料作成

データ処理・分析
  ├─ CSV / JSON 処理
  ├─ データ変換・加工
  ├─ 集計・グラフ生成
  └─ パターン分析

スキル・ツール提案
  ├─ 新しいライブラリ検討
  ├─ フレームワーク選定
  ├─ プラグイン / 連携ツール
  └─ 代替実装方案
```

### 🔄 複数 AI との組み合わせ

| シナリオ | リード | サブ | 用途 |
|---------|------|-----|------|
| 新機能実装 | ChatGPT | Claude | 実装+設計検証 |
| スクリプト自動化 | ChatGPT | Gemini | コード作成+テスト環境確認 |
| ドキュメント生成 | ChatGPT | Claude | 作成+品質確認 |
| API 統合 | ChatGPT | Gemini | 実装+最新仕様確認 |

## Prompt Guide

### セットアップ（最初に提供）

```
あなたは uto-knowledge の実装・ツール活用担当 AI です。

## 役割
- コード生成・実装をサポート
- スクリプト・自動化を提供
- ツール活用を提案する
- ドキュメント・資料を生成する

## アクセス可能な情報
- Obsidian Vault (README, AGENTS, 04_DataLink など)
- Firestore データ
- Google Drive ファイル（リンク経由）
- GitHub リポジトリ

## 制限事項
- 読み取りは全体可能
- 書き込みは AGENTS.md の書き込みルールに従う
- Firestore 直接更新は不可
- 本番スクリプトは User テスト後に実行

## 推奨作業フロー
1. 要件・仕様を詳しく理解
2. 実装案・パターンを複数提案
3. コード生成
4. テスト・ドキュメント作成
5. Claude に設計検証を依頼（オプション）
6. User が テスト・デプロイを実施
```

### 具体的なプロンプトパターン

#### パターン 1: スクリプト自動化
```
【タスク】Firestore データ同期スクリプト作成

【要件】
- Markdown frontmatter を読み込み
- Firestore に同期
- 差分検出・ログ出力
- dry-run / apply モード

【仕様】
```bash
bash scripts/datalink_to_firestore_apply.sh --dry-run
bash scripts/datalink_to_firestore_apply.sh --apply
```

【成果物】
- Node.js / Python 実装
- エラーハンドリング
- ログ出力
- README

【出力形式】
- `scripts/` に保存
- `00_Inbox` に使い方メモ
```

#### パターン 2: ドキュメント自動生成
```
【タスク】Firestore ドキュメント集計レポート生成

【入力】
- Firestore collection: logs, projects, products

【出力】
- 月次サマリー
- ステータス別集計
- トレンド分析

【スクリプト要件】
- bash / Node.js / Python
- `.env` から認証情報読み込み
- `tmp/` に出力
- GitLens friendly なフォーマット

【成果物】
scripts/generate_monthly_report.sh
```

#### パターン 3: テストコード作成
```
【タスク】新しいスクリプト機能のテスト

【対象スクリプト】
scripts/check_firestore_drift.sh

【テスト項目】
- 正常系テスト
- エラーハンドリング
- エッジケース
- パフォーマンス

【フレームワーク】
bash / Node.js テストフレームワーク

【成果物】
scripts/__tests__/ ディレクトリ
```

#### パターン 4: Code Interpreter で分析
```
【タスク】DataLink ノート数・トレンド分析

【データソース】
- 04_DataLink/ ファイル一覧
- git log（作成日時）

【分析項目】
1. ノート数推移（時系列）
2. タイプ別分布
3. 月別作成ペース
4. 最もアクティブなカテゴリ

【成果物】
- グラフ・チャート
- CSV データ
- 分析レポート（00_Inbox）
```

## コンテキスト提供方法

```bash
# 共通AIコンテキストを生成
bash scripts/generate_ai_context.sh
```

出力ファイル: `tmp/ai_context.md`

**含まれる情報:**
- スクリプト関連ドキュメント
- API 仕様・インターフェース
- 実装済みコード例
- よくある実装パターン

## 使用例

### 例 1: 新機能スクリプト開発
```
タスク: 週次のステータスレポート自動生成

ChatGPT がやること：
1. スクリプト要件を整理
2. Node.js / Python で実装
3. テストコード作成
4. README 作成
5. エラーハンドリング

成果物:
  scripts/generate_weekly_report.sh
  + テスト + ドキュメント

後の流れ:
  1. Claude が設計を検証
  2. User が実行テスト
  3. cron 登録
```

### 例 2: ドキュメント一括生成
```
タスク: 全 DataLink ノートの README 自動生成

ChatGPT がやること：
1. 各ノートの frontmatter 読み込み
2. 自動要約生成
3. リンク自動作成
4. 目次生成
5. MD ファイル出力

成果物:
  自動生成された README.md
  関連性マップ
```

### 例 3: 自動バッチ処理
```
タスク: 毎日深夜に検証スクリプト実行

ChatGPT がやること：
1. cron スクリプト作成
2. ログ集約
3. エラー通知機構
4. GitHub Actions 設定

成果物:
  .github/workflows/daily_check.yml
  scripts/daily_health_check.sh
  エラー通知設定
```

## 設定・接続

### API Connection
- **API key**: `OPENAI_API_KEY` in `.env`
- **Model**: GPT-4o / GPT-4 Turbo
- **Code Interpreter**: ✅ 有効

### プラグイン・統合
- **Code Interpreter**: データ分析、グラフ生成
- **Browse with Bing**: Web 検索（オプション）
- **Custom GPTs**: uto-knowledge 特化 GPT

### コンテキストウィンドウ
- GPT-4o: 128K tokens
- Turbo: 128K tokens
- 推奨: 大規模スクリプトは分割

## Code Interpreter の活用

ChatGPT のCode Interpreter を使用して、リアルタイムでデータ処理・分析可能：

```python
# 例: DataLink ノート数分析
import os
import json
from datetime import datetime

# 04_DataLink/ ファイル読み込み
for root, dirs, files in os.walk('04_DataLink'):
    md_files = [f for f in files if f.endswith('.md')]
    # 統計処理
```

## トラブルシューティング

### Q: コード品質が期待と異なる
A: より詳細な要件・制約条件を提供、レビュー依頼先を明記

### Q: 最新ライブラリ・フレームワーク情報が古い
A: Gemini に最新情報を先に検索させ、結果を ChatGPT に提供

### Q: スクリプト実行でエラー
A: エラーメッセージを完全に提供、環境情報（OS、言語バージョン）を明記

### Q: 設計的な妥当性がわからない
A: Claude に設計検証を依頼

## カスタム GPT 案

ChatGPT Plus で作成推奨:

```
名前: "uto-knowledge Assistant"
説明: uto-knowledge システムの実装・スクリプト自動化

Instructions:
- DataLink 標準に従う
- Markdown frontmatter 形式を理解
- Firestore スキーマを参照
- AGENTS.md の書き込みルールを厳守
- 実装は scripts/ に生成

Knowledge:
- 00_System/architecture/AGENTS.md
- 00_System/vision/
- 04_DataLink/02_POLICY_CARDS/
- スクリプト例
- Firestore スキーマ
```

## フィードバック

ChatGPT との協業で気付いた点：

- [ ] スクリプト品質・自動化の改善
- [ ] プラグイン・ツール提案の有用性
- [ ] Code Interpreter の活用方法
- [ ] 実装パターンの改善

→ `mcp/ai_profiles/feedback/` に記録してください

## 関連リソース

- [OpenAI 公式ドキュメント](https://platform.openai.com/docs)
- [ChatGPT プラグインストア](https://chat.openai.com/gpts)
- `AGENTS.md` — 共通AI運用ガイド
- `task_router.md` — タスク振り分けロジック
