---
name: Setup Guide
description: uto-knowledge 環境セットアップガイド（Mac・Windows対応）
---

# uto-knowledge セットアップガイド

新しいマシンで uto-knowledge 環境を構築するための完全ガイド。

## 📋 前提条件

### 必須

- **Git** 2.27以上
  - [git-scm.com](https://git-scm.com) からダウンロード
  - Windows: Git Bash を含めインストール

### 推奨

- **Node.js** 20.x 以上
  - [nodejs.org](https://nodejs.org)
- **Visual Studio Code**（テキストエディタ）
  - [code.visualstudio.com](https://code.visualstudio.com)
- **Obsidian**（ノート管理）
  - [obsidian.md](https://obsidian.md)

---

## 🚀 セットアップ手順

### **[Mac・Linux]**

#### 1️⃣ リポジトリをクローン

```bash
# ホームディレクトリに移動
cd ~

# リポジトリをクローン
git clone https://github.com/koji0903/uto-knowledge.git
cd uto-knowledge
```

#### 2️⃣ セットアップスクリプト実行

```bash
bash scripts/setup-environment.sh
```

**出力例:**

```
🚀 uto-knowledge Environment Setup

1️⃣  OS Detection
✅ macOS detected

2️⃣  Checking Prerequisites
✅ Git 2.40.0
✅ Node.js v20.10.0

3️⃣  Git Configuration
✅ core.safecrlf disabled
✅ core.autocrlf disabled

4️⃣  Environment File Setup
✅ .env created from .env.mac

5️⃣  Local Secrets Setup
⚠️  .env.local created (fill in your secrets)
   Edit: .env.local

...

✅ Setup Complete!

📋 Next Steps:
1. Edit .env.local with your secrets
2. Load environment: source .env
3. Verify setup: bash scripts/verify-multienv-setup.sh
```

#### 3️⃣ シークレット設定

```bash
# .env.local を編集
nano .env.local
```

**入力項目：**

```
GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
GOOGLE_OAUTH_ACCESS_TOKEN=REPLACE_WITH_GOOGLE_OAUTH_ACCESS_TOKEN
ANTHROPIC_API_KEY=sk-xxxxxxxxxxxx
```

#### 4️⃣ 環境検証

```bash
bash scripts/verify-multienv-setup.sh
```

**正常な出力例：**

```
🔍 Multi-Environment Setup Verification

1️⃣  Git Configuration
✅ core.safecrlf: false
✅ core.autocrlf: false

2️⃣  EditorConfig
✅ .editorconfig exists

...

✅ All checks passed!
```

#### 5️⃣ 最新コード取得

```bash
git pull origin main
```

---

### **[Windows]**

#### 1️⃣ リポジトリをクローン

PowerShell を**管理者として**実行

```powershell
# ホームディレクトリに移動
cd $HOME

# リポジトリをクローン
git clone https://github.com/koji0903/uto-knowledge.git
cd uto-knowledge
```

#### 2️⃣ セットアップスクリプト実行

```powershell
# 実行ポリシーを確認（初回のみ）
Get-ExecutionPolicy -Scope CurrentUser

# RemoteSigned に設定（初回のみ）
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# セットアップ実行
.\scripts\setup-environment.ps1
```

**出力例：**

```
🚀 uto-knowledge Environment Setup

1️⃣  OS Detection
✅ Windows detected

2️⃣  Checking Prerequisites
✅ Git for Windows 2.40.0
✅ Node.js v20.10.0
✅ PowerShell 5.1

...

✅ Setup Complete!
```

#### 3️⃣ シークレット設定

```powershell
# .env.local を編集（メモ帳で開く）
notepad .env.local
```

**入力項目：（Mac と同じ）**

#### 4️⃣ 環境検証

```bash
bash scripts/verify-multienv-setup.sh
```

#### 5️⃣ 最新コード取得

```bash
git pull origin main
```

---

## 📁 フォルダ構成

セットアップ後のフォルダ構成：

```
uto-knowledge/
├── 00_Inbox/                    — AI 下書き・未整理メモ
├── 01_Daily/                    — 日次ログ
├── 02_Project/                  — 実行中プロジェクト
├── 03_Knowledge/                — 横断知識
├── 04_DataLink/                 — Firestore 連携ノート
│   ├── decisions/               — 意思決定ログ
│   ├── logs/                    — 同期ログ
│   ├── producers/
│   ├── products/
│   └── projects/
├── 05_MOC/                      — 全体設計・運用ルール
├── 06_Templates/                — Obsidian テンプレート
├── 99_Archive/                  — 過去資産
├── scripts/                     — 検証・自動化スクリプト
├── .env                         — 環境変数（自動生成）
├── .env.local                   — シークレット（手動作成）
└── .github/workflows/           — GitHub Actions
```

---

## 🛠️ よく使うコマンド

### Git 操作

```bash
# 最新を取得
git pull origin main

# 変更を確認
git status

# コミット（前月の改善案参照）
git add <file>
git commit -m "変更内容"

# プッシュ
git push origin main
```

### 環境確認

```bash
# 環境変数を確認
source .env
echo $GOOGLE_CLOUD_PROJECT

# セットアップ検証
bash scripts/verify-multienv-setup.sh

# ヘルスチェック（品質確認）
bash scripts/generate_health_dashboard.sh
```

### 初回初期化（リセットが必要な場合）

```bash
# 環境をリセット
rm -f .env .env.local
bash scripts/setup-environment.sh
```

---

## ⚙️ 設定ファイル詳細

### `.env.mac` / `.env.windows`

OS 固有のデフォルト設定

```
GOOGLE_CLOUD_PROJECT=uto-os
FIRESTORE_DATABASE_ID=(default)
GOOGLE_DRIVE_ROOT_FOLDER_ID=...
...
```

### `.env.local`

**Git 管理外**の個人用シークレット

```
GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
ANTHROPIC_API_KEY=sk-...
```

### `.editorconfig`

エディタ設定の統一

```
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
```

### `.gitattributes`

クロスプラットフォーム対応

```
* text=auto
*.sh text eol=lf
*.ps1 text eol=crlf
```

---

## 🐛 トラブルシューティング

### Q1: `git clone` でエラー

```
fatal: not a git repository
```

**A:** リポジトリが存在しない可能性

```bash
# GitHub から URL を確認
# https://github.com/koji0903/uto-knowledge.git

# 再度クローン
git clone https://github.com/koji0903/uto-knowledge.git
```

### Q2: PowerShell スクリプトが実行できない（Windows）

```
File cannot be loaded because running scripts is disabled on this system
```

**A:** 実行ポリシーを設定

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Q3: `node_modules` が見つからない

**A:** npm 依存関係をインストール

```bash
npm install
```

### Q4: `.env.local` を忘れて Git に追加した

**A:** Git から削除

```bash
git rm --cached .env.local
echo ".env.local" >> .gitignore
git commit -m "Remove .env.local from git"
```

### Q5: 他のマシンとコンフリクトが多い

**A:** 同期タイミングを改善

1. **朝:** `git pull` で最新を取得
2. **昼:** 作業
3. **夜:** `git push` で成果を反映

詳細は `05_MOC/31_multi_environment_sync.md` を参照。

---

## 📚 次のステップ

セットアップ完了後：

1. **AGENTS.md を読む** — AI 運用ガイド
2. **mcp/ai_profiles/task_router.md で判定** — どの AI を使うか
3. **04_DataLink を確認** — 既存のデータを見る
4. **試しに作業してみる** — 小さな変更から

---

## 📞 サポート

### トラブル時

1. **セットアップ検証を実行**
   ```bash
   bash scripts/verify-multienv-setup.sh
   ```

2. **ヘルスチェックを実行**
   ```bash
   bash scripts/generate_health_dashboard.sh
   ```

3. **Git ログを確認**
   ```bash
   git status
   git log --oneline -5
   ```

### ドキュメント

- `README.md` — プロジェクト概要
- `AGENTS.md` — AI 運用ガイド
- `05_MOC/31_multi_environment_sync.md` — マルチ環境同期
- `05_MOC/08_ai_write_policy.md` — 書き込みルール

---

**セットアップが完了しました！ 🎉**

uto-knowledge へようこそ。
