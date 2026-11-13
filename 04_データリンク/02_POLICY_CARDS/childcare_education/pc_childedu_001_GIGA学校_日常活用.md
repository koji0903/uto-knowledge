---
id: pc_childedu_001
type: policy_card
title: GIGAスクールの日常活用と端末更新
created: 2026-05-07
status: draft
owner: 土黒功司
priority: high
policy_domain: childcare_education
related_layers: [L5_infrastructure_layer, L6_policy_layer]
related_os: [education_os_specification, childcare_os_specification]
related_questions: [q_r4_12_hijikuro, q_r6_03_hijikuro, q_r6_12_hijikuro]
related_evidence: [ev_R4年12月_土黒功司_質問根拠, ev_R6年3月_土黒功司_質問根拠, ev_R6年12月_土黒功司_質問根拠]
tags: [政策実行カード, 教育OS, GIGAスクール, ICT教育]
---

# 政策実行カード: GIGAスクールの日常活用と端末更新

## 目的

1人1台端末を「整備済みの機器」ではなく、毎日の学びを支える標準インフラとして使える状態にする。

## 背景

一般質問では、端末整備、OS選定、端末の重さ、不具合、家庭持ち帰り、学校間・教員間の活用差、GIGAスクールサポーターの必要性が継続的に扱われている。

## 根拠

- [[../../01_議会活動/questions/R4年12月_土黒功司_一般質問]] - 学校教育向けICT環境、端末整備、ICTサポート
- [[../../01_議会活動/questions/R6年3月_土黒功司_一般質問]] - GIGAスクール構想の現状と今後
- [[../../01_議会活動/questions/R6年12月_土黒功司_一般質問]] - 端末更新、Chromebook検討、日常活用
- [[education_os_specification]] - 教育OS仕様
- [[childcare_os_specification]] - 子育てOS仕様

## 現状

- 1人1台端末の整備は進んでいる
- 現行Windows端末の不具合や更新時のOS選定が論点化している
- GIGAスクールサポーターや教員研修により、活用支援が行われている
- 児童生徒の活用頻度や教員の使い方には差がある

## 課題

- 端末更新が単なる機器入替で終わると、授業改善につながりにくい
- 学校・教員ごとの活用差が、児童生徒の学習機会の差になり得る
- 家庭持ち帰り、通信環境、授業中の不具合対応が運用設計として未整理
- 教育DXのKPIが「導入」中心で、「日常利用」「学習成果」「負担軽減」まで落ちていない

## 実行案

1. 端末更新と同時に、授業での標準利用シーンを定義する
2. 学校別・学年別の活用状況を定期的に見える化する
3. GIGAスクールサポーターの支援内容を「障害対応」と「授業設計支援」に分ける
4. 家庭持ち帰り、通信、故障、不具合報告の運用ルールを整理する
5. 教育OS上で、端末、教材、活用事例、課題を蓄積できるデータ項目を設計する

## 次アクション

- R4-12、R6-03、R6-12の答弁から端末・支援・活用差に関する論点を抽出する
- 次回質問で「更新後の活用KPI」「学校間格差の把握」「サポート体制」を確認する
- 教育OSのFirestore設計に、ICT活用ログと支援ログの項目を追加する

## KPI

- 端末の授業利用頻度
- 端末不具合の発生件数と解決時間
- GIGAスクールサポーターの支援件数
- 教員研修の受講率
- 家庭持ち帰り運用の実施校数

## 関連リンク

- [[04_データリンク/02_POLICY_CARDS/childcare_education/index|子育て・教育 政策実行カード]]
- [[education_os_specification]]
- [[childcare_os_specification]]
- [[../../01_議会活動/policy_links/土黒功司一般質問政策マップ]]
