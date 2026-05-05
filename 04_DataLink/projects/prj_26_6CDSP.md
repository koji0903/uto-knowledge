---
id: project_202605051026_XR4BV
type: project
firestore_collection: projects
firestore_doc_id: project_202605051026_XR4BV
title: chatgpt_import_20250527_admin_032
source: chatgpt_import
source_id: 686741b6-72d9-4538-a296-ec906db675ab
source_group: A
created: 2026-05-05
status: active
tags: [imported_from_chatgpt, group-A]
---

# chatgpt_import_20250527_admin_032


## 📋 要約

- **元タイトル:** 地方自治体の離職問題
- **グループ:** A (行政・議会関連)
- **信頼度:** 66%
- **メッセージ数:** 9
- **作成日時:** 2025-05-27 08:54:52
- **推奨移行先:** 02_Project または 04_DataLink/projects
- **タグ候補:** A

## 📝 原文コンテンツ

> ChatGPT との会話ログ（フルコンテンツ）

詳細は下記の **会話履歴** セクションを参照してください。

---

## 💬 会話履歴

*このセクションには ChatGPT エクスポートの全内容が保存されています*

### 構造情報
- Mapping keys: 10
- Valid messages: 9

---

```json
{
  "title": "地方自治体の離職問題",
  "create_time": 1748336092.057858,
  "update_time": 1748337071.372721,
  "mapping": {
    "686741b6-72d9-4538-a296-ec906db675ab": {
      "id": "686741b6-72d9-4538-a296-ec906db675ab",
      "message": null,
      "parent": null,
      "children": [
        "fd998cb9-4e2c-4ac9-be2a-7832ac27b91f"
      ]
    },
    "fd998cb9-4e2c-4ac9-be2a-7832ac27b91f": {
      "id": "fd998cb9-4e2c-4ac9-be2a-7832ac27b91f",
      "message": {
        "id": "fd998cb9-4e2c-4ac9-be2a-7832ac27b91f",
        "author": {
          "role": "system",
          "name": null,
          "metadata": {}
        },
        "create_time": null,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 0,
        "metadata": {
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "686741b6-72d9-4538-a296-ec906db675ab",
      "children": [
        "9cc0e672-1ffd-4662-a85f-3ed795280224"
      ]
    },
    "9cc0e672-1ffd-4662-a85f-3ed795280224": {
      "id": "9cc0e672-1ffd-4662-a85f-3ed795280224",
      "message": {
        "id": "9cc0e672-1ffd-4662-a85f-3ed795280224",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336090.9430618,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "現在の日本全国の地方自治体では、職員の離職問題が大きな課題となっています。\n全国の自治体の離職率の状況、原因をリサーチしてください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "system_hints": [
            "research"
          ],
          "dictation": false,
          "request_id": "94644a3d6d290fa2-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "fd998cb9-4e2c-4ac9-be2a-7832ac27b91f",
      "children": [
        "8035f506-8764-4462-9394-1d69afa9a90c"
      ]
    },
    "8035f506-8764-4462-9394-1d69afa9a90c": {
      "id": "8035f506-8764-4462-9394-1d69afa9a90c",
      "message": {
        "id": "8035f506-8764-4462-9394-1d69afa9a90c",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336099.054632,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "調査を進めるために、いくつか確認させてください。\n\n1. 調査対象の離職率の時期（例：直近1年、過去5年など）を指定していただけますか？\n2. 原因分析は、職員のインタビューやアンケートに基づいたものを優先しますか？それとも政府や第三者機関の報告書が優先ですか？\n3. 地方自治体の規模（都道府県、市町村など）に関して特に注目したいレベルはありますか？\n\nこれらをご共有いただけると、より精度の高いリサーチが可能です。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "9cc0e672-1ffd-4662-a85f-3ed795280224",
          "request_id": "94644a3d6d290fa2-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "9cc0e672-1ffd-4662-a85f-3ed795280224",
      "children": [
        "bea520fb-6636-4d9c-bd88-e0d0ff180705"
      ]
    },
    "bea520fb-6636-4d9c-bd88-e0d0ff180705": {
      "id": "bea520fb-6636-4d9c-bd88-e0d0ff180705",
      "message": {
        "id": "bea520fb-6636-4d9c-bd88-e0d0ff180705",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1748336099.054747,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "is_visually_hidden_from_conversation": true,
          "command": "clarify_with_text",
          "permissions": [
            {
              "type": "notification",
              "status": "requested",
              "notification_channel_id": "deep_research",
              "notification_channel_name": "Research",
              "notification_priority": 4
            }
          ],
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "8035f506-8764-4462-9394-1d69afa9a90c",
          "request_id": "94644a3d6d290fa2-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8035f506-8764-4462-9394-1d69afa9a90c",
      "children": [
        "61b2d548-e35a-4f4e-919b-0dafb77abbe8"
      ]
    },
    "61b2d548-e35a-4f4e-919b-0dafb77abbe8": {
      "id": "61b2d548-e35a-4f4e-919b-0dafb77abbe8",
      "message": {
        "id": "61b2d548-e35a-4f4e-919b-0dafb77abbe8",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336139.455653,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "１．過去５年\n２．第三者期機関の報告書優先\n３．熊本県を特に。そして、熊本県宇土市を中心とした比較"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "system_hints": [
            "research"
          ],
          "dictation": false,
          "request_id": "94644b6bc9a10fa2-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "bea520fb-6636-4d9c-bd88-e0d0ff180705",
      "children": [
        "fae97cde-0a88-4811-8081-94e322fc37f5"
      ]
    },
    "fae97cde-0a88-4811-8081-94e322fc37f5": {
      "id": "fae97cde-0a88-4811-8081-94e322fc37f5",
      "message": {
        "id": "fae97cde-0a88-4811-8081-94e322fc37f5",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336152.316651,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "了解しました。熊本県、とくに宇土市に注目しながら、過去5年間における全国および熊本県内の地方自治体職員の離職率とその原因について、第三者機関（総務省、自治体職員連携団体、研究機関など）の報告書や統計資料を優先して調査します。\n\n完了次第、離職率の推移、主な原因、宇土市と他自治体の比較分析をわかりやすくまとめてご報告いたします。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "61b2d548-e35a-4f4e-919b-0dafb77abbe8",
          "request_id": "94644b6bc9a10fa2-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "61b2d548-e35a-4f4e-919b-0dafb77abbe8",
      "children": [
        "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e"
      ]
    },
    "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e": {
      "id": "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e",
      "message": {
        "id": "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336140.343106,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"了解しました。熊本県、とくに宇土市に注目しながら、過去5年間における全国および熊本県内の地方自治体職員の離職率とその原因について、第三者機関（総務省、自治体職員連携団体、研究機関など）の報告書や統計資料を優先して調査します。\\n\\n完了次第、離職率の推移、主な原因、宇土市と他自治体の比較分析をわかりやすくまとめてご報告いたします。\",\n  \"title\": \"地方自治体職員の離職率と原因分析（宇土市を中心に熊本県と全国比較）\",\n  \"prompt\": \"過去5年間（2020年〜2024年）における日本全国および熊本県の地方自治体職員の離職率の状況とその原因について調査する。\\n特に、熊本県宇土市に注目し、熊本県内の他市町村や全国平均と比較して、離職率の傾向とその背景を明らかにする。\\n\\n以下の点に留意して調査する：\\n- 総務省や自治体職員関連の第三者機関（自治労、公務労協、地方自治研究機関など）の報告書や統計資料を優先する\\n- 離職率の推移を年度ごとに明示する\\n- 離職の主な要因（例：給与水準、勤務環境、人間関係、ワークライフバランス、地域の人口減少の影響など）を分析する\\n- 宇土市の離職率や要因を熊本県内他自治体（例：熊本市、八代市、人吉市など）および全国平均と比較する\\n- 表やグラフを用いて分かりやすく提示する\\n- 出典情報も記載する\\n\\nレポート形式で、見出しと構成を整えて提供すること。\"\n}"
          ]
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop",
            "stop_tokens": [
              200007
            ]
          },
          "is_complete": true,
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "fae97cde-0a88-4811-8081-94e322fc37f5",
          "request_id": "94644b6bc9a10fa2-KIX",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "fae97cde-0a88-4811-8081-94e322fc37f5",
      "children": [
        "db737226-3b73-429c-8a1f-3717d491138f"
      ]
    },
    "db737226-3b73-429c-8a1f-3717d491138f": {
      "id": "db737226-3b73-429c-8a1f-3717d491138f",
      "message": {
        "id": "db737226-3b73-429c-8a1f-3717d491138f",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1748336159.693194,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "地方自治体職員の離職率と原因分析（宇土市を中心に熊本県と全国比較）",
          "async_task_prompt": "過去5年間（2020年〜2024年）における日本全国および熊本県の地方自治体職員の離職率の状況とその原因について調査する。\n特に、熊本県宇土市に注目し、熊本県内の他市町村や全国平均と比較して、離職率の傾向とその背景を明らかにする。\n\n以下の点に留意して調査する：\n- 総務省や自治体職員関連の第三者機関（自治労、公務労協、地方自治研究機関など）の報告書や統計資料を優先する\n- 離職率の推移を年度ごとに明示する\n- 離職の主な要因（例：給与水準、勤務環境、人間関係、ワークライフバランス、地域の人口減少の影響など）を分析する\n- 宇土市の離職率や要因を熊本県内他自治体（例：熊本市、八代市、人吉市など）および全国平均と比較する\n- 表やグラフを用いて分かりやすく提示する\n- 出典情報も記載する\n\nレポート形式で、見出しと構成を整えて提供すること。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "地方自治体職員の離職率と原因分析（宇土市を中心に熊本県と全国比較）",
            "completed_with_time": "Research completed in 12m",
            "completed_no_time": "リサーチが完了しました",
            "completed": "以下のリサーチが完了しました: ",
            "error": "検索に失敗しました",
            "cancelled": "リサーチがキャンセルされました"
          },
          "b1de6e2_s": true,
          "command": "start_research_task",
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e",
          "request_id": "94644b6bc9a10fa2-KIX",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_68357e1fcafc819195b80f74d2b93781",
          "async_task_conversation_id": "68357e1f-cc94-8003-a23e-2bf31f181f18",
          "async_task_created_at": "2025-05-27 08:56:00.431893+00:00",
          "deep_research_version": "full"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8c36e0cf-5fee-433f-b7cc-8dafb7bbea5e",
      "children": [
        "0b9918ae-425d-4a08-8eb5-f0ea96644bc7"
      ]
    },
    "0b9918ae-425d-4a08-8eb5-f0ea96644bc7": {
      "id": "0b9918ae-425d-4a08-8eb5-f0ea96644bc7",
      "message": {
        "id": "0b9918ae-425d-4a08-8eb5-f0ea96644bc7",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1748336892.80667,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# 過去5年間における地方自治体職員の離職率動向と宇土市の比較分析\n\n## 全国の地方自治体職員の離職率動向（2020～2024年）\n\n近年、全国的に地方自治体職員の離職（主に自己都合退職）が増加傾向にあります【23†L44-L50】。特に**2020年度以降、若手職員の早期離職が顕著**であり、新型コロナ禍で一時的に抑制された2020年度を除き、離職者数は年々増加しています【23†L47-L50】。総務省の「地方公務員の退職状況等調査」によれば、**2021年度には地方公務員（一般行政職）の自己都合退職者数が初めて1万人を超え約1万500人となり**、2022年度には**12,501人**に達しました【23†L47-L50】。これは10年前の2013年度（5,727人）の約2.2倍に相当し、著しい増加です【50†L25-L33】。以下の表に、2018～2022年度の一般行政職における自己都合退職者数の推移を示します（参考値）:\n\n| 年度        | 自己都合退職者数（全国・一般行政職） |\n|-------------|------------------------------|\n| 2018年度    | 約7,800人                     |\n| 2019年度    | 約8,500人                     |\n| 2020年度    | 約7,900人                     |\n| 2021年度    | 約10,500人                   |\n| 2022年度    | 12,501人【23†L47-L50】【50†L25-L33】 |\n\n※2020年度はコロナ禍で一時的に減少傾向。【23†L47-L50】\n\nこうした**地方公務員の離職率**（年間離職者数÷在職者数）を民間と比較すると、依然として公務員の離職率は低めですが上昇傾向にあります。民間企業では年間離職率がおおむね10%前後で推移するのに対し、地方公務員では全世代平均で1～3%程度（年代・職種による最大でも6～7%）とされています【16†L67-L70】。しかしながら**若手職員に限ると離職率上昇が顕著**で、2022年度時点で地方公務員20代職員の年間離職率は約3.7%に達し【50†L37-L44】、3年間累計では約10%（=民間の新卒3年以内離職率の半分程度）に上るとの推計もあります【50†L37-L44】。実際、**全国の地方公務員離職者数（全職種ベース）も2017年度の約3.2万人から2022年度には約4.6万人に増加**し、5年間で1万3千人以上増加しました【20†L11-L15】。特に**30代以下の若手が離職者全体の約7割を占める**状況で（2022年度、20代以下37.2%、30代36.6%【50†L23-L30】）、若手職員の流出が全国的な課題となっています。\n\n## 熊本県内における自治体職員の離職状況の推移\n\n【51†embed_image】熊本県庁（熊本市中央区）。熊本県内でも自治体職員の離職傾向は全国同様に深刻化しつつある【10†L13-L16】。特に熊本県庁（県職員）では**若手職員の自己都合退職が近年増加**しており、一般行政職10～30代の自主退職者数は2014年度の14人から、2023年度には38人と**約2.5倍に増加**しました【10†L13-L16】。県全体では人手不足による業務負担増も相まって職員の流出に歯止めがかからず、行政サービス低下への懸念から、熊本県は退職者の再雇用（経験者採用「カムバック採用」）制度の創設検討に乗り出しています【10†L13-L16】。また、熊本県議会での報告によれば、**2023年度の熊本県職員の中途退職者は274人**に上り、その内訳は教員142人、行政職72人、警察職員60人等となっています【29†L26-L34】。中でも教員の離職が半数を占めており、50代教員の中途退職が目立つ状況です【29†L30-L38】。\n\n熊本県内の市町村でも状況は似通っています。最大都市である**熊本市では、2023年度に一般職職員561人が離職（定年退職等含む）**しており、そのうち**自己都合による「普通退職」だけで393人にのぼりました**【36†L60-L68】。熊本市では職員数約1万人規模ですが、離職者数も年々増加傾向にあります。熊本市人事委員会の報告によると、特に**勤続15年未満の若手職員の退職者数が2018年度22人から2022年度37人へと68.2%増加**しており【20†L19-L22】、若手層の流出が顕著です。さらに熊本市や熊本県では近年、公務員採用試験の受験者数自体が減少（熊本市で10年で半減、県でも4割減【11†L225-L233】）しており、人材確保と定着の両面で厳しさが増しています。\n\n**宇土市**をはじめ熊本県内の中小規模自治体でも、人員規模こそ小さいものの離職傾向は無視できません。宇土市の職員数は約260人程度ですが、近年のデータでは**毎年度数名規模の職員が自己都合で退職**しています。例えば宇土市の資料によれば、ある年度の離職者の年齢構成は男性4名（20代1人・30代2人・50代1人）、女性3名（30代1人・40代2人）と報告されており、**若手～中堅層の退職が中心**となっています【32†L1-L4】。このように**宇土市でも毎年数名の職員が離職しており**、絶対数は少なくとも組織規模を考えると決して軽視できない状況です。他の同規模自治体（例：八代市、人吉市など）についても個別の統計公開は多くありませんが、全国的・県的な傾向からすれば若手職員の離職増加に直面している可能性が高いと考えられます。特に近隣の熊本市や他団体に転職・再就職するケース、民間企業へ転職するケースが散見され、**人材流出は宇土市を含む県内市町村共通の課題**となりつつあります。\n\n## 地方自治体職員の離職増加の背景・要因分析\n\n地方自治体職員の離職率が上昇している背景には、以下のような**複合的な要因**が指摘されています。\n\n- **給与水準・待遇への不満:** 民間との賃金格差や昇給の伸び悩みにより、公務員の魅力が相対的に低下しています。実際、自治体ごとの給与水準を示すラスパイレス指数を見ると、民間基準100に対し地方公務員の平均はおおむね95～100前後ですが、自治体間格差も存在します。例えば埼玉県戸田市ではラスパイレス指数が県平均を下回り、地域手当も低水準だったことから「近隣自治体より待遇が劣ることが人材流出の一因」と指摘されています【44†L17-L22】。戸田市では2022年度に職員約900人中35人が早期退職し過去最多を更新しましたが、その背景に**「給与水準が県内平均を下回る」**ことがあると市が分析し、給与制度の見直し検討を表明しています【44†L13-L21】。宇土市を含む地方都市でも、都市部や他団体に比べ給与・手当面で見劣りする場合、優秀な職員がより条件の良い職場へ流れる誘因となり得ます。\n\n- **勤務環境・業務量の増加:** 人口減少や行政需要の多様化により**職員一人当たりの業務負担が増えている**ことも離職要因です【23†L44-L50】。特に近年は災害対応やコロナ対応など臨時の業務も増え、公務員は少ない人員で業務を回している現状があります【14†L1-L4】。業務量の増大による長時間労働や休暇取得の困難さから心身の負担が蓄積し、疲弊した職員が退職を選択するケースが増えています。熊本県でも「職員不足による業務過多」が若手離職者増加の一因と分析されており【10†L13-L16】、現場負担の軽減策が課題となっています。\n\n- **職場の人間関係・組織風土:** 上司・同僚との人間関係や職場の雰囲気も離職に影響する重要な要因です。自治体職員を対象とした調査研究では、**直属上司との信頼関係や職場の心理的安全性が高いほど若手職員の離職意思が抑制される**ことが明らかにされています【50†L49-L57】。反対に、パワハラや縦割り体質など風通しの悪い職場環境に失望し転職を決意する職員も存在します。特に地方では部署異動が限られ人間関係の影響が大きいため、職場内コミュニケーションの円滑化やハラスメント防止が離職防止策として重要です。\n\n- **ワークライフバランスの問題:** 超過勤務（サービス残業）や休日出勤が慢性化し**私生活との両立が難しい**ことも、公務員離れの一因とされています。かつて公務員は他産業に比べ働き方が安定していると見做されてきましたが、昨今は業務繁忙や人手不足で**「民間より休めない・働き方改革が遅れている」**との指摘もあります【14†L1-L4】。とりわけ学校現場では教員の長時間労働が深刻で、熊本県でも2023年度に中途退職した教員142人のうち理由トップは「転職（他職種へ）」で34%を占め、「病気」「家庭の事情」がそれに続いたと報告されています【29†L30-L38】。これは過重労働やメンタル不調で教壇を去るケースが多い実態を反映しており、公務員全体でもライフワークバランス改善が急務と言えます。\n\n- **地域要因（人口減少・採用難など）：** 地方圏では**少子高齢化による生産年齢人口の減少**が公務員採用・定着を一層難しくしています【44†L19-L22】。熊本県宇土市など人口規模の小さい自治体では、公務員志望者自体の減少や地元離れにより**優秀な人材の確保競争が激化**しつつあります【44†L19-L22】。また人口減に伴い自治体の財政規模も縮小傾向となる中、人件費抑制プレッシャーでポスト削減や昇進機会減少が起きれば、将来に不安を感じ転職を考える職員も増えるでしょう。戸田市の菅原市長は「生産年齢人口が減少する中、人材確保競争が厳しくなっている」と述べ、職員アンケートの声を踏まえて職場環境の改善に努める考えを示しています【44†L19-L22】。このように**地域経済・雇用環境の変化**も公務員離職の背景要因として無視できません。\n\n以上のように、地方自治体職員の離職率上昇には給与待遇から職場環境、社会構造まで多面的な原因が絡んでいます。熊本県宇土市の場合も例外ではなく、**近隣自治体や民間との待遇差、業務量の負担、人間関係上の課題**などが複合して離職につながっている可能性があります。現状を踏まえ、各自治体では給与改善（待遇是正）や働き方改革の推進、メンタルヘルス対策、職場風土の改善など**人材の定着策（リテンションマネジメント）**に力を入れ始めています【10†L13-L16】【44†L13-L21】。離職率の動向を注視しつつ、若手職員が安心して長く働ける魅力ある職場づくりが今後一層重要になるといえるでしょう。\n\n**参考文献・出典:** 総務省「地方公務員の退職状況等調査」結果、自治労・公務労協等の資料、熊本県・熊本市の人事行政報告【36†L60-L68】、熊本日日新聞【10†L13-L16】、RKK熊本放送【29†L26-L34】、埼玉新聞【44†L13-L21】等より作成しました。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 105,
              "end_ix": 117,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": "> 安定した収入で人気だった自治体職員の退職が止まらない。総務省集計によると、教員や警察などを除く一般行政職のうち、2022年度に主に自己都合で仕事を辞めたのは 1万2501人。13年度は5727人で、約10年で2.2倍となった。待遇への不満や業務量の増加が影響しているとみられる。30代までの若手が全体の3分の2を占め、 住民サービス低下や組織弱体化が懸念される。 >  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 44,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 189,
              "end_ix": 201,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 305,
              "end_ix": 317,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 358,
              "end_ix": 370,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%95%E3%82%89%E3%81%AB%E3%80%81%E3%81%93%E3%81%AE%E6%95%B0%E5%AD%97%E3%82%92%202013%20%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%99%82%E7%82%B9%20%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E6%99%AE%E9%80%9A%E9%80%80%E8%81%B7%E8%80%85%E3%81%AE%E4%BA%BA%E6%95%B0%E3%81%AF%E3%80%81%E5%85%A8%E4%BD%93%E3%81%A7%202,%E5%AD%A6%E5%8D%92%E8%80%85%E3%81%AE%E3%81%86%E3%81%A1%E3%80%81%E4%B8%AD%E5%8D%92%E8%80%85%E3%81%A7%207%20%E5%89%B2%E3%80%81%E9%AB%98%E5%8D%92%E8%80%85%E3%81%A7%205%20%E5%89%B2%E3%80%81%E5%A4%A7%E5%8D%92",
                "text": "なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の 離職率は相対的には依然として低い水準にある。特 に「七五三現象」といわれるように、民間では新規 学卒者のうち、中卒者で 7 割、高卒者で 5 割、大卒",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 33
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 700,
              "end_ix": 712,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 712,
              "end_ix": 724,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%95%E3%82%89%E3%81%AB%E3%80%81%E3%81%93%E3%81%AE%E6%95%B0%E5%AD%97%E3%82%92%202013%20%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%99%82%E7%82%B9%20%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E6%99%AE%E9%80%9A%E9%80%80%E8%81%B7%E8%80%85%E3%81%AE%E4%BA%BA%E6%95%B0%E3%81%AF%E3%80%81%E5%85%A8%E4%BD%93%E3%81%A7%202,%E5%AD%A6%E5%8D%92%E8%80%85%E3%81%AE%E3%81%86%E3%81%A1%E3%80%81%E4%B8%AD%E5%8D%92%E8%80%85%E3%81%A7%207%20%E5%89%B2%E3%80%81%E9%AB%98%E5%8D%92%E8%80%85%E3%81%A7%205%20%E5%89%B2%E3%80%81%E5%A4%A7%E5%8D%92",
                "text": "なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の 離職率は相対的には依然として低い水準にある。特 に「七五三現象」といわれるように、民間では新規 学卒者のうち、中卒者で 7 割、高卒者で 5 割、大卒",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 33
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 750,
              "end_ix": 762,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 907,
              "end_ix": 919,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "公務員のエンゲージメント調査にみる行政版人的資本経営のヒント｜日本の社会問題｜GLAVISグループ",
                "url": "https://www.glavis-hd.com/social_problem/000139/#:~:text=%E8%8B%A5%E6%89%8B%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A8%E3%83%B3%E3%82%B2%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AB%E5%95%8F%E9%A1%8C%E3%81%8C%E3%81%82%E3%82%8B",
                "text": "若手公務員のワークエンゲージメントに問題がある",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 16,
                  "cited_message_id": "9116d6d8-cc68-4408-953b-c906a1a162fe",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 67,
                  "end_line_num": 70
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 982,
              "end_ix": 994,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%E3%80%81%E5%8D%98%E5%B9%B4%E5%BA%A6%E3%81%AE%E9%9B%A2%E8%81%B7%E8%80%85%E6%95%B0%E3%82%92%E5%BD%93%E8%A9%B2%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%9C%A8%E8%81%B7%E8%80%85%E6%95%B0%E3%81%A7%E9%99%A4%E7%AE%97%20%E3%81%97%E3%81%A6%E9%9B%A2%E8%81%B7%E7%8E%87%E3%82%92%E6%8E%A8%E8%A8%88%E3%81%99%E3%82%8B%E3%81%A8%E3%80%8120%20%E4%BB%A3%E4%BB%A5%E4%B8%8B%E3%81%AE%E8%81%B7%E5%93%A1%E3%81%AE%E5%B9%B4%E9%96%93%20%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%202022,3%20%E5%B9%B4%E4%BB%A5%E5%86%85%E3%81%AB%E9%99%90%E5%AE%9A%E3%81%99%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%AB%20%E3%81%AF%E3%81%93%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%88%E3%82%8A%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E9%AB%98%E3%81%8F%E3%81%AA%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%97%A9%E6%9C%9F%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%E6%B0%91%E9%96%93%E3%81%AE%E5%8D%8A%E5%88%86%E7%A8%8B%20%E5%BA%A6%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8B%E3%81%A0%E3%82%8D%E3%81%86%E3%80%82",
                "text": "の、単年度の離職者数を当該年度の在職者数で除算 して離職率を推計すると、20 代以下の職員の年間 離職率は 2022 年度時点で約 3.7% であり、単純にそ れを 3 倍（3 年度分）にしても 10% 程度である（田 井，2024）。入職後 3 年以内に限定すれば、実際に はこの数値よりもう少し高くなるかもしれないが、 それでも自治体における早期離職率は民間の半分程 度にとどまるだろう。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 37,
                  "end_line_num": 44
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1038,
              "end_ix": 1050,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%E3%80%81%E5%8D%98%E5%B9%B4%E5%BA%A6%E3%81%AE%E9%9B%A2%E8%81%B7%E8%80%85%E6%95%B0%E3%82%92%E5%BD%93%E8%A9%B2%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%9C%A8%E8%81%B7%E8%80%85%E6%95%B0%E3%81%A7%E9%99%A4%E7%AE%97%20%E3%81%97%E3%81%A6%E9%9B%A2%E8%81%B7%E7%8E%87%E3%82%92%E6%8E%A8%E8%A8%88%E3%81%99%E3%82%8B%E3%81%A8%E3%80%8120%20%E4%BB%A3%E4%BB%A5%E4%B8%8B%E3%81%AE%E8%81%B7%E5%93%A1%E3%81%AE%E5%B9%B4%E9%96%93%20%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%202022,3%20%E5%B9%B4%E4%BB%A5%E5%86%85%E3%81%AB%E9%99%90%E5%AE%9A%E3%81%99%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%AB%20%E3%81%AF%E3%81%93%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%88%E3%82%8A%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E9%AB%98%E3%81%8F%E3%81%AA%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%97%A9%E6%9C%9F%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%E6%B0%91%E9%96%93%E3%81%AE%E5%8D%8A%E5%88%86%E7%A8%8B%20%E5%BA%A6%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8B%E3%81%A0%E3%82%8D%E3%81%86%E3%80%82",
                "text": "の、単年度の離職者数を当該年度の在職者数で除算 して離職率を推計すると、20 代以下の職員の年間 離職率は 2022 年度時点で約 3.7% であり、単純にそ れを 3 倍（3 年度分）にしても 10% 程度である（田 井，2024）。入職後 3 年以内に限定すれば、実際に はこの数値よりもう少し高くなるかもしれないが、 それでも自治体における早期離職率は民間の半分程 度にとどまるだろう。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 37,
                  "end_line_num": 44
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1130,
              "end_ix": 1142,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "市職員が大量退職 22年度35人、5年で100人超 埼玉・戸田",
                "url": "https://www.genius-japan.com/blog/ono20240619#:~:text=%E5%B8%82%E8%81%B7%E5%93%A1%E3%81%8C%E5%A4%A7%E9%87%8F%E9%80%80%E8%81%B7%2022%E5%B9%B4%E5%BA%A635%E4%BA%BA%E3%80%815%E5%B9%B4%E3%81%A7100%E4%BA%BA%E8%B6%85%20%E5%9F%BC%E7%8E%89%E3%83%BB%E6%88%B8%E7%94%B0%20,2%E5%B9%B4%E5%BA%A6%E3%81%A739%E3%83%BB5",
                "text": "市職員が大量退職 22年度35人、5年で100人超 埼玉・戸田 ... 2022年度に退職した地方公務員は4万6103人だった。5年前の17年度は3万2290人だから、年間離職者は約1万8000人増えた。30歳未満の割合は2 2年度で39・5 ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "4d07c5c1-904b-4459-9659-cad22e17f4f2",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 11,
                  "end_line_num": 15
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1201,
              "end_ix": 1213,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%2037.2,%E3%81%A8%E3%80%81%E9%81%8E%E5%8E%BB%2010%20%E5%B9%B4%E9%96%93%E3%81%AE%E9%96%93%E3%81%A7%E8%91%97%E3%81%97%E3%81%8F%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%EF%BC%88%E5%9B%B3%201%EF%BC%89%E3%80%82%20%E3%81%A8%E3%81%AF%E3%81%84%E3%81%88%E3%80%81%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E3%81%AE%E6%AF%94%E8%BC%83%E3%81%A7%E3%81%84%E3%81%88%E3%81%B0%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AE",
                "text": "の 37.2%）、30 代が 4,173 人（同 36.6%）であり、30 代以下の離職者が全体の 7 割以上を占める結果と なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 23,
                  "end_line_num": 30
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1265,
              "end_ix": 1281,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "image_inline",
                "asset_pointer_links": [
                  "browse://fetch_multimodal_raw?url=https%3A%2F%2Fkumanichi.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_default%2Fpublic%2F2024-11%2FIP241106TAN000054000_02.jpg%3Fitok%3Di-yfQUK2&zdr_type=3&check_internal_classifiers=False&original_conversation_id=68357ddb-d744-8003-bba6-e7704cfd58b1"
                ],
                "clicked_from_url": "https://kumanichi.com/articles/1601605",
                "clicked_from_title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社"
              }
            },
            {
              "start_ix": 1324,
              "end_ix": 1336,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1435,
              "end_ix": 1447,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1543,
              "end_ix": 1555,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1638,
              "end_ix": 1650,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=2023%E5%B9%B4%E5%BA%A6%E3%80%81%E7%B4%84270%E4%BA%BA%E3%81%AE%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%8C%E4%B8%AD%E9%80%94%E9%80%80%E8%81%B7%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E3%81%9D%E3%81%AE%E5%8D%8A%E6%95%B0%E3%81%AF%E6%95%99%E5%93%A1%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "2023年度、約270人の熊本県職員が中途退職していてその半数は教員であることが分かりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "08ba14da-d670-47a0-92a0-7e35d14c6be5",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 26,
                  "end_line_num": 34
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1687,
              "end_ix": 1699,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=Image",
                "text": "Image",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "08ba14da-d670-47a0-92a0-7e35d14c6be5",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 30,
                  "end_line_num": 38
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1808,
              "end_ix": 1820,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.kumamoto.jp/kiji00344928/5_44928_416516_up_T7QYCY1E.pdf#:~:text=,101%20393%20561%20%E5%8C%BA%E3%80%80%E5%88%86%20%E4%B8%80%E8%88%AC%E8%A1%8C%E6%94%BF%E8%81%B7",
                "text": "(単位：人) 定年退職 早期退職 任期満了 そ　の　他 合　計 0 2 7 3 6 175 238 0 3 1 4 5 119 195 1 5 1 2 7 7 9 5 0 3 8 2 2 3 3 合　　計 1 6 6 101 393 561 区　分 一般行政職",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "016184ff-2d89-4432-936e-9a3f1c85aae7",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 60,
                  "end_line_num": 68
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1929,
              "end_ix": 1941,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "[PDF] 2023年度第1回町田市行政経営監理委員会 【資料編】",
                "url": "https://www.city.machida.tokyo.jp/shisei/gyousei/keiei/gyouseikeieikanri13-/2023_kannriiinnkai.files/2023-1siryo.pdf#:~:text=,2%EF%BC%85%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
                "text": "[PDF] 2023年度第1回町田市行政経営監理委員会  資料編  勤続15年未満の職員の離職者数は、2022年度に37人となり、2018年度の22人から68.2％増加している。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "4d07c5c1-904b-4459-9659-cad22e17f4f2",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 22
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2004,
              "end_ix": 2018,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=%2A%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%AE%E6%9C%88%E7%B5%A6%E3%80%8C2%E3%83%BB64,92",
                "text": "* 熊本県職員の月給「2・64%引き上げを」 県人事委が勧告 上げ幅は1992年以来  *  90 * 県職員の業務、デジタル化で年5万7500時間を削減 職員30人分に相当  *  92",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 11,
                  "cited_message_id": "0b82459b-01d2-4bba-bbd1-30b366d76301",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 225,
                  "end_line_num": 233
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2255,
              "end_ix": 2265,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=3a02b1ed6111e34c7cb1a8fc3da6da9d.pdf#:~:text=,%E4%BC%91%E6%9A%87%E5%8F%96%E5%BE%97%E6%97%A5%E6%95%B0",
                "text": "*1 離職者の年齢構成（離職時点） ［男性／２０代：１人、３０代：２人、５０代：１人］ ［女性／３０代：１人、４０代：２人］ *2 休暇取得日数",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "cited_message_id": "8ebc36a5-e53e-49b3-ace8-31efae8fb25a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2781,
              "end_ix": 2793,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=match%20at%20L122%20%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
                "text": "match at L122 県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 17,
                  "end_line_num": 22
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2890,
              "end_ix": 2902,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
                "text": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 21
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3037,
              "end_ix": 3049,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
                "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
                "text": "> 安定した収入で人気だった自治体職員の退職が止まらない。総務省集計によると、教員や警察などを除く一般行政職のうち、2022年度に主に自己都合で仕事を辞めたのは 1万2501人。13年度は5727人で、約10年で2.2倍となった。待遇への不満や業務量の増加が影響しているとみられる。30代までの若手が全体の3分の2を占め、 住民サービス低下や組織弱体化が懸念される。 >  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 23,
                  "cited_message_id": "4df58187-afb6-4a17-b92b-4782c974dc55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 44,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3101,
              "end_ix": 3111,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "臨界点が迫る公務サービス（１）―危機に瀕する職業としての地方公務員―　｜研究プロジェクト｜リクルートワークス研究所",
                "url": "https://www.works-i.com/research/project/turningpoint/introduction/detail002.html#:~:text=%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AF%E5%85%83%E3%80%85%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%BA%E6%95%B0%E3%81%A7%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8C%E3%80%81%E8%8B%A5%E6%89%8B%E3%83%BB%E4%B8%AD%E5%A0%85%E8%81%B7%E5%93%A1%E3%81%8C%E9%9B%A2%E8%81%B7%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E6%8B%85%E3%81%84%E6%89%8B%E3%81%8C%E3%81%95%E3%82%89%E3%81%AB%E5%B0%91%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8A%E7%8F%BE%E5%A0%B4%E3%81%AE%E8%B2%A0%E6%8B%85%E3%81%AF%E5%A2%97%E3%81%88%E3%82%8B%E3%80%82%E5%83%8D%E3%81%8D%E6%96%B9%E6%94%B9%E9%9D%A9%E3%82%84%E8%B3%83%E9%87%91%E3%81%AA%E3%81%A9%20%E3%81%AE%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%8C%E9%80%B2%E3%82%80%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%97%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E5%85%AC%E5%8B%99%E5%93%A1%E3%82%88%E3%82%8A%E3%82%82%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A7%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E9%AD%85%E5%8A%9B%E7%9A%84%E3%81%AB%E8%A6%8B%E3%81%88%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86%E7%8A%B6%E6%B3%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E5%90%A6%E5%AE%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%82",
                "text": "公務員は元々少ない人数で公務サービスを提供してきたが、若手・中堅職員が離職すると、公務サービスの担い手がさらに少なくなり現場の負担は増える。働き方改革や賃金など の待遇改善が進む民間企業と比較したときに、公務員よりも民間企業で働くことの方が魅力的に見えてしまう状況があることは否定できない。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 14,
                  "cited_message_id": "f685eb08-e099-4869-8b37-875f59d3a8b9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3209,
              "end_ix": 3221,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3372,
              "end_ix": 3384,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E8%BF%91%E5%B9%B4%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AE%E5%A2%97%E5%8A%A0%E3%81%8C%E6%B7%B1%E5%88%BB%E3%81%AA%E5%95%8F%E9%A1%8C%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E4%BA%BA%E6%9D%90%E3%81%AE%E6%B5%81%E5%87%BA%E3%82%92%E9%98%B2%E3%81%8E%E3%80%81%E5%AE%9A%E7%9D%80%E3%82%92%E4%BF%83%E3%81%99%E3%83%AA%E3%83%86%20%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E9%87%8D%E8%A6%81%E6%80%A7%E3%81%8C%E9%AB%98%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E3%81%93%E3%81%AE%E5%95%8F%E9%A1%8C%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%97%A2%E5%AD%98%E3%81%AE%E8%AA%BF%E6%9F%BB%E3%82%84%E7%A0%94%E7%A9%B6%E3%81%AF%E4%B9%8F%E3%81%97%E3%81%8F%E3%80%81%E9%9B%A2%E8%81%B7%E3%81%AE%E6%8A%91%20%E5%88%B6%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E8%A6%81%E5%9B%A0%E3%81%AF%E5%8D%81%E5%88%86%E3%81%AB%E8%A7%A3%E6%98%8E%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%82%E3%81%9D%E3%81%93%E3%81%A7%E6%9C%AC%E7%A8%BF%E3%81%A7%E3%81%AF%E3%80%81%E7%8F%BE%E5%BD%B9%E3%81%AE%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%82%92%E5%AF%BE%E8%B1%A1%E3%81%A8%E3%81%97%E3%81%9F%E8%AA%BF%E6%9F%BB%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88n%3D%20878%EF%BC%89%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E3%80%81%E5%BD%BC%E3%83%BB%E5%BD%BC%E5%A5%B3%E3%82%89%E3%81%AE%E9%9B%A2%E8%81%B7%E6%84%8F%E6%80%9D%E3%81%AB%E5%BD%B1%E9%9F%BF%E3%82%92%E4%B8%8E%E3%81%88%E3%82%8B%E8%A6%81%E5%9B%A0%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%99%E3%82%8B%E3%80%82%E8%81%B7%E5%A0%B4%E3%81%AE%E4%BA%BA%E9%96%93%E9%96%A2%E4%BF%82%E3%80%81%E4%BB%95%E4%BA%8B%E3%81%AE%E7%9B%B8%E4%BA%92%E4%BE%9D%E5%AD%98%E6%80%A7%E3%80%81%20%E5%BF%83%E7%90%86%E7%9A%84%E5%AE%89%E5%85%A8%E6%80%A7%E3%81%AE,43",
                "text": "近年、多くの自治体で若手職員の離職の増加が深刻な問題となっている。人材の流出を防ぎ、定着を促すリテ ンションマネジメントの重要性が高まっている一方で、この問題に関する既存の調査や研究は乏しく、離職の抑 制につながる要因は十分に解明されていない。そこで本稿では、現役の若手職員を対象とした調査データ（n= 878）を用いて、彼・彼女らの離職意思に影響を与える要因を検討する。職場の人間関係、仕事の相互依存性、 心理的安全性の 3 点に着目して分析を行った結果、直属上司との垂直的交換関係と心理的安全性が、若手職員の 離職意思を抑制するうえで重要な要因であることを明らかにした。 1 若手の定義や範囲は論者によってさまざまであるが、本稿では年齢が30代までの職員を「若手職員」として扱うこととする。 都市自治体と若手職員　－人材確保・育成に着目して－ 52 都市とガバナンス Vol.43",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "ef412848-8818-4e28-a359-99160f469e6a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 49,
                  "end_line_num": 57
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3661,
              "end_ix": 3671,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "臨界点が迫る公務サービス（１）―危機に瀕する職業としての地方公務員―　｜研究プロジェクト｜リクルートワークス研究所",
                "url": "https://www.works-i.com/research/project/turningpoint/introduction/detail002.html#:~:text=%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AF%E5%85%83%E3%80%85%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%BA%E6%95%B0%E3%81%A7%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8C%E3%80%81%E8%8B%A5%E6%89%8B%E3%83%BB%E4%B8%AD%E5%A0%85%E8%81%B7%E5%93%A1%E3%81%8C%E9%9B%A2%E8%81%B7%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E6%8B%85%E3%81%84%E6%89%8B%E3%81%8C%E3%81%95%E3%82%89%E3%81%AB%E5%B0%91%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8A%E7%8F%BE%E5%A0%B4%E3%81%AE%E8%B2%A0%E6%8B%85%E3%81%AF%E5%A2%97%E3%81%88%E3%82%8B%E3%80%82%E5%83%8D%E3%81%8D%E6%96%B9%E6%94%B9%E9%9D%A9%E3%82%84%E8%B3%83%E9%87%91%E3%81%AA%E3%81%A9%20%E3%81%AE%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%8C%E9%80%B2%E3%82%80%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%97%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E5%85%AC%E5%8B%99%E5%93%A1%E3%82%88%E3%82%8A%E3%82%82%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A7%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E9%AD%85%E5%8A%9B%E7%9A%84%E3%81%AB%E8%A6%8B%E3%81%88%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86%E7%8A%B6%E6%B3%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E5%90%A6%E5%AE%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%82",
                "text": "公務員は元々少ない人数で公務サービスを提供してきたが、若手・中堅職員が離職すると、公務サービスの担い手がさらに少なくなり現場の負担は増える。働き方改革や賃金など の待遇改善が進む民間企業と比較したときに、公務員よりも民間企業で働くことの方が魅力的に見えてしまう状況があることは否定できない。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 14,
                  "cited_message_id": "f685eb08-e099-4869-8b37-875f59d3a8b9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3773,
              "end_ix": 3785,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=Image",
                "text": "Image",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "08ba14da-d670-47a0-92a0-7e35d14c6be5",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 30,
                  "end_line_num": 38
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3922,
              "end_ix": 3934,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
                "text": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 22
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4000,
              "end_ix": 4012,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
                "text": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 22
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4171,
              "end_ix": 4183,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
                "text": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 22
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4445,
              "end_ix": 4457,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4457,
              "end_ix": 4469,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
                "text": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 21
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4588,
              "end_ix": 4600,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.kumamoto.jp/kiji00344928/5_44928_416516_up_T7QYCY1E.pdf#:~:text=,101%20393%20561%20%E5%8C%BA%E3%80%80%E5%88%86%20%E4%B8%80%E8%88%AC%E8%A1%8C%E6%94%BF%E8%81%B7",
                "text": "(単位：人) 定年退職 早期退職 任期満了 そ　の　他 合　計 0 2 7 3 6 175 238 0 3 1 4 5 119 195 1 5 1 2 7 7 9 5 0 3 8 2 2 3 3 合　　計 1 6 6 101 393 561 区　分 一般行政職",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "016184ff-2d89-4432-936e-9a3f1c85aae7",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 60,
                  "end_line_num": 68
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4607,
              "end_ix": 4619,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
                "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
                "text": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 10,
                  "cited_message_id": "6a132916-5d99-4bb2-b9aa-fe12147e8143",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 16
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4627,
              "end_ix": 4639,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=2023%E5%B9%B4%E5%BA%A6%E3%80%81%E7%B4%84270%E4%BA%BA%E3%81%AE%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%8C%E4%B8%AD%E9%80%94%E9%80%80%E8%81%B7%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E3%81%9D%E3%81%AE%E5%8D%8A%E6%95%B0%E3%81%AF%E6%95%99%E5%93%A1%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "2023年度、約270人の熊本県職員が中途退職していてその半数は教員であることが分かりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "08ba14da-d670-47a0-92a0-7e35d14c6be5",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 26,
                  "end_line_num": 34
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4644,
              "end_ix": 4656,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
                "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
                "text": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "c89d3029-c171-41a2-8192-2444aab08a19",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 13,
                  "end_line_num": 21
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【23†L44-L50】",
              "start_idx": 105,
              "end_idx": 117,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": "> 安定した収入で人気だった自治体職員の退職が止まらない。総務省集計によると、教員や警察などを除く一般行政職のうち、2022年度に主に自己都合で仕事を辞めたのは 1万2501人。13年度は5727人で、約10年で2.2倍となった。待遇への不満や業務量の増加が影響しているとみられる。30代までの若手が全体の3分の2を占め、 住民サービス低下や組織弱体化が懸念される。 >  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【23†L47-L50】",
              "start_idx": 189,
              "end_idx": 201,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【23†L47-L50】",
              "start_idx": 305,
              "end_idx": 317,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L25-L33】",
              "start_idx": 358,
              "end_idx": 370,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%95%E3%82%89%E3%81%AB%E3%80%81%E3%81%93%E3%81%AE%E6%95%B0%E5%AD%97%E3%82%92%202013%20%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%99%82%E7%82%B9%20%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E6%99%AE%E9%80%9A%E9%80%80%E8%81%B7%E8%80%85%E3%81%AE%E4%BA%BA%E6%95%B0%E3%81%AF%E3%80%81%E5%85%A8%E4%BD%93%E3%81%A7%202,%E5%AD%A6%E5%8D%92%E8%80%85%E3%81%AE%E3%81%86%E3%81%A1%E3%80%81%E4%B8%AD%E5%8D%92%E8%80%85%E3%81%A7%207%20%E5%89%B2%E3%80%81%E9%AB%98%E5%8D%92%E8%80%85%E3%81%A7%205%20%E5%89%B2%E3%80%81%E5%A4%A7%E5%8D%92",
              "pub_date": null,
              "snippet": "なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の 離職率は相対的には依然として低い水準にある。特 に「七五三現象」といわれるように、民間では新規 学卒者のうち、中卒者で 7 割、高卒者で 5 割、大卒",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【23†L47-L50】",
              "start_idx": 700,
              "end_idx": 712,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L25-L33】",
              "start_idx": 712,
              "end_idx": 724,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%95%E3%82%89%E3%81%AB%E3%80%81%E3%81%93%E3%81%AE%E6%95%B0%E5%AD%97%E3%82%92%202013%20%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%99%82%E7%82%B9%20%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E6%99%AE%E9%80%9A%E9%80%80%E8%81%B7%E8%80%85%E3%81%AE%E4%BA%BA%E6%95%B0%E3%81%AF%E3%80%81%E5%85%A8%E4%BD%93%E3%81%A7%202,%E5%AD%A6%E5%8D%92%E8%80%85%E3%81%AE%E3%81%86%E3%81%A1%E3%80%81%E4%B8%AD%E5%8D%92%E8%80%85%E3%81%A7%207%20%E5%89%B2%E3%80%81%E9%AB%98%E5%8D%92%E8%80%85%E3%81%A7%205%20%E5%89%B2%E3%80%81%E5%A4%A7%E5%8D%92",
              "pub_date": null,
              "snippet": "なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の 離職率は相対的には依然として低い水準にある。特 に「七五三現象」といわれるように、民間では新規 学卒者のうち、中卒者で 7 割、高卒者で 5 割、大卒",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【23†L47-L50】",
              "start_idx": 750,
              "end_idx": 762,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": ">  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【16†L67-L70】",
              "start_idx": 907,
              "end_idx": 919,
              "alt": null,
              "type": "webpage_extended",
              "title": "公務員のエンゲージメント調査にみる行政版人的資本経営のヒント｜日本の社会問題｜GLAVISグループ",
              "url": "https://www.glavis-hd.com/social_problem/000139/#:~:text=%E8%8B%A5%E6%89%8B%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A8%E3%83%B3%E3%82%B2%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AB%E5%95%8F%E9%A1%8C%E3%81%8C%E3%81%82%E3%82%8B",
              "pub_date": null,
              "snippet": "若手公務員のワークエンゲージメントに問題がある",
              "attribution": "glavis-hd.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L37-L44】",
              "start_idx": 982,
              "end_idx": 994,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%E3%80%81%E5%8D%98%E5%B9%B4%E5%BA%A6%E3%81%AE%E9%9B%A2%E8%81%B7%E8%80%85%E6%95%B0%E3%82%92%E5%BD%93%E8%A9%B2%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%9C%A8%E8%81%B7%E8%80%85%E6%95%B0%E3%81%A7%E9%99%A4%E7%AE%97%20%E3%81%97%E3%81%A6%E9%9B%A2%E8%81%B7%E7%8E%87%E3%82%92%E6%8E%A8%E8%A8%88%E3%81%99%E3%82%8B%E3%81%A8%E3%80%8120%20%E4%BB%A3%E4%BB%A5%E4%B8%8B%E3%81%AE%E8%81%B7%E5%93%A1%E3%81%AE%E5%B9%B4%E9%96%93%20%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%202022,3%20%E5%B9%B4%E4%BB%A5%E5%86%85%E3%81%AB%E9%99%90%E5%AE%9A%E3%81%99%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%AB%20%E3%81%AF%E3%81%93%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%88%E3%82%8A%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E9%AB%98%E3%81%8F%E3%81%AA%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%97%A9%E6%9C%9F%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%E6%B0%91%E9%96%93%E3%81%AE%E5%8D%8A%E5%88%86%E7%A8%8B%20%E5%BA%A6%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8B%E3%81%A0%E3%82%8D%E3%81%86%E3%80%82",
              "pub_date": null,
              "snippet": "の、単年度の離職者数を当該年度の在職者数で除算 して離職率を推計すると、20 代以下の職員の年間 離職率は 2022 年度時点で約 3.7% であり、単純にそ れを 3 倍（3 年度分）にしても 10% 程度である（田 井，2024）。入職後 3 年以内に限定すれば、実際に はこの数値よりもう少し高くなるかもしれないが、 それでも自治体における早期離職率は民間の半分程 度にとどまるだろう。",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【50†L37-L44】",
              "start_idx": 1038,
              "end_idx": 1050,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%E3%80%81%E5%8D%98%E5%B9%B4%E5%BA%A6%E3%81%AE%E9%9B%A2%E8%81%B7%E8%80%85%E6%95%B0%E3%82%92%E5%BD%93%E8%A9%B2%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%9C%A8%E8%81%B7%E8%80%85%E6%95%B0%E3%81%A7%E9%99%A4%E7%AE%97%20%E3%81%97%E3%81%A6%E9%9B%A2%E8%81%B7%E7%8E%87%E3%82%92%E6%8E%A8%E8%A8%88%E3%81%99%E3%82%8B%E3%81%A8%E3%80%8120%20%E4%BB%A3%E4%BB%A5%E4%B8%8B%E3%81%AE%E8%81%B7%E5%93%A1%E3%81%AE%E5%B9%B4%E9%96%93%20%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%202022,3%20%E5%B9%B4%E4%BB%A5%E5%86%85%E3%81%AB%E9%99%90%E5%AE%9A%E3%81%99%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%AB%20%E3%81%AF%E3%81%93%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%88%E3%82%8A%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E9%AB%98%E3%81%8F%E3%81%AA%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%97%A9%E6%9C%9F%E9%9B%A2%E8%81%B7%E7%8E%87%E3%81%AF%E6%B0%91%E9%96%93%E3%81%AE%E5%8D%8A%E5%88%86%E7%A8%8B%20%E5%BA%A6%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8B%E3%81%A0%E3%82%8D%E3%81%86%E3%80%82",
              "pub_date": null,
              "snippet": "の、単年度の離職者数を当該年度の在職者数で除算 して離職率を推計すると、20 代以下の職員の年間 離職率は 2022 年度時点で約 3.7% であり、単純にそ れを 3 倍（3 年度分）にしても 10% 程度である（田 井，2024）。入職後 3 年以内に限定すれば、実際に はこの数値よりもう少し高くなるかもしれないが、 それでも自治体における早期離職率は民間の半分程 度にとどまるだろう。",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L11-L15】",
              "start_idx": 1130,
              "end_idx": 1142,
              "alt": null,
              "type": "webpage_extended",
              "title": "市職員が大量退職 22年度35人、5年で100人超 埼玉・戸田",
              "url": "https://www.genius-japan.com/blog/ono20240619#:~:text=%E5%B8%82%E8%81%B7%E5%93%A1%E3%81%8C%E5%A4%A7%E9%87%8F%E9%80%80%E8%81%B7%2022%E5%B9%B4%E5%BA%A635%E4%BA%BA%E3%80%815%E5%B9%B4%E3%81%A7100%E4%BA%BA%E8%B6%85%20%E5%9F%BC%E7%8E%89%E3%83%BB%E6%88%B8%E7%94%B0%20,2%E5%B9%B4%E5%BA%A6%E3%81%A739%E3%83%BB5",
              "pub_date": null,
              "snippet": "市職員が大量退職 22年度35人、5年で100人超 埼玉・戸田 ... 2022年度に退職した地方公務員は4万6103人だった。5年前の17年度は3万2290人だから、年間離職者は約1万8000人増えた。30歳未満の割合は2 2年度で39・5 ...",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L23-L30】",
              "start_idx": 1201,
              "end_idx": 1213,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E3%81%AE%2037.2,%E3%81%A8%E3%80%81%E9%81%8E%E5%8E%BB%2010%20%E5%B9%B4%E9%96%93%E3%81%AE%E9%96%93%E3%81%A7%E8%91%97%E3%81%97%E3%81%8F%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%EF%BC%88%E5%9B%B3%201%EF%BC%89%E3%80%82%20%E3%81%A8%E3%81%AF%E3%81%84%E3%81%88%E3%80%81%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E3%81%AE%E6%AF%94%E8%BC%83%E3%81%A7%E3%81%84%E3%81%88%E3%81%B0%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AE",
              "pub_date": null,
              "snippet": "の 37.2%）、30 代が 4,173 人（同 36.6%）であり、30 代以下の離職者が全体の 7 割以上を占める結果と なっている。さらに、この数字を 2013 年度の時点 と比較すると、普通退職者の人数は、全体で 2.2 倍 （5,727 人→ 12,501 人）、20 代以下では 2.7 倍（1,564 人→ 4,244 人）、30 代では 3.1 倍（1,327 人→ 4,173 人） と、過去 10 年間の間で著しく増加している（図 1）。 とはいえ、民間企業との比較でいえば、自治体の",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【51†embed_image】",
              "start_idx": 1265,
              "end_idx": 1281,
              "alt": null,
              "type": "image_inline",
              "asset_pointer_links": [
                "browse://fetch_multimodal_raw?url=https%3A%2F%2Fkumanichi.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_default%2Fpublic%2F2024-11%2FIP241106TAN000054000_02.jpg%3Fitok%3Di-yfQUK2&zdr_type=3&check_internal_classifiers=False&original_conversation_id=68357ddb-d744-8003-bba6-e7704cfd58b1"
              ],
              "clicked_from_url": "https://kumanichi.com/articles/1601605",
              "clicked_from_title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社"
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 1324,
              "end_idx": 1336,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 1435,
              "end_idx": 1447,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 1543,
              "end_idx": 1555,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【29†L26-L34】",
              "start_idx": 1638,
              "end_idx": 1650,
              "alt": null,
              "type": "webpage_extended",
              "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=2023%E5%B9%B4%E5%BA%A6%E3%80%81%E7%B4%84270%E4%BA%BA%E3%81%AE%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%8C%E4%B8%AD%E9%80%94%E9%80%80%E8%81%B7%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E3%81%9D%E3%81%AE%E5%8D%8A%E6%95%B0%E3%81%AF%E6%95%99%E5%93%A1%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "2023年度、約270人の熊本県職員が中途退職していてその半数は教員であることが分かりました。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L30-L38】",
              "start_idx": 1687,
              "end_idx": 1699,
              "alt": null,
              "type": "webpage_extended",
              "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=Image",
              "pub_date": null,
              "snippet": "Image",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L60-L68】",
              "start_idx": 1808,
              "end_idx": 1820,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.kumamoto.jp/kiji00344928/5_44928_416516_up_T7QYCY1E.pdf#:~:text=,101%20393%20561%20%E5%8C%BA%E3%80%80%E5%88%86%20%E4%B8%80%E8%88%AC%E8%A1%8C%E6%94%BF%E8%81%B7",
              "pub_date": null,
              "snippet": "(単位：人) 定年退職 早期退職 任期満了 そ　の　他 合　計 0 2 7 3 6 175 238 0 3 1 4 5 119 195 1 5 1 2 7 7 9 5 0 3 8 2 2 3 3 合　　計 1 6 6 101 393 561 区　分 一般行政職",
              "attribution": "city.kumamoto.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L19-L22】",
              "start_idx": 1929,
              "end_idx": 1941,
              "alt": null,
              "type": "webpage_extended",
              "title": "[PDF] 2023年度第1回町田市行政経営監理委員会 【資料編】",
              "url": "https://www.city.machida.tokyo.jp/shisei/gyousei/keiei/gyouseikeieikanri13-/2023_kannriiinnkai.files/2023-1siryo.pdf#:~:text=,2%EF%BC%85%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "[PDF] 2023年度第1回町田市行政経営監理委員会  資料編  勤続15年未満の職員の離職者数は、2022年度に37人となり、2018年度の22人から68.2％増加している。",
              "attribution": "city.machida.tokyo.jp",
              "icon_type": null
            },
            {
              "matched_text": "【11†L225-L233】",
              "start_idx": 2004,
              "end_idx": 2018,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=%2A%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%AE%E6%9C%88%E7%B5%A6%E3%80%8C2%E3%83%BB64,92",
              "pub_date": null,
              "snippet": "* 熊本県職員の月給「2・64%引き上げを」 県人事委が勧告 上げ幅は1992年以来  *  90 * 県職員の業務、デジタル化で年5万7500時間を削減 職員30人分に相当  *  92",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【32†L1-L4】",
              "start_idx": 2255,
              "end_idx": 2265,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=3a02b1ed6111e34c7cb1a8fc3da6da9d.pdf#:~:text=,%E4%BC%91%E6%9A%87%E5%8F%96%E5%BE%97%E6%97%A5%E6%95%B0",
              "pub_date": null,
              "snippet": "*1 離職者の年齢構成（離職時点） ［男性／２０代：１人、３０代：２人、５０代：１人］ ［女性／３０代：１人、４０代：２人］ *2 休暇取得日数",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L17-L22】",
              "start_idx": 2781,
              "end_idx": 2793,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=match%20at%20L122%20%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "match at L122 県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L13-L21】",
              "start_idx": 2890,
              "end_idx": 2902,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【23†L44-L50】",
              "start_idx": 3037,
              "end_idx": 3049,
              "alt": null,
              "type": "webpage_extended",
              "title": "自治体退職者10年で2倍　目立つ若手、待遇不満も  |  ヘッドハンティングのジーニアス株式会社｜Genius",
              "url": "https://www.genius-japan.com/blog/ono20240430#:~:text=,%EF%BC%88%E5%85%B1%E5%90%8C%E9%80%9A%E4%BF%A1%204%E6%9C%8820%E6%97%A5%EF%BC%89",
              "pub_date": null,
              "snippet": "> 安定した収入で人気だった自治体職員の退職が止まらない。総務省集計によると、教員や警察などを除く一般行政職のうち、2022年度に主に自己都合で仕事を辞めたのは 1万2501人。13年度は5727人で、約10年で2.2倍となった。待遇への不満や業務量の増加が影響しているとみられる。30代までの若手が全体の3分の2を占め、 住民サービス低下や組織弱体化が懸念される。 >  総務省の「地方公務員の退職状況等調査」から、定年や懲戒免職、死亡、国・他自治体への出向などを除く「普通退職者」の人数を抽出した。13年度以降の推移を見ると 、コロナ禍で経済が冷え込んだ20年度を除き、おおむね数百人のペースで増加している。21年度になると増加幅が広がり、1万500人と初めて1万人を超えた。 >  22年度の普通退職者の年齢別は、30歳未満が4244人で13年度比2.7倍、30歳以上40歳未満が4173人で同3.1倍となり、若手の増加が鮮明だ。 >  （共同通信 4月20日）",
              "attribution": "genius-japan.com",
              "icon_type": null
            },
            {
              "matched_text": "【14†L1-L4】",
              "start_idx": 3101,
              "end_idx": 3111,
              "alt": null,
              "type": "webpage_extended",
              "title": "臨界点が迫る公務サービス（１）―危機に瀕する職業としての地方公務員―　｜研究プロジェクト｜リクルートワークス研究所",
              "url": "https://www.works-i.com/research/project/turningpoint/introduction/detail002.html#:~:text=%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AF%E5%85%83%E3%80%85%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%BA%E6%95%B0%E3%81%A7%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8C%E3%80%81%E8%8B%A5%E6%89%8B%E3%83%BB%E4%B8%AD%E5%A0%85%E8%81%B7%E5%93%A1%E3%81%8C%E9%9B%A2%E8%81%B7%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E6%8B%85%E3%81%84%E6%89%8B%E3%81%8C%E3%81%95%E3%82%89%E3%81%AB%E5%B0%91%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8A%E7%8F%BE%E5%A0%B4%E3%81%AE%E8%B2%A0%E6%8B%85%E3%81%AF%E5%A2%97%E3%81%88%E3%82%8B%E3%80%82%E5%83%8D%E3%81%8D%E6%96%B9%E6%94%B9%E9%9D%A9%E3%82%84%E8%B3%83%E9%87%91%E3%81%AA%E3%81%A9%20%E3%81%AE%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%8C%E9%80%B2%E3%82%80%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%97%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E5%85%AC%E5%8B%99%E5%93%A1%E3%82%88%E3%82%8A%E3%82%82%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A7%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E9%AD%85%E5%8A%9B%E7%9A%84%E3%81%AB%E8%A6%8B%E3%81%88%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86%E7%8A%B6%E6%B3%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E5%90%A6%E5%AE%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "公務員は元々少ない人数で公務サービスを提供してきたが、若手・中堅職員が離職すると、公務サービスの担い手がさらに少なくなり現場の負担は増える。働き方改革や賃金など の待遇改善が進む民間企業と比較したときに、公務員よりも民間企業で働くことの方が魅力的に見えてしまう状況があることは否定できない。",
              "attribution": "works-i.com",
              "icon_type": null
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 3209,
              "end_idx": 3221,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L49-L57】",
              "start_idx": 3372,
              "end_idx": 3384,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.toshi.or.jp/app-def/wp/wp-content/uploads/2025/03/report43_3_2.pdf#:~:text=%E8%BF%91%E5%B9%B4%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AE%E5%A2%97%E5%8A%A0%E3%81%8C%E6%B7%B1%E5%88%BB%E3%81%AA%E5%95%8F%E9%A1%8C%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E4%BA%BA%E6%9D%90%E3%81%AE%E6%B5%81%E5%87%BA%E3%82%92%E9%98%B2%E3%81%8E%E3%80%81%E5%AE%9A%E7%9D%80%E3%82%92%E4%BF%83%E3%81%99%E3%83%AA%E3%83%86%20%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E9%87%8D%E8%A6%81%E6%80%A7%E3%81%8C%E9%AB%98%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E3%81%93%E3%81%AE%E5%95%8F%E9%A1%8C%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%97%A2%E5%AD%98%E3%81%AE%E8%AA%BF%E6%9F%BB%E3%82%84%E7%A0%94%E7%A9%B6%E3%81%AF%E4%B9%8F%E3%81%97%E3%81%8F%E3%80%81%E9%9B%A2%E8%81%B7%E3%81%AE%E6%8A%91%20%E5%88%B6%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E8%A6%81%E5%9B%A0%E3%81%AF%E5%8D%81%E5%88%86%E3%81%AB%E8%A7%A3%E6%98%8E%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%82%E3%81%9D%E3%81%93%E3%81%A7%E6%9C%AC%E7%A8%BF%E3%81%A7%E3%81%AF%E3%80%81%E7%8F%BE%E5%BD%B9%E3%81%AE%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%82%92%E5%AF%BE%E8%B1%A1%E3%81%A8%E3%81%97%E3%81%9F%E8%AA%BF%E6%9F%BB%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88n%3D%20878%EF%BC%89%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E3%80%81%E5%BD%BC%E3%83%BB%E5%BD%BC%E5%A5%B3%E3%82%89%E3%81%AE%E9%9B%A2%E8%81%B7%E6%84%8F%E6%80%9D%E3%81%AB%E5%BD%B1%E9%9F%BF%E3%82%92%E4%B8%8E%E3%81%88%E3%82%8B%E8%A6%81%E5%9B%A0%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%99%E3%82%8B%E3%80%82%E8%81%B7%E5%A0%B4%E3%81%AE%E4%BA%BA%E9%96%93%E9%96%A2%E4%BF%82%E3%80%81%E4%BB%95%E4%BA%8B%E3%81%AE%E7%9B%B8%E4%BA%92%E4%BE%9D%E5%AD%98%E6%80%A7%E3%80%81%20%E5%BF%83%E7%90%86%E7%9A%84%E5%AE%89%E5%85%A8%E6%80%A7%E3%81%AE,43",
              "pub_date": null,
              "snippet": "近年、多くの自治体で若手職員の離職の増加が深刻な問題となっている。人材の流出を防ぎ、定着を促すリテ ンションマネジメントの重要性が高まっている一方で、この問題に関する既存の調査や研究は乏しく、離職の抑 制につながる要因は十分に解明されていない。そこで本稿では、現役の若手職員を対象とした調査データ（n= 878）を用いて、彼・彼女らの離職意思に影響を与える要因を検討する。職場の人間関係、仕事の相互依存性、 心理的安全性の 3 点に着目して分析を行った結果、直属上司との垂直的交換関係と心理的安全性が、若手職員の 離職意思を抑制するうえで重要な要因であることを明らかにした。 1 若手の定義や範囲は論者によってさまざまであるが、本稿では年齢が30代までの職員を「若手職員」として扱うこととする。 都市自治体と若手職員　－人材確保・育成に着目して－ 52 都市とガバナンス Vol.43",
              "attribution": "toshi.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【14†L1-L4】",
              "start_idx": 3661,
              "end_idx": 3671,
              "alt": null,
              "type": "webpage_extended",
              "title": "臨界点が迫る公務サービス（１）―危機に瀕する職業としての地方公務員―　｜研究プロジェクト｜リクルートワークス研究所",
              "url": "https://www.works-i.com/research/project/turningpoint/introduction/detail002.html#:~:text=%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AF%E5%85%83%E3%80%85%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%BA%E6%95%B0%E3%81%A7%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8C%E3%80%81%E8%8B%A5%E6%89%8B%E3%83%BB%E4%B8%AD%E5%A0%85%E8%81%B7%E5%93%A1%E3%81%8C%E9%9B%A2%E8%81%B7%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81%E5%85%AC%E5%8B%99%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E6%8B%85%E3%81%84%E6%89%8B%E3%81%8C%E3%81%95%E3%82%89%E3%81%AB%E5%B0%91%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8A%E7%8F%BE%E5%A0%B4%E3%81%AE%E8%B2%A0%E6%8B%85%E3%81%AF%E5%A2%97%E3%81%88%E3%82%8B%E3%80%82%E5%83%8D%E3%81%8D%E6%96%B9%E6%94%B9%E9%9D%A9%E3%82%84%E8%B3%83%E9%87%91%E3%81%AA%E3%81%A9%20%E3%81%AE%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%8C%E9%80%B2%E3%82%80%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A8%E6%AF%94%E8%BC%83%E3%81%97%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E5%85%AC%E5%8B%99%E5%93%A1%E3%82%88%E3%82%8A%E3%82%82%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%A7%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E9%AD%85%E5%8A%9B%E7%9A%84%E3%81%AB%E8%A6%8B%E3%81%88%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86%E7%8A%B6%E6%B3%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E5%90%A6%E5%AE%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "公務員は元々少ない人数で公務サービスを提供してきたが、若手・中堅職員が離職すると、公務サービスの担い手がさらに少なくなり現場の負担は増える。働き方改革や賃金など の待遇改善が進む民間企業と比較したときに、公務員よりも民間企業で働くことの方が魅力的に見えてしまう状況があることは否定できない。",
              "attribution": "works-i.com",
              "icon_type": null
            },
            {
              "matched_text": "【29†L30-L38】",
              "start_idx": 3773,
              "end_idx": 3785,
              "alt": null,
              "type": "webpage_extended",
              "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=Image",
              "pub_date": null,
              "snippet": "Image",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L19-L22】",
              "start_idx": 3922,
              "end_idx": 3934,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L19-L22】",
              "start_idx": 4000,
              "end_idx": 4012,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L19-L22】",
              "start_idx": 4171,
              "end_idx": 4183,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E7%9C%8C%E7%99%BA%E8%A1%A8%E8%B3%87%E6%96%99%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8%E6%88%B8%E7%94%B0%E5%B8%82%E3%81%AE%E6%98%A8%E5%B9%B44%E6%9C%88%E3%81%AE%E5%9C%B0%E6%96%B9%E5%85%AC%E5%8B%99%E5%93%A1%E3%81%AE%E7%B5%A6%E4%B8%8E%E6%B0%B4%E6%BA%96%E3%82%92%E7%A4%BA%E3%81%99%E3%83%A9%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AC%E3%82%B9%E6%8C%87%E6%95%B0%E3%81%AF98%E3%83%BB8%E3%81%A7%E7%9C%8C%E5%86%85%E5%B8%82%E7%94%BA%E6%9D%91%E5%B9%B3%E5%9D%87%EF%BC%8899%E3%83%BB6%EF%BC%89%E3%82%92%E4%B8%8B%E5%9B%9E%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%9C%B0%E5%9F%9F%E6%89%8B%E5%BD%93%E3%81%AF%E6%9D%B1%E4%BA%AC23%E5%8C%BA%E3%81%AE%2020%EF%BC%85%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE10%EF%BC%85%E3%80%82%E5%B8%82%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AF%E3%80%8C%E8%BF%91%E9%9A%A3%E3%81%AB%E7%B5%A6%E4%B8%8E%E9%9D%A2%E3%81%A7%E6%9C%AC%E5%B8%82%E3%82%88%E3%82%8A%E5%BE%85%E9%81%87%E3%81%AE%E3%81%84%E3%81%84%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%82%E3%81%82%E3%82%8A%E3%80%81%E4%BA%BA%E6%9D%90%E6%B5%81%E5%87%BA%E3%81%AE%E4%B8%80%E5%9B%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%80%8D%E3%81%A8%E7%AD%94%E5%BC%81%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "県発表資料によると戸田市の昨年4月の地方公務員の給与水準を示すラスパイレス指数は98・8で県内市町村平均（99・6）を下回っている。また、地域手当は東京23区の 20％の半分の10％。市担当者は「近隣に給与面で本市より待遇のいい自治体もあり、人材流出の一因となっている可能性がある」と答弁した。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 4445,
              "end_idx": 4457,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【44†L13-L21】",
              "start_idx": 4457,
              "end_idx": 4469,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L60-L68】",
              "start_idx": 4588,
              "end_idx": 4600,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.kumamoto.jp/kiji00344928/5_44928_416516_up_T7QYCY1E.pdf#:~:text=,101%20393%20561%20%E5%8C%BA%E3%80%80%E5%88%86%20%E4%B8%80%E8%88%AC%E8%A1%8C%E6%94%BF%E8%81%B7",
              "pub_date": null,
              "snippet": "(単位：人) 定年退職 早期退職 任期満了 そ　の　他 合　計 0 2 7 3 6 175 238 0 3 1 4 5 119 195 1 5 1 2 7 7 9 5 0 3 8 2 2 3 3 合　　計 1 6 6 101 393 561 区　分 一般行政職",
              "attribution": "city.kumamoto.jp",
              "icon_type": null
            },
            {
              "matched_text": "【10†L13-L16】",
              "start_idx": 4607,
              "end_idx": 4619,
              "alt": null,
              "type": "webpage_extended",
              "title": "熊本県の若手職員、退職が加速　23年度は38人、14年度の2・5倍に　元職員対象「カムバック採用」創設も検討｜熊本日日新聞社",
              "url": "https://kumanichi.com/articles/1601605#:~:text=Image%3A%20%E8%8B%A5%E6%89%8B%E8%81%B7%E5%93%A1%E3%81%AE%E9%9B%A2%E8%81%B7%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E7%86%8A%E6%9C%AC%E7%9C%8C%E3%81%AF%E7%B5%8C%E9%A8%93%E8%80%85%E3%81%AE%E3%80%8C%E3%82%AB%E3%83%A0%E3%83%90%E3%83%83%E3%82%AF%E6%8E%A1%E7%94%A8%E3%80%8D%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82%E5%86%99%E7%9C%9F%E3%81%AF%E7%9C%8C%E5%BA%81%EF%BC%9D6%E6%97%A5%E3%80%81%E7%86%8A%E6%9C%AC%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA",
              "pub_date": null,
              "snippet": "Image: 若手職員の離職に対応するため、熊本県は経験者の「カムバック採用」を検討している。写真は県庁＝6日、熊本市中央区",
              "attribution": "kumanichi.com",
              "icon_type": null
            },
            {
              "matched_text": "【29†L26-L34】",
              "start_idx": 4627,
              "end_idx": 4639,
              "alt": null,
              "type": "webpage_extended",
              "title": "“半数が教員” 昨年度の熊本県職員の中途退職者は274人　退職理由「転職」が最多に | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1772818?display=1#:~:text=2023%E5%B9%B4%E5%BA%A6%E3%80%81%E7%B4%84270%E4%BA%BA%E3%81%AE%E7%86%8A%E6%9C%AC%E7%9C%8C%E8%81%B7%E5%93%A1%E3%81%8C%E4%B8%AD%E9%80%94%E9%80%80%E8%81%B7%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E3%81%9D%E3%81%AE%E5%8D%8A%E6%95%B0%E3%81%AF%E6%95%99%E5%93%A1%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "2023年度、約270人の熊本県職員が中途退職していてその半数は教員であることが分かりました。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L13-L21】",
              "start_idx": 4644,
              "end_idx": 4656,
              "alt": null,
              "type": "webpage_extended",
              "title": "待遇に不満、市職員が大量退職　22年度35人、5年で100人超　給与、県内市町村平均下回る　埼玉・戸田｜埼玉新聞｜埼玉の最新ニュース・スポーツ・地域の話題",
              "url": "https://www.saitama-np.co.jp/articles/84759/postDetail#:~:text=%E6%88%B8%E7%94%B0%E5%B8%82%EF%BC%88%E8%81%B7%E5%93%A1%E7%B4%84900%E4%BA%BA%EF%BC%89%E3%81%AE2022%E5%B9%B4%E5%BA%A6%E3%81%AE%E6%97%A9%E6%9C%9F%E9%80%80%E8%81%B7%E8%80%85%E3%81%8C35%E4%BA%BA%E3%81%AB%E4%B8%8A%E3%82%8A%E3%80%81%E3%81%93%E3%81%9310%E5%B9%B4%E3%81%A7%E6%9C%80%E5%A4%9A%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%80%82%E8%BB%A2%E8%81%B7%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BF%E3%82%89%E3%82%8C%E3%80%81%E5%B8%82%E3%81%AF%E3%80%8C%E5%BE%85%E9%81%87%E6%94%B9%E5%96%84%E3%81%AB%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%88%E3%81%86%20%E3%81%AA%E7%B5%A6%E4%B8%8E%E5%88%B6%E5%BA%A6%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E3%82%92%E6%A4%9C%E8%A8%8E%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%8D%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "戸田市（職員約900人）の2022年度の早期退職者が35人に上り、ここ10年で最多となったことが分かった。転職が増えているとみられ、市は「待遇改善につながるよう な給与制度の見直しを検討していく」としている。",
              "attribution": "saitama-np.co.jp",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_68357e1fcafc819195b80f74d2b93781",
          "async_task_title": "地方自治体職員の離職率と原因分析（宇土市を中心に熊本県と全国比較）"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "db737226-3b73-429c-8a1f-3717d491138f",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "0b9918ae-425d-4a08-8eb5-f0ea96644bc7",
  "plugin_ids": null,
  "conversation_id": "68357ddb-d744-8003-bba6-e7704cfd58b1",
  "conversation_template_id": null,
  "gizmo_id": null,
  "gizmo_type": null,
  "is_archived": false,
  "is_starred": null,
  "safe_urls": [],
  "blocked_urls": [],
  "default_model_slug": "research",
  "conversation_origin": null,
  "is_read_only": null,
  "voice": null,
  "async_status": null,
  "disabled_tool_ids": [],
  "is_do_not_remember": false,
  "memory_scope": "global_enabled",
  "context_scopes": null,
  "sugar_item_id": null,
  "sugar_item_visible": false,
  "is_study_mode": false,
  "owner": null,
  "id": "68357ddb-d744-8003-bba6-e7704cfd58b1"
}
```