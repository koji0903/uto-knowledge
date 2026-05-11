---
id: nori_marine_data_operations
type: operation_note
title: "海況観測データ運用メモ"
created: 2026-05-11
updated: 2026-05-11
status: active
related_dataset: ds_nori_marine_observation_1998_2026
tags: [DataLink, operations, marine-data, nori, aquaculture, firestore, nextjs]
---

# 海況観測データ運用メモ

## 目的

熊本市海況観測データを、Next.js・Firestore の海洋ページや、海苔養殖漁師向けビューアで継続利用するための運用メモ。

## 保管方針

CSV本体はObsidianに入れない。Obsidianでは、所在、仕様、分析結果、判断ルール、更新履歴を管理する。

| 対象 | 管理場所 | 理由 |
| --- | --- | --- |
| CSV原本 | `/Users/hijikuro/Codex/Nori/` | 大容量のため。原本として保持 |
| 分析レポート | Obsidian `04_DataLink/reports` | 意思決定・説明用 |
| データセット台帳 | Obsidian `04_DataLink/datasets` | 所在・仕様・品質の追跡 |
| アプリ用集計 | Firestore | Webアプリ表示・検索用 |
| 可視化ビューア | Next.js / ローカルビューア | 現場向け確認用 |

## Firestore投入方針

Firestoreには400MB級のCSVをそのまま入れない。以下のような粒度に加工して投入する。

| コレクション案 | 内容 |
| --- | --- |
| `marineDailyObservations` | 地点別・日別の水質集計 |
| `marineSeasonSummaries` | 漁期別の高水温・低塩分・低DOサマリー |
| `marineRiskSignals` | 今日・今週の注意指標 |
| `marineStations` | 地点マスタ |
| `marineDatasetManifests` | 取り込みCSV、期間、件数、生成日時 |

## 現場向け表示項目

最初に表示すべき情報。

- 今日の地点別リスク
- 直近7日の水温・塩分・DO推移
- 水温3日移動平均
- 23℃超の継続状況
- 20℃以下到達状況
- 塩分25‰未満の継続状況
- DO 5mg/L未満の有無
- 5地点比較
- 前年同時期・過去平均との差分

## 更新時の作業手順

1. CSV取得スクリプトを実行する。
2. 原本CSVを `/Users/hijikuro/Codex/Nori/` に保存する。
3. 行数、ファイルサイズ、期間、地点件数を確認する。
4. データ品質メモに異常値・欠測傾向を追記する。
5. 日次集計・漁期サマリーを生成する。
6. Firestore投入用データを作成する。
7. Webアプリで地点別・時系列表示を確認する。
8. Obsidianのデータセット台帳と分析レポートを更新する。

## 判断ルールの初期案

| 指標 | 注意 | 警戒 |
| --- | --- | --- |
| 水温 | 23℃超 | 25℃超または23℃超が連続 |
| 採苗・張り込み | 23℃以下を確認 | 20℃前後まで低下で安全側 |
| 塩分 | 25‰未満 | 20‰未満または25‰未満が連続 |
| DO | 5mg/L未満 | 5mg/L未満が連続 |
| 地点差 | 5地点平均から大きく乖離 | 特定地点だけ急変 |

このルールは固定ではなく、漁師さんの現場記録、収量、品質、色落ち、病害発生履歴と照合して更新する。

## 今後追加したいデータ

- 降雨量
- 河川水位・流量
- 栄養塩
- クロロフィル
- 透明度
- 日射量
- 風向風速
- 漁場作業記録
- 収量・等級・色調・病害記録

優先度としては、環境側では降雨量、河川水位・流量、栄養塩、クロロフィルを先に統合する。成果側では、漁場作業記録、収量、等級、色調、病害記録を最優先で整備する。海況データだけでは品質・収量への因果説明が弱いため、環境データと現場記録を同じ日付・地点・漁場単位で結びつける。

## 関連ノート

- [[ds_nori_marine_observation_1998_2026|熊本市海況観測データ 1998-2026]]
- [[nori_marine_data_quality_1998_2026|海況観測データ品質メモ]]
- [[nori_integrated_data_roadmap|海苔養殖 統合データ基盤ロードマップ]]
- [[../reports/nori_marine_long_history_analysis_20260511|熊本市海況観測データ長期分析 - 海苔養殖への影響]]
