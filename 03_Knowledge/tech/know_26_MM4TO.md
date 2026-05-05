---
id: knowledge_202605051026_EUN14
type: knowledge_note
domain: tech
source: chatgpt_import
source_id: 4b7bfe86-7db5-4d29-bd2d-d249b3c1c86e
source_group: E
created: 2026-05-05
status: active
tags: [chatgpt, tech, group-E]
---

# chatgpt_import_20250616_knowledge_278


## 📋 要約

- **元タイトル:** 茨城県地域商社構想
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 10%
- **メッセージ数:** 42
- **作成日時:** 2025-06-16 00:29:22
- **推奨移行先:** 03_Knowledge または 00_Inbox
- **タグ候補:** E

## 📝 原文コンテンツ

> ChatGPT との会話ログ（フルコンテンツ）

詳細は下記の **会話履歴** セクションを参照してください。

---

## 💬 会話履歴

*このセクションには ChatGPT エクスポートの全内容が保存されています*

### 構造情報
- Mapping keys: 43
- Valid messages: 42

---

```json
{
  "title": "茨城県地域商社構想",
  "create_time": 1750033762.960592,
  "update_time": 1750066215.697253,
  "mapping": {
    "4b7bfe86-7db5-4d29-bd2d-d249b3c1c86e": {
      "id": "4b7bfe86-7db5-4d29-bd2d-d249b3c1c86e",
      "message": null,
      "parent": null,
      "children": [
        "5766b39a-5240-46df-8e84-1d593a5fbdcd"
      ]
    },
    "5766b39a-5240-46df-8e84-1d593a5fbdcd": {
      "id": "5766b39a-5240-46df-8e84-1d593a5fbdcd",
      "message": {
        "id": "5766b39a-5240-46df-8e84-1d593a5fbdcd",
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
      "parent": "4b7bfe86-7db5-4d29-bd2d-d249b3c1c86e",
      "children": [
        "661d1117-4a31-40bf-95e9-693406e724d7"
      ]
    },
    "661d1117-4a31-40bf-95e9-693406e724d7": {
      "id": "661d1117-4a31-40bf-95e9-693406e724d7",
      "message": {
        "id": "661d1117-4a31-40bf-95e9-693406e724d7",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033758.327637,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "「茨城県堺町」に関して「ウトマチ百貨店」に似た構想の動きがでていると聞いています。ふるさと納税への取り組みや、地域商社の取り組みなど。\nこの動きに至った背景や、今の動きなどをリサーチしてください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "system_hints": [
            "research"
          ],
          "request_id": "95063148cbd6eb91-NRT",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "5766b39a-5240-46df-8e84-1d593a5fbdcd",
      "children": [
        "5d9106d3-7e07-48a6-a106-34a5bd38832e"
      ]
    },
    "5d9106d3-7e07-48a6-a106-34a5bd38832e": {
      "id": "5d9106d3-7e07-48a6-a106-34a5bd38832e",
      "message": {
        "id": "5d9106d3-7e07-48a6-a106-34a5bd38832e",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033765.638092,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "「ウトマチ百貨店に似た構想」とのことですが、具体的にどのような点を重視して調査すればよいか教えてください。\n\n例：\n1. 地域の特産品を集めたECサイトの構想か\n2. 地域商社の立ち上げや運営体制についてか\n3. ふるさと納税の返礼品戦略や成果についてか\n\nまた、茨城県の「堺町」は現在存在しない地名のようです。「境町（さかいまち）」のことを指していますか？確認いただけると正確に調査できます。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "661d1117-4a31-40bf-95e9-693406e724d7",
          "request_id": "95063148cbd6eb91-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "661d1117-4a31-40bf-95e9-693406e724d7",
      "children": [
        "9c9aa472-4f42-4227-a1f9-151184d8735e"
      ]
    },
    "9c9aa472-4f42-4227-a1f9-151184d8735e": {
      "id": "9c9aa472-4f42-4227-a1f9-151184d8735e",
      "message": {
        "id": "9c9aa472-4f42-4227-a1f9-151184d8735e",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1750033765.638276,
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
          "parent_id": "5d9106d3-7e07-48a6-a106-34a5bd38832e",
          "request_id": "95063148cbd6eb91-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "5d9106d3-7e07-48a6-a106-34a5bd38832e",
      "children": [
        "decdb13f-2def-45aa-bf2c-a8c2d2685b4e"
      ]
    },
    "decdb13f-2def-45aa-bf2c-a8c2d2685b4e": {
      "id": "decdb13f-2def-45aa-bf2c-a8c2d2685b4e",
      "message": {
        "id": "decdb13f-2def-45aa-bf2c-a8c2d2685b4e",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033803.394429,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "すみません、茨城県境町です。\n\t2.\t地域商社の立ち上げや運営体制についてか\n\t3.\tふるさと納税の返礼品戦略や成果についてか\nに付いて重点的にリサーチしてください"
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
          "request_id": "9506324e1ebdeb91-NRT",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "9c9aa472-4f42-4227-a1f9-151184d8735e",
      "children": [
        "93cf691a-255f-4ce9-9048-e66685afc15c"
      ]
    },
    "93cf691a-255f-4ce9-9048-e66685afc15c": {
      "id": "93cf691a-255f-4ce9-9048-e66685afc15c",
      "message": {
        "id": "93cf691a-255f-4ce9-9048-e66685afc15c",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033812.138457,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "了解しました。茨城県境町における地域商社の立ち上げ・運営体制、およびふるさと納税の返礼品戦略や成果に関する最新の取り組みについて詳しく調査します。\n\n調査が完了次第、ご報告いたします。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "decdb13f-2def-45aa-bf2c-a8c2d2685b4e",
          "request_id": "9506324e1ebdeb91-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "decdb13f-2def-45aa-bf2c-a8c2d2685b4e",
      "children": [
        "671419bc-e723-4e28-8487-cafab64a57bf"
      ]
    },
    "671419bc-e723-4e28-8487-cafab64a57bf": {
      "id": "671419bc-e723-4e28-8487-cafab64a57bf",
      "message": {
        "id": "671419bc-e723-4e28-8487-cafab64a57bf",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033804.835477,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"了解しました。茨城県境町における地域商社の立ち上げ・運営体制、およびふるさと納税の返礼品戦略や成果に関する最新の取り組みについて詳しく調査します。\\n\\n調査が完了次第、ご報告いたします。\",\n  \"title\": \"茨城県境町の地域商社とふるさと納税戦略\",\n  \"prompt\": \"茨城県境町における地域商社の立ち上げ・運営体制に関する詳細な情報を調査してください。具体的には、どのような背景から地域商社の構想が生まれ、どのような団体や人物が関与しているか、資金調達や運営方針、地域との連携体制について調べてください。また、ふるさと納税における返礼品戦略、特産品の選定や魅せ方、実績（寄付額、返礼品人気ランキング等）、他自治体との差別化ポイント、そして現在の課題や今後の展望なども含めて、できるだけ具体的な事例とともに報告してください。\\n\\n必要であれば、関係団体（地域商社名、町の公式プロジェクト名など）や関係者インタビュー、報道、公式サイト等の情報源を参照してください。\\n\\n形式は、内容の明確化のため適切な見出しと構成を備えたレポート形式とし、必要に応じて表を活用してください。\"\n}"
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
          "parent_id": "93cf691a-255f-4ce9-9048-e66685afc15c",
          "request_id": "9506324e1ebdeb91-NRT",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "93cf691a-255f-4ce9-9048-e66685afc15c",
      "children": [
        "09fbba1f-1f1a-4910-aa6b-9bb6f9d9ebba"
      ]
    },
    "09fbba1f-1f1a-4910-aa6b-9bb6f9d9ebba": {
      "id": "09fbba1f-1f1a-4910-aa6b-9bb6f9d9ebba",
      "message": {
        "id": "09fbba1f-1f1a-4910-aa6b-9bb6f9d9ebba",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1750033812.138597,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "茨城県境町の地域商社とふるさと納税戦略",
          "async_task_prompt": "茨城県境町における地域商社の立ち上げ・運営体制に関する詳細な情報を調査してください。具体的には、どのような背景から地域商社の構想が生まれ、どのような団体や人物が関与しているか、資金調達や運営方針、地域との連携体制について調べてください。また、ふるさと納税における返礼品戦略、特産品の選定や魅せ方、実績（寄付額、返礼品人気ランキング等）、他自治体との差別化ポイント、そして現在の課題や今後の展望なども含めて、できるだけ具体的な事例とともに報告してください。\n\n必要であれば、関係団体（地域商社名、町の公式プロジェクト名など）や関係者インタビュー、報道、公式サイト等の情報源を参照してください。\n\n形式は、内容の明確化のため適切な見出しと構成を備えたレポート形式とし、必要に応じて表を活用してください。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "茨城県境町の地域商社とふるさと納税戦略",
            "completed_with_time": "Research completed in 2m",
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
          "parent_id": "671419bc-e723-4e28-8487-cafab64a57bf",
          "request_id": "9506324e1ebdeb91-NRT",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_684f65943cc08191ba9c0b7039135003",
          "async_task_conversation_id": "684f6594-3f68-8003-b98e-1fc9f3761f02",
          "async_task_created_at": "2025-06-16 00:30:13.959996+00:00",
          "deep_research_version": "mini"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "671419bc-e723-4e28-8487-cafab64a57bf",
      "children": [
        "d5726ab5-a715-4316-96f4-9a36dca97073"
      ]
    },
    "d5726ab5-a715-4316-96f4-9a36dca97073": {
      "id": "d5726ab5-a715-4316-96f4-9a36dca97073",
      "message": {
        "id": "d5726ab5-a715-4316-96f4-9a36dca97073",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750033938.612339,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# 背景と立ち上げ経緯  \n【23†embed_image】茨城県境町（人口約2.4万人）は財政危機に直面していたため、2014年に橋本正裕町長（現町長）が立ち上がり、老舗茶舗5代目の野口富太郎氏を観光協会長・道の駅さかい駅長に招聘しました【5†L39-L47】。野口氏は他自治体の成功事例を研究し、「ふるさと納税に注力すること」が町再建の鍵と確信します【5†L39-L47】。これに先立ち、道の駅さかいはもともと外部企業に委託運営されていましたが、地産地消との連携が不十分だったため、地元関係者が事業を引き継ぐ必要が生じました。その結果、境町（自治体）と地元事業者団体（道の駅さかい共栄会）が折半出資する形で、地域商社の「株式会社さかいまちづくり公社」（※「地域公社」）が2016年9月に設立されました【4†L98-L101】【22†L7-L10】。この設立当初には地方創生交付金などを活用し、道の駅内に地元食材を使ったサンドイッチ店やレストランを開業するとともに、茶文化施設「茶蔵」や干し芋・うなぎの加工所などを隈研吾氏設計の施設で相次いで整備しました【5†L53-L58】。これらの取り組みにより、設立当初3名だった職員数は最終的に171名にまで増加し、地域産業の基盤整備が進みました【5†L54-L58】。  \n\n## 組織体制と主要関係者  \nさかいまちづくり公社は「境町モデル」を牽引する地域公社で、自治体と民間が50％ずつ出資する官民連携の企業体です【4†L98-L101】【22†L7-L10】。一般的な地域商社が銀行・民間企業主導で民間企業の利益拡大を目指すのに対し、境町の場合は自治体と組むことで「稼いだ利益を町に還元する」ことを最大の目的としています【4†L111-L114】。事業内容は主に（1）ふるさと納税事業（返礼品の企画・販売）、（2）道の駅さかいの運営、（3）地元食材を活用した飲食店経営（サンドイッチ店・レストラン等）、（4）地場産品（ワイン・干し芋など）の製造販売など多岐にわたります【19†L389-L392】。これらを通じて地域の産業・雇用創出を図り、得られた利益を町の投資に充てる仕組みを取っています【4†L111-L114】【7†L62-L69】。社長である野口氏は町観光協会会長も兼務し、国内地域ビジネス協会代表理事の水井澄人氏らとともにビジネスプラン策定やマーケティング支援を行っています【1†L43-L51】【19†L389-L392】。また、境町は行政トップの指示が迅速に実行される点が特徴で、町長からの直接の依頼で五輪ホストタウン事業におけるBMXパークやアイスホッケー場の整備も実現しました【13†L287-L296】【13†L298-L305】。  \n\n## 道の駅さかいと地域連携  \n【30†embed_image】さかいまちづくり公社は道の駅さかい内の店舗運営にも深く関わっており、写真のような地元食材レストラン「茶蔵（ちゃぐら）」などを展開して地域産品の魅力発信拠点を充実させています【19†L389-L392】。また、沖縄県国頭村との友好協定に基づくアンテナショップ「国頭村公設市場」や、町内の干し芋カフェなど多彩な観光施設をプロデュースすることで、町外からの集客を高めています【1†L29-L35】。境町は地域外のプロフェッショナルを積極的に登用する方針も特徴で、自治体職員や地元民に限らず外部人材を「プロジェクトチーム」の一員として迎え入れます。その際に「必ずしも境町に移住してもらう必要はない」という柔軟なスタンスを取ることで、多様な視点や技能を取り込んだ迅速な事業実行が可能となっています【13†L275-L282】。また、地域活性化のノウハウを横展開するため、一般社団法人全国地域ビジネス協会（2022年設立）や「境まちづくり大学院」等を通じて他自治体への支援・人材育成にも注力しています【19†L395-L399】【13†L243-L252】。  \n\n## ふるさと納税の活用と返礼品戦略  \n境町の目玉戦略はふるさと納税を「マーケティング実験の場」として積極活用する点です【3†L166-L174】。2015年度に約6.5万円だった寄付額は、戦略的な返礼品開発により2022年度には約59億5,300万円、2023年度には約99億3,800万円に急増しました【4†L147-L150】【32†L29-L31】（下表参照）。ランキング情報を丹念に分析し、売れ行きの見込める品目に投資してブランド化を図る手法を取っています【3†L166-L174】。例えば干し芋については、町内農家と連携してサツマイモ栽培と加工体制を整備し、「全量買取」を約束して農家の新規参入を促すことで生産を安定化させました【3†L174-L182】。これにより干し芋は境町の認知度向上に大きく寄与しつつ、その他返礼品も多角化されました。特産品の選定では、従来からあるさしま茶や地ビール・清酒に加え、新たな試みとして多品種米の「食べ比べセット」を企画し、米の消費増進と寄付額アップを両立させています【15†L75-L84】【15†L91-L99】。市販品の組み合わせを工夫し「特別な体験」として見せることで、新規開発よりも小回りの利く施策で大きな成果を上げています【15†L75-L84】。また生産過程で生じる一次廃棄物についても「いもグミ」や飼料化（養豚、魚の餌）など再利用策を検討・実行しており、製造コスト削減と循環型モデル構築を進めています【3†L205-L213】。  \n\n## 実績：寄付額と返礼品人気ランキング  \n境町はふるさと納税で関東地方トップクラスの実績を誇ります。例えば**2021年度**の寄付金額は約48億円で関東1位（全国17位）となり、**2022年度**は約59.5億円、**2023年度**は約99.38億円を達成して7年連続で関東1位を維持しました【7†L62-L64】【4†L147-L150】【32†L29-L31】（下表）。集めた寄付金は英語教育や医療費補助、新規産業創出など多様な施策に投じ、地域経済の拡大に活用しています【7†L62-L69】。  \n\n| 年度          | 寄付金額         | 備考                              |\n|--------------|----------------|----------------------------------|\n| 2021年度 (令和3年度) | 約48.17億円【7†L62-L64】 | 関東1位（5年連続）、全国17位       |\n| 2022年度 (令和4年度) | 約59.53億円【4†L147-L150】 | 関東1位（6年連続）               |\n| 2023年度 (令和5年度) | 約99.38億円【32†L29-L31】 | 関東1位（7年連続）               |\n\n返礼品の人気ランキング（2025年6月時点）では、「令和7年産 白米4種食べ比べ20kg」が第1位にランクインし、2〜5位も茨城県産コシヒカリなど米のセットが占めています【18†L54-L62】。9位には地元ブルワリー製の地ビール（富士見百景にごりビール）が入り、干し芋は返礼品としては1位ではないものの、境町のブランドとして高い認知度を持っています【15†L91-L99】【18†L71-L73】。このように、境町の返礼品戦略は自治体独自の見せ方と品揃えで他自治体との差別化を図りつつ、多くのリピーターを獲得しています【7†L62-L64】【15†L91-L99】。  \n\n## 他自治体との差別化ポイント  \n境町モデルの最大の特徴は、公的な信頼を背景にした「自治体×民間」のハイブリッド組織形態です【4†L111-L114】。町主体の出資により得られた利益を地域投資に直結させる点は、金融機関主導の一般的な地域商社とは一線を画しています【4†L111-L114】。また、ふるさと納税を従来型の「既存特産品の販路拡大」ではなく「新産業創出のための実験場」として位置付ける発想も独創的です【3†L166-L174】。返礼品企画は市場分析に基づき大胆な投資判断を行い、地域外への知名度拡大と農家雇用の両立を実現しており、これが数十倍に達する寄付額アップに結び付いています【3†L166-L174】【3†L174-L182】。さらに、境町は自動運転バスや自転車道整備、BMXパーク・アイスホッケー場など「まちづくり×テクノロジー・スポーツ」を組み合わせたユニークな都市づくりでも注目されており、町外から年間200件以上の視察団が訪れる成功事例となっています【7†L66-L69】【13†L287-L296】。  \n\n## 課題と今後の展望  \n現在の課題としては、ふるさと納税制度への依存度が高い点が挙げられます。制度が将来どうなるか見通せないなか、町は「制度終了後も自走できる地場産業」を築くことに注力しており、干し芋工場など生産拠点の整備によって地域内循環モデルの構築を進めています【3†L189-L197】【3†L199-L202】。また、新規プロジェクト立ち上げの際には50％出資する民間パートナー探しが課題となるため、専任チームの育成や外部支援プログラムの活用によりスキームの普及を図っています【13†L258-L264】。今後は、干し芋の製造過程で生じる廃棄物の再利用拡大（飼料化や食品化）や、境町独自のブランド米開発、観光拠点整備の強化などに取り組む方針です【3†L205-L213】【15†L99-L100】。代表の野口氏は「境町をドローンビジネスの拠点にする」と語るように、先端技術を活用した新規産業創出にも力を入れています【7†L89-L93】。また地域公社設立のノウハウは全国展開されつつあり、令和元年には「境町モデル」を学ぶ視察プログラムが開始され、現在では全国的な支援組織（全国地域ビジネス協会やBIPROGYによるアドバイザリー支援等）が整備されています【13†L243-L252】【19†L395-L399】。これらを通じて、境町は「地域が稼ぐ力を持つ」モデルケースとして全国に知見を発信し続けていく方針です【7†L66-L69】【13†L268-L272】。  \n\n**参考資料:** 境町公式サイト・ふるさと納税特設サイト、株式会社さかいまちづくり公社、取材記事・インタビュー（ConnectX Magazine）、ふるさとチョイスAWARD、地域再生支援企業BIPROGY報告書など【4†L98-L101】【19†L389-L392】【7†L62-L69】【15†L91-L99】。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 14,
              "end_ix": 30,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "image_inline",
                "asset_pointer_links": [],
                "clicked_from_url": "https://magazine.connectx.life/articles/1242/",
                "clicked_from_title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine"
              }
            },
            {
              "start_ix": 120,
              "end_ix": 131,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=01%20%E3%81%8A%E8%8C%B6%E5%B1%8B%E3%81%AE5%E4%BB%A3%E7%9B%AE%E5%BD%93%E4%B8%BB%E3%81%8C%20%E7%94%BA%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E9%81%93%E3%81%AE%E9%A7%85%E9%A7%85%E9%95%B7%E3%81%AB",
                "text": "01 お茶屋の5代目当主が 町再建のため道の駅駅長に",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 5,
                  "cited_message_id": "a8d069bf-ce5e-4392-b41f-18e4cd576dc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 39,
                  "end_line_num": 47,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 177,
              "end_ix": 188,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=01%20%E3%81%8A%E8%8C%B6%E5%B1%8B%E3%81%AE5%E4%BB%A3%E7%9B%AE%E5%BD%93%E4%B8%BB%E3%81%8C%20%E7%94%BA%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E9%81%93%E3%81%AE%E9%A7%85%E9%A7%85%E9%95%B7%E3%81%AB",
                "text": "01 お茶屋の5代目当主が 町再建のため道の駅駅長に",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 5,
                  "cited_message_id": "a8d069bf-ce5e-4392-b41f-18e4cd576dc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 39,
                  "end_line_num": 47,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 352,
              "end_ix": 364,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 98,
                  "end_line_num": 101,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 364,
              "end_ix": 375,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=",
                "text": "* 株式会社さかいまちづくり公社とは",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 22,
                  "cited_message_id": "80de4b88-ace7-4fe7-9b80-113616984f9b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 7,
                  "end_line_num": 10,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 478,
              "end_ix": 489,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%A8%E3%81%AF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E8%B3%87%E6%BA%90%E3%82%92%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%81%97%E3%80%81%E7%94%9F%E7%94%A3%E3%81%8B%E3%82%89%E5%8A%A0%E5%B7%A5%E3%81%BE%E3%81%A7%E4%B8%80%E8%B2%AB%E3%81%97%E3%81%9F%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%92%E8%A1%8C%E3%81%84%E3%80%81%E5%9C%B0%E5%9F%9F%E5%86%85%E5%A4%96%E3%81%AB%E6%B5%81%E9%80%9A%E8%B2%A9%E5%A3%B2%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E7%B5%84%E7%B9%94%E3%81%AE%E3%81%93%E3%81%A8%E3%80%82%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E6%99%82%E4%BB%A3%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B4%BB%E6%80%A7%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99%E4%B8%8A%20%E3%81%A7%E5%BF%85%E8%A6%81%E4%B8%8D%E5%8F%AF%E6%AC%A0%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%A0%E3%81%A8%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AF%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "地域商社とは、地域の資源をブランド化し、生産から加工まで一貫したプロデュースを行い、地域内外に流通販売していく組織のこと。これからの時代、地域の活性化を目指す上 で必要不可欠な取り組みだと野口さんは考えています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 5,
                  "cited_message_id": "a8d069bf-ce5e-4392-b41f-18e4cd576dc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 53,
                  "end_line_num": 58,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 545,
              "end_ix": 556,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%A7%E5%BF%85%E8%A6%81%E4%B8%8D%E5%8F%AF%E6%AC%A0%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%A0%E3%81%A8%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AF%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "で必要不可欠な取り組みだと野口さんは考えています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 5,
                  "cited_message_id": "a8d069bf-ce5e-4392-b41f-18e4cd576dc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 58,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 632,
              "end_ix": 644,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 98,
                  "end_line_num": 101,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 644,
              "end_ix": 655,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=",
                "text": "* 株式会社さかいまちづくり公社とは",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 22,
                  "cited_message_id": "80de4b88-ace7-4fe7-9b80-113616984f9b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 7,
                  "end_line_num": 10,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 736,
              "end_ix": 749,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
                "text": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 111,
                  "end_line_num": 114,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 860,
              "end_ix": 874,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 389,
                  "end_line_num": 392,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 921,
              "end_ix": 934,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
                "text": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 111,
                  "end_line_num": 114,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 934,
              "end_ix": 945,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 69,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1018,
              "end_ix": 1029,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E4%BB%A3%E8%A1%A8%E3%81%AE%E9%87%8E%E5%8F%A3%E5%AF%8C%E5%A4%AA%E9%83%8E%E3%81%95%E3%82%93%E3%81%A8%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E3%83%8E%E3%82%A6%E3%83%8F%E3%82%A6%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E5%BA%83%E3%82%81%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E6%B4%BB%E5%8B%95%E3%81%99%E3%82%8B%E4%B8%80%E8%88%AC%E7%A4%BE%E5%9B%A3%E6%B3%95%E4%BA%BA%E5%85%A8%E5%9B%BD%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E5%8D%94%E4%BC%9A%E3%81%AE%E6%B0%B4%E4%BA%95%E6%BE%84%E4%BA%BA%E3%81%95%E3%82%93%E3%81%AB%E3%81%8A%E8%A9%B1%E3%82%92%E4%BC%BA%E3%81%A3%E3%81%9F%E3%80%82",
                "text": "株式会社さかいまちづくり公社代表の野口富太郎さんと、境町のノウハウを全国に広めるために活動する一般社団法人全国地域ビジネス協会の水井澄人さんにお話を伺った。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 1,
                  "cited_message_id": "e96aa09e-c6db-41dc-b841-7ac55d9618a2",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 43,
                  "end_line_num": 51,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1029,
              "end_ix": 1043,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 389,
                  "end_line_num": 392,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1123,
              "end_ix": 1137,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%82%84%E3%81%AF%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%82%88%E3%81%8F%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%8C%E7%94%BA%E9%95%B7%E3%81%8B%E3%82%89%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E3%81%A7%E9%99%8D%E3%82%8A%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%8B%E3%82%89%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%80%8C%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AB%E9%9B%BB%E8%A9%B11%E6%9C%AC%E3%81%A7%E9%80%A3%E7%B5%A1%E3%81%8C%E3%81%82%E3%81%A3%E3%81%A6%E3%80%81%E3%80%8C%E3%81%93%E3%82%8C%E3%82%92%E3%81%93%E3%81%86%E3%81%97%E3%82%88%E3%81%86%20%EF%BC%81%E3%80%8D%E3%81%A8%E3%81%99%E3%81%90%E3%81%AB%E7%9B%B8%E8%AB%87%E3%82%84%E6%8C%87%E7%A4%BA%E3%81%8C%E9%A3%9B%E3%82%93%E3%81%A7%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
                "text": "やはり、境町をよくするためのアイデアが町長からトップダウンで降りてくるからですね。「さかいまちづくり公社」のメンバーに電話1本で連絡があって、「これをこうしよう ！」とすぐに相談や指示が飛んでくるのです。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 287,
                  "end_line_num": 296,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1137,
              "end_ix": 1151,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%BE%8B%E3%81%88%E3%81%B0%E6%9D%B1%E4%BA%AC%E4%BA%94%E8%BC%AA%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%E3%82%A2%E3%83%AB%E3%82%BC%E3%83%B3%E3%83%81%E3%83%B3%E3%81%AE%E3%83%9B%E3%82%B9%E3%83%88%E3%82%BF%E3%82%A6%E3%83%B3%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%82%A2%E3%83%AB%E3%82%BC%E3%83%B3%E3%83%81%E3%83%B3%E6%94%BF%E5%BA%9C%E3%81%8B%E3%82%89%E3%80%81%E3%80%8C%E9%81%B8%E6%89%8B%E3%81%8C%E7%B7%B4%E7%BF%92%E3%81%A7%E3%81%8D%E3%82%8BBMX%E3%83%91%E3%83%BC%E3%82%AF%E3%82%92%E5%BB%BA%E8%A8%AD%E3%81%97%E3%81%A6%E3%82%82%E3%82%89%E3%81%88%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%9F%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%A6%81%E8%AB%8B%E3%81%8C%E3%81%82%E3%81%A3%E3%81%9F%20%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
                "text": "例えば東京五輪において、境町はアルゼンチンのホストタウンでした。アルゼンチン政府から、「選手が練習できるBMXパークを建設してもらえないか？」という要請があった のです。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 298,
                  "end_line_num": 305,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1173,
              "end_ix": 1189,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "image_inline",
                "asset_pointer_links": [],
                "clicked_from_url": "https://www.biprogy.com/solution/service/rpc_support.html",
                "clicked_from_title": "地域公社支援サービス｜BIPROGY株式会社 "
              }
            },
            {
              "start_ix": 1275,
              "end_ix": 1289,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 389,
                  "end_line_num": 392,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1373,
              "end_ix": 1384,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E3%81%AB%E3%81%82%E3%82%8B%E4%BA%BA%E5%8F%A32%E4%B8%874000%E4%BA%BA%E3%81%BB%E3%81%A9%E3%81%AE%E5%B0%8F%E3%81%95%E3%81%AA%E7%94%BA%E3%80%81%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E7%94%BA%E6%B0%91%E3%81%AE%E8%B6%B3%E3%81%A8%E3%81%AA%E3%82%8B%E7%84%A1%E6%96%99%E3%81%AE%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%8C%E8%B5%B0%E3%82%8A%E3%80%81%E5%9B%BD%E5%86%85%E3%81%AB%E3%82%82%E6%95%B0%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%94%E8%BC%AA%E4%BB%95%E6%A7%98%E3%81%AE%E6%9C%AC%E6%A0%BC%E7%9A%84%E3%81%AABMX%E3%83%91%E3%83%BC%E3%82%AF%E3%82%84%E3%80%81%E3%82%A2%E3%82%A4%E3%82%B9%20%E3%83%9B%E3%83%83%E3%82%B1%E3%83%BC%E3%81%AE%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%81%BE%E3%81%A7%E5%BB%BA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
                "text": "茨城県にある人口2万4000人ほどの小さな町、境町。この町では、町民の足となる無料の自動運転バスが走り、国内にも数少ない五輪仕様の本格的なBMXパークや、アイス ホッケーのグラウンドまで建っている。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 1,
                  "cited_message_id": "e96aa09e-c6db-41dc-b841-7ac55d9618a2",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 29,
                  "end_line_num": 35,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1532,
              "end_ix": 1546,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%AF%E3%80%81%E5%A4%96%E9%83%A8%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AB%E3%82%82%E3%81%82%E3%82%8B%E3%80%82%E5%9C%B0%E5%9F%9F%E4%BD%8F%E6%B0%91%E3%81%8B%E3%82%89%E3%81%AE%E7%90%86%E8%A7%A3%E3%82%92%E5%BE%97%E3%81%AA%E3%81%8C%E3%82%89%E3%80%81%E4%BD%95%E3%81%8B%E3%82%92%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E4%B8%8A%E3%81%A7%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%82%92%E3%80%81%E5%A4%96%E9%83%A8%E3%81%8B%E3%82%89%E9%80%A3%E3%82%8C%E3%81%A6%E3%81%8F%E3%82%8B%E3%80%82%E3%81%9F%E3%81%A0%E3%81%97%E3%80%81%E3%80%8C%E6%B4%BB%E5%8B%95%E3%82%92%E3%81%99%E3%82%8B%E4%BB%A5%E4%B8%8A%E3%81%AF%E8%A1%97%20%E3%81%AB%E4%BD%8F%E3%82%93%E3%81%A7%E3%81%BB%E3%81%97%E3%81%84%E3%80%8D%E3%81%A8%E3%81%AF%E8%A8%80%E3%82%8F%E3%81%AA%E3%81%84%E3%80%82%E5%A4%9A%E3%81%8F%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%8C%E7%A7%BB%E4%BD%8F%E8%80%85%E3%82%92%E5%A2%97%E3%82%84%E3%81%9D%E3%81%86%E3%81%A8%E3%81%99%E3%82%8B%E3%81%AA%E3%81%8B%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AB%E5%A4%96%E9%83%A8%E3%81%AB%E3%81%84%E3%81%AA%E3%81%8C%E3%82%89%E7%94%BA%E3%81%AB%E9%96%A2%E3%82%8F%E3%82%8B%E4%BB%B2%E9%96%93%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AE%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%9F%E3%81%A1%E3%81%AE%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E6%84%9F%E8%A6%9A%E3%81%AE%E3%81%AA%E3%81%9B%E3%82%8B%E6%8A%80%20%E3%81%A0%E3%81%A3%E3%81%9F%E3%80%82",
                "text": "境町の魅力は、外部との連携にもある。地域住民からの理解を得ながら、何かをはじめる上で必要なプロフェッショナルを、外部から連れてくる。ただし、「活動をする以上は街 に住んでほしい」とは言わない。多くの自治体が移住者を増やそうとするなか、境町に外部にいながら町に関わる仲間が増えていくのは、野口さんたちのバランス感覚のなせる技 だった。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 275,
                  "end_line_num": 282,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1633,
              "end_ix": 1647,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E6%99%AE%E5%8F%8A%E3%81%97%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%82%92%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%202022%20%E5%B9%B4%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%80%81%E5%A2%83%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A4%A7%E5%AD%A6%E9%99%A2%E3%82%92%E9%96%8B%E6%A0%A1%E3%81%97%E3%80%81%E7%A8%BC%E3%81%90%E5%8A%9B%E3%82%92%E6%8C%81%E3%81%A4%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "「境町モデル」を全国に普及し地域経済を活性化するために 2022 年に設立され、境まちづくり大学院を開校し、稼ぐ力を持つ地域公社をつくるための人材育成プログラムを提供しています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 395,
                  "end_line_num": 399,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1647,
              "end_ix": 1661,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%BD%93%E5%88%9D%E3%81%AF%E5%80%8B%E4%BA%BA%E5%90%91%E3%81%91%E3%81%AB%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%B3%87%E6%A0%BC%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%A6%E8%AC%9B%E7%BE%A9%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AA%E3%81%8B%E3%81%A7%E3%80%8C%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%91%E3%81%91%E3%81%AB%E6%95%99%E3%81%88%E3%81%AA%E3%81%84%E3%81%A8%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AE%E6%84%8F%E5%91%B3%E3%81%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E6%A8%AA%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%20%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%80%83%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "当初は個人向けに「地域ビジネスプランナー」という資格をつくって講義をしていましたが、やっていくなかで「自治体向けに教えないと、本当の意味でモデルを横展開すること はできない」と考えるようになりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 243,
                  "end_line_num": 252,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1727,
              "end_ix": 1740,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 166,
                  "end_line_num": 174,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1820,
              "end_ix": 1833,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
                "text": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 147,
                  "end_line_num": 150,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1833,
              "end_ix": 1845,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
                "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "cited_message_id": "e6eeb810-f13f-4d22-a6ce-dfd25e9bae30",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 29,
                  "end_line_num": 31,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1900,
              "end_ix": 1913,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 166,
                  "end_line_num": 174,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1987,
              "end_ix": 2000,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image",
                "text": "Image",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 174,
                  "end_line_num": 182,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2124,
              "end_ix": 2136,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AF%E5%AF%84%E4%BB%98%E8%80%85%E6%A7%98%E3%81%AB%E3%81%A9%E3%81%86%E8%A6%8B%E3%81%9B%E3%81%9F%E3%81%84%E3%81%8B",
                "text": "ポイントは寄付者様にどう見せたいか",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 75,
                  "end_line_num": 84,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2136,
              "end_ix": 2148,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
                "text": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 91,
                  "end_line_num": 99,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2207,
              "end_ix": 2219,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AF%E5%AF%84%E4%BB%98%E8%80%85%E6%A7%98%E3%81%AB%E3%81%A9%E3%81%86%E8%A6%8B%E3%81%9B%E3%81%9F%E3%81%84%E3%81%8B",
                "text": "ポイントは寄付者様にどう見せたいか",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 75,
                  "end_line_num": 84,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2298,
              "end_ix": 2311,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93",
                "text": "Image野口さん",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 205,
                  "end_line_num": 213,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2467,
              "end_ix": 2478,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 64,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2478,
              "end_ix": 2491,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
                "text": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 147,
                  "end_line_num": 150,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2491,
              "end_ix": 2503,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
                "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "cited_message_id": "e6eeb810-f13f-4d22-a6ce-dfd25e9bae30",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 29,
                  "end_line_num": 31,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2558,
              "end_ix": 2569,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 69,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2735,
              "end_ix": 2746,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 64,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2801,
              "end_ix": 2814,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
                "text": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 147,
                  "end_line_num": 150,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2871,
              "end_ix": 2883,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
                "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "cited_message_id": "e6eeb810-f13f-4d22-a6ce-dfd25e9bae30",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 29,
                  "end_line_num": 31,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2999,
              "end_ix": 3011,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "特産品ランキング｜茨城県境町ふるさと納税特設サイト",
                "url": "https://furusato-sakai.jp/item/ranking#:~:text=%E9%9B%86%E8%A8%88%E6%9C%9F%E9%96%93%202025",
                "text": "集計期間 2025.05.12 ～ 2025.06.12",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 18,
                  "cited_message_id": "d15cae59-dd72-4603-a0af-e73314594b8a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 62,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3089,
              "end_ix": 3101,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
                "text": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 91,
                  "end_line_num": 99,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3101,
              "end_ix": 3113,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "特産品ランキング｜茨城県境町ふるさと納税特設サイト",
                "url": "https://furusato-sakai.jp/item/ranking#:~:text=,22",
                "text": "*  第 9 位 富士見 百景にごりビール 350ml×72本 〖3ケース〗スピード便 14,850 pt   *  22",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 18,
                  "cited_message_id": "d15cae59-dd72-4603-a0af-e73314594b8a",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 71,
                  "end_line_num": 73,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3174,
              "end_ix": 3185,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 64,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3185,
              "end_ix": 3197,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
                "text": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 91,
                  "end_line_num": 99,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3266,
              "end_ix": 3279,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
                "text": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 111,
                  "end_line_num": 114,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3335,
              "end_ix": 3348,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
                "text": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 111,
                  "end_line_num": 114,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3409,
              "end_ix": 3422,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 166,
                  "end_line_num": 174,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3499,
              "end_ix": 3512,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 166,
                  "end_line_num": 174,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3512,
              "end_ix": 3525,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image",
                "text": "Image",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 174,
                  "end_line_num": 182,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3641,
              "end_ix": 3652,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E9%81%93%E3%81%AE%E9%A7%85%E3%81%A8%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%81%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E4%BA%8B%E6%A5%AD%E3%82%92%E8%BB%B8%E3%81%AB%E3%80%81%E5%8F%B3%E8%82%A9%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%AB%E8%B2%A1%E6%BA%90%E3%82%92%E5%A2%97%E3%82%84%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%9B%AE%E8%A6%9A%E3%81%BE%E3%81%97%E3%81%84%E5%A4%89%E5%8C%96%E3%81%AF%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AA%E3%81%8F%E3%81%97%E3%81%A6%E3%81%AF%E6%88%90%E3%81%97%E5%BE%97%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E7%B4%8D%E3%82%81%E3%82%89%E3%82%8C%E3%81%9F%E5%AF%84%20%E4%BB%98%E9%87%91%E3%81%AF%E5%85%88%E9%80%B2%E7%9A%84%E3%81%AA%E8%8B%B1%E8%AA%9E%E6%95%99%E8%82%B2%E3%82%84%E5%8C%BB%E7%99%82%E8%B2%BB%E8%A3%9C%E5%8A%A9%E3%81%AA%E3%81%A9%E3%81%AE%E6%A7%98%E3%80%85%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AE%E8%B2%A1%E6%BA%90%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%BB%E3%81%8B%E3%80%81%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E3%81%AE%E8%B2%A9%E8%B7%AF%E6%8B%A1%E5%A4%A7%E3%82%84%E6%96%B0%E3%81%9F%E3%81%AA%E7%94%A3%E6%A5%AD%E3%81%AE%E5%89%B5%E5%87%BA%E3%81%AB%E3%82%82%E6%B4%BB%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%20%E9%9B%87%E7%94%A8%E3%82%92%E7%94%9F%E3%81%BF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AB%E8%B3%87%E9%87%91%E3%82%92%E9%82%84%E5%85%83%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E2%80%A6%E2%80%A6%E3%81%9D%E3%82%93%E3%81%AA%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%A8%E3%82%82%E3%81%AB%E4%BD%9C%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AF%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%81%A8%E5%91%BC%E3%81%B0%E3%82%8C%E3%80%81%E8%B2%A1%E6%BA%90%E6%94%B9%E5%96%84%E3%81%AE%E6%88%90%E5%8A%9F%E4%BE%8B%E3%81%A8%E3%81%97%E3%81%A6%E5%85%A8%E5%9B%BD%20%E3%81%8B%E3%82%89%E5%B9%B4%E9%96%93200%E4%BB%B6%E4%BB%A5%E4%B8%8A%E3%82%82%E3%81%AE%E8%A6%96%E5%AF%9F%E3%81%8C%E8%A8%AA%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "道の駅とふるさと納税、ものづくり事業を軸に、右肩上がりに財源を増やしてきた境町。この目覚ましい変化は、自治体との連携なくしては成し得ないものでした。納められた寄 付金は先進的な英語教育や医療費補助などの様々な取り組みの財源になっているほか、地場産品の販路拡大や新たな産業の創出にも活用されています。そうすることで町に新たな 雇用を生み、地域に資金を還元していく……そんな仕組みを自治体とともに作り上げてきたのです。このビジネスモデルは「境町モデル」と呼ばれ、財源改善の成功例として全国 から年間200件以上もの視察が訪れるまでになりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 66,
                  "end_line_num": 69,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3652,
              "end_ix": 3666,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%82%84%E3%81%AF%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%82%88%E3%81%8F%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%8C%E7%94%BA%E9%95%B7%E3%81%8B%E3%82%89%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E3%81%A7%E9%99%8D%E3%82%8A%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%8B%E3%82%89%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%80%8C%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AB%E9%9B%BB%E8%A9%B11%E6%9C%AC%E3%81%A7%E9%80%A3%E7%B5%A1%E3%81%8C%E3%81%82%E3%81%A3%E3%81%A6%E3%80%81%E3%80%8C%E3%81%93%E3%82%8C%E3%82%92%E3%81%93%E3%81%86%E3%81%97%E3%82%88%E3%81%86%20%EF%BC%81%E3%80%8D%E3%81%A8%E3%81%99%E3%81%90%E3%81%AB%E7%9B%B8%E8%AB%87%E3%82%84%E6%8C%87%E7%A4%BA%E3%81%8C%E9%A3%9B%E3%82%93%E3%81%A7%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
                "text": "やはり、境町をよくするためのアイデアが町長からトップダウンで降りてくるからですね。「さかいまちづくり公社」のメンバーに電話1本で連絡があって、「これをこうしよう ！」とすぐに相談や指示が飛んでくるのです。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 287,
                  "end_line_num": 296,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3806,
              "end_ix": 3819,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%812014%E5%B9%B4%E3%81%AB%E5%B0%B1%E4%BB%BB%E3%81%97%E3%81%9F%E6%96%B0%E7%94%BA%E9%95%B7%E3%81%AE%E8%A8%80%E8%91%89%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E8%B2%A1%E6%94%BF%E7%8A%B6%E6%B3%81%E3%81%AE%E6%82%AA%E3%81%8B%E3%81%A3%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%8C%E5%A4%89%E3%82%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%80%81%E3%80%8C%E7%A8%BC%E3%81%92%E3%82%8B%E2%80%9C%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E5%A2%83%E7%94%BA%E2%80%9D%E3%81%AB%E3%81%97%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%A8%80%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%A6%E3%80%82%20%E3%82%88%E3%82%8A%E6%97%A9%E3%81%8F%E7%A8%8E%E5%8F%8E%E3%82%92%E5%A2%97%E3%82%84%E3%81%99%E6%96%B9%E6%B3%95%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%8F%E3%81%93%E3%81%A8%E3%82%92%E6%B1%BA%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "きっかけとなったのは、2014年に就任した新町長の言葉でした。財政状況の悪かった境町が変わるために、「稼げる“株式会社境町”にしないといけない」と言われていて。 より早く税収を増やす方法として、ふるさと納税に力を入れていくことを決めました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 189,
                  "end_line_num": 197,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3819,
              "end_ix": 3832,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%9D%E3%81%86%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%82%82%E3%81%97%E5%88%B6%E5%BA%A6%E3%81%8C%E7%B5%82%E4%BA%86%E3%81%97%E3%81%A6%E3%82%82%E3%80%81%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%E3%81%AE%E8%A3%BD%E9%80%A0%E5%B7%A5%E5%A0%B4%E3%82%92%E3%81%AF%E3%81%98%E3%82%81%E3%81%A8%E3%81%97%E3%81%9F%E7%94%9F%E7%94%A3%E4%BD%93%E5%88%B6%E3%82%92%E7%94%BA%E3%81%AB%E6%AE%8B%E3%81%9B%E3%81%B0%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E7%94%A3%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E8%87%AA%E8%B5%B0%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B%E3%82%89%E3%80%82",
                "text": "そうですね。もし制度が終了しても、干しいもの製造工場をはじめとした生産体制を町に残せば、民間の産業として自走することができますから。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 199,
                  "end_line_num": 202,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3915,
              "end_ix": 3929,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%8B%E4%B8%8A%E3%81%A7%E9%9B%A3%E3%81%97%E3%81%84%E3%81%AE%E3%81%AF%E3%80%8150%EF%BC%85%E3%81%AE%E5%87%BA%E8%B3%87%E3%82%92%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E6%B0%91%E9%96%93%E3%81%AE%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%E3%81%9D%E3%82%8C%E3%81%AF%E3%80%81100%EF%BC%85%E6%B0%91%E9%96%93%E8%B3%87%E6%9C%AC%E3%81%AB%E3%81%AA%E3%82%8B%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%A7%E3%82%82%E5%90%8C%E3%81%98%E3%81%93%E3%81%A8%E3%80%82",
                "text": "地域公社を立ち上げる上で難しいのは、50％の出資をしてくれる民間のパートナーを見つけることです。それは、100％民間資本になる地域商社でも同じこと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 258,
                  "end_line_num": 264,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3999,
              "end_ix": 4012,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93",
                "text": "Image野口さん",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "54cfb05e-12b2-4e5b-aac8-880e64d13d44",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 205,
                  "end_line_num": 213,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4012,
              "end_ix": 4025,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E7%A2%BA%E3%81%8B%E3%81%AB%E4%BC%B8%E3%81%B3%E3%81%A6%E3%81%84%E3%82%8B%E5%93%81%E3%81%AB%E4%B8%80%E7%82%B9%E6%8A%95%E8%B3%87%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AF%E7%90%86%E3%81%AB%E3%81%8B%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%E8%87%AA%E5%B7%B1%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E3%82%92%E8%82%B2%E3%81%A6%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E6%8A%95%E8%B3%87%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E7%94%BA%E3%81%AE%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%82%84%E5%BC%95%E3%81%84%E3%81%A6%E3%81%AF%E4%BB%96%E3%81%AE%E5%8F%8E%E5%85%A5%E3%82%84%E7%B5%8C%E6%B8%88%E5%8A%B9%20%E6%9E%9C%E3%81%AB%E3%82%82%E7%B9%8B%E3%81%8C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E6%96%B0%E3%81%9F%E3%81%AA%E8%A6%B3%E5%85%89%E6%8B%A0%E7%82%B9%E3%82%92%E5%BB%BA%E8%A8%AD%E3%81%97%E3%81%9F%E3%82%8A%E3%80%81%E6%9B%B4%E3%81%AA%E3%82%8B%E7%94%BA%E6%8C%AF%E8%88%88%E3%81%B8%E3%81%AE%E6%8A%95%E8%B3%87%E3%82%82%E5%BC%B7%E3%82%81%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "確かに伸びている品に一点投資するのは理にかなっているかもしれないが、自己ブランドを育てるための投資は、ふるさと納税だけでなく町の知名度や引いては他の収入や経済効 果にも繋がっていく。境町では新たな観光拠点を建設したり、更なる町振興への投資も強めています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 99,
                  "end_line_num": 100,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4084,
              "end_ix": 4095,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E6%A9%8B%E6%9C%AC%E7%94%BA%E9%95%B7%E3%81%AB%E5%A3%B0%E3%82%92%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%8D%E3%80%81%E3%80%8C%E8%87%AA%E5%88%86%E3%81%AF%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E5%9C%B0%E5%9F%9F%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E4%BD%95%E3%81%8B%E3%82%84%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8B%E3%80%8D%E3%81%A8%E8%87%AA%E5%88%86%E3%81%AB%E5%95%8F%E3%81%84%E3%81%8B%E3%81%91%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%97%E3%81%A6%E3%80%81%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%AF%E5%AE%B6%E6%A5%AD%E3%81%AB%E9%82%81%E9%80%B2%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%91%E3%82%8C%E3%81%A9%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E5%9F%B9%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%20%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E7%B5%8C%E9%A8%93%E3%82%84%E6%B5%81%E9%80%9A%E8%B2%A9%E5%A3%B2%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%9F%A5%E8%A6%8B%E3%82%92%E4%BB%8A%E3%81%93%E3%81%9D%E5%9C%B0%E5%85%83%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E7%94%9F%E3%81%8B%E3%81%99%E6%99%82%E3%81%A0%E3%81%A8%E8%80%83%E3%81%88%E3%80%81%E4%BA%8C%E3%81%A4%E8%BF%94%E4%BA%8B%E3%81%A7%E5%BC%95%E3%81%8D%E5%8F%97%E3%81%91%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%A9%E3%81%86%E3%81%9B%E3%82%84%E3%82%8B%E3%81%AA%E3%82%89%E5%BE%B9%E5%BA%95%E7%9A%84%E3%81%AB%E3%81%A8%E3%80%81%E3%81%82%E3%82%8A%E3%81%A8%E3%81%82%E3%82%89%E3%82%86%E3%82%8B%E4%BA%BA%E8%84%88%E3%82%84%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%20%E3%82%92%E9%A7%86%E4%BD%BF%E3%81%97%E3%81%A6%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A7%E3%81%8D%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E7%B5%90%E6%9E%9C%E3%81%AB%E7%B5%90%E3%81%B3%E3%81%A4%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%AF%E5%AC%89%E3%81%97%E3%81%84%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E3%81%BE%E3%81%A0%E3%81%BE%E3%81%A0%E6%8C%91%E6%88%A6%E3%81%97%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%81%AF%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%81%AE%E4%B8%80%E5%A4%A7%E6%8B%A0%E7%82%B9%E3%81%AB%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%20%E5%A5%94%E8%B5%B0%E4%B8%AD%E3%81%A7%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AF%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E9%81%8B%E8%A1%8C%E3%81%8B%E3%82%89%E3%82%82%E5%88%86%E3%81%8B%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%80%81%E5%9C%B0%E5%9F%9F%E4%BD%8F%E6%B0%91%E3%81%AE%E5%88%A9%E4%BE%BF%E6%80%A7%E3%81%AB%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%92%E7%94%9F%E3%81%8B%E3%81%99%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E7%A9%8D%E6%A5%B5%E7%9A%84%E3%80%82%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%82%82%E6%96%B0%E3%81%97%E3%81%84%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%20%E3%81%AE%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%AB%E8%B2%A2%E7%8C%AE%E3%81%97%E3%80%81%E4%BD%8F%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%8C%E8%AA%87%E3%82%8A%E3%81%AB%E6%80%9D%E3%81%88%E3%82%8B%E7%94%BA%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AB%E5%B0%BD%E5%8A%9B%E3%81%97%E3%81%9F%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "橋本町長に声を掛けられたとき、「自分はこれまで地域のために何かやってきたか」と自分に問いかけました。そして、これまでは家業に邁進していたけれど、そこで培ってきた ものづくりの経験や流通販売に関する知見を今こそ地元のために生かす時だと考え、二つ返事で引き受けました。どうせやるなら徹底的にと、ありとあらゆる人脈やネットワーク を駆使して取り組んできたことが結果に結びついているのは嬉しいですが、まだまだ挑戦したいことはたくさんあります。今は、境町をドローンビジネスの一大拠点にするために 奔走中です。境町は自動運転バスの運行からも分かるように、地域住民の利便性にテクノロジーを生かす取り組みに積極的。これからも新しいビジネスモデルを生み出すことで町 の活性化に貢献し、住んでいる人たちが誇りに思える町づくりに尽力したいと思います。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 89,
                  "end_line_num": 93,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4204,
              "end_ix": 4218,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%BD%93%E5%88%9D%E3%81%AF%E5%80%8B%E4%BA%BA%E5%90%91%E3%81%91%E3%81%AB%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%B3%87%E6%A0%BC%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%A6%E8%AC%9B%E7%BE%A9%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AA%E3%81%8B%E3%81%A7%E3%80%8C%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%91%E3%81%91%E3%81%AB%E6%95%99%E3%81%88%E3%81%AA%E3%81%84%E3%81%A8%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AE%E6%84%8F%E5%91%B3%E3%81%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E6%A8%AA%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%20%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%80%83%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "当初は個人向けに「地域ビジネスプランナー」という資格をつくって講義をしていましたが、やっていくなかで「自治体向けに教えないと、本当の意味でモデルを横展開すること はできない」と考えるようになりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 243,
                  "end_line_num": 252,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4218,
              "end_ix": 4232,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E6%99%AE%E5%8F%8A%E3%81%97%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%82%92%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%202022%20%E5%B9%B4%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%80%81%E5%A2%83%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A4%A7%E5%AD%A6%E9%99%A2%E3%82%92%E9%96%8B%E6%A0%A1%E3%81%97%E3%80%81%E7%A8%BC%E3%81%90%E5%8A%9B%E3%82%92%E6%8C%81%E3%81%A4%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "「境町モデル」を全国に普及し地域経済を活性化するために 2022 年に設立され、境まちづくり大学院を開校し、稼ぐ力を持つ地域公社をつくるための人材育成プログラムを提供しています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 395,
                  "end_line_num": 399,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4282,
              "end_ix": 4293,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E9%81%93%E3%81%AE%E9%A7%85%E3%81%A8%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%81%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E4%BA%8B%E6%A5%AD%E3%82%92%E8%BB%B8%E3%81%AB%E3%80%81%E5%8F%B3%E8%82%A9%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%AB%E8%B2%A1%E6%BA%90%E3%82%92%E5%A2%97%E3%82%84%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%9B%AE%E8%A6%9A%E3%81%BE%E3%81%97%E3%81%84%E5%A4%89%E5%8C%96%E3%81%AF%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AA%E3%81%8F%E3%81%97%E3%81%A6%E3%81%AF%E6%88%90%E3%81%97%E5%BE%97%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E7%B4%8D%E3%82%81%E3%82%89%E3%82%8C%E3%81%9F%E5%AF%84%20%E4%BB%98%E9%87%91%E3%81%AF%E5%85%88%E9%80%B2%E7%9A%84%E3%81%AA%E8%8B%B1%E8%AA%9E%E6%95%99%E8%82%B2%E3%82%84%E5%8C%BB%E7%99%82%E8%B2%BB%E8%A3%9C%E5%8A%A9%E3%81%AA%E3%81%A9%E3%81%AE%E6%A7%98%E3%80%85%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AE%E8%B2%A1%E6%BA%90%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%BB%E3%81%8B%E3%80%81%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E3%81%AE%E8%B2%A9%E8%B7%AF%E6%8B%A1%E5%A4%A7%E3%82%84%E6%96%B0%E3%81%9F%E3%81%AA%E7%94%A3%E6%A5%AD%E3%81%AE%E5%89%B5%E5%87%BA%E3%81%AB%E3%82%82%E6%B4%BB%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%20%E9%9B%87%E7%94%A8%E3%82%92%E7%94%9F%E3%81%BF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AB%E8%B3%87%E9%87%91%E3%82%92%E9%82%84%E5%85%83%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E2%80%A6%E2%80%A6%E3%81%9D%E3%82%93%E3%81%AA%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%A8%E3%82%82%E3%81%AB%E4%BD%9C%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AF%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%81%A8%E5%91%BC%E3%81%B0%E3%82%8C%E3%80%81%E8%B2%A1%E6%BA%90%E6%94%B9%E5%96%84%E3%81%AE%E6%88%90%E5%8A%9F%E4%BE%8B%E3%81%A8%E3%81%97%E3%81%A6%E5%85%A8%E5%9B%BD%20%E3%81%8B%E3%82%89%E5%B9%B4%E9%96%93200%E4%BB%B6%E4%BB%A5%E4%B8%8A%E3%82%82%E3%81%AE%E8%A6%96%E5%AF%9F%E3%81%8C%E8%A8%AA%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "道の駅とふるさと納税、ものづくり事業を軸に、右肩上がりに財源を増やしてきた境町。この目覚ましい変化は、自治体との連携なくしては成し得ないものでした。納められた寄 付金は先進的な英語教育や医療費補助などの様々な取り組みの財源になっているほか、地場産品の販路拡大や新たな産業の創出にも活用されています。そうすることで町に新たな 雇用を生み、地域に資金を還元していく……そんな仕組みを自治体とともに作り上げてきたのです。このビジネスモデルは「境町モデル」と呼ばれ、財源改善の成功例として全国 から年間200件以上もの視察が訪れるまでになりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 66,
                  "end_line_num": 69,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4293,
              "end_ix": 4307,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%BD%95%E3%82%88%E3%82%8A%E5%A4%A7%E4%BA%8B%E3%81%AA%E3%81%AE%E3%81%AF%E3%80%81%E5%85%A8%E3%81%8F%E5%90%8C%E3%81%98%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E5%88%A5%E3%81%AE%E7%94%BA%E3%81%8C%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E7%9C%9F%E4%BC%BC%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E5%AD%A6%E3%82%93%E3%81%A7%E5%B8%B0%E3%81%A3%E3%81%A6%E3%82%82%E3%82%89%E3%81%A3%E3%81%9F%E4%B8%8A%E3%81%A7%E3%80%81%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E7%94%BA%E3%81%A7%E3%80%8C%E3%81%93%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%A7%E3%81%8D%20%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%AA%E3%81%AE%E3%81%8B%EF%BC%9F%E3%80%8D%E3%82%92%E8%80%83%E3%81%88%E3%81%A6%E3%82%82%E3%82%89%E3%81%86%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84%E3%80%82",
                "text": "何より大事なのは、全く同じモデルを別の町がそのまま真似することはできないということです。境町のモデルを学んで帰ってもらった上で、それぞれの町で「この自治体にでき ることは何なのか？」を考えてもらうしかない。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "d5577bf0-251f-431c-8226-2b86f9eda48f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 268,
                  "end_line_num": 272,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4422,
              "end_ix": 4434,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
                "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 4,
                  "cited_message_id": "bf87762a-3bae-4125-9a72-c8601f16b071",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 98,
                  "end_line_num": 101,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4434,
              "end_ix": 4448,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社支援サービス｜BIPROGY株式会社 ",
                "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "803aa979-9145-46f9-bbd4-4c3c01cc099d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 389,
                  "end_line_num": 392,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4448,
              "end_ix": 4459,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
                "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "e1941795-d0aa-47ae-97ed-0f1e2f12b9cf",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 62,
                  "end_line_num": 69,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4459,
              "end_ix": 4471,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
                "text": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 15,
                  "cited_message_id": "08136652-4452-444b-bab7-d013205bff01",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 91,
                  "end_line_num": 99,
                  "connector_source": null
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【23†embed_image】",
              "start_idx": 14,
              "end_idx": 30,
              "alt": null,
              "type": "image_inline",
              "asset_pointer_links": [],
              "clicked_from_url": "https://magazine.connectx.life/articles/1242/",
              "clicked_from_title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine"
            },
            {
              "matched_text": "【5†L39-L47】",
              "start_idx": 120,
              "end_idx": 131,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=01%20%E3%81%8A%E8%8C%B6%E5%B1%8B%E3%81%AE5%E4%BB%A3%E7%9B%AE%E5%BD%93%E4%B8%BB%E3%81%8C%20%E7%94%BA%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E9%81%93%E3%81%AE%E9%A7%85%E9%A7%85%E9%95%B7%E3%81%AB",
              "pub_date": null,
              "snippet": "01 お茶屋の5代目当主が 町再建のため道の駅駅長に",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【5†L39-L47】",
              "start_idx": 177,
              "end_idx": 188,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=01%20%E3%81%8A%E8%8C%B6%E5%B1%8B%E3%81%AE5%E4%BB%A3%E7%9B%AE%E5%BD%93%E4%B8%BB%E3%81%8C%20%E7%94%BA%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E9%81%93%E3%81%AE%E9%A7%85%E9%A7%85%E9%95%B7%E3%81%AB",
              "pub_date": null,
              "snippet": "01 お茶屋の5代目当主が 町再建のため道の駅駅長に",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【4†L98-L101】",
              "start_idx": 352,
              "end_idx": 364,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【22†L7-L10】",
              "start_idx": 364,
              "end_idx": 375,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=",
              "pub_date": null,
              "snippet": "* 株式会社さかいまちづくり公社とは",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【5†L53-L58】",
              "start_idx": 478,
              "end_idx": 489,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%A8%E3%81%AF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E8%B3%87%E6%BA%90%E3%82%92%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%81%97%E3%80%81%E7%94%9F%E7%94%A3%E3%81%8B%E3%82%89%E5%8A%A0%E5%B7%A5%E3%81%BE%E3%81%A7%E4%B8%80%E8%B2%AB%E3%81%97%E3%81%9F%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%92%E8%A1%8C%E3%81%84%E3%80%81%E5%9C%B0%E5%9F%9F%E5%86%85%E5%A4%96%E3%81%AB%E6%B5%81%E9%80%9A%E8%B2%A9%E5%A3%B2%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E7%B5%84%E7%B9%94%E3%81%AE%E3%81%93%E3%81%A8%E3%80%82%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E6%99%82%E4%BB%A3%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B4%BB%E6%80%A7%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99%E4%B8%8A%20%E3%81%A7%E5%BF%85%E8%A6%81%E4%B8%8D%E5%8F%AF%E6%AC%A0%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%A0%E3%81%A8%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AF%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "地域商社とは、地域の資源をブランド化し、生産から加工まで一貫したプロデュースを行い、地域内外に流通販売していく組織のこと。これからの時代、地域の活性化を目指す上 で必要不可欠な取り組みだと野口さんは考えています。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【5†L54-L58】",
              "start_idx": 545,
              "end_idx": 556,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%A7%E5%BF%85%E8%A6%81%E4%B8%8D%E5%8F%AF%E6%AC%A0%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%A0%E3%81%A8%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AF%E8%80%83%E3%81%88%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "で必要不可欠な取り組みだと野口さんは考えています。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【4†L98-L101】",
              "start_idx": 632,
              "end_idx": 644,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【22†L7-L10】",
              "start_idx": 644,
              "end_idx": 655,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=",
              "pub_date": null,
              "snippet": "* 株式会社さかいまちづくり公社とは",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【4†L111-L114】",
              "start_idx": 736,
              "end_idx": 749,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
              "pub_date": null,
              "snippet": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【19†L389-L392】",
              "start_idx": 860,
              "end_idx": 874,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【4†L111-L114】",
              "start_idx": 921,
              "end_idx": 934,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
              "pub_date": null,
              "snippet": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L69】",
              "start_idx": 934,
              "end_idx": 945,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【1†L43-L51】",
              "start_idx": 1018,
              "end_idx": 1029,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E4%BB%A3%E8%A1%A8%E3%81%AE%E9%87%8E%E5%8F%A3%E5%AF%8C%E5%A4%AA%E9%83%8E%E3%81%95%E3%82%93%E3%81%A8%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E3%83%8E%E3%82%A6%E3%83%8F%E3%82%A6%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E5%BA%83%E3%82%81%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E6%B4%BB%E5%8B%95%E3%81%99%E3%82%8B%E4%B8%80%E8%88%AC%E7%A4%BE%E5%9B%A3%E6%B3%95%E4%BA%BA%E5%85%A8%E5%9B%BD%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E5%8D%94%E4%BC%9A%E3%81%AE%E6%B0%B4%E4%BA%95%E6%BE%84%E4%BA%BA%E3%81%95%E3%82%93%E3%81%AB%E3%81%8A%E8%A9%B1%E3%82%92%E4%BC%BA%E3%81%A3%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "株式会社さかいまちづくり公社代表の野口富太郎さんと、境町のノウハウを全国に広めるために活動する一般社団法人全国地域ビジネス協会の水井澄人さんにお話を伺った。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【19†L389-L392】",
              "start_idx": 1029,
              "end_idx": 1043,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【13†L287-L296】",
              "start_idx": 1123,
              "end_idx": 1137,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%82%84%E3%81%AF%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%82%88%E3%81%8F%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%8C%E7%94%BA%E9%95%B7%E3%81%8B%E3%82%89%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E3%81%A7%E9%99%8D%E3%82%8A%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%8B%E3%82%89%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%80%8C%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AB%E9%9B%BB%E8%A9%B11%E6%9C%AC%E3%81%A7%E9%80%A3%E7%B5%A1%E3%81%8C%E3%81%82%E3%81%A3%E3%81%A6%E3%80%81%E3%80%8C%E3%81%93%E3%82%8C%E3%82%92%E3%81%93%E3%81%86%E3%81%97%E3%82%88%E3%81%86%20%EF%BC%81%E3%80%8D%E3%81%A8%E3%81%99%E3%81%90%E3%81%AB%E7%9B%B8%E8%AB%87%E3%82%84%E6%8C%87%E7%A4%BA%E3%81%8C%E9%A3%9B%E3%82%93%E3%81%A7%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "やはり、境町をよくするためのアイデアが町長からトップダウンで降りてくるからですね。「さかいまちづくり公社」のメンバーに電話1本で連絡があって、「これをこうしよう ！」とすぐに相談や指示が飛んでくるのです。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【13†L298-L305】",
              "start_idx": 1137,
              "end_idx": 1151,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%BE%8B%E3%81%88%E3%81%B0%E6%9D%B1%E4%BA%AC%E4%BA%94%E8%BC%AA%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%E3%82%A2%E3%83%AB%E3%82%BC%E3%83%B3%E3%83%81%E3%83%B3%E3%81%AE%E3%83%9B%E3%82%B9%E3%83%88%E3%82%BF%E3%82%A6%E3%83%B3%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%82%A2%E3%83%AB%E3%82%BC%E3%83%B3%E3%83%81%E3%83%B3%E6%94%BF%E5%BA%9C%E3%81%8B%E3%82%89%E3%80%81%E3%80%8C%E9%81%B8%E6%89%8B%E3%81%8C%E7%B7%B4%E7%BF%92%E3%81%A7%E3%81%8D%E3%82%8BBMX%E3%83%91%E3%83%BC%E3%82%AF%E3%82%92%E5%BB%BA%E8%A8%AD%E3%81%97%E3%81%A6%E3%82%82%E3%82%89%E3%81%88%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%9F%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%A6%81%E8%AB%8B%E3%81%8C%E3%81%82%E3%81%A3%E3%81%9F%20%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "例えば東京五輪において、境町はアルゼンチンのホストタウンでした。アルゼンチン政府から、「選手が練習できるBMXパークを建設してもらえないか？」という要請があった のです。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【30†embed_image】",
              "start_idx": 1173,
              "end_idx": 1189,
              "alt": null,
              "type": "image_inline",
              "asset_pointer_links": [],
              "clicked_from_url": "https://www.biprogy.com/solution/service/rpc_support.html",
              "clicked_from_title": "地域公社支援サービス｜BIPROGY株式会社 "
            },
            {
              "matched_text": "【19†L389-L392】",
              "start_idx": 1275,
              "end_idx": 1289,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【1†L29-L35】",
              "start_idx": 1373,
              "end_idx": 1384,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E3%81%AB%E3%81%82%E3%82%8B%E4%BA%BA%E5%8F%A32%E4%B8%874000%E4%BA%BA%E3%81%BB%E3%81%A9%E3%81%AE%E5%B0%8F%E3%81%95%E3%81%AA%E7%94%BA%E3%80%81%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E7%94%BA%E6%B0%91%E3%81%AE%E8%B6%B3%E3%81%A8%E3%81%AA%E3%82%8B%E7%84%A1%E6%96%99%E3%81%AE%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%8C%E8%B5%B0%E3%82%8A%E3%80%81%E5%9B%BD%E5%86%85%E3%81%AB%E3%82%82%E6%95%B0%E5%B0%91%E3%81%AA%E3%81%84%E4%BA%94%E8%BC%AA%E4%BB%95%E6%A7%98%E3%81%AE%E6%9C%AC%E6%A0%BC%E7%9A%84%E3%81%AABMX%E3%83%91%E3%83%BC%E3%82%AF%E3%82%84%E3%80%81%E3%82%A2%E3%82%A4%E3%82%B9%20%E3%83%9B%E3%83%83%E3%82%B1%E3%83%BC%E3%81%AE%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%81%BE%E3%81%A7%E5%BB%BA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県にある人口2万4000人ほどの小さな町、境町。この町では、町民の足となる無料の自動運転バスが走り、国内にも数少ない五輪仕様の本格的なBMXパークや、アイス ホッケーのグラウンドまで建っている。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【13†L275-L282】",
              "start_idx": 1532,
              "end_idx": 1546,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%AF%E3%80%81%E5%A4%96%E9%83%A8%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AB%E3%82%82%E3%81%82%E3%82%8B%E3%80%82%E5%9C%B0%E5%9F%9F%E4%BD%8F%E6%B0%91%E3%81%8B%E3%82%89%E3%81%AE%E7%90%86%E8%A7%A3%E3%82%92%E5%BE%97%E3%81%AA%E3%81%8C%E3%82%89%E3%80%81%E4%BD%95%E3%81%8B%E3%82%92%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B%E4%B8%8A%E3%81%A7%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%82%92%E3%80%81%E5%A4%96%E9%83%A8%E3%81%8B%E3%82%89%E9%80%A3%E3%82%8C%E3%81%A6%E3%81%8F%E3%82%8B%E3%80%82%E3%81%9F%E3%81%A0%E3%81%97%E3%80%81%E3%80%8C%E6%B4%BB%E5%8B%95%E3%82%92%E3%81%99%E3%82%8B%E4%BB%A5%E4%B8%8A%E3%81%AF%E8%A1%97%20%E3%81%AB%E4%BD%8F%E3%82%93%E3%81%A7%E3%81%BB%E3%81%97%E3%81%84%E3%80%8D%E3%81%A8%E3%81%AF%E8%A8%80%E3%82%8F%E3%81%AA%E3%81%84%E3%80%82%E5%A4%9A%E3%81%8F%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%8C%E7%A7%BB%E4%BD%8F%E8%80%85%E3%82%92%E5%A2%97%E3%82%84%E3%81%9D%E3%81%86%E3%81%A8%E3%81%99%E3%82%8B%E3%81%AA%E3%81%8B%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AB%E5%A4%96%E9%83%A8%E3%81%AB%E3%81%84%E3%81%AA%E3%81%8C%E3%82%89%E7%94%BA%E3%81%AB%E9%96%A2%E3%82%8F%E3%82%8B%E4%BB%B2%E9%96%93%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AE%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%9F%E3%81%A1%E3%81%AE%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E6%84%9F%E8%A6%9A%E3%81%AE%E3%81%AA%E3%81%9B%E3%82%8B%E6%8A%80%20%E3%81%A0%E3%81%A3%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "境町の魅力は、外部との連携にもある。地域住民からの理解を得ながら、何かをはじめる上で必要なプロフェッショナルを、外部から連れてくる。ただし、「活動をする以上は街 に住んでほしい」とは言わない。多くの自治体が移住者を増やそうとするなか、境町に外部にいながら町に関わる仲間が増えていくのは、野口さんたちのバランス感覚のなせる技 だった。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【19†L395-L399】",
              "start_idx": 1633,
              "end_idx": 1647,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E6%99%AE%E5%8F%8A%E3%81%97%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%82%92%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%202022%20%E5%B9%B4%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%80%81%E5%A2%83%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A4%A7%E5%AD%A6%E9%99%A2%E3%82%92%E9%96%8B%E6%A0%A1%E3%81%97%E3%80%81%E7%A8%BC%E3%81%90%E5%8A%9B%E3%82%92%E6%8C%81%E3%81%A4%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "「境町モデル」を全国に普及し地域経済を活性化するために 2022 年に設立され、境まちづくり大学院を開校し、稼ぐ力を持つ地域公社をつくるための人材育成プログラムを提供しています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【13†L243-L252】",
              "start_idx": 1647,
              "end_idx": 1661,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%BD%93%E5%88%9D%E3%81%AF%E5%80%8B%E4%BA%BA%E5%90%91%E3%81%91%E3%81%AB%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%B3%87%E6%A0%BC%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%A6%E8%AC%9B%E7%BE%A9%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AA%E3%81%8B%E3%81%A7%E3%80%8C%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%91%E3%81%91%E3%81%AB%E6%95%99%E3%81%88%E3%81%AA%E3%81%84%E3%81%A8%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AE%E6%84%8F%E5%91%B3%E3%81%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E6%A8%AA%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%20%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%80%83%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "当初は個人向けに「地域ビジネスプランナー」という資格をつくって講義をしていましたが、やっていくなかで「自治体向けに教えないと、本当の意味でモデルを横展開すること はできない」と考えるようになりました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L166-L174】",
              "start_idx": 1727,
              "end_idx": 1740,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【4†L147-L150】",
              "start_idx": 1820,
              "end_idx": 1833,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【32†L29-L31】",
              "start_idx": 1833,
              "end_idx": 1845,
              "alt": null,
              "type": "webpage_extended",
              "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
              "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
              "attribution": "ibarakikengikai-komei.com",
              "icon_type": null
            },
            {
              "matched_text": "【3†L166-L174】",
              "start_idx": 1900,
              "end_idx": 1913,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L174-L182】",
              "start_idx": 1987,
              "end_idx": 2000,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image",
              "pub_date": null,
              "snippet": "Image",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【15†L75-L84】",
              "start_idx": 2124,
              "end_idx": 2136,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AF%E5%AF%84%E4%BB%98%E8%80%85%E6%A7%98%E3%81%AB%E3%81%A9%E3%81%86%E8%A6%8B%E3%81%9B%E3%81%9F%E3%81%84%E3%81%8B",
              "pub_date": null,
              "snippet": "ポイントは寄付者様にどう見せたいか",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【15†L91-L99】",
              "start_idx": 2136,
              "end_idx": 2148,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【15†L75-L84】",
              "start_idx": 2207,
              "end_idx": 2219,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AF%E5%AF%84%E4%BB%98%E8%80%85%E6%A7%98%E3%81%AB%E3%81%A9%E3%81%86%E8%A6%8B%E3%81%9B%E3%81%9F%E3%81%84%E3%81%8B",
              "pub_date": null,
              "snippet": "ポイントは寄付者様にどう見せたいか",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【3†L205-L213】",
              "start_idx": 2298,
              "end_idx": 2311,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93",
              "pub_date": null,
              "snippet": "Image野口さん",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L64】",
              "start_idx": 2467,
              "end_idx": 2478,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【4†L147-L150】",
              "start_idx": 2478,
              "end_idx": 2491,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【32†L29-L31】",
              "start_idx": 2491,
              "end_idx": 2503,
              "alt": null,
              "type": "webpage_extended",
              "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
              "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
              "attribution": "ibarakikengikai-komei.com",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L69】",
              "start_idx": 2558,
              "end_idx": 2569,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L64】",
              "start_idx": 2735,
              "end_idx": 2746,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【4†L147-L150】",
              "start_idx": 2801,
              "end_idx": 2814,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%88%B6%E5%BA%A6%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%8D%E7%89%A9%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%97%E3%81%9F%E3%80%822015%E5%B9%B4%E3%81%AB6%E4%B8%875000%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%93%E3%81%AE%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%20%E7%A8%8E%E3%81%AF%E3%80%812022%E5%B9%B4%E3%81%AB%E3%81%AF%E7%B4%8459%E5%84%845300%E4%B8%87%E5%86%86%E3%82%92%E9%9B%86%E3%82%81%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "ふるさと納税制度をあえてマーケティングの場として活用することで、境町の新たな名物を生み出した。2015年に6万5000円の寄付額からはじまったこの町のふるさと納 税は、2022年には約59億5300万円を集めるまでになった。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【32†L29-L31】",
              "start_idx": 2871,
              "end_idx": 2883,
              "alt": null,
              "type": "webpage_extended",
              "title": "令和5年度のふるさと納税実績、374億円余りに。県内トップは境町の99億円超 | 茨城県議会公明党公式ホームページ",
              "url": "https://ibarakikengikai-komei.com/?p=1537#:~:text=%E7%89%B9%E3%81%AB%E6%B3%A8%E7%9B%AE%E3%81%99%E3%81%B9%E3%81%8D%E3%81%AF%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%E9%9B%86%E3%82%81%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%99%E3%80%82%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%80%81%E5%A2%83%E7%94%BA%E3%81%B8%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF99%E5%84%843800%E4%B8%87%E5%86%86%E3%81%AB%E9%81%94%E3%81%97%E3%80%817%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%A7%E9%96%A2%E6%9D%B1%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%82%92%20%E9%9B%86%E3%82%81%E3%82%8B%E7%B5%90%E6%9E%9C%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E6%88%90%E5%8A%9F%E3%81%AF%E3%80%81%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%85%85%E5%AE%9F%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E9%AB%98%E9%BD%A2%E8%80%85%E6%94%AF%E6%8F%B4%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E8%87%AA%E6%B2%BB%E4%BD%93%E7%8B%AC%E8%87%AA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E3%82%82%E6%94%AF%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "特に注目すべきは、茨城県内で最も多くの寄付金を集めた境町です。昨年度、境町へのふるさと納税は99億3800万円に達し、7年連続で関東の自治体で最も多くの寄付金を 集める結果となりました。境町の成功は、返礼品の充実だけでなく、子育て支援や高齢者支援といった自治体独自の取り組みにも支えられています。",
              "attribution": "ibarakikengikai-komei.com",
              "icon_type": null
            },
            {
              "matched_text": "【18†L54-L62】",
              "start_idx": 2999,
              "end_idx": 3011,
              "alt": null,
              "type": "webpage_extended",
              "title": "特産品ランキング｜茨城県境町ふるさと納税特設サイト",
              "url": "https://furusato-sakai.jp/item/ranking#:~:text=%E9%9B%86%E8%A8%88%E6%9C%9F%E9%96%93%202025",
              "pub_date": null,
              "snippet": "集計期間 2025.05.12 ～ 2025.06.12",
              "attribution": "furusato-sakai.jp",
              "icon_type": null
            },
            {
              "matched_text": "【15†L91-L99】",
              "start_idx": 3089,
              "end_idx": 3101,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【18†L71-L73】",
              "start_idx": 3101,
              "end_idx": 3113,
              "alt": null,
              "type": "webpage_extended",
              "title": "特産品ランキング｜茨城県境町ふるさと納税特設サイト",
              "url": "https://furusato-sakai.jp/item/ranking#:~:text=,22",
              "pub_date": null,
              "snippet": "*  第 9 位 富士見 百景にごりビール 350ml×72本 〖3ケース〗スピード便 14,850 pt   *  22",
              "attribution": "furusato-sakai.jp",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L64】",
              "start_idx": 3174,
              "end_idx": 3185,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【15†L91-L99】",
              "start_idx": 3185,
              "end_idx": 3197,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【4†L111-L114】",
              "start_idx": 3266,
              "end_idx": 3279,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
              "pub_date": null,
              "snippet": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【4†L111-L114】",
              "start_idx": 3335,
              "end_idx": 3348,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%A4%9A%E3%81%8F%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%A8%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%8C%E7%B5%84%E3%82%93%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF%E3%80%81%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E4%BC%81%E6%A5%AD%E3%81%AE%E5%88%A9%E7%9B%8A%E3%82%92%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%99%E3%82%8B%E3%80%8D%E3%81%93%E3%81%A8%E3%80%82",
              "pub_date": null,
              "snippet": "多くの場合、地域商社は地域の銀行と民間企業が組んで立ち上げます。その目的は、「地域の民間企業の利益を大きくする」こと。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L166-L174】",
              "start_idx": 3409,
              "end_idx": 3422,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L166-L174】",
              "start_idx": 3499,
              "end_idx": 3512,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AB%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%AB%E3%82%82%E3%81%A8%E3%82%82%E3%81%A8%E3%81%82%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%82%92%E6%B4%BB%E3%81%8B%E3%81%97%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AE%E9%AD%85%E5%8A%9B%E3%82%92%E3%82%88%E3%82%8A%E5%A4%9A%E3%81%8F%E3%81%AE%E4%BA%BA%E3%81%B8%E5%B1%8A%E3%81%91%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%A0%B4%E3%81%A8%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%AA%E3%81%A8%E6%84%9F%E3%81%98%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%AE%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AF%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E2%80%9C%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%AE%9F%E9%A8%93%E3%81%AE%E5%A0%B4%E2%80%9D%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%A6%E5%B8%82%E5%A0%B4%E3%82%92%E5%88%86%E6%9E%90%E3%81%97%E3%80%81%E5%A3%B2%E4%B8%8A%E3%81%8C%E8%A6%8B%E8%BE%BC%E3%82%81%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%A7%E3%81%8D%E3%81%8F%E6%8A%95%E8%B3%87%E3%82%92%E3%81%99%E3%82%8B%E3%81%93%20%E3%81%A8%E3%81%A7%E5%95%86%E5%93%81%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%A6%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "一般的に、ふるさと納税は地域にもともとある特産品を活かし、地域の魅力をより多くの人へ届けるための場として利用されていることが多いなと感じます。その一方で、境町は ふるさと納税を“マーケティングの実験の場”として使ったことが大きいと思います。ふるさと納税のランキングを見て市場を分析し、売上が見込めるものに大きく投資をするこ とで商品のブランド化を目指してきました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L174-L182】",
              "start_idx": 3512,
              "end_idx": 3525,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image",
              "pub_date": null,
              "snippet": "Image",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【7†L66-L69】",
              "start_idx": 3641,
              "end_idx": 3652,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E9%81%93%E3%81%AE%E9%A7%85%E3%81%A8%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%81%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E4%BA%8B%E6%A5%AD%E3%82%92%E8%BB%B8%E3%81%AB%E3%80%81%E5%8F%B3%E8%82%A9%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%AB%E8%B2%A1%E6%BA%90%E3%82%92%E5%A2%97%E3%82%84%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%9B%AE%E8%A6%9A%E3%81%BE%E3%81%97%E3%81%84%E5%A4%89%E5%8C%96%E3%81%AF%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AA%E3%81%8F%E3%81%97%E3%81%A6%E3%81%AF%E6%88%90%E3%81%97%E5%BE%97%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E7%B4%8D%E3%82%81%E3%82%89%E3%82%8C%E3%81%9F%E5%AF%84%20%E4%BB%98%E9%87%91%E3%81%AF%E5%85%88%E9%80%B2%E7%9A%84%E3%81%AA%E8%8B%B1%E8%AA%9E%E6%95%99%E8%82%B2%E3%82%84%E5%8C%BB%E7%99%82%E8%B2%BB%E8%A3%9C%E5%8A%A9%E3%81%AA%E3%81%A9%E3%81%AE%E6%A7%98%E3%80%85%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AE%E8%B2%A1%E6%BA%90%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%BB%E3%81%8B%E3%80%81%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E3%81%AE%E8%B2%A9%E8%B7%AF%E6%8B%A1%E5%A4%A7%E3%82%84%E6%96%B0%E3%81%9F%E3%81%AA%E7%94%A3%E6%A5%AD%E3%81%AE%E5%89%B5%E5%87%BA%E3%81%AB%E3%82%82%E6%B4%BB%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%20%E9%9B%87%E7%94%A8%E3%82%92%E7%94%9F%E3%81%BF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AB%E8%B3%87%E9%87%91%E3%82%92%E9%82%84%E5%85%83%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E2%80%A6%E2%80%A6%E3%81%9D%E3%82%93%E3%81%AA%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%A8%E3%82%82%E3%81%AB%E4%BD%9C%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AF%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%81%A8%E5%91%BC%E3%81%B0%E3%82%8C%E3%80%81%E8%B2%A1%E6%BA%90%E6%94%B9%E5%96%84%E3%81%AE%E6%88%90%E5%8A%9F%E4%BE%8B%E3%81%A8%E3%81%97%E3%81%A6%E5%85%A8%E5%9B%BD%20%E3%81%8B%E3%82%89%E5%B9%B4%E9%96%93200%E4%BB%B6%E4%BB%A5%E4%B8%8A%E3%82%82%E3%81%AE%E8%A6%96%E5%AF%9F%E3%81%8C%E8%A8%AA%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "道の駅とふるさと納税、ものづくり事業を軸に、右肩上がりに財源を増やしてきた境町。この目覚ましい変化は、自治体との連携なくしては成し得ないものでした。納められた寄 付金は先進的な英語教育や医療費補助などの様々な取り組みの財源になっているほか、地場産品の販路拡大や新たな産業の創出にも活用されています。そうすることで町に新たな 雇用を生み、地域に資金を還元していく……そんな仕組みを自治体とともに作り上げてきたのです。このビジネスモデルは「境町モデル」と呼ばれ、財源改善の成功例として全国 から年間200件以上もの視察が訪れるまでになりました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【13†L287-L296】",
              "start_idx": 3652,
              "end_idx": 3666,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%82%84%E3%81%AF%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%82%88%E3%81%8F%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%8C%E7%94%BA%E9%95%B7%E3%81%8B%E3%82%89%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E3%81%A7%E9%99%8D%E3%82%8A%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%8B%E3%82%89%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%80%8C%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AB%E9%9B%BB%E8%A9%B11%E6%9C%AC%E3%81%A7%E9%80%A3%E7%B5%A1%E3%81%8C%E3%81%82%E3%81%A3%E3%81%A6%E3%80%81%E3%80%8C%E3%81%93%E3%82%8C%E3%82%92%E3%81%93%E3%81%86%E3%81%97%E3%82%88%E3%81%86%20%EF%BC%81%E3%80%8D%E3%81%A8%E3%81%99%E3%81%90%E3%81%AB%E7%9B%B8%E8%AB%87%E3%82%84%E6%8C%87%E7%A4%BA%E3%81%8C%E9%A3%9B%E3%82%93%E3%81%A7%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "やはり、境町をよくするためのアイデアが町長からトップダウンで降りてくるからですね。「さかいまちづくり公社」のメンバーに電話1本で連絡があって、「これをこうしよう ！」とすぐに相談や指示が飛んでくるのです。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L189-L197】",
              "start_idx": 3806,
              "end_idx": 3819,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%812014%E5%B9%B4%E3%81%AB%E5%B0%B1%E4%BB%BB%E3%81%97%E3%81%9F%E6%96%B0%E7%94%BA%E9%95%B7%E3%81%AE%E8%A8%80%E8%91%89%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E8%B2%A1%E6%94%BF%E7%8A%B6%E6%B3%81%E3%81%AE%E6%82%AA%E3%81%8B%E3%81%A3%E3%81%9F%E5%A2%83%E7%94%BA%E3%81%8C%E5%A4%89%E3%82%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%80%81%E3%80%8C%E7%A8%BC%E3%81%92%E3%82%8B%E2%80%9C%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E5%A2%83%E7%94%BA%E2%80%9D%E3%81%AB%E3%81%97%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%A8%80%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%A6%E3%80%82%20%E3%82%88%E3%82%8A%E6%97%A9%E3%81%8F%E7%A8%8E%E5%8F%8E%E3%82%92%E5%A2%97%E3%82%84%E3%81%99%E6%96%B9%E6%B3%95%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%8F%E3%81%93%E3%81%A8%E3%82%92%E6%B1%BA%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "きっかけとなったのは、2014年に就任した新町長の言葉でした。財政状況の悪かった境町が変わるために、「稼げる“株式会社境町”にしないといけない」と言われていて。 より早く税収を増やす方法として、ふるさと納税に力を入れていくことを決めました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L199-L202】",
              "start_idx": 3819,
              "end_idx": 3832,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E3%81%9D%E3%81%86%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%82%82%E3%81%97%E5%88%B6%E5%BA%A6%E3%81%8C%E7%B5%82%E4%BA%86%E3%81%97%E3%81%A6%E3%82%82%E3%80%81%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%E3%81%AE%E8%A3%BD%E9%80%A0%E5%B7%A5%E5%A0%B4%E3%82%92%E3%81%AF%E3%81%98%E3%82%81%E3%81%A8%E3%81%97%E3%81%9F%E7%94%9F%E7%94%A3%E4%BD%93%E5%88%B6%E3%82%92%E7%94%BA%E3%81%AB%E6%AE%8B%E3%81%9B%E3%81%B0%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E7%94%A3%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E8%87%AA%E8%B5%B0%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B%E3%82%89%E3%80%82",
              "pub_date": null,
              "snippet": "そうですね。もし制度が終了しても、干しいもの製造工場をはじめとした生産体制を町に残せば、民間の産業として自走することができますから。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【13†L258-L264】",
              "start_idx": 3915,
              "end_idx": 3929,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%8B%E4%B8%8A%E3%81%A7%E9%9B%A3%E3%81%97%E3%81%84%E3%81%AE%E3%81%AF%E3%80%8150%EF%BC%85%E3%81%AE%E5%87%BA%E8%B3%87%E3%82%92%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E6%B0%91%E9%96%93%E3%81%AE%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%E3%81%9D%E3%82%8C%E3%81%AF%E3%80%81100%EF%BC%85%E6%B0%91%E9%96%93%E8%B3%87%E6%9C%AC%E3%81%AB%E3%81%AA%E3%82%8B%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%A7%E3%82%82%E5%90%8C%E3%81%98%E3%81%93%E3%81%A8%E3%80%82",
              "pub_date": null,
              "snippet": "地域公社を立ち上げる上で難しいのは、50％の出資をしてくれる民間のパートナーを見つけることです。それは、100％民間資本になる地域商社でも同じこと。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【3†L205-L213】",
              "start_idx": 3999,
              "end_idx": 4012,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=Image%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93",
              "pub_date": null,
              "snippet": "Image野口さん",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【15†L99-L100】",
              "start_idx": 4012,
              "end_idx": 4025,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E7%A2%BA%E3%81%8B%E3%81%AB%E4%BC%B8%E3%81%B3%E3%81%A6%E3%81%84%E3%82%8B%E5%93%81%E3%81%AB%E4%B8%80%E7%82%B9%E6%8A%95%E8%B3%87%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AF%E7%90%86%E3%81%AB%E3%81%8B%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%81%8C%E3%80%81%E8%87%AA%E5%B7%B1%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E3%82%92%E8%82%B2%E3%81%A6%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E6%8A%95%E8%B3%87%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E7%94%BA%E3%81%AE%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%82%84%E5%BC%95%E3%81%84%E3%81%A6%E3%81%AF%E4%BB%96%E3%81%AE%E5%8F%8E%E5%85%A5%E3%82%84%E7%B5%8C%E6%B8%88%E5%8A%B9%20%E6%9E%9C%E3%81%AB%E3%82%82%E7%B9%8B%E3%81%8C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E6%96%B0%E3%81%9F%E3%81%AA%E8%A6%B3%E5%85%89%E6%8B%A0%E7%82%B9%E3%82%92%E5%BB%BA%E8%A8%AD%E3%81%97%E3%81%9F%E3%82%8A%E3%80%81%E6%9B%B4%E3%81%AA%E3%82%8B%E7%94%BA%E6%8C%AF%E8%88%88%E3%81%B8%E3%81%AE%E6%8A%95%E8%B3%87%E3%82%82%E5%BC%B7%E3%82%81%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "確かに伸びている品に一点投資するのは理にかなっているかもしれないが、自己ブランドを育てるための投資は、ふるさと納税だけでなく町の知名度や引いては他の収入や経済効 果にも繋がっていく。境町では新たな観光拠点を建設したり、更なる町振興への投資も強めています。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【7†L89-L93】",
              "start_idx": 4084,
              "end_idx": 4095,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E6%A9%8B%E6%9C%AC%E7%94%BA%E9%95%B7%E3%81%AB%E5%A3%B0%E3%82%92%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%8D%E3%80%81%E3%80%8C%E8%87%AA%E5%88%86%E3%81%AF%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E5%9C%B0%E5%9F%9F%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E4%BD%95%E3%81%8B%E3%82%84%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%8B%E3%80%8D%E3%81%A8%E8%87%AA%E5%88%86%E3%81%AB%E5%95%8F%E3%81%84%E3%81%8B%E3%81%91%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%97%E3%81%A6%E3%80%81%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%AF%E5%AE%B6%E6%A5%AD%E3%81%AB%E9%82%81%E9%80%B2%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%91%E3%82%8C%E3%81%A9%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E5%9F%B9%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%20%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E7%B5%8C%E9%A8%93%E3%82%84%E6%B5%81%E9%80%9A%E8%B2%A9%E5%A3%B2%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%9F%A5%E8%A6%8B%E3%82%92%E4%BB%8A%E3%81%93%E3%81%9D%E5%9C%B0%E5%85%83%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E7%94%9F%E3%81%8B%E3%81%99%E6%99%82%E3%81%A0%E3%81%A8%E8%80%83%E3%81%88%E3%80%81%E4%BA%8C%E3%81%A4%E8%BF%94%E4%BA%8B%E3%81%A7%E5%BC%95%E3%81%8D%E5%8F%97%E3%81%91%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%A9%E3%81%86%E3%81%9B%E3%82%84%E3%82%8B%E3%81%AA%E3%82%89%E5%BE%B9%E5%BA%95%E7%9A%84%E3%81%AB%E3%81%A8%E3%80%81%E3%81%82%E3%82%8A%E3%81%A8%E3%81%82%E3%82%89%E3%82%86%E3%82%8B%E4%BA%BA%E8%84%88%E3%82%84%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%20%E3%82%92%E9%A7%86%E4%BD%BF%E3%81%97%E3%81%A6%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A7%E3%81%8D%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E7%B5%90%E6%9E%9C%E3%81%AB%E7%B5%90%E3%81%B3%E3%81%A4%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%AF%E5%AC%89%E3%81%97%E3%81%84%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E3%81%BE%E3%81%A0%E3%81%BE%E3%81%A0%E6%8C%91%E6%88%A6%E3%81%97%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%81%AF%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%82%92%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%81%AE%E4%B8%80%E5%A4%A7%E6%8B%A0%E7%82%B9%E3%81%AB%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%20%E5%A5%94%E8%B5%B0%E4%B8%AD%E3%81%A7%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AF%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E9%81%8B%E8%A1%8C%E3%81%8B%E3%82%89%E3%82%82%E5%88%86%E3%81%8B%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%80%81%E5%9C%B0%E5%9F%9F%E4%BD%8F%E6%B0%91%E3%81%AE%E5%88%A9%E4%BE%BF%E6%80%A7%E3%81%AB%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%82%92%E7%94%9F%E3%81%8B%E3%81%99%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AB%E7%A9%8D%E6%A5%B5%E7%9A%84%E3%80%82%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%82%82%E6%96%B0%E3%81%97%E3%81%84%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E7%94%9F%E3%81%BF%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%20%E3%81%AE%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%AB%E8%B2%A2%E7%8C%AE%E3%81%97%E3%80%81%E4%BD%8F%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%8C%E8%AA%87%E3%82%8A%E3%81%AB%E6%80%9D%E3%81%88%E3%82%8B%E7%94%BA%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AB%E5%B0%BD%E5%8A%9B%E3%81%97%E3%81%9F%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "橋本町長に声を掛けられたとき、「自分はこれまで地域のために何かやってきたか」と自分に問いかけました。そして、これまでは家業に邁進していたけれど、そこで培ってきた ものづくりの経験や流通販売に関する知見を今こそ地元のために生かす時だと考え、二つ返事で引き受けました。どうせやるなら徹底的にと、ありとあらゆる人脈やネットワーク を駆使して取り組んできたことが結果に結びついているのは嬉しいですが、まだまだ挑戦したいことはたくさんあります。今は、境町をドローンビジネスの一大拠点にするために 奔走中です。境町は自動運転バスの運行からも分かるように、地域住民の利便性にテクノロジーを生かす取り組みに積極的。これからも新しいビジネスモデルを生み出すことで町 の活性化に貢献し、住んでいる人たちが誇りに思える町づくりに尽力したいと思います。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【13†L243-L252】",
              "start_idx": 4204,
              "end_idx": 4218,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%BD%93%E5%88%9D%E3%81%AF%E5%80%8B%E4%BA%BA%E5%90%91%E3%81%91%E3%81%AB%E3%80%8C%E5%9C%B0%E5%9F%9F%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E8%B3%87%E6%A0%BC%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%A6%E8%AC%9B%E7%BE%A9%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%81%AA%E3%81%8B%E3%81%A7%E3%80%8C%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%91%E3%81%91%E3%81%AB%E6%95%99%E3%81%88%E3%81%AA%E3%81%84%E3%81%A8%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AE%E6%84%8F%E5%91%B3%E3%81%A7%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E6%A8%AA%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%20%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%80%8D%E3%81%A8%E8%80%83%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "当初は個人向けに「地域ビジネスプランナー」という資格をつくって講義をしていましたが、やっていくなかで「自治体向けに教えないと、本当の意味でモデルを横展開すること はできない」と考えるようになりました。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【19†L395-L399】",
              "start_idx": 4218,
              "end_idx": 4232,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%82%92%E5%85%A8%E5%9B%BD%E3%81%AB%E6%99%AE%E5%8F%8A%E3%81%97%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%82%92%E6%B4%BB%E6%80%A7%E5%8C%96%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%202022%20%E5%B9%B4%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%80%81%E5%A2%83%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%A4%A7%E5%AD%A6%E9%99%A2%E3%82%92%E9%96%8B%E6%A0%A1%E3%81%97%E3%80%81%E7%A8%BC%E3%81%90%E5%8A%9B%E3%82%92%E6%8C%81%E3%81%A4%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "「境町モデル」を全国に普及し地域経済を活性化するために 2022 年に設立され、境まちづくり大学院を開校し、稼ぐ力を持つ地域公社をつくるための人材育成プログラムを提供しています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【7†L66-L69】",
              "start_idx": 4282,
              "end_idx": 4293,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E9%81%93%E3%81%AE%E9%A7%85%E3%81%A8%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%81%E3%82%82%E3%81%AE%E3%81%A5%E3%81%8F%E3%82%8A%E4%BA%8B%E6%A5%AD%E3%82%92%E8%BB%B8%E3%81%AB%E3%80%81%E5%8F%B3%E8%82%A9%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%AB%E8%B2%A1%E6%BA%90%E3%82%92%E5%A2%97%E3%82%84%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E5%A2%83%E7%94%BA%E3%80%82%E3%81%93%E3%81%AE%E7%9B%AE%E8%A6%9A%E3%81%BE%E3%81%97%E3%81%84%E5%A4%89%E5%8C%96%E3%81%AF%E3%80%81%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA%E3%81%AA%E3%81%8F%E3%81%97%E3%81%A6%E3%81%AF%E6%88%90%E3%81%97%E5%BE%97%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E7%B4%8D%E3%82%81%E3%82%89%E3%82%8C%E3%81%9F%E5%AF%84%20%E4%BB%98%E9%87%91%E3%81%AF%E5%85%88%E9%80%B2%E7%9A%84%E3%81%AA%E8%8B%B1%E8%AA%9E%E6%95%99%E8%82%B2%E3%82%84%E5%8C%BB%E7%99%82%E8%B2%BB%E8%A3%9C%E5%8A%A9%E3%81%AA%E3%81%A9%E3%81%AE%E6%A7%98%E3%80%85%E3%81%AA%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%81%AE%E8%B2%A1%E6%BA%90%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%BB%E3%81%8B%E3%80%81%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E3%81%AE%E8%B2%A9%E8%B7%AF%E6%8B%A1%E5%A4%A7%E3%82%84%E6%96%B0%E3%81%9F%E3%81%AA%E7%94%A3%E6%A5%AD%E3%81%AE%E5%89%B5%E5%87%BA%E3%81%AB%E3%82%82%E6%B4%BB%E7%94%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A7%E7%94%BA%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%20%E9%9B%87%E7%94%A8%E3%82%92%E7%94%9F%E3%81%BF%E3%80%81%E5%9C%B0%E5%9F%9F%E3%81%AB%E8%B3%87%E9%87%91%E3%82%92%E9%82%84%E5%85%83%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E2%80%A6%E2%80%A6%E3%81%9D%E3%82%93%E3%81%AA%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A8%E3%81%A8%E3%82%82%E3%81%AB%E4%BD%9C%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AF%E3%80%8C%E5%A2%83%E7%94%BA%E3%83%A2%E3%83%87%E3%83%AB%E3%80%8D%E3%81%A8%E5%91%BC%E3%81%B0%E3%82%8C%E3%80%81%E8%B2%A1%E6%BA%90%E6%94%B9%E5%96%84%E3%81%AE%E6%88%90%E5%8A%9F%E4%BE%8B%E3%81%A8%E3%81%97%E3%81%A6%E5%85%A8%E5%9B%BD%20%E3%81%8B%E3%82%89%E5%B9%B4%E9%96%93200%E4%BB%B6%E4%BB%A5%E4%B8%8A%E3%82%82%E3%81%AE%E8%A6%96%E5%AF%9F%E3%81%8C%E8%A8%AA%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "道の駅とふるさと納税、ものづくり事業を軸に、右肩上がりに財源を増やしてきた境町。この目覚ましい変化は、自治体との連携なくしては成し得ないものでした。納められた寄 付金は先進的な英語教育や医療費補助などの様々な取り組みの財源になっているほか、地場産品の販路拡大や新たな産業の創出にも活用されています。そうすることで町に新たな 雇用を生み、地域に資金を還元していく……そんな仕組みを自治体とともに作り上げてきたのです。このビジネスモデルは「境町モデル」と呼ばれ、財源改善の成功例として全国 から年間200件以上もの視察が訪れるまでになりました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【13†L268-L272】",
              "start_idx": 4293,
              "end_idx": 4307,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E4%BD%95%E3%82%88%E3%82%8A%E5%A4%A7%E4%BA%8B%E3%81%AA%E3%81%AE%E3%81%AF%E3%80%81%E5%85%A8%E3%81%8F%E5%90%8C%E3%81%98%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E5%88%A5%E3%81%AE%E7%94%BA%E3%81%8C%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E7%9C%9F%E4%BC%BC%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E5%AD%A6%E3%82%93%E3%81%A7%E5%B8%B0%E3%81%A3%E3%81%A6%E3%82%82%E3%82%89%E3%81%A3%E3%81%9F%E4%B8%8A%E3%81%A7%E3%80%81%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E7%94%BA%E3%81%A7%E3%80%8C%E3%81%93%E3%81%AE%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%AB%E3%81%A7%E3%81%8D%20%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%AA%E3%81%AE%E3%81%8B%EF%BC%9F%E3%80%8D%E3%82%92%E8%80%83%E3%81%88%E3%81%A6%E3%82%82%E3%82%89%E3%81%86%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "何より大事なのは、全く同じモデルを別の町がそのまま真似することはできないということです。境町のモデルを学んで帰ってもらった上で、それぞれの町で「この自治体にでき ることは何なのか？」を考えてもらうしかない。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【4†L98-L101】",
              "start_idx": 4422,
              "end_idx": 4434,
              "alt": null,
              "type": "webpage_extended",
              "title": "町と組み、稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる“地域公社”というあり方 - ConnectX Magazine",
              "url": "https://magazine.connectx.life/articles/1242/#:~:text=%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E5%A2%83%E7%94%BA%E3%81%A8%E3%80%81%E6%B0%91%E9%96%93%E3%81%8C50%EF%BC%85%E3%81%9A%E3%81%A4%E8%B3%87%E9%87%91%E3%82%92%E5%87%BA%E3%81%97%E5%90%88%E3%81%A3%E3%81%A6%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F%E5%9B%A3%E4%BD%93%E3%82%92%E3%80%81%E6%88%91%E3%80%85%E3%81%AF%E3%80%8C%E5%9C%B0%E5%9F%9F%E5%85%AC%E7%A4%BE%E3%80%8D%E3%81%A8%E5%91%BC%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "地方自治体である境町と、民間が50％ずつ資金を出し合って立ち上げた団体を、我々は「地域公社」と呼んでいます。",
              "attribution": "magazine.connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【19†L389-L392】",
              "start_idx": 4434,
              "end_idx": 4448,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社支援サービス｜BIPROGY株式会社 ",
              "url": "https://www.biprogy.com/solution/service/rpc_support.html#:~:text=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%AF%E5%A2%83%E7%94%BA%E3%81%A8%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E5%85%B1%E6%A0%84%E4%BC%9A%E3%81%A750%EF%BC%85%E3%81%9A%E3%81%A4%E5%87%BA%E8%B3%87%E3%81%97%E3%81%9F%E3%80%81%E4%BB%96%E5%9C%B0%E5%9F%9F%E3%81%AE%E6%B0%91%E9%96%93%E6%A5%AD%E8%80%85%E3%81%8C%E4%BB%8B%E5%85%A5%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%80%8C%E5%AE%98%E6%B0%91%E5%8D%94%E5%83%8D%E3%80%8D%E3%81%AE%E4%BC%81%E6%A5%AD%E4%BD%93%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%A2%83%E7%94%BA%E8%A6%B3%E5%85%89%E5%8D%94%E4%BC%9A%E3%81%8B%E3%82%89%E7%8B%AC%E7%AB%8B%20%E3%81%97%E3%81%A62016%E5%B9%B49%E6%9C%888%E6%97%A5%E3%81%AB%E8%A8%AD%E7%AB%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E4%B8%BB%E3%81%AA%E4%BA%8B%E6%A5%AD%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E4%BA%8B%E6%A5%AD%E3%80%81%E9%81%93%E3%81%AE%E9%A7%85%E3%81%95%E3%81%8B%E3%81%84%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E5%9C%B0%E5%85%83%E9%A3%9F%E6%9D%90%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A4%E3%83%83%E3%83%81%E5%B0%82%E9%96%80%E5%BA%97%E3%82%84%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%81%AE%E9%81%8B%E5%96%B6%E3%80%81%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%84%E5%B9%B2%E3%81%97%E3%81%84%E3%82%82%20%E3%81%AA%E3%81%A9%E3%81%AE%E8%A3%BD%E9%80%A0%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "株式会社さかいまちづくり公社は境町と道の駅さかい共栄会で50％ずつ出資した、他地域の民間業者が介入していない「官民協働」の企業体となります。境町観光協会から独立 して2016年9月8日に設立されました。主な事業は、ふるさと納税事業、道の駅さかいの運営、地元食材を使ったサンドイッチ専門店やレストランの運営、ワインや干しいも などの製造となっています。",
              "attribution": "biprogy.com",
              "icon_type": null
            },
            {
              "matched_text": "【7†L62-L69】",
              "start_idx": 4448,
              "end_idx": 4459,
              "alt": null,
              "type": "webpage_extended",
              "title": "大賞受賞自治体の取り組み紹介 事業者部門 茨城県境町 | ふるさとチョイスAWARD | ふるさと納税サイト [ふるさとチョイス]",
              "url": "https://award.furusato-tax.jp/2022/prize_sakai_business#:~:text=%E3%81%95%E3%81%8B%E3%81%84%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E5%85%AC%E7%A4%BE%E3%81%8C%E3%83%97%E3%83%AD%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AF%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%A7%E3%82%82%E4%BA%BA%E6%B0%97%E3%81%8C%E9%AB%98%E3%81%8F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E3%83%AA%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E5%BE%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%94%BA%E3%81%AE%E8%B2%A1%E6%94%BF%E3%81%8C%E5%A4%A7%E5%B9%85%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%80%82%E4%B8%80%20%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%82%8C%E3%81%AB%E7%9C%9F%E6%91%AF%E3%81%AB%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A0%E7%B5%90%E6%9E%9C%E3%80%81%E7%B4%8D%E7%A8%8E%E7%8A%B6%E6%B3%81%E3%81%AF%E8%91%97%E3%81%97%E3%81%8F%E4%BC%B8%E9%95%B7%E3%81%97%E3%80%81%E4%BB%A4%E5%92%8C3%E5%B9%B4%E5%BA%A6%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%AF48%E5%84%84%E5%86%86%E3%82%92%E7%AA%81%E7%A0%B4%E3%80%82%E5%B8%82%E7%94%BA%E6%9D%91%E5%88%A5%E3%81%AE%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%AF5%E5%B9%B4%E9%80%A3%E7%B6%9A%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A7%E3%82%8217%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%20%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "さかいまちづくり公社がプロデュースする特産品はふるさと納税でも人気が高く、多くのリピーターを得ています。町の財政が大幅に改善するきっかけとなったふるさと納税。一 事業としてこれに真摯に取り組んだ結果、納税状況は著しく伸長し、令和3年度の寄付金は48億円を突破。市町村別のランキングでは5年連続関東1位、全国でも17位を獲得 しました。",
              "attribution": "award.furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【15†L91-L99】",
              "start_idx": 4459,
              "end_idx": 4471,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%A2%83%E7%94%BA%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E7%B1%B3%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%AF%84%E4%BB%98%E9%A1%8D%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%96%9C%E3%81%B6%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F%E3%80%81%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E3%83%97%E3%83%AD%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%82%E8%A1%8C%E3%81%A3%E3%81%9F%E3%80%82%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%AF%E3%80%8C%E7%B1%B3%E9%A3%9F%E3%81%B9%E6%AF%94%E3%81%B9%E3%82%BB%E3%83%83%E3%83%88%E3%80%8D%E3%81%8C%E4%B8%8D%E5%8B%95%E3%81%AE%E4%B8%80%E4%BD%8D%20%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E6%A5%AD%E7%95%8C%E5%86%85%E5%A4%96%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A%E5%A2%83%E7%94%BA%E3%81%A8%E8%A8%80%E3%81%88%E3%81%B0%E3%80%8C%E5%B9%B2%E3%81%97%E8%8A%8B%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%82%8B%E4%BA%BA%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "境町の場合、米の返礼品の寄付額が上がったことを喜ぶだけでなく、干し芋のプロモーションも行った。境町のふるさと納税返礼品の納税額は「米食べ比べセット」が不動の一位 である。一方で、業界内外を問わず境町と言えば「干し芋」と答える人は多い。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_684f65943cc08191ba9c0b7039135003",
          "async_task_title": "茨城県境町の地域商社とふるさと納税戦略"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "09fbba1f-1f1a-4910-aa6b-9bb6f9d9ebba",
      "children": [
        "3d8c5409-88e5-4f03-82db-b775240c46b8"
      ]
    },
    "3d8c5409-88e5-4f03-82db-b775240c46b8": {
      "id": "3d8c5409-88e5-4f03-82db-b775240c46b8",
      "message": {
        "id": "3d8c5409-88e5-4f03-82db-b775240c46b8",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034289.437906,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "同様の動きをしている自治体はどこですか？日本全体から探してください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "95063e2c2cf61a1e-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "d5726ab5-a715-4316-96f4-9a36dca97073",
      "children": [
        "e18b11ad-4922-4ce5-a620-41d6efee442d"
      ]
    },
    "e18b11ad-4922-4ce5-a620-41d6efee442d": {
      "id": "e18b11ad-4922-4ce5-a620-41d6efee442d",
      "message": {
        "id": "e18b11ad-4922-4ce5-a620-41d6efee442d",
        "author": {
          "role": "system",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034302.922145,
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
          "rebase_system_message": true,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "3d8c5409-88e5-4f03-82db-b775240c46b8",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute",
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "3d8c5409-88e5-4f03-82db-b775240c46b8",
      "children": [
        "050d9084-f0f3-4dee-850f-8ab4a851af6d"
      ]
    },
    "050d9084-f0f3-4dee-850f-8ab4a851af6d": {
      "id": "050d9084-f0f3-4dee-850f-8ab4a851af6d",
      "message": {
        "id": "050d9084-f0f3-4dee-850f-8ab4a851af6d",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034302.922264,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "e18b11ad-4922-4ce5-a620-41d6efee442d",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "e18b11ad-4922-4ce5-a620-41d6efee442d",
      "children": [
        "67fa395d-355a-44fb-9c0f-79699fba390e"
      ]
    },
    "67fa395d-355a-44fb-9c0f-79699fba390e": {
      "id": "67fa395d-355a-44fb-9c0f-79699fba390e",
      "message": {
        "id": "67fa395d-355a-44fb-9c0f-79699fba390e",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034291.186666,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "search(\"\\u540c\\u69d8\\u306e\\u52d5\\u304d\\u3092\\u3057\\u3066\\u3044\\u308b\\u81ea\\u6cbb\\u4f53\\u306f\\u3069\\u3053\\u3067\\u3059\\u304b\\uff1f\\u65e5\\u672c\\u5168\\u4f53\\u304b\\u3089\\u63a2\\u3057\\u3066\\u304f\\u3060\\u3055\\u3044\")"
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "sonic_classification_result": {
            "latency_ms": 0.02517699613235891,
            "search_prob": 0.5941378516355206,
            "force_search_threshold": 0.54,
            "classifier_config_name": "sonic_force_pg_switcher_renderer_config"
          },
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "050d9084-f0f3-4dee-850f-8ab4a851af6d",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web",
        "channel": null
      },
      "parent": "050d9084-f0f3-4dee-850f-8ab4a851af6d",
      "children": [
        "45919835-17b0-42ff-a384-974bf1786950"
      ]
    },
    "45919835-17b0-42ff-a384-974bf1786950": {
      "id": "45919835-17b0-42ff-a384-974bf1786950",
      "message": {
        "id": "45919835-17b0-42ff-a384-974bf1786950",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034302.922362,
        "update_time": null,
        "content": {
          "content_type": "thoughts",
          "thoughts": [],
          "source_analysis_msg_id": "5fa47b61-6a6d-48c8-8ee4-b8cafd3fb0f1"
        },
        "status": "in_progress",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "is_reasoning",
          "citations": [],
          "content_references": [],
          "search_turns_count": 0,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "67fa395d-355a-44fb-9c0f-79699fba390e",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "67fa395d-355a-44fb-9c0f-79699fba390e",
      "children": [
        "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e"
      ]
    },
    "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e": {
      "id": "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e",
      "message": {
        "id": "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750034291.267223,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "{\"search_query\":[{\"q\":\"地域商社 自治体 モデル 地方 創生 地域商社 事例\"},{\"q\":\"ふるさと納税 地域商社 官民 連携 自治体 事例\"}]}"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop",
            "stop_tokens": [
              200012
            ]
          },
          "is_complete": true,
          "citations": [],
          "content_references": [],
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "search_queries": [
            {
              "type": "search",
              "q": "地域商社 自治体 モデル 地方 創生 地域商社 事例"
            },
            {
              "type": "search",
              "q": "ふるさと納税 地域商社 官民 連携 自治体 事例"
            }
          ],
          "search_display_string": "Searching the web...",
          "searched_display_string": "Searched the web...",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "45919835-17b0-42ff-a384-974bf1786950",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web.run",
        "channel": null
      },
      "parent": "45919835-17b0-42ff-a384-974bf1786950",
      "children": [
        "378920ba-6029-4454-bb5c-658b02d5718f"
      ]
    },
    "378920ba-6029-4454-bb5c-658b02d5718f": {
      "id": "378920ba-6029-4454-bb5c-658b02d5718f",
      "message": {
        "id": "378920ba-6029-4454-bb5c-658b02d5718f",
        "author": {
          "role": "tool",
          "name": "web.run",
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750034292.0393543,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "batonpass.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://batonpass.jp/dictionary/chiiki-shosha",
                  "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                  "snippet": "地域商社の具体的な取り組み事例 · (株)吉田ふるさと村（島根県）. 農産加工部、水道部、バス事業部、観光事業部、稲わら工房、清嵐荘の6つの事業部 · 東北絆 ...",
                  "ref_id": null,
                  "pub_date": 1744588800,
                  "attribution": "batonpass.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "prtimes.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html",
                  "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                  "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                  "ref_id": null,
                  "pub_date": 1746057600,
                  "attribution": "prtimes.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://prtimes.jp/main/html/rd/p/000000004.000137132.html",
                  "title": "寄附取扱額は初の1000億円突破――ふるさと納税地域商社会",
                  "snippet": "支援自治体数: 176自治体（前年比 130％） – 北海道から沖縄まで全国の自治体を網羅。都市部から過疎地域まで幅広く支援し、自治体財源の確保に貢献しました ...",
                  "ref_id": null,
                  "pub_date": 1747094400,
                  "attribution": "prtimes.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.chisou.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/sousei/pdf/kouhukin-jirei.pdf",
                  "title": "[PDF] 地方創生加速化交付金を活用した取組事例",
                  "snippet": "○地域商社は、ブランド化、マーケティング、海外販路開拓の事業. や道内大手流通業者、道内加工業者との連携により、漁業者の. 収入向上を図る。 ○金融機関（北洋銀行）は、 ...",
                  "ref_id": null,
                  "pub_date": 1464349936,
                  "attribution": "www.chisou.go.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/sousei/about/ccrc/etc/chousakenkyu_r01/pdf/0521syougaikatsuyaku-kanmin_pfhowto-ntt.pdf",
                  "title": "[PDF] 官民連携事業モデルHOWto事例集 - 地方創生",
                  "snippet": "✓ 地元自治体のふるさと納税の返礼品にも採用. ✓ 里親は、米作り作業などに参加し、関係人口化. ✓ 同法人が運営する大地の芸術祭と連携したファンづくり. 取組主体. HP ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.chisou.go.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf",
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                  "ref_id": null,
                  "pub_date": 1706086204,
                  "attribution": "www.chisou.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.furusato-tax.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol9?srsltid=AfmBOop5c-felzSCXMEFyZZ0JCgBh5bzcge9WiDCEvG-h_5LxOUx6I09",
                  "title": "【地域商社】人が集まり稼げる仕組みを確立した官民協働の地域 ...",
                  "snippet": "茨城県境町で道の駅の運営とふるさと納税のプロデュースを手掛けている「株式会社さかいまちづくり公社」は、事業の多角的な展開により地域内に人のつながりを生み出し、 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.furusato-tax.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.akitakeizai.or.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.akitakeizai.or.jp/journal/data/20200901_topics.pdf",
                  "title": "[PDF] 地域商社による地域ブランド戦略 - 秋田経済研究所",
                  "snippet": "第3セクター ・物産公社など、地方自治体と民間企業が出資した第3セクターが地域商社として活動している例。 ・民間企業・団体と異なり、地域の産業支援という公共的な目 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.akitakeizai.or.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.projectdesign.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.projectdesign.jp/articles/news/c7aa69e5-e635-4576-ad2f-02176448d209",
                  "title": "高知県の地域商社 ふるさと納税事業で利益を生み",
                  "snippet": "日高わのわ会と日高村役場と連携することで、関係人口を創出しながら地域を盛り上げている。 近畿経済産業局公式noteマガジン「KEY PERSON PROFILE」、 ...",
                  "ref_id": null,
                  "pub_date": 1729209600,
                  "attribution": "www.projectdesign.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.mitsui.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.mitsui.com/mgssi/ja/report/detail/__icsFiles/afieldfile/2022/10/21/2210j_kurihara.pdf",
                  "title": "[PDF] 地 創 を担う「地域商社」の動向 ―着 すべき3つのポテンシャル―",
                  "snippet": "地域商社の形態としては株式会社が多く、設立者や出資者は、個人、地域住民、自治体、地域経済団体、. 地域金融機関など多様である。 地域商社が取り扱う ...",
                  "ref_id": null,
                  "pub_date": 1666310400,
                  "attribution": "www.mitsui.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.jir-web.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.jir-web.co.jp/joyoarc/pdf/201808.pdf",
                  "title": "[PDF] 持続可能な地域づくりに向けて",
                  "snippet": "1 地域商社事業とは、地域にある資源をみつけ、販売先（出口）を考えた企画・開発により地域の. 生産物を高付加価値化して販売するなどの地域経済の新たな司令塔を担う事業で ...",
                  "ref_id": null,
                  "pub_date": 1533626306,
                  "attribution": "www.jir-web.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.potluck-yaesu.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.potluck-yaesu.com/magazine/20250123/2927/",
                  "title": "税額控除だけじゃない。「企業版ふるさと納税」の4つの活用モデル ...",
                  "snippet": "地縁やプロジェクトへの共感、事業構想段階からの官民連携事業など、さまざまな寄附活用の事例が生まれています。 企業は何のために地域に寄附をするのか？",
                  "ref_id": null,
                  "pub_date": 1737590400,
                  "attribution": "www.potluck-yaesu.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.pwc.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.pwc.com/jp/ja/services/consulting/x-value-strategy/trading-company-established.html",
                  "title": "地方創生に向けた地域商社設立・提携支援 - PwC",
                  "snippet": "地方銀行が地域商社を設立する際の需要調査、コンセプト創造、パートナーシップ戦略策定、パートナー選定、提携先との交渉、ビジネスモデルの構築、営業活動支援、事業 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.pwc.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.tohoku.meti.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.tohoku.meti.go.jp/koho/report/pdf/2023/10.pdf",
                  "title": "[PDF] 令和5年度 地域商社と観光地域づくり法人等との 連携による相乗 ...",
                  "snippet": "自治体が起業型の地域おこし協力隊を募集しており、地域商社でサポートしている。 ◇ 連携先のまちづくり会社が受けている自治体のデジタルラボ事業のビジネスモデル. を各 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.tohoku.meti.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.bosaitech-pf.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf",
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                  "ref_id": null,
                  "pub_date": 1732147200,
                  "attribution": "www.bosaitech-pf.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.abeam.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.abeam.com/jp/ja/insights/regional_trading/",
                  "title": "地方銀行による地域商社事業進出の考察 ～課題と収益化への道筋",
                  "snippet": "地域商社を設立した事例は2021年8月現在、全国で93件確認できた（当社調べ）。出資者の内訳は、地方自治体、民間企業、個人などの事例があるが、なかでも、 ...",
                  "ref_id": null,
                  "pub_date": 1634688000,
                  "attribution": "www.abeam.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "machiokoshi-japan.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://machiokoshi-japan.com/0104-2/",
                  "title": "地元企業と連携した地方創生モデル「地域商社」の可能性",
                  "snippet": "地元企業と連携した地方創生モデル「地域商社」の可能性 ; 事例1：北海道の農業産品を世界へ届ける ; 事例2：伝統工芸品を現代的にリデザイン ; (1) 地域経済の ...",
                  "ref_id": null,
                  "pub_date": 1735948800,
                  "attribution": "machiokoshi-japan.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "magazine.connectx.life",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://magazine.connectx.life/articles/1242/",
                  "title": "稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる ...",
                  "snippet": "そんななかで「さかいまちづくり公社」がユニークなのは、自治体と民間が半分ずつ資金を出し合ってつくる地域商社の形を「地域公社」と名乗って活動して ...",
                  "ref_id": null,
                  "pub_date": 1708300800,
                  "attribution": "magazine.connectx.life"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "zh.wikipedia.org",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://zh.wikipedia.org/wiki/%E9%AF%96%E6%B1%9F%E5%B8%82%E5%BD%B9%E6%89%80JK%E8%AA%B2",
                  "title": "鯖江市役所JK課",
                  "snippet": "",
                  "ref_id": null,
                  "pub_date": 1673033235,
                  "attribution": "zh.wikipedia.org"
                },
                {
                  "type": "search_result",
                  "url": "https://zh.wikipedia.org/wiki/%E5%9C%B0%E6%96%B9%E5%89%B5%E7%94%9F",
                  "title": "地方創生",
                  "snippet": "",
                  "ref_id": null,
                  "pub_date": 1748862510,
                  "attribution": "zh.wikipedia.org"
                }
              ]
            }
          ],
          "debug_sonic_thread_id": "thread_684f67740ef48003bb3146f61491eec6",
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "eb0a2ebc-37a3-4fc9-bb5d-408b78c9473e",
      "children": [
        "a14a6a60-bfad-45a9-a74c-955365ba2f18"
      ]
    },
    "a14a6a60-bfad-45a9-a74c-955365ba2f18": {
      "id": "a14a6a60-bfad-45a9-a74c-955365ba2f18",
      "message": {
        "id": "a14a6a60-bfad-45a9-a74c-955365ba2f18",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750034302.922503,
        "update_time": null,
        "content": {
          "content_type": "reasoning_recap",
          "content": "思考時間: 5 秒"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "reasoning_ended",
          "finished_duration_sec": 5,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "378920ba-6029-4454-bb5c-658b02d5718f",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "378920ba-6029-4454-bb5c-658b02d5718f",
      "children": [
        "d0692144-efea-43db-84b8-34986b572847"
      ]
    },
    "d0692144-efea-43db-84b8-34986b572847": {
      "id": "d0692144-efea-43db-84b8-34986b572847",
      "message": {
        "id": "d0692144-efea-43db-84b8-34986b572847",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750034295.691767,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "茨城県境町のように、自治体と民間が連携した「地域商社」モデルや「ふるさと納税」を活用した成功事例は、全国的にも増えています。中でも特に注目すべき自治体を以下にご紹介します。\n\n---\n\n## 🌱 1. 島根県・吉田ふるさと村（株式会社吉田ふるさと村）  \n- **概要**：農産加工・バス・観光など6部門を展開する複合地域商社。  \n- **特徴**：「おたまはん」など60品以上のオリジナル商品を開発し、地元資源を総合的に活用。バス・水道などの公共サービス運営にも取り組むciteturn0search0。\n\n---\n\n## 🏘️ 2. 京都府亀岡市  \n- **動き始め**：2025年度、行政と民間による連携型地域商社設立に向け始動。ふるさと納税では年間約42億円を集める強豪citeturn0search1。  \n- **狙い**：鳥獣害対策や食品ロス削減等、地域課題解決プログラムと寄付の継続的発展を連動させる想定。\n\n---\n\n## 🏞️ 3. 高知県日高村・一般社団法人nosson  \n- **概要**：NPO法人「日高わのわ会」と村役場が連携し誕生した地域商社。  \n- **特徴**：関係人口の創出を目的とした文化・観光資源活用に注力。企業版ふるさと納税など新しい資金スキームの導入もciteturn0search5。\n\n---\n\n## 🌾 4. 徳島県高原町・奥霧島地域商社「ツナガルたかはる」  \n- **体制**：宮崎太陽銀行など金融機関と地域行政が共同出資。  \n- **特徴**：企業版ふるさと納税（人材派遣型）を活用し、人材ノウハウを導入して観光振興や地域商社経営の強化に取り組むciteturn0search13turn0search15。\n\n---\n\n## 🌾 5. 宮崎県真庭市（岡山県・真庭市も）  \n- **事例**：両備ホールディングスなど民間企業が企業版ふるさと納税を活用し、観光振興プロジェクトに資金・ノウハウを提供citeturn0search13turn0search15。\n\n---\n\n## 📊 6. 全国的な動向  \n- 日本全国で**地域商社の設立事例は2000年代以降急増**。2021年時点で93件確認され、そのうち約26件は地方銀行が出資citeturn0search16。  \n- さらに、「ふるさと納税に特化した地域商社」運営を支援する組織では、176自治体をカバーし、約1,086億円の寄付を取り扱う事業もあるciteturn0search9。\n\n---\n\n### ✅ 共通点と特徴まとめ\n\n| 特徴                        | 内容 |\n|-----------------------------|------|\n| **官民連携の出資形態**         | 自治体＋民間（NPO・銀行・企業）が出資し、「稼いだ利益を地域に還元」する構造。 |\n| **ふるさと納税との連携強化**    | 通常の返礼品提供にとどまらず、納税をブランド化・諸課題解決の資金源として活用。 |\n| **地域課題を軸とした事業展開** | 鳥獣害対策、観光振興、公共サービス（バス・水道）など多岐にわたり取り組む。 |\n| **人材導入型のスキーム導入**    | 企業版ふるさと納税（人材派遣型）などで外部専門人材を柔軟に導入し運営力を強化。 |\n\n---\n\n## 🔍 境町との比較と学び  \n- **境町型モデル**の優位性：  \n  - *自治体50％出資＋法人運営*という地域商社に近い構造で利益の町還元が明確。  \n  - *ふるさと納税の返礼品＝実験場*として戦略的に活用。干し芋・ブランド米などで鮮明な成果を実現。  \n- 他地域では今後「売れる返礼品開発」を起点とした地域商社設立が続々と計画・実施されており、まさに境町同様の動きが加速しています。\n\n---\n\nご要望いただいた「全国からの類似事例」をこのような形で整理しました。  \nさらに詳しく補足が必要な地域や、特定の方向性（農業他、観光他）にフォーカスした分析を希望される場合はお知らせください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "content_references": [
            {
              "matched_text": "茨城県境町のように、自治体と民間が連携した「地域商社」モデルや「ふるさと納税」を活用した成功事例は、全国的にも増えています。中でも特に注目すべき自治体を以下にご紹介します。",
              "start_idx": 0,
              "end_idx": 86,
              "safe_urls": [],
              "refs": [],
              "alt": "茨城県境町のように、自治体と民間が連携した「地域商社」モデルや「ふるさと納税」を活用した成功事例は、全国的にも増えています。中でも特に注目すべき自治体を以下にご紹介します。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**概要**：農産加工・バス・観光など6部門を展開する複合地域商社。",
              "start_idx": 130,
              "end_idx": 164,
              "safe_urls": [],
              "refs": [],
              "alt": "**概要**：農産加工・バス・観光など6部門を展開する複合地域商社。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**特徴**：「おたまはん」など60品以上のオリジナル商品を開発し、地元資源を総合的に活用。バス・水道などの公共サービス運営にも取り組む",
              "start_idx": 169,
              "end_idx": 237,
              "safe_urls": [],
              "refs": [],
              "alt": "**特徴**：「おたまはん」など60品以上のオリジナル商品を開発し、地元資源を総合的に活用。バス・水道などの公共サービス運営にも取り組む",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-2",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search0",
              "start_idx": 237,
              "end_idx": 256,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる ...",
                  "url": "https://magazine.connectx.life/articles/1242/?utm_source=chatgpt.com",
                  "pub_date": 1708300800,
                  "snippet": "そんななかで「さかいまちづくり公社」がユニークなのは、自治体と民間が半分ずつ資金を出し合ってつくる地域商社の形を「地域公社」と名乗って活動して ...",
                  "attribution_segments": [
                    "0-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                      "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                      "pub_date": 1746057600,
                      "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                      "attribution": "prtimes.jp"
                    },
                    {
                      "title": "【地域商社】人が集まり稼げる仕組みを確立した官民協働の地域 ...",
                      "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol9?srsltid=AfmBOop5c-felzSCXMEFyZZ0JCgBh5bzcge9WiDCEvG-h_5LxOUx6I09&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "茨城県境町で道の駅の運営とふるさと納税のプロデュースを手掛けている「株式会社さかいまちづくり公社」は、事業の多角的な展開により地域内に人のつながりを生み出し、 ...",
                      "attribution": "furusato-tax.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 18
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "magazine.connectx.life"
                },
                {
                  "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                  "url": "https://batonpass.jp/dictionary/chiiki-shosha?utm_source=chatgpt.com",
                  "pub_date": 1744588800,
                  "snippet": "地域商社の具体的な取り組み事例 · (株)吉田ふるさと村（島根県）. 農産加工部、水道部、バス事業部、観光事業部、稲わら工房、清嵐荘の6つの事業部 · 東北絆 ...",
                  "attribution_segments": [
                    "0-1",
                    "0-2"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "batonpass.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                  "url": "https://batonpass.jp/dictionary/chiiki-shosha?utm_source=chatgpt.com",
                  "pub_date": 1744588800,
                  "snippet": "地域商社の具体的な取り組み事例 · (株)吉田ふるさと村（島根県）. 農産加工部、水道部、バス事業部、観光事業部、稲わら工房、清嵐荘の6つの事業部 · 東北絆 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**動き始め**：2025年度、行政と民間による連携型地域商社設立に向け始動。ふるさと納税では年間約42億円を集める強豪",
              "start_idx": 284,
              "end_idx": 344,
              "safe_urls": [],
              "refs": [],
              "alt": "**動き始め**：2025年度、行政と民間による連携型地域商社設立に向け始動。ふるさと納税では年間約42億円を集める強豪",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "256-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search1",
              "start_idx": 344,
              "end_idx": 363,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                  "pub_date": 1746057600,
                  "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                  "attribution_segments": [
                    "256-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "prtimes.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                  "pub_date": 1746057600,
                  "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**狙い**：鳥獣害対策や食品ロス削減等、地域課題解決プログラムと寄付の継続的発展を連動させる想定。",
              "start_idx": 369,
              "end_idx": 419,
              "safe_urls": [],
              "refs": [],
              "alt": "**狙い**：鳥獣害対策や食品ロス削減等、地域課題解決プログラムと寄付の継続的発展を連動させる想定。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "363-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**概要**：NPO法人「日高わのわ会」と村役場が連携し誕生した地域商社。",
              "start_idx": 459,
              "end_idx": 496,
              "safe_urls": [],
              "refs": [],
              "alt": "**概要**：NPO法人「日高わのわ会」と村役場が連携し誕生した地域商社。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "363-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**特徴**：関係人口の創出を目的とした文化・観光資源活用に注力。企業版ふるさと納税など新しい資金スキームの導入も",
              "start_idx": 501,
              "end_idx": 558,
              "safe_urls": [],
              "refs": [],
              "alt": "**特徴**：関係人口の創出を目的とした文化・観光資源活用に注力。企業版ふるさと納税など新しい資金スキームの導入も",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "363-2",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search5",
              "start_idx": 558,
              "end_idx": 577,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                  "pub_date": 1746057600,
                  "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                  "attribution_segments": [
                    "363-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                      "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                      "pub_date": 1706086204,
                      "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                      "attribution": "chisou.go.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "prtimes.jp"
                },
                {
                  "title": "高知県の地域商社 ふるさと納税事業で利益を生み",
                  "url": "https://www.projectdesign.jp/articles/news/c7aa69e5-e635-4576-ad2f-02176448d209?utm_source=chatgpt.com",
                  "pub_date": 1729209600,
                  "snippet": "日高わのわ会と日高村役場と連携することで、関係人口を創出しながら地域を盛り上げている。 近畿経済産業局公式noteマガジン「KEY PERSON PROFILE」、 ...",
                  "attribution_segments": [
                    "363-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                      "url": "https://batonpass.jp/dictionary/chiiki-shosha?utm_source=chatgpt.com",
                      "pub_date": 1744588800,
                      "snippet": "地域商社の具体的な取り組み事例 · (株)吉田ふるさと村（島根県）. 農産加工部、水道部、バス事業部、観光事業部、稲わら工房、清嵐荘の6つの事業部 · 東北絆 ...",
                      "attribution": "batonpass.jp"
                    },
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                      "pub_date": 1732147200,
                      "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                      "attribution": "bosaitech-pf.go.jp"
                    },
                    {
                      "title": "稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる ...",
                      "url": "https://magazine.connectx.life/articles/1242/?utm_source=chatgpt.com",
                      "pub_date": 1708300800,
                      "snippet": "そんななかで「さかいまちづくり公社」がユニークなのは、自治体と民間が半分ずつ資金を出し合ってつくる地域商社の形を「地域公社」と名乗って活動して ...",
                      "attribution": "magazine.connectx.life"
                    },
                    {
                      "title": "[PDF] 地 創 を担う「地域商社」の動向 ―着 すべき3つのポテンシャル―",
                      "url": "https://www.mitsui.com/mgssi/ja/report/detail/__icsFiles/afieldfile/2022/10/21/2210j_kurihara.pdf?utm_source=chatgpt.com",
                      "pub_date": 1666310400,
                      "snippet": "地域商社の形態としては株式会社が多く、設立者や出資者は、個人、地域住民、自治体、地域経済団体、. 地域金融機関など多様である。 地域商社が取り扱う ...",
                      "attribution": "mitsui.com"
                    },
                    {
                      "title": "地元企業と連携した地方創生モデル「地域商社」の可能性",
                      "url": "https://machiokoshi-japan.com/0104-2/?utm_source=chatgpt.com",
                      "pub_date": 1735948800,
                      "snippet": "地元企業と連携した地方創生モデル「地域商社」の可能性 ; 事例1：北海道の農業産品を世界へ届ける ; 事例2：伝統工芸品を現代的にリデザイン ; (1) 地域経済の ...",
                      "attribution": "machiokoshi-japan.com"
                    },
                    {
                      "title": "[PDF] 令和5年度 地域商社と観光地域づくり法人等との 連携による相乗 ...",
                      "url": "https://www.tohoku.meti.go.jp/koho/report/pdf/2023/10.pdf?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "自治体が起業型の地域おこし協力隊を募集しており、地域商社でサポートしている。 ◇ 連携先のまちづくり会社が受けている自治体のデジタルラボ事業のビジネスモデル. を各 ...",
                      "attribution": "tohoku.meti.go.jp"
                    },
                    {
                      "title": "[PDF] 持続可能な地域づくりに向けて",
                      "url": "https://www.jir-web.co.jp/joyoarc/pdf/201808.pdf?utm_source=chatgpt.com",
                      "pub_date": 1533626306,
                      "snippet": "1 地域商社事業とは、地域にある資源をみつけ、販売先（出口）を考えた企画・開発により地域の. 生産物を高付加価値化して販売するなどの地域経済の新たな司令塔を担う事業で ...",
                      "attribution": "jir-web.co.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 18
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 14
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "projectdesign.jp"
                },
                {
                  "title": "税額控除だけじゃない。「企業版ふるさと納税」の4つの活用モデル ...",
                  "url": "https://www.potluck-yaesu.com/magazine/20250123/2927/?utm_source=chatgpt.com",
                  "pub_date": 1737590400,
                  "snippet": "地縁やプロジェクトへの共感、事業構想段階からの官民連携事業など、さまざまな寄附活用の事例が生まれています。 企業は何のために地域に寄附をするのか？",
                  "attribution_segments": [
                    "363-2"
                  ],
                  "supporting_websites": [
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                      "pub_date": 1732147200,
                      "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                      "attribution": "bosaitech-pf.go.jp"
                    },
                    {
                      "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                      "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                      "pub_date": 1706086204,
                      "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                      "attribution": "chisou.go.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "potluck-yaesu.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "高知県の地域商社 ふるさと納税事業で利益を生み",
                  "url": "https://www.projectdesign.jp/articles/news/c7aa69e5-e635-4576-ad2f-02176448d209?utm_source=chatgpt.com",
                  "pub_date": 1729209600,
                  "snippet": "日高わのわ会と日高村役場と連携することで、関係人口を創出しながら地域を盛り上げている。 近畿経済産業局公式noteマガジン「KEY PERSON PROFILE」、 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**特徴**：企業版ふるさと納税（人材派遣型）を活用し、人材ノウハウを導入して観光振興や地域商社経営の強化に取り組む",
              "start_idx": 657,
              "end_idx": 715,
              "safe_urls": [],
              "refs": [],
              "alt": "**特徴**：企業版ふるさと納税（人材派遣型）を活用し、人材ノウハウを導入して観光振興や地域商社経営の強化に取り組む",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "577-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search13turn0search15",
              "start_idx": 715,
              "end_idx": 749,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                  "pub_date": 1706086204,
                  "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                  "attribution_segments": [
                    "577-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                      "pub_date": 1732147200,
                      "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                      "attribution": "bosaitech-pf.go.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chisou.go.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                  "pub_date": 1706086204,
                  "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null
                },
                {
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                  "pub_date": 1732147200,
                  "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**事例**：両備ホールディングスなど民間企業が企業版ふるさと納税を活用し、観光振興プロジェクトに資金・ノウハウを提供",
              "start_idx": 786,
              "end_idx": 845,
              "safe_urls": [],
              "refs": [],
              "alt": "**事例**：両備ホールディングスなど民間企業が企業版ふるさと納税を活用し、観光振興プロジェクトに資金・ノウハウを提供",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "749-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search13turn0search15",
              "start_idx": 845,
              "end_idx": 879,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                  "pub_date": 1706086204,
                  "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                  "attribution_segments": [
                    "749-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                      "pub_date": 1732147200,
                      "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                      "attribution": "bosaitech-pf.go.jp"
                    },
                    {
                      "title": "税額控除だけじゃない。「企業版ふるさと納税」の4つの活用モデル ...",
                      "url": "https://www.potluck-yaesu.com/magazine/20250123/2927/?utm_source=chatgpt.com",
                      "pub_date": 1737590400,
                      "snippet": "地縁やプロジェクトへの共感、事業構想段階からの官民連携事業など、さまざまな寄附活用の事例が生まれています。 企業は何のために地域に寄附をするのか？",
                      "attribution": "potluck-yaesu.com"
                    },
                    {
                      "title": "寄附取扱額は初の1000億円突破――ふるさと納税地域商社会",
                      "url": "https://prtimes.jp/main/html/rd/p/000000004.000137132.html?utm_source=chatgpt.com",
                      "pub_date": 1747094400,
                      "snippet": "支援自治体数: 176自治体（前年比 130％） – 北海道から沖縄まで全国の自治体を網羅。都市部から過疎地域まで幅広く支援し、自治体財源の確保に貢献しました ...",
                      "attribution": "prtimes.jp"
                    },
                    {
                      "title": "【地域商社】人が集まり稼げる仕組みを確立した官民協働の地域 ...",
                      "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol9?srsltid=AfmBOop5c-felzSCXMEFyZZ0JCgBh5bzcge9WiDCEvG-h_5LxOUx6I09&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "茨城県境町で道の駅の運営とふるさと納税のプロデュースを手掛けている「株式会社さかいまちづくり公社」は、事業の多角的な展開により地域内に人のつながりを生み出し、 ...",
                      "attribution": "furusato-tax.jp"
                    },
                    {
                      "title": "[PDF] 官民連携事業モデルHOWto事例集 - 地方創生",
                      "url": "https://www.chisou.go.jp/sousei/about/ccrc/etc/chousakenkyu_r01/pdf/0521syougaikatsuyaku-kanmin_pfhowto-ntt.pdf?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "✓ 地元自治体のふるさと納税の返礼品にも採用. ✓ 里親は、米作り作業などに参加し、関係人口化. ✓ 同法人が運営する大地の芸術祭と連携したファンづくり. 取組主体. HP ...",
                      "attribution": "chisou.go.jp"
                    },
                    {
                      "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                      "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                      "pub_date": 1746057600,
                      "snippet": "京都府亀岡市（市長：桂川 孝裕）は、地域経済の活性化と多様化する地域課題の解決、さらには好調なふるさと納税（令和5年度寄付額約42億円）の持続的な発展を ...",
                      "attribution": "prtimes.jp"
                    },
                    {
                      "title": "高知県の地域商社 ふるさと納税事業で利益を生み",
                      "url": "https://www.projectdesign.jp/articles/news/c7aa69e5-e635-4576-ad2f-02176448d209?utm_source=chatgpt.com",
                      "pub_date": 1729209600,
                      "snippet": "日高わのわ会と日高村役場と連携することで、関係人口を創出しながら地域を盛り上げている。 近畿経済産業局公式noteマガジン「KEY PERSON PROFILE」、 ...",
                      "attribution": "projectdesign.jp"
                    },
                    {
                      "title": "[PDF] 令和5年度 地域商社と観光地域づくり法人等との 連携による相乗 ...",
                      "url": "https://www.tohoku.meti.go.jp/koho/report/pdf/2023/10.pdf?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "自治体が起業型の地域おこし協力隊を募集しており、地域商社でサポートしている。 ◇ 連携先のまちづくり会社が受けている自治体のデジタルラボ事業のビジネスモデル. を各 ...",
                      "attribution": "tohoku.meti.go.jp"
                    },
                    {
                      "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                      "url": "https://batonpass.jp/dictionary/chiiki-shosha?utm_source=chatgpt.com",
                      "pub_date": 1744588800,
                      "snippet": "地域商社の具体的な取り組み事例 · (株)吉田ふるさと村（島根県）. 農産加工部、水道部、バス事業部、観光事業部、稲わら工房、清嵐荘の6つの事業部 · 東北絆 ...",
                      "attribution": "batonpass.jp"
                    },
                    {
                      "title": "地方銀行による地域商社事業進出の考察 ～課題と収益化への道筋",
                      "url": "https://www.abeam.com/jp/ja/insights/regional_trading/?utm_source=chatgpt.com",
                      "pub_date": 1634688000,
                      "snippet": "地域商社を設立した事例は2021年8月現在、全国で93件確認できた（当社調べ）。出資者の内訳は、地方自治体、民間企業、個人などの事例があるが、なかでも、 ...",
                      "attribution": "abeam.com"
                    },
                    {
                      "title": "地方創生に向けた地域商社設立・提携支援 - PwC",
                      "url": "https://www.pwc.com/jp/ja/services/consulting/x-value-strategy/trading-company-established.html?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "地方銀行が地域商社を設立する際の需要調査、コンセプト創造、パートナーシップ戦略策定、パートナー選定、提携先との交渉、ビジネスモデルの構築、営業活動支援、事業 ...",
                      "attribution": "pwc.com"
                    },
                    {
                      "title": "稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる ...",
                      "url": "https://magazine.connectx.life/articles/1242/?utm_source=chatgpt.com",
                      "pub_date": 1708300800,
                      "snippet": "そんななかで「さかいまちづくり公社」がユニークなのは、自治体と民間が半分ずつ資金を出し合ってつくる地域商社の形を「地域公社」と名乗って活動して ...",
                      "attribution": "magazine.connectx.life"
                    },
                    {
                      "title": "[PDF] 地方創生加速化交付金を活用した取組事例",
                      "url": "https://www.chisou.go.jp/sousei/pdf/kouhukin-jirei.pdf?utm_source=chatgpt.com",
                      "pub_date": 1464349936,
                      "snippet": "○地域商社は、ブランド化、マーケティング、海外販路開拓の事業. や道内大手流通業者、道内加工業者との連携により、漁業者の. 収入向上を図る。 ○金融機関（北洋銀行）は、 ...",
                      "attribution": "chisou.go.jp"
                    },
                    {
                      "title": "[PDF] 地域商社による地域ブランド戦略 - 秋田経済研究所",
                      "url": "https://www.akitakeizai.or.jp/journal/data/20200901_topics.pdf?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "第3セクター ・物産公社など、地方自治体と民間企業が出資した第3セクターが地域商社として活動している例。 ・民間企業・団体と異なり、地域の産業支援という公共的な目 ...",
                      "attribution": "akitakeizai.or.jp"
                    },
                    {
                      "title": "[PDF] 地 創 を担う「地域商社」の動向 ―着 すべき3つのポテンシャル―",
                      "url": "https://www.mitsui.com/mgssi/ja/report/detail/__icsFiles/afieldfile/2022/10/21/2210j_kurihara.pdf?utm_source=chatgpt.com",
                      "pub_date": 1666310400,
                      "snippet": "地域商社の形態としては株式会社が多く、設立者や出資者は、個人、地域住民、自治体、地域経済団体、. 地域金融機関など多様である。 地域商社が取り扱う ...",
                      "attribution": "mitsui.com"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 14
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 18
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 2
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chisou.go.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                  "pub_date": 1706086204,
                  "snippet": "... 地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（人材派遣型）を活用した官民連携プ. ロジェクトを実施。 ○ 企業戦略マネージャーとして地域 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null
                },
                {
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                  "pub_date": 1732147200,
                  "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "日本全国で**地域商社の設立事例は2000年代以降急増**。2021年時点で93件確認され、そのうち約26件は地方銀行が出資",
              "start_idx": 906,
              "end_idx": 968,
              "safe_urls": [],
              "refs": [],
              "alt": "日本全国で**地域商社の設立事例は2000年代以降急増**。2021年時点で93件確認され、そのうち約26件は地方銀行が出資",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "879-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search16",
              "start_idx": 968,
              "end_idx": 988,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "地方銀行による地域商社事業進出の考察 ～課題と収益化への道筋",
                  "url": "https://www.abeam.com/jp/ja/insights/regional_trading/?utm_source=chatgpt.com",
                  "pub_date": 1634688000,
                  "snippet": "地域商社を設立した事例は2021年8月現在、全国で93件確認できた（当社調べ）。出資者の内訳は、地方自治体、民間企業、個人などの事例があるが、なかでも、 ...",
                  "attribution_segments": [
                    "879-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "地方創生に向けた地域商社設立・提携支援 - PwC",
                      "url": "https://www.pwc.com/jp/ja/services/consulting/x-value-strategy/trading-company-established.html?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "地方銀行が地域商社を設立する際の需要調査、コンセプト創造、パートナーシップ戦略策定、パートナー選定、提携先との交渉、ビジネスモデルの構築、営業活動支援、事業 ...",
                      "attribution": "pwc.com"
                    },
                    {
                      "title": "[PDF] 地 創 を担う「地域商社」の動向 ―着 すべき3つのポテンシャル―",
                      "url": "https://www.mitsui.com/mgssi/ja/report/detail/__icsFiles/afieldfile/2022/10/21/2210j_kurihara.pdf?utm_source=chatgpt.com",
                      "pub_date": 1666310400,
                      "snippet": "地域商社の形態としては株式会社が多く、設立者や出資者は、個人、地域住民、自治体、地域経済団体、. 地域金融機関など多様である。 地域商社が取り扱う ...",
                      "attribution": "mitsui.com"
                    },
                    {
                      "title": "[PDF] 地域商社による地域ブランド戦略 - 秋田経済研究所",
                      "url": "https://www.akitakeizai.or.jp/journal/data/20200901_topics.pdf?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "第3セクター ・物産公社など、地方自治体と民間企業が出資した第3セクターが地域商社として活動している例。 ・民間企業・団体と異なり、地域の産業支援という公共的な目 ...",
                      "attribution": "akitakeizai.or.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "abeam.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "地方銀行による地域商社事業進出の考察 ～課題と収益化への道筋",
                  "url": "https://www.abeam.com/jp/ja/insights/regional_trading/?utm_source=chatgpt.com",
                  "pub_date": 1634688000,
                  "snippet": "地域商社を設立した事例は2021年8月現在、全国で93件確認できた（当社調べ）。出資者の内訳は、地方自治体、民間企業、個人などの事例があるが、なかでも、 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "さらに、「ふるさと納税に特化した地域商社」運営を支援する組織では、176自治体をカバーし、約1,086億円の寄付を取り扱う事業もある",
              "start_idx": 994,
              "end_idx": 1060,
              "safe_urls": [],
              "refs": [],
              "alt": "さらに、「ふるさと納税に特化した地域商社」運営を支援する組織では、176自治体をカバーし、約1,086億円の寄付を取り扱う事業もある",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "988-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search9",
              "start_idx": 1060,
              "end_idx": 1079,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "寄附取扱額は初の1000億円突破――ふるさと納税地域商社会",
                  "url": "https://prtimes.jp/main/html/rd/p/000000004.000137132.html?utm_source=chatgpt.com",
                  "pub_date": 1747094400,
                  "snippet": "支援自治体数: 176自治体（前年比 130％） – 北海道から沖縄まで全国の自治体を網羅。都市部から過疎地域まで幅広く支援し、自治体財源の確保に貢献しました ...",
                  "attribution_segments": [
                    "988-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "prtimes.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "寄附取扱額は初の1000億円突破――ふるさと納税地域商社会",
                  "url": "https://prtimes.jp/main/html/rd/p/000000004.000137132.html?utm_source=chatgpt.com",
                  "pub_date": 1747094400,
                  "snippet": "支援自治体数: 176自治体（前年比 130％） – 北海道から沖縄まで全国の自治体を網羅。都市部から過疎地域まで幅広く支援し、自治体財源の確保に貢献しました ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": " ",
              "start_idx": 1751,
              "end_idx": 1751,
              "safe_urls": [],
              "refs": [],
              "alt": "",
              "prompt_text": null,
              "type": "sources_footnote",
              "sources": [
                {
                  "title": "稼いだ利益を地域に還元していく。さかいまちづくり公社が掲げる ...",
                  "url": "https://magazine.connectx.life/articles/1242/?utm_source=chatgpt.com",
                  "attribution": "magazine.connectx.life"
                },
                {
                  "title": "地域商社とは？地方創生の担い手として注目される新たなビジネス ...",
                  "url": "https://batonpass.jp/dictionary/chiiki-shosha?utm_source=chatgpt.com",
                  "attribution": "batonpass.jp"
                },
                {
                  "title": "地域課題解決とふるさと納税強化へ 官民連携の新たな挑戦京都府 ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000065.000052338.html?utm_source=chatgpt.com",
                  "attribution": "prtimes.jp"
                },
                {
                  "title": "高知県の地域商社 ふるさと納税事業で利益を生み",
                  "url": "https://www.projectdesign.jp/articles/news/c7aa69e5-e635-4576-ad2f-02176448d209?utm_source=chatgpt.com",
                  "attribution": "projectdesign.jp"
                },
                {
                  "title": "税額控除だけじゃない。「企業版ふるさと納税」の4つの活用モデル ...",
                  "url": "https://www.potluck-yaesu.com/magazine/20250123/2927/?utm_source=chatgpt.com",
                  "attribution": "potluck-yaesu.com"
                },
                {
                  "title": "[PDF] 「地方版総合戦略の策定・効果検証のための手引き」の改訂",
                  "url": "https://www.chisou.go.jp/sousei/meeting/digiden_chisou_setsumeikai/pdf/r06-01-16-shiryou3.pdf?utm_source=chatgpt.com",
                  "attribution": "chisou.go.jp"
                },
                {
                  "title": "地方銀行による地域商社事業進出の考察 ～課題と収益化への道筋",
                  "url": "https://www.abeam.com/jp/ja/insights/regional_trading/?utm_source=chatgpt.com",
                  "attribution": "abeam.com"
                }
              ],
              "has_images": false
            }
          ],
          "safe_urls": [],
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "chisou.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/sousei/pdf/kouhukin-jirei.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 地方創生加速化交付金を活用した取組事例",
                  "snippet": "○地域商社は、ブランド化、マーケティング、海外販路開拓の事業. や道内大手流通業者、道内加工業者との連携により、漁業者の. 収入向上を図る。 ○金融機関（北洋銀行）は、 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 2
                  },
                  "pub_date": null,
                  "attribution": "chisou.go.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/sousei/about/ccrc/etc/chousakenkyu_r01/pdf/0521syougaikatsuyaku-kanmin_pfhowto-ntt.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 官民連携事業モデルHOWto事例集 - 地方創生",
                  "snippet": "✓ 地元自治体のふるさと納税の返礼品にも採用. ✓ 里親は、米作り作業などに参加し、関係人口化. ✓ 同法人が運営する大地の芸術祭と連携したファンづくり. 取組主体. HP ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 7
                  },
                  "pub_date": null,
                  "attribution": "chisou.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "furusato-tax.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol9?srsltid=AfmBOop5c-felzSCXMEFyZZ0JCgBh5bzcge9WiDCEvG-h_5LxOUx6I09&utm_source=chatgpt.com",
                  "title": "【地域商社】人が集まり稼げる仕組みを確立した官民協働の地域 ...",
                  "snippet": "茨城県境町で道の駅の運営とふるさと納税のプロデュースを手掛けている「株式会社さかいまちづくり公社」は、事業の多角的な展開により地域内に人のつながりを生み出し、 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 3
                  },
                  "pub_date": null,
                  "attribution": "furusato-tax.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "akitakeizai.or.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.akitakeizai.or.jp/journal/data/20200901_topics.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 地域商社による地域ブランド戦略 - 秋田経済研究所",
                  "snippet": "第3セクター ・物産公社など、地方自治体と民間企業が出資した第3セクターが地域商社として活動している例。 ・民間企業・団体と異なり、地域の産業支援という公共的な目 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 4
                  },
                  "pub_date": null,
                  "attribution": "akitakeizai.or.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "mitsui.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.mitsui.com/mgssi/ja/report/detail/__icsFiles/afieldfile/2022/10/21/2210j_kurihara.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 地 創 を担う「地域商社」の動向 ―着 すべき3つのポテンシャル―",
                  "snippet": "地域商社の形態としては株式会社が多く、設立者や出資者は、個人、地域住民、自治体、地域経済団体、. 地域金融機関など多様である。 地域商社が取り扱う ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 6
                  },
                  "pub_date": 1666310400,
                  "attribution": "mitsui.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "jir-web.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.jir-web.co.jp/joyoarc/pdf/201808.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 持続可能な地域づくりに向けて",
                  "snippet": "1 地域商社事業とは、地域にある資源をみつけ、販売先（出口）を考えた企画・開発により地域の. 生産物を高付加価値化して販売するなどの地域経済の新たな司令塔を担う事業で ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 8
                  },
                  "pub_date": null,
                  "attribution": "jir-web.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "jri.or.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.jri.or.jp/wp/wp-content/uploads/2020/05/chihousousei2019.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 地方創生に関する先行事例研究 結果の概要",
                  "snippet": "本稿で紹介する取組事例は、地域商社やまぐち(山. 口県)、山形銀行(山形県) ... 従来の地域商社の主体は、地方自治体や民間. (企業や各種組合、商工会・商工会議所 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 10
                  },
                  "pub_date": null,
                  "attribution": "jri.or.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "pwc.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.pwc.com/jp/ja/services/consulting/x-value-strategy/trading-company-established.html?utm_source=chatgpt.com",
                  "title": "地方創生に向けた地域商社設立・提携支援 - PwC",
                  "snippet": "地方銀行が地域商社を設立する際の需要調査、コンセプト創造、パートナーシップ戦略策定、パートナー選定、提携先との交渉、ビジネスモデルの構築、営業活動支援、事業 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 12
                  },
                  "pub_date": null,
                  "attribution": "pwc.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "meti.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.tohoku.meti.go.jp/koho/report/pdf/2023/10.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 令和5年度 地域商社と観光地域づくり法人等との 連携による相乗 ...",
                  "snippet": "自治体が起業型の地域おこし協力隊を募集しており、地域商社でサポートしている。 ◇ 連携先のまちづくり会社が受けている自治体のデジタルラボ事業のビジネスモデル. を各 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 14
                  },
                  "pub_date": null,
                  "attribution": "meti.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "bosaitech-pf.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.bosaitech-pf.go.jp/doc/seminar9_07.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "snippet": "○ ⾼原町、(株)宮崎太陽銀⾏、(株)宮崎太陽キャピタル、奥霧島地域商社ツナガルたかはる. (株)との4者連携協定を締結し、企業版ふるさと納税（⼈材派遣型）を活 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 15
                  },
                  "pub_date": 1732147200,
                  "attribution": "bosaitech-pf.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "machiokoshi-japan.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://machiokoshi-japan.com/0104-2/?utm_source=chatgpt.com",
                  "title": "地元企業と連携した地方創生モデル「地域商社」の可能性",
                  "snippet": "地元企業と連携した地方創生モデル「地域商社」の可能性 ; 事例1：北海道の農業産品を世界へ届ける ; 事例2：伝統工芸品を現代的にリデザイン ; (1) 地域経済の ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 17
                  },
                  "pub_date": 1735948800,
                  "attribution": "machiokoshi-japan.com"
                }
              ]
            }
          ],
          "citations": [],
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "a14a6a60-bfad-45a9-a74c-955365ba2f18",
          "request_id": "95063e2c2cf61a1e-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "a14a6a60-bfad-45a9-a74c-955365ba2f18",
      "children": [
        "46c69e62-9675-476b-941b-04ec3cb2b539"
      ]
    },
    "46c69e62-9675-476b-941b-04ec3cb2b539": {
      "id": "46c69e62-9675-476b-941b-04ec3cb2b539",
      "message": {
        "id": "46c69e62-9675-476b-941b-04ec3cb2b539",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750035200.9238238,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "「地域特産品を輝かせる地域公社」へに向けた取り組みを目指していきたいと思っていますので、そこにフォーカスしてください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "9506546b5f22deb7-NRT",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "d0692144-efea-43db-84b8-34986b572847",
      "children": [
        "e375731a-812c-45e2-b989-4d64291f2c1a"
      ]
    },
    "e375731a-812c-45e2-b989-4d64291f2c1a": {
      "id": "e375731a-812c-45e2-b989-4d64291f2c1a",
      "message": {
        "id": "e375731a-812c-45e2-b989-4d64291f2c1a",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750035202.334384,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "承知しました。以下では、あなたの目指す「地域特産品を輝かせる地域公社」構想にフォーカスして、全国の先行事例を踏まえながら、\n\n---\n\n## 🔶 ビジョン：「地域特産品を輝かせる地域公社」とは？\n\n### ▶ 定義：\n単なる地場産品の販売拠点ではなく、  \n**「特産品を通じて地域の魅力・課題・価値を翻訳・編集・発信する地域主体」**。\n\n### ▶ 役割：\n- 地域資源（農水産物・文化・人）を編集し“プロダクト化”\n- 企画・流通・ブランド構築・販路拡大まで一気通貫で支援\n- 「商品」としての価値向上だけでなく、「関係人口」「産業振興」「住民誇り」につながるしくみづくり\n\n---\n\n## 🔸 代表的な全国事例（特産品ブランディングに特化）\n\n### ① 茨城県境町：干し芋の町ブランディング  \n- **干し芋専用の加工場・カフェ・返礼品戦略を構築**\n- 全量買い上げ契約 → 農家の新規参入を促進  \n- 廃棄部分も活用し、「いもグミ」「飼料」などアップサイクル商品へ  \n- ふるさと納税で全国的知名度獲得 → **地域商社が主導する「地域特産品の編集」**\n\n👉 特産品を「売る」から「地域を代表する主語」へ昇華\n\n---\n\n### ② 島根県雲南市（吉田ふるさと村）：食文化全体をブランド化  \n- 地域特産の「おたまはん（たまごかけ醤油）」を核に  \n  → 醤油、米、鶏卵、器、棚田風景までをストーリー化  \n- 「1商品＝1地域物語」として他産地にない価値を創出  \n- 直販・ふるさと納税・EC・体験型観光へ波及  \n\n👉 **商品を起点とした“地域物語”のプロデュース**\n\n---\n\n### ③ 長野県小布施町：栗を核にした産業観光公社的機能  \n- 「栗」を文化・町歩き・アートと融合（例：小布施堂）  \n- ブランド化→集客→高価格帯商品展開→雇用創出  \n- 「小布施の栗」は単品ではなく、**小布施のライフスタイルの象徴**として展開  \n\n👉 単品勝負ではなく、「風景ごと」価値を売る\n\n---\n\n## 🔸 特産品が輝く地域公社をつくるポイント（先進地からの学び）\n\n| 視点 | 要素 | 具体的な仕組み・工夫 |\n|------|------|------------------------|\n| **① 商品開発** | 地域資源の編集 | 未活用品目を「価値」に翻訳（例：間引き野菜 → スープ） |\n| **② ストーリー化** | 特産品×物語 | 「誰が・なぜ作ったか」を伝えるプロダクト設計 |\n| **③ ブランド設計** | 統一した世界観 | ラベル・写真・言葉・パッケージに一貫性を |\n| **④ 販路戦略** | EC・ふるさと納税 | 自治体発信のプラットフォームとの連携強化 |\n| **⑤ 地域内循環** | 生産→加工→販売 | 地域内に加工所設置／雇用創出で持続性アップ |\n| **⑥ 外部人材活用** | プロの編集力 | デザイナー／ディレクター／コピーライター等の外部導入 |\n\n---\n\n## 🔸 これから実現するためのステップ案（ウトマチ百貨店含む）\n\n| フェーズ | アクション | 内容 |\n|----------|------------|------|\n| **Step 1** | 地域資源棚卸 | 特産品、未活用農産物、生産者の想いなど収集 |\n| **Step 2** | 試作・実験 | ふるさと納税、イベント、直売所で「売れる実験」 |\n| **Step 3** | 世界観統一 | ブランド名、ラベル、POP、紹介文などの一貫化 |\n| **Step 4** | 加工場・流通拠点整備 | 町内に小さな加工場を設置／一次加工の地元化 |\n| **Step 5** | 地域公社設立 | 自治体＋民間で50％ずつ出資する運営会社体制へ |\n| **Step 6** | 定番化と外展開 | 小売店、ギフトEC、観光拠点へ展開／次世代育成も |\n\n---\n\n## 🔸 提案：理念に込める言葉の案\n\n- 「地域の宝を、世界の食卓へ」\n- 「つくる人の想いが見える味を」\n- 「ふだんにも、贈りものにも。地域のやさしさを。」\n- 「食べものの中に、町がある。」\n\n---\n\n必要であれば、上記の構想を使った「提案書」「設立企画書」「パワポスライド」なども作成可能です。  \n次に進めたい内容を教えてください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop",
            "stop_tokens": [
              200002
            ]
          },
          "is_complete": true,
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "46c69e62-9675-476b-941b-04ec3cb2b539",
          "request_id": "9506546b5f22deb7-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "46c69e62-9675-476b-941b-04ec3cb2b539",
      "children": [
        "681fc595-d72e-4e15-b9c2-74c7f9335655"
      ]
    },
    "681fc595-d72e-4e15-b9c2-74c7f9335655": {
      "id": "681fc595-d72e-4e15-b9c2-74c7f9335655",
      "message": {
        "id": "681fc595-d72e-4e15-b9c2-74c7f9335655",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750035298.5087218,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "提案書の作成をお願いします。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "950656cbcf07deb7-NRT",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "e375731a-812c-45e2-b989-4d64291f2c1a",
      "children": [
        "daef781c-b493-4a75-b1e1-8e6c80aa6517"
      ]
    },
    "daef781c-b493-4a75-b1e1-8e6c80aa6517": {
      "id": "daef781c-b493-4a75-b1e1-8e6c80aa6517",
      "message": {
        "id": "daef781c-b493-4a75-b1e1-8e6c80aa6517",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750035299.916556,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "{\n  \"name\": \"地域公社_提案書\",\n  \"type\": \"document\",\n  \"content\": \"## 提案書\\n\\n### 事業名：\\n地域特産品を輝かせる地域公社設立プロジェクト\\n\\n### 提案者：\\n（貴自治体名・担当課）\\n\\n---\\n\\n## １．背景と目的\\n\\n地域には、魅力ある特産品・文化資源・担い手が存在する一方で、販路拡大・加工体制・情報発信・利益循環の面で課題を抱えています。とくに一次産品のままでは価値を最大化できず、農業・漁業・商工業の担い手減少も深刻化しています。\\n\\nそこで本提案では、「地域の特産品を輝かせる」ことを軸に、地域資源を編集・加工・発信し、産業振興と関係人口増加を生む『地域公社』の設立を提案いたします。\\n\\n---\\n\\n## ２．基本構想\\n\\n### （１）事業コンセプト\\n「地域の宝を、世界の食卓へ」\\n\\n- 地域特産品を商品として磨き上げ、ブランディング・流通・PRを一体化\\n- 生産〜加工〜流通〜販売までを地域内で循環可能に\\n- 自治体×民間が共同出資する地域公社で中核を担う\\n\\n### （２）実施体制\\n- 自治体（地域振興課等）…政策支援／出資\\n- 地元事業者団体（農業者、商工会、漁協など）…商品供給・運営協力\\n- 外部パートナー（デザイナー、流通事業者、DX支援など）…ブランディング・販路強化\\n\\n### （３）収益構造\\n- 商品販売（ふるさと納税、EC、ギフト展開）\\n- 委託製造・OEM（地域内加工所）\\n- 観光体験（特産品を核とした体験型商品）\\n\\n---\\n\\n## ３．展開イメージ\\n\\n| ステップ | 内容 |\\n|----------|------|\\n| Step1 | 地域資源の棚卸・特産品リストアップ |\\n| Step2 | 試作品開発とテスト販売（道の駅・EC・イベント等） |\\n| Step3 | ブランド・世界観統一（パッケージ・POP・物語設計） |\\n| Step4 | 小規模加工施設の整備・農家と加工の接続 |\\n| Step5 | 自治体・地元・民間出資による地域公社設立 |\\n| Step6 | 拠点整備（販路・体験型施設）と外部展開 |\\n\\n---\\n\\n## ４．モデル事例との比較\\n\\n| 自治体 | 特産品 | 地域公社の特徴 |\\n|--------|----------|----------------|\\n| 境町（茨城県） | 干し芋・米 | 自治体50％出資、道の駅中心、ふるさと納税活用で99億円調達 |\\n| 雲南市（島根県） | 醤油・米・たまご | 商品単位で物語化し観光と連動／観光・福祉も含む総合体 |\\n| 小布施町（長野県） | 栗 | 産品×アート×町歩きで観光資源に昇華 |\\n\\n---\\n\\n## ５．今後の進め方（提案）\\n\\n1. 庁内プロジェクトチームの設置（関係部署横断）\\n2. 地域資源調査・加工可能性の検討\\n3. 既存の販売先・イベントとの連携強化\\n4. 外部専門家（ブランディング・デザイン等）とのネットワーク形成\\n5. 民間事業者との連携会議→地域公社立ち上げ検討\\n6. 交付金・ふるさと納税財源・クラウドファンディング等の活用検討\\n\\n---\\n\\n## ６．おわりに\\n\\n本プロジェクトは、地域の「宝」を磨き、「稼げる地域」への第一歩となります。単なる物販ではなく、「暮らしの誇り」「地域の未来」をつくる事業として、関係人口・担い手・住民の誇りを巻き込みながら、持続可能な地域経済モデルを共に築いていきましょう。\"\n}"
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
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "681fc595-d72e-4e15-b9c2-74c7f9335655",
          "request_id": "950656cbcf07deb7-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "canmore.create_textdoc",
        "channel": null
      },
      "parent": "681fc595-d72e-4e15-b9c2-74c7f9335655",
      "children": [
        "b73bc78b-570d-4758-b58e-7d52d719080a"
      ]
    },
    "b73bc78b-570d-4758-b58e-7d52d719080a": {
      "id": "b73bc78b-570d-4758-b58e-7d52d719080a",
      "message": {
        "id": "b73bc78b-570d-4758-b58e-7d52d719080a",
        "author": {
          "role": "tool",
          "name": "canmore.create_textdoc",
          "metadata": {}
        },
        "create_time": 1750035335.585328,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "Successfully created text document '地域公社 提案書' which will be referenced in all future messages with the unique identifier textdoc_id: '684f6b83627881919e0ec6801d940d43'"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 0,
        "metadata": {
          "canvas": {
            "textdoc_id": "684f6b83627881919e0ec6801d940d43",
            "textdoc_type": "document",
            "version": 1,
            "title": "地域公社 提案書",
            "create_source": "model"
          },
          "command": "create_textdoc",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "daef781c-b493-4a75-b1e1-8e6c80aa6517",
          "request_id": "950656cbcf07deb7-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "daef781c-b493-4a75-b1e1-8e6c80aa6517",
      "children": [
        "9f3f6978-21a7-4eda-84fd-e29eade71372"
      ]
    },
    "9f3f6978-21a7-4eda-84fd-e29eade71372": {
      "id": "9f3f6978-21a7-4eda-84fd-e29eade71372",
      "message": {
        "id": "9f3f6978-21a7-4eda-84fd-e29eade71372",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750035331.558403,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "「地域特産品を輝かせる地域公社」に向けた提案書を作成しました。  \n内容は以下の要素で構成されています：\n\n- 背景と目的\n- 基本構想（コンセプト、体制、収益構造）\n- 展開イメージ（ステップ設計）\n- モデル事例との比較（境町など）\n- 今後の進め方\n- 結びの言葉\n\n内容の加筆・修正や、プレゼン用スライドへの転用も可能です。ご希望があればお知らせください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop",
            "stop_tokens": [
              200002
            ]
          },
          "is_complete": true,
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "b73bc78b-570d-4758-b58e-7d52d719080a",
          "request_id": "950656cbcf07deb7-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "b73bc78b-570d-4758-b58e-7d52d719080a",
      "children": [
        "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22"
      ]
    },
    "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22": {
      "id": "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22",
      "message": {
        "id": "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062263.639052,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "宮崎県真庭市について同様の時点でリサーチしてください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "9508e91dcdf2686d-NRT",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "9f3f6978-21a7-4eda-84fd-e29eade71372",
      "children": [
        "8f76d9e8-0702-4694-a41c-82a83d83483e"
      ]
    },
    "8f76d9e8-0702-4694-a41c-82a83d83483e": {
      "id": "8f76d9e8-0702-4694-a41c-82a83d83483e",
      "message": {
        "id": "8f76d9e8-0702-4694-a41c-82a83d83483e",
        "author": {
          "role": "system",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062276.151204,
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
          "rebase_system_message": true,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute",
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "5c01f131-a23a-433b-a1d4-0e6fb4bd5b22",
      "children": [
        "4d168ba5-cf09-412b-bbc0-ed88d82e630f"
      ]
    },
    "4d168ba5-cf09-412b-bbc0-ed88d82e630f": {
      "id": "4d168ba5-cf09-412b-bbc0-ed88d82e630f",
      "message": {
        "id": "4d168ba5-cf09-412b-bbc0-ed88d82e630f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062276.151351,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "8f76d9e8-0702-4694-a41c-82a83d83483e",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8f76d9e8-0702-4694-a41c-82a83d83483e",
      "children": [
        "bccebd75-2092-4b00-ac88-e9c6e4d69a3e"
      ]
    },
    "bccebd75-2092-4b00-ac88-e9c6e4d69a3e": {
      "id": "bccebd75-2092-4b00-ac88-e9c6e4d69a3e",
      "message": {
        "id": "bccebd75-2092-4b00-ac88-e9c6e4d69a3e",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062265.0060546,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "search(\"\\u5bae\\u5d0e\\u770c\\u771f\\u5ead\\u5e02\\u306b\\u3064\\u3044\\u3066\\u540c\\u69d8\\u306e\\u6642\\u70b9\\u3067\\u30ea\\u30b5\\u30fc\\u30c1\\u3057\\u3066\\u304f\\u3060\\u3055\\u3044\")"
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "sonic_classification_result": {
            "latency_ms": 500.7315701805055,
            "search_prob": 0.802687589286064,
            "force_search_threshold": 0.54,
            "classifier_config_name": "sonic_force_pg_switcher_renderer_config"
          },
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "4d168ba5-cf09-412b-bbc0-ed88d82e630f",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "web",
        "channel": null
      },
      "parent": "4d168ba5-cf09-412b-bbc0-ed88d82e630f",
      "children": [
        "404d42a9-f018-4b4f-855f-53d9895e8680"
      ]
    },
    "404d42a9-f018-4b4f-855f-53d9895e8680": {
      "id": "404d42a9-f018-4b4f-855f-53d9895e8680",
      "message": {
        "id": "404d42a9-f018-4b4f-855f-53d9895e8680",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062276.15146,
        "update_time": null,
        "content": {
          "content_type": "thoughts",
          "thoughts": [
            {
              "summary": "検索中",
              "content": "ユーザーが「宮崎県真庭市」と聞いていますが、真庭市は岡山県にありますね。ユーザーの入力に間違いがあるかもしれません。私はウェブで検索して、正しい情報を確認しようと思います。あらためて情報を調べてみますね。",
              "chunks": [],
              "finished": true
            }
          ],
          "source_analysis_msg_id": "e6f46225-c653-4c99-a68d-20613346c00b"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "is_reasoning",
          "citations": [],
          "content_references": [],
          "search_turns_count": 0,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "bccebd75-2092-4b00-ac88-e9c6e4d69a3e",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "bccebd75-2092-4b00-ac88-e9c6e4d69a3e",
      "children": [
        "fdd0cc42-9a70-4a0f-b932-fcf68d953b19"
      ]
    },
    "fdd0cc42-9a70-4a0f-b932-fcf68d953b19": {
      "id": "fdd0cc42-9a70-4a0f-b932-fcf68d953b19",
      "message": {
        "id": "fdd0cc42-9a70-4a0f-b932-fcf68d953b19",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750062265.153161,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "{\"search_query\":[{\"q\":\"真庭市 地域商社 ふるさと納税\"},{\"q\":\"真庭市 地域商社 取り組み\"}]}"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop",
            "stop_tokens": [
              200012
            ]
          },
          "is_complete": true,
          "citations": [],
          "content_references": [],
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "search_queries": [
            {
              "type": "search",
              "q": "真庭市 地域商社 ふるさと納税"
            },
            {
              "type": "search",
              "q": "真庭市 地域商社 取り組み"
            }
          ],
          "search_display_string": "Searching the web...",
          "searched_display_string": "Searched the web...",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "404d42a9-f018-4b4f-855f-53d9895e8680",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "web.run",
        "channel": null
      },
      "parent": "404d42a9-f018-4b4f-855f-53d9895e8680",
      "children": [
        "232a3b81-304b-4b66-96e7-2a4862290460"
      ]
    },
    "232a3b81-304b-4b66-96e7-2a4862290460": {
      "id": "232a3b81-304b-4b66-96e7-2a4862290460",
      "message": {
        "id": "232a3b81-304b-4b66-96e7-2a4862290460",
        "author": {
          "role": "tool",
          "name": "web.run",
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750062266.2515585,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            ""
          ]
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "www.maff.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.maff.go.jp/j/nousin/attach/pdf/impact-83.pdf",
                  "title": "[PDF] 2(PDF : 1726KB)",
                  "snippet": "企業等から人を呼ぶ・ソリューションを提供してもらうに当たっては、地域活性化起業人や. ふるさと納税(人材派遣型)等の制度が有効に作用したものの、使いにくさも感じた。",
                  "ref_id": null,
                  "pub_date": 1741238093,
                  "attribution": "www.maff.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "loftwork.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://loftwork.com/jp/event/20220720_maniwa/report",
                  "title": "“共感”でつながる地域と都市。 岡山県真庭市の実践から見えてきた",
                  "snippet": "電通を退職後は、地域に特化した商社に転職して、広報やオウンドメディアの運営、新規事業開発を担当していました。 地域に移住するのは、実は真庭市で2 ...",
                  "ref_id": null,
                  "pub_date": 1658275200,
                  "attribution": "loftwork.com"
                },
                {
                  "type": "search_result",
                  "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01",
                  "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                  "snippet": "岡山県真庭市は、地域内外の企業どうしがチームを組み、サステナブルなビジネスを共創するプログラム「Cultivate the future maniwa（通称：カルマニ）」 ...",
                  "ref_id": null,
                  "pub_date": 1728000000,
                  "attribution": "loftwork.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.furusato-tax.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/search?q=%E4%B8%80%E8%88%AC%E7%A4%BE%E5%9B%A3%E6%B3%95%E4%BA%BA%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%BD&srsltid=AfmBOopBsFORESLCUtK3LHoge0OcCGQJadBLnzpmiqM_Oul7nYkRAJH-",
                  "title": "「一般社団法人地域商社ふるさぽ」 検索結果一覧 - ふるさとチョイス",
                  "snippet": "一般社団法人地域商社ふるさぽのお礼の品の検索ページはこちら。「ふるさとチョイス」ならフリーワードやカテゴリ選択、寄付金額や地域で絞り込んでお礼の品を探せます ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.furusato-tax.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol34?srsltid=AfmBOooq3WjJO-zJnxmirzvrVs6Vvp1uoddiMoyGsbvHxgOzsis7uTOh",
                  "title": "【キーワード1】地域商社／地域の逸品を発掘し、PR。自走する ...",
                  "snippet": "しかし、地域商社により発掘され、ふるさと納税のお礼の品として採用されれば、そのぶん販路が拡大し、売り上げ増や新規顧客の獲得などのメリットが得られます。生産 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.furusato-tax.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.city.maniwa.lg.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/27344.html",
                  "title": "真庭市における企業版ふるさと納税（地方創生応援税制）",
                  "snippet": "※企業版ふるさと納税(地方創生応援税制)によりご寄附いただく場合、令和2年度(2020年度)から控除割合が寄付額の最大約9割まで引き上げられました。 真庭市 ...",
                  "ref_id": null,
                  "pub_date": 1688083200,
                  "attribution": "www.city.maniwa.lg.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html",
                  "title": "真庭市のSDGs取り組み状況",
                  "snippet": "真庭市では、様々な関係者が協力し、文化遺産等の地域資源を活用した地域づくりの実現に向けた取り組みを進めています。 ... 真庭市脱炭素先行地域推進委員 ...",
                  "ref_id": null,
                  "pub_date": 1676332800,
                  "attribution": "www.city.maniwa.lg.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "prtimes.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html",
                  "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                  "snippet": "外部からの目線を活かし、真庭市の魅力を発掘、関係人口創出及び移住者の創出につながる地域の課題解決に向けた参加型のコンテンツを企画、提案します。",
                  "ref_id": null,
                  "pub_date": 1691020800,
                  "attribution": "prtimes.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.pasonagroup.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.pasonagroup.co.jp/news/index112.html?dispmid=798&itemid=4533",
                  "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                  "snippet": "・企業版ふるさと納税の推進 等. お問合せ, 株式会社丹後王国ブルワリー 電話番号 0772-65-4193. 『地域共創プロジェクト』 概要. 開始, 2022 年 7月20日 ...",
                  "ref_id": null,
                  "pub_date": 1669766400,
                  "attribution": "www.pasonagroup.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.chisou.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf",
                  "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                  "snippet": "企業版ふるさと納税（⼈材派遣型）活⽤事例②. 両備ホールディングス株式会社 ⇒ 岡⼭県真庭市（観光振興事業）. ○ 企業版ふるさと納税（⼈材派遣型）の仕組みを全国で初めて活⽤。",
                  "ref_id": null,
                  "pub_date": 1740476825,
                  "attribution": "www.chisou.go.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf",
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                  "ref_id": null,
                  "pub_date": 1692316800,
                  "attribution": "www.chisou.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "pasonagroup.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://pasonagroup.co.jp/news/tabid312.html?dispmid=821&itemid=4533",
                  "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                  "snippet": "この度、岡山県真庭市と包括連携協定を結ぶことで、同地域での新規就農者や観光分野で活躍する人材育成を行ってまいります。また、地域産品を活かした商品 ...",
                  "ref_id": null,
                  "pub_date": 1669766400,
                  "attribution": "pasonagroup.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.sanyonews.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.sanyonews.jp/article/1734223",
                  "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                  "snippet": "真庭市は市内の農家や農業者の支援に向けた法人を2026年度に官民で立ち上げる。市産の農畜産物を県内外に売り込む地域商社機能に加え、農作業の受委託 ...",
                  "ref_id": null,
                  "pub_date": 1748908800,
                  "attribution": "www.sanyonews.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.sanyonews.jp/article/1740346",
                  "title": "【ふるさと納税限定】高級品質の「今治タオル」を日常 ... - 山陽新聞",
                  "snippet": "【ふるさと納税限定】高級品質の「今治タオル」を日常生活に！今治市の地域商社と老舗タオルメーカーだからこそ実現できた”贅沢だけど手が届く”特別仕様の ...",
                  "ref_id": null,
                  "pub_date": 1749802506.321339,
                  "attribution": "www.sanyonews.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "cocomaniwa.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://cocomaniwa.com/loftwork20220901/",
                  "title": "真庭市内の企業と都心部の企業が共に、真庭の未来に繋がる ...",
                  "snippet": "真庭市内の事業者と都心部の企業が共に、SDGsの視点から真庭の未来に繋がるイノベーション創出を目指すプログラムを11月より開催します。",
                  "ref_id": null,
                  "pub_date": 1661990400,
                  "attribution": "cocomaniwa.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.web3-chihou-sousei.net",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/",
                  "title": "岡山県真庭市 - WEB3地方創生ねっと",
                  "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.web3-chihou-sousei.net"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.vill.shinjo.okayama.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.vill.shinjo.okayama.jp/index.php?id=2834",
                  "title": "企業版ふるさと納税による寄附をいただいた企業の紹介 - 新庄村",
                  "snippet": "寄附企業, 企業のご紹介, 寄付額. 有限会社オオタ電業. （岡山県真庭市本郷2053-9）. 10万円. アイサワ工業株式会社. （岡山県岡山市北区表町1-5-1）. 500万円.",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.vill.shinjo.okayama.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "cehub.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://cehub.jp/interview/maniwa-circular-city-1/",
                  "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                  "snippet": "木材の有効活用と並んで、食品廃棄物の有効活用は重要な取り組みだ。 この取り組みは、真庭市の一部地域から収集した生ごみ・し尿・浄化槽汚泥を年間計画 ...",
                  "ref_id": null,
                  "pub_date": 1649721600,
                  "attribution": "cehub.jp"
                }
              ]
            }
          ],
          "debug_sonic_thread_id": "thread_684f67740ef48003bb3146f61491eec6",
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "fdd0cc42-9a70-4a0f-b932-fcf68d953b19",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "fdd0cc42-9a70-4a0f-b932-fcf68d953b19",
      "children": [
        "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f"
      ]
    },
    "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f": {
      "id": "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f",
      "message": {
        "id": "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750062276.151613,
        "update_time": null,
        "content": {
          "content_type": "reasoning_recap",
          "content": "思考時間: 数秒"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "reasoning_ended",
          "finished_duration_sec": 3,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "232a3b81-304b-4b66-96e7-2a4862290460",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "232a3b81-304b-4b66-96e7-2a4862290460",
      "children": [
        "d50648e2-f914-4cfe-adaf-f20f382edc2c"
      ]
    },
    "d50648e2-f914-4cfe-adaf-f20f382edc2c": {
      "id": "d50648e2-f914-4cfe-adaf-f20f382edc2c",
      "message": {
        "id": "d50648e2-f914-4cfe-adaf-f20f382edc2c",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1750062268.261984,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "以下は岡山県真庭市における、茨城・境町と同様に「地域特産品を輝かせる地域公社」モデルを目指す取り組みの現状リサーチです。特に地域商社、ふるさと納税、関係人口創出などにフォーカスしました。\n\n---\n\n## 🏘️ 1. 地域商社モデルの検討状況  \n- **2026年度に向けた法人設立計画**  \n  真庭市は2026年度に向け、農家や農業者支援を目的とした官民連携型法人（地域商社）を設立予定です。県内外で地域産品の販路拡大や農作業受託などのトータル支援を実施予定ですciteturn0search9。  \n  この法人は「地域特産品の発掘・ブランド化」を市の農畜産業振興と結びつける重要な中核拠点となります。\n\n---\n\n## 💼 2. 企業版ふるさと納税（人材派遣型）の先駆的導入  \n- **全国初の観光振興人材派遣モデル**  \n  両備ホールディングスの人材を観光振興へ派遣する手法を、真庭市は全国で初めて活用しましたciteturn0search7turn0search10。  \n- 企業からの寄付により、専門性を持つ人材を派遣。この知見を活用し観光政策や発信拠点「GREENable HIRUZEN」の整備を強化しましたciteturn0search7turn0search10。\n\n---\n\n## 🌿 3. 関係人口創出への積極的な取り組み  \n- **“関係人口”創出プロジェクト：つながるLAB in 真庭**  \n  株式会社SAGOJOと連携し、地域アンバサダーをオンライン含む事前育成→現地イベント運営に参画。地域課題への解決提案も実施し、外部視点の取り込みに成功citeturn0search4。  \n- **サステナブル共創プログラム「Cultivate the future maniwa」**  \n  2024年10月〜2025年2月に、市内外企業／クリエイターが協働し「灰の利活用」「限界集落場づくり」「地域マイクロブルワリー」などのテーマで新ビジネスを共創。専門人材活用と地域課題解決を両立citeturn0search6。\n\n---\n\n## 🌱 4. 地域資源とデジタル技術の融合  \n- **NFTによる文化・自然資源のデジタル保存と活用**  \n  2023年よりNFT技術を活用し、絶滅危惧種昆虫や文化資源の保護と可視化を目的とした取り組みを推進中citeturn0search15。  \n  Web3技術と地域資源の融合を図る先進的な取り組みです。\n\n---\n\n## 🔄 5. 循環型／サーキュラー経済モデルの構築  \n- **バイオマス発電・食品廃棄物の利活用**  \n  一部地域で生ごみ等をメタン発酵処理し、液肥や発電に再利用するプラントを稼働。5 t/日の液肥提供で農家の肥料コスト削減に貢献中citeturn0search17。  \n- **SDGs共創支援**  \n  道路環境整備や文化資源保全、脱炭素活動など、184団体が参加する多様な市民参加型施策が進行中citeturn0search13。\n\n---\n\n## 💡 真庭市モデルの特徴と強み  \n\n| 観点 | 特徴と強み |\n|------|------------|\n| **官民連携体制** | 地域商社設立を通じ、官×民で販路拡大や加工支援などを包括的に推進 |\n| **人材導入・共創型設計** | 企業版ふるさと納税派遣や共創プログラムで専門知見・都市資源を活用 |\n| **関係人口・移住促進** | アンバサダー制度や共創イベントを通じ、外部人材が地域課題解決へコミット |\n| **特産品×デジタル融合** | NFTやバイオマス、サーキュラーエコノミーで地域資源を高度に再設計 |\n| **SDGsモデル都市** | 脱炭素・文化伝承・循環資源活用など多面的な持続可能性を実装 |\n\n---\n\n## ✅ 提言と提案アクション  \n\n1. **地域商社設立に向けたロードマップの策定**  \n   - 境町同様、特産品加工・販路整備・ブランド発信の中核を担う法人体制を構築。  \n2. **専門人材導入の継続と拡充**  \n   - 観光、加工、デザイン等の外部知見を企業版納税や共創プログラムで強化。  \n3. **特産品のブランド化とDX連携**  \n   - デジタル技術（NFT等）を活用し、文化・自然資源の価値付けと可視化を推進。  \n4. **循環経済モデルの拡大**  \n   - バイオマスや液肥プラントなど、廃棄資源の再利用モデルを地域特産品と紐づけ拡大。  \n5. **関係人口・移住者への継続した関与設計**  \n   - アンバサダーやイベント参画など、市外人材を巻き込むプラットフォーム整備。\n\n---\n\n岡山県真庭市は、境町型の地域商社に加え、共創型人材派遣やデジタル融合、循環型資源活用など多面的な構成をもつ先進地です。  \nもし、これらの事例をもとに提案書や提案資料への展開をご希望であれば、お知らせください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "content_references": [
            {
              "matched_text": "以下は岡山県真庭市における、茨城・境町と同様に「地域特産品を輝かせる地域公社」モデルを目指す取り組みの現状リサーチです。特に地域商社、ふるさと納税、関係人口創出などにフォーカスしました。",
              "start_idx": 0,
              "end_idx": 93,
              "safe_urls": [],
              "refs": [],
              "alt": "以下は岡山県真庭市における、茨城・境町と同様に「地域特産品を輝かせる地域公社」モデルを目指す取り組みの現状リサーチです。特に地域商社、ふるさと納税、関係人口創出などにフォーカスしました。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "真庭市は2026年度に向け、農家や農業者支援を目的とした官民連携型法人（地域商社）を設立予定です。県内外で地域産品の販路拡大や農作業受託などのトータル支援を実施予定です",
              "start_idx": 151,
              "end_idx": 235,
              "safe_urls": [],
              "refs": [],
              "alt": "真庭市は2026年度に向け、農家や農業者支援を目的とした官民連携型法人（地域商社）を設立予定です。県内外で地域産品の販路拡大や農作業受託などのトータル支援を実施予定です",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search9",
              "start_idx": 235,
              "end_idx": 254,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                  "url": "https://www.sanyonews.jp/article/1734223?utm_source=chatgpt.com",
                  "pub_date": 1748908800,
                  "snippet": "真庭市は市内の農家や農業者の支援に向けた法人を2026年度に官民で立ち上げる。市産の農畜産物を県内外に売り込む地域商社機能に加え、農作業の受委託 ...",
                  "attribution_segments": [
                    "0-0",
                    "0-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                      "url": "https://www.pasonagroup.co.jp/news/index112.html?dispmid=798&itemid=4533&utm_source=chatgpt.com",
                      "pub_date": 1669766400,
                      "snippet": "・企業版ふるさと納税の推進 等. お問合せ, 株式会社丹後王国ブルワリー 電話番号 0772-65-4193. 『地域共創プロジェクト』 概要. 開始, 2022 年 7月20日 ...",
                      "attribution": "pasonagroup.co.jp"
                    },
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf?utm_source=chatgpt.com",
                      "pub_date": 1692316800,
                      "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                      "attribution": "chisou.go.jp"
                    },
                    {
                      "title": "“共感”でつながる地域と都市。 岡山県真庭市の実践から見えてきた",
                      "url": "https://loftwork.com/jp/event/20220720_maniwa/report?utm_source=chatgpt.com",
                      "pub_date": 1658275200,
                      "snippet": "電通を退職後は、地域に特化した商社に転職して、広報やオウンドメディアの運営、新規事業開発を担当していました。 地域に移住するのは、実は真庭市で2 ...",
                      "attribution": "loftwork.com"
                    },
                    {
                      "title": "岡山県真庭市 - WEB3地方創生ねっと",
                      "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                      "attribution": "web3-chihou-sousei.net"
                    },
                    {
                      "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                      "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html?utm_source=chatgpt.com",
                      "pub_date": 1691020800,
                      "snippet": "外部からの目線を活かし、真庭市の魅力を発掘、関係人口創出及び移住者の創出につながる地域の課題解決に向けた参加型のコンテンツを企画、提案します。",
                      "attribution": "prtimes.jp"
                    },
                    {
                      "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                      "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01?utm_source=chatgpt.com",
                      "pub_date": 1728000000,
                      "snippet": "岡山県真庭市は、地域内外の企業どうしがチームを組み、サステナブルなビジネスを共創するプログラム「Cultivate the future maniwa（通称：カルマニ）」 ...",
                      "attribution": "loftwork.com"
                    },
                    {
                      "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                      "url": "https://pasonagroup.co.jp/news/tabid312.html?dispmid=821&itemid=4533&utm_source=chatgpt.com",
                      "pub_date": 1669766400,
                      "snippet": "この度、岡山県真庭市と包括連携協定を結ぶことで、同地域での新規就農者や観光分野で活躍する人材育成を行ってまいります。また、地域産品を活かした商品 ...",
                      "attribution": "pasonagroup.co.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "sanyonews.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                  "url": "https://www.sanyonews.jp/article/1734223?utm_source=chatgpt.com",
                  "pub_date": 1748908800,
                  "snippet": "真庭市は市内の農家や農業者の支援に向けた法人を2026年度に官民で立ち上げる。市産の農畜産物を県内外に売り込む地域商社機能に加え、農作業の受委託 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "この法人は「地域特産品の発掘・ブランド化」を市の農畜産業振興と結びつける重要な中核拠点となります。",
              "start_idx": 260,
              "end_idx": 309,
              "safe_urls": [],
              "refs": [],
              "alt": "この法人は「地域特産品の発掘・ブランド化」を市の農畜産業振興と結びつける重要な中核拠点となります。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "254-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search7turn0search10",
              "start_idx": 418,
              "end_idx": 451,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [],
              "fallback_items": [
                {
                  "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf?utm_source=chatgpt.com",
                  "pub_date": 1740476825,
                  "snippet": "企業版ふるさと納税（⼈材派遣型）活⽤事例②. 両備ホールディングス株式会社 ⇒ 岡⼭県真庭市（観光振興事業）. ○ 企業版ふるさと納税（⼈材派遣型）の仕組みを全国で初めて活⽤。",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    }
                  ],
                  "hue": null,
                  "attributions": null
                },
                {
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf?utm_source=chatgpt.com",
                  "pub_date": 1692316800,
                  "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "企業からの寄付により、専門性を持つ人材を派遣。この知見を活用し観光政策や発信拠点「GREENable HIRUZEN」の整備を強化しました",
              "start_idx": 457,
              "end_idx": 526,
              "safe_urls": [],
              "refs": [],
              "alt": "企業からの寄付により、専門性を持つ人材を派遣。この知見を活用し観光政策や発信拠点「GREENable HIRUZEN」の整備を強化しました",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "451-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search7turn0search10",
              "start_idx": 526,
              "end_idx": 559,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf?utm_source=chatgpt.com",
                  "pub_date": 1740476825,
                  "snippet": "企業版ふるさと納税（⼈材派遣型）活⽤事例②. 両備ホールディングス株式会社 ⇒ 岡⼭県真庭市（観光振興事業）. ○ 企業版ふるさと納税（⼈材派遣型）の仕組みを全国で初めて活⽤。",
                  "attribution_segments": [
                    "451-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                      "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf?utm_source=chatgpt.com",
                      "pub_date": 1692316800,
                      "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                      "attribution": "chisou.go.jp"
                    },
                    {
                      "title": "真庭市における企業版ふるさと納税（地方創生応援税制）",
                      "url": "https://www.city.maniwa.lg.jp/soshiki/3/27344.html?utm_source=chatgpt.com",
                      "pub_date": 1688083200,
                      "snippet": "※企業版ふるさと納税(地方創生応援税制)によりご寄附いただく場合、令和2年度(2020年度)から控除割合が寄付額の最大約9割まで引き上げられました。 真庭市 ...",
                      "attribution": "city.maniwa.lg.jp"
                    },
                    {
                      "title": "[PDF] 2(PDF : 1726KB)",
                      "url": "https://www.maff.go.jp/j/nousin/attach/pdf/impact-83.pdf?utm_source=chatgpt.com",
                      "pub_date": 1741238093,
                      "snippet": "企業等から人を呼ぶ・ソリューションを提供してもらうに当たっては、地域活性化起業人や. ふるさと納税(人材派遣型)等の制度が有効に作用したものの、使いにくさも感じた。",
                      "attribution": "maff.go.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chisou.go.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf?utm_source=chatgpt.com",
                  "pub_date": 1740476825,
                  "snippet": "企業版ふるさと納税（⼈材派遣型）活⽤事例②. 両備ホールディングス株式会社 ⇒ 岡⼭県真庭市（観光振興事業）. ○ 企業版ふるさと納税（⼈材派遣型）の仕組みを全国で初めて活⽤。",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    }
                  ],
                  "hue": null,
                  "attributions": null
                },
                {
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf?utm_source=chatgpt.com",
                  "pub_date": 1692316800,
                  "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**“関係人口”創出プロジェクト：つながるLAB in 真庭**",
              "start_idx": 596,
              "end_idx": 628,
              "safe_urls": [],
              "refs": [],
              "alt": "**“関係人口”創出プロジェクト：つながるLAB in 真庭**",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "559-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "株式会社SAGOJOと連携し、地域アンバサダーをオンライン含む事前育成→現地イベント運営に参画。地域課題への解決提案も実施し、外部視点の取り込みに成功",
              "start_idx": 633,
              "end_idx": 708,
              "safe_urls": [],
              "refs": [],
              "alt": "株式会社SAGOJOと連携し、地域アンバサダーをオンライン含む事前育成→現地イベント運営に参画。地域課題への解決提案も実施し、外部視点の取り込みに成功",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "559-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search4",
              "start_idx": 708,
              "end_idx": 727,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html?utm_source=chatgpt.com",
                  "pub_date": 1691020800,
                  "snippet": "外部からの目線を活かし、真庭市の魅力を発掘、関係人口創出及び移住者の創出につながる地域の課題解決に向けた参加型のコンテンツを企画、提案します。",
                  "attribution_segments": [
                    "559-0",
                    "559-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "真庭市内の企業と都心部の企業が共に、真庭の未来に繋がる ...",
                      "url": "https://cocomaniwa.com/loftwork20220901/?utm_source=chatgpt.com",
                      "pub_date": 1661990400,
                      "snippet": "真庭市内の事業者と都心部の企業が共に、SDGsの視点から真庭の未来に繋がるイノベーション創出を目指すプログラムを11月より開催します。",
                      "attribution": "cocomaniwa.com"
                    },
                    {
                      "title": "“共感”でつながる地域と都市。 岡山県真庭市の実践から見えてきた",
                      "url": "https://loftwork.com/jp/event/20220720_maniwa/report?utm_source=chatgpt.com",
                      "pub_date": 1658275200,
                      "snippet": "電通を退職後は、地域に特化した商社に転職して、広報やオウンドメディアの運営、新規事業開発を担当していました。 地域に移住するのは、実は真庭市で2 ...",
                      "attribution": "loftwork.com"
                    },
                    {
                      "title": "岡山県真庭市 - WEB3地方創生ねっと",
                      "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                      "attribution": "web3-chihou-sousei.net"
                    },
                    {
                      "title": "真庭市における企業版ふるさと納税（地方創生応援税制）",
                      "url": "https://www.city.maniwa.lg.jp/soshiki/3/27344.html?utm_source=chatgpt.com",
                      "pub_date": 1688083200,
                      "snippet": "※企業版ふるさと納税(地方創生応援税制)によりご寄附いただく場合、令和2年度(2020年度)から控除割合が寄付額の最大約9割まで引き上げられました。 真庭市 ...",
                      "attribution": "city.maniwa.lg.jp"
                    },
                    {
                      "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                      "url": "https://cehub.jp/interview/maniwa-circular-city-1/?utm_source=chatgpt.com",
                      "pub_date": 1649721600,
                      "snippet": "木材の有効活用と並んで、食品廃棄物の有効活用は重要な取り組みだ。 この取り組みは、真庭市の一部地域から収集した生ごみ・し尿・浄化槽汚泥を年間計画 ...",
                      "attribution": "cehub.jp"
                    },
                    {
                      "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                      "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01?utm_source=chatgpt.com",
                      "pub_date": 1728000000,
                      "snippet": "岡山県真庭市は、地域内外の企業どうしがチームを組み、サステナブルなビジネスを共創するプログラム「Cultivate the future maniwa（通称：カルマニ）」 ...",
                      "attribution": "loftwork.com"
                    },
                    {
                      "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                      "url": "https://www.sanyonews.jp/article/1734223?utm_source=chatgpt.com",
                      "pub_date": 1748908800,
                      "snippet": "真庭市は市内の農家や農業者の支援に向けた法人を2026年度に官民で立ち上げる。市産の農畜産物を県内外に売り込む地域商社機能に加え、農作業の受委託 ...",
                      "attribution": "sanyonews.jp"
                    },
                    {
                      "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                      "url": "https://www.pasonagroup.co.jp/news/index112.html?dispmid=798&itemid=4533&utm_source=chatgpt.com",
                      "pub_date": 1669766400,
                      "snippet": "・企業版ふるさと納税の推進 等. お問合せ, 株式会社丹後王国ブルワリー 電話番号 0772-65-4193. 『地域共創プロジェクト』 概要. 開始, 2022 年 7月20日 ...",
                      "attribution": "pasonagroup.co.jp"
                    },
                    {
                      "title": "真庭市のSDGs取り組み状況",
                      "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html?utm_source=chatgpt.com",
                      "pub_date": 1676332800,
                      "snippet": "真庭市では、様々な関係者が協力し、文化遺産等の地域資源を活用した地域づくりの実現に向けた取り組みを進めています。 ... 真庭市脱炭素先行地域推進委員 ...",
                      "attribution": "city.maniwa.lg.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "prtimes.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html?utm_source=chatgpt.com",
                  "pub_date": 1691020800,
                  "snippet": "外部からの目線を活かし、真庭市の魅力を発掘、関係人口創出及び移住者の創出につながる地域の課題解決に向けた参加型のコンテンツを企画、提案します。",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "**サステナブル共創プログラム「Cultivate the future maniwa」**",
              "start_idx": 733,
              "end_idx": 779,
              "safe_urls": [],
              "refs": [],
              "alt": "**サステナブル共創プログラム「Cultivate the future maniwa」**",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "727-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "2024年10月〜2025年2月に、市内外企業／クリエイターが協働し「灰の利活用」「限界集落場づくり」「地域マイクロブルワリー」などのテーマで新ビジネスを共創。専門人材活用と地域課題解決を両立",
              "start_idx": 784,
              "end_idx": 880,
              "safe_urls": [],
              "refs": [],
              "alt": "2024年10月〜2025年2月に、市内外企業／クリエイターが協働し「灰の利活用」「限界集落場づくり」「地域マイクロブルワリー」などのテーマで新ビジネスを共創。専門人材活用と地域課題解決を両立",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "727-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search6",
              "start_idx": 880,
              "end_idx": 899,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                  "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01?utm_source=chatgpt.com",
                  "pub_date": 1728000000,
                  "snippet": "岡山県真庭市は、地域内外の企業どうしがチームを組み、サステナブルなビジネスを共創するプログラム「Cultivate the future maniwa（通称：カルマニ）」 ...",
                  "attribution_segments": [
                    "727-0",
                    "727-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "真庭市内の企業と都心部の企業が共に、真庭の未来に繋がる ...",
                      "url": "https://cocomaniwa.com/loftwork20220901/?utm_source=chatgpt.com",
                      "pub_date": 1661990400,
                      "snippet": "真庭市内の事業者と都心部の企業が共に、SDGsの視点から真庭の未来に繋がるイノベーション創出を目指すプログラムを11月より開催します。",
                      "attribution": "cocomaniwa.com"
                    },
                    {
                      "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                      "url": "https://cehub.jp/interview/maniwa-circular-city-1/?utm_source=chatgpt.com",
                      "pub_date": 1649721600,
                      "snippet": "木材の有効活用と並んで、食品廃棄物の有効活用は重要な取り組みだ。 この取り組みは、真庭市の一部地域から収集した生ごみ・し尿・浄化槽汚泥を年間計画 ...",
                      "attribution": "cehub.jp"
                    },
                    {
                      "title": "岡山県真庭市 - WEB3地方創生ねっと",
                      "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                      "attribution": "web3-chihou-sousei.net"
                    },
                    {
                      "title": "真庭市のSDGs取り組み状況",
                      "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html?utm_source=chatgpt.com",
                      "pub_date": 1676332800,
                      "snippet": "真庭市では、様々な関係者が協力し、文化遺産等の地域資源を活用した地域づくりの実現に向けた取り組みを進めています。 ... 真庭市脱炭素先行地域推進委員 ...",
                      "attribution": "city.maniwa.lg.jp"
                    },
                    {
                      "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                      "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf?utm_source=chatgpt.com",
                      "pub_date": 1740476825,
                      "snippet": "企業版ふるさと納税（⼈材派遣型）活⽤事例②. 両備ホールディングス株式会社 ⇒ 岡⼭県真庭市（観光振興事業）. ○ 企業版ふるさと納税（⼈材派遣型）の仕組みを全国で初めて活⽤。",
                      "attribution": "chisou.go.jp"
                    },
                    {
                      "title": "“共感”でつながる地域と都市。 岡山県真庭市の実践から見えてきた",
                      "url": "https://loftwork.com/jp/event/20220720_maniwa/report?utm_source=chatgpt.com",
                      "pub_date": 1658275200,
                      "snippet": "電通を退職後は、地域に特化した商社に転職して、広報やオウンドメディアの運営、新規事業開発を担当していました。 地域に移住するのは、実は真庭市で2 ...",
                      "attribution": "loftwork.com"
                    },
                    {
                      "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                      "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html?utm_source=chatgpt.com",
                      "pub_date": 1691020800,
                      "snippet": "外部からの目線を活かし、真庭市の魅力を発掘、関係人口創出及び移住者の創出につながる地域の課題解決に向けた参加型のコンテンツを企画、提案します。",
                      "attribution": "prtimes.jp"
                    },
                    {
                      "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                      "url": "https://pasonagroup.co.jp/news/tabid312.html?dispmid=821&itemid=4533&utm_source=chatgpt.com",
                      "pub_date": 1669766400,
                      "snippet": "この度、岡山県真庭市と包括連携協定を結ぶことで、同地域での新規就農者や観光分野で活躍する人材育成を行ってまいります。また、地域産品を活かした商品 ...",
                      "attribution": "pasonagroup.co.jp"
                    },
                    {
                      "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                      "url": "https://www.pasonagroup.co.jp/news/index112.html?dispmid=798&itemid=4533&utm_source=chatgpt.com",
                      "pub_date": 1669766400,
                      "snippet": "・企業版ふるさと納税の推進 等. お問合せ, 株式会社丹後王国ブルワリー 電話番号 0772-65-4193. 『地域共創プロジェクト』 概要. 開始, 2022 年 7月20日 ...",
                      "attribution": "pasonagroup.co.jp"
                    },
                    {
                      "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                      "url": "https://www.sanyonews.jp/article/1734223?utm_source=chatgpt.com",
                      "pub_date": 1748908800,
                      "snippet": "真庭市は市内の農家や農業者の支援に向けた法人を2026年度に官民で立ち上げる。市産の農畜産物を県内外に売り込む地域商社機能に加え、農作業の受委託 ...",
                      "attribution": "sanyonews.jp"
                    },
                    {
                      "title": "【キーワード1】地域商社／地域の逸品を発掘し、PR。自走する ...",
                      "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol34?srsltid=AfmBOooq3WjJO-zJnxmirzvrVs6Vvp1uoddiMoyGsbvHxgOzsis7uTOh&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "しかし、地域商社により発掘され、ふるさと納税のお礼の品として採用されれば、そのぶん販路が拡大し、売り上げ増や新規顧客の獲得などのメリットが得られます。生産 ...",
                      "attribution": "furusato-tax.jp"
                    },
                    {
                      "title": "真庭市における企業版ふるさと納税（地方創生応援税制）",
                      "url": "https://www.city.maniwa.lg.jp/soshiki/3/27344.html?utm_source=chatgpt.com",
                      "pub_date": 1688083200,
                      "snippet": "※企業版ふるさと納税(地方創生応援税制)によりご寄附いただく場合、令和2年度(2020年度)から控除割合が寄付額の最大約9割まで引き上げられました。 真庭市 ...",
                      "attribution": "city.maniwa.lg.jp"
                    },
                    {
                      "title": "【ふるさと納税限定】高級品質の「今治タオル」を日常 ... - 山陽新聞",
                      "url": "https://www.sanyonews.jp/article/1740346?utm_source=chatgpt.com",
                      "pub_date": 1749802506.321339,
                      "snippet": "【ふるさと納税限定】高級品質の「今治タオル」を日常生活に！今治市の地域商社と老舗タオルメーカーだからこそ実現できた”贅沢だけど手が届く”特別仕様の ...",
                      "attribution": "sanyonews.jp"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 14
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "loftwork.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                  "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01?utm_source=chatgpt.com",
                  "pub_date": 1728000000,
                  "snippet": "岡山県真庭市は、地域内外の企業どうしがチームを組み、サステナブルなビジネスを共創するプログラム「Cultivate the future maniwa（通称：カルマニ）」 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "citeturn0search15",
              "start_idx": 1016,
              "end_idx": 1036,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [],
              "fallback_items": [
                {
                  "title": "岡山県真庭市 - WEB3地方創生ねっと",
                  "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "一部地域で生ごみ等をメタン発酵処理し、液肥や発電に再利用するプラントを稼働。5 t/日の液肥提供で農家の肥料コスト削減に貢献中",
              "start_idx": 1134,
              "end_idx": 1197,
              "safe_urls": [],
              "refs": [],
              "alt": "一部地域で生ごみ等をメタン発酵処理し、液肥や発電に再利用するプラントを稼働。5 t/日の液肥提供で農家の肥料コスト削減に貢献中",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1036-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search17",
              "start_idx": 1197,
              "end_idx": 1217,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                  "url": "https://cehub.jp/interview/maniwa-circular-city-1/?utm_source=chatgpt.com",
                  "pub_date": 1649721600,
                  "snippet": "木材の有効活用と並んで、食品廃棄物の有効活用は重要な取り組みだ。 この取り組みは、真庭市の一部地域から収集した生ごみ・し尿・浄化槽汚泥を年間計画 ...",
                  "attribution_segments": [
                    "1036-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "cehub.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                  "url": "https://cehub.jp/interview/maniwa-circular-city-1/?utm_source=chatgpt.com",
                  "pub_date": 1649721600,
                  "snippet": "木材の有効活用と並んで、食品廃棄物の有効活用は重要な取り組みだ。 この取り組みは、真庭市の一部地域から収集した生ごみ・し尿・浄化槽汚泥を年間計画 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": "道路環境整備や文化資源保全、脱炭素活動など、184団体が参加する多様な市民参加型施策が進行中",
              "start_idx": 1240,
              "end_idx": 1286,
              "safe_urls": [],
              "refs": [],
              "alt": "道路環境整備や文化資源保全、脱炭素活動など、184団体が参加する多様な市民参加型施策が進行中",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1217-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search13",
              "start_idx": 1286,
              "end_idx": 1306,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "真庭市のSDGs取り組み状況",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html?utm_source=chatgpt.com",
                  "pub_date": 1676332800,
                  "snippet": "真庭市では、様々な関係者が協力し、文化遺産等の地域資源を活用した地域づくりの実現に向けた取り組みを進めています。 ... 真庭市脱炭素先行地域推進委員 ...",
                  "attribution_segments": [
                    "1217-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "city.maniwa.lg.jp"
                }
              ],
              "fallback_items": [
                {
                  "title": "真庭市のSDGs取り組み状況",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html?utm_source=chatgpt.com",
                  "pub_date": 1676332800,
                  "snippet": "真庭市では、様々な関係者が協力し、文化遺産等の地域資源を活用した地域づくりの実現に向けた取り組みを進めています。 ... 真庭市脱炭素先行地域推進委員 ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null
                }
              ],
              "status": "done",
              "error": null,
              "style": "v2"
            },
            {
              "matched_text": " ",
              "start_idx": 2116,
              "end_idx": 2116,
              "safe_urls": [],
              "refs": [],
              "alt": "",
              "prompt_text": null,
              "type": "sources_footnote",
              "sources": [
                {
                  "title": "農家や農業者支援 法人立ち上げへ 真庭市、官民でトータルサポート",
                  "url": "https://www.sanyonews.jp/article/1734223?utm_source=chatgpt.com",
                  "attribution": "sanyonews.jp"
                },
                {
                  "title": "[PDF] 企業版ふるさと納税（ 材派遣型） - 地方創生",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/R070226_zinzaihakengata.pdf?utm_source=chatgpt.com",
                  "attribution": "chisou.go.jp"
                },
                {
                  "title": "【岡山県真庭市】地域資源の掘り起こしと関係人口創出に取り組む ...",
                  "url": "https://prtimes.jp/main/html/rd/p/000000054.000017738.html?utm_source=chatgpt.com",
                  "attribution": "prtimes.jp"
                },
                {
                  "title": "限界集落の場づくりまで。 4年目の岡山県真庭市サステナブル ...",
                  "url": "https://loftwork.com/jp/news/2024/10/04_cfm-2024-01?utm_source=chatgpt.com",
                  "attribution": "loftwork.com"
                },
                {
                  "title": "【前編】「バイオマス産業杜市」真庭市から学ぶ、サーキュラー ...",
                  "url": "https://cehub.jp/interview/maniwa-circular-city-1/?utm_source=chatgpt.com",
                  "attribution": "cehub.jp"
                },
                {
                  "title": "真庭市のSDGs取り組み状況",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/34713.html?utm_source=chatgpt.com",
                  "attribution": "city.maniwa.lg.jp"
                }
              ],
              "has_images": false
            }
          ],
          "safe_urls": [],
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "maff.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.maff.go.jp/j/nousin/attach/pdf/impact-83.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 2(PDF : 1726KB)",
                  "snippet": "企業等から人を呼ぶ・ソリューションを提供してもらうに当たっては、地域活性化起業人や. ふるさと納税(人材派遣型)等の制度が有効に作用したものの、使いにくさも感じた。",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 0
                  },
                  "pub_date": null,
                  "attribution": "maff.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "loftwork.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://loftwork.com/jp/event/20220720_maniwa/report?utm_source=chatgpt.com",
                  "title": "“共感”でつながる地域と都市。 岡山県真庭市の実践から見えてきた",
                  "snippet": "電通を退職後は、地域に特化した商社に転職して、広報やオウンドメディアの運営、新規事業開発を担当していました。 地域に移住するのは、実は真庭市で2 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 1
                  },
                  "pub_date": 1658275200,
                  "attribution": "loftwork.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "furusato-tax.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/search?q=%E4%B8%80%E8%88%AC%E7%A4%BE%E5%9B%A3%E6%B3%95%E4%BA%BA%E5%9C%B0%E5%9F%9F%E5%95%86%E7%A4%BE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%BD&srsltid=AfmBOopBsFORESLCUtK3LHoge0OcCGQJadBLnzpmiqM_Oul7nYkRAJH-&utm_source=chatgpt.com",
                  "title": "「一般社団法人地域商社ふるさぽ」 検索結果一覧 - ふるさとチョイス",
                  "snippet": "一般社団法人地域商社ふるさぽのお礼の品の検索ページはこちら。「ふるさとチョイス」ならフリーワードやカテゴリ選択、寄付金額や地域で絞り込んでお礼の品を探せます ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 2
                  },
                  "pub_date": null,
                  "attribution": "furusato-tax.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.furusato-tax.jp/feature/a/katsuryoku_column-vol34?srsltid=AfmBOooq3WjJO-zJnxmirzvrVs6Vvp1uoddiMoyGsbvHxgOzsis7uTOh&utm_source=chatgpt.com",
                  "title": "【キーワード1】地域商社／地域の逸品を発掘し、PR。自走する ...",
                  "snippet": "しかし、地域商社により発掘され、ふるさと納税のお礼の品として採用されれば、そのぶん販路が拡大し、売り上げ増や新規顧客の獲得などのメリットが得られます。生産 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 14
                  },
                  "pub_date": null,
                  "attribution": "furusato-tax.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "maniwa.lg.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.city.maniwa.lg.jp/soshiki/3/27344.html?utm_source=chatgpt.com",
                  "title": "真庭市における企業版ふるさと納税（地方創生応援税制）",
                  "snippet": "※企業版ふるさと納税(地方創生応援税制)によりご寄附いただく場合、令和2年度(2020年度)から控除割合が寄付額の最大約9割まで引き上げられました。 真庭市 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 3
                  },
                  "pub_date": 1688083200,
                  "attribution": "maniwa.lg.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "pasonagroup.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.pasonagroup.co.jp/news/index112.html?dispmid=798&itemid=4533&utm_source=chatgpt.com",
                  "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                  "snippet": "・企業版ふるさと納税の推進 等. お問合せ, 株式会社丹後王国ブルワリー 電話番号 0772-65-4193. 『地域共創プロジェクト』 概要. 開始, 2022 年 7月20日 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 5
                  },
                  "pub_date": 1669766400,
                  "attribution": "pasonagroup.co.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://pasonagroup.co.jp/news/tabid312.html?dispmid=821&itemid=4533&utm_source=chatgpt.com",
                  "title": "岡山県真庭市と包括連携協定を結ぶことで - パソナグループ",
                  "snippet": "この度、岡山県真庭市と包括連携協定を結ぶことで、同地域での新規就農者や観光分野で活躍する人材育成を行ってまいります。また、地域産品を活かした商品 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 8
                  },
                  "pub_date": 1669766400,
                  "attribution": "pasonagroup.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "chisou.go.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.chisou.go.jp/tiiki/tiikisaisei/portal/pdf/dai34/seidosetsumei.pdf?utm_source=chatgpt.com",
                  "title": "[PDF] 企業版ふるさと納税（地方創生応援税制）について",
                  "snippet": "両備ホールディングス株式会社 ⇒ 岡山県真庭市（観光振興事業）. ○ 企業版ふるさと納税（人材派遣型）の仕組みを全国で初めて活用。観光分野の専門 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 10
                  },
                  "pub_date": 1692316800,
                  "attribution": "chisou.go.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "cocomaniwa.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://cocomaniwa.com/loftwork20220901/?utm_source=chatgpt.com",
                  "title": "真庭市内の企業と都心部の企業が共に、真庭の未来に繋がる ...",
                  "snippet": "真庭市内の事業者と都心部の企業が共に、SDGsの視点から真庭の未来に繋がるイノベーション創出を目指すプログラムを11月より開催します。",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 11
                  },
                  "pub_date": 1661990400,
                  "attribution": "cocomaniwa.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "sanyonews.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.sanyonews.jp/article/1740346?utm_source=chatgpt.com",
                  "title": "【ふるさと納税限定】高級品質の「今治タオル」を日常 ... - 山陽新聞",
                  "snippet": "【ふるさと納税限定】高級品質の「今治タオル」を日常生活に！今治市の地域商社と老舗タオルメーカーだからこそ実現できた”贅沢だけど手が届く”特別仕様の ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 12
                  },
                  "pub_date": 1749802506.321339,
                  "attribution": "sanyonews.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "web3-chihou-sousei.net",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.web3-chihou-sousei.net/category/media-partner/okayama-maniwa/?utm_source=chatgpt.com",
                  "title": "岡山県真庭市 - WEB3地方創生ねっと",
                  "snippet": "この取り組みは、2023年5月に真庭市によって実施された「NFTを活用した地域資源活用事業実施業務」の公募プロポーザルによって採択された事によって行われている取り組み ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 15
                  },
                  "pub_date": null,
                  "attribution": "web3-chihou-sousei.net"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "vill.shinjo.okayama.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.vill.shinjo.okayama.jp/index.php?id=2834&utm_source=chatgpt.com",
                  "title": "企業版ふるさと納税による寄附をいただいた企業の紹介 - 新庄村",
                  "snippet": "寄附企業, 企業のご紹介, 寄付額. 有限会社オオタ電業. （岡山県真庭市本郷2053-9）. 10万円. アイサワ工業株式会社. （岡山県岡山市北区表町1-5-1）. 500万円.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 16
                  },
                  "pub_date": null,
                  "attribution": "vill.shinjo.okayama.jp"
                }
              ]
            }
          ],
          "citations": [],
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f",
          "request_id": "9508e91dcdf2686d-NRT",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "4c1301cb-9f7f-4ed3-ba55-f7c5e842764f",
      "children": [
        "9e43b183-709c-4722-8c7d-0f3a95ec0caf"
      ]
    },
    "9e43b183-709c-4722-8c7d-0f3a95ec0caf": {
      "id": "9e43b183-709c-4722-8c7d-0f3a95ec0caf",
      "message": {
        "id": "9e43b183-709c-4722-8c7d-0f3a95ec0caf",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065812.1889338,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "茨城県境町のふるさと納税が平成27年から急激に伸びていますが、その理由をリサーチしてください"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "system_hints": [
            "research"
          ],
          "request_id": "95093fc34e929625-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "d50648e2-f914-4cfe-adaf-f20f382edc2c",
      "children": [
        "398b33c6-d3ab-49e1-a7cd-f285510c5ea2"
      ]
    },
    "398b33c6-d3ab-49e1-a7cd-f285510c5ea2": {
      "id": "398b33c6-d3ab-49e1-a7cd-f285510c5ea2",
      "message": {
        "id": "398b33c6-d3ab-49e1-a7cd-f285510c5ea2",
        "author": {
          "role": "system",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065819.033829,
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
          "rebase_system_message": true,
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "9e43b183-709c-4722-8c7d-0f3a95ec0caf",
          "request_id": "95093fc34e929625-KIX",
          "timestamp_": "absolute",
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "9e43b183-709c-4722-8c7d-0f3a95ec0caf",
      "children": [
        "2ca441f9-8552-441d-805a-b1583d5a3893"
      ]
    },
    "2ca441f9-8552-441d-805a-b1583d5a3893": {
      "id": "2ca441f9-8552-441d-805a-b1583d5a3893",
      "message": {
        "id": "2ca441f9-8552-441d-805a-b1583d5a3893",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065819.033973,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "境町のふるさと納税が平成27年（2015年）から急激に伸びた理由についてリサーチいたします。特に以下の点について重点を置いて調査してよろしいでしょうか？\n\n1. 境町が実施したふるさと納税返礼品の戦略（例：品目の選定やブランディング）\n2. PR・マーケティング手法（例：ふるさと納税サイト活用、広報施策）\n3. 制度面や国の施策変更が影響しているかどうか（例：ワンストップ特例制度など）\n\n他に特に掘り下げたい視点があれば教えてください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "398b33c6-d3ab-49e1-a7cd-f285510c5ea2",
          "request_id": "95093fc34e929625-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "398b33c6-d3ab-49e1-a7cd-f285510c5ea2",
      "children": [
        "4320d845-5302-4144-b9f5-95ed620c5438"
      ]
    },
    "4320d845-5302-4144-b9f5-95ed620c5438": {
      "id": "4320d845-5302-4144-b9f5-95ed620c5438",
      "message": {
        "id": "4320d845-5302-4144-b9f5-95ed620c5438",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1750065819.034049,
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
          "parent_id": "2ca441f9-8552-441d-805a-b1583d5a3893",
          "request_id": "95093fc34e929625-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "2ca441f9-8552-441d-805a-b1583d5a3893",
      "children": [
        "8de21015-a346-4e28-a650-e15fcf249880"
      ]
    },
    "8de21015-a346-4e28-a650-e15fcf249880": {
      "id": "8de21015-a346-4e28-a650-e15fcf249880",
      "message": {
        "id": "8de21015-a346-4e28-a650-e15fcf249880",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065834.9155478,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "1と2です"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "system_hints": [
            "research"
          ],
          "request_id": "9509404f1d8d9625-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "4320d845-5302-4144-b9f5-95ed620c5438",
      "children": [
        "cfe7d4f0-0a19-4148-abb0-fd02f899af5d"
      ]
    },
    "cfe7d4f0-0a19-4148-abb0-fd02f899af5d": {
      "id": "cfe7d4f0-0a19-4148-abb0-fd02f899af5d",
      "message": {
        "id": "cfe7d4f0-0a19-4148-abb0-fd02f899af5d",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065847.565726,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "了解しました。境町のふるさと納税が平成27年（2015年）以降に急激に伸びた理由について、特に（1）返礼品の戦略（品目の選定・ブランディング）と（2）PR・マーケティング手法に焦点を当ててリサーチを行います。\n\n調査結果がまとまり次第、詳細をご報告します。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "8de21015-a346-4e28-a650-e15fcf249880",
          "request_id": "9509404f1d8d9625-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8de21015-a346-4e28-a650-e15fcf249880",
      "children": [
        "e72309d3-a868-4243-a47e-2f856ef2a3be"
      ]
    },
    "e72309d3-a868-4243-a47e-2f856ef2a3be": {
      "id": "e72309d3-a868-4243-a47e-2f856ef2a3be",
      "message": {
        "id": "e72309d3-a868-4243-a47e-2f856ef2a3be",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750065835.789734,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"了解しました。境町のふるさと納税が平成27年（2015年）以降に急激に伸びた理由について、特に（1）返礼品の戦略（品目の選定・ブランディング）と（2）PR・マーケティング手法に焦点を当ててリサーチを行います。\\n\\n調査結果がまとまり次第、詳細をご報告します。\",\n  \"title\": \"境町ふるさと納税急伸の返礼品戦略とPR手法\",\n  \"prompt\": \"茨城県境町のふるさと納税が平成27年（2015年）以降に急激に増加した理由について、特に以下の2点に重点を置いて調査してください。\\n\\n1. 返礼品の戦略：どのような品目の選定、企画、ブランディングが行われたか。干し芋、米、酒などの特産品をどのように活用したか。返礼品ラインナップの拡充や農家との連携などの体制も含めて詳しく。\\n\\n2. PR・マーケティング手法：ふるさと納税サイトでの見せ方、レビュー施策、SNS・マスメディアとの連動、全国ランキング対策などを含め、境町がどのような広報戦略・プロモーションを行ったのか。\\n\\n返礼品提供とマーケティングの連携、担当者や専門家の登用なども含めて、成功に至る取り組みを詳しく記述してください。形式は適切な見出し付きのレポート形式とし、可能な場合は数値データや外部メディアの報道内容なども引用してください。\"\n}"
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
          "parent_id": "cfe7d4f0-0a19-4148-abb0-fd02f899af5d",
          "request_id": "9509404f1d8d9625-KIX",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "cfe7d4f0-0a19-4148-abb0-fd02f899af5d",
      "children": [
        "e0df0d0d-b9c5-4aff-8248-6611e00c2227"
      ]
    },
    "e0df0d0d-b9c5-4aff-8248-6611e00c2227": {
      "id": "e0df0d0d-b9c5-4aff-8248-6611e00c2227",
      "message": {
        "id": "e0df0d0d-b9c5-4aff-8248-6611e00c2227",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1750065856.55801,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "境町ふるさと納税急伸の返礼品戦略とPR手法",
          "async_task_prompt": "茨城県境町のふるさと納税が平成27年（2015年）以降に急激に増加した理由について、特に以下の2点に重点を置いて調査してください。\n\n1. 返礼品の戦略：どのような品目の選定、企画、ブランディングが行われたか。干し芋、米、酒などの特産品をどのように活用したか。返礼品ラインナップの拡充や農家との連携などの体制も含めて詳しく。\n\n2. PR・マーケティング手法：ふるさと納税サイトでの見せ方、レビュー施策、SNS・マスメディアとの連動、全国ランキング対策などを含め、境町がどのような広報戦略・プロモーションを行ったのか。\n\n返礼品提供とマーケティングの連携、担当者や専門家の登用なども含めて、成功に至る取り組みを詳しく記述してください。形式は適切な見出し付きのレポート形式とし、可能な場合は数値データや外部メディアの報道内容なども引用してください。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "境町ふるさと納税急伸の返礼品戦略とPR手法",
            "completed_with_time": "Research completed in 5m",
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
          "parent_id": "e72309d3-a868-4243-a47e-2f856ef2a3be",
          "request_id": "9509404f1d8d9625-KIX",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_684fe2c0a1708191ac1b9baa9d385d5d",
          "async_task_conversation_id": "684fe2c0-a330-8003-93ae-683582ef410f",
          "async_task_created_at": "2025-06-16 09:24:17.348405+00:00",
          "deep_research_version": "mini"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "e72309d3-a868-4243-a47e-2f856ef2a3be",
      "children": [
        "fd5eb9e4-25d5-4f83-a761-4860617e292c"
      ]
    },
    "fd5eb9e4-25d5-4f83-a761-4860617e292c": {
      "id": "fd5eb9e4-25d5-4f83-a761-4860617e292c",
      "message": {
        "id": "fd5eb9e4-25d5-4f83-a761-4860617e292c",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1750066147.739144,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# 茨城県境町におけるふるさと納税成功の要因\n\n## 1. 返礼品戦略  \n境町は地元の特産品を徹底活用し、魅力的な返礼品ラインナップを構築した。例えば、同町は**さしま茶**や**紅はるか（干し芋用サツマイモ）**、歴史ある蔵元の**日本酒**、新興の**クラフトビール**など、多彩な地場産品を返礼品に採用している【12†L52-L55】。中でも特筆すべきは**干し芋（紅はるか）**であり、町内に新設した研究開発施設“S-Lab”で開発された高付加価値品は大きな人気を博した【7†L41-L49】【36†L125-L133】。実際、2019年度に寄付サイトに掲載したこの乾燥芋は累計1万セット超の注文を獲得し、寄付金額が1億円を突破するヒット商品となっている【7†L41-L49】。この成功を受け、町は2024年にS-Lab第3工場（冷凍加工場）を稼働させ、需要増加に対応して生産体制を強化した【36†L135-L143】。  \n【37†embed_image】このように境町ではサツマイモ由来の干し芋返礼品が定番化し、2016～2022年にわたって関東地方の寄付額1位を牽引した【36†L125-L133】。更に、稲作優位の地を生かして**複数品種の米**を組み合わせた「食べ比べセット」を企画し【12†L77-L85】、寄付者に特別な購買体験を提供している（単一品種ではなく、コシヒカリや一番星など複数をセット化）。また、日本酒では、地元酒造（徳正宗）が茨城県産米で醸す酒や、ファッションブランドとコラボした「TOKUMASAMUNE Lab.」の甘・酸味バランス酒（境町産一番星米使用）など話題性の高い商品を揃えた【42†L1816-L1825】。これらの商品企画には専門家や民間ノウハウも活用されており、町の出資会社さかいまちづくり公社にはワイン醸造責任者に**シニアソムリエ**（光山久美子氏）が就き、新ワイン開発に注力するなど品質向上に取り組んでいる【21†L280-L289】。さらに、町はふるさと納税交付金を活用して地元農家を支援する施策も行った。例年行っている「米生産農家支援事業」では、2022年に新米2,649袋を高値で買い取り（寄付金を財源とする還元策の一環）し、農家の所得安定と返礼品原料の確保を同時に実現している【35†L89-L93】。  \n\n## 2. PR・マーケティング手法  \n境町は広報・販促活動でも独自の工夫を凝らし、ふるさと納税の知名度向上を図った。まず、**町専用のふるさと納税サイト**（特設サイト「ふるさとさかい」）で全返礼品を分かりやすく紹介するとともに、SNS公式アカウント（Instagram/X）で返礼品情報やキャンペーンを発信し、寄付者に常に最新情報を届けている。寄付者の口コミを促進するため、楽天ふるさと納税では全返礼品を対象とした**レビューキャンペーン**を実施し、寄付者の評価投稿を奨励した【44†L112-L120】。これにより商品ページの閲覧数増加や口コミ拡散を狙った。メディア連携も積極的で、橋本町長自らが全国規模のふるさと納税シンポジウムで講演・パネリストを務めるなど発信力を強化した【33†L27-L34】。こうした取り組みを背景に、NHK水戸放送局をはじめテレビ・雑誌等の取材機会が増加し、子育て支援や自動運転バス運行など返礼品以外の先進的施策と合わせて境町の取り組みが全国へ露出された【33†L90-L97】【29†L37-L45】。その結果、令和5年度寄付金は約99.4億円に達し、寄付額では関東7年連続1位、全国11位を記録するなど高い実績を維持している【29†L37-L45】【33†L90-L97】。これら一連の戦略は返礼品開発と密接に連携しており、得られた寄付金を新たな生産施設やまちづくり投資に再投入する「境町モデル」によって好循環が生まれ、人口減少対策や財政再建にも寄与している【36†L139-L147】【36†L177-L185】。  \n\n**参考資料:** 境町公式資料やメディア報道【7†L41-L49】【12†L52-L55】【35†L89-L93】【36†L125-L133】【42†L1816-L1825】【44†L112-L120】など。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 159,
              "end_ix": 171,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E3%82%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%93%E3%81%A8%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%A7%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E6%8B%85%E5%BD%93%E8%80%85%E3%81%8B%E3%82%89%E3%81%AF%E5%A4%A7%E5%A4%89%E6%B3%A8%E7%9B%AE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82",
                "text": "茨城県境町は茨城県内でもふるさと納税額が多いことで有名で、ふるさと納税担当者からは大変注目されている自治体である。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 12,
                  "cited_message_id": "750e23ee-a841-4d58-9499-fa937a6259b9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 52,
                  "end_line_num": 55,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 240,
              "end_ix": 251,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
                "text": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "4db40c37-cf68-472a-b759-4f4fc4be9b82",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 41,
                  "end_line_num": 49,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 251,
              "end_ix": 265,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
                "text": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 125,
                  "end_line_num": 133,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 332,
              "end_ix": 343,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
                "text": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "4db40c37-cf68-472a-b759-4f4fc4be9b82",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 41,
                  "end_line_num": 49,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 400,
              "end_ix": 414,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=%E9%87%8E%E5%8F%A3%20S",
                "text": "野口 S-Lab 3rdを作る前から、ふるさと納税の返礼品として境町の干し芋が大人気で、需要に生産が追いつきません。そこで、町の投資により干し芋の生産拠点を建設 してもらうことにしたのです。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 135,
                  "end_line_num": 143,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 418,
              "end_ix": 434,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "image_inline",
                "asset_pointer_links": [],
                "clicked_from_url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html",
                "clicked_from_title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース"
              }
            },
            {
              "start_ix": 493,
              "end_ix": 507,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
                "text": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 125,
                  "end_line_num": 133,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 552,
              "end_ix": 564,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%BA%83%E3%81%84%E9%96%A2%E6%9D%B1%E5%B9%B3%E9%87%8E%E3%81%AB%E4%BD%8D%E7%BD%AE%E3%81%97%E3%81%A6%E3%81%99%E3%82%8B%E8%8C%A8%E5%9F%8E%E7%9C%8C%E3%81%AB%E3%81%AF%E3%80%81%E7%B1%B3%E3%81%AE%E6%A0%BD%E5%9F%B9%E3%81%AB%E9%81%A9%E3%81%97%E3%81%9F%E5%9C%9F%E5%9C%B0%EF%BC%88%E8%BE%B2%E6%A5%AD%E7%94%A8%E6%B0%B4%E3%81%AE%E7%AE%A1%E7%90%86%E3%81%8C%E8%A1%8C%E3%81%8D%E5%B1%8A%E3%81%8D%E3%80%81%E9%A4%8A%E5%88%86%E3%81%8C%E8%B1%8A%E5%AF%8C%EF%BC%89%E3%81%A7%E7%B1%B3%E8%BE%B2%E5%AE%B6%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%99%E3%80%82%20%E5%A2%83%E7%94%BA%E3%82%82%E7%94%B0%E5%9C%92%E9%9D%A2%E7%A9%8D%E3%81%8C%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%BA%83%E3%81%8F%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E5%A4%9A%E3%81%8F%E3%81%AE%E7%B1%B3%E3%82%92%E6%A0%BD%E5%9F%B9%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%8C%E3%81%82%E3%81%8D%E3%81%9F%E3%81%93%E3%81%BE%E3%81%A1%E3%83%BB%E3%81%B2%E3%81%A8%E3%82%81%E3%81%BC%E3%82%8C%E3%83%BB%E3%81%B5%E3%81%8F%E3%81%BE%E3%82%8B%E3%83%BB%E4%B8%80%E7%95%AA%E6%98%9F%E3%83%BB%E3%82%86%E3%82%81%E3%81%B2%E3%81%9F%E3%81%A1%E3%83%BB%E3%81%82%E3%81%95%E3%81%B2%E3%81%AE%E5%A4%A2%E3%83%BB%E3%83%9F%E3%83%AB%E3%82%AD%E3%83%BC%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3%E2%80%A6%E2%80%A6%EF%BC%89%E3%81%A8%E5%A4%9A%E6%95%B0%E5%93%81%E7%A8%AE%E3%83%96%20%E3%83%A9%E3%83%B3%E3%83%89%E7%B1%B3%E3%82%92%E8%82%B2%E3%81%A6%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "広い関東平野に位置してする茨城県には、米の栽培に適した土地（農業用水の管理が行き届き、養分が豊富）で米農家の方が多いです。 境町も田園面積が非常に広く、そこで多くの米を栽培しており「あきたこまち・ひとめぼれ・ふくまる・一番星・ゆめひたち・あさひの夢・ミルキークイーン……）と多数品種ブ ランド米を育てています。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 12,
                  "cited_message_id": "750e23ee-a841-4d58-9499-fa937a6259b9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 77,
                  "end_line_num": 85,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 713,
              "end_ix": 729,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "K2491 「ユナイテッドアローズ」コラボ 日本酒2本SET「TOKUMASAMUNE Lab. sweet /sour」 - 茨城県境町｜ふるさとチョイス - ふるさと納税サイト",
                "url": "https://www.furusato-tax.jp/product/detail/08546/6434718?srsltid=AfmBOorRfAFsCCCFYjkFsXceCA0GWVis-gyUFio0z82ERxlh5KH2sReD#:~:text=%E5%AE%B9%E9%87%8F%20%E3%80%8CTOKUMASAMUNE%20Lab,sour%E3%80%8D%20%E7%B1%B3%EF%BC%9A%E5%A2%83%E7%94%BA%E7%94%A3%E3%80%8C%E4%B8%80%E7%95%AA%E6%98%9F%E3%80%8D%EF%BC%88%E9%BA%B9%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8860%EF%BC%85%E3%80%81%E6%8E%9B%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8880%EF%BC%85%EF%BC%89",
                "text": "容量 「TOKUMASAMUNE Lab. sweet」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％） 酵母：小川酵母 麹菌：黄麹 酛：生酛 火入れ：1回 アルコール度数：10％ 容量：720ml 「TOKUMASAMUNE Lab. sour」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "cited_message_id": "d94d297d-6e4a-4350-a7ef-5dd08d8bd741",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1816,
                  "end_line_num": 1825,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 834,
              "end_ix": 848,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "講師紹介 - JAPAN REGIONAL BUSINESS ASSOCIATION",
                "url": "https://chiikibusiness.or.jp/teachers/#:~:text=",
                "text": "* * *",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 21,
                  "cited_message_id": "0f0767e1-eee3-4a12-a524-7424af09f8ec",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 280,
                  "end_line_num": 289,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 973,
              "end_ix": 985,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "事業活用のご紹介｜茨城県境町ふるさと納税特設サイト",
                "url": "https://furusato-sakai.jp/case#:~:text=2022",
                "text": "2022.09.27",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 35,
                  "cited_message_id": "2718ce4c-3b83-437a-a875-8607eff984b4",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 89,
                  "end_line_num": 93,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1232,
              "end_ix": 1246,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "楽天市場 | 茨城県境町 - レビューキャンペーン開催中！",
                "url": "https://www.rakuten.co.jp/f085464-sakai/contents/reviewcampaign/#:~:text=Image%3A%20%E5%A2%83%E7%94%BA%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3",
                "text": "Image: 境町ふるさと納税 レビューキャンペーン",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "b9f0e1ea-16f8-40b7-9d76-8f4320c46f72",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 112,
                  "end_line_num": 120,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1333,
              "end_ix": 1345,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E3%80%96%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%80%97%E3%80%8C%E7%AC%AC8%E5%9B%9E%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%9C%AA%E6%9D%A5%E3%82%92%E8%80%83%E3%81%88%E3%82%8B%E3%82%B7%E3%83%B3%E3%83%9D%E3%82%B8%E3%82%A6%E3%83%A0%E3%80%8D%E3%83%91%E3%83%8D%E3%83%AB%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E6%A9%8B%E6%9C%AC%E7%94%BA%E9%95%B7%E3%81%8C%E7%99%BB%E5%A3%87%E3%81%97%E3%81%BE%E3%81%99",
                "text": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 33,
                  "cited_message_id": "4721c5e0-2d8d-46ae-a697-173138864b89",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 34,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1436,
              "end_ix": 1448,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E3%80%81%E8%B2%A1%E6%94%BF%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E6%96%B0%E3%81%97%E3%81%84%E8%B2%A1%E6%BA%90%E3%81%A8%E3%81%97%E3%81%A6%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E5%BA%A6%E3%81%AB%E3%81%AF%EF%BC%99%EF%BC%99%E5%84%84%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%8C%E5%AF%84%E3%81%9B%E3%82%89%E3%82%8C%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%AE%E9%A1%8D%E3%81%A8%E3%81%AA%20%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E3%80%81%E5%85%A8%E5%9B%BD%E5%88%9D%E3%81%A8%E3%81%AA%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E5%85%AC%E9%81%93%E5%AE%9A%E5%B8%B8%E9%81%8B%E8%A1%8C%E3%81%AA%E3%81%A9%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%AB%E5%85%88%E9%A7%86%E3%81%91%E3%81%9F%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92%E6%95%B0%E5%A4%9A%E3%81%8F%E5%B1%95%E9%96%8B%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92TV%E3%82%84%E9%9B%91%20%E8%AA%8C%E3%81%AA%E3%81%A9%E3%81%A7%E3%81%94%E7%B4%B9%E4%BB%8B%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E6%A9%9F%E4%BC%9A%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%BE%E3%81%9F%E3%80%812016%E5%B9%B4%E3%81%AE%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E3%81%A7%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%81%8C%E5%85%A8%E5%9B%BD%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E5%88%B6%E5%BA%A6%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%9F%E3%80%8C%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%80%8D%E3%82%92%E9%96%8B%E5%A7%8B%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E9%81%93%E3%82%92%E6%8B%93%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82,%E4%BB%A4%E5%92%8C6%E5%B9%B411%E6%9C%88%E3%81%AE%E6%B2%96%E7%B8%84%E8%B1%AA%E9%9B%A8%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E3%81%8B%E3%81%AD%E3%81%A6%E3%82%88%E3%82%8A%E4%BA%A4%E6%B5%81%E3%81%AE%E3%81%82%E3%82%8B%E6%B2%96%E7%B8%84%E7%9C%8C%E5%9B%BD%E9%A0%AD%E6%9D%91%E3%81%AE%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%82%9211%E6%9C%8811%E6%97%A5%E3%82%88%E3%82%8A%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%81%AE%E3%81%94%E6%94%AF%E6%8F%B4%E3%82%92%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E7%94%B3%E3%81%97%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82",
                "text": "茨城県境町は、財政再建のため新しい財源としてふるさと納税に力を入れています。令和５年度には９９億円の寄付金が寄せられ、全国で11位、茨城県内７年連続１位の額とな りました。 ふるさと納税を活用して、子育て支援や、全国初となる自治体よる自動運転バスの公道定常運行など、全国に先駆けた取り組みを数多く展開しており、境町の取り組みをTVや雑 誌などでご紹介いただく機会が増えてきています。 また、2016年の熊本地震では、境町が全国ではじめて、ふるさと納税の制度を活用した「代理納税」を開始。ふるさと納税の活用について新しい道を拓きました。 令和6年11月の沖縄豪雨においても、かねてより交流のある沖縄県国頭村の代理納税を11月11日より開始しています。皆様のご支援をよろしくお願い申し上げます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 33,
                  "cited_message_id": "4721c5e0-2d8d-46ae-a697-173138864b89",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 90,
                  "end_line_num": 97,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1448,
              "end_ix": 1460,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖茨城県境町〗令和６年ふるさと納税米価格高騰により寄付額4割減（令和5年比） | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000071.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%EF%BC%88%E7%94%BA%E9%95%B7%EF%BC%9A%E6%A9%8B%E6%9C%AC%E6%AD%A3%E8%A3%95%EF%BC%89%E3%81%A7%E3%81%AF%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%8F%97%E5%85%A5%E9%A1%8D%E3%81%8C99%E5%84%843%2C811%E4%B8%87%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E9%96%A2%E6%9D%B1%E3%81%A7%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%EF%BC%99%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%20%E3%81%8C%E3%80%81%E6%98%A8%E5%B9%B4%E3%81%AE%E7%B1%B3%E4%BE%A1%E6%A0%BC%E3%81%AE%E9%AB%98%E9%A8%B0%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E7%B1%B3%E4%B8%8D%E8%B6%B3%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%96%E5%B9%B4%EF%BC%91%E6%9C%88%E3%81%8B%E3%82%8912%E6%9C%88%E3%81%BE%E3%81%A7%E3%81%AE%E5%AF%84%E9%99%84%E9%A1%8D%E3%81%AF%E5%89%8D%E5%B9%B4%E3%81%AE95%E5%84%84%E5%86%86%E3%81%AB%E5%AF%BE%E3%81%97%E3%80%81%EF%BC%94%E5%89%B2%E6%B8%9B%E3%81%A8%E3%81%AA%E3%82%8B54%E5%84%84%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "茨城県境町（町長：橋本正裕）では、令和５年のふるさと納税受入額が99億3,811万円となり、全国で11位、関東で７年連続１位、茨城県内で９年連続１位となりました が、昨年の米価格の高騰により、米不足となっており、令和６年１月から12月までの寄附額は前年の95億円に対し、４割減となる54億円となりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "60f70840-8741-4fea-97be-0dfb5c650fc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 37,
                  "end_line_num": 45,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1523,
              "end_ix": 1535,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖茨城県境町〗令和６年ふるさと納税米価格高騰により寄付額4割減（令和5年比） | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000071.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%EF%BC%88%E7%94%BA%E9%95%B7%EF%BC%9A%E6%A9%8B%E6%9C%AC%E6%AD%A3%E8%A3%95%EF%BC%89%E3%81%A7%E3%81%AF%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%8F%97%E5%85%A5%E9%A1%8D%E3%81%8C99%E5%84%843%2C811%E4%B8%87%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E9%96%A2%E6%9D%B1%E3%81%A7%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%EF%BC%99%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%20%E3%81%8C%E3%80%81%E6%98%A8%E5%B9%B4%E3%81%AE%E7%B1%B3%E4%BE%A1%E6%A0%BC%E3%81%AE%E9%AB%98%E9%A8%B0%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E7%B1%B3%E4%B8%8D%E8%B6%B3%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%96%E5%B9%B4%EF%BC%91%E6%9C%88%E3%81%8B%E3%82%8912%E6%9C%88%E3%81%BE%E3%81%A7%E3%81%AE%E5%AF%84%E9%99%84%E9%A1%8D%E3%81%AF%E5%89%8D%E5%B9%B4%E3%81%AE95%E5%84%84%E5%86%86%E3%81%AB%E5%AF%BE%E3%81%97%E3%80%81%EF%BC%94%E5%89%B2%E6%B8%9B%E3%81%A8%E3%81%AA%E3%82%8B54%E5%84%84%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "茨城県境町（町長：橋本正裕）では、令和５年のふるさと納税受入額が99億3,811万円となり、全国で11位、関東で７年連続１位、茨城県内で９年連続１位となりました が、昨年の米価格の高騰により、米不足となっており、令和６年１月から12月までの寄附額は前年の95億円に対し、４割減となる54億円となりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "60f70840-8741-4fea-97be-0dfb5c650fc9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 37,
                  "end_line_num": 45,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1535,
              "end_ix": 1547,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E3%80%81%E8%B2%A1%E6%94%BF%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E6%96%B0%E3%81%97%E3%81%84%E8%B2%A1%E6%BA%90%E3%81%A8%E3%81%97%E3%81%A6%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E5%BA%A6%E3%81%AB%E3%81%AF%EF%BC%99%EF%BC%99%E5%84%84%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%8C%E5%AF%84%E3%81%9B%E3%82%89%E3%82%8C%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%AE%E9%A1%8D%E3%81%A8%E3%81%AA%20%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E3%80%81%E5%85%A8%E5%9B%BD%E5%88%9D%E3%81%A8%E3%81%AA%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E5%85%AC%E9%81%93%E5%AE%9A%E5%B8%B8%E9%81%8B%E8%A1%8C%E3%81%AA%E3%81%A9%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%AB%E5%85%88%E9%A7%86%E3%81%91%E3%81%9F%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92%E6%95%B0%E5%A4%9A%E3%81%8F%E5%B1%95%E9%96%8B%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92TV%E3%82%84%E9%9B%91%20%E8%AA%8C%E3%81%AA%E3%81%A9%E3%81%A7%E3%81%94%E7%B4%B9%E4%BB%8B%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E6%A9%9F%E4%BC%9A%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%BE%E3%81%9F%E3%80%812016%E5%B9%B4%E3%81%AE%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E3%81%A7%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%81%8C%E5%85%A8%E5%9B%BD%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E5%88%B6%E5%BA%A6%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%9F%E3%80%8C%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%80%8D%E3%82%92%E9%96%8B%E5%A7%8B%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E9%81%93%E3%82%92%E6%8B%93%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82,%E4%BB%A4%E5%92%8C6%E5%B9%B411%E6%9C%88%E3%81%AE%E6%B2%96%E7%B8%84%E8%B1%AA%E9%9B%A8%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E3%81%8B%E3%81%AD%E3%81%A6%E3%82%88%E3%82%8A%E4%BA%A4%E6%B5%81%E3%81%AE%E3%81%82%E3%82%8B%E6%B2%96%E7%B8%84%E7%9C%8C%E5%9B%BD%E9%A0%AD%E6%9D%91%E3%81%AE%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%82%9211%E6%9C%8811%E6%97%A5%E3%82%88%E3%82%8A%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%81%AE%E3%81%94%E6%94%AF%E6%8F%B4%E3%82%92%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E7%94%B3%E3%81%97%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82",
                "text": "茨城県境町は、財政再建のため新しい財源としてふるさと納税に力を入れています。令和５年度には９９億円の寄付金が寄せられ、全国で11位、茨城県内７年連続１位の額とな りました。 ふるさと納税を活用して、子育て支援や、全国初となる自治体よる自動運転バスの公道定常運行など、全国に先駆けた取り組みを数多く展開しており、境町の取り組みをTVや雑 誌などでご紹介いただく機会が増えてきています。 また、2016年の熊本地震では、境町が全国ではじめて、ふるさと納税の制度を活用した「代理納税」を開始。ふるさと納税の活用について新しい道を拓きました。 令和6年11月の沖縄豪雨においても、かねてより交流のある沖縄県国頭村の代理納税を11月11日より開始しています。皆様のご支援をよろしくお願い申し上げます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 33,
                  "cited_message_id": "4721c5e0-2d8d-46ae-a697-173138864b89",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 90,
                  "end_line_num": 97,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1640,
              "end_ix": 1654,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=S",
                "text": "S-Lab 3rdの建設費は国の補助金や地方創生交付金、そしてふるさと納税で得た資金を活用しています。つまり、町の一般財源に手を付けずに、生産拠点を拡充してきま した。つまり、町の財政再建と「稼ぐ力」の強化を同時に進められたのです。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 139,
                  "end_line_num": 147,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1654,
              "end_ix": 1668,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%A7%E7%94%9F%E7%94%A3%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B5%E3%83%84%E3%83%9E%E3%82%A4%E3%83%A2%E3%82%92%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AB%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%8C%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E5%AE%9A%E7%95%AA%E5%8C%96%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E8%BE%B2%E6%A5%AD%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%E6%B4%BB%E5%8A%9B%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "境町では地域で生産されたサツマイモを返礼品の干し芋に活用しています。干し芋が返礼品として定番化したことで、境町の農業に新たな活力が生まれました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 177,
                  "end_line_num": 185,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1696,
              "end_ix": 1707,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
                "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
                "text": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 7,
                  "cited_message_id": "4db40c37-cf68-472a-b759-4f4fc4be9b82",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 41,
                  "end_line_num": 49,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1707,
              "end_ix": 1719,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "茨城県境町のふるさと納税はなぜ成功するのか",
                "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E3%82%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%93%E3%81%A8%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%A7%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E6%8B%85%E5%BD%93%E8%80%85%E3%81%8B%E3%82%89%E3%81%AF%E5%A4%A7%E5%A4%89%E6%B3%A8%E7%9B%AE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82",
                "text": "茨城県境町は茨城県内でもふるさと納税額が多いことで有名で、ふるさと納税担当者からは大変注目されている自治体である。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 12,
                  "cited_message_id": "750e23ee-a841-4d58-9499-fa937a6259b9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 52,
                  "end_line_num": 55,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1719,
              "end_ix": 1731,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "事業活用のご紹介｜茨城県境町ふるさと納税特設サイト",
                "url": "https://furusato-sakai.jp/case#:~:text=2022",
                "text": "2022.09.27",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 35,
                  "cited_message_id": "2718ce4c-3b83-437a-a875-8607eff984b4",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 89,
                  "end_line_num": 93,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1731,
              "end_ix": 1745,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
                "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
                "text": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "ffee27bb-b4aa-4faf-abc0-a151d88f3c9d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 125,
                  "end_line_num": 133,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1745,
              "end_ix": 1761,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "K2491 「ユナイテッドアローズ」コラボ 日本酒2本SET「TOKUMASAMUNE Lab. sweet /sour」 - 茨城県境町｜ふるさとチョイス - ふるさと納税サイト",
                "url": "https://www.furusato-tax.jp/product/detail/08546/6434718?srsltid=AfmBOorRfAFsCCCFYjkFsXceCA0GWVis-gyUFio0z82ERxlh5KH2sReD#:~:text=%E5%AE%B9%E9%87%8F%20%E3%80%8CTOKUMASAMUNE%20Lab,sour%E3%80%8D%20%E7%B1%B3%EF%BC%9A%E5%A2%83%E7%94%BA%E7%94%A3%E3%80%8C%E4%B8%80%E7%95%AA%E6%98%9F%E3%80%8D%EF%BC%88%E9%BA%B9%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8860%EF%BC%85%E3%80%81%E6%8E%9B%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8880%EF%BC%85%EF%BC%89",
                "text": "容量 「TOKUMASAMUNE Lab. sweet」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％） 酵母：小川酵母 麹菌：黄麹 酛：生酛 火入れ：1回 アルコール度数：10％ 容量：720ml 「TOKUMASAMUNE Lab. sour」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "cited_message_id": "d94d297d-6e4a-4350-a7ef-5dd08d8bd741",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1816,
                  "end_line_num": 1825,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1761,
              "end_ix": 1775,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "楽天市場 | 茨城県境町 - レビューキャンペーン開催中！",
                "url": "https://www.rakuten.co.jp/f085464-sakai/contents/reviewcampaign/#:~:text=Image%3A%20%E5%A2%83%E7%94%BA%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3",
                "text": "Image: 境町ふるさと納税 レビューキャンペーン",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 44,
                  "cited_message_id": "b9f0e1ea-16f8-40b7-9d76-8f4320c46f72",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 112,
                  "end_line_num": 120,
                  "connector_source": null
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【12†L52-L55】",
              "start_idx": 159,
              "end_idx": 171,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E3%82%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%93%E3%81%A8%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%A7%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E6%8B%85%E5%BD%93%E8%80%85%E3%81%8B%E3%82%89%E3%81%AF%E5%A4%A7%E5%A4%89%E6%B3%A8%E7%9B%AE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町は茨城県内でもふるさと納税額が多いことで有名で、ふるさと納税担当者からは大変注目されている自治体である。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【7†L41-L49】",
              "start_idx": 240,
              "end_idx": 251,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
              "pub_date": null,
              "snippet": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L125-L133】",
              "start_idx": 251,
              "end_idx": 265,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【7†L41-L49】",
              "start_idx": 332,
              "end_idx": 343,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
              "pub_date": null,
              "snippet": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L135-L143】",
              "start_idx": 400,
              "end_idx": 414,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=%E9%87%8E%E5%8F%A3%20S",
              "pub_date": null,
              "snippet": "野口 S-Lab 3rdを作る前から、ふるさと納税の返礼品として境町の干し芋が大人気で、需要に生産が追いつきません。そこで、町の投資により干し芋の生産拠点を建設 してもらうことにしたのです。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【37†embed_image】",
              "start_idx": 418,
              "end_idx": 434,
              "alt": null,
              "type": "image_inline",
              "asset_pointer_links": [],
              "clicked_from_url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html",
              "clicked_from_title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース"
            },
            {
              "matched_text": "【36†L125-L133】",
              "start_idx": 493,
              "end_idx": 507,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【12†L77-L85】",
              "start_idx": 552,
              "end_idx": 564,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E5%BA%83%E3%81%84%E9%96%A2%E6%9D%B1%E5%B9%B3%E9%87%8E%E3%81%AB%E4%BD%8D%E7%BD%AE%E3%81%97%E3%81%A6%E3%81%99%E3%82%8B%E8%8C%A8%E5%9F%8E%E7%9C%8C%E3%81%AB%E3%81%AF%E3%80%81%E7%B1%B3%E3%81%AE%E6%A0%BD%E5%9F%B9%E3%81%AB%E9%81%A9%E3%81%97%E3%81%9F%E5%9C%9F%E5%9C%B0%EF%BC%88%E8%BE%B2%E6%A5%AD%E7%94%A8%E6%B0%B4%E3%81%AE%E7%AE%A1%E7%90%86%E3%81%8C%E8%A1%8C%E3%81%8D%E5%B1%8A%E3%81%8D%E3%80%81%E9%A4%8A%E5%88%86%E3%81%8C%E8%B1%8A%E5%AF%8C%EF%BC%89%E3%81%A7%E7%B1%B3%E8%BE%B2%E5%AE%B6%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%99%E3%80%82%20%E5%A2%83%E7%94%BA%E3%82%82%E7%94%B0%E5%9C%92%E9%9D%A2%E7%A9%8D%E3%81%8C%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%BA%83%E3%81%8F%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E5%A4%9A%E3%81%8F%E3%81%AE%E7%B1%B3%E3%82%92%E6%A0%BD%E5%9F%B9%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%8C%E3%81%82%E3%81%8D%E3%81%9F%E3%81%93%E3%81%BE%E3%81%A1%E3%83%BB%E3%81%B2%E3%81%A8%E3%82%81%E3%81%BC%E3%82%8C%E3%83%BB%E3%81%B5%E3%81%8F%E3%81%BE%E3%82%8B%E3%83%BB%E4%B8%80%E7%95%AA%E6%98%9F%E3%83%BB%E3%82%86%E3%82%81%E3%81%B2%E3%81%9F%E3%81%A1%E3%83%BB%E3%81%82%E3%81%95%E3%81%B2%E3%81%AE%E5%A4%A2%E3%83%BB%E3%83%9F%E3%83%AB%E3%82%AD%E3%83%BC%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3%E2%80%A6%E2%80%A6%EF%BC%89%E3%81%A8%E5%A4%9A%E6%95%B0%E5%93%81%E7%A8%AE%E3%83%96%20%E3%83%A9%E3%83%B3%E3%83%89%E7%B1%B3%E3%82%92%E8%82%B2%E3%81%A6%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "広い関東平野に位置してする茨城県には、米の栽培に適した土地（農業用水の管理が行き届き、養分が豊富）で米農家の方が多いです。 境町も田園面積が非常に広く、そこで多くの米を栽培しており「あきたこまち・ひとめぼれ・ふくまる・一番星・ゆめひたち・あさひの夢・ミルキークイーン……）と多数品種ブ ランド米を育てています。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【42†L1816-L1825】",
              "start_idx": 713,
              "end_idx": 729,
              "alt": null,
              "type": "webpage_extended",
              "title": "K2491 「ユナイテッドアローズ」コラボ 日本酒2本SET「TOKUMASAMUNE Lab. sweet /sour」 - 茨城県境町｜ふるさとチョイス - ふるさと納税サイト",
              "url": "https://www.furusato-tax.jp/product/detail/08546/6434718?srsltid=AfmBOorRfAFsCCCFYjkFsXceCA0GWVis-gyUFio0z82ERxlh5KH2sReD#:~:text=%E5%AE%B9%E9%87%8F%20%E3%80%8CTOKUMASAMUNE%20Lab,sour%E3%80%8D%20%E7%B1%B3%EF%BC%9A%E5%A2%83%E7%94%BA%E7%94%A3%E3%80%8C%E4%B8%80%E7%95%AA%E6%98%9F%E3%80%8D%EF%BC%88%E9%BA%B9%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8860%EF%BC%85%E3%80%81%E6%8E%9B%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8880%EF%BC%85%EF%BC%89",
              "pub_date": null,
              "snippet": "容量 「TOKUMASAMUNE Lab. sweet」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％） 酵母：小川酵母 麹菌：黄麹 酛：生酛 火入れ：1回 アルコール度数：10％ 容量：720ml 「TOKUMASAMUNE Lab. sour」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％）",
              "attribution": "furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【21†L280-L289】",
              "start_idx": 834,
              "end_idx": 848,
              "alt": null,
              "type": "webpage_extended",
              "title": "講師紹介 - JAPAN REGIONAL BUSINESS ASSOCIATION",
              "url": "https://chiikibusiness.or.jp/teachers/#:~:text=",
              "pub_date": null,
              "snippet": "* * *",
              "attribution": "chiikibusiness.or.jp",
              "icon_type": null
            },
            {
              "matched_text": "【35†L89-L93】",
              "start_idx": 973,
              "end_idx": 985,
              "alt": null,
              "type": "webpage_extended",
              "title": "事業活用のご紹介｜茨城県境町ふるさと納税特設サイト",
              "url": "https://furusato-sakai.jp/case#:~:text=2022",
              "pub_date": null,
              "snippet": "2022.09.27",
              "attribution": "furusato-sakai.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L112-L120】",
              "start_idx": 1232,
              "end_idx": 1246,
              "alt": null,
              "type": "webpage_extended",
              "title": "楽天市場 | 茨城県境町 - レビューキャンペーン開催中！",
              "url": "https://www.rakuten.co.jp/f085464-sakai/contents/reviewcampaign/#:~:text=Image%3A%20%E5%A2%83%E7%94%BA%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3",
              "pub_date": null,
              "snippet": "Image: 境町ふるさと納税 レビューキャンペーン",
              "attribution": "rakuten.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【33†L27-L34】",
              "start_idx": 1333,
              "end_idx": 1345,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E3%80%96%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%80%97%E3%80%8C%E7%AC%AC8%E5%9B%9E%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%9C%AA%E6%9D%A5%E3%82%92%E8%80%83%E3%81%88%E3%82%8B%E3%82%B7%E3%83%B3%E3%83%9D%E3%82%B8%E3%82%A6%E3%83%A0%E3%80%8D%E3%83%91%E3%83%8D%E3%83%AB%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E6%A9%8B%E6%9C%AC%E7%94%BA%E9%95%B7%E3%81%8C%E7%99%BB%E5%A3%87%E3%81%97%E3%81%BE%E3%81%99",
              "pub_date": null,
              "snippet": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【33†L90-L97】",
              "start_idx": 1436,
              "end_idx": 1448,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E3%80%81%E8%B2%A1%E6%94%BF%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E6%96%B0%E3%81%97%E3%81%84%E8%B2%A1%E6%BA%90%E3%81%A8%E3%81%97%E3%81%A6%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E5%BA%A6%E3%81%AB%E3%81%AF%EF%BC%99%EF%BC%99%E5%84%84%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%8C%E5%AF%84%E3%81%9B%E3%82%89%E3%82%8C%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%AE%E9%A1%8D%E3%81%A8%E3%81%AA%20%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E3%80%81%E5%85%A8%E5%9B%BD%E5%88%9D%E3%81%A8%E3%81%AA%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E5%85%AC%E9%81%93%E5%AE%9A%E5%B8%B8%E9%81%8B%E8%A1%8C%E3%81%AA%E3%81%A9%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%AB%E5%85%88%E9%A7%86%E3%81%91%E3%81%9F%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92%E6%95%B0%E5%A4%9A%E3%81%8F%E5%B1%95%E9%96%8B%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92TV%E3%82%84%E9%9B%91%20%E8%AA%8C%E3%81%AA%E3%81%A9%E3%81%A7%E3%81%94%E7%B4%B9%E4%BB%8B%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E6%A9%9F%E4%BC%9A%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%BE%E3%81%9F%E3%80%812016%E5%B9%B4%E3%81%AE%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E3%81%A7%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%81%8C%E5%85%A8%E5%9B%BD%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E5%88%B6%E5%BA%A6%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%9F%E3%80%8C%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%80%8D%E3%82%92%E9%96%8B%E5%A7%8B%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E9%81%93%E3%82%92%E6%8B%93%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82,%E4%BB%A4%E5%92%8C6%E5%B9%B411%E6%9C%88%E3%81%AE%E6%B2%96%E7%B8%84%E8%B1%AA%E9%9B%A8%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E3%81%8B%E3%81%AD%E3%81%A6%E3%82%88%E3%82%8A%E4%BA%A4%E6%B5%81%E3%81%AE%E3%81%82%E3%82%8B%E6%B2%96%E7%B8%84%E7%9C%8C%E5%9B%BD%E9%A0%AD%E6%9D%91%E3%81%AE%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%82%9211%E6%9C%8811%E6%97%A5%E3%82%88%E3%82%8A%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%81%AE%E3%81%94%E6%94%AF%E6%8F%B4%E3%82%92%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E7%94%B3%E3%81%97%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町は、財政再建のため新しい財源としてふるさと納税に力を入れています。令和５年度には９９億円の寄付金が寄せられ、全国で11位、茨城県内７年連続１位の額とな りました。 ふるさと納税を活用して、子育て支援や、全国初となる自治体よる自動運転バスの公道定常運行など、全国に先駆けた取り組みを数多く展開しており、境町の取り組みをTVや雑 誌などでご紹介いただく機会が増えてきています。 また、2016年の熊本地震では、境町が全国ではじめて、ふるさと納税の制度を活用した「代理納税」を開始。ふるさと納税の活用について新しい道を拓きました。 令和6年11月の沖縄豪雨においても、かねてより交流のある沖縄県国頭村の代理納税を11月11日より開始しています。皆様のご支援をよろしくお願い申し上げます。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L37-L45】",
              "start_idx": 1448,
              "end_idx": 1460,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖茨城県境町〗令和６年ふるさと納税米価格高騰により寄付額4割減（令和5年比） | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000071.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%EF%BC%88%E7%94%BA%E9%95%B7%EF%BC%9A%E6%A9%8B%E6%9C%AC%E6%AD%A3%E8%A3%95%EF%BC%89%E3%81%A7%E3%81%AF%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%8F%97%E5%85%A5%E9%A1%8D%E3%81%8C99%E5%84%843%2C811%E4%B8%87%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E9%96%A2%E6%9D%B1%E3%81%A7%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%EF%BC%99%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%20%E3%81%8C%E3%80%81%E6%98%A8%E5%B9%B4%E3%81%AE%E7%B1%B3%E4%BE%A1%E6%A0%BC%E3%81%AE%E9%AB%98%E9%A8%B0%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E7%B1%B3%E4%B8%8D%E8%B6%B3%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%96%E5%B9%B4%EF%BC%91%E6%9C%88%E3%81%8B%E3%82%8912%E6%9C%88%E3%81%BE%E3%81%A7%E3%81%AE%E5%AF%84%E9%99%84%E9%A1%8D%E3%81%AF%E5%89%8D%E5%B9%B4%E3%81%AE95%E5%84%84%E5%86%86%E3%81%AB%E5%AF%BE%E3%81%97%E3%80%81%EF%BC%94%E5%89%B2%E6%B8%9B%E3%81%A8%E3%81%AA%E3%82%8B54%E5%84%84%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町（町長：橋本正裕）では、令和５年のふるさと納税受入額が99億3,811万円となり、全国で11位、関東で７年連続１位、茨城県内で９年連続１位となりました が、昨年の米価格の高騰により、米不足となっており、令和６年１月から12月までの寄附額は前年の95億円に対し、４割減となる54億円となりました。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L37-L45】",
              "start_idx": 1523,
              "end_idx": 1535,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖茨城県境町〗令和６年ふるさと納税米価格高騰により寄付額4割減（令和5年比） | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000071.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%EF%BC%88%E7%94%BA%E9%95%B7%EF%BC%9A%E6%A9%8B%E6%9C%AC%E6%AD%A3%E8%A3%95%EF%BC%89%E3%81%A7%E3%81%AF%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E5%8F%97%E5%85%A5%E9%A1%8D%E3%81%8C99%E5%84%843%2C811%E4%B8%87%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E9%96%A2%E6%9D%B1%E3%81%A7%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%EF%BC%99%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%20%E3%81%8C%E3%80%81%E6%98%A8%E5%B9%B4%E3%81%AE%E7%B1%B3%E4%BE%A1%E6%A0%BC%E3%81%AE%E9%AB%98%E9%A8%B0%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E7%B1%B3%E4%B8%8D%E8%B6%B3%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%96%E5%B9%B4%EF%BC%91%E6%9C%88%E3%81%8B%E3%82%8912%E6%9C%88%E3%81%BE%E3%81%A7%E3%81%AE%E5%AF%84%E9%99%84%E9%A1%8D%E3%81%AF%E5%89%8D%E5%B9%B4%E3%81%AE95%E5%84%84%E5%86%86%E3%81%AB%E5%AF%BE%E3%81%97%E3%80%81%EF%BC%94%E5%89%B2%E6%B8%9B%E3%81%A8%E3%81%AA%E3%82%8B54%E5%84%84%E5%86%86%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町（町長：橋本正裕）では、令和５年のふるさと納税受入額が99億3,811万円となり、全国で11位、関東で７年連続１位、茨城県内で９年連続１位となりました が、昨年の米価格の高騰により、米不足となっており、令和６年１月から12月までの寄附額は前年の95億円に対し、４割減となる54億円となりました。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【33†L90-L97】",
              "start_idx": 1535,
              "end_idx": 1547,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖茨城県境町〗「第8回ふるさと納税の未来を考えるシンポジウム」パネルディスカッションに橋本町長が登壇します | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000043.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E3%80%81%E8%B2%A1%E6%94%BF%E5%86%8D%E5%BB%BA%E3%81%AE%E3%81%9F%E3%82%81%E6%96%B0%E3%81%97%E3%81%84%E8%B2%A1%E6%BA%90%E3%81%A8%E3%81%97%E3%81%A6%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AB%E5%8A%9B%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%E5%BA%A6%E3%81%AB%E3%81%AF%EF%BC%99%EF%BC%99%E5%84%84%E5%86%86%E3%81%AE%E5%AF%84%E4%BB%98%E9%87%91%E3%81%8C%E5%AF%84%E3%81%9B%E3%82%89%E3%82%8C%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%A711%E4%BD%8D%E3%80%81%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%EF%BC%97%E5%B9%B4%E9%80%A3%E7%B6%9A%EF%BC%91%E4%BD%8D%E3%81%AE%E9%A1%8D%E3%81%A8%E3%81%AA%20%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%80%81%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%84%E3%80%81%E5%85%A8%E5%9B%BD%E5%88%9D%E3%81%A8%E3%81%AA%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E9%81%8B%E8%BB%A2%E3%83%90%E3%82%B9%E3%81%AE%E5%85%AC%E9%81%93%E5%AE%9A%E5%B8%B8%E9%81%8B%E8%A1%8C%E3%81%AA%E3%81%A9%E3%80%81%E5%85%A8%E5%9B%BD%E3%81%AB%E5%85%88%E9%A7%86%E3%81%91%E3%81%9F%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92%E6%95%B0%E5%A4%9A%E3%81%8F%E5%B1%95%E9%96%8B%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E5%8F%96%E3%82%8A%E7%B5%84%E3%81%BF%E3%82%92TV%E3%82%84%E9%9B%91%20%E8%AA%8C%E3%81%AA%E3%81%A9%E3%81%A7%E3%81%94%E7%B4%B9%E4%BB%8B%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E6%A9%9F%E4%BC%9A%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%BE%E3%81%9F%E3%80%812016%E5%B9%B4%E3%81%AE%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E3%81%A7%E3%81%AF%E3%80%81%E5%A2%83%E7%94%BA%E3%81%8C%E5%85%A8%E5%9B%BD%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E5%88%B6%E5%BA%A6%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%9F%E3%80%8C%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%80%8D%E3%82%92%E9%96%8B%E5%A7%8B%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E9%81%93%E3%82%92%E6%8B%93%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82,%E4%BB%A4%E5%92%8C6%E5%B9%B411%E6%9C%88%E3%81%AE%E6%B2%96%E7%B8%84%E8%B1%AA%E9%9B%A8%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E3%81%8B%E3%81%AD%E3%81%A6%E3%82%88%E3%82%8A%E4%BA%A4%E6%B5%81%E3%81%AE%E3%81%82%E3%82%8B%E6%B2%96%E7%B8%84%E7%9C%8C%E5%9B%BD%E9%A0%AD%E6%9D%91%E3%81%AE%E4%BB%A3%E7%90%86%E7%B4%8D%E7%A8%8E%E3%82%9211%E6%9C%8811%E6%97%A5%E3%82%88%E3%82%8A%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%81%AE%E3%81%94%E6%94%AF%E6%8F%B4%E3%82%92%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E7%94%B3%E3%81%97%E4%B8%8A%E3%81%92%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町は、財政再建のため新しい財源としてふるさと納税に力を入れています。令和５年度には９９億円の寄付金が寄せられ、全国で11位、茨城県内７年連続１位の額とな りました。 ふるさと納税を活用して、子育て支援や、全国初となる自治体よる自動運転バスの公道定常運行など、全国に先駆けた取り組みを数多く展開しており、境町の取り組みをTVや雑 誌などでご紹介いただく機会が増えてきています。 また、2016年の熊本地震では、境町が全国ではじめて、ふるさと納税の制度を活用した「代理納税」を開始。ふるさと納税の活用について新しい道を拓きました。 令和6年11月の沖縄豪雨においても、かねてより交流のある沖縄県国頭村の代理納税を11月11日より開始しています。皆様のご支援をよろしくお願い申し上げます。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L139-L147】",
              "start_idx": 1640,
              "end_idx": 1654,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=S",
              "pub_date": null,
              "snippet": "S-Lab 3rdの建設費は国の補助金や地方創生交付金、そしてふるさと納税で得た資金を活用しています。つまり、町の一般財源に手を付けずに、生産拠点を拡充してきま した。つまり、町の財政再建と「稼ぐ力」の強化を同時に進められたのです。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【36†L177-L185】",
              "start_idx": 1654,
              "end_idx": 1668,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E5%9C%B0%E5%9F%9F%E3%81%A7%E7%94%9F%E7%94%A3%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B5%E3%83%84%E3%83%9E%E3%82%A4%E3%83%A2%E3%82%92%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AB%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%8C%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E5%AE%9A%E7%95%AA%E5%8C%96%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E5%A2%83%E7%94%BA%E3%81%AE%E8%BE%B2%E6%A5%AD%E3%81%AB%E6%96%B0%E3%81%9F%E3%81%AA%E6%B4%BB%E5%8A%9B%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "境町では地域で生産されたサツマイモを返礼品の干し芋に活用しています。干し芋が返礼品として定番化したことで、境町の農業に新たな活力が生まれました。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【7†L41-L49】",
              "start_idx": 1696,
              "end_idx": 1707,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町の新施設「S-Lab（エスラボ）」で開発の干し芋が好調。ふるさと納税で、申込10,000セット突破。寄附額1億円超。 | 境町役場のプレスリリース",
              "url": "https://prtimes.jp/main/html/rd/p/000000021.000056181.html#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%A7%E3%81%AF%E3%80%81%E6%96%B0%E6%96%BD%E8%A8%AD%E3%80%81%E5%A2%83%E7%94%BA%E5%9C%B0%E5%A0%B4%E7%94%A3%E5%93%81%E7%A0%94%E7%A9%B6%E9%96%8B%E7%99%BA%E6%96%BD%E8%A8%AD%E3%80%8CS",
              "pub_date": null,
              "snippet": "茨城県境町では、新施設、境町地場産品研究開発施設「S-Lab」で開発した「干し芋」が、ふるさと納税の返礼品として大変好調です。 大手ふるさと納税サイト「ふるさとチョイス」などに2019年度から掲載をはじめ、このたび累計申込数が10,000セットを突破し、寄附金額も1億円を超えました。",
              "attribution": "prtimes.jp",
              "icon_type": null
            },
            {
              "matched_text": "【12†L52-L55】",
              "start_idx": 1707,
              "end_idx": 1719,
              "alt": null,
              "type": "webpage_extended",
              "title": "茨城県境町のふるさと納税はなぜ成功するのか",
              "url": "https://cocofuru.jp/ibaraki-sakai-town-story/#:~:text=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%A2%83%E7%94%BA%E3%81%AF%E8%8C%A8%E5%9F%8E%E7%9C%8C%E5%86%85%E3%81%A7%E3%82%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E9%A1%8D%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%93%E3%81%A8%E3%81%A7%E6%9C%89%E5%90%8D%E3%81%A7%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E6%8B%85%E5%BD%93%E8%80%85%E3%81%8B%E3%82%89%E3%81%AF%E5%A4%A7%E5%A4%89%E6%B3%A8%E7%9B%AE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E8%87%AA%E6%B2%BB%E4%BD%93%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82",
              "pub_date": null,
              "snippet": "茨城県境町は茨城県内でもふるさと納税額が多いことで有名で、ふるさと納税担当者からは大変注目されている自治体である。",
              "attribution": "cocofuru.jp",
              "icon_type": null
            },
            {
              "matched_text": "【35†L89-L93】",
              "start_idx": 1719,
              "end_idx": 1731,
              "alt": null,
              "type": "webpage_extended",
              "title": "事業活用のご紹介｜茨城県境町ふるさと納税特設サイト",
              "url": "https://furusato-sakai.jp/case#:~:text=2022",
              "pub_date": null,
              "snippet": "2022.09.27",
              "attribution": "furusato-sakai.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L125-L133】",
              "start_idx": 1731,
              "end_idx": 1745,
              "alt": null,
              "type": "webpage_extended",
              "title": "地域公社が推進する公民連携のまちづくり 茨城県境町の成功事例、全国展開が進行中 - ConnectX（コネクトエックス）公式サイト",
              "url": "https://connectx.life/casestudy/3319/#:~:text=%E5%A2%83%E7%94%BA%E3%81%A7%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%9F%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AF%E3%80%81%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E4%BA%BA%E6%B0%97%E5%95%86%E5%93%81%E3%81%A8%E3%81%97%E3%81%A6%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E5%B9%B2%E3%81%97%E8%8A%8B%E3%81%AE%E4%BA%BA%E6%B0%97%E3%81%8C%E5%8A%9F%E3%82%92%E5%A5%8F%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%80%812016%E5%B9%B4%E3%81%8B%E3%82%892022%E5%B9%B4%E3%81%AE6%E5%B9%B4%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6%E5%A2%83%E7%94%BA%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E9%A1%8D%E3%81%AF%E9%96%A2%E6%9D%B11%E4%BD%8D%E3%82%92%E7%8D%B2%E5%BE%97%E3%80%82%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%E3%81%AE%E8%BF%94%E7%A4%BC%E5%93%81%E3%81%AB%E5%B9%B2%E3%81%97%E8%8A%8B%E3%82%92%E5%87%BA%E5%93%81%E3%81%99%E3%82%8B%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AF%E3%80%81%E9%87%8E%E5%8F%A3%E3%81%95%E3%82%93%E3%81%AE%E6%8F%90%E6%A1%88%E3%81%8C%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "境町で作られた干し芋は、ふるさと納税の人気商品として知られています。この干し芋の人気が功を奏した結果、2016年から2022年の6年にわたって境町のふるさと納税 額は関東1位を獲得。ふるさと納税の返礼品に干し芋を出品するアイデアは、野口さんの提案がきっかけでした。",
              "attribution": "connectx.life",
              "icon_type": null
            },
            {
              "matched_text": "【42†L1816-L1825】",
              "start_idx": 1745,
              "end_idx": 1761,
              "alt": null,
              "type": "webpage_extended",
              "title": "K2491 「ユナイテッドアローズ」コラボ 日本酒2本SET「TOKUMASAMUNE Lab. sweet /sour」 - 茨城県境町｜ふるさとチョイス - ふるさと納税サイト",
              "url": "https://www.furusato-tax.jp/product/detail/08546/6434718?srsltid=AfmBOorRfAFsCCCFYjkFsXceCA0GWVis-gyUFio0z82ERxlh5KH2sReD#:~:text=%E5%AE%B9%E9%87%8F%20%E3%80%8CTOKUMASAMUNE%20Lab,sour%E3%80%8D%20%E7%B1%B3%EF%BC%9A%E5%A2%83%E7%94%BA%E7%94%A3%E3%80%8C%E4%B8%80%E7%95%AA%E6%98%9F%E3%80%8D%EF%BC%88%E9%BA%B9%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8860%EF%BC%85%E3%80%81%E6%8E%9B%E7%B1%B3%EF%BC%8F%E7%B2%BE%E7%B1%B3%E6%AD%A9%E5%90%8880%EF%BC%85%EF%BC%89",
              "pub_date": null,
              "snippet": "容量 「TOKUMASAMUNE Lab. sweet」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％） 酵母：小川酵母 麹菌：黄麹 酛：生酛 火入れ：1回 アルコール度数：10％ 容量：720ml 「TOKUMASAMUNE Lab. sour」 米：境町産「一番星」（麹米／精米歩合60％、掛米／精米歩合80％）",
              "attribution": "furusato-tax.jp",
              "icon_type": null
            },
            {
              "matched_text": "【44†L112-L120】",
              "start_idx": 1761,
              "end_idx": 1775,
              "alt": null,
              "type": "webpage_extended",
              "title": "楽天市場 | 茨城県境町 - レビューキャンペーン開催中！",
              "url": "https://www.rakuten.co.jp/f085464-sakai/contents/reviewcampaign/#:~:text=Image%3A%20%E5%A2%83%E7%94%BA%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E7%B4%8D%E7%A8%8E%20%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3",
              "pub_date": null,
              "snippet": "Image: 境町ふるさと納税 レビューキャンペーン",
              "attribution": "rakuten.co.jp",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_684fe2c0a1708191ac1b9baa9d385d5d",
          "async_task_title": "境町ふるさと納税急伸の返礼品戦略とPR手法"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "e0df0d0d-b9c5-4aff-8248-6611e00c2227",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "fd5eb9e4-25d5-4f83-a761-4860617e292c",
  "plugin_ids": null,
  "conversation_id": "684f6562-ce84-8003-8954-3c6f2f5dbf36",
  "conversation_template_id": null,
  "gizmo_id": null,
  "gizmo_type": null,
  "is_archived": false,
  "is_starred": null,
  "safe_urls": [
    "https://qiita.com/kanekoh/items/6fe5ca3dd1186117d36a",
    "https://www.city.uto.lg.jp/article/view/1290/12727.html",
    "https://a-work-jobs.com/",
    "https://a-work.co.jp/"
  ],
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
  "id": "684f6562-ce84-8003-8954-3c6f2f5dbf36"
}
```