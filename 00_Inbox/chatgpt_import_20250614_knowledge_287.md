---
id: inbox_chatgpt_20250614_03dc2920
type: note
source: chatgpt
source_id: 03dc2920-3fe4-4fa4-8066-0e4fd3581e1c
source_group: E
group_classification: 情報整理・ナレッジ
created: 2025-06-14
imported: 2026-05-05
status: inbox
tags: [chatgpt, inbox, group-E, imported]
---

## 📋 要約

- **元タイトル:** ドローンRTH設定方法
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 10%
- **メッセージ数:** 18
- **作成日時:** 2025-06-14 21:40:42
- **推奨移行先:** 03_Knowledge または 00_Inbox
- **タグ候補:** E

## 📝 原文コンテンツ

> ChatGPT との会話ログ（フルコンテンツ）

詳細は下記の **会話履歴** セクションを参照してください。

---

## 💬 会話履歴

*このセクションには ChatGPT エクスポートの全内容が保存されています*

### 構造情報
- Mapping keys: 19
- Valid messages: 18

---

```json
{
  "title": "ドローンRTH設定方法",
  "create_time": 1749937242.404621,
  "update_time": 1749937310.972221,
  "mapping": {
    "03dc2920-3fe4-4fa4-8066-0e4fd3581e1c": {
      "id": "03dc2920-3fe4-4fa4-8066-0e4fd3581e1c",
      "message": null,
      "parent": null,
      "children": [
        "4144af0c-f9d3-439f-a90b-e7c7179bd796"
      ]
    },
    "4144af0c-f9d3-439f-a90b-e7c7179bd796": {
      "id": "4144af0c-f9d3-439f-a90b-e7c7179bd796",
      "message": {
        "id": "4144af0c-f9d3-439f-a90b-e7c7179bd796",
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
      "parent": "03dc2920-3fe4-4fa4-8066-0e4fd3581e1c",
      "children": [
        "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646"
      ]
    },
    "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646": {
      "id": "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646",
      "message": {
        "id": "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937241.8982592,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "ドローンchicoryを自動帰還させるには？"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "94fcfcd2b9a2d004-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "4144af0c-f9d3-439f-a90b-e7c7179bd796",
      "children": [
        "8cce408c-adfc-46d2-adf0-8a6a26df4e1d"
      ]
    },
    "8cce408c-adfc-46d2-adf0-8a6a26df4e1d": {
      "id": "8cce408c-adfc-46d2-adf0-8a6a26df4e1d",
      "message": {
        "id": "8cce408c-adfc-46d2-adf0-8a6a26df4e1d",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937253.800409,
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
          "parent_id": "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646",
          "request_id": "94fcfcd2b9a2d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8500a0eb-cb9e-4807-94a4-1c1ac5d6b646",
      "children": [
        "05145e30-12e4-4627-bec8-382bd474058f"
      ]
    },
    "05145e30-12e4-4627-bec8-382bd474058f": {
      "id": "05145e30-12e4-4627-bec8-382bd474058f",
      "message": {
        "id": "05145e30-12e4-4627-bec8-382bd474058f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937242.677327,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "「ドローン chicory（チコリー）」を自動帰還（Return to Home、以下RTH）させるには、以下の手順が一般的です。ただし、「chicory」という製品が特定のブランド名であるかどうかが不明なため、ここでは一般的なドローンのRTH機能に基づいて説明し、必要があれば特定製品に合わせて調整します。\n\n---\n\n## ✅ 自動帰還（RTH）をさせる基本手順\n\n### 1. **GPSを有効にする**\n- 自動帰還にはGPSの位置情報が必須です。\n- 離陸前に、ドローンと送信機の両方がGPSを捕捉していることを確認してください（多くのドローンではLEDやアプリにGPS状態が表示されます）。\n\n### 2. **ホームポイントの記録**\n- 離陸時に現在位置（通常は送信機の位置）を「ホームポイント」として記録します。\n- 一部のドローンは、アプリ上で明示的に「ホームポイントを設定」する操作が必要です。\n\n### 3. **RTHボタンを使用**\n- 送信機やスマホアプリに「RTHボタン（Home Return）」がある場合、それを押すことで自動帰還が開始されます。\n\n### 4. **バッテリー残量による自動帰還**\n- 多くのドローンでは、バッテリーが一定以下になると自動でRTHを実行します。\n\n### 5. **通信途絶時の自動帰還**\n- 送信機との通信が一定時間以上切れると、自動的にホームポイントに戻る設定になっている機種もあります。\n\n---\n\n## 📱 アプリ連携の場合（例：DJI Fly / Holy Stoneアプリ等）\n- アプリを通じて、帰還高度（Return Height）を設定しておくことが重要です。障害物（建物や木など）にぶつからないよう、十分な高さに設定してください。\n- 「Return to Home」をアプリ上のボタンでタップして起動。\n\n---\n\n## 🚨 注意点\n- **屋内やGPSが不安定な場所ではRTHは機能しない**場合があります。\n- **風が強い日やバッテリーが劣化している場合**、途中でバッテリー切れになることもあるため、早めのRTH操作が推奨されます。\n- **ファームウェアが最新かどうか**も確認してください。古いとRTHの不具合が起こる可能性があります。\n\n---\n\n## 📌「Chicory」が特定ブランド名の場合\nもし「Chicory」という名前が特定のドローン製品名（たとえば、中国製のトイ・ドローンなど）であれば、**取扱説明書のRTH操作手順**をご確認いただくのが確実です。製品名・モデル名がわかれば、さらに具体的な手順もご案内できます。\n\n---\n\n必要であれば、あなたの「ドローン chicory」の画像やスペック（メーカー名、モデル番号）を教えていただければ、さらに正確な帰還方法をご案内できます。"
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
          "parent_id": "8cce408c-adfc-46d2-adf0-8a6a26df4e1d",
          "request_id": "94fcfcd2b9a2d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8cce408c-adfc-46d2-adf0-8a6a26df4e1d",
      "children": [
        "7cc67a06-035a-445b-9953-4a3c7f29026e"
      ]
    },
    "7cc67a06-035a-445b-9953-4a3c7f29026e": {
      "id": "7cc67a06-035a-445b-9953-4a3c7f29026e",
      "message": {
        "id": "7cc67a06-035a-445b-9953-4a3c7f29026e",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937268.394402,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "ドローンchubory を自動帰還させるには？"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "94fcfd77ee1dd004-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "05145e30-12e4-4627-bec8-382bd474058f",
      "children": [
        "de23b45d-3755-4812-a97e-96f5ef500e8f"
      ]
    },
    "de23b45d-3755-4812-a97e-96f5ef500e8f": {
      "id": "de23b45d-3755-4812-a97e-96f5ef500e8f",
      "message": {
        "id": "de23b45d-3755-4812-a97e-96f5ef500e8f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937268.786014,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "search(\"\\u30c9\\u30ed\\u30fc\\u30f3chubory \\u3092\\u81ea\\u52d5\\u5e30\\u9084\\u3055\\u305b\\u308b\\u306b\\u306f\\uff1f\")"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "finish_details": {
            "type": "stop"
          },
          "is_complete": true,
          "sonic_classification_result": {
            "latency_ms": 37.84112600260414,
            "search_prob": 0.47505924650426135,
            "force_search_threshold": 0.54,
            "classifier_config_name": "sonic_force_pg_switcher_renderer_config"
          },
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "7cc67a06-035a-445b-9953-4a3c7f29026e",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web",
        "channel": null
      },
      "parent": "7cc67a06-035a-445b-9953-4a3c7f29026e",
      "children": [
        "81d90a6d-e878-4d99-86d2-cce719cb41c9"
      ]
    },
    "81d90a6d-e878-4d99-86d2-cce719cb41c9": {
      "id": "81d90a6d-e878-4d99-86d2-cce719cb41c9",
      "message": {
        "id": "81d90a6d-e878-4d99-86d2-cce719cb41c9",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937280.657666,
        "update_time": null,
        "content": {
          "content_type": "thoughts",
          "thoughts": [],
          "source_analysis_msg_id": "f4900ccf-82d2-4192-b389-ebaec92542d0"
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
          "parent_id": "de23b45d-3755-4812-a97e-96f5ef500e8f",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "de23b45d-3755-4812-a97e-96f5ef500e8f",
      "children": [
        "6829692c-4cd1-4e19-a190-7fa240597220"
      ]
    },
    "6829692c-4cd1-4e19-a190-7fa240597220": {
      "id": "6829692c-4cd1-4e19-a190-7fa240597220",
      "message": {
        "id": "6829692c-4cd1-4e19-a190-7fa240597220",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937269.033441,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "{\"search_query\":[{\"q\":\"ドローン chubory 自動帰還\"},{\"q\":\"Chubory drone RTH\"}]}"
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
              "q": "ドローン chubory 自動帰還"
            },
            {
              "type": "search",
              "q": "Chubory drone RTH"
            }
          ],
          "search_display_string": "Searching the web...",
          "searched_display_string": "Searched the web...",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "81d90a6d-e878-4d99-86d2-cce719cb41c9",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web.run",
        "channel": null
      },
      "parent": "81d90a6d-e878-4d99-86d2-cce719cb41c9",
      "children": [
        "a41f5a64-90d1-4b64-a069-c0ed0d4d0795"
      ]
    },
    "a41f5a64-90d1-4b64-a069-c0ed0d4d0795": {
      "id": "a41f5a64-90d1-4b64-a069-c0ed0d4d0795",
      "message": {
        "id": "a41f5a64-90d1-4b64-a069-c0ed0d4d0795",
        "author": {
          "role": "tool",
          "name": "web.run",
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937269.617267,
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
              "domain": "www.amazon.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM",
                  "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.co.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051",
                  "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "chubory.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://chubory.com/collections/all-drones",
                  "title": "All Drones - chubory",
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "chubory.com"
                },
                {
                  "type": "search_result",
                  "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-",
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "chubory.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.doorzo.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f",
                  "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.doorzo.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.amazon.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR",
                  "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                  "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/stores/CHUBORY/page/1C4DBA66-92A2-4C4C-9386-94DA899184F9",
                  "title": "CHUBORY - Amazon.com",
                  "snippet": "2650 ft Long Range Super Endurance Foldable Drone with Camera for Beginners–60+ min Flight Time, WiFi FPV Quadcopter with 4K HD Camera,... 3.73.7 out of 5 stars ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "atcl-dsj.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://atcl-dsj.com/useful/4873/",
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "ref_id": null,
                  "pub_date": 1559088000,
                  "attribution": "atcl-dsj.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.youtube.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E",
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "snippet": "Update the following parts: 1. The power-on method of the drone 2. The method of connecting to the drone's WLAN 3. The QR code of the APP.",
                  "ref_id": null,
                  "pub_date": 1743897600,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=B4bd3q-U-e0",
                  "title": "CHUBORY F89 Drone Japanese Operation Video - YouTube",
                  "snippet": "Share your videos with friends, family, and the world.",
                  "ref_id": null,
                  "pub_date": 1677542400,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?pp=ygUPI3BvbHRhcmpnOTltaW5p&v=Aci-0qmdUTI",
                  "title": "CHUBORY A77 Drone Operation Guide Video with Voice-over",
                  "snippet": "Compared to the previous operation guidance video, this video comes with a voice over commentary.",
                  "ref_id": null,
                  "pub_date": 1687651200,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go",
                  "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                  "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
                  "ref_id": null,
                  "pub_date": 1726444800,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw",
                  "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                  "snippet": "CHUBORY F89 Drone Operation Instruction Video (Upgraded Camera). 11K views · 1 year ago ...more. CHUBORY CHUM&PARTNER. 1.11K. Subscribe.",
                  "ref_id": null,
                  "pub_date": 1705622400,
                  "attribution": "www.youtube.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "payid.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://payid.jp/item/110054352",
                  "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                  "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "payid.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.tead.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.tead.co.jp/blog/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%AE%E5%AE%89%E5%85%A8%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%95%E3%82%A7%E3%83%AB%E3%82%BB%E3%83%BC%E3%83%95%E6%A9%9F%E8%83%BD%E3%80%81%E3%83%88%E3%83%A9%E3%83%96/",
                  "title": "ドローンの安全機能とフェルセーフ機能、トラブルに対応する機能 ...",
                  "snippet": "位置情報をもとに、ドローンが自動的に離陸地点に帰還する機能です。自動帰還機能は、基本的に離陸地点の上空へ直線で飛行します。 ※障害物回避機能の無い ...",
                  "ref_id": null,
                  "pub_date": 1599696000,
                  "attribution": "www.tead.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.reddit.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/",
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                  "ref_id": null,
                  "pub_date": 1730851200,
                  "attribution": "www.reddit.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "note.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://note.com/drone_new/n/ne7654350dbc9",
                  "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                  "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                  "ref_id": null,
                  "pub_date": 1743206400,
                  "attribution": "note.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.facebook.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/",
                  "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                  "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
                  "ref_id": null,
                  "pub_date": 1734220800,
                  "attribution": "www.facebook.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "jp.mercari.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af",
                  "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                  "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "jp.mercari.com"
                }
              ]
            }
          ],
          "debug_sonic_thread_id": "thread_684dec75a19c800387a8363e7805ef62",
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "6829692c-4cd1-4e19-a190-7fa240597220",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "6829692c-4cd1-4e19-a190-7fa240597220",
      "children": [
        "152324f6-edb0-46db-b299-6dbdc184a56f"
      ]
    },
    "152324f6-edb0-46db-b299-6dbdc184a56f": {
      "id": "152324f6-edb0-46db-b299-6dbdc184a56f",
      "message": {
        "id": "152324f6-edb0-46db-b299-6dbdc184a56f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937280.657887,
        "update_time": null,
        "content": {
          "content_type": "reasoning_recap",
          "content": "思考時間: 4 秒"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "reasoning_ended",
          "finished_duration_sec": 4,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "a41f5a64-90d1-4b64-a069-c0ed0d4d0795",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "a41f5a64-90d1-4b64-a069-c0ed0d4d0795",
      "children": [
        "7ed9022e-b837-437a-aa21-babd73d3aef8"
      ]
    },
    "7ed9022e-b837-437a-aa21-babd73d3aef8": {
      "id": "7ed9022e-b837-437a-aa21-babd73d3aef8",
      "message": {
        "id": "7ed9022e-b837-437a-aa21-babd73d3aef8",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937273.216216,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "Chubory（CHUBORY）ドローンには、GPSを使った「Auto Return／自動帰還（Return to Home, RTH）」機能が搭載されているモデルがあり、これを使えば離陸地点へ自動で帰ってきます。以下、基本的な手順と注意点を説明します。\n\n---\n\n## 📦 1. モデル確認と機能搭載の有無  \n- CHUBORY製の「X10 Pro」「A77」「F89」などのGPS搭載モデルでは、「Auto Return」機能が明示されています citeturn0search1turn0search5。  \n- ご利用中のモデル名がわかれば、さらに具体的な機能説明が可能です。まず型式を確認してください。\n\n---\n\n## 🛰️ 2. GPSとホームポイント設定  \n- ドローンを飛ばす前に、**GPSを安定して捕捉**（衛星ロック）できているか確認します。  \n- 多くのモデルでは、**離陸時に現在位置が自動でホームポイントとして記録**されますが、アプリ／リモコンで手動設定が必要な場合もあります。\n\n---\n\n## 🔁 3. RTH（自動帰還）の動作条件  \n通常、RTHは以下の３つの動作トリガーで起動します：  \n1. **通信途絶（フェイルセーフ）**：リモコンやWi‑Fi接続が切れた場合に自動で帰還開始 citeturn0search6  \n2. **バッテリー残量低下**：設定したバッテリー残量まで下がると、RTHが発動する機種が多いです citeturn0search6  \n3. **手動操作**：RTHボタンを長押し（またはアプリ内のボタンをタップ）で帰還命令を実行 citeturn0search6  \n\n－－  \n※ドローンによっては「ボタンを押すだけではなく長押しが必要」「高度設定が事前に必要」など、細かな仕様が異なります。\n\n---\n\n## ⚙️ 4. 操作手順まとめ  \n1. **起動前にGPSが安定していることを確認**  \n2. ホームポイントを**自動記録 or アプリで設定**  \n3. 離陸して飛行  \n4. 自動帰還させたいときは、**RTHボタンを長押し**（またはアプリ操作）  \n5. 通信途絶やバッテリー切れが発生した場合、**自動的にRTHが発動**  \n6. ドローンが離陸地点上空まで戻り、高度調整後に垂直着陸\n\n---\n\n## ⚠️ 5. トラブル・注意点  \n- **GPSが弱い場所（屋内・障害物の多い環境）では正常に作動しない可能性あり** citeturn0search6  \n- CHUBORYドローンは**低価格帯の汎用モデルが多く、GPS精度や安定性に課題がある**とのレビューもあります citeturn0search11turn0search15  \n  > “It can't even stay still (hover), the move is not accurate at all.” citeturn0search11  \n  > “This cheap crap drone keeps losing connection so easily…” citeturn0search15  \n- **長押し操作や帰還高度の事前設定**など、取扱説明書やアプリの指示に従いましょう。\n\n---\n\n## 🎥 6. チュートリアル参考動画  \n- CHUBORY F89 や X10 Pro の操作ガイド・チュートリアルがYouTubeに複数アップされています citeturn0search7turn0search17。使用モデルに近い動画を探し、RTH操作の手順や挙動を視覚的に確認するのがおすすめです。\n\n---\n\n### ✅ 結論まとめ  \n| ステップ | 内容 |\n|--|--|\n| 1 | GPSが安定していることを確認 |\n| 2 | 離陸前にホームポイントを設定 |\n| 3 | RTHボタン長押し or 自動トリガーを発動 |\n| 4 | ドローンが上昇し、離陸地点上空から帰還 → 着陸 |\n\n---\n\n## 🛠️ 次に教えてほしいこと  \n- 使用中のモデル名（例：「X10 Pro」「F89」「A77」など）はどれですか？  \n- リモコンやアプリ画面で「Auto Return」や「RTH」ボタンの表示は確認できますか？\n\nモデルと操作方法がわかれば、さらに具体的な設定やトラブル対策をご案内できます！"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "content_references": [
            {
              "matched_text": "Chubory（CHUBORY）ドローンには、GPSを使った「Auto Return／自動帰還（Return to Home, RTH）」機能が搭載されているモデルがあり、これを使えば離陸地点へ自動で帰ってきます。以下、基本的な手順と注意点を説明します。",
              "start_idx": 0,
              "end_idx": 127,
              "safe_urls": [],
              "refs": [],
              "alt": "Chubory（CHUBORY）ドローンには、GPSを使った「Auto Return／自動帰還（Return to Home, RTH）」機能が搭載されているモデルがあり、これを使えば離陸地点へ自動で帰ってきます。以下、基本的な手順と注意点を説明します。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "CHUBORY製の「X10 Pro」「A77」「F89」などのGPS搭載モデルでは、「Auto Return」機能が明示されています",
              "start_idx": 160,
              "end_idx": 226,
              "safe_urls": [],
              "refs": [],
              "alt": "CHUBORY製の「X10 Pro」「A77」「F89」などのGPS搭載モデルでは、「Auto Return」機能が明示されています",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search1turn0search5",
              "start_idx": 227,
              "end_idx": 259,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "All Drones - chubory",
                  "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                  "attribution_segments": [
                    "0-0",
                    "0-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                      "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                      "attribution": "payid.jp"
                    },
                    {
                      "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                      "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "doorzo.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                      "url": "https://note.com/drone_new/n/ne7654350dbc9?utm_source=chatgpt.com",
                      "pub_date": 1743206400,
                      "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                      "attribution": "note.com"
                    },
                    {
                      "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "CHUBORY - Amazon.com",
                      "url": "https://www.amazon.com/stores/CHUBORY/page/1C4DBA66-92A2-4C4C-9386-94DA899184F9?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Endurance Foldable Drone with Camera for Beginners–60+ min Flight Time, WiFi FPV Quadcopter with 4K HD Camera,... 3.73.7 out of 5 stars ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                      "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                      "pub_date": 1559088000,
                      "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                      "attribution": "atcl-dsj.com"
                    },
                    {
                      "title": "ドローンの安全機能とフェルセーフ機能、トラブルに対応する機能 ...",
                      "url": "https://www.tead.co.jp/blog/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%AE%E5%AE%89%E5%85%A8%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%95%E3%82%A7%E3%83%AB%E3%82%BB%E3%83%BC%E3%83%95%E6%A9%9F%E8%83%BD%E3%80%81%E3%83%88%E3%83%A9%E3%83%96/?utm_source=chatgpt.com",
                      "pub_date": 1599696000,
                      "snippet": "位置情報をもとに、ドローンが自動的に離陸地点に帰還する機能です。自動帰還機能は、基本的に離陸地点の上空へ直線で飛行します。 ※障害物回避機能の無い ...",
                      "attribution": "tead.co.jp"
                    },
                    {
                      "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                      "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                      "pub_date": 1743897600,
                      "snippet": "Update the following parts: 1. The power-on method of the drone 2. The method of connecting to the drone's WLAN 3. The QR code of the APP.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Japanese Operation Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=B4bd3q-U-e0&utm_source=chatgpt.com",
                      "pub_date": 1677542400,
                      "snippet": "Share your videos with friends, family, and the world.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                      "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                      "pub_date": 1734220800,
                      "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
                      "attribution": "facebook.com"
                    },
                    {
                      "title": "CHUBORY A77 Drone Operation Guide Video with Voice-over",
                      "url": "https://www.youtube.com/watch?pp=ygUPI3BvbHRhcmpnOTltaW5p&v=Aci-0qmdUTI&utm_source=chatgpt.com",
                      "pub_date": 1687651200,
                      "snippet": "Compared to the previous operation guidance video, this video comes with a voice over commentary.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "Chubory drone brand : r/drones - Reddit",
                      "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                      "pub_date": 1730851200,
                      "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                      "attribution": "reddit.com"
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
                      "ref_index": 0
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
                      "ref_index": 2
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
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
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
                      "ref_index": 11
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chubory.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "All Drones - chubory",
                  "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
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
                },
                {
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                  "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
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
              "matched_text": "ご利用中のモデル名がわかれば、さらに具体的な機能説明が可能です。まず型式を確認してください。",
              "start_idx": 265,
              "end_idx": 311,
              "safe_urls": [],
              "refs": [],
              "alt": "ご利用中のモデル名がわかれば、さらに具体的な機能説明が可能です。まず型式を確認してください。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "259-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "ドローンを飛ばす前に、**GPSを安定して捕捉**（衛星ロック）できているか確認します。",
              "start_idx": 345,
              "end_idx": 389,
              "safe_urls": [],
              "refs": [],
              "alt": "ドローンを飛ばす前に、**GPSを安定して捕捉**（衛星ロック）できているか確認します。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "259-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "多くのモデルでは、**離陸時に現在位置が自動でホームポイントとして記録**されますが、アプリ／リモコンで手動設定が必要な場合もあります。",
              "start_idx": 394,
              "end_idx": 462,
              "safe_urls": [],
              "refs": [],
              "alt": "多くのモデルでは、**離陸時に現在位置が自動でホームポイントとして記録**されますが、アプリ／リモコンで手動設定が必要な場合もあります。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "259-2",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**通信途絶（フェイルセーフ）**：リモコンやWi‑Fi接続が切れた場合に自動で帰還開始",
              "start_idx": 526,
              "end_idx": 570,
              "safe_urls": [],
              "refs": [],
              "alt": "**通信途絶（フェイルセーフ）**：リモコンやWi‑Fi接続が切れた場合に自動で帰還開始",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "259-3",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search6",
              "start_idx": 571,
              "end_idx": 590,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "attribution_segments": [
                    "259-3"
                  ],
                  "supporting_websites": [
                    {
                      "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                      "url": "https://note.com/drone_new/n/ne7654350dbc9?utm_source=chatgpt.com",
                      "pub_date": 1743206400,
                      "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                      "attribution": "note.com"
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
                      "ref_index": 14
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "atcl-dsj.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
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
              "matched_text": "**バッテリー残量低下**：設定したバッテリー残量まで下がると、RTHが発動する機種が多いです",
              "start_idx": 596,
              "end_idx": 643,
              "safe_urls": [],
              "refs": [],
              "alt": "**バッテリー残量低下**：設定したバッテリー残量まで下がると、RTHが発動する機種が多いです",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "590-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search6",
              "start_idx": 644,
              "end_idx": 663,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "attribution_segments": [
                    "590-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                      "url": "https://note.com/drone_new/n/ne7654350dbc9?utm_source=chatgpt.com",
                      "pub_date": 1743206400,
                      "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                      "attribution": "note.com"
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
                      "ref_index": 14
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "atcl-dsj.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
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
              "matched_text": "**手動操作**：RTHボタンを長押し（またはアプリ内のボタンをタップ）で帰還命令を実行",
              "start_idx": 669,
              "end_idx": 713,
              "safe_urls": [],
              "refs": [],
              "alt": "**手動操作**：RTHボタンを長押し（またはアプリ内のボタンをタップ）で帰還命令を実行",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "663-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search6",
              "start_idx": 714,
              "end_idx": 733,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "attribution_segments": [
                    "663-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "atcl-dsj.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
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
              "matched_text": "※ドローンによっては「ボタンを押すだけではなく長押しが必要」「高度設定が事前に必要」など、細かな仕様が異なります。",
              "start_idx": 742,
              "end_idx": 799,
              "safe_urls": [],
              "refs": [],
              "alt": "※ドローンによっては「ボタンを押すだけではなく長押しが必要」「高度設定が事前に必要」など、細かな仕様が異なります。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "733-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "ホームポイントを**自動記録 or アプリで設定**",
              "start_idx": 857,
              "end_idx": 883,
              "safe_urls": [],
              "refs": [],
              "alt": "ホームポイントを**自動記録 or アプリで設定**",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "733-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "自動帰還させたいときは、**RTHボタンを長押し**（またはアプリ操作）",
              "start_idx": 901,
              "end_idx": 937,
              "safe_urls": [],
              "refs": [],
              "alt": "自動帰還させたいときは、**RTHボタンを長押し**（またはアプリ操作）",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "733-2",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**GPSが弱い場所（屋内・障害物の多い環境）では正常に作動しない可能性あり**",
              "start_idx": 1038,
              "end_idx": 1078,
              "safe_urls": [],
              "refs": [],
              "alt": "**GPSが弱い場所（屋内・障害物の多い環境）では正常に作動しない可能性あり**",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "733-3",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search6",
              "start_idx": 1079,
              "end_idx": 1098,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "attribution_segments": [
                    "733-0",
                    "733-1",
                    "733-2",
                    "733-3"
                  ],
                  "supporting_websites": [
                    {
                      "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                      "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "doorzo.com"
                    },
                    {
                      "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                      "attribution": "payid.jp"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                      "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "ドローンの安全機能とフェルセーフ機能、トラブルに対応する機能 ...",
                      "url": "https://www.tead.co.jp/blog/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%AE%E5%AE%89%E5%85%A8%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%95%E3%82%A7%E3%83%AB%E3%82%BB%E3%83%BC%E3%83%95%E6%A9%9F%E8%83%BD%E3%80%81%E3%83%88%E3%83%A9%E3%83%96/?utm_source=chatgpt.com",
                      "pub_date": 1599696000,
                      "snippet": "位置情報をもとに、ドローンが自動的に離陸地点に帰還する機能です。自動帰還機能は、基本的に離陸地点の上空へ直線で飛行します。 ※障害物回避機能の無い ...",
                      "attribution": "tead.co.jp"
                    },
                    {
                      "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                      "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                      "attribution": "jp.mercari.com"
                    },
                    {
                      "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                      "url": "https://note.com/drone_new/n/ne7654350dbc9?utm_source=chatgpt.com",
                      "pub_date": 1743206400,
                      "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                      "attribution": "note.com"
                    },
                    {
                      "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "All Drones - chubory",
                      "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                      "attribution": "chubory.com"
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
                      "ref_index": 2
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
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
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "atcl-dsj.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
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
              "matched_text": "CHUBORYドローンは**低価格帯の汎用モデルが多く、GPS精度や安定性に課題がある**とのレビューもあります",
              "start_idx": 1103,
              "end_idx": 1159,
              "safe_urls": [],
              "refs": [],
              "alt": "CHUBORYドローンは**低価格帯の汎用モデルが多く、GPS精度や安定性に課題がある**とのレビューもあります",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1098-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search11turn0search15",
              "start_idx": 1160,
              "end_idx": 1194,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                  "pub_date": 1730851200,
                  "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                  "attribution_segments": [
                    "1098-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                      "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                      "attribution": "jp.mercari.com"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                      "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                      "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "doorzo.com"
                    },
                    {
                      "title": "All Drones - chubory",
                      "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                      "attribution": "payid.jp"
                    },
                    {
                      "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                      "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                      "pub_date": 1734220800,
                      "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
                      "attribution": "facebook.com"
                    },
                    {
                      "title": "CHUBORY - Amazon.com",
                      "url": "https://www.amazon.com/stores/CHUBORY/page/1C4DBA66-92A2-4C4C-9386-94DA899184F9?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Endurance Foldable Drone with Camera for Beginners–60+ min Flight Time, WiFi FPV Quadcopter with 4K HD Camera,... 3.73.7 out of 5 stars ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                      "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                      "pub_date": 1743897600,
                      "snippet": "Update the following parts: 1. The power-on method of the drone 2. The method of connecting to the drone's WLAN 3. The QR code of the APP.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY A77 Drone Operation Guide Video with Voice-over",
                      "url": "https://www.youtube.com/watch?pp=ygUPI3BvbHRhcmpnOTltaW5p&v=Aci-0qmdUTI&utm_source=chatgpt.com",
                      "pub_date": 1687651200,
                      "snippet": "Compared to the previous operation guidance video, this video comes with a voice over commentary.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Japanese Operation Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=B4bd3q-U-e0&utm_source=chatgpt.com",
                      "pub_date": 1677542400,
                      "snippet": "Share your videos with friends, family, and the world.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go&utm_source=chatgpt.com",
                      "pub_date": 1726444800,
                      "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                      "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                      "pub_date": 1705622400,
                      "snippet": "CHUBORY F89 Drone Operation Instruction Video (Upgraded Camera). 11K views · 1 year ago ...more. CHUBORY CHUM&PARTNER. 1.11K. Subscribe.",
                      "attribution": "youtube.com"
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
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 2
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
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
                      "ref_index": 7
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
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
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 18
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "reddit.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                  "pub_date": 1730851200,
                  "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    }
                  ],
                  "hue": null,
                  "attributions": null
                },
                {
                  "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                  "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                  "pub_date": 1734220800,
                  "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
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
              "matched_text": "“It can't even stay still (hover), the move is not accurate at all.”",
              "start_idx": 1201,
              "end_idx": 1269,
              "safe_urls": [],
              "refs": [],
              "alt": "“It can't even stay still (hover), the move is not accurate at all.”",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1194-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search11",
              "start_idx": 1270,
              "end_idx": 1290,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                  "pub_date": 1730851200,
                  "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                  "attribution_segments": [
                    "1194-0"
                  ],
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "reddit.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                  "pub_date": 1730851200,
                  "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
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
              "matched_text": "“This cheap crap drone keeps losing connection so easily…”",
              "start_idx": 1297,
              "end_idx": 1355,
              "safe_urls": [],
              "refs": [],
              "alt": "“This cheap crap drone keeps losing connection so easily…”",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1290-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search15",
              "start_idx": 1356,
              "end_idx": 1376,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                  "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                  "pub_date": 1734220800,
                  "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
                  "attribution_segments": [
                    "1290-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go&utm_source=chatgpt.com",
                      "pub_date": 1726444800,
                      "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "All Drones - chubory",
                      "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
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
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "facebook.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                  "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                  "pub_date": 1734220800,
                  "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
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
              "matched_text": "**長押し操作や帰還高度の事前設定**など、取扱説明書やアプリの指示に従いましょう。",
              "start_idx": 1381,
              "end_idx": 1423,
              "safe_urls": [],
              "refs": [],
              "alt": "**長押し操作や帰還高度の事前設定**など、取扱説明書やアプリの指示に従いましょう。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1376-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "CHUBORY F89 や X10 Pro の操作ガイド・チュートリアルがYouTubeに複数アップされています",
              "start_idx": 1454,
              "end_idx": 1510,
              "safe_urls": [],
              "refs": [],
              "alt": "CHUBORY F89 や X10 Pro の操作ガイド・チュートリアルがYouTubeに複数アップされています",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "1376-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search7turn0search17",
              "start_idx": 1511,
              "end_idx": 1544,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "pub_date": 1559088000,
                  "snippet": "リターントゥホームは、万が一、ドローンが緊急事態になった際に、自動で帰還してくれる大変便利な機能です。 ... また、発動時に、自動帰還が不可と ...",
                  "attribution_segments": [
                    "1376-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                      "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                      "attribution": "jp.mercari.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                      "attribution": "payid.jp"
                    },
                    {
                      "title": "ドローンの安全機能とフェルセーフ機能、トラブルに対応する機能 ...",
                      "url": "https://www.tead.co.jp/blog/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%AE%E5%AE%89%E5%85%A8%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%95%E3%82%A7%E3%83%AB%E3%82%BB%E3%83%BC%E3%83%95%E6%A9%9F%E8%83%BD%E3%80%81%E3%83%88%E3%83%A9%E3%83%96/?utm_source=chatgpt.com",
                      "pub_date": 1599696000,
                      "snippet": "位置情報をもとに、ドローンが自動的に離陸地点に帰還する機能です。自動帰還機能は、基本的に離陸地点の上空へ直線で飛行します。 ※障害物回避機能の無い ...",
                      "attribution": "tead.co.jp"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                      "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                      "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "doorzo.com"
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
                      "ref_index": 5
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 2
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "atcl-dsj.com"
                },
                {
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                  "pub_date": 1743897600,
                  "snippet": "Update the following parts: 1. The power-on method of the drone 2. The method of connecting to the drone's WLAN 3. The QR code of the APP.",
                  "attribution_segments": [
                    "1376-1"
                  ],
                  "supporting_websites": [
                    {
                      "title": "CHUBORY F89 Drone Japanese Operation Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=B4bd3q-U-e0&utm_source=chatgpt.com",
                      "pub_date": 1677542400,
                      "snippet": "Share your videos with friends, family, and the world.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                      "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                      "pub_date": 1705622400,
                      "snippet": "CHUBORY F89 Drone Operation Instruction Video (Upgraded Camera). 11K views · 1 year ago ...more. CHUBORY CHUM&PARTNER. 1.11K. Subscribe.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "All Drones - chubory",
                      "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                      "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                      "pub_date": 1734220800,
                      "snippet": "This cheap crap drone keeps losing connection so easily where the screen freezes or lags terribly so I can't see where the drone is at.",
                      "attribution": "facebook.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                      "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go&utm_source=chatgpt.com",
                      "pub_date": 1726444800,
                      "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                      "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "CHUBORY A77 Drone Operation Guide Video with Voice-over",
                      "url": "https://www.youtube.com/watch?pp=ygUPI3BvbHRhcmpnOTltaW5p&v=Aci-0qmdUTI&utm_source=chatgpt.com",
                      "pub_date": 1687651200,
                      "snippet": "Compared to the previous operation guidance video, this video comes with a voice over commentary.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                      "attribution": "payid.jp"
                    },
                    {
                      "title": "CHUBORY - Amazon.com",
                      "url": "https://www.amazon.com/stores/CHUBORY/page/1C4DBA66-92A2-4C4C-9386-94DA899184F9?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "2650 ft Long Range Super Endurance Foldable Drone with Camera for Beginners–60+ min Flight Time, WiFi FPV Quadcopter with 4K HD Camera,... 3.73.7 out of 5 stars ...",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                      "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                      "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                      "attribution": "doorzo.com"
                    },
                    {
                      "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                      "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                      "attribution": "amazon.co.jp"
                    },
                    {
                      "title": "Chubory drone brand : r/drones - Reddit",
                      "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                      "pub_date": 1730851200,
                      "snippet": "They're dropshipping generic drones. My general rule of thumb is that if a drone isn't at least $250, it's probably not worth more than about $40.",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                      "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af&utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                      "attribution": "jp.mercari.com"
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
                      "ref_index": 17
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
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
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
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "youtube.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                  "pub_date": 1743897600,
                  "snippet": "Update the following parts: 1. The power-on method of the drone 2. The method of connecting to the drone's WLAN 3. The QR code of the APP.",
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
                  "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                  "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go&utm_source=chatgpt.com",
                  "pub_date": 1726444800,
                  "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
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
              "matched_text": " ",
              "start_idx": 1900,
              "end_idx": 1900,
              "safe_urls": [],
              "refs": [],
              "alt": "",
              "prompt_text": null,
              "type": "sources_footnote",
              "sources": [
                {
                  "title": "All Drones - chubory",
                  "url": "https://chubory.com/collections/all-drones?utm_source=chatgpt.com",
                  "attribution": "chubory.com"
                },
                {
                  "title": "リターントゥホームとは何？緊急時でも慌てないための基礎知識",
                  "url": "https://atcl-dsj.com/useful/4873/?utm_source=chatgpt.com",
                  "attribution": "atcl-dsj.com"
                },
                {
                  "title": "Chubory drone brand : r/drones - Reddit",
                  "url": "https://www.reddit.com/r/drones/comments/1gl3x52/chubory_drone_brand/?utm_source=chatgpt.com",
                  "attribution": "reddit.com"
                },
                {
                  "title": "CHUBORY x10 Pro Drone Issues and Comparison to DJI Mini 4k",
                  "url": "https://www.facebook.com/groups/727414274424726/posts/1993348911164583/?utm_source=chatgpt.com",
                  "attribution": "facebook.com"
                },
                {
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                  "attribution": "youtube.com"
                }
              ],
              "has_images": false
            }
          ],
          "safe_urls": [],
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "amazon.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.jp/CHUBORY-%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%A2%E3%83%BC%E3%83%89-Brushless-Endurance/dp/B0DXQ25SWM?utm_source=chatgpt.com",
                  "title": "Amazon.co.jp: ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 0
                  },
                  "pub_date": null,
                  "attribution": "amazon.co.jp"
                },
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.jp/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC/b?ie=UTF8&node=3308532051&utm_source=chatgpt.com",
                  "title": "Amazon.co.jp: ドローン・マルチコプター - ラジコンおもちゃ",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォロー ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 4
                  },
                  "pub_date": null,
                  "attribution": "amazon.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "doorzo.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.doorzo.com/en/mall/amazon/detail/B0DXQ25SWM?srsltid=AfmBOoroc03UcuTZNi-mL5jFX_9BHvc7N7POrf5AOzcdfXe17iAXgd3f&utm_source=chatgpt.com",
                  "title": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 ...",
                  "snippet": "ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ウェイポイント ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 2
                  },
                  "pub_date": null,
                  "attribution": "doorzo.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "amazon.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/Brushless-Beginners-CHUBORY-Quadcopter-Batteries/dp/B0D8J5HBKR?utm_source=chatgpt.com",
                  "title": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 ...",
                  "snippet": "2650 ft Long Range Super Enduring Brushless Motor Drone with 84 Mins Super Long Flight Time, Drone with 4K HD Camera for Beginners, CHUBORY A77 WiFi FPV ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 3
                  },
                  "pub_date": null,
                  "attribution": "amazon.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/stores/CHUBORY/page/1C4DBA66-92A2-4C4C-9386-94DA899184F9?utm_source=chatgpt.com",
                  "title": "CHUBORY - Amazon.com",
                  "snippet": "2650 ft Long Range Super Endurance Foldable Drone with Camera for Beginners–60+ min Flight Time, WiFi FPV Quadcopter with 4K HD Camera,... 3.73.7 out of 5 stars ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 9
                  },
                  "pub_date": null,
                  "attribution": "amazon.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "chubory.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://chubory.com/products/chubory-x10-gps-drone-with-camera-for-adults-4k-uhd-56-min-long-flight-time-3280-ft-long-control-range-auto-return-follow-me-brushless-motor-5g-fpv-rc-quadcopter-for-beginners-0.55bl-?utm_source=chatgpt.com",
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD ...",
                  "snippet": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min Long Flight Time,3280 FT Long Control Range, Auto Return, Follow Me, Brushless Motor, 5G FPV RC ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 5
                  },
                  "pub_date": null,
                  "attribution": "chubory.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "payid.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://payid.jp/item/110054352?utm_source=chatgpt.com",
                  "title": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請 ...",
                  "snippet": "【人気商品】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4Kカメラ 収納ケース付き バッテリー2個 40分飛行時間 自動帰還 フォローミーモード ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 8
                  },
                  "pub_date": null,
                  "attribution": "payid.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "tead.co.jp",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.tead.co.jp/blog/%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%AE%E5%AE%89%E5%85%A8%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%95%E3%82%A7%E3%83%AB%E3%82%BB%E3%83%BC%E3%83%95%E6%A9%9F%E8%83%BD%E3%80%81%E3%83%88%E3%83%A9%E3%83%96/?utm_source=chatgpt.com",
                  "title": "ドローンの安全機能とフェルセーフ機能、トラブルに対応する機能 ...",
                  "snippet": "位置情報をもとに、ドローンが自動的に離陸地点に帰還する機能です。自動帰還機能は、基本的に離陸地点の上空へ直線で飛行します。 ※障害物回避機能の無い ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 10
                  },
                  "pub_date": 1599696000,
                  "attribution": "tead.co.jp"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "youtube.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=B4bd3q-U-e0&utm_source=chatgpt.com",
                  "title": "CHUBORY F89 Drone Japanese Operation Video - YouTube",
                  "snippet": "Share your videos with friends, family, and the world.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 12
                  },
                  "pub_date": 1677542400,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?pp=ygUPI3BvbHRhcmpnOTltaW5p&v=Aci-0qmdUTI&utm_source=chatgpt.com",
                  "title": "CHUBORY A77 Drone Operation Guide Video with Voice-over",
                  "snippet": "Compared to the previous operation guidance video, this video comes with a voice over commentary.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 13
                  },
                  "pub_date": 1687651200,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=yK7N7Nvr_Go&utm_source=chatgpt.com",
                  "title": "CHUBORY X10 PRO GPS Drone Tutorial Video - YouTube",
                  "snippet": "Absolutely useless,wont connect to phone,cant find gps,unstable even when indoors,complete waste of time,written instructions are too vague, ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 17
                  },
                  "pub_date": 1726444800,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                  "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                  "snippet": "CHUBORY F89 Drone Operation Instruction Video (Upgraded Camera). 11K views · 1 year ago ...more. CHUBORY CHUM&PARTNER. 1.11K. Subscribe.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 18
                  },
                  "pub_date": 1705622400,
                  "attribution": "youtube.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "note.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://note.com/drone_new/n/ne7654350dbc9?utm_source=chatgpt.com",
                  "title": "業界トレンドを解説｜自動帰還付きドローンの進化 - note",
                  "snippet": "まず、最新の自動帰還機能では、GPSに加えてGLONASSやガリレオといった複数のGNSSを利用し、測位精度を飛躍的に高めています。これにより、ビル群や森林 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 14
                  },
                  "pub_date": 1743206400,
                  "attribution": "note.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "mercari.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://jp.mercari.com/search?keyword=%E3%83%9F%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89&srsltid=AfmBOorHn7mmk9BcC2DO46jT18P2OkiZ1e9yAivB_ZuFknw8v_RKb7Af&utm_source=chatgpt.com",
                  "title": "【2025年最新】ミーモードの人気アイテム - メルカリ",
                  "snippet": "【在庫セール】ドローン カメラ付き CHUBORY Drone WIFI搭載 申請不要 屋外 小型 4K ... 自動帰還 ... 自動帰還 フォローミーモード ウェイポイントモード 誕生日ギフト HS155 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 16
                  },
                  "pub_date": null,
                  "attribution": "mercari.com"
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
          "parent_id": "152324f6-edb0-46db-b299-6dbdc184a56f",
          "request_id": "94fcfd77ee1dd004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "152324f6-edb0-46db-b299-6dbdc184a56f",
      "children": [
        "4c15fbbe-ea68-4e37-89e9-1e968081ba6c"
      ]
    },
    "4c15fbbe-ea68-4e37-89e9-1e968081ba6c": {
      "id": "4c15fbbe-ea68-4e37-89e9-1e968081ba6c",
      "message": {
        "id": "4c15fbbe-ea68-4e37-89e9-1e968081ba6c",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937299.394419,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "F89です"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "dictation": false,
          "request_id": "94fcfe39aad1d004-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "7ed9022e-b837-437a-aa21-babd73d3aef8",
      "children": [
        "04f03fd0-9882-4aef-a806-0ae138fced41"
      ]
    },
    "04f03fd0-9882-4aef-a806-0ae138fced41": {
      "id": "04f03fd0-9882-4aef-a806-0ae138fced41",
      "message": {
        "id": "04f03fd0-9882-4aef-a806-0ae138fced41",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937300.179459,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "search(\"F89\\u3067\\u3059\")"
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "sonic_classification_result": {
            "latency_ms": 146.84006106108427,
            "search_prob": 0.6293729347600362,
            "force_search_threshold": 0.54,
            "classifier_config_name": "sonic_force_pg_switcher_renderer_config"
          },
          "citations": [],
          "content_references": [],
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "4c15fbbe-ea68-4e37-89e9-1e968081ba6c",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web",
        "channel": null
      },
      "parent": "4c15fbbe-ea68-4e37-89e9-1e968081ba6c",
      "children": [
        "f09d1422-1c79-4a7d-8508-c0b07f2b7268"
      ]
    },
    "f09d1422-1c79-4a7d-8508-c0b07f2b7268": {
      "id": "f09d1422-1c79-4a7d-8508-c0b07f2b7268",
      "message": {
        "id": "f09d1422-1c79-4a7d-8508-c0b07f2b7268",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937310.360411,
        "update_time": null,
        "content": {
          "content_type": "thoughts",
          "thoughts": [],
          "source_analysis_msg_id": "3bcceedc-2c7b-4d28-81e9-625c29c7c2d6"
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
          "parent_id": "04f03fd0-9882-4aef-a806-0ae138fced41",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "04f03fd0-9882-4aef-a806-0ae138fced41",
      "children": [
        "8c0cbd5a-28bc-45a6-8609-307b7db1977f"
      ]
    },
    "8c0cbd5a-28bc-45a6-8609-307b7db1977f": {
      "id": "8c0cbd5a-28bc-45a6-8609-307b7db1977f",
      "message": {
        "id": "8c0cbd5a-28bc-45a6-8609-307b7db1977f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937300.416017,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "unknown",
          "response_format_name": null,
          "text": "{\"search_query\":[{\"q\":\"CHUBORY F89 return to home RTH\"},{\"q\":\"Chubory F89 GPS auto return home\"}]}"
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
              "q": "CHUBORY F89 return to home RTH"
            },
            {
              "type": "search",
              "q": "Chubory F89 GPS auto return home"
            }
          ],
          "search_display_string": "Searching the web...",
          "searched_display_string": "Searched the web...",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "f09d1422-1c79-4a7d-8508-c0b07f2b7268",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "web.run",
        "channel": null
      },
      "parent": "f09d1422-1c79-4a7d-8508-c0b07f2b7268",
      "children": [
        "6abe35b4-234a-4bb5-b363-e7f02bca1dbd"
      ]
    },
    "6abe35b4-234a-4bb5-b363-e7f02bca1dbd": {
      "id": "6abe35b4-234a-4bb5-b363-e7f02bca1dbd",
      "message": {
        "id": "6abe35b4-234a-4bb5-b363-e7f02bca1dbd",
        "author": {
          "role": "tool",
          "name": "web.run",
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937301.250101,
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
              "domain": "www.youtube.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=gN3Sw9CI2Q4",
                  "title": "The latest operation instruction video of CHUBORY F89 drone - YouTube",
                  "snippet": "Corrected the instructions for connecting the controller to the drone.",
                  "ref_id": null,
                  "pub_date": 1689206400,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=4QivVMHKEBY",
                  "title": "The Operation Guide of CHUBORY F89 - YouTube",
                  "snippet": "Better then a68.? Whats the price on thid one. 12:13. Go to channel · How to fly drones for beginners. Jake Sloan•1.5M views.",
                  "ref_id": null,
                  "pub_date": 1630713600,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw",
                  "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                  "snippet": "... 1.1K views · 9:37. Go to channel · CHUBORY X10 PRO GPS Drone Operation Guidance Video. CHUBORY CHUM&PARTNER•16K views · 17:54. Go to channel ...",
                  "ref_id": null,
                  "pub_date": 1705622400,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E",
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "snippet": "CHUBORY F89 Drone Tutorial Video 2025-4-7. 907 views · 2 months ago ... Go to channel · Drone with Camera 1080P HD FPV Foldable Mini Drone ...",
                  "ref_id": null,
                  "pub_date": 1743897600,
                  "attribution": "www.youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=MMcLVMxrp-k",
                  "title": "Do THIS *BEFORE* pressing RETURN TO HOME on your drone!",
                  "snippet": "... home 6:48 Set the appropriate Auto RTH height 8:06 Make sure your drone will auto land somewhere clear 8:50 Consider only partially using RTH ...",
                  "ref_id": null,
                  "pub_date": 1677542400,
                  "attribution": "www.youtube.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "chubory.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://chubory.com/collections",
                  "title": "All Products - chubory",
                  "snippet": "It's an all-function drone for beginner and kids. You can capture 120°Wide-angle 4K UHD photos and videos at the location you want. F89 has FPV real-t...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "chubory.com"
                },
                {
                  "type": "search_result",
                  "url": "https://chubory.com/pages/f89-tutorial-videos",
                  "title": "Tutorial Videos-F89 - chubory",
                  "snippet": "... All Drones · Other Products · Blocks · Support · APP & Manual · Tutorial Videos · F89 · A77. About us. About us · Contact us · Home. /. Tutorial Videos-F89 ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "chubory.com"
                },
                {
                  "type": "search_result",
                  "url": "https://chubory.com/products/chubory-x11-pro-gps-drones-with-90-mins-long-flight-time-3-axis-gimbal-drones-with-camera-for-adults-4k-uhd-camera-anti-shake-gps-auto-return-home-brushless-motor-all-functions-drones-for-beginners-professionals-3-batteries-bag-",
                  "title": "CHUBORY X11 Pro GPS Drones with 90+ Mins long flight time , 3 ...",
                  "snippet": "We provide with 3 batteries of 90 minutes flight time. This is a drone with GPS return home. And we provide with one shoulder bag for each drone, it is ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "chubory.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "mavicpilots.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://mavicpilots.com/threads/when-your-drone-will-return-to-home-rth-and-when-it-might-not%E2%80%A6.124995/",
                  "title": "When Your Drone will Return to Home (RTH) and When it Might Not…",
                  "snippet": "The FLY App and the Controller will not engage the RTH routine if the Drone is within 20-meters of its Home Point. I also tried running the ...",
                  "ref_id": null,
                  "pub_date": 1650672000,
                  "attribution": "mavicpilots.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.amazon.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM",
                  "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                  "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "store.dji.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://store.dji.com/content/how-to-use-the-djis-return-to-home",
                  "title": "How to use DJI's Return to Home (RTH) Safely",
                  "snippet": "DJI's Return to Home is an effective backup tool that can save your drone in the case of signal loss or low battery, but you need to make sure it's set up ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "store.dji.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.ebay.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.ebay.com/itm/335957158437",
                  "title": "Chubory F89 Blue Micro Foldable Remote Control Ready To ... - eBay",
                  "snippet": "Chubory F89 Blue Micro Foldable Remote Control Ready To Fly Drone Set Ages 14+ ; Model · Chubory F89 ; Connectivity · Remote Control ; Condition · Used, See photos.",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.ebay.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.ebay.com/itm/316895481019",
                  "title": "Chubory F89 Drone with Camera FPV 3 Batteries Case Folding ...",
                  "snippet": "The Chubory F89 Drone with Camera FPV is a ready-to-fly drone that comes with a remote control for easy operation. It features a 4K HD camera for high-quality ...",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.ebay.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.reddit.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/dji/comments/1cy95aj/how_to_disable_rth_return_to_home_function_on_dji/",
                  "title": "How to Disable RTH (Return to Home) Function on DJI Drones Due ...",
                  "snippet": "Is there a way to disable the RTH (Return to Home) function in such scenarios? Ideally, I'd like the drone to either hover in place or allow me to take full ...",
                  "ref_id": null,
                  "pub_date": 1716336000,
                  "attribution": "www.reddit.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/fpv/comments/15fl37c/fpv_drone_return_to_home_function/",
                  "title": "FPV Drone Return To Home Function - Reddit",
                  "snippet": "I've been wondering what's required to set up a return to home function in case of a connection failure or some other issue arising.",
                  "ref_id": null,
                  "pub_date": 1690848000,
                  "attribution": "www.reddit.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/diydrones/comments/139ef9g/best_way_to_find_lost_drone/",
                  "title": "best way to find lost drone ? : r/diydrones - Reddit",
                  "snippet": "Often people will return a drone they find. You could even write a note on the sd card txt offering a small reward. Figure if someone has found ...",
                  "ref_id": null,
                  "pub_date": 1683331200,
                  "attribution": "www.reddit.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "www.amazon.co.uk",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.uk/CHUBORY-Camera-Control-Brushless-X10-TEST-240911-1/dp/B0DGQ6J9Y2",
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min ...",
                  "snippet": "With GPS system, the drone will automatically return home when battery is low, signal is lost or you press One Key Return, free your minds of losing the drone.",
                  "ref_id": null,
                  "pub_date": null,
                  "attribution": "www.amazon.co.uk"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "manuals.plus",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf",
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
                  "ref_id": null,
                  "pub_date": 1646681991,
                  "attribution": "manuals.plus"
                }
              ]
            }
          ],
          "debug_sonic_thread_id": "thread_684dec75a19c800387a8363e7805ef62",
          "search_turns_count": 1,
          "search_source": "composer_auto",
          "client_reported_search_source": "composer_auto",
          "reasoning_status": "is_reasoning",
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "8c0cbd5a-28bc-45a6-8609-307b7db1977f",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "8c0cbd5a-28bc-45a6-8609-307b7db1977f",
      "children": [
        "9d6aac13-092f-42bd-ad49-d324904c0cd6"
      ]
    },
    "9d6aac13-092f-42bd-ad49-d324904c0cd6": {
      "id": "9d6aac13-092f-42bd-ad49-d324904c0cd6",
      "message": {
        "id": "9d6aac13-092f-42bd-ad49-d324904c0cd6",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749937310.360604,
        "update_time": null,
        "content": {
          "content_type": "reasoning_recap",
          "content": "思考時間: 4 秒"
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "reasoning_status": "reasoning_ended",
          "finished_duration_sec": 4,
          "message_type": null,
          "model_slug": "gpt-4o",
          "default_model_slug": "gpt-4o",
          "parent_id": "6abe35b4-234a-4bb5-b363-e7f02bca1dbd",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "6abe35b4-234a-4bb5-b363-e7f02bca1dbd",
      "children": [
        "d50650b8-fcea-4525-b07b-6122ec935f3a"
      ]
    },
    "d50650b8-fcea-4525-b07b-6122ec935f3a": {
      "id": "d50650b8-fcea-4525-b07b-6122ec935f3a",
      "message": {
        "id": "d50650b8-fcea-4525-b07b-6122ec935f3a",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {
            "real_author": "tool:web",
            "sonicberry_model_id": "alpha.sonicberry_2s_p",
            "source": "sonic_tool"
          }
        },
        "create_time": 1749937304.064684,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "F89は**GPS非搭載のWi‑Fiドローン**であるため、一般的なGPSを使った「Return to Home（RTH）」機能は**含まれていません** citeturn0search17turn0search3。以下、詳しく説明します。\n\n---\n\n## 🚫 なぜ F89 に自動帰還（RTH）がないのか？\n\n- F89は **GPSを搭載せず**、Wi‑Fiによるリアルタイム映像と制御を主目的にしたエントリーモデルです citeturn0search17turn0search3。\n- マニュアルでも“**Wi‑Fi制御距離は約120 m**”と記載があるのみで、GPSホームポイント設定やRTH関連の記述は一切ありません citeturn0search17。\n\n---\n\n## ✈️ RTHの代替策\n\n### 1. 手動操作による帰還  \n- リモコンのスティックで手動操縦し、自力で離陸地点まで戻す方法です。Wi‑Fiが繋がる範囲（約120 m）以内で行ってください。\n\n### 2. 安定した映像を保つためのコツ  \n- **高い場所で飛ばす**ことで、アンテナの見通しが良くなり、遠くまで映像が途切れにくくなります。  \n- 飛行中はWi‑Fi接続状況に注意し、もし映像が乱れるようであれば、**すぐに手動で戻す**ことが安全です。\n\n---\n\n## ✅ どうしてもRTHが必要なら…\n\nGPS搭載・自動帰還可能なモデルへのアップグレードをお勧めします。CHUBORYでは以下のようなGPSドローンが存在します：\n\n- **X10 Pro**：自動帰還機能あり citeturn0search1turn0search14  \n- **X11 Pro**：GPS＋RTH搭載 citeturn0search11  \n\nこれらはGPSによってホームポイントを「記録→飛行→帰還」という流れが可能なモデルです。\n\n---\n\n## ✏️ まとめ\n\n|項目|F89|GPS搭載モデル（例：X10 Pro, X11 Pro）|\n|--|--|--|\n|GPS搭載|❌|✅|\n|自動帰還（RTH）|❌|✅|\n|Wi‑Fi制御距離|約120 m|用途により異なる（長距離・安定）|\n\n- **F89はGPS非搭載**なので、**自動帰還なし**。手動での帰還がメインです。  \n- 自動帰還が必須なら、GPS付きの別モデル（X10 Pro, X11 Pro等）を検討してください。\n\n---\n\n## 🔧 次にできること\n\n- 手動で飛ばす際、**Wi‑Fi映像の状態に注視しながら**飛行・帰還してください。  \n- GPS搭載モデルに興味があれば、価格や仕様の比較、おすすめ機種を紹介できます！ご希望があれば教えてください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "content_references": [
            {
              "matched_text": "F89は**GPS非搭載のWi‑Fiドローン**であるため、一般的なGPSを使った「Return to Home（RTH）」機能は**含まれていません**",
              "start_idx": 0,
              "end_idx": 77,
              "safe_urls": [],
              "refs": [],
              "alt": "F89は**GPS非搭載のWi‑Fiドローン**であるため、一般的なGPSを使った「Return to Home（RTH）」機能は**含まれていません**",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "0-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search17turn0search3",
              "start_idx": 78,
              "end_idx": 111,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "How to Disable RTH (Return to Home) Function on DJI Drones Due ...",
                  "url": "https://www.reddit.com/r/dji/comments/1cy95aj/how_to_disable_rth_return_to_home_function_on_dji/?utm_source=chatgpt.com",
                  "pub_date": 1716336000,
                  "snippet": "Is there a way to disable the RTH (Return to Home) function in such scenarios? Ideally, I'd like the drone to either hover in place or allow me to take full ...",
                  "attribution_segments": [
                    "0-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "How to use DJI's Return to Home (RTH) Safely",
                      "url": "https://store.dji.com/content/how-to-use-the-djis-return-to-home?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "DJI's Return to Home is an effective backup tool that can save your drone in the case of signal loss or low battery, but you need to make sure it's set up ...",
                      "attribution": "store.dji.com"
                    },
                    {
                      "title": "FPV Drone Return To Home Function - Reddit",
                      "url": "https://www.reddit.com/r/fpv/comments/15fl37c/fpv_drone_return_to_home_function/?utm_source=chatgpt.com",
                      "pub_date": 1690848000,
                      "snippet": "I've been wondering what's required to set up a return to home function in case of a connection failure or some other issue arising.",
                      "attribution": "reddit.com"
                    }
                  ],
                  "refs": [
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
                      "ref_index": 13
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "reddit.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                  "pub_date": 1646681991,
                  "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
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
                },
                {
                  "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                  "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
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
              "matched_text": "F89は **GPSを搭載せず**、Wi‑Fiによるリアルタイム映像と制御を主目的にしたエントリーモデルです",
              "start_idx": 163,
              "end_idx": 217,
              "safe_urls": [],
              "refs": [],
              "alt": "F89は **GPSを搭載せず**、Wi‑Fiによるリアルタイム映像と制御を主目的にしたエントリーモデルです",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "111-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search17turn0search3",
              "start_idx": 218,
              "end_idx": 251,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [],
              "fallback_items": [
                {
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                  "pub_date": 1646681991,
                  "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
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
                },
                {
                  "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                  "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
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
              "matched_text": "マニュアルでも“**Wi‑Fi制御距離は約120 m**”と記載があるのみで、GPSホームポイント設定やRTH関連の記述は一切ありません",
              "start_idx": 255,
              "end_idx": 323,
              "safe_urls": [],
              "refs": [],
              "alt": "マニュアルでも“**Wi‑Fi制御距離は約120 m**”と記載があるのみで、GPSホームポイント設定やRTH関連の記述は一切ありません",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "251-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search17",
              "start_idx": 324,
              "end_idx": 344,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                  "pub_date": 1646681991,
                  "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
                  "attribution_segments": [
                    "251-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "How to Disable RTH (Return to Home) Function on DJI Drones Due ...",
                      "url": "https://www.reddit.com/r/dji/comments/1cy95aj/how_to_disable_rth_return_to_home_function_on_dji/?utm_source=chatgpt.com",
                      "pub_date": 1716336000,
                      "snippet": "Is there a way to disable the RTH (Return to Home) function in such scenarios? Ideally, I'd like the drone to either hover in place or allow me to take full ...",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "When Your Drone will Return to Home (RTH) and When it Might Not…",
                      "url": "https://mavicpilots.com/threads/when-your-drone-will-return-to-home-rth-and-when-it-might-not%E2%80%A6.124995/?utm_source=chatgpt.com",
                      "pub_date": 1650672000,
                      "snippet": "The FLY App and the Controller will not engage the RTH routine if the Drone is within 20-meters of its Home Point. I also tried running the ...",
                      "attribution": "mavicpilots.com"
                    },
                    {
                      "title": "How to use DJI's Return to Home (RTH) Safely",
                      "url": "https://store.dji.com/content/how-to-use-the-djis-return-to-home?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "DJI's Return to Home is an effective backup tool that can save your drone in the case of signal loss or low battery, but you need to make sure it's set up ...",
                      "attribution": "store.dji.com"
                    },
                    {
                      "title": "FPV Drone Return To Home Function - Reddit",
                      "url": "https://www.reddit.com/r/fpv/comments/15fl37c/fpv_drone_return_to_home_function/?utm_source=chatgpt.com",
                      "pub_date": 1690848000,
                      "snippet": "I've been wondering what's required to set up a return to home function in case of a connection failure or some other issue arising.",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "Do THIS *BEFORE* pressing RETURN TO HOME on your drone!",
                      "url": "https://www.youtube.com/watch?v=MMcLVMxrp-k&utm_source=chatgpt.com",
                      "pub_date": 1677542400,
                      "snippet": "... home 6:48 Set the appropriate Auto RTH height 8:06 Make sure your drone will auto land somewhere clear 8:50 Consider only partially using RTH ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "best way to find lost drone ? : r/diydrones - Reddit",
                      "url": "https://www.reddit.com/r/diydrones/comments/139ef9g/best_way_to_find_lost_drone/?utm_source=chatgpt.com",
                      "pub_date": 1683331200,
                      "snippet": "Often people will return a drone they find. You could even write a note on the sd card txt offering a small reward. Figure if someone has found ...",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "All Products - chubory",
                      "url": "https://chubory.com/collections?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "It's an all-function drone for beginner and kids. You can capture 120°Wide-angle 4K UHD photos and videos at the location you want. F89 has FPV real-t...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "CHUBORY X11 Pro GPS Drones with 90+ Mins long flight time , 3 ...",
                      "url": "https://chubory.com/products/chubory-x11-pro-gps-drones-with-90-mins-long-flight-time-3-axis-gimbal-drones-with-camera-for-adults-4k-uhd-camera-anti-shake-gps-auto-return-home-brushless-motor-all-functions-drones-for-beginners-professionals-3-batteries-bag-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "We provide with 3 batteries of 90 minutes flight time. This is a drone with GPS return home. And we provide with one shoulder bag for each drone, it is ...",
                      "attribution": "chubory.com"
                    }
                  ],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 2
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 13
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 10
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 16
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 1
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "manuals.plus"
                }
              ],
              "fallback_items": [
                {
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                  "pub_date": 1646681991,
                  "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
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
              "matched_text": "リモコンのスティックで手動操縦し、自力で離陸地点まで戻す方法です。Wi‑Fiが繋がる範囲（約120 m）以内で行ってください。",
              "start_idx": 388,
              "end_idx": 451,
              "safe_urls": [],
              "refs": [],
              "alt": "リモコンのスティックで手動操縦し、自力で離陸地点まで戻す方法です。Wi‑Fiが繋がる範囲（約120 m）以内で行ってください。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "344-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**高い場所で飛ばす**ことで、アンテナの見通しが良くなり、遠くまで映像が途切れにくくなります。",
              "start_idx": 479,
              "end_idx": 527,
              "safe_urls": [],
              "refs": [],
              "alt": "**高い場所で飛ばす**ことで、アンテナの見通しが良くなり、遠くまで映像が途切れにくくなります。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "344-1",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "飛行中はWi‑Fi接続状況に注意し、もし映像が乱れるようであれば、**すぐに手動で戻す**ことが安全です。",
              "start_idx": 532,
              "end_idx": 585,
              "safe_urls": [],
              "refs": [],
              "alt": "飛行中はWi‑Fi接続状況に注意し、もし映像が乱れるようであれば、**すぐに手動で戻す**ことが安全です。",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "344-2",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "GPS搭載・自動帰還可能なモデルへのアップグレードをお勧めします。CHUBORYでは以下のようなGPSドローンが存在します：",
              "start_idx": 613,
              "end_idx": 675,
              "safe_urls": [],
              "refs": [],
              "alt": "GPS搭載・自動帰還可能なモデルへのアップグレードをお勧めします。CHUBORYでは以下のようなGPSドローンが存在します：",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "344-3",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "**X10 Pro**：自動帰還機能あり",
              "start_idx": 679,
              "end_idx": 699,
              "safe_urls": [],
              "refs": [],
              "alt": "**X10 Pro**：自動帰還機能あり",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "344-4",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search1turn0search14",
              "start_idx": 700,
              "end_idx": 733,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "All Products - chubory",
                  "url": "https://chubory.com/collections?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "It's an all-function drone for beginner and kids. You can capture 120°Wide-angle 4K UHD photos and videos at the location you want. F89 has FPV real-t...",
                  "attribution_segments": [
                    "344-3",
                    "344-4"
                  ],
                  "supporting_websites": [
                    {
                      "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                      "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                      "pub_date": 1705622400,
                      "snippet": "... 1.1K views · 9:37. Go to channel · CHUBORY X10 PRO GPS Drone Operation Guidance Video. CHUBORY CHUM&PARTNER•16K views · 17:54. Go to channel ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min ...",
                      "url": "https://www.amazon.co.uk/CHUBORY-Camera-Control-Brushless-X10-TEST-240911-1/dp/B0DGQ6J9Y2?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "With GPS system, the drone will automatically return home when battery is low, signal is lost or you press One Key Return, free your minds of losing the drone.",
                      "attribution": "amazon.co.uk"
                    },
                    {
                      "title": "CHUBORY X11 Pro GPS Drones with 90+ Mins long flight time , 3 ...",
                      "url": "https://chubory.com/products/chubory-x11-pro-gps-drones-with-90-mins-long-flight-time-3-axis-gimbal-drones-with-camera-for-adults-4k-uhd-camera-anti-shake-gps-auto-return-home-brushless-motor-all-functions-drones-for-beginners-professionals-3-batteries-bag-?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "We provide with 3 batteries of 90 minutes flight time. This is a drone with GPS return home. And we provide with one shoulder bag for each drone, it is ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "Tutorial Videos-F89 - chubory",
                      "url": "https://chubory.com/pages/f89-tutorial-videos?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "... All Drones · Other Products · Blocks · Support · APP & Manual · Tutorial Videos · F89 · A77. About us. About us · Contact us · Home. /. Tutorial Videos-F89 ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "The Operation Guide of CHUBORY F89 - YouTube",
                      "url": "https://www.youtube.com/watch?v=4QivVMHKEBY&utm_source=chatgpt.com",
                      "pub_date": 1630713600,
                      "snippet": "Better then a68.? Whats the price on thid one. 12:13. Go to channel · How to fly drones for beginners. Jake Sloan•1.5M views.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY F89 Foldable Drone User Manual",
                      "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                      "pub_date": 1646681991,
                      "snippet": "Learn how to operate the CHU BORY F89 Foldable Drone with the F89 Operating Manual. Download the APP and watch the operation guide video before flight.",
                      "attribution": "manuals.plus"
                    },
                    {
                      "title": "The latest operation instruction video of CHUBORY F89 drone - YouTube",
                      "url": "https://www.youtube.com/watch?v=gN3Sw9CI2Q4&utm_source=chatgpt.com",
                      "pub_date": 1689206400,
                      "snippet": "Corrected the instructions for connecting the controller to the drone.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                      "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                      "pub_date": 1743897600,
                      "snippet": "CHUBORY F89 Drone Tutorial Video 2025-4-7. 907 views · 2 months ago ... Go to channel · Drone with Camera 1080P HD FPV Foldable Mini Drone ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "Chubory F89 Drone with Camera FPV 3 Batteries Case Folding ...",
                      "url": "https://www.ebay.com/itm/316895481019?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "The Chubory F89 Drone with Camera FPV is a ready-to-fly drone that comes with a remote control for easy operation. It features a 4K HD camera for high-quality ...",
                      "attribution": "ebay.com"
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
                      "ref_index": 11
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 3
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 17
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chubory.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "All Products - chubory",
                  "url": "https://chubory.com/collections?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "It's an all-function drone for beginner and kids. You can capture 120°Wide-angle 4K UHD photos and videos at the location you want. F89 has FPV real-t...",
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
                },
                {
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min ...",
                  "url": "https://www.amazon.co.uk/CHUBORY-Camera-Control-Brushless-X10-TEST-240911-1/dp/B0DGQ6J9Y2?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "With GPS system, the drone will automatically return home when battery is low, signal is lost or you press One Key Return, free your minds of losing the drone.",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 14
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
              "matched_text": "**X11 Pro**：GPS＋RTH搭載",
              "start_idx": 738,
              "end_idx": 759,
              "safe_urls": [],
              "refs": [],
              "alt": "**X11 Pro**：GPS＋RTH搭載",
              "prompt_text": null,
              "type": "attribution",
              "attributable_index": "733-0",
              "attributions": null,
              "attributions_debug": null
            },
            {
              "matched_text": "citeturn0search11",
              "start_idx": 760,
              "end_idx": 780,
              "safe_urls": [],
              "refs": [],
              "alt": null,
              "prompt_text": null,
              "type": "grouped_webpages",
              "items": [
                {
                  "title": "CHUBORY X11 Pro GPS Drones with 90+ Mins long flight time , 3 ...",
                  "url": "https://chubory.com/products/chubory-x11-pro-gps-drones-with-90-mins-long-flight-time-3-axis-gimbal-drones-with-camera-for-adults-4k-uhd-camera-anti-shake-gps-auto-return-home-brushless-motor-all-functions-drones-for-beginners-professionals-3-batteries-bag-?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "We provide with 3 batteries of 90 minutes flight time. This is a drone with GPS return home. And we provide with one shoulder bag for each drone, it is ...",
                  "attribution_segments": [
                    "733-0"
                  ],
                  "supporting_websites": [
                    {
                      "title": "All Products - chubory",
                      "url": "https://chubory.com/collections?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "It's an all-function drone for beginner and kids. You can capture 120°Wide-angle 4K UHD photos and videos at the location you want. F89 has FPV real-t...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "Do THIS *BEFORE* pressing RETURN TO HOME on your drone!",
                      "url": "https://www.youtube.com/watch?v=MMcLVMxrp-k&utm_source=chatgpt.com",
                      "pub_date": 1677542400,
                      "snippet": "... home 6:48 Set the appropriate Auto RTH height 8:06 Make sure your drone will auto land somewhere clear 8:50 Consider only partially using RTH ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                      "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                      "attribution": "amazon.com"
                    },
                    {
                      "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min ...",
                      "url": "https://www.amazon.co.uk/CHUBORY-Camera-Control-Brushless-X10-TEST-240911-1/dp/B0DGQ6J9Y2?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "With GPS system, the drone will automatically return home when battery is low, signal is lost or you press One Key Return, free your minds of losing the drone.",
                      "attribution": "amazon.co.uk"
                    },
                    {
                      "title": "How to Disable RTH (Return to Home) Function on DJI Drones Due ...",
                      "url": "https://www.reddit.com/r/dji/comments/1cy95aj/how_to_disable_rth_return_to_home_function_on_dji/?utm_source=chatgpt.com",
                      "pub_date": 1716336000,
                      "snippet": "Is there a way to disable the RTH (Return to Home) function in such scenarios? Ideally, I'd like the drone to either hover in place or allow me to take full ...",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "When Your Drone will Return to Home (RTH) and When it Might Not…",
                      "url": "https://mavicpilots.com/threads/when-your-drone-will-return-to-home-rth-and-when-it-might-not%E2%80%A6.124995/?utm_source=chatgpt.com",
                      "pub_date": 1650672000,
                      "snippet": "The FLY App and the Controller will not engage the RTH routine if the Drone is within 20-meters of its Home Point. I also tried running the ...",
                      "attribution": "mavicpilots.com"
                    },
                    {
                      "title": "How to use DJI's Return to Home (RTH) Safely",
                      "url": "https://store.dji.com/content/how-to-use-the-djis-return-to-home?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "DJI's Return to Home is an effective backup tool that can save your drone in the case of signal loss or low battery, but you need to make sure it's set up ...",
                      "attribution": "store.dji.com"
                    },
                    {
                      "title": "Chubory F89 Drone with Camera FPV 3 Batteries Case Folding ...",
                      "url": "https://www.ebay.com/itm/316895481019?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "The Chubory F89 Drone with Camera FPV is a ready-to-fly drone that comes with a remote control for easy operation. It features a 4K HD camera for high-quality ...",
                      "attribution": "ebay.com"
                    },
                    {
                      "title": "Chubory F89 Blue Micro Foldable Remote Control Ready To ... - eBay",
                      "url": "https://www.ebay.com/itm/335957158437?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "Chubory F89 Blue Micro Foldable Remote Control Ready To Fly Drone Set Ages 14+ ; Model · Chubory F89 ; Connectivity · Remote Control ; Condition · Used, See photos.",
                      "attribution": "ebay.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                      "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                      "pub_date": 1705622400,
                      "snippet": "... 1.1K views · 9:37. Go to channel · CHUBORY X10 PRO GPS Drone Operation Guidance Video. CHUBORY CHUM&PARTNER•16K views · 17:54. Go to channel ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "FPV Drone Return To Home Function - Reddit",
                      "url": "https://www.reddit.com/r/fpv/comments/15fl37c/fpv_drone_return_to_home_function/?utm_source=chatgpt.com",
                      "pub_date": 1690848000,
                      "snippet": "I've been wondering what's required to set up a return to home function in case of a connection failure or some other issue arising.",
                      "attribution": "reddit.com"
                    },
                    {
                      "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                      "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                      "pub_date": 1743897600,
                      "snippet": "CHUBORY F89 Drone Tutorial Video 2025-4-7. 907 views · 2 months ago ... Go to channel · Drone with Camera 1080P HD FPV Foldable Mini Drone ...",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "Tutorial Videos-F89 - chubory",
                      "url": "https://chubory.com/pages/f89-tutorial-videos?utm_source=chatgpt.com",
                      "pub_date": null,
                      "snippet": "... All Drones · Other Products · Blocks · Support · APP & Manual · Tutorial Videos · F89 · A77. About us. About us · Contact us · Home. /. Tutorial Videos-F89 ...",
                      "attribution": "chubory.com"
                    },
                    {
                      "title": "The latest operation instruction video of CHUBORY F89 drone - YouTube",
                      "url": "https://www.youtube.com/watch?v=gN3Sw9CI2Q4&utm_source=chatgpt.com",
                      "pub_date": 1689206400,
                      "snippet": "Corrected the instructions for connecting the controller to the drone.",
                      "attribution": "youtube.com"
                    },
                    {
                      "title": "The Operation Guide of CHUBORY F89 - YouTube",
                      "url": "https://www.youtube.com/watch?v=4QivVMHKEBY&utm_source=chatgpt.com",
                      "pub_date": 1630713600,
                      "snippet": "Better then a68.? Whats the price on thid one. 12:13. Go to channel · How to fly drones for beginners. Jake Sloan•1.5M views.",
                      "attribution": "youtube.com"
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
                      "ref_index": 1
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
                      "ref_index": 14
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 12
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 2
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 6
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 15
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 7
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
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 9
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 8
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 0
                    },
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 4
                    }
                  ],
                  "hue": null,
                  "attributions": null,
                  "attribution": "chubory.com"
                }
              ],
              "fallback_items": [
                {
                  "title": "CHUBORY X11 Pro GPS Drones with 90+ Mins long flight time , 3 ...",
                  "url": "https://chubory.com/products/chubory-x11-pro-gps-drones-with-90-mins-long-flight-time-3-axis-gimbal-drones-with-camera-for-adults-4k-uhd-camera-anti-shake-gps-auto-return-home-brushless-motor-all-functions-drones-for-beginners-professionals-3-batteries-bag-?utm_source=chatgpt.com",
                  "pub_date": null,
                  "snippet": "We provide with 3 batteries of 90 minutes flight time. This is a drone with GPS return home. And we provide with one shoulder bag for each drone, it is ...",
                  "attribution_segments": null,
                  "supporting_websites": [],
                  "refs": [
                    {
                      "turn_index": 0,
                      "ref_type": "search",
                      "ref_index": 11
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
              "start_idx": 1181,
              "end_idx": 1181,
              "safe_urls": [],
              "refs": [],
              "alt": "",
              "prompt_text": null,
              "type": "sources_footnote",
              "sources": [
                {
                  "title": "How to Disable RTH (Return to Home) Function on DJI Drones Due ...",
                  "url": "https://www.reddit.com/r/dji/comments/1cy95aj/how_to_disable_rth_return_to_home_function_on_dji/?utm_source=chatgpt.com",
                  "attribution": "reddit.com"
                },
                {
                  "title": "CHUBORY F89 Foldable Drone User Manual",
                  "url": "https://manuals.plus/chubory/f89-foldable-drone-manual-pdf?utm_source=chatgpt.com",
                  "attribution": "manuals.plus"
                },
                {
                  "title": "All Products - chubory",
                  "url": "https://chubory.com/collections?utm_source=chatgpt.com",
                  "attribution": "chubory.com"
                }
              ],
              "has_images": false
            }
          ],
          "safe_urls": [],
          "search_result_groups": [
            {
              "type": "search_result_group",
              "domain": "youtube.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=gN3Sw9CI2Q4&utm_source=chatgpt.com",
                  "title": "The latest operation instruction video of CHUBORY F89 drone - YouTube",
                  "snippet": "Corrected the instructions for connecting the controller to the drone.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 0
                  },
                  "pub_date": 1689206400,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=4QivVMHKEBY&utm_source=chatgpt.com",
                  "title": "The Operation Guide of CHUBORY F89 - YouTube",
                  "snippet": "Better then a68.? Whats the price on thid one. 12:13. Go to channel · How to fly drones for beginners. Jake Sloan•1.5M views.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 4
                  },
                  "pub_date": 1630713600,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=lwCwIXPgFfw&utm_source=chatgpt.com",
                  "title": "CHUBORY F89 Drone Operation Instruction Video ... - YouTube",
                  "snippet": "... 1.1K views · 9:37. Go to channel · CHUBORY X10 PRO GPS Drone Operation Guidance Video. CHUBORY CHUM&PARTNER•16K views · 17:54. Go to channel ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 5
                  },
                  "pub_date": 1705622400,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=8Cwc7GwnK9E&utm_source=chatgpt.com",
                  "title": "CHUBORY F89 Drone Tutorial Video 2025-4-7 - YouTube",
                  "snippet": "CHUBORY F89 Drone Tutorial Video 2025-4-7. 907 views · 2 months ago ... Go to channel · Drone with Camera 1080P HD FPV Foldable Mini Drone ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 9
                  },
                  "pub_date": 1743897600,
                  "attribution": "youtube.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.youtube.com/watch?v=MMcLVMxrp-k&utm_source=chatgpt.com",
                  "title": "Do THIS *BEFORE* pressing RETURN TO HOME on your drone!",
                  "snippet": "... home 6:48 Set the appropriate Auto RTH height 8:06 Make sure your drone will auto land somewhere clear 8:50 Consider only partially using RTH ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 10
                  },
                  "pub_date": 1677542400,
                  "attribution": "youtube.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "mavicpilots.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://mavicpilots.com/threads/when-your-drone-will-return-to-home-rth-and-when-it-might-not%E2%80%A6.124995/?utm_source=chatgpt.com",
                  "title": "When Your Drone will Return to Home (RTH) and When it Might Not…",
                  "snippet": "The FLY App and the Controller will not engage the RTH routine if the Drone is within 20-meters of its Home Point. I also tried running the ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 2
                  },
                  "pub_date": 1650672000,
                  "attribution": "mavicpilots.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "amazon.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.com/Brushless-Beginners-60-Quadcopter-120%C2%B0Wide-Angle-F89-US-250212-3/dp/B0DNZ3G1WM?utm_source=chatgpt.com",
                  "title": "Brushless Super Endurance Foldable Drone with Camera for ...",
                  "snippet": "Foldable drone with camera for beginners. 60+ min flight time, WiFi FPV quadcopter with 120°wide-angle 4K HD camera, brushless motor.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 3
                  },
                  "pub_date": null,
                  "attribution": "amazon.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "dji.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://store.dji.com/content/how-to-use-the-djis-return-to-home?utm_source=chatgpt.com",
                  "title": "How to use DJI's Return to Home (RTH) Safely",
                  "snippet": "DJI's Return to Home is an effective backup tool that can save your drone in the case of signal loss or low battery, but you need to make sure it's set up ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 6
                  },
                  "pub_date": null,
                  "attribution": "dji.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "ebay.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.ebay.com/itm/335957158437?utm_source=chatgpt.com",
                  "title": "Chubory F89 Blue Micro Foldable Remote Control Ready To ... - eBay",
                  "snippet": "Chubory F89 Blue Micro Foldable Remote Control Ready To Fly Drone Set Ages 14+ ; Model · Chubory F89 ; Connectivity · Remote Control ; Condition · Used, See photos.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 7
                  },
                  "pub_date": null,
                  "attribution": "ebay.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.ebay.com/itm/316895481019?utm_source=chatgpt.com",
                  "title": "Chubory F89 Drone with Camera FPV 3 Batteries Case Folding ...",
                  "snippet": "The Chubory F89 Drone with Camera FPV is a ready-to-fly drone that comes with a remote control for easy operation. It features a 4K HD camera for high-quality ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 15
                  },
                  "pub_date": null,
                  "attribution": "ebay.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "chubory.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://chubory.com/pages/f89-tutorial-videos?utm_source=chatgpt.com",
                  "title": "Tutorial Videos-F89 - chubory",
                  "snippet": "... All Drones · Other Products · Blocks · Support · APP & Manual · Tutorial Videos · F89 · A77. About us. About us · Contact us · Home. /. Tutorial Videos-F89 ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 8
                  },
                  "pub_date": null,
                  "attribution": "chubory.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "reddit.com",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/fpv/comments/15fl37c/fpv_drone_return_to_home_function/?utm_source=chatgpt.com",
                  "title": "FPV Drone Return To Home Function - Reddit",
                  "snippet": "I've been wondering what's required to set up a return to home function in case of a connection failure or some other issue arising.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 13
                  },
                  "pub_date": 1690848000,
                  "attribution": "reddit.com"
                },
                {
                  "type": "search_result",
                  "url": "https://www.reddit.com/r/diydrones/comments/139ef9g/best_way_to_find_lost_drone/?utm_source=chatgpt.com",
                  "title": "best way to find lost drone ? : r/diydrones - Reddit",
                  "snippet": "Often people will return a drone they find. You could even write a note on the sd card txt offering a small reward. Figure if someone has found ...",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 16
                  },
                  "pub_date": 1683331200,
                  "attribution": "reddit.com"
                }
              ]
            },
            {
              "type": "search_result_group",
              "domain": "amazon.co.uk",
              "entries": [
                {
                  "type": "search_result",
                  "url": "https://www.amazon.co.uk/CHUBORY-Camera-Control-Brushless-X10-TEST-240911-1/dp/B0DGQ6J9Y2?utm_source=chatgpt.com",
                  "title": "CHUBORY X10 PRO GPS Drone with Camera for Adults 4K UHD, 90 Min ...",
                  "snippet": "With GPS system, the drone will automatically return home when battery is low, signal is lost or you press One Key Return, free your minds of losing the drone.",
                  "ref_id": {
                    "turn_index": 0,
                    "ref_type": "search",
                    "ref_index": 14
                  },
                  "pub_date": null,
                  "attribution": "amazon.co.uk"
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
          "parent_id": "9d6aac13-092f-42bd-ad49-d324904c0cd6",
          "request_id": "94fcfe39aad1d004-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "9d6aac13-092f-42bd-ad49-d324904c0cd6",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "d50650b8-fcea-4525-b07b-6122ec935f3a",
  "plugin_ids": null,
  "conversation_id": "684dec5a-2a24-8003-8f40-e6c5610c2223",
  "conversation_template_id": null,
  "gizmo_id": null,
  "gizmo_type": null,
  "is_archived": false,
  "is_starred": null,
  "safe_urls": [
    "https://qiita.com/kanekoh/items/6fe5ca3dd1186117d36a",
    "https://a-work-jobs.com/",
    "https://a-work.co.jp/",
    "https://www.city.uto.lg.jp/article/view/1290/12727.html"
  ],
  "blocked_urls": [],
  "default_model_slug": "gpt-4o",
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
  "id": "684dec5a-2a24-8003-8f40-e6c5610c2223"
}
```