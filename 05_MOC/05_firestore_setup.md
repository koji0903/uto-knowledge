---
id: moc_firestore_setup
type: moc
tags: [moc, firestore, setup]
created: {{date}}
---

# Firestore Setup

## 目的

Firestore を `04_DataLink` の構造化データ保存先として使うための、最小セットアップ手順をまとめる。

## 追加ファイル

| file | 用途 |
| --- | --- |
| firebase.json | Firebase CLI 用設定 |
| firestore.rules | Firestore セキュリティルール |
| firestore.indexes.json | Firestore インデックス定義 |
| .firebaserc.example | Firebase project alias の雛形 |

## セキュリティ方針

初期状態の `firestore.rules` は全 client read / write を拒否する。

```text
allow read, write: if false;
```

MCP や管理スクリプトから利用する場合は、クライアントルールではなく Google Cloud IAM とサービスアカウントで制御する。

## 初期設定

`.firebaserc.example` を `.firebaserc` にコピーし、Firebase project id を設定する。

Mac / Linux:

```bash
cp .firebaserc.example .firebaserc
```

Windows PowerShell:

```powershell
Copy-Item .firebaserc.example .firebaserc
```

## Firestore collection

| collection | 対応フォルダ |
| --- | --- |
| producers | 04_DataLink/producers |
| products | 04_DataLink/products |
| projects | 04_DataLink/projects |
| logs | 04_DataLink/logs |

## デプロイ

Firestore rules / indexes を反映する場合:

```bash
firebase deploy --only firestore
```

## 注意

- `.firebaserc` は環境依存のため Git 管理しない
- サービスアカウント JSON は Git 管理しない
- 本番ルールを開ける前に、利用するアプリや MCP の認証方式を決める
