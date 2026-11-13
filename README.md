# 宇土OS ナレッジベース

Obsidian + GitHub + Firestore による統合知識管理環境

> 🏠 **Obsidian で開いたら、まず [[ホーム|🏠 宇土OS ナレッジベース ホーム]] を開いてください。**
> このREADMEはGitHub等の外部閲覧向けの概要です。

## 📌 コンセプト

**宇土市の課題を「8層構造＋機能OS」で体系化・実装するためのナレッジベース**

- 層構造：L0（前提）→ L1（事実）→ L2（課題）→ L3（組織）→ L4（財源）→ L5（インフラ）→ L6（政策）→ L7（ビジョン）
- 機能OS：RMO OS、子育てOS、教育OS、産業OS、移住・定住OS、ウトマチ百貨店

## 📁 構成

```
04_DataLink/
├── 00_SYSTEM/         - 宇土OS体系（層構造 + 6つの機能OS）
├── 01_ASSEMBLY/       - 議会・議員情報
├── 02_POLICY_CARDS/   - 政策実行カード
├── decisions/         - 意思決定台帳（Firestore対応）
├── producers/         - 生産者台帳（Firestore対応）
├── products/          - 商品・産品台帳（Firestore対応）
├── projects/          - プロジェクト台帳（Firestore対応）
└── logs/              - ログ台帳（Firestore対応）

その他
├── 05_Templates/      - DataLink作成テンプレート
├── scripts/           - 検証・同期・生成スクリプト
├── ホーム.md          - Obsidian ホームページ
└── README.md          - このファイル
```

## 🚀 はじめに

**[[ホーム.md|ホーム]] → [[layer_structure_guide|宇土OS 8層構造]]** でナビゲーション開始

複数AIで作業する場合は、最初に [[AGENTS|AI運用ガイド]] を読む。

初回セットアップ:

```bash
bash scripts/bootstrap_local_env.sh
```

Windows:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\bootstrap_local_env.ps1
```

## 📊 核心ドキュメント

| 内容 | ファイル |
|------|---------|
| **全体構造図** | [[layer_structure_guide|8層構造統合ガイド]] |
| **宇土市の現実** | [[L0_premise_layer|L0 前提レイヤ]] |
| **市の資産データ** | [[L1_fact_layer|L1 事実レイヤ]] |
| **構造的課題** | [[L2_issue_layer|L2 課題レイヤ]] |
| **財源戦略** | [[L4_finance_layer|L4 財源レイヤ]] |
| **政策設計** | [[L6_policy_layer|L6 政策レイヤ]] |
| **地域商社実装** | [[utomachi_100_store_specification|ウトマチ百貨店 仕様書]] |
| **移住・定住** | [[relocation_os_specification|移住・定住OS 仕様書]] |
| **ウトマチプラットフォーム** | [[Utomachi_Platform_Architecture|システムアーキテクチャ]] ⭐ NEW |
| **海苔養殖シーズン管理** | [[02_農業/nori_farming_dss/NORI_SEASON_DEFINITION|シーズン定義・管理体系]] ⭐ ⭐ NEW |
| **議会情報** | [[04_データリンク/01_ASSEMBLY/index|宇土市議会・議員情報]] |
| **政策実行** | [[04_データリンク/02_POLICY_CARDS/index|政策実行カード]] |
| **実行管理** | [[04_データリンク/02_POLICY_CARDS/policy_execution_board|政策実行ボード]] |
| **政策棚卸し** | `tmp/policy_card_report.md` |
| **運用ブリーフ** | `tmp/operations_brief.md` |
| **地域商社DataLink** | [[00_システム/vision/regional_trading_company_datalink_schema|地域商社 DataLink 最小スキーマ]] |
| **AI運用** | [[AGENTS|AI運用ガイド]] |
| **運用** | [[運用ダッシュボード|運用ダッシュボード]] |

## ✅ 基本検証

```bash
bash scripts/maintenance_check.sh local
```

主な検証内容:

- Vault必須構造
- DataLink frontmatter
- DataLink実データ
- DataLink参照整合性
- 政策カードと議会質問・根拠資料の参照整合性
- 政策カード棚卸しレポート生成、実行キュー確認
- 運用ブリーフ生成
- Obsidianリンク
- Firestore dry-run
- Google Drive構成dry-run

---

**最終更新:** 2026-05-08
