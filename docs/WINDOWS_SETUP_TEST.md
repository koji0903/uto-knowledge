---
title: Windows Setup Test Guide
description: Windows マシンでの PowerShell セットアップテスト用ガイド
---

# Windows セットアップ テストガイド

このガイドは、Windows マシンで PowerShell 版セットアップスクリプトを実行・テストするための手順です。

---

## 事前準備（必須）

### 1. 前提条件確認

Windows マシンで以下をチェック：

- [ ] **Windows 10 / 11** が実行中
- [ ] **PowerShell 5.0 以上** がインストール
  ```powershell
  $PSVersionTable.PSVersion
  ```
  出力例: `Major Minor Build Revision` の Major が 5 以上

- [ ] **Git** がインストール
  ```powershell
  git --version
  ```
  出力例: `git version 2.40.0.windows.1`

- [ ] **Node.js** がインストール（推奨）
  ```powershell
  node --version
  ```
  出力例: `v20.10.0`

### 2. 実行ポリシーの確認

PowerShell スクリプト実行ポリシーを確認：

```powershell
Get-ExecutionPolicy -Scope CurrentUser
```

**出力例:**
- `RemoteSigned` -> OK（スクリプト実行可能）
- `Unrestricted` -> OK
- `Restricted` -> NG（以下で修正）

**NG の場合の修正:**

```powershell
# 実行ポリシーを設定
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 確認
Get-ExecutionPolicy -Scope CurrentUser
```

### 3. リポジトリをクローン

```powershell
# ホームディレクトリに移動
cd $HOME

# リポジトリをクローン
git clone https://github.com/koji0903/uto-knowledge.git
cd uto-knowledge

# 現在のディレクトリ確認
pwd
# 出力: C:\Users\<ユーザー名>\uto-knowledge
```

---

## セットアップ実行

### Step 1: PowerShell を管理者として起動

1. **Windows キー** を押す
2. **PowerShell** と入力
3. **Windows PowerShell** を右クリック
4. **管理者として実行** を選択

または、コマンドプロンプトから：

```cmd
powershell -Command "Start-Process powershell -Verb RunAs"
```

### Step 2: リポジトリディレクトリに移動

```powershell
cd $HOME\uto-knowledge
pwd  # ディレクトリ確認
```

### Step 3: セットアップスクリプト実行

```powershell
# スクリプト実行
.\scripts\setup-environment.ps1
```

**期待される出力:**

```
uto-knowledge Environment Setup

1. OS Detection
OK Windows detected

2. Checking Prerequisites
OK Git for Windows 2.40.0
OK Node.js v20.10.0
OK PowerShell 5

3. Git Configuration
OK core.safecrlf set to warn
OK core.autocrlf disabled

4. Environment File Setup
OK .env created from .env.windows

5. Local Secrets Setup
WARN .env.local created (fill in your secrets)
   Edit: C:\Users\<user>\uto-knowledge\.env.local

...

Setup Complete
```

### Step 4: シークレット設定

```powershell
# メモ帳で .env.local を開く
notepad .env.local
```

**編集内容:**

```
GOOGLE_APPLICATION_CREDENTIALS=C:\path\to\serviceAccount.json
GOOGLE_OAUTH_ACCESS_TOKEN=REPLACE_WITH_GOOGLE_OAUTH_ACCESS_TOKEN
ANTHROPIC_API_KEY=sk-xxxxxxxxxxxx
```

ファイルを保存して閉じます。

### Step 5: 環境検証

```powershell
# 検証スクリプト実行
bash scripts/verify-multienv-setup.sh
```

**期待される出力:**

```
Multi-Environment Setup Verification

1. Git Configuration
OK core.safecrlf: false
OK core.autocrlf: false

2. EditorConfig
OK .editorconfig exists

...

Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issues: 0
Warnings: 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All checks passed
```

### Step 6: 最新コード取得

```powershell
git pull origin main
```

**期待される出力:**

```
Already up to date.
```

または新しいコミットがあれば取得されます。

---

## テストチェックリスト

セットアップ後、以下をテストしてください：

### テスト 1: Git 設定確認

```powershell
git config --list | findstr "core.safecrlf\|core.autocrlf"
```

**期待される出力:**

```
core.safecrlf=warn
core.autocrlf=false
```

### テスト 2: ファイルが正しく作成されているか

```powershell
# .env ファイルが存在するか
Test-Path .\.env
# 出力: True

# .env.local が存在するか
Test-Path .\.env.local
# 出力: True
```

### テスト 3: 改行コード確認

```powershell
# ファイルの改行コードを確認（LF か CRLF か）
Get-Content .\05_MOC\29_decision_log_system.md -Encoding Byte | Select-Object -First 100 | ForEach-Object { [char]$_ }
```

