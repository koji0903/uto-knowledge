---
id: moc_ai_write_policy
type: policy
tags: [moc, ai, policy]
created: {{date}}
---

# AI Write Policy

## 目的

複数の AI が同じ Vault、Firestore、Google Drive を扱うときに、重要データを壊さず安全に追記・更新できるようにする。

## 基本方針

- AI の初期権限は読み取り中心にする
- 書き込み先は限定する
- 変更は Git 履歴に残す
- Firestore と Google Drive の変更はログを残す
- 不確実な変更は `00_Inbox` に下書きとして置く

## 書き込み許可フォルダ

| folder | 用途 | write policy |
| --- | --- | --- |
| 00_Inbox | AI の下書き、未整理メモ | allowed |
| 01_Daily | 日次ログ追記 | allowed with date |
| 04_DataLink/logs | 操作ログ、同期ログ、意思決定ログ | allowed |
| 02_Project | 既存プロジェクトの追記 | review required |
| 03_Knowledge | 横断知識の追加 | review required |
| 05_MOC | 構造・運用ルール | review required |
| 06_Templates | テンプレート | review required |
| 99_Archive | 退避先 | manual only |

## 禁止事項

- `.env` を作成して Git に追加する
- サービスアカウント JSON を Git に追加する
- `.obsidian/workspace.json` や表示設定を共有ファイルとして扱う
- Firestore の既存 document を根拠なく上書きする
- Google Drive のファイルを確認なしで削除する

## AI 書き込みフロー

1. 既存ルールと関連ノートを読む
2. 変更先を決める
3. 不確実な内容は `00_Inbox` に置く
4. 構造化データ変更は `04_DataLink/logs` に記録する
5. Git diff を確認する
6. commit message に変更意図を含める

## Firestore 書き込みルール

- 最初は読み取り専用で運用する
- 書き込みを解放する場合は collection 単位で許可する
- document id は Markdown frontmatter の `id` と一致させる
- update 前に現在値を確認する
- 自動同期は dry-run から始める

## Google Drive 書き込みルール

- ファイル名に関連 id を含める
- 削除ではなく archive / move を優先する
- Drive URL または folder id を Markdown と Firestore に記録する
- 共有範囲は必要最小限にする

## ログ必須ケース

- Firestore document を作成・更新した
- Google Drive にファイルを追加・移動した
- AI が複数ファイルを変更した
- MCP 設定を変更した
- ルールやテンプレートを変更した
