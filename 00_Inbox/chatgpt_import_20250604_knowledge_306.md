---
id: inbox_chatgpt_20250604_eebea4db
type: note
source: chatgpt
source_id: eebea4db-ca9f-4adb-b3dd-cde6daeaed9b
source_group: E
group_classification: 情報整理・ナレッジ
created: 2025-06-04
imported: 2026-05-05
status: inbox
tags: [chatgpt, inbox, group-E, imported]
---

## 📋 要約

- **元タイトル:** 小野さんの活動状況
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 10%
- **メッセージ数:** 9
- **作成日時:** 2025-06-04 01:50:52
- **推奨移行先:** 03_Knowledge または 00_Inbox
- **タグ候補:** E

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
  "title": "小野さんの活動状況",
  "create_time": 1749001852.259385,
  "update_time": 1749002142.963411,
  "mapping": {
    "eebea4db-ca9f-4adb-b3dd-cde6daeaed9b": {
      "id": "eebea4db-ca9f-4adb-b3dd-cde6daeaed9b",
      "message": null,
      "parent": null,
      "children": [
        "f104dfec-33c7-4bb5-a703-d9dbe36c9800"
      ]
    },
    "f104dfec-33c7-4bb5-a703-d9dbe36c9800": {
      "id": "f104dfec-33c7-4bb5-a703-d9dbe36c9800",
      "message": {
        "id": "f104dfec-33c7-4bb5-a703-d9dbe36c9800",
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
      "parent": "eebea4db-ca9f-4adb-b3dd-cde6daeaed9b",
      "children": [
        "abf10c99-a631-4566-bf51-0ae957ed45f4"
      ]
    },
    "abf10c99-a631-4566-bf51-0ae957ed45f4": {
      "id": "abf10c99-a631-4566-bf51-0ae957ed45f4",
      "message": {
        "id": "abf10c99-a631-4566-bf51-0ae957ed45f4",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749001850.9749908,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "熊本県の元副知事で、現参議院議員の小野さんの現在の活動状況をリサーチしてください"
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
          "request_id": "94a3c826ad87d3f1-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "f104dfec-33c7-4bb5-a703-d9dbe36c9800",
      "children": [
        "c2436711-1e49-4348-b85b-f188b7ed6450"
      ]
    },
    "c2436711-1e49-4348-b85b-f188b7ed6450": {
      "id": "c2436711-1e49-4348-b85b-f188b7ed6450",
      "message": {
        "id": "c2436711-1e49-4348-b85b-f188b7ed6450",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749001853.499673,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "小野さんについて、もう少し詳しく教えていただけますか？たとえば、フルネーム（例：小野泰輔さんなど）を教えていただけると、正確な情報を調査しやすくなります。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "abf10c99-a631-4566-bf51-0ae957ed45f4",
          "request_id": "94a3c826ad87d3f1-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "abf10c99-a631-4566-bf51-0ae957ed45f4",
      "children": [
        "6a4af4a1-30c3-42b3-a8d2-00d82c0e5f80"
      ]
    },
    "6a4af4a1-30c3-42b3-a8d2-00d82c0e5f80": {
      "id": "6a4af4a1-30c3-42b3-a8d2-00d82c0e5f80",
      "message": {
        "id": "6a4af4a1-30c3-42b3-a8d2-00d82c0e5f80",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1749001853.499811,
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
          "parent_id": "c2436711-1e49-4348-b85b-f188b7ed6450",
          "request_id": "94a3c826ad87d3f1-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "c2436711-1e49-4348-b85b-f188b7ed6450",
      "children": [
        "30560a43-9c00-4b9d-bbcd-585b43140845"
      ]
    },
    "30560a43-9c00-4b9d-bbcd-585b43140845": {
      "id": "30560a43-9c00-4b9d-bbcd-585b43140845",
      "message": {
        "id": "30560a43-9c00-4b9d-bbcd-585b43140845",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749001879.19944,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "小野泰輔さんです"
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
          "request_id": "94a3c8d87c40d3f1-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "6a4af4a1-30c3-42b3-a8d2-00d82c0e5f80",
      "children": [
        "af4bf18e-91aa-4237-b087-212abf37fce1"
      ]
    },
    "af4bf18e-91aa-4237-b087-212abf37fce1": {
      "id": "af4bf18e-91aa-4237-b087-212abf37fce1",
      "message": {
        "id": "af4bf18e-91aa-4237-b087-212abf37fce1",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749001888.373646,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "承知しました。小野泰輔さん（熊本県の元副知事で、現在は参議院議員）の現在の活動状況について調査を開始します。政策活動、国会での発言、メディア出演、SNSの発信なども含めて最新の情報をお届けします。しばらくお待ちください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "30560a43-9c00-4b9d-bbcd-585b43140845",
          "request_id": "94a3c8d87c40d3f1-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "30560a43-9c00-4b9d-bbcd-585b43140845",
      "children": [
        "06c6c970-02cf-401f-b8bf-46c816201215"
      ]
    },
    "06c6c970-02cf-401f-b8bf-46c816201215": {
      "id": "06c6c970-02cf-401f-b8bf-46c816201215",
      "message": {
        "id": "06c6c970-02cf-401f-b8bf-46c816201215",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749001880.926197,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "json",
          "response_format_name": null,
          "text": "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"承知しました。小野泰輔さん（熊本県の元副知事で、現在は参議院議員）の現在の活動状況について調査を開始します。政策活動、国会での発言、メディア出演、SNSの発信なども含めて最新の情報をお届けします。しばらくお待ちください。\",\n  \"title\": \"小野泰輔参議院議員の現在の活動状況\",\n  \"prompt\": \"熊本県の元副知事で、現在は参議院議員を務める小野泰輔さんの現在の活動状況について調べてください。対象とする内容には、国会での活動、所属委員会、提出・賛同した法案、メディア出演、SNS発信、政党内での役割、地元での活動（熊本県関連）、講演やイベントへの登壇などを含めてください。2024年後半〜2025年現在の最新情報を優先してください。信頼できる情報源（国会公式サイト、政党ページ、公式SNS、新聞社サイトなど）を優先して参照し、内容を分かりやすく整理してください。必要に応じて表を用いても構いません。日本語で回答してください。\"\n}"
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
          "parent_id": "af4bf18e-91aa-4237-b087-212abf37fce1",
          "request_id": "94a3c8d87c40d3f1-KIX",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "af4bf18e-91aa-4237-b087-212abf37fce1",
      "children": [
        "6fbcfee8-1c0e-4e36-afa4-2843905a26a0"
      ]
    },
    "6fbcfee8-1c0e-4e36-afa4-2843905a26a0": {
      "id": "6fbcfee8-1c0e-4e36-afa4-2843905a26a0",
      "message": {
        "id": "6fbcfee8-1c0e-4e36-afa4-2843905a26a0",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1749001888.374002,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "小野泰輔参議院議員の現在の活動状況",
          "async_task_prompt": "熊本県の元副知事で、現在は参議院議員を務める小野泰輔さんの現在の活動状況について調べてください。対象とする内容には、国会での活動、所属委員会、提出・賛同した法案、メディア出演、SNS発信、政党内での役割、地元での活動（熊本県関連）、講演やイベントへの登壇などを含めてください。2024年後半〜2025年現在の最新情報を優先してください。信頼できる情報源（国会公式サイト、政党ページ、公式SNS、新聞社サイトなど）を優先して参照し、内容を分かりやすく整理してください。必要に応じて表を用いても構いません。日本語で回答してください。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "小野泰輔参議院議員の現在の活動状況",
            "completed_with_time": "Research completed in 4m",
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
          "parent_id": "06c6c970-02cf-401f-b8bf-46c816201215",
          "request_id": "94a3c8d87c40d3f1-KIX",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_683fa6a079288191a61bb42de9c70bd0",
          "async_task_conversation_id": "683fa6a0-7f64-8003-976f-57b256c69756",
          "async_task_created_at": "2025-06-04 01:51:28.871640+00:00",
          "deep_research_version": "mini"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "06c6c970-02cf-401f-b8bf-46c816201215",
      "children": [
        "605dfc55-6a8a-4126-83fe-a1ce7fc0c97a"
      ]
    },
    "605dfc55-6a8a-4126-83fe-a1ce7fc0c97a": {
      "id": "605dfc55-6a8a-4126-83fe-a1ce7fc0c97a",
      "message": {
        "id": "605dfc55-6a8a-4126-83fe-a1ce7fc0c97a",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749002112.181101,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# 小野泰輔氏の現在の活動状況\n\n小野泰輔氏は元熊本県副知事（2012～2020年）で、2021年に日本維新の会公認で衆議院議員（東京7区）に初当選しました【24†L41-L45】。しかし2024年10月の衆院選では落選し議席を失ったため、**現時点では国会議員ではなく所属委員会等の活動はありません**【47†L261-L264】。以前の議員在任中には経済産業委員会に関わる活動も報じられましたが（参照: 選挙ドットコムなど）、現在は国政での法案提出や委員会活動等は行っていません。  \n\n## 政党内での動向・立場  \n小野氏は元々自由民主党で活動していた後、2021年に維新に参加して同党の東京7区支部長を務めていました【38†L69-L70】。2024年衆院選後は維新に残留していたものの、**2025年初頭に維新離党を表明し、熊本県を中心に無所属で活動を継続する意向**を示しています【47†L265-L269】。党内での役職は現在特になく、今後も特定政党に属さずに政治活動を行う姿勢です。  \n\n## メディア出演・発言  \n小野氏は衆院落選後もメディアへの発言などで注目されています。2025年1月のRKK熊本放送（TBS系列）の取材では、参院選出馬要請について「現時点では（出馬するかは）全く白紙の状態」と述べ、国会での議論を見守る考えを示しました【17†L26-L32】【17†L37-L40】。3月にはFNN（TKU熊本）取材で、維新に所属したまま参院選に出馬する意思がないことを表明。立民党との政策的隔たりを指摘し、「野党が結集し参院選に臨む動きもみられない現状では出馬する状況にない」と述べています【20†L193-L200】。これらの報道から、小野氏は野党結集や党派を超えた協力を求めており、自身は**無所属の野党統一候補**としての出馬を希望していたことが伺えます【20†L183-L190】【20†L193-L200】。  \n\nまた過去にはテレビ朝日の討論番組『朝まで生テレビ！』やNHK『日曜討論』などへの出演経験もあります（維新公式サイト告知）【29†L67-L74】【34†L67-L75】。SNSでは公式のX（旧Twitter）やInstagramを通じて政治・政策論、支援者向けの情報発信を続けています。たとえば参院選に関する動向や政策提言などを自身のSNSで発信し、支援者と交流しています（本人SNS参照）。 \n\n## 地元熊本での活動・イベント  \n熊本県元副知事として、地元熊本の課題にも引き続き関心を示しています。報道によれば、小野氏は今後熊本を拠点に活動すると語っており【47†L265-L269】、熊本県政や地域振興に関する発言・提言を行う機会を探っています。具体的な講演・イベント登壇情報は直近で報じられていませんが、過去には熊本大学などで学生向け講演を行った実績もあります。今後も地元自治体関係者や市民団体との交流、地域イベントへの参加などを通じ、熊本県政への影響力を保とうとする可能性があります。  \n\n**参考資料:** 参院公式サイトでは小野氏の名は現在議員名簿に記載されていない【17†L26-L32】【47†L261-L269】。上記情報は熊本地元紙・放送（RKK熊本放送、テレビ熊本＝FNN）や日本維新の会公式発表等から得られています【17†L26-L32】【20†L193-L200】【47†L261-L269】。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 78,
              "end_ix": 90,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "自己への執着を捨て期待値を超えていく。打算のない挑戦が人も社会も成長させる。 ＃豊かな未来を創る人 | サストモ - 知る、つながる、はじまる。",
                "url": "https://sdgs.yahoo.co.jp/originals/181.html#:~:text=%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A%201974%E5%B9%B4%E3%80%81%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%94%9F%E3%81%BE%E3%82%8C%E3%80%821999%E5%B9%B4%E3%80%81%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%B3%95%E5%AD%A6%E9%83%A8%E5%8D%92%E6%A5%AD%E3%80%82%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%81%E3%83%A5%E3%82%A2%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%80%81%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E5%85%AC%E8%A8%AD%E7%A7%98%E6%9B%B8%EF%BC%88%E8%87%AA%E7%94%B1%E5%85%9A%E3%83%BB%E8%97%A4%E5%B3%B6%E6%AD%A3%E4%B9%8B%E6%B0%8F%EF%BC%89%E3%80%81%E6%98%8E%E8%B1%8A%E3%83%95%E3%82%A1%E3%82%B7%E3%83%AA%E3%83%86%E3%82%A3%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%92%E7%B5%8C%20%E3%81%A6%E3%80%812008%E5%B9%B4%E3%81%AB%E5%A4%A7%E5%AD%A6%E6%99%82%E4%BB%A3%E3%81%AE%E6%81%A9%E5%B8%AB%E3%81%A7%E3%81%82%E3%82%8B%E8%92%B2%E5%B3%B6%E7%9F%A5%E4%BA%8B%E3%81%AB%E8%AB%8B%E3%82%8F%E3%82%8C%E7%86%8A%E6%9C%AC%E7%9C%8C%E6%94%BF%E7%AD%96%E8%AA%BF%E6%95%B4%E5%8F%82%E4%B8%8E%E3%81%B8%E8%BB%A2%E8%81%B7%E3%80%824%E5%B9%B4%E5%BE%8C%E3%81%AB%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AB%E5%B0%B1%E4%BB%BB%E3%80%82%E3%80%8C%E3%81%8F%E3%81%BE%E3%83%A2%E3%83%B3%E3%80%8D%E3%81%AE%E5%95%86%E6%A8%99%E3%83%95%E3%83%AA%E3%83%BC%E5%8C%96%E3%82%84%E5%B7%9D%E8%BE%BA%E3%83%80%E3%83%A0%E5%BB%BA%E8%A8%AD%E5%95%8F%E9%A1%8C%E3%80%81%E7%9C%8C%E5%8D%97%E6%8C%AF%E8%88%88%E3%80%81%E9%98%BF%E8%98%87%20%E5%9C%B0%E5%9F%9F%E4%B8%96%E7%95%8C%E8%BE%B2%E6%A5%AD%E9%81%BA%E7%94%A3%E7%99%BB%E9%8C%B2%E3%81%AA%E3%81%A9%E3%81%AB%E9%96%A2%E3%82%8F%E3%82%8B%E3%80%822020%E5%B9%B4%E3%81%AB%E4%BB%BB%E6%9C%9F%E7%B5%82%E4%BA%86%E5%BE%8C%E3%80%81%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%9F%A5%E4%BA%8B%E9%81%B8%E6%8C%99%E3%81%AB%E5%87%BA%E9%A6%AC%E3%81%97%E3%80%81%E7%B4%843%E9%80%B1%E9%96%93%E3%81%A7%E7%B4%8461%E4%B8%87%E7%A5%A8%E3%81%AE%E6%94%AF%E6%8C%81%E3%82%92%E5%BE%97%E3%81%9F%E3%80%822021%E5%B9%B410%E6%9C%88%E3%80%81%E7%AC%AC49%E5%9B%9E%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%81%AB%E3%81%A6%20%E5%88%9D%E5%BD%93%E9%81%B8%E3%80%82%E8%B6%A3%E5%91%B3%E3%81%AF%E4%B8%89%E7%B7%9A%EF%BC%88%E7%90%89%E7%90%83%E6%B0%91%E8%AC%A1%EF%BC%89%E3%80%81%E3%83%86%E3%83%8B%E3%82%B9%E3%80%81%E3%82%B4%E3%83%AB%E3%83%95%E3%80%81%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%E3%80%81%E6%97%A5%E6%9C%AC%E9%85%92%E3%80%81%E7%90%89%E7%A3%A8%E7%84%BC%E9%85%8E%E3%80%81%E6%B3%A1%E7%9B%9B%E3%80%82%E4%B8%89%E5%85%90%E3%81%AE%E7%88%B6%E3%80%82",
                "text": "日本維新の会 1974年、東京都生まれ。1999年、東京大学法学部卒業。アクセンチュア株式会社、衆議院議員公設秘書（自由党・藤島正之氏）、明豊ファシリティワークス株式会社を経 て、2008年に大学時代の恩師である蒲島知事に請われ熊本県政策調整参与へ転職。4年後に副知事に就任。「くまモン」の商標フリー化や川辺ダム建設問題、県南振興、阿蘇 地域世界農業遺産登録などに関わる。2020年に任期終了後、東京都知事選挙に出馬し、約3週間で約61万票の支持を得た。2021年10月、第49回衆議院議員選挙にて 初当選。趣味は三線（琉球民謡）、テニス、ゴルフ、ドライブ、日本酒、琉磨焼酎、泡盛。三児の父。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 24,
                  "cited_message_id": "2cff115a-0428-4ceb-a5ba-29cb9c4c626c",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 41,
                  "end_line_num": 45,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 152,
              "end_ix": 166,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
                "text": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 47,
                  "cited_message_id": "cd39471c-81a8-4e28-94f1-68a57c610006",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 261,
                  "end_line_num": 264,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 313,
              "end_ix": 325,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "小野たいすけ（オノタイスケ）｜政治家情報｜選挙ドットコム",
                "url": "https://go2senkyo.com/seijika/180312#:~:text=%E8%82%A9%E6%9B%B8%20%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A%20%E8%A1%86%E8%AD%B0%E9%99%A2%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%AC%AC7%E9%81%B8%E6%8C%99%E5%8C%BA%E6%94%AF%E9%83%A8%E9%95%B7%20%E5%85%9A%E6%B4%BE%20%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A",
                "text": "肩書 日本維新の会 衆議院東京都第7選挙区支部長 党派 日本維新の会",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "cited_message_id": "6ff6eaae-22f2-4f11-b67d-e9659cf565f9",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 69,
                  "end_line_num": 70,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 397,
              "end_ix": 411,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E4%BB%8A%E5%BE%8C%E3%80%81%E7%B6%AD%E6%96%B0%E3%82%92%E9%9B%A2%E5%85%9A%E3%81%97%E3%80%81%E7%86%8A%E6%9C%AC%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%E7%84%A1%E6%89%80%E5%B1%9E%E3%81%A7%E6%B4%BB%E5%8B%95%E3%82%92%E7%B6%9A%E3%81%91%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AF%E3%81%A9%E3%81%93%E3%81%A9%E3%81%93%E3%81%8B%E3%82%89%EF%BC%88%E5%87%BA%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%89%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E8%A9%B1%E3%81%A8%E3%81%8B%E3%80%81%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%AE%E9%A6%96%E9%95%B7%E3%81%A8%20%E3%81%8B%E3%80%81%E3%80%8E%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%A7%E3%82%84%E3%82%89%E3%81%AA%E3%81%84%E3%81%8B%E3%80%8F%E3%81%A8%E3%81%84%E3%81%86%E5%A3%B0%E3%81%AF%E5%BD%93%E7%84%B6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%AF%E3%81%84%E3%82%8B%E3%80%8D%E3%81%A8%E8%A9%B1%E3%81%99%E3%80%82",
                "text": "一方で、小野さんは今後、維新を離党し、熊本を中心に無所属で活動を続けるという。小野さんは「参院選はどこどこから（出ないか）みたいな話とか、あるいはどっかの首長と か、『どっかでやらないか』という声は当然いただいてはいる」と話す。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 47,
                  "cited_message_id": "cd39471c-81a8-4e28-94f1-68a57c610006",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 265,
                  "end_line_num": 269,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 582,
              "end_ix": 594,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "42391aaa-f24e-4c04-a8b6-40ef1a1b9cd3",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 26,
                  "end_line_num": 32,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 594,
              "end_ix": 606,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E9%96%A2%E4%BF%82%E8%80%85%E3%81%AB%E3%82%88%E3%82%8A%E3%81%BE%E3%81%99%E3%81%A8%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%82%92%E7%B5%8C%E9%A8%93%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%81%8C%E9%AB%98%E3%81%84%E3%81%93%E3%81%A8%E3%82%84%E3%80%81%E7%9C%8C%E6%94%BF%E3%81%AE%E5%95%8F%E9%A1%8C%E3%82%92%E7%86%9F%E7%9F%A5%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8B%E3%82%89%E3%80%81%E5%8E%BB%E5%B9%B412%E6%9C%88%E3%80%81%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%20%E3%80%82",
                "text": "関係者によりますと立憲民主党県連は、小野さんが副知事を経験していて知名度が高いことや、県政の問題を熟知していることから、去年12月、出馬を要請したということです 。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "42391aaa-f24e-4c04-a8b6-40ef1a1b9cd3",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 37,
                  "end_line_num": 40,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 711,
              "end_ix": 725,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
                "text": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "75ad7810-64db-41c7-8ff7-8e7cf022a252",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 193,
                  "end_line_num": 200,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 796,
              "end_ix": 810,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%9C%8C%E9%80%A3%E3%81%AF2024%E5%B9%B412%E6%9C%88%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%A7%E5%89%8D%E3%81%AE%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E7%9C%8C%E6%94%BF%E3%81%A8%E5%9B%BD%E6%94%BF%E3%81%AE%E7%B5%8C%E9%A8%93%E3%82%84%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%82%92%E8%A9%95%E4%BE%A1%E3%81%97%E3%80%81%E5%8F%82%E9%99%A2%E9%81%B8%E7%86%8A%E6%9C%AC%E9%81%B8%E6%8C%99%E5%8C%BA%E3%81%B8%E3%81%AE%E5%87%BA%E9%A6%AC%E3%82%92%E6%89%93%E8%A8%BA%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%20%E3%80%82",
                "text": "立憲民主党県連は2024年12月、元熊本県副知事で前の衆議院議員の小野泰輔さんについて、県政と国政の経験や知名度を評価し、参院選熊本選挙区への出馬を打診していた 。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "75ad7810-64db-41c7-8ff7-8e7cf022a252",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 183,
                  "end_line_num": 190,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 810,
              "end_ix": 824,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
                "text": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "75ad7810-64db-41c7-8ff7-8e7cf022a252",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 193,
                  "end_line_num": 200,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 889,
              "end_ix": 901,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖 朝まで生テレビ！ 〗小野たいすけ 衆議院議員　番組生出演のお知らせ｜ニュース｜活動情報｜日本維新の会",
                "url": "https://o-ishin.jp/news/2023/07/01/14785.html#:~:text=%E3%80%96%20%E6%9C%9D%E3%81%BE%E3%81%A7%E7%94%9F%E3%83%86%E3%83%AC%E3%83%93%EF%BC%81%20%E3%80%97%E5%B0%8F%E9%87%8E%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%20%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%20%E7%95%AA%E7%B5%84%E7%94%9F%E5%87%BA%E6%BC%94%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B",
                "text": "〖 朝まで生テレビ！ 〗小野たいすけ 衆議院議員 番組生出演のお知らせ",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "cited_message_id": "92a4c915-1405-4d85-8861-e5fe00998df2",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 67,
                  "end_line_num": 74,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 901,
              "end_ix": 913,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖 日曜討論 〗小野たいすけ 衆議院議員　番組生出演のお知らせ｜ニュース｜活動情報｜日本維新の会",
                "url": "https://o-ishin.jp/news/2023/06/25/14798.html#:~:text=%E6%97%A5%20%E6%99%82%EF%BC%9A%E4%BB%A4%E5%92%8C5%E5%B9%B46%E6%9C%8825%E6%97%A5%28%E6%97%A5%29%2009%3A00%EF%BD%9E10%3A00%20%E6%94%BE%E9%80%81%E5%B1%80%EF%BC%9ANHK%20%E7%95%AA%E7%B5%84%E5%90%8D%EF%BC%9A%E6%97%A5%E6%9B%9C%E8%A8%8E%E8%AB%96https%3A%2F%2Fwww,%E2%97%8F%E3%83%9E%E3%82%A4%E3%83%8A%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E2%97%8F%E9%80%9A%E5%B8%B8%E5%9B%BD%E4%BC%9A%20%E5%AF%A9%E8%AD%B0%E3%82%92%E3%81%A9%E3%81%86%E7%B7%8F%E6%8B%AC%E3%81%99%E3%82%8B%E3%81%8B%20%E2%97%8F%E3%80%8C%E9%AA%A8%E5%A4%AA%E3%81%AE%E6%96%B9%E9%87%9D%E3%80%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E3%81%AA%E3%81%A9",
                "text": "日 時：令和5年6月25日(日) 09:00～10:00 放送局：NHK 番組名：日曜討論https://www.nhk.jp/p/touron/ts/GG149Z2M64/ 主な内容 ●マイナンバーカードについて ●通常国会 審議をどう総括するか ●「骨太の方針」について など",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 34,
                  "cited_message_id": "f4a3b01b-6195-41e1-a330-92f0a731d940",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 67,
                  "end_line_num": 75,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1110,
              "end_ix": 1124,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E4%BB%8A%E5%BE%8C%E3%80%81%E7%B6%AD%E6%96%B0%E3%82%92%E9%9B%A2%E5%85%9A%E3%81%97%E3%80%81%E7%86%8A%E6%9C%AC%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%E7%84%A1%E6%89%80%E5%B1%9E%E3%81%A7%E6%B4%BB%E5%8B%95%E3%82%92%E7%B6%9A%E3%81%91%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AF%E3%81%A9%E3%81%93%E3%81%A9%E3%81%93%E3%81%8B%E3%82%89%EF%BC%88%E5%87%BA%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%89%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E8%A9%B1%E3%81%A8%E3%81%8B%E3%80%81%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%AE%E9%A6%96%E9%95%B7%E3%81%A8%20%E3%81%8B%E3%80%81%E3%80%8E%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%A7%E3%82%84%E3%82%89%E3%81%AA%E3%81%84%E3%81%8B%E3%80%8F%E3%81%A8%E3%81%84%E3%81%86%E5%A3%B0%E3%81%AF%E5%BD%93%E7%84%B6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%AF%E3%81%84%E3%82%8B%E3%80%8D%E3%81%A8%E8%A9%B1%E3%81%99%E3%80%82",
                "text": "一方で、小野さんは今後、維新を離党し、熊本を中心に無所属で活動を続けるという。小野さんは「参院選はどこどこから（出ないか）みたいな話とか、あるいはどっかの首長と か、『どっかでやらないか』という声は当然いただいてはいる」と話す。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 47,
                  "cited_message_id": "cd39471c-81a8-4e28-94f1-68a57c610006",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 265,
                  "end_line_num": 269,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1321,
              "end_ix": 1333,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "42391aaa-f24e-4c04-a8b6-40ef1a1b9cd3",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 26,
                  "end_line_num": 32,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1333,
              "end_ix": 1347,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
                "text": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 47,
                  "cited_message_id": "cd39471c-81a8-4e28-94f1-68a57c610006",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 261,
                  "end_line_num": 269,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1401,
              "end_ix": 1413,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
                "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
                "text": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "42391aaa-f24e-4c04-a8b6-40ef1a1b9cd3",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 26,
                  "end_line_num": 32,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1413,
              "end_ix": 1427,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
                "text": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "cited_message_id": "75ad7810-64db-41c7-8ff7-8e7cf022a252",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 193,
                  "end_line_num": 200,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1427,
              "end_ix": 1441,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
                "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
                "text": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 47,
                  "cited_message_id": "cd39471c-81a8-4e28-94f1-68a57c610006",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 261,
                  "end_line_num": 269,
                  "connector_source": null
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【24†L41-L45】",
              "start_idx": 78,
              "end_idx": 90,
              "alt": null,
              "type": "webpage_extended",
              "title": "自己への執着を捨て期待値を超えていく。打算のない挑戦が人も社会も成長させる。 ＃豊かな未来を創る人 | サストモ - 知る、つながる、はじまる。",
              "url": "https://sdgs.yahoo.co.jp/originals/181.html#:~:text=%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A%201974%E5%B9%B4%E3%80%81%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%94%9F%E3%81%BE%E3%82%8C%E3%80%821999%E5%B9%B4%E3%80%81%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%B3%95%E5%AD%A6%E9%83%A8%E5%8D%92%E6%A5%AD%E3%80%82%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%81%E3%83%A5%E3%82%A2%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%80%81%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E5%85%AC%E8%A8%AD%E7%A7%98%E6%9B%B8%EF%BC%88%E8%87%AA%E7%94%B1%E5%85%9A%E3%83%BB%E8%97%A4%E5%B3%B6%E6%AD%A3%E4%B9%8B%E6%B0%8F%EF%BC%89%E3%80%81%E6%98%8E%E8%B1%8A%E3%83%95%E3%82%A1%E3%82%B7%E3%83%AA%E3%83%86%E3%82%A3%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%92%E7%B5%8C%20%E3%81%A6%E3%80%812008%E5%B9%B4%E3%81%AB%E5%A4%A7%E5%AD%A6%E6%99%82%E4%BB%A3%E3%81%AE%E6%81%A9%E5%B8%AB%E3%81%A7%E3%81%82%E3%82%8B%E8%92%B2%E5%B3%B6%E7%9F%A5%E4%BA%8B%E3%81%AB%E8%AB%8B%E3%82%8F%E3%82%8C%E7%86%8A%E6%9C%AC%E7%9C%8C%E6%94%BF%E7%AD%96%E8%AA%BF%E6%95%B4%E5%8F%82%E4%B8%8E%E3%81%B8%E8%BB%A2%E8%81%B7%E3%80%824%E5%B9%B4%E5%BE%8C%E3%81%AB%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AB%E5%B0%B1%E4%BB%BB%E3%80%82%E3%80%8C%E3%81%8F%E3%81%BE%E3%83%A2%E3%83%B3%E3%80%8D%E3%81%AE%E5%95%86%E6%A8%99%E3%83%95%E3%83%AA%E3%83%BC%E5%8C%96%E3%82%84%E5%B7%9D%E8%BE%BA%E3%83%80%E3%83%A0%E5%BB%BA%E8%A8%AD%E5%95%8F%E9%A1%8C%E3%80%81%E7%9C%8C%E5%8D%97%E6%8C%AF%E8%88%88%E3%80%81%E9%98%BF%E8%98%87%20%E5%9C%B0%E5%9F%9F%E4%B8%96%E7%95%8C%E8%BE%B2%E6%A5%AD%E9%81%BA%E7%94%A3%E7%99%BB%E9%8C%B2%E3%81%AA%E3%81%A9%E3%81%AB%E9%96%A2%E3%82%8F%E3%82%8B%E3%80%822020%E5%B9%B4%E3%81%AB%E4%BB%BB%E6%9C%9F%E7%B5%82%E4%BA%86%E5%BE%8C%E3%80%81%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%9F%A5%E4%BA%8B%E9%81%B8%E6%8C%99%E3%81%AB%E5%87%BA%E9%A6%AC%E3%81%97%E3%80%81%E7%B4%843%E9%80%B1%E9%96%93%E3%81%A7%E7%B4%8461%E4%B8%87%E7%A5%A8%E3%81%AE%E6%94%AF%E6%8C%81%E3%82%92%E5%BE%97%E3%81%9F%E3%80%822021%E5%B9%B410%E6%9C%88%E3%80%81%E7%AC%AC49%E5%9B%9E%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%81%AB%E3%81%A6%20%E5%88%9D%E5%BD%93%E9%81%B8%E3%80%82%E8%B6%A3%E5%91%B3%E3%81%AF%E4%B8%89%E7%B7%9A%EF%BC%88%E7%90%89%E7%90%83%E6%B0%91%E8%AC%A1%EF%BC%89%E3%80%81%E3%83%86%E3%83%8B%E3%82%B9%E3%80%81%E3%82%B4%E3%83%AB%E3%83%95%E3%80%81%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%E3%80%81%E6%97%A5%E6%9C%AC%E9%85%92%E3%80%81%E7%90%89%E7%A3%A8%E7%84%BC%E9%85%8E%E3%80%81%E6%B3%A1%E7%9B%9B%E3%80%82%E4%B8%89%E5%85%90%E3%81%AE%E7%88%B6%E3%80%82",
              "pub_date": null,
              "snippet": "日本維新の会 1974年、東京都生まれ。1999年、東京大学法学部卒業。アクセンチュア株式会社、衆議院議員公設秘書（自由党・藤島正之氏）、明豊ファシリティワークス株式会社を経 て、2008年に大学時代の恩師である蒲島知事に請われ熊本県政策調整参与へ転職。4年後に副知事に就任。「くまモン」の商標フリー化や川辺ダム建設問題、県南振興、阿蘇 地域世界農業遺産登録などに関わる。2020年に任期終了後、東京都知事選挙に出馬し、約3週間で約61万票の支持を得た。2021年10月、第49回衆議院議員選挙にて 初当選。趣味は三線（琉球民謡）、テニス、ゴルフ、ドライブ、日本酒、琉磨焼酎、泡盛。三児の父。",
              "attribution": "sdgs.yahoo.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【47†L261-L264】",
              "start_idx": 152,
              "end_idx": 166,
              "alt": null,
              "type": "webpage_extended",
              "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【38†L69-L70】",
              "start_idx": 313,
              "end_idx": 325,
              "alt": null,
              "type": "webpage_extended",
              "title": "小野たいすけ（オノタイスケ）｜政治家情報｜選挙ドットコム",
              "url": "https://go2senkyo.com/seijika/180312#:~:text=%E8%82%A9%E6%9B%B8%20%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A%20%E8%A1%86%E8%AD%B0%E9%99%A2%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%AC%AC7%E9%81%B8%E6%8C%99%E5%8C%BA%E6%94%AF%E9%83%A8%E9%95%B7%20%E5%85%9A%E6%B4%BE%20%E6%97%A5%E6%9C%AC%E7%B6%AD%E6%96%B0%E3%81%AE%E4%BC%9A",
              "pub_date": null,
              "snippet": "肩書 日本維新の会 衆議院東京都第7選挙区支部長 党派 日本維新の会",
              "attribution": "go2senkyo.com",
              "icon_type": null
            },
            {
              "matched_text": "【47†L265-L269】",
              "start_idx": 397,
              "end_idx": 411,
              "alt": null,
              "type": "webpage_extended",
              "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E4%BB%8A%E5%BE%8C%E3%80%81%E7%B6%AD%E6%96%B0%E3%82%92%E9%9B%A2%E5%85%9A%E3%81%97%E3%80%81%E7%86%8A%E6%9C%AC%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%E7%84%A1%E6%89%80%E5%B1%9E%E3%81%A7%E6%B4%BB%E5%8B%95%E3%82%92%E7%B6%9A%E3%81%91%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AF%E3%81%A9%E3%81%93%E3%81%A9%E3%81%93%E3%81%8B%E3%82%89%EF%BC%88%E5%87%BA%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%89%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E8%A9%B1%E3%81%A8%E3%81%8B%E3%80%81%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%AE%E9%A6%96%E9%95%B7%E3%81%A8%20%E3%81%8B%E3%80%81%E3%80%8E%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%A7%E3%82%84%E3%82%89%E3%81%AA%E3%81%84%E3%81%8B%E3%80%8F%E3%81%A8%E3%81%84%E3%81%86%E5%A3%B0%E3%81%AF%E5%BD%93%E7%84%B6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%AF%E3%81%84%E3%82%8B%E3%80%8D%E3%81%A8%E8%A9%B1%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "一方で、小野さんは今後、維新を離党し、熊本を中心に無所属で活動を続けるという。小野さんは「参院選はどこどこから（出ないか）みたいな話とか、あるいはどっかの首長と か、『どっかでやらないか』という声は当然いただいてはいる」と話す。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L26-L32】",
              "start_idx": 582,
              "end_idx": 594,
              "alt": null,
              "type": "webpage_extended",
              "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L37-L40】",
              "start_idx": 594,
              "end_idx": 606,
              "alt": null,
              "type": "webpage_extended",
              "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E9%96%A2%E4%BF%82%E8%80%85%E3%81%AB%E3%82%88%E3%82%8A%E3%81%BE%E3%81%99%E3%81%A8%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%82%92%E7%B5%8C%E9%A8%93%E3%81%97%E3%81%A6%E3%81%84%E3%81%A6%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%81%8C%E9%AB%98%E3%81%84%E3%81%93%E3%81%A8%E3%82%84%E3%80%81%E7%9C%8C%E6%94%BF%E3%81%AE%E5%95%8F%E9%A1%8C%E3%82%92%E7%86%9F%E7%9F%A5%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8B%E3%82%89%E3%80%81%E5%8E%BB%E5%B9%B412%E6%9C%88%E3%80%81%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%20%E3%80%82",
              "pub_date": null,
              "snippet": "関係者によりますと立憲民主党県連は、小野さんが副知事を経験していて知名度が高いことや、県政の問題を熟知していることから、去年12月、出馬を要請したということです 。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L193-L200】",
              "start_idx": 711,
              "end_idx": 725,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
              "pub_date": null,
              "snippet": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L183-L190】",
              "start_idx": 796,
              "end_idx": 810,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%9C%8C%E9%80%A3%E3%81%AF2024%E5%B9%B412%E6%9C%88%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%A7%E5%89%8D%E3%81%AE%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E7%9C%8C%E6%94%BF%E3%81%A8%E5%9B%BD%E6%94%BF%E3%81%AE%E7%B5%8C%E9%A8%93%E3%82%84%E7%9F%A5%E5%90%8D%E5%BA%A6%E3%82%92%E8%A9%95%E4%BE%A1%E3%81%97%E3%80%81%E5%8F%82%E9%99%A2%E9%81%B8%E7%86%8A%E6%9C%AC%E9%81%B8%E6%8C%99%E5%8C%BA%E3%81%B8%E3%81%AE%E5%87%BA%E9%A6%AC%E3%82%92%E6%89%93%E8%A8%BA%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%20%E3%80%82",
              "pub_date": null,
              "snippet": "立憲民主党県連は2024年12月、元熊本県副知事で前の衆議院議員の小野泰輔さんについて、県政と国政の経験や知名度を評価し、参院選熊本選挙区への出馬を打診していた 。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L193-L200】",
              "start_idx": 810,
              "end_idx": 824,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
              "pub_date": null,
              "snippet": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L67-L74】",
              "start_idx": 889,
              "end_idx": 901,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖 朝まで生テレビ！ 〗小野たいすけ 衆議院議員　番組生出演のお知らせ｜ニュース｜活動情報｜日本維新の会",
              "url": "https://o-ishin.jp/news/2023/07/01/14785.html#:~:text=%E3%80%96%20%E6%9C%9D%E3%81%BE%E3%81%A7%E7%94%9F%E3%83%86%E3%83%AC%E3%83%93%EF%BC%81%20%E3%80%97%E5%B0%8F%E9%87%8E%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%20%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%20%E7%95%AA%E7%B5%84%E7%94%9F%E5%87%BA%E6%BC%94%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B",
              "pub_date": null,
              "snippet": "〖 朝まで生テレビ！ 〗小野たいすけ 衆議院議員 番組生出演のお知らせ",
              "attribution": "o-ishin.jp",
              "icon_type": null
            },
            {
              "matched_text": "【34†L67-L75】",
              "start_idx": 901,
              "end_idx": 913,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖 日曜討論 〗小野たいすけ 衆議院議員　番組生出演のお知らせ｜ニュース｜活動情報｜日本維新の会",
              "url": "https://o-ishin.jp/news/2023/06/25/14798.html#:~:text=%E6%97%A5%20%E6%99%82%EF%BC%9A%E4%BB%A4%E5%92%8C5%E5%B9%B46%E6%9C%8825%E6%97%A5%28%E6%97%A5%29%2009%3A00%EF%BD%9E10%3A00%20%E6%94%BE%E9%80%81%E5%B1%80%EF%BC%9ANHK%20%E7%95%AA%E7%B5%84%E5%90%8D%EF%BC%9A%E6%97%A5%E6%9B%9C%E8%A8%8E%E8%AB%96https%3A%2F%2Fwww,%E2%97%8F%E3%83%9E%E3%82%A4%E3%83%8A%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E2%97%8F%E9%80%9A%E5%B8%B8%E5%9B%BD%E4%BC%9A%20%E5%AF%A9%E8%AD%B0%E3%82%92%E3%81%A9%E3%81%86%E7%B7%8F%E6%8B%AC%E3%81%99%E3%82%8B%E3%81%8B%20%E2%97%8F%E3%80%8C%E9%AA%A8%E5%A4%AA%E3%81%AE%E6%96%B9%E9%87%9D%E3%80%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E3%81%AA%E3%81%A9",
              "pub_date": null,
              "snippet": "日 時：令和5年6月25日(日) 09:00～10:00 放送局：NHK 番組名：日曜討論https://www.nhk.jp/p/touron/ts/GG149Z2M64/ 主な内容 ●マイナンバーカードについて ●通常国会 審議をどう総括するか ●「骨太の方針」について など",
              "attribution": "o-ishin.jp",
              "icon_type": null
            },
            {
              "matched_text": "【47†L265-L269】",
              "start_idx": 1110,
              "end_idx": 1124,
              "alt": null,
              "type": "webpage_extended",
              "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E4%B8%80%E6%96%B9%E3%81%A7%E3%80%81%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E4%BB%8A%E5%BE%8C%E3%80%81%E7%B6%AD%E6%96%B0%E3%82%92%E9%9B%A2%E5%85%9A%E3%81%97%E3%80%81%E7%86%8A%E6%9C%AC%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%E7%84%A1%E6%89%80%E5%B1%9E%E3%81%A7%E6%B4%BB%E5%8B%95%E3%82%92%E7%B6%9A%E3%81%91%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AF%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AF%E3%81%A9%E3%81%93%E3%81%A9%E3%81%93%E3%81%8B%E3%82%89%EF%BC%88%E5%87%BA%E3%81%AA%E3%81%84%E3%81%8B%EF%BC%89%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E8%A9%B1%E3%81%A8%E3%81%8B%E3%80%81%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%AE%E9%A6%96%E9%95%B7%E3%81%A8%20%E3%81%8B%E3%80%81%E3%80%8E%E3%81%A9%E3%81%A3%E3%81%8B%E3%81%A7%E3%82%84%E3%82%89%E3%81%AA%E3%81%84%E3%81%8B%E3%80%8F%E3%81%A8%E3%81%84%E3%81%86%E5%A3%B0%E3%81%AF%E5%BD%93%E7%84%B6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%AF%E3%81%84%E3%82%8B%E3%80%8D%E3%81%A8%E8%A9%B1%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "一方で、小野さんは今後、維新を離党し、熊本を中心に無所属で活動を続けるという。小野さんは「参院選はどこどこから（出ないか）みたいな話とか、あるいはどっかの首長と か、『どっかでやらないか』という声は当然いただいてはいる」と話す。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L26-L32】",
              "start_idx": 1321,
              "end_idx": 1333,
              "alt": null,
              "type": "webpage_extended",
              "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【47†L261-L269】",
              "start_idx": 1333,
              "end_idx": 1347,
              "alt": null,
              "type": "webpage_extended",
              "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L26-L32】",
              "start_idx": 1401,
              "end_idx": 1413,
              "alt": null,
              "type": "webpage_extended",
              "title": "立憲熊本県連 小野泰輔元副知事に参院選出馬を要請　今後について「現時点では全く白紙」 | 熊本のニュース｜RKK NEWS｜RKK熊本放送 (1ページ)",
              "url": "https://newsdig.tbs.co.jp/articles/rkk/1673482?display=1#:~:text=%E4%BB%8A%E5%B9%B4%EF%BC%882025%E5%B9%B4%EF%BC%89%E3%81%AE%E5%A4%8F%E3%81%AB%E8%A1%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8F%82%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E3%82%92%E5%B7%A1%E3%82%8A%E3%80%81%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%AF%E3%80%81%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%EF%BC%88%E3%81%8A%E3%81%AE%20%E3%81%9F%E3%81%84%E3%81%99%E3%81%91%EF%BC%89%E3%81%95%E3%82%93%EF%BC%8850%EF%BC%89%E3%81%AB%E5%87%BA%E9%A6%AC%E3%82%92%E8%A6%81%E8%AB%8B%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E9%96%A2%E4%BF%82%E8%80%85%E3%81%B8%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%A7%E5%88%86%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "今年（2025年）の夏に行われる参議院議員選挙を巡り、立憲民主党熊本県連は、元熊本県副知事の小野泰輔（おの たいすけ）さん（50）に出馬を要請したことが関係者への取材で分かりました。",
              "attribution": "newsdig.tbs.co.jp",
              "icon_type": null
            },
            {
              "matched_text": "【20†L193-L200】",
              "start_idx": 1413,
              "end_idx": 1427,
              "alt": null,
              "type": "webpage_extended",
              "title": "〖2025参院選〗立憲民主党熊本県連が元熊本県副知事の小野泰輔さんの擁立見送る　小野さんは「野党結集する動き見られない」｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/848457#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%BD%93%E9%81%B8%E5%BE%8C%E3%81%AE%E4%BC%9A%E6%B4%BE%E3%81%AF%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E3%81%B8%E3%81%AE%E6%89%80%E5%B1%9E%E3%82%92%E6%B1%82%E3%82%81%E3%81%9F%E7%AB%8B%E6%86%B2%E6%B0%91%E4%B8%BB%E5%85%9A%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%80%A3%E3%81%A8%E6%8A%98%E3%82%8A%E5%90%88%E3%81%84%E3%81%8C%E3%81%A4%E3%81%8B%E3%81%9A%E3%80%81%E7%9C%8C%E9%80%A3%E3%81%8C%E6%93%81%E7%AB%8B%E8%A6%8B%E9%80%81%E3%82%8A%E3%82%92%E5%B0%8F%E9%87%8E%E3%81%95%E3%82%93%E3%81%AB%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%80%82%E9%8E%8C%E7%94%B0%E8%81%A1%E7%9C%8C%E9%80%A3%E4%BB%A3%E8%A1%A8%E3%81%AFTKU%E3%81%AE%E5%8F%96%E6%9D%90%E3%81%AB%E3%80%8C%20%E9%87%8E%E5%85%9A%E3%81%8C%E4%B8%80%E4%B8%B8%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E6%8E%A8%E3%81%9B%E3%82%8B%E5%80%99%E8%A3%9C%E8%80%85%E3%81%AE%E6%93%81%E7%AB%8B%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%81%84%E3%80%8D%E3%81%A8%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%80%82",
              "pub_date": null,
              "snippet": "しかし、当選後の会派は立憲民主党への所属を求めた立憲民主党熊本県連と折り合いがつかず、県連が擁立見送りを小野さんに伝えたという。鎌田聡県連代表はTKUの取材に「 野党が一丸となって推せる候補者の擁立を目指したい」とコメント。",
              "attribution": "fnn.jp",
              "icon_type": null
            },
            {
              "matched_text": "【47†L261-L269】",
              "start_idx": 1427,
              "end_idx": 1441,
              "alt": null,
              "type": "webpage_extended",
              "title": "選挙報道でSNSに見劣りするオールドメディア「選挙が意味のない『お祭り』になる危惧」2024年の県知事選と衆院選に2025年夏の参院選〖熊本発〗｜FNNプライムオンライン",
              "url": "https://www.fnn.jp/articles/-/802027?display=full#:~:text=%E8%A1%86%E9%99%A2%E9%81%B8%E3%81%A7%E3%80%81%E7%B6%AD%E6%96%B0%E3%81%AE%E5%89%8D%E8%81%B7%E3%81%A8%E3%81%97%E3%81%A6%E6%9D%B1%E4%BA%AC7%E5%8C%BA%E3%81%8B%E3%82%89%E5%87%BA%E9%A6%AC%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E7%AB%8B%E6%86%B2%E3%81%A8%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E4%B8%80%E6%9C%AC%E5%8C%96%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%9A%E8%AD%B0%E5%B8%AD%E3%82%92%E5%A4%B1%E3%81%A3%E3%81%9F%E5%85%83%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%89%AF%E7%9F%A5%E4%BA%8B%E3%81%AE%E5%B0%8F%E9%87%8E%E6%B3%B0%E8%BC%94%E3%81%95%E3%82%93%E3%81%AF%E3%80%81%E3%81%93%E3%81%86%E3%81%97%E3%81%9F%E5%8B%95%E3%81%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8C%E5%8F%82%E9%99%A2%E9%81%B8%E3%81%AE1%E4%BA%BA%E5%8C%BA%EF%BC%88%20%E3%81%AE%E5%80%99%E8%A3%9C%E8%80%85%E3%82%92%EF%BC%89%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E8%AA%BF%E6%95%B4%E3%81%99%E3%82%8B%E3%81%8B%E3%81%8C%E4%B8%80%E7%95%AA%E5%A4%A7%E4%BA%8B%E3%80%82%E6%9C%AC%E6%B0%97%E3%81%A7%EF%BC%88%E4%B8%8E%E5%85%9A%E3%81%AE%EF%BC%89%E9%81%8E%E5%8D%8A%E6%95%B0%E5%89%B2%E3%82%8C%E3%82%92%E5%8F%82%E8%AD%B0%E9%99%A2%E3%81%A7%E3%82%82%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B%E3%82%93%E3%81%A0%E3%81%A8%E3%81%84%E3%81%86%E3%81%9D%E3%81%86%E3%81%84%E3%81%86%E6%9C%AC%E6%B0%97%E5%BA%A6%E5%90%88%E3%81%84%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%9B%BD%E6%B0%91%E3%81%AB%E8%A6%8B%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%86%E3%80%8D%E3%81%A8%E8%BF%B0%E3%81%B9%20%E3%81%9F%E3%80%82",
              "pub_date": null,
              "snippet": "衆院選で、維新の前職として東京7区から出馬したが、立憲との候補者一本化ができず議席を失った元熊本県副知事の小野泰輔さんは、こうした動きについて「参院選の1人区（ の候補者を）どうやって調整するかが一番大事。本気で（与党の）過半数割れを参議院でも実現するんだというそういう本気度合いをちゃんと国民に見せることだと思う」と述べ た。",
              "attribution": "fnn.jp",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_683fa6a079288191a61bb42de9c70bd0",
          "async_task_title": "小野泰輔参議院議員の現在の活動状況"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "6fbcfee8-1c0e-4e36-afa4-2843905a26a0",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "605dfc55-6a8a-4126-83fe-a1ce7fc0c97a",
  "plugin_ids": null,
  "conversation_id": "683fa67c-0c0c-8003-98fa-ae5d5b04240b",
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
  "id": "683fa67c-0c0c-8003-98fa-ae5d5b04240b"
}
```