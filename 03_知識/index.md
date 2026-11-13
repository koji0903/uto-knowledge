---
id: knowledge_overview
type: guide
title: "03_Knowledge - ナレッジベース全体ガイド"
created: 2026-05-14
updated: 2026-05-14
status: active
tags: [ナレッジ, ガイド, index, overview]
---

> ⬅ [[ホーム|🏠 ホーム]]

# 03_Knowledge - ナレッジベース全体ガイド 📖

「宇土OS」を理解・学習するための**統合ナレッジベース**です。

---

## 🎯 このセクションの役割

**00_System** には「理論・仕様」が、**04_DataLink** には「実行・実績」が格納されます。  
**03_Knowledge** は、この2つを**「理解しやすく、検索しやすく」キュレーション**するレイヤです。

```
00_System/vision/          ← マスター理論文書（40ファイル）
         ↓
         「本当に必要な情報だけ」を見やすくまとめ
         ↓
03_Knowledge/business, tech, general/  ← 学習用インデックス
         ↓
         実際に実装・実行している情報は
         ↓
04_DataLink/            ← プロジェクト管理・実績
```

---

## 🗂️ 3つの分野と使い方

### **1️⃣ general/ - 制度・基礎理解を学びたい人向け**

👉 [[./general/index|📚 general/index]] へ

**「こういう人向け」**：
- 「宇土OSのビジョンを理解したい」
- 「なぜ14億円の赤字なのか」
- 「8層構造って何？」
- 「市民向けに説明したい」

**学習パス**：
```
L0 前提レイヤ（人口・財政・地理）
   ↓
L1 事実レイヤ（資産・インフラ）
   ↓
L2 課題レイヤ（問題の根本原因）
   ↓
vision_uto_os（全体ビジョン）
   ↓
layer_structure_guide（8層統合）
```

---

### **2️⃣ business/ - ビジネス・産業を学びたい人向け**

👉 [[./business/index|💼 business/index]] へ

**「こういう人向け」**：
- 「ウトマチ百貨店とは何か」
- 「農家の所得が3倍になる仕組み」
- 「移住してきた人はどんな仕事がある」
- 「地域商社って何をやるのか」

**学習パス**：
```
utomachi_100_store_specification
   ↓
utomachi_100_store_use_cases（3つの成功例）
   ↓
industry_os_specification（産業OSの設計）
   ↓
relocation_os（移住支援との組み合わせ）
   ↓
04_DataLink/02_POLICY_CARDS/industry/（実装状況）
```

---

### **3️⃣ tech/ - 技術・システムを学びたい人向け**

👉 [[./tech/index|🔧 tech/index]] へ

**「こういう人向け」**：
- 「Utomachi Platform の全体像」
- 「どの技術スタックを使ってるのか」
- 「Firestore のスキーマ」
- 「海苔養殖の予測モデル」
- 「Claude・ChatGPT・Gemini 運用の仕組み」

**学習パス**：
```
Utomachi_Platform_Architecture
   ↓
regional_trading_company_datalink_schema（Firestore設計）
   ↓
AGENTS.md（AI運用基盤）
   ↓
02_Agriculture/02_農業/海苔養殖業/（農業DSS）
   ↓
02_Agriculture/02_農業/熊本県有機農業研究会/（AgriOS）
```

---

## 🚀 クイックスタート

### シナリオ別の推奨読み順

**「初めて宇土OS を聞いた」**
1. [[./general/index|general (index)]] - L0～L7 全体像
2. [[00_システム/vision/vision_uto_os|vision_uto_os]] - 2040年のビジョン
3. [[00_システム/vision/layer_structure_guide|layer_structure_guide]] - 構造の詳細

**「ウトマチ百貨店に興味がある」**
1. [[./business/index|business (index)]] - 全体概観
2. [[00_システム/vision/utomachi_100_store_use_cases|utomachi_100_store_use_cases]] - 3つの成功例
3. [[00_システム/vision/utomachi_100_store_specification|utomachi_100_store_specification]] - 詳細仕様

**「移住を検討している」**
1. [[./business/index|business (index)]] の「移住・定住OS」セクション
2. [[00_システム/vision/relocation_os_use_cases|relocation_os_use_cases]] - 田中花子さんの事例
3. [[00_システム/vision/relocation_os_specification|relocation_os_specification]] - 支援内容の詳細

