---
id: moc_operational_entrypoint
type: moc
tags: [moc, operations, ai]
created: 2026-05-03
---

# Operational Entrypoint

## 目的

複数 AI がこの環境を使うときの入口を定義する。

## 入口ファイル

| file | 用途 |
| --- | --- |
| README.md | 人間向け概要 |
| AGENTS.md | AI エージェント向け運用ガイド |
| scripts/verify_all.sh | Mac / Linux 向け総合検証 |
| scripts/verify_all.ps1 | Windows PowerShell 向け総合検証 |

## 推奨開始手順

1. `README.md` を読む
2. `AGENTS.md` を読む
3. `bash scripts/check_environment.sh` を実行する
4. 外部連携が必要なら `bash scripts/verify_all.sh` を実行する

## 運用ステータス

| system | status |
| --- | --- |
| Obsidian Vault | ready |
| GitHub | ready |
| Firestore | sample applied |
| Google Drive | structure created |
| MCP | scaffold ready |

## 次の候補

- MCP クライアントごとの実設定
- sample ではない本番 DataLink ノート作成
- Drive への sample asset アップロード
- Firestore / Drive 同期の差分検出
