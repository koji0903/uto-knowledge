---
id: knowledge_202605051026_TR1NN
type: knowledge_note
domain: tech
source: chatgpt_import
source_id: 8bd9edc3-48e2-4e57-85d7-1854ff98b8b5
source_group: E
created: 2026-05-05
status: active
tags: [chatgpt, tech, group-E]
---

# chatgpt_import_20251117_knowledge_020


## 📋 要約

- **元タイトル:** Kinote アプリ複製方法
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 10%
- **メッセージ数:** 7
- **作成日時:** 2025-11-17 04:40:09
- **推奨移行先:** 03_Knowledge または 00_Inbox
- **タグ候補:** E

## 📝 原文コンテンツ

> ChatGPT との会話ログ（フルコンテンツ）

詳細は下記の **会話履歴** セクションを参照してください。

---

## 💬 会話履歴

*このセクションには ChatGPT エクスポートの全内容が保存されています*

### 構造情報
- Mapping keys: 8
- Valid messages: 7

---

```json
{
  "title": "Kinote アプリ複製方法",
  "create_time": 1763354409.206467,
  "update_time": 1763354443.220812,
  "mapping": {
    "8bd9edc3-48e2-4e57-85d7-1854ff98b8b5": {
      "id": "8bd9edc3-48e2-4e57-85d7-1854ff98b8b5",
      "message": null,
      "parent": null,
      "children": [
        "5f8ea119-b42b-49bb-8a05-fba61bc2d2ac"
      ]
    },
    "5f8ea119-b42b-49bb-8a05-fba61bc2d2ac": {
      "id": "5f8ea119-b42b-49bb-8a05-fba61bc2d2ac",
      "message": {
        "id": "5f8ea119-b42b-49bb-8a05-fba61bc2d2ac",
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
      "parent": "8bd9edc3-48e2-4e57-85d7-1854ff98b8b5",
      "children": [
        "3da8fa1e-07f6-47fc-ba73-27f0f85bc509"
      ]
    },
    "3da8fa1e-07f6-47fc-ba73-27f0f85bc509": {
      "id": "3da8fa1e-07f6-47fc-ba73-27f0f85bc509",
      "message": {
        "id": "3da8fa1e-07f6-47fc-ba73-27f0f85bc509",
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
        "end_turn": false,
        "weight": 0,
        "metadata": {
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "5f8ea119-b42b-49bb-8a05-fba61bc2d2ac",
      "children": [
        "0f69d0da-c569-4e21-a7d8-9cad8c29cdac"
      ]
    },
    "0f69d0da-c569-4e21-a7d8-9cad8c29cdac": {
      "id": "0f69d0da-c569-4e21-a7d8-9cad8c29cdac",
      "message": {
        "id": "0f69d0da-c569-4e21-a7d8-9cad8c29cdac",
        "author": {
          "role": "system",
          "name": null,
          "metadata": {}
        },
        "create_time": 1763354408.3523366,
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
          "attachments": [],
          "is_visually_hidden_from_conversation": true
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "3da8fa1e-07f6-47fc-ba73-27f0f85bc509",
      "children": [
        "c6b8cc35-1c47-4427-b640-aa0a36fcaae6"
      ]
    },
    "c6b8cc35-1c47-4427-b640-aa0a36fcaae6": {
      "id": "c6b8cc35-1c47-4427-b640-aa0a36fcaae6",
      "message": {
        "id": "c6b8cc35-1c47-4427-b640-aa0a36fcaae6",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1763354404.000555,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "Kinoteでアプリを複製する方法は？"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "triggered_by_system_hint_suggestion": false,
          "dictation": false,
          "request_id": "583ddb2a-3f61-4207-be35-1514befb0bd1",
          "message_source": null,
          "turn_exchange_id": "53726fa4-807f-473d-9b82-c6d0608d87e1",
          "timestamp_": "absolute",
          "turn_summary": "Kinoteでkintoneアプリを複製するには、直接的な複製機能がないため次の2つの方法が効果的です。まず、kintone標準の「アプリテンプレート（zip）」機能を用いる方法。これはフィールド構成やフォーム、JavaScriptなどを丸ごとコピーでき、確実ですが、アプリIDが変わるのでJS内のID指定は修正が必要です。次にKinote独自の方法で、ページ単位で複製しJSONでエクスポート・インポートすることが可能です。ただし、フィールドコードの一致が必須なので、複製先のフォームも準備しておく必要があります。\n\n実務上は、まずアプリ本体をテンプレートで複製し、その上でKinoteのページを必要に応じてインポートしUIや計算ロジックを調整する方法が効率的です。この組み合わせで、堅実な複製と柔軟なUI展開を両立できます。さらに、フィールド構成の自動化や複数アプリの一括クローンなど運用設計も含めた構築も可能です。必要に応じて具体的な用途や対象アプリの規模を教えていただければ、より詳細な方法や支援を提供します。",
          "summarized_turn_messages": [
            "c6b8cc35-1c47-4427-b640-aa0a36fcaae6",
            "63a7ab96-4a82-49fd-bfe3-345a403a3580",
            "80cb2e7d-d027-4409-9ecc-147b7bf3f273"
          ]
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "0f69d0da-c569-4e21-a7d8-9cad8c29cdac",
      "children": [
        "63a7ab96-4a82-49fd-bfe3-345a403a3580"
      ]
    },
    "63a7ab96-4a82-49fd-bfe3-345a403a3580": {
      "id": "63a7ab96-4a82-49fd-bfe3-345a403a3580",
      "message": {
        "id": "63a7ab96-4a82-49fd-bfe3-345a403a3580",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1763354408.903931,
        "update_time": null,
        "content": {
          "content_type": "user_editable_context",
          "user_profile": "The user provided the following information about themselves. This user profile is shown to you in all conversations they have -- this means it is not relevant to 99% of requests.\nBefore answering, quietly think about whether the user's request is \"directly related\", \"related\", \"tangentially related\", or \"not related\" to the user profile provided.\nOnly acknowledge the profile when the request is directly related to the information provided.\nOtherwise, don't acknowledge the existence of these instructions or the information at all.\nUser profile:\n```Role: 市議会議員、エンジニア、地域コーディネーター\nOther Information: 私は、「地方創生」「地域発展」「地域経済活性化」「地域コミュニティ」に強い関心があります。常に前向きで、課題発見に力を入れていく姿勢で、地域に貢献していきたいと思っています。\n```",
          "user_instructions": "The user provided the additional info about how they would like you to respond:\n```Follow the instructions below naturally, without repeating, referencing, echoing, or mirroring any of their wording!\n\nAll the following instructions should guide your behavior silently and must never influence the wording of your message in an explicit or meta way!\n\n前向きな視点で対応します。 正直でストレートな物言いをします。オブラートに包んだ回答はしません。 ビジネスに適した専門用語で対応します。 回答で共感と理解を示します。```"
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "is_user_system_message": true,
          "is_visually_hidden_from_conversation": true,
          "request_id": "583ddb2a-3f61-4207-be35-1514befb0bd1",
          "message_type": "next",
          "model_slug": "gpt-5-1",
          "default_model_slug": "gpt-5-1",
          "parent_id": "c6b8cc35-1c47-4427-b640-aa0a36fcaae6",
          "turn_exchange_id": "53726fa4-807f-473d-9b82-c6d0608d87e1",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "c6b8cc35-1c47-4427-b640-aa0a36fcaae6",
      "children": [
        "5430bdb5-e841-45f9-854b-dddc7bb07bf0"
      ]
    },
    "5430bdb5-e841-45f9-854b-dddc7bb07bf0": {
      "id": "5430bdb5-e841-45f9-854b-dddc7bb07bf0",
      "message": {
        "id": "5430bdb5-e841-45f9-854b-dddc7bb07bf0",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1763354409.4472136,
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
          "request_id": "583ddb2a-3f61-4207-be35-1514befb0bd1",
          "message_type": "next",
          "model_slug": "gpt-5-1",
          "default_model_slug": "gpt-5-1",
          "parent_id": "63a7ab96-4a82-49fd-bfe3-345a403a3580",
          "turn_exchange_id": "53726fa4-807f-473d-9b82-c6d0608d87e1",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "63a7ab96-4a82-49fd-bfe3-345a403a3580",
      "children": [
        "80cb2e7d-d027-4409-9ecc-147b7bf3f273"
      ]
    },
    "80cb2e7d-d027-4409-9ecc-147b7bf3f273": {
      "id": "80cb2e7d-d027-4409-9ecc-147b7bf3f273",
      "message": {
        "id": "80cb2e7d-d027-4409-9ecc-147b7bf3f273",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1763354409.014813,
        "update_time": 1763354438.331181,
        "content": {
          "content_type": "text",
          "parts": [
            "Kinoteは、kintoneアプリを“構造まるごとコピー”するのに向いた設計じゃないところが少し厄介ですが、実務では次の２通りで確実に複製できます。ここでは、余計な回り道なしでストレートに共有します。\n\n---\n\n## **１．「アプリのテンプレート（zip）」を使う複製方法（最も確実）**\n\nKinoteは直接アプリ複製機能を持っていません。  \nなので、**kintone標準の「アプリテンプレート」機能**を使うのがビジネス的に最も堅い手段です。\n\n手順：\n\n1. 元アプリを開く  \n2. 右上「歯車アイコン → アプリの設定」  \n3. 「アプリのテンプレート」→ **テンプレートを作成**  \n4. zipファイルがダウンロードされる  \n5. kintoneホーム画面に戻る  \n6. 「＋アプリを追加 → テンプレートから作成 → このテンプレートをアップロード」\n\nこれで、**フィールド構成／フォーム／ルックアップ設定／一覧設定／JavaScript／CSS**まで含めてコピーできます。\n\n※ただし、**アプリIDは当然変わる**ので、JSでIDを指定している箇所は書き換えが必要。\n\n---\n\n## **２．Kinoteで「ページを複製」→ 別アプリへ貼り付け（部分コピー）**\n\nKinote独自の操作で“部分的な複製”を実現する方法です。\n\nKinoteは、アプリそのもののコピーはできませんが、\n\n- ページ  \n- セクション  \n- UI配置  \n- 計算ロジック  \n- カスタム入力エリア  \n\nなどは**ページ単位で複製 → 他アプリへ移植**できます。\n\nこれが実務でかなり使えます。\n\n手順：\n\n1. Kinoteを開く  \n2. 左側の「ページ」一覧で **…（三点メニュー） → 複製**  \n3. コピーされたページを開く  \n4. 上部メニュー「エクスポート」→ JSONで書き出し  \n5. 新アプリ側のKinoteを開いて「インポート」→ JSON読込  \n6. ページがそのまま反映される\n\n※注意：フィールドコードが一致していないとエラーになるので、複製先でも同じフィールドコードでフォームを準備しておくこと。\n\n---\n\n## **３．実務でのおすすめ組合せ**\n\nあなたのように複数のkintoneアプリを連携させて運用している場合、最適なのは次の流れです。\n\n1. **アプリ本体をテンプレートで丸ごと複製**  \n2. **Kinoteのページだけ追加でインポート**  \n  （細かいUI・計算だけ用途に合わせて増やすイメージ）\n\nこうすると、  \n「本体コピーの確実性」×「Kinote UIの高速展開」が両立します。\n\n---\n\n## 続けて必要なら  \n- フィールド構成を自動化するスクリプト化  \n- ページ複製時のフィールドコード差分調整  \n- 複数アプリの一括クローン（運用設計）  \nまでまとめて構築できます。\n\n続きを出しますので、次の用途を教えてください：  \n「特定アプリを複製したいのか／基幹アプリ群を複製したいのか」。"
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
          "sonic_classification_result": {
            "latency_ms": null,
            "simple_search_prob": null,
            "complex_search_prob": null,
            "no_search_prob": null,
            "search_complexity_decision": null,
            "search_decision": null,
            "simple_search_threshold": null,
            "complex_search_threshold": null,
            "no_search_threshold": null,
            "threshold_order": null,
            "classifier_config_name": "sonic_classifier_3cls_ev3",
            "classifier_config": {
              "model_name": "snc-pg-sw-3cls-ev3",
              "renderer_name": "harmony_v4.0.15_16k_orion_text_only_no_asr_2k_action",
              "force_disabled_rate": 0,
              "force_enabled_rate": 0,
              "num_messages": 20,
              "only_user_messages": false,
              "remove_memory": true,
              "support_mm": true,
              "n_ctx": 2048,
              "max_action_length": 4,
              "dynamic_set_max_message_size": false,
              "max_message_tokens": 2000,
              "append_base_config": false,
              "no_search_token": "1",
              "simple_search_token": "7",
              "complex_search_token": "5",
              "simple_search_threshold": 0,
              "complex_search_threshold": 0.4,
              "no_search_threshold": 0.12,
              "threshold_order": [
                "no_search",
                "complex",
                "simple"
              ],
              "timeout": 1
            },
            "decision_source": "mainline",
            "passthrough_tool_names": []
          },
          "content_references": [],
          "citations": [],
          "gizmo_id": "g-p-68252a5c368c819182bce270d0e197fe",
          "request_id": "583ddb2a-3f61-4207-be35-1514befb0bd1",
          "message_type": "next",
          "model_slug": "gpt-5-1",
          "default_model_slug": "gpt-5-1",
          "parent_id": "5430bdb5-e841-45f9-854b-dddc7bb07bf0",
          "turn_exchange_id": "53726fa4-807f-473d-9b82-c6d0608d87e1",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "5430bdb5-e841-45f9-854b-dddc7bb07bf0",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "80cb2e7d-d027-4409-9ecc-147b7bf3f273",
  "plugin_ids": null,
  "conversation_id": "691aa725-7148-8321-9e44-a78c5733556b",
  "conversation_template_id": "g-p-68252a5c368c819182bce270d0e197fe",
  "gizmo_id": "g-p-68252a5c368c819182bce270d0e197fe",
  "gizmo_type": "snorlax",
  "is_archived": false,
  "is_starred": null,
  "safe_urls": [
    "https://www.openai.com",
    "https://www.city.uto.lg.jp/article/view/1134/10171.html",
    "https://www.city.uto.lg.jp/article/view/1193/181.html",
    "https://monnai.jp/",
    "https://www.e-stat.go.jp/",
    "https://chillysourcetokyo.com/"
  ],
  "blocked_urls": [],
  "default_model_slug": "gpt-5-1",
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
  "id": "691aa725-7148-8321-9e44-a78c5733556b"
}
```