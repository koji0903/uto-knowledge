---
id: index_datalink
type: index
tags: [index, datalink]
created: 2026-05-04
---

> ⬅ [[ホーム|🏠 ホーム]]

# 04_DataLink - データ・実行層

**Vault 4層構造における実行層**

```
00_System/vision/      ← ビジョン・戦略（マスター理論）
   ↓ 「何をするのか」
03_Knowledge/          ← ナレッジベース（学習・理解）
   ↓ 「実際に実行する」
04_DataLink/           ← 実行層（プロジェクト・実績・意思決定）
   ↓
Firestore / Google Drive / GitHub
```

このフォルダは、**宇土市政の意思決定、プロジェクト進捗、実績データ** を Firestore と連携させながら管理します。

---

## 📚 ナレッジ層（03_Knowledge）との関係

|  | 00_System/vision | 03_Knowledge | 04_DataLink |
|---|---|---|---|
| **役割** | マスター理論 | 学習用ナレッジ | 実行・実績 |
| **例** | utomachi_100_store_specification.md | business/index | 02_POLICY_CARDS/industry/ + logs/monthly_sales_*.md |
| **更新頻度** | 稀（設計変更時）| 必要に応じて | 日次～月次 |
| **対象者** | 戦略立案者 | 学習希望者 | 実行担当者 |

**使い方**:
1. ナレッジ層で仕組みを理解 → [[03_知識/business/index|business (index)]] で「ウトマチとは」を学ぶ
2. 実行層で具体例を確認 → [[02_POLICY_CARDS/industry/|政策カード]]で「今、何をやってるか」確認
3. ログで実績を追跡 → [[logs/|logs/]] で「売上実績」を確認

---

## 重要ルール

- `firestore_collection` と `firestore_doc_id` を維持する
- Firestore へ反映する前に dry-run を行う
- 反映後は drift check を行う
- 必須DataLink文書は `datalink.required.json` で管理し、CIでFirestore dry-run対象に残っていることを検証する

## Collection

| フォルダ | 日本語名 | Firestore collection |
| --- | --- | --- |
| [[decisions/index|decisions]] | 意思決定 | `decisions` |
| [[producers/index|producers]] | 生産者 | `producers` |
| [[products/index|products]] | 商品・産品 | `products` |
| [[projects/index|projects]] | プロジェクト | `projects` |
| [[logs/index|logs]] | ログ | `logs` |

## 地域商社向けDataLink

実行例: ウトマチ百貨店・産業OS

| リソース | 内容 |
|---------|------|
| **ナレッジ（理解）** | [[03_知識/business/index|business (index)]] で仕組みを学ぶ |
| **スキーマ（設計）** | [[00_システム/03_ビジョン体系/regional_trading_company_datalink_schema|地域商社 DataLink スキーマ]] |
| **ポリシー（実行）** | [[02_POLICY_CARDS/industry/|政策実行カード / 産業OS]] |
| **実績（確認）** | [[logs/|月次売上・生産者・商品ログ]] |

## 必須DataLink文書

必須文書の一覧は `datalink.required.json` を正とする。

現在は、地域商社初期プロジェクト、複数AI運用の意思決定、関連作業ログを必須文書として扱う。

---

## 🔗 関連リンク

**Vault 全体構成**:
- [[00_システム/03_ビジョン体系/|00_System/vision]] - ビジョン・戦略層
- [[03_知識/index|03_Knowledge/index]] - ナレッジベース層（学習ガイド）
- [[ホーム|ホーム]] - Vault 全体ホーム

**このレイヤの詳細**:
- [[../01_議会活動/|01_議会活動]] - 議会活動データ
- [[../02_POLICY_CARDS/|02_POLICY_CARDS]] - 政策実行カード
- [[../projects/|projects]] - プロジェクト管理
- [[../decisions/|decisions]] - 意思決定ログ
- [[../logs/|logs]] - 実行ログ

**最終更新**: 2026-05-14
