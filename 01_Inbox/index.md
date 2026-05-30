---
id: inbox_index
type: moc
title: "01_Inbox - 未整理メモ受信箱"
created: 2026-05-31
status: active
tags: [moc, meta, governance, inbox]
---

> ⬅ [[ホーム|🏠 ホーム]]

# 📥 01_Inbox — 未整理メモ受信箱

外部入力（ChatGPT会話、Web記事、議会傍聴メモ等）を**一時的に**置く場所。
ここに長く残してはいけません。**週次で空にする**運用です。

---

## 🎯 役割

- 思いついたこと、外部からコピーした断片を即座に保存
- 「どこに置くか」を考えずに記録だけする
- 後でゆっくり分類・統合する

> Inbox は GTD (Getting Things Done) のキャッシュ層。**処理されないInboxは負債** になります。

---

## 📋 ノートのライフサイクル

```
[受信] → 01_Inbox/ に作成
   │
   │ (週次・最大1週間以内)
   ▼
[トリアージ] → どこに行くか判断
   │
   ├─→ 削除（不要だった）
   ├─→ civic/         (市政・議員活動関連)
   ├─→ 00_System/     (理論・戦略の補強)
   ├─→ 03_Knowledge/  (ナレッジ追加)
   ├─→ 04_DataLink/   (議会・政策の実データ)
   ├─→ 02_Agriculture/ (海苔DSS・農業)
   └─→ tmp/           (一時的な調査結果のみ)
   │
   ▼
[整理済み] → 該当フォルダに移動・wikilinks張り直し
```

---

## ✍️ 命名規則

```
{YYYY-MM-DD}_{source}_{topic}.md
```

| 例 | 用途 |
|----|------|
| `2026-05-31_chatgpt_population-strategy.md` | ChatGPT会話から |
| `2026-05-31_web_yomiuri-fiscal-article.md` | Web記事クリッピング |
| `2026-05-31_idea_assembly-q-draft.md` | 自分の着想 |
| `2026-05-31_assembly_field-note.md` | 議会傍聴メモ |

---

## 🚦 トリアージのルール

ノートを開いたら、**3分以内に次のいずれかを決定**してください：

1. **🗑 削除** — 重複・不要な場合
2. **📂 移動** — 行き先が明確（フォルダ名で迷わない）
3. **🏷 タグ付け＋移動** — 検索用タグを付けて適切な場所へ
4. **⏳ 保留** — 1週間以内に再検討（frontmatterに `review_by: YYYY-MM-DD` を入れる）

保留が2週間を超えたら **削除を強く検討** してください（その情報は不要だった可能性が高い）。

---

## 🤖 自動化（将来）

- `scripts/triage_inbox.mjs`（未実装）: 7日以上滞留するノートを検出
- ChatGPT会話の自動分類: `scripts/batch_migrate_chatgpt_inbox.mjs` を参照

---

## 📝 frontmatter テンプレート

新規Inboxノートに推奨：

```yaml
---
id: inbox_{slug}
type: inbox
created: 2026-05-31
source: chatgpt | web | manual | assembly
status: status/draft
review_by: 2026-06-07
tags: [inbox, status/draft]
---
```

---

## 📅 最後のトリアージ

| 日付 | 件数 | 担当 |
|------|------|------|
| 2026-05-31 | (初期) | (システム整備) |

---

> 💡 **Inboxが空であることが理想です。** 1件残っているたびに小さな認知負荷を生みます。