**「システム実装に携わる」**
1. [[./tech/index|tech (index)]] - 技術全体
2. [[00_システム/architecture/Utomachi_Platform_Architecture|Utomachi_Platform_Architecture]] - プラットフォーム設計
3. [[00_システム/vision/regional_trading_company_datalink_schema|regional_trading_company_datalink_schema]] - Firestore スキーマ

**「農業の高付加価値化に関心がある」**
1. [[./business/index|business (index)]] の「産業OS」セクション
2. [[./tech/index|tech (index)]] の「海苔養殖DSS」セクション
3. [[02_農業/海苔養殖業/KNOWLEDGE_MAP|02_農業/海苔養殖業 のナレッジマップ]]

---

## 🔍 3つの分野の関係図

```
                    ┌─────────────┐
                    │ 2040ビジョン │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ↓                  ↓                  ↓
    ┌────────┐         ┌────────┐        ┌────────┐
    │ general│         │business│        │ tech   │
    │ L0-L7  │ ────→   │OS実装  │ ────→ │実装基盤│
    │基礎理論│         │政策    │        │システム│
    └────────┘         └────────┘        └────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
        ↓                                     ↓
   04_DataLink/                    02_Agriculture/
   実行・実績・決定                  DSS・AgriOS
```

---

## 💼 職種別ナビゲーション

| 職種 | 必読 | 推奨 |
|------|------|------|
| **市長・議員** | general（全体像） | business（成果） + general（課題） |
| **市職員** | general（L0～L7） | 担当部署のOS + tech |
| **農家・漁師** | business（ウトマチ） | tech（DSS） |
| **移住検討者** | business（移住OS） | general（市の安定性） |
| **エンジニア** | tech（全体） | business（ビジネス背景） |
| **記者・研究者** | general（理論） + business（事例） | すべて |

---

## 📊 情報の3層構造

```
【理論層】- 「なぜそう考えるか」
  ↓
00_System/vision/
  - vision_uto_os: ビジョン・思想
  - L0-L7: 層構造
  - 各OS仕様書

【ナレッジ層】- 「何を学べるか」
  ↓
03_Knowledge/ ← 「ここ」
  - index.md: 各分野のガイド
  - wikilink で 00_System/vision/ に参照

【実行層】- 「実際どうやってるか」
  ↓
04_DataLink/
  - 02_POLICY_CARDS: 政策カード
  - projects: プロジェクト管理
  - logs: 月次実績
```

---

## 🔗 相互リンク例

### general から business へ

**L6 政策レイヤ**を読む
→「産業OSを実装する」について知りたい
→[[./business/index|business (index)]]へ

### business から tech へ

**ウトマチ百貨店の規模拡大**を読む
→「Firestore でどう管理するのか」知りたい
→[[./tech/index|tech (index)]]へ

### tech から general へ

**Firestore スキーマ**を読む
→「なぜこの設計にしたのか」背景を知りたい
→[[./general/index|general (index)]]の L4財源 へ

---

## ❓ よくある質問

### Q: 「00_System/vision/」と「03_Knowledge/」の違いは？

**A**: 
- **00_System/vision/**: マスター文書。正式な仕様書・計画書
- **03_Knowledge/**: キュレーション版。学習者向けのガイド・インデックス

ファイルは重複しない。03_Knowledge はリンク集。

### Q: 「何から読み始めるべき？」

**A**: 
- 初心者 → [[./general/index|general (index)]] で L0～L7 を理解
- 実務者 → 自分の職種/興味別に、該当 index.md から開始

### Q: 「新しいナレッジを追加したい」

**A**: 
1. 正式な文書なら `00_System/vision/` に追加
2. ガイド・解説なら該当 `index.md` に wikilink を追加
3. 実績データなら `04_DataLink/` に追加

---

## 📞 サポート

各セクションの index.md 最下部に「関連セクション」リンクがあります。

**迷ったら** → [[./general/index|general (index)]] で基本から学び直す

---

**最終更新**: 2026-05-14  
**3つの分野**: [[./business/index|💼 business]] / [[./tech/index|🔧 tech]] / [[./general/index|📚 general]]
