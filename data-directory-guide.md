---
title: "データディレクトリガイド（日本語化版）"
date: 2026-11-14
tags: [データ管理, インデックス, 参照ガイド]
type: reference
status: 完成
---

# 📁 データディレクトリガイド

> **場所**: `/Volumes/ExtSSD/workspace/data/`

## 🗂️ フォルダ構成（日本語化版）

### 01_財政決算詳細 (42MB)
**宇土市 R2-R6年度の決算データ（JSON構造化）**
- `r2_uto_kessan_structured.json` ～ `r6_uto_kessan_structured.json`
- 歳入・歳出を科目別に詳細分類
- **活用例**: [[civic/uto-city-council/2026-study-session-summary#歳出構成の推移分析|歳出構成分析]]

### 02_ソース_一次情報 (42MB)
**宇土市の公式一次情報ソース**
- `uto/council_minutes/` - 議会議事録（Google Docs）
- `uto/open_data/` - オープンデータ
- `uto/parenting_pdf/` - 子ども・子育て支援ドキュメント
- **活用例**: [[civic/uto-city-council/council-policy-topics|議会論点抽出]]

### 03_決算カード_全国 (580KB)
**全国5,223市町村の決算カード（総務省公開）**
- `settlement_cards.json` - R3-R5年度データ
- 宇土市の財政指標を全国と比較可能
- **活用例**: [[civic/election-2026/current-values#経常収支比率の履歴を追加|経常収支比率の推移確認]]

### 04_子育て支援 (576KB)
**宇土市が公開する子ども・子育て支援施策（65件）**
- `uto_child_support_complete.json` - 統合データ
- 経済・生活・教育・就労支援の4分類
- **活用例**: [[civic/election-2026/current-values#子ども・子育て支援施策|子育て支援詳細]]

### 05_議会議事録_生 (124KB)
**宇土市議会の議事録（R2-R7年度）**
- `summarized_minutes.json` - 構造化議事録（31件）
- `council_minutes.json` - 詳細版
- **活用例**: [[civic/uto-city-council/council-policy-topics|政策論点の抽出]]

### 06_公開データ (32KB)
**宇土市オープンデータ（Google Sheets リンク）**
- 介護サービス事業所一覧
- 医療機関一覧
- 文化財一覧
- 避難場所一覧
- **活用例**: [[civic/uto-city/open-data-index|公開データインデックス]]

---

## 🔍 活用シーン別ガイド

### 財政分析を進めたい
1. `01_財政決算詳細` で R2-R6 の歳入・歳出を確認
2. `03_決算カード_全国` で全国比較
3. `02_ソース_一次情報` で議会の財政議論を参照

### 政策課題を調査したい
1. `05_議会議事録_生` で議論経緯を確認
2. `02_ソース_一次情報/uto/open_data/` で関連データを確認
3. [[civic/uto-city-council/council-policy-topics|議会論点ノート]] で分析結果を参照

### 市民向け情報を用意したい
1. `04_子育て支援` で支援制度の全体像を把握
2. `06_公開データ` で施設情報を検索
3. [[civic/uto-city/open-data-index|公開データインデックス]] で市民向けガイドを参照

### ナレッジ充実を進めたい
- 各フォルダの `README.md` で内容と関連ノートを確認
- 未統合のデータセットを特定
- [[civic/uto-city-council/2026-study-session-summary|総合整理]] にリンク

---

## 📝 フォルダ別README

各フォルダに `README.md` を配置：
- 内容の説明
- ファイル一覧
- データ構造
- 活用シーン
- 関連ノートへのリンク

---

## 🔄 新規データの追加方法

新しいファイルを追加する際：

1. **適切なフォルダを選択**
   - 財政関連 → `01_財政決算詳細`
   - 議会/公式資料 → `02_ソース_一次情報`
   - 全国比較 → `03_決算カード_全国`
   - 福祉施策 → `04_子育て支援`
   - 議事録 → `05_議会議事録_生`
   - 公開データ → `06_公開データ`

2. **ファイルを追加**

3. **対応する `README.md` を更新**

4. **Vault でリンク更新**
   - 該当ノートの出典/参照を修正

---

**最終更新**: 2026-11-14（日本語化完成）