**期待される出力:**
```
(LF で統一されていることを確認)
```

### テスト 4: PowerShell スクリプト実行テスト

```powershell
# 簡単な PowerShell スクリプトが実行できるか
.\scripts\setup-environment.ps1 -Help
```

---

## トラブルシューティング

### エラー 1: PowerShell スクリプトが実行できない

```
File cannot be loaded because running scripts is disabled on this system
```

**解決:**

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### エラー 2: Git がインストールされていない

```
NG Git is not installed
```

**解決:**

1. [Git for Windows](https://git-scm.com/download/win) をダウンロード
2. インストーラを実行（デフォルト設定で OK）
3. PowerShell を再起動
4. セットアップスクリプトを再実行

### エラー 3: Node.js がインストールされていない

```
WARN Node.js is not installed (optional but recommended)
```

**対応:**
- オプションなので続行可能
- 必要なら [nodejs.org](https://nodejs.org) からインストール

### エラー 4: パスが見つからない

```
Path 'C:\Users\...\uto-knowledge\.env.local' does not exist
```

**原因:** ホームディレクトリが異なる可能性

**確認:**

```powershell
pwd
# 出力が C:\Users\<user>\uto-knowledge になっているか確認
```

### エラー 5: シークレットファイルのパスが無効

```
File not found: C:\path\to\serviceAccount.json
```

**解決:**
1. `.env.local` を開く
2. `GOOGLE_APPLICATION_CREDENTIALS` を正しいパスに修正
3. ファイルが存在するか確認

---

## テスト結果レポート

セットアップが完了したら、以下の情報を確認してください：

```
テスト環境:
  - OS: Windows 10/11
  - PowerShell Version: 5.0+
  - Git Version: 2.27+
  - Node.js Version: (オプション)

セットアップ結果:
  - Git 設定: OK / NG
  - .env ファイル: 作成された
  - .env.local ファイル: 作成された
  - 環境検証: パス / 失敗
  
問題:
  - (あれば記録)
```

---

## セットアップ後の次のステップ

### 1. 動作確認

```powershell
# ヘルスチェック実行
bash scripts/generate_health_dashboard.sh
```

### 2. 簡単なコミット試行

```powershell
# ステータス確認
git status

# テスト用 branch を作成
git switch -c test/windows-setup

# 新しいファイルを追加
echo "test" > test_windows.txt

# ステージング
git add test_windows.txt

# コミット
git commit -m "Test commit from Windows"

# テスト branch にプッシュ
git push origin test/windows-setup

# ローカルで削除
git rm test_windows.txt
git commit -m "Remove test file"
git push origin test/windows-setup

# main に戻る
git switch main
```

### 3. Mac との同期確認

Mac マシンで以下を実行：

```bash
git pull origin main
# Windows からのコミットが反映されているか確認
```

---

## テスト結果の報告

セットアップテストが完了したら、以下の情報を共有してください：

1. **テスト環境情報**
   - OS バージョン
   - PowerShell バージョン
   - Git バージョン

2. **セットアップ結果**
   - すべてのステップが完了したか
   - エラーが発生したか（あれば詳細）

3. **動作確認**
   - `verify-multienv-setup.sh` の結果
   - Git コマンドが動作するか

4. **Mac との同期**
   - Windows からのコミットが Mac に反映されたか

---

## 完了チェックリスト

セットアップテストが完了したら、以下をすべてチェック：

- [ ] PowerShell 実行ポリシーが設定された
- [ ] Git がインストールされている
- [ ] リポジトリがクローンされた
- [ ] `setup-environment.ps1` が実行できた
- [ ] `.env` ファイルが作成された
- [ ] `.env.local` にシークレット情報が入力された
- [ ] `verify-multienv-setup.sh` で検証が成功
- [ ] `git status` でファイルが見える
- [ ] サンプルコミットができた
- [ ] Mac に同期されることを確認

**すべてチェックできれば、Windows セットアップは完成です。**

---

## よくある質問

**Q: エディタで .env.local を編集する際、文字化けが発生する**

A: UTF-8 で保存してください。メモ帳以外の VS Code を推奨：

```powershell
code .env.local
```

**Q: PowerShell スクリプトが遅い**

A: 正常な動作です。初回は依存関係のチェックが走るため 30 秒～1 分かかる場合があります。

**Q: WSL2 で bash スクリプトを実行したい**

A: 以下で実行可能：

```powershell
wsl bash scripts/verify-multienv-setup.sh
```

**Q: Git Bash で実行したい**

A: Git Bash を起動：

```powershell
"C:\Program Files\Git\bin\bash.exe" -i -l
cd ~/uto-knowledge
bash scripts/setup-environment.sh
```
