---
id: pc_admin_dx_001
type: policy_card
title: 自治体AI活用ガイドラインと業務実装
created: 2026-05-07
status: draft
owner: 土黒功司
priority: high
policy_domain: admin_dx
related_layers: [L1_fact_layer, L3_organization_pfu, L6_policy_layer]
related_os: [education_os_specification, rmo_os_specification]
related_questions: [q_r5_06_hijikuro, q_r5_12_hijikuro]
related_evidence: [ev_R5年6月_土黒功司_質問根拠, ev_R5年12月_土黒功司_質問根拠]
tags: [政策実行カード, 行政DX, AI, 業務改善]
---

# 政策実行カード: 自治体AI活用ガイドラインと業務実装

## 目的

生成AIを、職員の業務効率化、教育支援、情報整理、政策立案に安全に活用するためのルールと実装手順を整える。

## 背景

一般質問では、人工知能の登場による行政業務・教育への影響、自治体DXの取組が扱われている。AI活用は便利さだけでなく、個人情報、正確性、説明責任、職員研修を含めた設計が必要である。

## 根拠

- [[../../01_議会活動/questions/R5年6月_土黒功司_一般質問]] - 人工知能の登場における業務・教育への影響
- [[../../01_議会活動/questions/R5年12月_土黒功司_一般質問]] - 自治体DXの取組
- [[L3_organization_pfu]] - 横断PFU
- [[education_os_specification]] - 教育分野のAI活用
- [[rmo_os_specification]] - 議事録要約・地域運営支援

## 現状

- AI活用への関心は高まっている
- 行政DXと教育DXは、個別施策ではなく横断的な運用ルールが必要
- 宇土OSでは、Firestore、Google Drive、Obsidian、MCPを使うAI連携基盤が整いつつある

## 課題

- 職員が使ってよいデータ、使ってはいけないデータの線引きが必要
- AI回答の誤り、根拠不足、個人情報入力のリスクがある
- 業務単位の利用シーンと効果測定が整理されていない
- 教育現場や地域運営でのAI活用と行政側ルールの整合が必要

## 実行案

1. 生成AI利用ガイドラインの最小版を作る
2. 議事録要約、文案作成、FAQ整理、資料検索など低リスク業務から始める
3. 個人情報、機密情報、未公開情報の入力禁止ルールを明文化する
4. AI利用ログ、成果物、レビュー担当を記録する
5. 教育OS、RMO OS、議会ナレッジで共通のAI利用原則を使う

## 次アクション

- R5-06とR5-12の答弁からAI・DXに関する行政の現状を抽出する
- AI利用ガイドラインの1ページ版を作る
- 次回質問で「利用ルール」「職員研修」「効果測定」「教育現場との整合」を確認する

## KPI

- AI活用対象業務の登録件数
- 職員研修の実施回数
- AI利用ガイドラインの更新回数
- 作業時間削減の実測件数
- レビュー済みAI成果物数

## 関連リンク

- [[04_データリンク/02_POLICY_CARDS/admin_dx/index|行政DX・AI 政策実行カード]]
- [[education_os_specification]]
- [[rmo_os_specification]]
- 
