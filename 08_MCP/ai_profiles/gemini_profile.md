---
id: profile_gemini
type: ai_profile
ai_name: Gemini
organization: Google
created: 2026-05-03
---

# Gemini AI Profile

## 概要

Google による大規模言語モデル。検索・最新情報、実行速度、マルチモーダル処理が強み。

## 基本情報

| 項目 | 内容 |
|------|------|
| **組織** | Google |
| **最新モデル** | Gemini 2.0 Flash / Pro |
| **特徴** | Web検索統合、マルチモーダル、高速応答 |
| **推奨用途** | 情報収集、外部データ連携、リアルタイム更新 |

## 強み

### 1. Web 検索・最新情報
- リアルタイムな情報検索が可能
- 市場トレンド、技術情報の最新性が高い
- 外部リソースの統合参照

### 2. 実行速度
- Claude・ChatGPT より応答が速い
- 単純タスクではレイテンシが低い
- リアルタイム応答が必要な場合に有利

### 3. マルチモーダル処理
- 画像解析（スクリーンショット、図表）
- PDFs・画像からのテキスト抽出
- 複数形式のメディア処理

### 4. API 統合
- Google Workspace（Docs、Sheets、Drive）との親和性が高い
- Google Cloud Platform サービスとの連携容易
- OAuth 認証が簡単

## 弱み・制限

| 弱み | 対策 |
|------|------|
| **深い推論・長い思考チェーン** | Claude に複雑な分析を依頼 |
| **複雑な意思決定支援** | Claude のほうが詳細な検討可能 |
| **セキュリティ専門知識** | Claude に安全性評価を依頼 |
| **エッジケース対応** | Claude で補完 |

## 推奨タスク

### ✅ Gemini が最適

```
情報収集・リサーチ
  ├─ 市場・業界動向調査
  ├─ 競合製品調査
  ├─ 技術トレンド把握
  └─ 外部データ連携

リアルタイム更新
  ├─ ニュース監視
  ├─ API 仕様変更確認
  ├─ セキュリティ脅威情報
  └─ プロダクトロードマップ

ドキュメント処理
  ├─ PDF から情報抽出
  ├─ 画像からテキスト抽出
  ├─ スクリーンショット解析
  └─ 複数形式ファイルの統合処理

Google Workspace 連携
  ├─ Google Drive ファイル検索
  ├─ Google Docs 内容統合
  ├─ スプレッドシート分析
  └─ Gmail 添付ファイル処理
```

### 🔄 複数 AI との組み合わせ

| シナリオ | リード | サブ | 用途 |
|---------|------|-----|------|
| 市場分析 | Gemini | Claude | 情報収集+深い分析 |
| API仕様更新対応 | Gemini | ChatGPT | 最新情報+実装指針 |
| 競合製品比較 | Gemini | Claude | リサーチ+戦略分析 |
| ドキュメント統合 | Gemini | Claude | 抽出+分析 |

## Prompt Guide

### セットアップ（最初に提供）

```
あなたは uto-knowledge の情報収集・検索担当 AI です。

## 役割
- 外部情報を素早く検索する
- リアルタイムな最新情報を提供する
- マルチモーダルなドキュメント処理を行う
- Google Workspace との連携を担当する

## アクセス可能な情報
- Obsidian Vault (README, AGENTS, 04_DataLink など)
- Firestore データ
- Google Drive ファイル（直接アクセス可能）
- Web（Google検索、外部リソース）

## 制限事項
- 読み取りは全体可能
- 書き込みは AI運用ガイド.md の書き込みルールに従う
- Firestore 直接更新は不可

## 推奨作業フロー
1. 検索キーワードを整理
2. Web 検索で最新情報を取得
3. Google Drive で関連ファイルを検索
4. 外部情報と uto-knowledge のデータを統合
5. 調査結果を 00_Inbox に記録
6. 重要情報は Claude に深掘り分析を依頼
```

### 具体的なプロンプトパターン

#### パターン 1: 市場・技術トレンド調査
```
【タスク】生産者 X の業界トレンド調査

【背景】
生産者情報: [リンク]
調査期間: 直近 6 ヶ月

【調査項目】
1. 業界の最新動向
2. 技術トレンド
3. 競合企業の動き
4. 規制変化
5. 市場予測

【方法】
- Google 検索で最新情報を取得
- ニュースサイト、業界レポートを参照
- 公式プレスリリースを確認

【出力形式】
00_Inbox に調査レポート作成
→ 後で Claude が深く分析
```

