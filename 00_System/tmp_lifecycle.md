---
id: tmp_lifecycle
type: guide
title: "tmp/ ライフサイクル運用ルール"
created: 2026-05-31
status: active
tags: [meta, governance, ephemeral, guide]
---

> ⬅ [[ホーム|🏠 ホーム]]

# 🧪 tmp/ ライフサイクル運用ルール

> ℹ️ `tmp/` 自体は `.gitignore` 対象。このドキュメントは `tmp/` の運用ルールを記述するもので、`00_System/` 配下に格納されています。

スクリプトの出力、調査の中間結果、デバッグ用のダンプを置く場所。
**ナレッジではありません**。再生成可能なものだけ。

---

## ⚠️ 重要な制約

| ルール | 詳細 |
|--------|------|
| **保存期間** | 最大30日。月次でクリーンアップ |
| **Wikilinks対象外** | tmp/ 内のファイルへ wikilinks を張ってはいけない |
| **Firestore同期対象外** | DataLink検証スクリプトは tmp/ をスキャンしない |
| **gitignoreの対象候補** | 機密や巨大ファイルは `.gitignore` 追加を検討 |

---

## 📂 想定される置き物

| 種類 | 例 |
|------|------|
| **検証レポート** | `datalink_validation_report.json`, `policy_card_report.md` |
| **運用ブリーフ** | `operations_brief.md`（`scripts/maintenance_check.sh` 出力） |
| **データダンプ** | `firestore_dump_{date}.json`, `drive_structure_dump.json` |
| **デバッグ出力** | `debug_*.log` |

---

## 🚮 クリーンアップ運用

### 月次（毎月1日）

```bash
# 30日以上経過したファイルを一覧
find tmp/ -type f -mtime +30 -print

# 確認後に削除
find tmp/ -type f -mtime +30 -delete
```

### 即時削除すべきもの

- 大きなバイナリ（>10MB）
- 機密情報を含むダンプ
- 過去のレポートで現在は不要なもの

---

## 🚫 ここに置いてはいけないもの

| NG例 | 理由 | 正しい場所 |
|------|------|----------|
| 議会質問の下書き | ナレッジである | `04_DataLink/01_ASSEMBLY/questions/` |
| ChatGPT会話の保存 | 整理前のメモ | `01_Inbox/` |
| 概念ノート | 永続的なナレッジ | `civic/concepts/` または `03_Knowledge/` |
| プロジェクト計画 | プロジェクト固有 | `02_Agriculture/.../` または `projects/` |

---

## 📅 最後のクリーンアップ

| 日付 | 削除数 | 残存数 |
|------|--------|--------|
| 2026-05-31 | (初期) | 1 (`datalink_validation_report.json`) |

---

> 💡 **`tmp/` を信頼できないようにすることで、本当のナレッジは然るべき場所に集まります。**
