---
id: moc_multi_environment_sync
type: moc
tags: [moc, multienv, sync]
created: 2026-05-03
---

# Multi-Environment Synchronization

複数の環境（Mac、Windows、Linux）から同時に uto-knowledge を利用する際の同期・競合対応。

## 目的

- **クロスプラットフォーム互換性** を確保
- **Git コンフリクト** を最小化
- **Firestore での競合** を検出・解決
- **環境間の整合性** を保つ
- **同時アクセス** を安全に管理

## アーキテクチャ

```
Mac
  ↓ git push/pull
  ↓ Obsidian edit
  ↓ Firestore sync
  
GitHub (central)  ←← Firestore ←→ Google Drive

  ↑ git push/pull
  ↑ Obsidian edit
  ↑ Firestore sync
  
Windows
```

### 同期フロー

```
Local Edit (Mac/Windows)
  ↓
Git Add / Commit
  ↓
Git Push → GitHub
  ↓
GitHub Actions → Health Check
  ↓
Firestore Sync (if enabled)
  ↓
Git Pull (other environments)
  ↓
Sync Log 記録
```

## ファイル整合性の保証

### Git 改行コード統一

```
.gitattributes で自動変換
  ├─ *.md, *.json, *.sh  → LF（Unix）
  ├─ *.ps1              → CRLF（Windows）
  └─ .env ファイル      → LF
```

**効果:**
- Windows で `.sh` を編集 → 自動的に LF に変換
- Mac で `.ps1` を編集 → CRLF に変換
- Git diff が汚れない

### Editor Config 統一

```
.editorconfig で設定統一
  ├─ Charset: UTF-8
  ├─ Indent: 2 spaces
  ├─ Line ending: LF（PS1 を除く）
  └─ Trim trailing whitespace
```

**サポートエディタ:**
- VS Code
- Sublime Text
- JetBrains IDE
- vim
- Obsidian（プラグインで対応）

## 環境別設定管理

### .env ファイルの階層

```
.env.mac                ← Mac/Linux 用デフォルト
.env.windows            ← Windows 用デフォルト
.env.local              ← 個別のシークレット（Git 管理外）
.env                    ← 現在有効な設定（各環境で異なる）
```

### セットアップフロー

**Mac:**
```bash
bash scripts/setup-environment.sh
→ .env.mac を .env にコピー
→ .env.local を作成（秘密情報用）
```

**Windows:**
```powershell
.\scripts\setup-environment.ps1
→ .env.windows を .env にコピー
→ .env.local を作成（秘密情報用）
```

## Git コンフリクト最小化

### 競合が起きやすいファイル

```
🔴 High Risk:
  - Obsidian metadata (.obsidian/*)
  - Firestore ID の管理ファイル
  - 複数環境からの同時編集

🟡 Medium Risk:
  - 複数の DataLink ノート同時編集
  - Decision log の並列作成

🟢 Low Risk:
  - 異なるファイルの編集
  - 時間差がある編集
```

### 競合回避ルール

```
Rule 1: 大きな変更は事前通知
  ├─ 複数ファイル同時編集は決定ログに記録
  └─ 他環境に事前周知

Rule 2: 小さなコミットを頻繁に
  ├─ 1 ファイル 1 コミット推奨
  └─ 1 変更を複数ファイルにまたがらせない

Rule 3: 作業前に git pull
  ├─ リモートの最新を取得
  └─ ローカルとの差分を確認

Rule 4: 作業後は即座に git push
  ├─ コンフリクト期間を短くする
  └─ 他の環境への影響を最小化
```

## Git コンフリクト対応

### コンフリクト検出

```
Git merge conflict が発生
  ↓
mcp/ai_profiles/task_router.md で判定
  ↓
Claude: 複雑な競合分析
Gemini: 時系列で何が起きたか確認
ChatGPT: マージ方法を提示
```

### 解決パターン

