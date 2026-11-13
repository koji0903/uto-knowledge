---
id: ds_nori_marine_observation_1998_2026
type: dataset
title: "熊本市海況観測データ 1998-2026"
created: 2026-05-11
updated: 2026-05-11
status: active
domain: 水産業
category: 海苔養殖
source_system: "熊本市海況観測システム"
period_requested: "1998-01-01 to 2026-05-10"
period_water_quality_actual: "2001-08 to 2026-05-10"
period_tide_actual: "1998-01-01 to 2026-05-10"
stations: [河内, 松尾, 小島, 沖新, 新港南]
storage_policy: "CSV本体はObsidian外で保管し、Obsidianでは所在・仕様・分析結果を管理する"
tags: [DataLink, dataset, marine-data, nori, aquaculture, csv]
---

# 熊本市海況観測データ 1998-2026

## 概要

熊本市海況観測システムから取得した、海苔養殖関連の水質データ・潮位データ。対象地点は河内、松尾、小島、沖新、新港南の5地点。

CSV本体はサイズが大きいため、Obsidian Vault には置かない。Obsidianでは、ファイル所在、取得条件、カラム概要、品質上の注意、分析レポートへのリンクを管理する。

## CSVファイル

| 種別 | ファイルパス | サイズ | 行数 | 内容 |
| --- | --- | ---: | ---: | --- |
| 水質データ | `/Users/hijikuro/Codex/Nori/all_points_water_quality_19980101_20260510.csv` | 403MB | 2,954,092 | 5地点の水温、塩分、比重、電導度、DOなど |
| 潮位データ | `/Users/hijikuro/Codex/Nori/all_points_tide_19980101_20260510.csv` | 5.0MB | 51,786 | 5地点の日次潮位情報 |
| 統合データ | `/Users/hijikuro/Codex/Nori/all_points_water_tide_19980101_20260510.csv` | 408MB | 3,005,877 | 水質・潮位を統合したCSV |

行数はヘッダー行を含む。

## 地点

| 地点 | 水質データ件数 | 用途メモ |
| --- | ---: | --- |
| 河内 | 598,073 | 比重の異常値が多く、比重は判断指標から外す |
| 松尾 | 586,001 | 低塩分イベントの監視が重要 |
| 小島 | 591,581 | 比較的バランスがよく、基準点として使いやすい |
| 沖新 | 591,490 | 水温は低めだが、低塩分・DO確認が必要 |
| 新港南 | 586,946 | 低塩分・低DOリスクの監視優先度が高い |

## 主なカラム

| 区分 | 主な項目 | 用途 |
| --- | --- | --- |
| 共通 | station, date, time, datetime | 地点・日時による絞り込み |
| 水質 | temperature, salinity, specific_gravity, conductivity | 水温・塩分・比重・電導度の分析 |
| DO | do_percent, do_mg_l | 溶存酸素の分析 |
| 潮位 | tide関連カラム | 潮位条件との重ね合わせ |

実際のカラム名はCSVヘッダーを正とする。アプリ投入時は、Firestore用に英数字・snake_caseへ正規化する。

## 推奨する利用方法

FirestoreやNext.jsアプリでは、CSVをそのまま全件表示しない。次の派生データを作成して利用する。

- 地点別・日次集計
- 水温3日移動平均
- 23℃超の日数
- 20℃以下到達日
- 塩分25‰未満の継続日数
- 塩分20‰未満の継続日数
- DO 5mg/L未満の日数
- 5地点平均との差分
- 漁期別サマリー

## 取得・更新スクリプト

| 用途 | パス |
| --- | --- |
| 長期データ取得 | `/Users/hijikuro/Codex/Nori/scripts/export_nanotech_long_history.py` |
| 3年版・5地点取得 | `/Users/hijikuro/Codex/Nori/scripts/export_nanotech_okinoshin.py` |
| ローカルビューア | `/Users/hijikuro/Codex/Nori/viewer/server.py` |

## 関連ノート

- [[nori_marine_data_quality_1998_2026|海況観測データ品質メモ]]
- [[nori_marine_data_operations|海況観測データ運用メモ]]
- [[../reports/nori_marine_long_history_analysis_20260511|熊本市海況観測データ長期分析 - 海苔養殖への影響]]