#### パターン 2: Google Drive ファイル処理
```
【タスク】Google Drive の契約書から条件を抽出

【ファイル】
folder_id: [ID]

【抽出項目】
- 契約対象
- 期限
- 金額
- 主要条件
- リスク要因

【出力】
04_DataLink に構造化データとして記録
```

#### パターン 3: API/ツール最新情報確認
```
【タスク】Firebase Firestore の最新仕様確認

【確認項目】
1. 最新バージョン
2. 新機能
3. 廃止予定機能
4. パフォーマンス改善
5. セキュリティアップデート

【出力】
00_Inbox にまとめる
→ Claude が実装への影響を分析
```

#### パターン 4: スクリーンショット解析
```
【タスク】ウェブサイトのスクリーンショット分析

【ファイル】
screenshot.png

【分析項目】
- ページレイアウト
- 主要コンテンツ
- CTA ボタン位置
- ユーザー体験上の課題

【出力】
00_Inbox に分析結果記録
```

## コンテキスト提供方法

```bash
# 共通AIコンテキストを生成
bash scripts/generate_ai_context.sh
```

出力ファイル: `tmp/ai_context.md`

**含まれる情報:**
- DataLink（最新情報重視）
- 外部リンク集
- API ドキュメントリンク
- Google Drive フォルダ構成
- 検索用キーワード

## 使用例

### 例 1: 業界動向調査
```
タスク: 生産者 X の業界動向を把握

Gemini がやること：
1. Web 検索で最新ニュース取得
2. 業界レポート検索
3. 競合企業の情報収集
4. 調査結果をまとめる

結果: 00_Inbox に調査レポート
  ↓
Claude が分析：
  - 戦略的影響を分析
  - 対応方策を検討
```

### 例 2: ドキュメント一括処理
```
タスク: 複数の PDF から重要情報を抽出

Gemini がやること：
1. Google Drive から関連 PDF 検索
2. 各ファイルからテキスト抽出
3. 重要ポイント抽出
4. 構造化データに変換

結果: 04_DataLink に記録
```

### 例 3: Google Sheets 連携
```
タスク: スプレッドシートのデータ分析

Gemini がやること：
1. Google Drive のスプレッドシート検索
2. データ読み取り・整理
3. トレンド分析
4. グラフ・ビジュアル生成

結果: スプレッドシート更新 + 分析レポート
```

## 設定・接続

### MCP Connection
- **Protocol**: Google MCP
- **Google Drive**: ✅ Connected (read/write)
- **Filesystem**: ✅ Connected
- **Firestore**: ✅ Read-only

### 認証
- Google アカウント: `koji0903@gmail.com`
- 権限: `uto-knowledge-assets` フォルダ以下
- API key: `.env` の `GEMINI_API_KEY`

### API 制限
- リクエスト数: Google API 制限に準拠
- 応答速度: 高速（キャッシュ活用）
- マルチモーダル: ✅ 対応

## Google Workspace 連携

### Google Drive
- Root folder: `uto-knowledge-assets`
- Folder IDs: `.env` に記録
- Gemini は直接アクセス可能

### Google Docs
- 検索・読み取り: ✅ 可能
- 内容統合: ✅ 可能
- 直接編集: 権限設定後に可能

### Google Sheets
- データ読み取り: ✅ 可能
- 分析・グラフ生成: ✅ 可能
- 自動更新: 権限設定後に可能

## トラブルシューティング

### Q: Google Drive の検索がうまくいかない
A: フォルダ ID を `.env` に正確に設定、権限を確認

### Q: PDF 抽出の精度が低い
A: 画像系 PDF は OCR が必要、Claude に依頼も可能

### Q: 検索結果が古い
A: Gemini のキャッシュをクリア、リアルタイムオプション有効化

### Q: 複雑な分析が必要
A: Claude に結果を渡して深掘り分析を依頼

## フィードバック

Gemini との協業で気付いた点：

- [ ] 検索精度・キーワードの改善
- [ ] Google Workspace 連携の効率化
- [ ] マルチモーダル処理の活用法
- [ ] 外部データ統合の改善

→ `mcp/ai_profiles/feedback/` に記録してください

## 関連リソース

- [Google Gemini 公式](https://gemini.google.com)
- [Google Cloud MCP](https://cloud.google.com/docs/mcp)
- `AI運用ガイド.md` — 共通AI運用ガイド
- `task_router.md` — タスク振り分けロジック