| パターン | 原因 | 解決方法 |
|---------|------|--------|
| **Metadata conflict** | Obsidian の メタデータ衝突 | 新しい方を採用（git checkout --theirs） |
| **Content conflict** | 同じ行を両方で編集 | マージして内容確認 |
| **ID conflict** | DataLink の id 重複 | Decision Log で ID を再割り当て |

## Firestore での競合対応

### 競合シナリオ

```
Mac: Firestore に "status: active" を書き込み
 ↓（同時）
Windows: Firestore に "status: archived" を書き込み
 ↓
Firestore: どちらが正しいのか？（最後の書き込みが勝つ）
```

### 予防策

```
1. 小まめな同期
   └─ health check で毎日 dry-run 実行

2. Firestore ロック機構（将来実装）
   ├─ 編集中のドキュメントを Lock
   └─ 他環境からのアクセスを検出

3. Version 管理（Firestore field）
   ├─ updated_at で最新性を判定
   └─ タイムスタンプで競合解決
```

## 環境間通信・同期

### 同期のタイミング

```
リアルタイム同期（不可）
  ├─ 複数環境からの同時書き込み
  └─ ネットワーク遅延の懸念

朝（推奨）
  ├─ 各環境が起動時に git pull
  ├─ 前日の変更を取得
  └─ コンフリクト確認

夜（推奨）
  ├─ 作業終了時に git push
  ├─ 1日の成果を反映
  └─ 翌日に向け統合

自動（GitHub Actions）
  └─ Health check で毎日 01:00 UTC に検証
```

### 同期ログ

```
Firestore に変更を同期する際は必ずログを残す

例:
04_DataLink/logs/sync_log_20260503_001.md
  ├─ 実行環境（Mac / Windows）
  ├─ 変更内容
  ├─ Firestore 結果
  ├─ コンフリクト有無
  └─ 次アクション
```

## トラブルシューティング

### Q1: Windows で bash スクリプトが動かない

**A:** PowerShell 版を使用

```powershell
# Windows では .ps1 を使用
.\scripts\generate_health_dashboard.ps1

# または WSL 2 で bash を実行
wsl bash scripts/generate_health_dashboard.sh
```

### Q2: 改行コードが混在している

**A:** `.gitattributes` が正しく設定されているか確認

```bash
# 確認
git config core.autocrlf
git config core.safecrlf

# リセット
git rm --cached -r .
git reset --hard HEAD
```

### Q3: Firestore と Markdown が乖離している

**A:** Health check で検出、決定ログで対応

```bash
bash scripts/generate_health_dashboard.sh
# → tmp/drift_report.json を確認
# → 04_DataLink/decisions に決定ログ作成
# → 手動で修正
```

### Q4: コンフリクトが頻発する

**A:** 同期タイミングを改善

```
現在: 不定期
改善: 朝 8 時に pull, 夜 18 時に push

で予定を組む
```

## 環境チェックリスト

### セットアップ時（1 回目）

- [ ] OS を確認（Mac / Windows / Linux）
- [ ] Git をインストール
- [ ] Node.js をインストール（オプション）
- [ ] セットアップスクリプト実行
  - Mac: `bash scripts/setup-environment.sh`
  - Windows: `.\scripts\setup-environment.ps1`
- [ ] `.env.local` に秘密情報を入力
- [ ] `git pull` で最新を取得
- [ ] Health check 実行

### 毎日の開始時

- [ ] `git pull` で最新を取得
- [ ] `.env.local` のシークレット確認
- [ ] Health check 実行（異常がないか）
- [ ] 作業開始

### 毎日の終了時

- [ ] 変更内容を確認（`git status`）
- [ ] コミット（`git commit`）
- [ ] プッシュ（`git push`）
- [ ] Sync log 作成（大きな変更の場合）

## 関連ドキュメント

- `SETUP_GUIDE.md` — 環境セットアップ詳細
- `05_MOC/29_decision_log_system.md` — 意思決定ログ
- `05_MOC/30_health_check_system.md` — ヘルスチェック
- `AGENTS.md` — AI 運用ガイド
