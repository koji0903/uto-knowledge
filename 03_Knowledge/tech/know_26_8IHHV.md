---
id: knowledge_202605051026_ANIHX
type: knowledge_note
domain: tech
source: chatgpt_import
source_id: d0dfd150-a7cb-44ad-a9c0-970f0d0e8a19
source_group: E
created: 2026-05-05
status: active
tags: [chatgpt, tech, group-E]
---

# chatgpt_import_20250609_knowledge_295


## 📋 要約

- **元タイトル:** 土黒功司 リサーチ依頼
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 33%
- **メッセージ数:** 9
- **作成日時:** 2025-06-09 21:02:39
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
  "title": "土黒功司 リサーチ依頼",
  "create_time": 1749502959.988803,
  "update_time": 1749503412.512544,
  "mapping": {
    "d0dfd150-a7cb-44ad-a9c0-970f0d0e8a19": {
      "id": "d0dfd150-a7cb-44ad-a9c0-970f0d0e8a19",
      "message": null,
      "parent": null,
      "children": [
        "d17a8eb5-64fe-4111-8eb5-18d192c77e70"
      ]
    },
    "d17a8eb5-64fe-4111-8eb5-18d192c77e70": {
      "id": "d17a8eb5-64fe-4111-8eb5-18d192c77e70",
      "message": {
        "id": "d17a8eb5-64fe-4111-8eb5-18d192c77e70",
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
      "parent": "d0dfd150-a7cb-44ad-a9c0-970f0d0e8a19",
      "children": [
        "87210773-e360-4a81-939e-57dc3136efdd"
      ]
    },
    "87210773-e360-4a81-939e-57dc3136efdd": {
      "id": "87210773-e360-4a81-939e-57dc3136efdd",
      "message": {
        "id": "87210773-e360-4a81-939e-57dc3136efdd",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749502958.9983668,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "熊本県宇土市に住む「土黒功司」をリサーチして人物像をまとめてください"
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
          "request_id": "94d392398ea29671-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "d17a8eb5-64fe-4111-8eb5-18d192c77e70",
      "children": [
        "6ebdd303-ad7d-469e-a902-2a9797ef72e9"
      ]
    },
    "6ebdd303-ad7d-469e-a902-2a9797ef72e9": {
      "id": "6ebdd303-ad7d-469e-a902-2a9797ef72e9",
      "message": {
        "id": "6ebdd303-ad7d-469e-a902-2a9797ef72e9",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749502964.217118,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "人物リサーチをご希望とのことですが、安全上の理由から、特定個人に関する情報の調査には制限があります。ご希望の「土黒功司」さんについて、どのような情報をお求めですか？（例：公的な活動、職業上の業績、メディア掲載など）また、その人物が公的に著名であるかどうかも教えていただけますか？"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "87210773-e360-4a81-939e-57dc3136efdd",
          "request_id": "94d392398ea29671-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "87210773-e360-4a81-939e-57dc3136efdd",
      "children": [
        "0f78cf3e-7539-467d-a3c3-bfda6eb99b39"
      ]
    },
    "0f78cf3e-7539-467d-a3c3-bfda6eb99b39": {
      "id": "0f78cf3e-7539-467d-a3c3-bfda6eb99b39",
      "message": {
        "id": "0f78cf3e-7539-467d-a3c3-bfda6eb99b39",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1749502964.217359,
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
          "parent_id": "6ebdd303-ad7d-469e-a902-2a9797ef72e9",
          "request_id": "94d392398ea29671-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "6ebdd303-ad7d-469e-a902-2a9797ef72e9",
      "children": [
        "374456a3-f259-44e3-a3e1-4c15ba9722ce"
      ]
    },
    "374456a3-f259-44e3-a3e1-4c15ba9722ce": {
      "id": "374456a3-f259-44e3-a3e1-4c15ba9722ce",
      "message": {
        "id": "374456a3-f259-44e3-a3e1-4c15ba9722ce",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749503018.519531,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "市議会議員という公的な立場の人です。公的な活動をメインにリサーチして、そこから見える人物像を解析して"
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
          "request_id": "94d393ae6e4b9671-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "0f78cf3e-7539-467d-a3c3-bfda6eb99b39",
      "children": [
        "2cff0bc8-08ac-4300-8de7-f98577674728"
      ]
    },
    "2cff0bc8-08ac-4300-8de7-f98577674728": {
      "id": "2cff0bc8-08ac-4300-8de7-f98577674728",
      "message": {
        "id": "2cff0bc8-08ac-4300-8de7-f98577674728",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749503027.05768,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "承知しました。熊本県宇土市の市議会議員である土黒功司氏について、公的な活動を中心にリサーチし、そこから人物像を分析します。公式情報や報道、議会活動記録などを確認し、どのような政策姿勢や地域貢献があるかを明らかにします。調査が完了次第、詳細をご報告いたします。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "374456a3-f259-44e3-a3e1-4c15ba9722ce",
          "request_id": "94d393ae6e4b9671-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "374456a3-f259-44e3-a3e1-4c15ba9722ce",
      "children": [
        "c223e09e-246d-489d-8cb9-6f7fcf3e7f77"
      ]
    },
    "c223e09e-246d-489d-8cb9-6f7fcf3e7f77": {
      "id": "c223e09e-246d-489d-8cb9-6f7fcf3e7f77",
      "message": {
        "id": "c223e09e-246d-489d-8cb9-6f7fcf3e7f77",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749503019.736015,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "json",
          "response_format_name": null,
          "text": "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"承知しました。熊本県宇土市の市議会議員である土黒功司氏について、公的な活動を中心にリサーチし、そこから人物像を分析します。公式情報や報道、議会活動記録などを確認し、どのような政策姿勢や地域貢献があるかを明らかにします。調査が完了次第、詳細をご報告いたします。\",\n  \"title\": \"熊本県宇土市議会議員・土黒功司の公的活動と人物像\",\n  \"prompt\": \"熊本県宇土市の市議会議員である土黒功司氏について、公的な活動を中心に調査し、そこから見える人物像を分析してください。議会での発言や提出した議案、委員会活動、所属政党や政治姿勢、地域貢献の実績、選挙での公約や支持基盤などの情報を含めてください。市議会の公式記録、選挙関連資料、報道、公式サイトやSNSなどの公的なソースを優先して参照してください。結果はわかりやすく整理し、必要に応じて表や見出しを使ってください。\"\n}"
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
          "parent_id": "2cff0bc8-08ac-4300-8de7-f98577674728",
          "request_id": "94d393ae6e4b9671-KIX",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "2cff0bc8-08ac-4300-8de7-f98577674728",
      "children": [
        "dcec19f7-4138-49af-8501-30d529b68c73"
      ]
    },
    "dcec19f7-4138-49af-8501-30d529b68c73": {
      "id": "dcec19f7-4138-49af-8501-30d529b68c73",
      "message": {
        "id": "dcec19f7-4138-49af-8501-30d529b68c73",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1749503027.057901,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "熊本県宇土市議会議員・土黒功司の公的活動と人物像",
          "async_task_prompt": "熊本県宇土市の市議会議員である土黒功司氏について、公的な活動を中心に調査し、そこから見える人物像を分析してください。議会での発言や提出した議案、委員会活動、所属政党や政治姿勢、地域貢献の実績、選挙での公約や支持基盤などの情報を含めてください。市議会の公式記録、選挙関連資料、報道、公式サイトやSNSなどの公的なソースを優先して参照してください。結果はわかりやすく整理し、必要に応じて表や見出しを使ってください。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "熊本県宇土市議会議員・土黒功司の公的活動と人物像",
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
          "parent_id": "c223e09e-246d-489d-8cb9-6f7fcf3e7f77",
          "request_id": "94d393ae6e4b9671-KIX",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_68474c3326888191b5c09678a9fc3e37",
          "async_task_conversation_id": "68474c33-2a28-8003-aa06-a095402782d0",
          "async_task_created_at": "2025-06-09 21:03:47.940051+00:00",
          "deep_research_version": "mini"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "c223e09e-246d-489d-8cb9-6f7fcf3e7f77",
      "children": [
        "4b5f9ca7-f612-4753-a44b-ec722d67f7a5"
      ]
    },
    "4b5f9ca7-f612-4753-a44b-ec722d67f7a5": {
      "id": "4b5f9ca7-f612-4753-a44b-ec722d67f7a5",
      "message": {
        "id": "4b5f9ca7-f612-4753-a44b-ec722d67f7a5",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1749503350.108392,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# 土黒功司氏の基本情報・経歴  \n- **所属・選挙区**：熊本県宇土市走潟地区在住。2022年10月の市議選で初当選（当選回数1回）【3†L78-L86】【50†L140-L143】。  \n- **学歴・職歴**：1978年生まれ。熊本大学工学部卒後、NECエレクトロニクス勤務を経てIT企業に勤務。2015年に独立しIT事業を展開。2016年から熊本地震の被災者支援に従事し、災害支援団体「よか隊ネット熊本」代表理事を務めた【50†L134-L142】。  \n- **所属政党・会派**：「風」会派に所属。2023年4月にメンバー2人で結成された会派で、「誰もが心豊かな暮らしができる新たな宇土市を創造する」ことを目指している【48†L88-L96】（独立系地方議員）。  \n\n# 議会での主な活動・発言  \n土黒氏は市議会一般質問で主に**地域経済支援・防災対策・子育て支援・教育環境**などを取り上げている。たとえば2023年9月定例会では、  \n- **地域経済支援・地元産業育成**：発言冒頭で「魅力ある宇土市に向けた地域産業支援・連携について」を質問課題に挙げ、物価高騰下での中小企業の現状や市の支援策（商品券配布・飲食店向けPayPay事業等）を確認した【13†L4112-L4120】【19†L4229-L4233】。答弁では市が中小企業振興条例を制定済であると答えられたことに、土黒氏は条例の運用・拡充の重要性を指摘。熊本県中小企業家同友会の景況調査データを示して資金繰り厳しい状況を共有し、市に早急な対応（条例の活用・改正や助成金支給など）を促した【14†L4148-L4156】【17†L4198-L4203】。最終的に市長は、経済団体との意見交換会開催や予算措置の前向き検討を約束している。  \n- **学校・子育て支援**：同じ定例会で「子育て環境・子どもの教育環境に対する保護者へのケア」を質問。保健師や心理士による家庭訪問・相談体制が説明された後、土黒氏は回答を評価し、自ら訪問型子育て支援「ホームスタート」を調査済であることを報告した【25†L4314-L4322】。東京都内の視察でホームスタートの効果を確認し、10月からの導入に向けた速やかな準備を要請した。同席で児童の不登校増加について国の資料を示し、「平成27年以降、小学生の不登校率が急増している」と指摘【25†L4327-L4331】。教育委員会側はスクールカウンセラー増員や「ほっとスペース」（不登校児の学び場）で対応していると報告し、土黒氏はスクールソーシャルワーカー増員（予算90万円・300時間増）にも感謝した【27†L4408-L4411】。  \n- **地区防災計画**：2024年6月定例会では冒頭に地区防災計画を取り上げ、梅雨期の線状降水帯発生を踏まえ住民の防災意識向上を指摘。宇土市内7地区で計画策定が進む中、自身も走潟地区の区長会・自主防災組織と連携しワークショップに参加した経験を述べ、モデル地区の動きを評価しつつ、他地区への補助拡大を要望した【36†L4415-L4420】【35†L25-L30】。市側は議員提案を踏まえ、定期的な情報交換会開催などを検討すると回答している。  \n- **地元特産品のPR**：地元産品（アサリ・焼酎など）の認知度向上にも関心を示し、「走潟を含む宇土市には多くの特産品があるが、市民自身に知られていない」と指摘【37†L19-L26】。市民が集まる市役所1階交流スペースへの展示活用を提案し、観光協会や物産展と連携したＰＲ活動の現状について経済部長に照会した【37†L25-L26】【38†L4534-L4537】。  \n- **子どもの居場所づくり**：旧田中会館隣接地に計画中の「子どもサードプレイス」施設にも着目。通学困難児や親子の交流拠点として、安全・居心地に配慮する必要性を指摘し、福祉・教育担当者に具体的な設計方針を質した【40†L4567-L4575】。市は三角エリアに複合型施設を整備予定で、市民要望を反映していく方針を示した。  \n- **まちづくりのキャッチフレーズ**：「九州のどまんなか宇土市」のロゴ・フレーズについても興味を示し、「キャッチフレーズは大事」と賛同を表明。議案解説では「定住・移住促進のためキャッチフレーズを設定し、市民と共に発信していく」と報告され、土黒氏はその背景や経緯を市長に質問した【42†L31-L39】【42†L43-L44】。  \n\n以上のように、土黒氏は常に**感謝の言葉**（「熱意ある御答弁ありがとうございます」）を述べながら行政回答を真摯に受け止めつつ、自身もデータや他都市事例を用いて丁寧に追及・提案する姿勢を示している。質問内容は幅広く、市民生活や経済の現場に即した実務的なものである。  \n\n# 所属委員会・会派活動  \n- **会派「風」**：2023年4月発足の2人会派で、互いにビジョン共有や情報交換を行っている【48†L88-L96】。目標は「誰もが心豊かな暮らしができる夢ある宇土市づくり」と掲げている【48†L88-L96】。  \n- **常任・特別委員会**：宇土市議会では経済建設常任委員会の副委員長と、地域高規格道路促進等対策特別委員会の委員を務める【3†L80-L86】。以前は総務市民常任委員会にも所属していた【50†L145-L150】。  \n\n# 地域貢献・人物像  \n土黒氏は議会外でも積極的に地域活動に携わってきた。熊本地震被災後は2016年から災害支援活動に従事し、「よか隊ネット熊本」を立ち上げ代表理事に就任【50†L139-L142】。PTA会長として学校安全にも取り組むほか、2022年にIT企業UTOMESHI株式会社を設立し地域産業振興にも貢献している【50†L139-L142】。  \n本人は「宇土に守るべき家族があり、夢見る子どもたちに受け継いでいきたい地域がある。愛する宇土をもっと夢あるマチにするために私は全力で取り組みます」と語っており【52†L24-L26】、この姿勢は議会質問にも表れている。若い視点・新しい発想で、行政・民間・大学等の連携を重視しながら具体的施策を提案しており、市民に寄り添った「心豊かな暮らし」の実現を目指している。  \n\n# 選挙公約・支持基盤  \n当選後の議会活動からも、土黒氏は当選時の重点課題を反映していると見られる。2022年12月定例会で早速、市のローカル・マニフェスト「仕事を支える／賑わい創造」の具体化を問い質した【54†L19-L24】。自身も選挙活動中に「夢ある宇土へ若い力を」と掲げており、産業振興や子育て支援を訴えていた（自身も「若い力・新しい発想」と言及【60†L59-L60】）。支持基盤は主に走潟地区など在住地域を中心とする市民で、自らも地区住民・区長会メンバーとして地域行事に参加している。  \n\n**参考資料：**宇土市議会公式サイトの議事録、議員紹介、土黒氏所属「風」会派資料、土黒氏自身の発言記録・プロフィール【3†L80-L86】【13†L4112-L4115】【17†L4198-L4203】【25†L4314-L4322】【27†L4408-L4411】【37†L19-L26】【48†L88-L96】【50†L134-L142】【54†L19-L24】など。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 68,
              "end_ix": 79,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
                "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=",
                "text": "# 土黒 功司 (ひじくろ こうじ)",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "42db981e-ff47-4204-9b53-d6c39b4f923f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 78,
                  "end_line_num": 86,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 79,
              "end_ix": 93,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=2015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88,IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B%202023%E5%B9%B410%E6%9C%88%20%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E5%BD%93%E9%81%B8%EF%BC%88%EF%BC%91%E6%9C%9F%E7%9B%AE%EF%BC%89",
                "text": "2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立 2023年10月 宇土市議会議員選挙当選（１期目）",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 140,
                  "end_line_num": 143,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 215,
              "end_ix": 229,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=1997%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E7%AB%8B%E5%AE%87%E5%9C%9F%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E5%8D%92%E6%A5%AD%202001%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%B7%A5%E5%AD%A6%E9%83%A8%E6%95%B0%E7%90%86%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E7%A7%91%E5%8D%92%E6%A5%AD%202003%E5%B9%B43%E6%9C%88,IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
                "text": "1997年3月 熊本県立宇土高等学校卒業 2001年3月 熊本大学工学部数理情報システム工学科卒業 2003年3月 熊本大学大学院自然科学研究科卒業 2003年4月～2007年7月 NECエレクトロニクス入社 神奈川県勤務（2007年8月退社） 2007年9月～2008年8月 ワーキングホリデーでオーストラリア留学 2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 134,
                  "end_line_num": 142,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 316,
              "end_ix": 328,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
                "text": "会派「風」",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 48,
                  "cited_message_id": "c43c26d7-9060-4503-8e2e-fc8754509bf6",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 88,
                  "end_line_num": 96,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 536,
              "end_ix": 552,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%EF%BC%91%E7%95%AA%E3%80%81%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E6%94%B9%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BC%9A%E6%B4%BE%E3%80%81%E9%A2%A8%E3%81%AE%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E4%BB%8A%E6%97%A5%E3%81%AF%E3%80%81%E6%9C%AC%E5%B8%82%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%81%AE%E4%BB%B6%E3%80%81%E3%81%82%E3%81%A8%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%94%AF%20%E6%8F%B4%E3%81%AE%E4%BB%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%EF%BC%92%E7%82%B9%E5%BE%A1%E8%B3%AA%E5%95%8F%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9F%B7%E8%A1%8C%E9%83%A8%E3%81%AE%E7%9A%86%E6%A7%98%E3%80%81%E5%B8%82%E9%95%B7%E3%81%AB%E3%81%8A%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%97%E3%81%A6%E3%81%AF%E3%80%81,%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%81%AF%E3%80%81%E8%B3%AA%E5%95%8F%E3%81%AB%E7%A7%BB%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%82%82%E6%97%A5%E5%B8%B8%E3%81%AE%E7%94%9F%E6%B4%BB%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%20%E3%81%84%E3%82%8D%E3%82%93%E3%81%AA%E7%89%A9%E4%BE%A1%E9%AB%98%E9%A8%B0%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E3%82%AC%E3%82%BD%E3%83%AA%E3%83%B3%E4%BB%A3%E3%81%AE%E5%80%A4%E6%AE%B5%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%84%E3%82%8D%E3%82%93%E3%81%AA%E5%B8%82%E5%A0%B4%E3%81%AE%E5%A4%89%E5%8C%96%E3%81%A8",
                "text": "１番、土黒功司君。 ○１番（土黒功司君） 改めまして、おはようございます。会派、風の土黒功司でございます。 今日は、本市の魅力ある宇土市に向けた地域経済の件、あと子育て支援の保護者に関する支 援の件について、２点御質問させていただきます。執行部の皆様、市長におかれましては、 熱意ある御答弁をよろしくお願いいたします。引き続き、質問席から質問させていただきま す。 ○議長（藤井慶峰君） 土黒功司君。 ○１番（土黒功司君） それでは、質問に移らせていただきます。皆様も日常の生活において いろんな物価高騰であったり、ガソリン代の値段が上がったりとか、いろんな市場の変化と",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "875ff112-78e4-40c1-a36c-911fd667773f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4112,
                  "end_line_num": 4120,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 552,
              "end_ix": 568,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E8%A6%96%E7%82%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E5%9C%B0%E5%9F%9F%E7%94%A3%E6%A5%AD%E3%81%AE%20%E7%99%BA%E5%B1%95%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6%E3%81%AF%E3%80%81%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%82%93%20%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E6%9C%80%E5%BE%8C%E3%81%AB%E5%B8%82%E9%95%B7%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E5%BE%8C%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%AE%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%94%A3%E6%A5%AD%20%E6%8C%AF%E8%88%88%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6%E3%80%81%E4%BB%8A%E5%BE%8C%E3%81%AE%E5%8F%96%E7%B5%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89,%E5%B8%82%E9%95%B7%E3%80%81%E5%85%83%E6%9D%BE%E8%8C%82%E6%A8%B9%E5%90%9B%E3%80%82",
                "text": "てくれということではないんですけれども、こういった視点が本当にこれからの地域産業の 発展に向けては、非常に大事になってくるのではないかというふうに思っております。そん な中で、最後に市長のほうにお尋ねいたします。今後の魅力のある宇土市に向けた地域産業 振興に向けて、今後の取組についてお伺いいたします。よろしくお願いいたします。 ○議長（藤井慶峰君） 市長、元松茂樹君。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 19,
                  "cited_message_id": "6ea6eaf8-f9eb-4536-bcfb-55dead25aaad",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4229,
                  "end_line_num": 4233,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 686,
              "end_ix": 702,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%8E%9F%E6%9D%90%E6%96%99%E3%81%AE%E4%BE%A1%E6%A0%BC%E4%B8%8A%E6%98%87%E5%88%86%E3%81%AE%E4%BE%A1%E6%A0%BC%E8%BB%A2%E5%AB%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%A3%B2%E5%80%A4%E3%81%AB%E5%8F%8D%E6%98%A0%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%20%E3%81%BE%E3%81%99%E3%81%8C%E3%80%81%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC%E7%B3%BB%E3%81%AE%E4%BE%A1%E6%A0%BC%E4%B8%8A%E6%98%87%E5%88%86%E3%82%92%E8%A3%9C%E3%81%86%E3%81%BE%E3%81%A7%E3%81%AF%E8%87%B3%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%89%E3%81%9A%E3%80%81%E4%BE%9D%E7%84%B6%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E7%B5%8C%E5%96%B6%E3%81%8C%E5%8E%B3%E3%81%97%E3%81%84%20%E7%8A%B6%E6%B3%81%E3%81%AF%E7%B6%9A%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20%E5%B8%82%E5%86%85%E3%81%AE%E7%8F%BE%E7%8A%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AA%E8%AA%BF%E6%9F%BB%E3%81%AF%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8C%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%EF%BC%95%E6%9C%88%EF%BC%98%E6%97%A5%E3%81%AB%E5%AE%9F%E6%96%BD%E3%81%95%E3%82%8C%20%E3%81%BE%E3%81%97%E3%81%9F%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E5%95%86%E5%B7%A5%E4%BC%9A%E9%9D%92%E5%B9%B4%E9%83%A8%E5%BD%B9%E5%93%A1%E4%BC%9A%E3%81%A7%E3%81%AE%E6%84%8F%E8%A6%8B%E4%BA%A4%E6%8F%9B%E3%81%AE%E9%9A%9B%E3%81%AB%E3%80%81%E6%99%AF%E6%B0%97%E3%81%8C%E6%82%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E5%BE%A1%E6%84%8F%E8%A6%8B%E3%81%AF%E4%BD%99%E3%82%8A%E8%81%9E,%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E5%89%8D%E3%81%AE%E6%B0%B4%E6%BA%96%E3%81%AB%E5%9B%9E%E5%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BE%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%82%89%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%89%E3%82%8C%E3%81%AA%20%E3%81%84%E3%82%88%E3%81%86%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E7%B5%8C%E5%96%B6%E8%80%85%E3%81%AE%E6%96%B9%E3%80%85%E3%81%8B%E3%82%89%E3%80%81%E6%99%AF%E6%B0%97%E5%9B%9E%E5%BE%A9%E3%81%AB%E3%81%AF%E6%9C%80%E4%BD%8E%E8%B3%83%E9%87%91%E3%81%AE%E4%B8%8A%E6%98%87%E3%81%AB%E3%82%88%E3%82%8B%E4%BA%BA%E4%BB%B6%E8%B2%BB%20%E3%81%AE%E9%AB%98%E9%A8%B0%E3%82%84%E3%80%81%E4%BA%BA%E6%9D%90%E4%B8%8D%E8%B6%B3%E3%81%AE%E8%A7%A3%E6%B6%88%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%82%E3%82%8B%E3%81%A8%E3%81%AE%E5%BE%A1%E6%84%8F%E8%A6%8B%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E4%BB%A5%E4%B8%8A%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
                "text": "しかし、原材料の価格上昇分の価格転嫁について、売値に反映できるようになってきてい ますが、エネルギー系の価格上昇分を補うまでは至っておらず、依然として、経営が厳しい 状況は続いております。 市内の現状について、具体的な調査は行っておりませんが、令和５年５月８日に実施され ました、宇土市商工会青年部役員会での意見交換の際に、景気が悪いという御意見は余り聞 かれませんでした。しかし、コロナ禍前の水準に回復しているとまでは感じられておられな いようでした。また、多くの経営者の方々から、景気回復には最低賃金の上昇による人件費 の高騰や、人材不足の解消が必要であるとの御意見がありました。 以上でございます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 14,
                  "cited_message_id": "5374421d-b2bc-4d7b-b8ca-bf95a964508c",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4148,
                  "end_line_num": 4156,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 702,
              "end_ix": 718,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%9B%BD%E3%81%AE%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E5%9F%BA%E6%9C%AC%E6%B3%95%E3%81%AE%E6%94%B9%E6%AD%A3%E3%81%AB%E4%BC%B4%E3%81%A3%E3%81%A6%E3%80%81%20%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E6%97%A9%E6%80%A5%E3%81%AB%E6%9D%A1%E4%BE%8B%E5%8C%96%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E3%81%BE%E3%81%9F%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E5%B8%82%E5%86%85%E3%81%AE%E7%B5%8C%E6%B8%88%E5%9B%A3%E4%BD%93%E3%81%AB%E5%91%BC%20%E3%81%B3%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E8%A9%B1%E3%81%97%E5%90%88%E3%81%84%E3%82%92%E3%81%95%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E7%8F%BE%E7%8A%B6%E6%8A%8A%E6%8F%A1%E3%81%AB%E5%8A%AA%E3%82%81%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E6%9D%A1%E4%BE%8B%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E6%B7%B1%E5%A0%80%E3%82%8A%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E6%9D%A1%E4%BE%8B%E3%81%A8,%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AF%E3%82%84%E3%81%AF%E3%82%8A%E6%9D%A1%E4%BE%8B%E3%81%AE%E4%B8%AD%E8%BA%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F%E5%88%B6%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%82%20%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E4%BD%9C%E3%81%A3%E3%81%9F%E5%BE%8C%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。国の中小企業基本法の改正に伴って、 宇土市のほうでも早急に条例化していただき、またコロナ禍においても市内の経済団体に呼 び掛けられて話し合いをされたということで、本当に現状把握に努められていると思います。 そんな中で、今回少しだけ条例のことについてもう少し深堀りさせていただきます。条例と いうことで、私としてはやはり条例の中身であったりとか、せっかく制定されているのであ れば、実際作った後の活用というのが本当に非常に大事ではないかというふうに感じており",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "3ba41859-b9f1-441d-bead-d839f8e3875b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4198,
                  "end_line_num": 4203,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 885,
              "end_ix": 901,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%A6%AA%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E5%9B%9E%E7%AD%94%E3%82%92%20%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%AE%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%A7%E5%8F%96%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F%E3%80%81%E5%AE%B6%20%E5%BA%AD%E8%A8%AA%E5%95%8F%E5%9E%8B%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E4%BA%8B%E6%A5%AD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E3%80%81%E4%BB%8A%E5%B9%B4%E3%81%AE%E5%A4%8F%E3%80%81%E6%B5%A6%E6%9C%AC%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%9D%E3%81%AE%E4%BB%96%E5%AE%87%E5%9C%9F%20%E5%B8%82%E3%81%AE%E6%96%B9%EF%BC%92%E5%90%8D%E3%81%A8%E4%BD%B5%E3%81%9B%E3%81%A6%E3%80%81%E6%9D%B1%E4%BA%AC%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E8%A6%96%E5%AF%9F%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E3%81%9D%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AB%E5%88%9D%E3%82%81%E3%81%A6%E3%81%93%E3%81%AE%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC,%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BA%8B%E6%A5%AD%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%81%9E%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%99%E3%81%B0%E3%82%89%E3%81%97%E3%81%84%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E6%B0%91%E9%96%93%E3%81%AE%E3%81%9D%E3%81%93%E3%81%AF%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E7%B6%9A%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E5%89%8D%20%E3%81%8B%E3%82%89%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AD%90%E8%82%B2%E3%81%A6%E3%81%AB%E6%82%A9%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E6%96%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E6%94%AF%E6%8F%B4%E3%82%92%E7%B6%99%E7%B6%9A%E3%81%95%20%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%B8%80%E7%95%AA%E5%8D%B0%E8%B1%A1%E3%81%AB%E6%AE%8B%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E6%94%AF%E6%8F%B4%E3%82%92%E5%8F%97%E3%81%91%E3%81%9F%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%95%E3%82%93%E3%81%8C%E3%80%81%E4%BB%8A%E5%BA%A6%E3%81%AF%E3%81%9D%E3%81%93%E3%81%AB%E3%81%A4%E3%81%8F%E3%82%89%20%E3%82%8C%E3%81%9F%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AE%E6%96%BD%E8%A8%AD%E9%95%B7%E3%82%92%E3%81%95%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%9C%B0%E5%9F%9F%E5%86%85%E3%81%AE",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。親の気持ちに寄り添ったという回答を いただき、本当にありがとうございます。また、今回の御答弁で取り上げていただいた、家 庭訪問型子育て支援ホームスタートという事業に関して、今年の夏、浦本議員とその他宇土 市の方２名と併せて、東京のほうに視察に行って、私もそのときに初めてこのホームスター トという支援の事業があるというのを聞いて、本当にすばらしいなというふうに感じました。 民間のそこは、２０年続けられているというのをお伺いしているのですけれども、２０年前 から本当に子育てに悩んでいる保護者に対して、民間の方が本当に寄り添った支援を継続さ れており、一番印象に残ったのは、そこで支援を受けた保護者さんが、今度はそこにつくら れた居場所づくりのところの施設長をされるまでになっておりました。そういった地域内の",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "cited_message_id": "bded5ac2-b8cb-4421-8a07-9ebe7a1d7af8",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4314,
                  "end_line_num": 4322,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1000,
              "end_ix": 1016,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E6%AC%A1%E3%81%AB%E3%80%81%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E8%A6%96%E7%82%B9%E3%82%92%E5%A4%89%E3%81%88%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%B0%B1%E5%AD%A6%E5%BE%8C%E3%81%AE%E5%AD%A6%E6%A0%A1%E3%81%AE%E4%BB%8A%E3%81%AE%E7%8A%B6%E6%B3%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%20%E3%81%8B%E3%82%89%E8%B3%87%E6%96%99%E3%82%92%E5%BE%A1%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E3%80%81%E5%AD%A6%E6%A0%A1%E3%81%AE%E4%B8%AD%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%81%AF%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E4%B8%8D%E7%99%BB%E6%A0%A1%E3%81%AE%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%20%E3%81%A1%E3%81%8C%E3%81%A8%E3%81%A6%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E7%8A%B6%E6%B3%81%E3%82%92%E7%9A%86%E6%A7%98%E3%82%82%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%A7%81%E3%82%82%E8%AD%B0%E5%93%A1%E3%81%AB%E3%81%AA%20%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%BE%A1%E7%9B%B8%E8%AB%87%E3%81%AE%E5%A3%B0%E3%82%92%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%8A%E5%9B%9E%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%A9%E3%81%86%E3%81%AA%E3%81%AE%E3%81%8B%20%E3%81%A8%E3%81%84%E3%81%86%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92%E3%80%81%E5%9B%BD%E3%81%AE%E3%81%93%E3%81%A1%E3%82%89%E3%81%AF%E7%8B%AC%E7%AB%8B%E8%A1%8C%E6%94%BF%E6%B3%95%E4%BA%BA%E6%95%99%E8%82%B2%E6%94%AF%E6%8F%B4%E6%A9%9F%E6%A7%8B%E6%A7%98%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8A%9C%E7%B2%8B%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F",
                "text": "次に、ちょっと視点を変えまして、就学後の学校の今の状況について、ちょっと私のほう から資料を御提示させていただきます。今、学校の中においては、本当に不登校の子どもた ちがとても多くなっているという状況を皆様も知られていることと思います。私も議員にな らせていただいて、本当にたくさんの御相談の声をいただいており、今回、実際どうなのか というところを、国のこちらは独立行政法人教育支援機構様の資料を抜粋させていただいた",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "cited_message_id": "bded5ac2-b8cb-4421-8a07-9ebe7a1d7af8",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4327,
                  "end_line_num": 4331,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1108,
              "end_ix": 1124,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%E3%82%82%E3%80%81%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%82%88%E3%82%8A%EF%BC%99%EF%BC%90%E4%B8%87%E5%86%86%E4%BA%88%E7%AE%97%E3%81%AE%E3%81%BB%E3%81%86%E3%82%92%E5%A2%97%E9%A1%8D%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E9%9B%87%E7%94%A8%E6%99%82%E9%96%93%E3%82%92%EF%BC%93%EF%BC%90%EF%BC%90%E6%99%82%E9%96%93%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%20%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BE%A1%E5%AF%BE%E5%BF%9C%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%20%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E7%A6%8F%E5%B2%A1%E7%9C%8C%E6%95%99%E8%82%B2%E5%A7%94%E5%93%A1%E4%BC%9A%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。スクールソーシャルワーカーに関して も、昨年度より９０万円予算のほうを増額していただき、雇用時間を３００時間増加してい るということで、本当に御対応ありがとうございます。また、今回それでスクールソーシャ ルワーカーについて、少しだけ私のほうでも福岡県教育委員会の資料を提示させていただく",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "cited_message_id": "cca3fd2b-3bc1-4152-a188-25a4313025e8",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4408,
                  "end_line_num": 4411,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1282,
              "end_ix": 1298,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E5%89%8D%E7%BD%AE%E3%81%8D%E3%81%8C%E9%95%B7%E3%81%8F%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E8%B3%AA%E5%95%8F%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E7%A7%BB%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E3%81%A7%E3%81%99%E3%80%82%E6%95%B0%E6%97%A5%E5%89%8D%E3%81%8B%E3%82%89%E5%AE%87%E5%9C%9F%E5%B8%82%E3%82%82%E6%A2%85%E9%9B%A8%E5%85%A5%E3%82%8A%E3%82%92%E3%81%97%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E6%98%A8%E6%97%A5%E3%81%8B%E3%82%89%E9%9B%A8%E3%81%8C%E9%99%8D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E6%9C%9D%E3%82%82%E3%81%9F%E3%81%97%20%E3%81%8B%E9%B9%BF%E5%85%90%E5%B3%B6%E3%81%8C%E6%97%A9%E9%80%9F%E7%B7%9A%E7%8A%B6%E9%99%8D%E6%B0%B4%E5%B8%AF%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E3%82%82%E7%B7%9A%E7%8A%B6%E9%99%8D%E6%B0%B4%E5%B8%AF%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BD%93%20%E3%81%9F%E3%82%8A%E5%89%8D%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E7%8A%B6%E6%B3%81%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%E7%9A%86%E6%A7%98%E3%81%AE%E9%98%B2%E7%81%BD%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E6%84%8F%E8%AD%98%E3%82%82%E6%9C%AC%E5%BD%93%E3%81%AB%E9%AB%98%E3%81%BE%E3%81%A3%20%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A7%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84,%E3%81%A6%E3%81%84%E3%82%8B%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E4%B8%AD%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%EF%BC%97%E5%9C%B0%E5%8C%BA%E3%81%AE%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E5%9C%B0%E5%8C%BA%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%81%8C%E5%8B%95%E3%81%84",
                "text": "前置きが長くなりましたが、質問のほうに移らせていただきます。地区防災計画について です。数日前から宇土市も梅雨入りをしまして、昨日から雨が降っております。今朝もたし か鹿児島が早速線状降水帯が発生したということで、今回も線状降水帯というのが本当に当 たり前のように発生する状況になりまして、市民の皆様の防災に対する意識も本当に高まっ ているかなというふうに思っております。そんな中で、宇土市のほうで取り組んでいただい ている地区防災計画、宇土市の中における７地区のそれぞれの地区における防災計画が動い",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 36,
                  "cited_message_id": "2283caaf-cd53-4d4c-873e-6bde4883813d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4415,
                  "end_line_num": 4420,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1298,
              "end_ix": 1310,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%B5%B0%E6%BD%9F%E5%9C%B0%E5%8C%BA%E3%81%8C%E5%85%88%E8%A1%8C%E3%81%97%E3%81%A6%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%82%92%E7%AB%8B%20%E3%81%A6%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%82%82%E8%B5%B0%E6%BD%9F%E4%BD%8F%E6%B0%91%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%97%E3%81%A6%E5%8C%BA%E9%95%B7%E4%BC%9A%E3%81%AB%E3%82%82%E5%8F%82%E5%8A%A0%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0,%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%81%97%E3%80%81%EF%BC%B0%EF%BC%B4%EF%BC%A1%E4%BC%9A%E9%95%B7%E3%81%A8%E3%81%97%E3%81%A6%E3%82%82%E3%81%93%E3%81%AE%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97%E3%81%AB%E3%82%82%E5%8F%82%E5%8A%A0%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81",
                "text": "○議長（藤井慶峰君） 土黒功司君 ○１番（土黒功司君） 御答弁ありがとうございます。走潟地区が先行して地区防災計画を立 てられているということで、私も走潟住民として、議員として区長会にも参加させていただ いておりますし、ＰＴＡ会長としてもこのワークショップにも参加させていただきまして、",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 35,
                  "cited_message_id": "bf6bbaff-72e8-4b0c-bf53-54c3a9882c6b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 30,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1433,
              "end_ix": 1445,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%83%96%E3%83%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9F%20%E3%81%A0%E6%AE%8B%E5%BF%B5%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AB%E3%80%81%E7%A7%81%E3%81%8C%E5%AE%87%E5%9C%9F%E5%B8%82%E5%86%85%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E5%8B%95%E3%81%8D%E3%81%AE%E3%81%82%E3%82%8B%E4%B8%AD%E3%81%A7%E3%81%AF%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E4%BD%99%E3%82%8A%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%AE%87%E5%9C%9F%E5%B8%82%20%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%A6%8B%E3%82%8B%E6%A9%9F%E4%BC%9A%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%20%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E5%AE%9F%E3%81%AF%E7%B5%90%E6%A7%8B%E3%81%82%E3%82%93%E3%81%BE%E3%82%8A%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E7%8F%BE%E7%8A%B6%E3%82%92%E7%A7%81%E3%81%AE%E4%B8%AD%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE",
                "text": "ブルであったり、本当にたくさんの宇土市の特産品があるというふうに思っております。た だ残念なことに、私が宇土市内でいろいろ動きのある中では、やはり余りそういった宇土市 の特産品というのがどういったものがあるのかというのを見る機会はありませんし、市民の 人たちに聞いても、実は結構あんまり知られていないという現状を私の中では感じておりま",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "cited_message_id": "ab976812-7178-4bcd-a53f-d53bdfe19c73",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 26,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1507,
              "end_ix": 1519,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E4%B8%AD%E3%81%A7%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AE%EF%BC%B0%EF%BC%B2%E6%B4%BB%E5%8B%95%E3%81%AE%E7%8F%BE%E7%8A%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E7%B5%8C%E6%B8%88%E9%83%A8%E9%95%B7%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%20%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
                "text": "す。そういった中で、宇土市の特産品のＰＲ活動の現状について、経済部長にお尋ねいたし ます。よろしくお願いいたします。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "cited_message_id": "ab976812-7178-4bcd-a53f-d53bdfe19c73",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 26,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1519,
              "end_ix": 1535,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%81%A9%E3%82%82%E3%80%81%E3%81%BE%E3%81%9A%E4%B8%80%E7%95%AA%E3%81%AE%E8%B6%B3%E5%85%83%E3%81%A7%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E5%BD%B9%E6%89%80%EF%BC%91%E9%9A%8E%E3%81%AE%E5%B8%82%E6%B0%91%E4%BA%A4%E6%B5%81%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%80%81%E3%81%9B%E3%81%A3%20%E3%81%8B%E3%81%8F%E3%81%93%E3%81%A1%E3%82%89%E3%81%AB%E5%B8%82%E6%B0%91%E3%81%8C%E4%B8%80%E7%95%AA%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E9%9B%86%E3%81%BE%E3%82%8B%E5%A0%B4%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%80%81%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%AA%20%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E8%80%83%E3%81%88%E3%81%9F%E6%AC%A1%E7%AC%AC%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E5%AE%9F%E7%8F%BE%E5%8F%AF%E8%83%BD%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%80%81%E7%B5%8C%E6%B8%88%E9%83%A8%E9%95%B7%20%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
                "text": "されているんですけども、まず一番の足元である宇土市役所１階の市民交流スペース、せっ かくこちらに市民が一番たくさん集まる場がありますので、こういったところを活用できな いかというふうに考えた次第です。こういったところに関して実現可能かどうか、経済部長 にお尋ねいたします。よろしくお願いいたします。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "cited_message_id": "5d59d08c-33ed-4a19-bd7f-459d1bc6fb5d",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4534,
                  "end_line_num": 4537,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1645,
              "end_ix": 1661,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E6%AC%A1%E3%81%AB%E7%A7%BB%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%89%8D%E5%9B%9E%E3%81%AB%E5%BC%95%E3%81%8D%E7%B6%9A%E3%81%8D%E3%80%81%E4%BB%8A%E5%9B%9E%E6%97%A7%E7%94%B0%E4%B8%AD%E4%BC%9A%E9%A4%A8%E6%A8%AA%E3%81%AB%E6%96%B0%E8%A8%AD%E4%BA%88%E5%AE%9A%E3%81%AE%E5%AD%90%E3%81%A9%E3%82%82%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%AB%20%E3%81%A4%E3%81%84%E3%81%A6%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E5%9B%9E%E3%81%93%E3%81%A1%E3%82%89%E7%94%B0%E4%B8%AD%E4%BC%9A%E9%A4%A8%E6%A8%AA%E3%81%AE%E4%B8%89%E8%A7%92%E3%82%A8%E3%83%AA%E3%82%A2%E3%81%AB%E3%81%A7%E3%81%99%E3%81%AD%E3%80%81%E3%81%BB%E3%81%A3%E3%81%A8%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%AE%20%E6%A9%9F%E8%83%BD%E3%82%82%E5%85%BC%E3%81%AD%E5%82%99%E3%81%88%E3%81%A4%E3%81%A4%E3%80%81%E6%97%A5%E4%B8%AD%E3%81%AE%E5%A4%95%E6%96%B9%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E5%9C%9F%E6%97%A5%E3%81%AF%E8%A6%AA%E5%AD%90%E3%81%AE%E4%BA%A4%E6%B5%81%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%82%8B%E5%AD%90%E3%81%A9%E3%82%82%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%20%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%AE%E6%96%BD%E8%A8%AD%E3%81%8C%E5%BB%BA%E8%A8%AD%E3%81%95%E3%82%8C%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E4%B8%AD%E3%80%81%E3%81%93%E3%81%93%E3%81%AB%E6%98%BC%E9%96%93%E5%AD%A6%E6%A0%A1%E3%81%AB%20%E8%A1%8C%E3%81%91%E3%81%AA%E3%81%84%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%81%8C%E9%9B%86%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E8%A6%AA%E5%AD%90%E3%81%8C%E8%87%AA%E7%84%B6%E3%81%A8%E4%BA%A4%E6%B5%81%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E5%A0%B4%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%80%81%E3%81%BE,%E3%81%95%E3%81%97%E3%81%8F%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%A8%E3%81%84%E3%81%86%E4%BD%8D%E7%BD%AE%E3%81%A5%E3%81%91%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%81%AF%E3%80%81%E4%B9%97%E3%82%8A%E8%B6%8A%E3%81%88%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E6%A7%98%E3%80%85%E3%81%AA%E8%AA%B2%20%E9%A1%8C%E3%81%8C%E3%81%82%E3%82%8B%E3%81%8B%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%93%E3%81%AF%E3%81%BE%E3%81%95%E3%81%97%E3%81%8F%E7%A6%8F%E7%A5%89%E7%9A%84%E3%81%AA%E8%A6%96%E7%82%B9%E3%80%81%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%81%8C%E5%AE%89%20%E5%BF%83%E3%81%97%E3%81%A6%E3%80%81%E5%AE%89%E5%85%A8%E3%81%A7%E3%81%9D%E3%81%93%E3%81%AB%E8%A1%8C%E3%81%8D%E3%81%9F%E3%81%8F%E3%81%AA%E3%82%8B%E3%80%81%E3%81%9D%E3%81%93%E3%81%AB%E5%AE%89%E5%BF%83%E3%81%97%E3%81%A6%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8A%E3%81%9F%E3%81%8F%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E5%A0%B4%E6%89%80%E3%81%AB%E3%81%AA%E3%82%8B%E5%BF%85%20%E8%A6%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%91%A8%E3%82%8A%E3%81%AF%E6%96%B0%E5%B9%B9%E7%B7%9A%E3%81%8C%E9%80%9A%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F%E3%82%8A%E3%80%81%EF%BC%AA%EF%BC%B2%E3%81%8C%E9%80%9A%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F%E3%82%8A%E3%80%81%E6%A7%98%E3%80%85%E3%81%AA",
                "text": "次に移ります。前回に引き続き、今回旧田中会館横に新設予定の子どもサードプレイスに ついてお尋ねいたします。今回こちら田中会館横の三角エリアにですね、ほっとスペースの 機能も兼ね備えつつ、日中の夕方であったり、土日は親子の交流が生まれる子どもサードプ レイスの施設が建設されるというふうに聞いております。そういった中、ここに昼間学校に 行けない子どもたちが集まってきたりとか、親子が自然と交流していく場になっていく、ま さしくサードプレイスという位置づけになるためには、乗り越えなければいけない様々な課 題があるかなというふうに思っております。そこはまさしく福祉的な視点、子どもたちが安 心して、安全でそこに行きたくなる、そこに安心してとどまりたくなるような場所になる必 要があると思っておりまして、周りは新幹線が通っていたり、ＪＲが通っていたり、様々な",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 40,
                  "cited_message_id": "b5ba65e3-c742-4160-b02e-c656b9313e55",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4567,
                  "end_line_num": 4575,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1843,
              "end_ix": 1855,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%80%81%E5%B8%82%E9%95%B7%E3%81%8C%E5%87%BA%E3%81%95%E3%82%8C%E3%81%9F%E3%80%8C%E4%B9%9D%E5%B7%9E%E3%81%AE%E3%81%A9%E3%81%BE%E3%82%93%E3%81%AA%E3%81%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%80%8D%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%80%81%E5%AE%87%20%E5%9C%9F%E5%B8%82%E3%81%AE%EF%BC%B0%EF%BC%B2%E6%88%A6%E7%95%A5%E3%80%81%E7%A7%81%E3%82%82%E3%81%93%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF%E5%AE%9F%E3%81%AF%E5%A4%A7%E5%A5%BD%E3%81%8D%E3%81%A7%E3%81%97%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E8%AD%B0%E5%93%A1%E3%81%AE%E9%81%B8%E6%8C%99%20%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AF%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E6%B4%BB%E5%8B%95%E3%81%A8%E3%81%8B%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E3%82%84%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E3%82%B3%E3%83%B3%20%E3%82%BB%E3%83%97%E3%83%88%E3%81%A0%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF%E5%A4%A7%E4%BA%8B%E3%81%AB%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%82%84%E3%81%AF%E3%82%8A%E3%81%93%E3%81%86%E3%81%84%E3%81%86%E3%82%AD%E3%83%A3",
                "text": "ただきました、今回、市長が出された「九州のどまんなか宇土市」のキャッチフレーズ、宇 土市のＰＲ戦略、私もこのキャッチフレーズというのは実は大好きでして、私も議員の選挙 のときはキャッチフレーズを作りましたし、市民活動とかいろいろやるときに、やはりコン セプトだったりとかキャッチフレーズというのは大事にしております。やはりこういうキャ",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "cited_message_id": "4a2bd75d-bb3d-4dbd-94fd-c3ea08e47ac1",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 31,
                  "end_line_num": 39,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1855,
              "end_ix": 1867,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E5%88%9D%E3%82%81%E3%81%AB%E3%80%8C%E4%B9%9D%E5%B7%9E%E3%81%AE%E3%81%A9%E3%81%BE%E3%82%93%E3%81%AA%E3%81%8B%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%82%92%E7%94%A8%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E7%B5%8C%E7%B7%AF%E3%81%A8%E8%83%8C%E6%99%AF%E3%81%AB%20%E3%81%A4%E3%81%84%E3%81%A6%E5%BE%A1%E8%AA%AC%E6%98%8E%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
                "text": "初めに「九州のどまんなか」というキャッチフレーズを用いることになった経緯と背景に ついて御説明いたします。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "cited_message_id": "4a2bd75d-bb3d-4dbd-94fd-c3ea08e47ac1",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 43,
                  "end_line_num": 44,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2071,
              "end_ix": 2083,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
                "text": "会派「風」",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 48,
                  "cited_message_id": "c43c26d7-9060-4503-8e2e-fc8754509bf6",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 88,
                  "end_line_num": 96,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2118,
              "end_ix": 2130,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
                "text": "会派「風」",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 48,
                  "cited_message_id": "c43c26d7-9060-4503-8e2e-fc8754509bf6",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 88,
                  "end_line_num": 96,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2196,
              "end_ix": 2207,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
                "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=Image%3A%20%E5%9C%9F%E9%BB%92%E8%AD%B0%E5%93%A1%E4%BC%9A%E6%B4%BE%E3%83%BB%E5%85%9A%E6%B4%BE%E5%90%8D%3A%E9%A2%A8",
                "text": "Image: 土黒議員会派・党派名:風",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "42db981e-ff47-4204-9b53-d6c39b4f923f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 80,
                  "end_line_num": 86,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2228,
              "end_ix": 2242,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%20%E5%BD%B9%E8%81%B7",
                "text": "宇土市議会議員 役職",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 145,
                  "end_line_num": 150,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2333,
              "end_ix": 2347,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=2009%E5%B9%B41%E6%9C%88%EF%BD%9E2015%E5%B9%B48%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%86%85%E3%81%AEIT%E4%BC%9A%E7%A4%BE%E3%81%A7%E5%8B%A4%E5%8B%99%202015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E,%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
                "text": "2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 139,
                  "end_line_num": 142,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2409,
              "end_ix": 2423,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=2009%E5%B9%B41%E6%9C%88%EF%BD%9E2015%E5%B9%B48%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%86%85%E3%81%AEIT%E4%BC%9A%E7%A4%BE%E3%81%A7%E5%8B%A4%E5%8B%99%202015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E,%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
                "text": "2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 139,
                  "end_line_num": 142,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2506,
              "end_ix": 2518,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/index.php#message#:~:text=%E3%81%9D%E3%82%93%E3%81%AA%E6%84%9B%E3%81%99%E3%82%8B%E5%AE%87%E5%9C%9F%E3%82%92%E3%82%82%E3%81%A3%E3%81%A8%E5%A4%A2%E3%81%82%E3%82%8B%E3%83%9E%E3%83%81%E3%81%AB%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB",
                "text": "そんな愛する宇土をもっと夢あるマチにするために",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 52,
                  "cited_message_id": "5d87552e-e978-47e7-8afb-b3616640a7a7",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 24,
                  "end_line_num": 26,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2715,
              "end_ix": 2727,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=dd4d1f8a99f98c04fcf8c5de2780b169.pdf#:~:text=%EF%BC%91%E7%95%AA%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E8%AD%B0%E5%93%A1%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2021%20%EF%BC%91,%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2030%20%EF%BC%94%20%E5%9C%B0%E5%9F%9F%E9%98%B2%E7%81%BD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B734",
                "text": "１番 土黒功司議員 ············································· 21 １ ローカル・マニフェスト「仕事を支える／賑わい創造」に 関して ················································· 21 ２ 学校教育向けＩＣＴ環境推進に関して ·····················26 ３ 不登校児童に関して ····································· 30 ４ 地域防災に関して ·······································34",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 54,
                  "cited_message_id": "78499c3b-e677-4380-a8e6-de932dacc174",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 24,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2790,
              "end_ix": 2802,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "議員活動報告｜土黒功司（宇土市議会議員）",
                "url": "https://note.com/hijikurokoji/n/n9aa17473e8fb#:~:text=2023%E5%B9%B410%E6%9C%88%E3%82%88%E3%82%8A%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%E3%82%92%E3%82%84%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20%E8%8B%A5%E3%81%84%E5%8A%9B%E3%80%81%E6%96%B0%E3%81%97%E3%81%84%E7%99%BA%E6%83%B3%E3%81%A7%E3%80%8C%E5%A4%A2%E3%80%8D%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E3%82%92%EF%BC%81%20%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%A8%E3%80%81%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E6%9E%B6%E3%81%91%E6%A9%8B%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82",
                "text": "2023年10月より、宇土市議会議員をやっております。 若い力、新しい発想で「夢」ある宇土を！ これまでと、これからの架け橋となります。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 60,
                  "cited_message_id": "fc4566d5-6227-4f86-9dd5-3ae2fe7f7410",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 59,
                  "end_line_num": 60,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2924,
              "end_ix": 2935,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
                "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=Image%3A%20%E5%9C%9F%E9%BB%92%E8%AD%B0%E5%93%A1%E4%BC%9A%E6%B4%BE%E3%83%BB%E5%85%9A%E6%B4%BE%E5%90%8D%3A%E9%A2%A8",
                "text": "Image: 土黒議員会派・党派名:風",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 3,
                  "cited_message_id": "42db981e-ff47-4204-9b53-d6c39b4f923f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 80,
                  "end_line_num": 86,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2935,
              "end_ix": 2951,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%EF%BC%91%E7%95%AA%E3%80%81%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E6%94%B9%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BC%9A%E6%B4%BE%E3%80%81%E9%A2%A8%E3%81%AE%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E4%BB%8A%E6%97%A5%E3%81%AF%E3%80%81%E6%9C%AC%E5%B8%82%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%81%AE%E4%BB%B6%E3%80%81%E3%81%82%E3%81%A8%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%94%AF%20%E6%8F%B4%E3%81%AE%E4%BB%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%EF%BC%92%E7%82%B9%E5%BE%A1%E8%B3%AA%E5%95%8F%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9F%B7%E8%A1%8C%E9%83%A8%E3%81%AE%E7%9A%86%E6%A7%98%E3%80%81%E5%B8%82%E9%95%B7%E3%81%AB%E3%81%8A%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%97%E3%81%A6%E3%81%AF%E3%80%81",
                "text": "１番、土黒功司君。 ○１番（土黒功司君） 改めまして、おはようございます。会派、風の土黒功司でございます。 今日は、本市の魅力ある宇土市に向けた地域経済の件、あと子育て支援の保護者に関する支 援の件について、２点御質問させていただきます。執行部の皆様、市長におかれましては、",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 13,
                  "cited_message_id": "875ff112-78e4-40c1-a36c-911fd667773f",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4112,
                  "end_line_num": 4115,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2951,
              "end_ix": 2967,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%9B%BD%E3%81%AE%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E5%9F%BA%E6%9C%AC%E6%B3%95%E3%81%AE%E6%94%B9%E6%AD%A3%E3%81%AB%E4%BC%B4%E3%81%A3%E3%81%A6%E3%80%81%20%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E6%97%A9%E6%80%A5%E3%81%AB%E6%9D%A1%E4%BE%8B%E5%8C%96%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E3%81%BE%E3%81%9F%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E5%B8%82%E5%86%85%E3%81%AE%E7%B5%8C%E6%B8%88%E5%9B%A3%E4%BD%93%E3%81%AB%E5%91%BC%20%E3%81%B3%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E8%A9%B1%E3%81%97%E5%90%88%E3%81%84%E3%82%92%E3%81%95%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E7%8F%BE%E7%8A%B6%E6%8A%8A%E6%8F%A1%E3%81%AB%E5%8A%AA%E3%82%81%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E6%9D%A1%E4%BE%8B%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E6%B7%B1%E5%A0%80%E3%82%8A%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E6%9D%A1%E4%BE%8B%E3%81%A8,%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AF%E3%82%84%E3%81%AF%E3%82%8A%E6%9D%A1%E4%BE%8B%E3%81%AE%E4%B8%AD%E8%BA%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F%E5%88%B6%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%82%20%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E4%BD%9C%E3%81%A3%E3%81%9F%E5%BE%8C%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。国の中小企業基本法の改正に伴って、 宇土市のほうでも早急に条例化していただき、またコロナ禍においても市内の経済団体に呼 び掛けられて話し合いをされたということで、本当に現状把握に努められていると思います。 そんな中で、今回少しだけ条例のことについてもう少し深堀りさせていただきます。条例と いうことで、私としてはやはり条例の中身であったりとか、せっかく制定されているのであ れば、実際作った後の活用というのが本当に非常に大事ではないかというふうに感じており",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 17,
                  "cited_message_id": "3ba41859-b9f1-441d-bead-d839f8e3875b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4198,
                  "end_line_num": 4203,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2967,
              "end_ix": 2983,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%A6%AA%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E5%9B%9E%E7%AD%94%E3%82%92%20%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%AE%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%A7%E5%8F%96%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F%E3%80%81%E5%AE%B6%20%E5%BA%AD%E8%A8%AA%E5%95%8F%E5%9E%8B%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E4%BA%8B%E6%A5%AD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E3%80%81%E4%BB%8A%E5%B9%B4%E3%81%AE%E5%A4%8F%E3%80%81%E6%B5%A6%E6%9C%AC%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%9D%E3%81%AE%E4%BB%96%E5%AE%87%E5%9C%9F%20%E5%B8%82%E3%81%AE%E6%96%B9%EF%BC%92%E5%90%8D%E3%81%A8%E4%BD%B5%E3%81%9B%E3%81%A6%E3%80%81%E6%9D%B1%E4%BA%AC%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E8%A6%96%E5%AF%9F%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E3%81%9D%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AB%E5%88%9D%E3%82%81%E3%81%A6%E3%81%93%E3%81%AE%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC,%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BA%8B%E6%A5%AD%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%81%9E%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%99%E3%81%B0%E3%82%89%E3%81%97%E3%81%84%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E6%B0%91%E9%96%93%E3%81%AE%E3%81%9D%E3%81%93%E3%81%AF%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E7%B6%9A%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E5%89%8D%20%E3%81%8B%E3%82%89%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AD%90%E8%82%B2%E3%81%A6%E3%81%AB%E6%82%A9%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E6%96%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E6%94%AF%E6%8F%B4%E3%82%92%E7%B6%99%E7%B6%9A%E3%81%95%20%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%B8%80%E7%95%AA%E5%8D%B0%E8%B1%A1%E3%81%AB%E6%AE%8B%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E6%94%AF%E6%8F%B4%E3%82%92%E5%8F%97%E3%81%91%E3%81%9F%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%95%E3%82%93%E3%81%8C%E3%80%81%E4%BB%8A%E5%BA%A6%E3%81%AF%E3%81%9D%E3%81%93%E3%81%AB%E3%81%A4%E3%81%8F%E3%82%89%20%E3%82%8C%E3%81%9F%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AE%E6%96%BD%E8%A8%AD%E9%95%B7%E3%82%92%E3%81%95%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%9C%B0%E5%9F%9F%E5%86%85%E3%81%AE",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。親の気持ちに寄り添ったという回答を いただき、本当にありがとうございます。また、今回の御答弁で取り上げていただいた、家 庭訪問型子育て支援ホームスタートという事業に関して、今年の夏、浦本議員とその他宇土 市の方２名と併せて、東京のほうに視察に行って、私もそのときに初めてこのホームスター トという支援の事業があるというのを聞いて、本当にすばらしいなというふうに感じました。 民間のそこは、２０年続けられているというのをお伺いしているのですけれども、２０年前 から本当に子育てに悩んでいる保護者に対して、民間の方が本当に寄り添った支援を継続さ れており、一番印象に残ったのは、そこで支援を受けた保護者さんが、今度はそこにつくら れた居場所づくりのところの施設長をされるまでになっておりました。そういった地域内の",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "cited_message_id": "bded5ac2-b8cb-4421-8a07-9ebe7a1d7af8",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4314,
                  "end_line_num": 4322,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2983,
              "end_ix": 2999,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%E3%82%82%E3%80%81%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%82%88%E3%82%8A%EF%BC%99%EF%BC%90%E4%B8%87%E5%86%86%E4%BA%88%E7%AE%97%E3%81%AE%E3%81%BB%E3%81%86%E3%82%92%E5%A2%97%E9%A1%8D%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E9%9B%87%E7%94%A8%E6%99%82%E9%96%93%E3%82%92%EF%BC%93%EF%BC%90%EF%BC%90%E6%99%82%E9%96%93%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%20%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BE%A1%E5%AF%BE%E5%BF%9C%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%20%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E7%A6%8F%E5%B2%A1%E7%9C%8C%E6%95%99%E8%82%B2%E5%A7%94%E5%93%A1%E4%BC%9A%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F",
                "text": "○１番（土黒功司君） 御答弁ありがとうございます。スクールソーシャルワーカーに関して も、昨年度より９０万円予算のほうを増額していただき、雇用時間を３００時間増加してい るということで、本当に御対応ありがとうございます。また、今回それでスクールソーシャ ルワーカーについて、少しだけ私のほうでも福岡県教育委員会の資料を提示させていただく",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "cited_message_id": "cca3fd2b-3bc1-4152-a188-25a4313025e8",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4408,
                  "end_line_num": 4411,
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
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%83%96%E3%83%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9F%20%E3%81%A0%E6%AE%8B%E5%BF%B5%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AB%E3%80%81%E7%A7%81%E3%81%8C%E5%AE%87%E5%9C%9F%E5%B8%82%E5%86%85%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E5%8B%95%E3%81%8D%E3%81%AE%E3%81%82%E3%82%8B%E4%B8%AD%E3%81%A7%E3%81%AF%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E4%BD%99%E3%82%8A%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%AE%87%E5%9C%9F%E5%B8%82%20%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%A6%8B%E3%82%8B%E6%A9%9F%E4%BC%9A%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%20%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E5%AE%9F%E3%81%AF%E7%B5%90%E6%A7%8B%E3%81%82%E3%82%93%E3%81%BE%E3%82%8A%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E7%8F%BE%E7%8A%B6%E3%82%92%E7%A7%81%E3%81%AE%E4%B8%AD%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE",
                "text": "ブルであったり、本当にたくさんの宇土市の特産品があるというふうに思っております。た だ残念なことに、私が宇土市内でいろいろ動きのある中では、やはり余りそういった宇土市 の特産品というのがどういったものがあるのかというのを見る機会はありませんし、市民の 人たちに聞いても、実は結構あんまり知られていないという現状を私の中では感じておりま",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "cited_message_id": "ab976812-7178-4bcd-a53f-d53bdfe19c73",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 26,
                  "connector_source": ""
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3011,
              "end_ix": 3023,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
                "text": "会派「風」",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 48,
                  "cited_message_id": "c43c26d7-9060-4503-8e2e-fc8754509bf6",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 88,
                  "end_line_num": 96,
                  "connector_source": null
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3023,
              "end_ix": 3037,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "ひじくろこうじ後援会",
                "url": "https://hijikurokoji.com/#:~:text=1997%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E7%AB%8B%E5%AE%87%E5%9C%9F%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E5%8D%92%E6%A5%AD%202001%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%B7%A5%E5%AD%A6%E9%83%A8%E6%95%B0%E7%90%86%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E7%A7%91%E5%8D%92%E6%A5%AD%202003%E5%B9%B43%E6%9C%88,IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
                "text": "1997年3月 熊本県立宇土高等学校卒業 2001年3月 熊本大学工学部数理情報システム工学科卒業 2003年3月 熊本大学大学院自然科学研究科卒業 2003年4月～2007年7月 NECエレクトロニクス入社 神奈川県勤務（2007年8月退社） 2007年9月～2008年8月 ワーキングホリデーでオーストラリア留学 2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 50,
                  "cited_message_id": "b2bcc586-7dd8-47c5-9cee-a49dc3f80f1b",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 134,
                  "end_line_num": 142,
                  "connector_source": null
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
                "title": "",
                "url": "https://www.city.uto.lg.jp/d?q=dd4d1f8a99f98c04fcf8c5de2780b169.pdf#:~:text=%EF%BC%91%E7%95%AA%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E8%AD%B0%E5%93%A1%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2021%20%EF%BC%91,%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2030%20%EF%BC%94%20%E5%9C%B0%E5%9F%9F%E9%98%B2%E7%81%BD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B734",
                "text": "１番 土黒功司議員 ············································· 21 １ ローカル・マニフェスト「仕事を支える／賑わい創造」に 関して ················································· 21 ２ 学校教育向けＩＣＴ環境推進に関して ·····················26 ３ 不登校児童に関して ····································· 30 ４ 地域防災に関して ·······································34",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 54,
                  "cited_message_id": "78499c3b-e677-4380-a8e6-de932dacc174",
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 19,
                  "end_line_num": 24,
                  "connector_source": null
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【3†L78-L86】",
              "start_idx": 68,
              "end_idx": 79,
              "alt": null,
              "type": "webpage_extended",
              "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
              "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=",
              "pub_date": null,
              "snippet": "# 土黒 功司 (ひじくろ こうじ)",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【50†L140-L143】",
              "start_idx": 79,
              "end_idx": 93,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=2015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88,IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B%202023%E5%B9%B410%E6%9C%88%20%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%E9%81%B8%E6%8C%99%E5%BD%93%E9%81%B8%EF%BC%88%EF%BC%91%E6%9C%9F%E7%9B%AE%EF%BC%89",
              "pub_date": null,
              "snippet": "2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立 2023年10月 宇土市議会議員選挙当選（１期目）",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L134-L142】",
              "start_idx": 215,
              "end_idx": 229,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=1997%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E7%AB%8B%E5%AE%87%E5%9C%9F%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E5%8D%92%E6%A5%AD%202001%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%B7%A5%E5%AD%A6%E9%83%A8%E6%95%B0%E7%90%86%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E7%A7%91%E5%8D%92%E6%A5%AD%202003%E5%B9%B43%E6%9C%88,IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
              "pub_date": null,
              "snippet": "1997年3月 熊本県立宇土高等学校卒業 2001年3月 熊本大学工学部数理情報システム工学科卒業 2003年3月 熊本大学大学院自然科学研究科卒業 2003年4月～2007年7月 NECエレクトロニクス入社 神奈川県勤務（2007年8月退社） 2007年9月～2008年8月 ワーキングホリデーでオーストラリア留学 2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【48†L88-L96】",
              "start_idx": 316,
              "end_idx": 328,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
              "pub_date": null,
              "snippet": "会派「風」",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【13†L4112-L4120】",
              "start_idx": 536,
              "end_idx": 552,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%EF%BC%91%E7%95%AA%E3%80%81%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E6%94%B9%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BC%9A%E6%B4%BE%E3%80%81%E9%A2%A8%E3%81%AE%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E4%BB%8A%E6%97%A5%E3%81%AF%E3%80%81%E6%9C%AC%E5%B8%82%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%81%AE%E4%BB%B6%E3%80%81%E3%81%82%E3%81%A8%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%94%AF%20%E6%8F%B4%E3%81%AE%E4%BB%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%EF%BC%92%E7%82%B9%E5%BE%A1%E8%B3%AA%E5%95%8F%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9F%B7%E8%A1%8C%E9%83%A8%E3%81%AE%E7%9A%86%E6%A7%98%E3%80%81%E5%B8%82%E9%95%B7%E3%81%AB%E3%81%8A%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%97%E3%81%A6%E3%81%AF%E3%80%81,%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E3%81%9D%E3%82%8C%E3%81%A7%E3%81%AF%E3%80%81%E8%B3%AA%E5%95%8F%E3%81%AB%E7%A7%BB%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E7%9A%86%E6%A7%98%E3%82%82%E6%97%A5%E5%B8%B8%E3%81%AE%E7%94%9F%E6%B4%BB%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%20%E3%81%84%E3%82%8D%E3%82%93%E3%81%AA%E7%89%A9%E4%BE%A1%E9%AB%98%E9%A8%B0%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E3%82%AC%E3%82%BD%E3%83%AA%E3%83%B3%E4%BB%A3%E3%81%AE%E5%80%A4%E6%AE%B5%E3%81%8C%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%84%E3%82%8D%E3%82%93%E3%81%AA%E5%B8%82%E5%A0%B4%E3%81%AE%E5%A4%89%E5%8C%96%E3%81%A8",
              "pub_date": null,
              "snippet": "１番、土黒功司君。 ○１番（土黒功司君） 改めまして、おはようございます。会派、風の土黒功司でございます。 今日は、本市の魅力ある宇土市に向けた地域経済の件、あと子育て支援の保護者に関する支 援の件について、２点御質問させていただきます。執行部の皆様、市長におかれましては、 熱意ある御答弁をよろしくお願いいたします。引き続き、質問席から質問させていただきま す。 ○議長（藤井慶峰君） 土黒功司君。 ○１番（土黒功司君） それでは、質問に移らせていただきます。皆様も日常の生活において いろんな物価高騰であったり、ガソリン代の値段が上がったりとか、いろんな市場の変化と",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【19†L4229-L4233】",
              "start_idx": 552,
              "end_idx": 568,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E8%A6%96%E7%82%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E5%9C%B0%E5%9F%9F%E7%94%A3%E6%A5%AD%E3%81%AE%20%E7%99%BA%E5%B1%95%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6%E3%81%AF%E3%80%81%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%82%93%20%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E6%9C%80%E5%BE%8C%E3%81%AB%E5%B8%82%E9%95%B7%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E5%BE%8C%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%AE%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%94%A3%E6%A5%AD%20%E6%8C%AF%E8%88%88%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6%E3%80%81%E4%BB%8A%E5%BE%8C%E3%81%AE%E5%8F%96%E7%B5%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89,%E5%B8%82%E9%95%B7%E3%80%81%E5%85%83%E6%9D%BE%E8%8C%82%E6%A8%B9%E5%90%9B%E3%80%82",
              "pub_date": null,
              "snippet": "てくれということではないんですけれども、こういった視点が本当にこれからの地域産業の 発展に向けては、非常に大事になってくるのではないかというふうに思っております。そん な中で、最後に市長のほうにお尋ねいたします。今後の魅力のある宇土市に向けた地域産業 振興に向けて、今後の取組についてお伺いいたします。よろしくお願いいたします。 ○議長（藤井慶峰君） 市長、元松茂樹君。",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【14†L4148-L4156】",
              "start_idx": 686,
              "end_idx": 702,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E5%8E%9F%E6%9D%90%E6%96%99%E3%81%AE%E4%BE%A1%E6%A0%BC%E4%B8%8A%E6%98%87%E5%88%86%E3%81%AE%E4%BE%A1%E6%A0%BC%E8%BB%A2%E5%AB%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%A3%B2%E5%80%A4%E3%81%AB%E5%8F%8D%E6%98%A0%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%A6%E3%81%84%20%E3%81%BE%E3%81%99%E3%81%8C%E3%80%81%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC%E7%B3%BB%E3%81%AE%E4%BE%A1%E6%A0%BC%E4%B8%8A%E6%98%87%E5%88%86%E3%82%92%E8%A3%9C%E3%81%86%E3%81%BE%E3%81%A7%E3%81%AF%E8%87%B3%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%89%E3%81%9A%E3%80%81%E4%BE%9D%E7%84%B6%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E7%B5%8C%E5%96%B6%E3%81%8C%E5%8E%B3%E3%81%97%E3%81%84%20%E7%8A%B6%E6%B3%81%E3%81%AF%E7%B6%9A%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20%E5%B8%82%E5%86%85%E3%81%AE%E7%8F%BE%E7%8A%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AA%E8%AA%BF%E6%9F%BB%E3%81%AF%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8C%E3%80%81%E4%BB%A4%E5%92%8C%EF%BC%95%E5%B9%B4%EF%BC%95%E6%9C%88%EF%BC%98%E6%97%A5%E3%81%AB%E5%AE%9F%E6%96%BD%E3%81%95%E3%82%8C%20%E3%81%BE%E3%81%97%E3%81%9F%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E5%95%86%E5%B7%A5%E4%BC%9A%E9%9D%92%E5%B9%B4%E9%83%A8%E5%BD%B9%E5%93%A1%E4%BC%9A%E3%81%A7%E3%81%AE%E6%84%8F%E8%A6%8B%E4%BA%A4%E6%8F%9B%E3%81%AE%E9%9A%9B%E3%81%AB%E3%80%81%E6%99%AF%E6%B0%97%E3%81%8C%E6%82%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E5%BE%A1%E6%84%8F%E8%A6%8B%E3%81%AF%E4%BD%99%E3%82%8A%E8%81%9E,%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%81%97%E3%81%8B%E3%81%97%E3%80%81%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E5%89%8D%E3%81%AE%E6%B0%B4%E6%BA%96%E3%81%AB%E5%9B%9E%E5%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%BE%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%82%89%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%89%E3%82%8C%E3%81%AA%20%E3%81%84%E3%82%88%E3%81%86%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E5%A4%9A%E3%81%8F%E3%81%AE%E7%B5%8C%E5%96%B6%E8%80%85%E3%81%AE%E6%96%B9%E3%80%85%E3%81%8B%E3%82%89%E3%80%81%E6%99%AF%E6%B0%97%E5%9B%9E%E5%BE%A9%E3%81%AB%E3%81%AF%E6%9C%80%E4%BD%8E%E8%B3%83%E9%87%91%E3%81%AE%E4%B8%8A%E6%98%87%E3%81%AB%E3%82%88%E3%82%8B%E4%BA%BA%E4%BB%B6%E8%B2%BB%20%E3%81%AE%E9%AB%98%E9%A8%B0%E3%82%84%E3%80%81%E4%BA%BA%E6%9D%90%E4%B8%8D%E8%B6%B3%E3%81%AE%E8%A7%A3%E6%B6%88%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%82%E3%82%8B%E3%81%A8%E3%81%AE%E5%BE%A1%E6%84%8F%E8%A6%8B%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E4%BB%A5%E4%B8%8A%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "しかし、原材料の価格上昇分の価格転嫁について、売値に反映できるようになってきてい ますが、エネルギー系の価格上昇分を補うまでは至っておらず、依然として、経営が厳しい 状況は続いております。 市内の現状について、具体的な調査は行っておりませんが、令和５年５月８日に実施され ました、宇土市商工会青年部役員会での意見交換の際に、景気が悪いという御意見は余り聞 かれませんでした。しかし、コロナ禍前の水準に回復しているとまでは感じられておられな いようでした。また、多くの経営者の方々から、景気回復には最低賃金の上昇による人件費 の高騰や、人材不足の解消が必要であるとの御意見がありました。 以上でございます。",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L4198-L4203】",
              "start_idx": 702,
              "end_idx": 718,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%9B%BD%E3%81%AE%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E5%9F%BA%E6%9C%AC%E6%B3%95%E3%81%AE%E6%94%B9%E6%AD%A3%E3%81%AB%E4%BC%B4%E3%81%A3%E3%81%A6%E3%80%81%20%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E6%97%A9%E6%80%A5%E3%81%AB%E6%9D%A1%E4%BE%8B%E5%8C%96%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E3%81%BE%E3%81%9F%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E5%B8%82%E5%86%85%E3%81%AE%E7%B5%8C%E6%B8%88%E5%9B%A3%E4%BD%93%E3%81%AB%E5%91%BC%20%E3%81%B3%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E8%A9%B1%E3%81%97%E5%90%88%E3%81%84%E3%82%92%E3%81%95%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E7%8F%BE%E7%8A%B6%E6%8A%8A%E6%8F%A1%E3%81%AB%E5%8A%AA%E3%82%81%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E6%9D%A1%E4%BE%8B%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E6%B7%B1%E5%A0%80%E3%82%8A%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E6%9D%A1%E4%BE%8B%E3%81%A8,%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AF%E3%82%84%E3%81%AF%E3%82%8A%E6%9D%A1%E4%BE%8B%E3%81%AE%E4%B8%AD%E8%BA%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F%E5%88%B6%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%82%20%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E4%BD%9C%E3%81%A3%E3%81%9F%E5%BE%8C%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。国の中小企業基本法の改正に伴って、 宇土市のほうでも早急に条例化していただき、またコロナ禍においても市内の経済団体に呼 び掛けられて話し合いをされたということで、本当に現状把握に努められていると思います。 そんな中で、今回少しだけ条例のことについてもう少し深堀りさせていただきます。条例と いうことで、私としてはやはり条例の中身であったりとか、せっかく制定されているのであ れば、実際作った後の活用というのが本当に非常に大事ではないかというふうに感じており",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4314-L4322】",
              "start_idx": 885,
              "end_idx": 901,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%A6%AA%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E5%9B%9E%E7%AD%94%E3%82%92%20%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%AE%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%A7%E5%8F%96%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F%E3%80%81%E5%AE%B6%20%E5%BA%AD%E8%A8%AA%E5%95%8F%E5%9E%8B%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E4%BA%8B%E6%A5%AD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E3%80%81%E4%BB%8A%E5%B9%B4%E3%81%AE%E5%A4%8F%E3%80%81%E6%B5%A6%E6%9C%AC%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%9D%E3%81%AE%E4%BB%96%E5%AE%87%E5%9C%9F%20%E5%B8%82%E3%81%AE%E6%96%B9%EF%BC%92%E5%90%8D%E3%81%A8%E4%BD%B5%E3%81%9B%E3%81%A6%E3%80%81%E6%9D%B1%E4%BA%AC%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E8%A6%96%E5%AF%9F%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E3%81%9D%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AB%E5%88%9D%E3%82%81%E3%81%A6%E3%81%93%E3%81%AE%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC,%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BA%8B%E6%A5%AD%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%81%9E%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%99%E3%81%B0%E3%82%89%E3%81%97%E3%81%84%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E6%B0%91%E9%96%93%E3%81%AE%E3%81%9D%E3%81%93%E3%81%AF%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E7%B6%9A%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E5%89%8D%20%E3%81%8B%E3%82%89%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AD%90%E8%82%B2%E3%81%A6%E3%81%AB%E6%82%A9%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E6%96%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E6%94%AF%E6%8F%B4%E3%82%92%E7%B6%99%E7%B6%9A%E3%81%95%20%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%B8%80%E7%95%AA%E5%8D%B0%E8%B1%A1%E3%81%AB%E6%AE%8B%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E6%94%AF%E6%8F%B4%E3%82%92%E5%8F%97%E3%81%91%E3%81%9F%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%95%E3%82%93%E3%81%8C%E3%80%81%E4%BB%8A%E5%BA%A6%E3%81%AF%E3%81%9D%E3%81%93%E3%81%AB%E3%81%A4%E3%81%8F%E3%82%89%20%E3%82%8C%E3%81%9F%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AE%E6%96%BD%E8%A8%AD%E9%95%B7%E3%82%92%E3%81%95%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%9C%B0%E5%9F%9F%E5%86%85%E3%81%AE",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。親の気持ちに寄り添ったという回答を いただき、本当にありがとうございます。また、今回の御答弁で取り上げていただいた、家 庭訪問型子育て支援ホームスタートという事業に関して、今年の夏、浦本議員とその他宇土 市の方２名と併せて、東京のほうに視察に行って、私もそのときに初めてこのホームスター トという支援の事業があるというのを聞いて、本当にすばらしいなというふうに感じました。 民間のそこは、２０年続けられているというのをお伺いしているのですけれども、２０年前 から本当に子育てに悩んでいる保護者に対して、民間の方が本当に寄り添った支援を継続さ れており、一番印象に残ったのは、そこで支援を受けた保護者さんが、今度はそこにつくら れた居場所づくりのところの施設長をされるまでになっておりました。そういった地域内の",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4327-L4331】",
              "start_idx": 1000,
              "end_idx": 1016,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E6%AC%A1%E3%81%AB%E3%80%81%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E8%A6%96%E7%82%B9%E3%82%92%E5%A4%89%E3%81%88%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%B0%B1%E5%AD%A6%E5%BE%8C%E3%81%AE%E5%AD%A6%E6%A0%A1%E3%81%AE%E4%BB%8A%E3%81%AE%E7%8A%B6%E6%B3%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%20%E3%81%8B%E3%82%89%E8%B3%87%E6%96%99%E3%82%92%E5%BE%A1%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E3%80%81%E5%AD%A6%E6%A0%A1%E3%81%AE%E4%B8%AD%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%81%AF%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E4%B8%8D%E7%99%BB%E6%A0%A1%E3%81%AE%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%20%E3%81%A1%E3%81%8C%E3%81%A8%E3%81%A6%E3%82%82%E5%A4%9A%E3%81%8F%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E7%8A%B6%E6%B3%81%E3%82%92%E7%9A%86%E6%A7%98%E3%82%82%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E7%A7%81%E3%82%82%E8%AD%B0%E5%93%A1%E3%81%AB%E3%81%AA%20%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%BE%A1%E7%9B%B8%E8%AB%87%E3%81%AE%E5%A3%B0%E3%82%92%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%BB%8A%E5%9B%9E%E3%80%81%E5%AE%9F%E9%9A%9B%E3%81%A9%E3%81%86%E3%81%AA%E3%81%AE%E3%81%8B%20%E3%81%A8%E3%81%84%E3%81%86%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92%E3%80%81%E5%9B%BD%E3%81%AE%E3%81%93%E3%81%A1%E3%82%89%E3%81%AF%E7%8B%AC%E7%AB%8B%E8%A1%8C%E6%94%BF%E6%B3%95%E4%BA%BA%E6%95%99%E8%82%B2%E6%94%AF%E6%8F%B4%E6%A9%9F%E6%A7%8B%E6%A7%98%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8A%9C%E7%B2%8B%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F",
              "pub_date": null,
              "snippet": "次に、ちょっと視点を変えまして、就学後の学校の今の状況について、ちょっと私のほう から資料を御提示させていただきます。今、学校の中においては、本当に不登校の子どもた ちがとても多くなっているという状況を皆様も知られていることと思います。私も議員にな らせていただいて、本当にたくさんの御相談の声をいただいており、今回、実際どうなのか というところを、国のこちらは独立行政法人教育支援機構様の資料を抜粋させていただいた",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【27†L4408-L4411】",
              "start_idx": 1108,
              "end_idx": 1124,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%E3%82%82%E3%80%81%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%82%88%E3%82%8A%EF%BC%99%EF%BC%90%E4%B8%87%E5%86%86%E4%BA%88%E7%AE%97%E3%81%AE%E3%81%BB%E3%81%86%E3%82%92%E5%A2%97%E9%A1%8D%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E9%9B%87%E7%94%A8%E6%99%82%E9%96%93%E3%82%92%EF%BC%93%EF%BC%90%EF%BC%90%E6%99%82%E9%96%93%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%20%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BE%A1%E5%AF%BE%E5%BF%9C%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%20%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E7%A6%8F%E5%B2%A1%E7%9C%8C%E6%95%99%E8%82%B2%E5%A7%94%E5%93%A1%E4%BC%9A%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。スクールソーシャルワーカーに関して も、昨年度より９０万円予算のほうを増額していただき、雇用時間を３００時間増加してい るということで、本当に御対応ありがとうございます。また、今回それでスクールソーシャ ルワーカーについて、少しだけ私のほうでも福岡県教育委員会の資料を提示させていただく",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【36†L4415-L4420】",
              "start_idx": 1282,
              "end_idx": 1298,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E5%89%8D%E7%BD%AE%E3%81%8D%E3%81%8C%E9%95%B7%E3%81%8F%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%81%8C%E3%80%81%E8%B3%AA%E5%95%8F%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E7%A7%BB%E3%82%89%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20%E3%81%A7%E3%81%99%E3%80%82%E6%95%B0%E6%97%A5%E5%89%8D%E3%81%8B%E3%82%89%E5%AE%87%E5%9C%9F%E5%B8%82%E3%82%82%E6%A2%85%E9%9B%A8%E5%85%A5%E3%82%8A%E3%82%92%E3%81%97%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E6%98%A8%E6%97%A5%E3%81%8B%E3%82%89%E9%9B%A8%E3%81%8C%E9%99%8D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E6%9C%9D%E3%82%82%E3%81%9F%E3%81%97%20%E3%81%8B%E9%B9%BF%E5%85%90%E5%B3%B6%E3%81%8C%E6%97%A9%E9%80%9F%E7%B7%9A%E7%8A%B6%E9%99%8D%E6%B0%B4%E5%B8%AF%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E3%82%82%E7%B7%9A%E7%8A%B6%E9%99%8D%E6%B0%B4%E5%B8%AF%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BD%93%20%E3%81%9F%E3%82%8A%E5%89%8D%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E7%8A%B6%E6%B3%81%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%E7%9A%86%E6%A7%98%E3%81%AE%E9%98%B2%E7%81%BD%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E6%84%8F%E8%AD%98%E3%82%82%E6%9C%AC%E5%BD%93%E3%81%AB%E9%AB%98%E3%81%BE%E3%81%A3%20%E3%81%A6%E3%81%84%E3%82%8B%E3%81%8B%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E5%8F%96%E3%82%8A%E7%B5%84%E3%82%93%E3%81%A7%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84,%E3%81%A6%E3%81%84%E3%82%8B%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E4%B8%AD%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%EF%BC%97%E5%9C%B0%E5%8C%BA%E3%81%AE%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E5%9C%B0%E5%8C%BA%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%81%8C%E5%8B%95%E3%81%84",
              "pub_date": null,
              "snippet": "前置きが長くなりましたが、質問のほうに移らせていただきます。地区防災計画について です。数日前から宇土市も梅雨入りをしまして、昨日から雨が降っております。今朝もたし か鹿児島が早速線状降水帯が発生したということで、今回も線状降水帯というのが本当に当 たり前のように発生する状況になりまして、市民の皆様の防災に対する意識も本当に高まっ ているかなというふうに思っております。そんな中で、宇土市のほうで取り組んでいただい ている地区防災計画、宇土市の中における７地区のそれぞれの地区における防災計画が動い",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【35†L25-L30】",
              "start_idx": 1298,
              "end_idx": 1310,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E2%97%8B%E8%AD%B0%E9%95%B7%EF%BC%88%E8%97%A4%E4%BA%95%E6%85%B6%E5%B3%B0%E5%90%9B%EF%BC%89%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%B5%B0%E6%BD%9F%E5%9C%B0%E5%8C%BA%E3%81%8C%E5%85%88%E8%A1%8C%E3%81%97%E3%81%A6%E5%9C%B0%E5%8C%BA%E9%98%B2%E7%81%BD%E8%A8%88%E7%94%BB%E3%82%92%E7%AB%8B%20%E3%81%A6%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%82%82%E8%B5%B0%E6%BD%9F%E4%BD%8F%E6%B0%91%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%97%E3%81%A6%E5%8C%BA%E9%95%B7%E4%BC%9A%E3%81%AB%E3%82%82%E5%8F%82%E5%8A%A0%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0,%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%81%97%E3%80%81%EF%BC%B0%EF%BC%B4%EF%BC%A1%E4%BC%9A%E9%95%B7%E3%81%A8%E3%81%97%E3%81%A6%E3%82%82%E3%81%93%E3%81%AE%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97%E3%81%AB%E3%82%82%E5%8F%82%E5%8A%A0%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81",
              "pub_date": null,
              "snippet": "○議長（藤井慶峰君） 土黒功司君 ○１番（土黒功司君） 御答弁ありがとうございます。走潟地区が先行して地区防災計画を立 てられているということで、私も走潟住民として、議員として区長会にも参加させていただ いておりますし、ＰＴＡ会長としてもこのワークショップにも参加させていただきまして、",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L19-L26】",
              "start_idx": 1433,
              "end_idx": 1445,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%83%96%E3%83%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9F%20%E3%81%A0%E6%AE%8B%E5%BF%B5%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AB%E3%80%81%E7%A7%81%E3%81%8C%E5%AE%87%E5%9C%9F%E5%B8%82%E5%86%85%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E5%8B%95%E3%81%8D%E3%81%AE%E3%81%82%E3%82%8B%E4%B8%AD%E3%81%A7%E3%81%AF%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E4%BD%99%E3%82%8A%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%AE%87%E5%9C%9F%E5%B8%82%20%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%A6%8B%E3%82%8B%E6%A9%9F%E4%BC%9A%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%20%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E5%AE%9F%E3%81%AF%E7%B5%90%E6%A7%8B%E3%81%82%E3%82%93%E3%81%BE%E3%82%8A%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E7%8F%BE%E7%8A%B6%E3%82%92%E7%A7%81%E3%81%AE%E4%B8%AD%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE",
              "pub_date": null,
              "snippet": "ブルであったり、本当にたくさんの宇土市の特産品があるというふうに思っております。た だ残念なことに、私が宇土市内でいろいろ動きのある中では、やはり余りそういった宇土市 の特産品というのがどういったものがあるのかというのを見る機会はありませんし、市民の 人たちに聞いても、実は結構あんまり知られていないという現状を私の中では感じておりま",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L25-L26】",
              "start_idx": 1507,
              "end_idx": 1519,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E4%B8%AD%E3%81%A7%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%AE%EF%BC%B0%EF%BC%B2%E6%B4%BB%E5%8B%95%E3%81%AE%E7%8F%BE%E7%8A%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E7%B5%8C%E6%B8%88%E9%83%A8%E9%95%B7%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%20%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "す。そういった中で、宇土市の特産品のＰＲ活動の現状について、経済部長にお尋ねいたし ます。よろしくお願いいたします。",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【38†L4534-L4537】",
              "start_idx": 1519,
              "end_idx": 1535,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%81%A9%E3%82%82%E3%80%81%E3%81%BE%E3%81%9A%E4%B8%80%E7%95%AA%E3%81%AE%E8%B6%B3%E5%85%83%E3%81%A7%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E5%BD%B9%E6%89%80%EF%BC%91%E9%9A%8E%E3%81%AE%E5%B8%82%E6%B0%91%E4%BA%A4%E6%B5%81%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%80%81%E3%81%9B%E3%81%A3%20%E3%81%8B%E3%81%8F%E3%81%93%E3%81%A1%E3%82%89%E3%81%AB%E5%B8%82%E6%B0%91%E3%81%8C%E4%B8%80%E7%95%AA%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E9%9B%86%E3%81%BE%E3%82%8B%E5%A0%B4%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%80%81%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92%E6%B4%BB%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%AA%20%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E8%80%83%E3%81%88%E3%81%9F%E6%AC%A1%E7%AC%AC%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E5%AE%9F%E7%8F%BE%E5%8F%AF%E8%83%BD%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%80%81%E7%B5%8C%E6%B8%88%E9%83%A8%E9%95%B7%20%E3%81%AB%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "されているんですけども、まず一番の足元である宇土市役所１階の市民交流スペース、せっ かくこちらに市民が一番たくさん集まる場がありますので、こういったところを活用できな いかというふうに考えた次第です。こういったところに関して実現可能かどうか、経済部長 にお尋ねいたします。よろしくお願いいたします。",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【40†L4567-L4575】",
              "start_idx": 1645,
              "end_idx": 1661,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E6%AC%A1%E3%81%AB%E7%A7%BB%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E5%89%8D%E5%9B%9E%E3%81%AB%E5%BC%95%E3%81%8D%E7%B6%9A%E3%81%8D%E3%80%81%E4%BB%8A%E5%9B%9E%E6%97%A7%E7%94%B0%E4%B8%AD%E4%BC%9A%E9%A4%A8%E6%A8%AA%E3%81%AB%E6%96%B0%E8%A8%AD%E4%BA%88%E5%AE%9A%E3%81%AE%E5%AD%90%E3%81%A9%E3%82%82%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%AB%20%E3%81%A4%E3%81%84%E3%81%A6%E3%81%8A%E5%B0%8B%E3%81%AD%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E4%BB%8A%E5%9B%9E%E3%81%93%E3%81%A1%E3%82%89%E7%94%B0%E4%B8%AD%E4%BC%9A%E9%A4%A8%E6%A8%AA%E3%81%AE%E4%B8%89%E8%A7%92%E3%82%A8%E3%83%AA%E3%82%A2%E3%81%AB%E3%81%A7%E3%81%99%E3%81%AD%E3%80%81%E3%81%BB%E3%81%A3%E3%81%A8%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%AE%20%E6%A9%9F%E8%83%BD%E3%82%82%E5%85%BC%E3%81%AD%E5%82%99%E3%81%88%E3%81%A4%E3%81%A4%E3%80%81%E6%97%A5%E4%B8%AD%E3%81%AE%E5%A4%95%E6%96%B9%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E5%9C%9F%E6%97%A5%E3%81%AF%E8%A6%AA%E5%AD%90%E3%81%AE%E4%BA%A4%E6%B5%81%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%82%8B%E5%AD%90%E3%81%A9%E3%82%82%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%20%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%AE%E6%96%BD%E8%A8%AD%E3%81%8C%E5%BB%BA%E8%A8%AD%E3%81%95%E3%82%8C%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E4%B8%AD%E3%80%81%E3%81%93%E3%81%93%E3%81%AB%E6%98%BC%E9%96%93%E5%AD%A6%E6%A0%A1%E3%81%AB%20%E8%A1%8C%E3%81%91%E3%81%AA%E3%81%84%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%81%8C%E9%9B%86%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E8%A6%AA%E5%AD%90%E3%81%8C%E8%87%AA%E7%84%B6%E3%81%A8%E4%BA%A4%E6%B5%81%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E5%A0%B4%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%80%81%E3%81%BE,%E3%81%95%E3%81%97%E3%81%8F%E3%82%B5%E3%83%BC%E3%83%89%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%81%A8%E3%81%84%E3%81%86%E4%BD%8D%E7%BD%AE%E3%81%A5%E3%81%91%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%81%AF%E3%80%81%E4%B9%97%E3%82%8A%E8%B6%8A%E3%81%88%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E6%A7%98%E3%80%85%E3%81%AA%E8%AA%B2%20%E9%A1%8C%E3%81%8C%E3%81%82%E3%82%8B%E3%81%8B%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9D%E3%81%93%E3%81%AF%E3%81%BE%E3%81%95%E3%81%97%E3%81%8F%E7%A6%8F%E7%A5%89%E7%9A%84%E3%81%AA%E8%A6%96%E7%82%B9%E3%80%81%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%81%8C%E5%AE%89%20%E5%BF%83%E3%81%97%E3%81%A6%E3%80%81%E5%AE%89%E5%85%A8%E3%81%A7%E3%81%9D%E3%81%93%E3%81%AB%E8%A1%8C%E3%81%8D%E3%81%9F%E3%81%8F%E3%81%AA%E3%82%8B%E3%80%81%E3%81%9D%E3%81%93%E3%81%AB%E5%AE%89%E5%BF%83%E3%81%97%E3%81%A6%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%8A%E3%81%9F%E3%81%8F%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E5%A0%B4%E6%89%80%E3%81%AB%E3%81%AA%E3%82%8B%E5%BF%85%20%E8%A6%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E5%91%A8%E3%82%8A%E3%81%AF%E6%96%B0%E5%B9%B9%E7%B7%9A%E3%81%8C%E9%80%9A%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F%E3%82%8A%E3%80%81%EF%BC%AA%EF%BC%B2%E3%81%8C%E9%80%9A%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F%E3%82%8A%E3%80%81%E6%A7%98%E3%80%85%E3%81%AA",
              "pub_date": null,
              "snippet": "次に移ります。前回に引き続き、今回旧田中会館横に新設予定の子どもサードプレイスに ついてお尋ねいたします。今回こちら田中会館横の三角エリアにですね、ほっとスペースの 機能も兼ね備えつつ、日中の夕方であったり、土日は親子の交流が生まれる子どもサードプ レイスの施設が建設されるというふうに聞いております。そういった中、ここに昼間学校に 行けない子どもたちが集まってきたりとか、親子が自然と交流していく場になっていく、ま さしくサードプレイスという位置づけになるためには、乗り越えなければいけない様々な課 題があるかなというふうに思っております。そこはまさしく福祉的な視点、子どもたちが安 心して、安全でそこに行きたくなる、そこに安心してとどまりたくなるような場所になる必 要があると思っておりまして、周りは新幹線が通っていたり、ＪＲが通っていたり、様々な",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【42†L31-L39】",
              "start_idx": 1843,
              "end_idx": 1855,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%80%81%E5%B8%82%E9%95%B7%E3%81%8C%E5%87%BA%E3%81%95%E3%82%8C%E3%81%9F%E3%80%8C%E4%B9%9D%E5%B7%9E%E3%81%AE%E3%81%A9%E3%81%BE%E3%82%93%E3%81%AA%E3%81%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%80%8D%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%80%81%E5%AE%87%20%E5%9C%9F%E5%B8%82%E3%81%AE%EF%BC%B0%EF%BC%B2%E6%88%A6%E7%95%A5%E3%80%81%E7%A7%81%E3%82%82%E3%81%93%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF%E5%AE%9F%E3%81%AF%E5%A4%A7%E5%A5%BD%E3%81%8D%E3%81%A7%E3%81%97%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E8%AD%B0%E5%93%A1%E3%81%AE%E9%81%B8%E6%8C%99%20%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AF%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E6%B4%BB%E5%8B%95%E3%81%A8%E3%81%8B%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E3%82%84%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AB%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E3%82%B3%E3%83%B3%20%E3%82%BB%E3%83%97%E3%83%88%E3%81%A0%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF%E5%A4%A7%E4%BA%8B%E3%81%AB%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%82%84%E3%81%AF%E3%82%8A%E3%81%93%E3%81%86%E3%81%84%E3%81%86%E3%82%AD%E3%83%A3",
              "pub_date": null,
              "snippet": "ただきました、今回、市長が出された「九州のどまんなか宇土市」のキャッチフレーズ、宇 土市のＰＲ戦略、私もこのキャッチフレーズというのは実は大好きでして、私も議員の選挙 のときはキャッチフレーズを作りましたし、市民活動とかいろいろやるときに、やはりコン セプトだったりとかキャッチフレーズというのは大事にしております。やはりこういうキャ",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【42†L43-L44】",
              "start_idx": 1855,
              "end_idx": 1867,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E5%88%9D%E3%82%81%E3%81%AB%E3%80%8C%E4%B9%9D%E5%B7%9E%E3%81%AE%E3%81%A9%E3%81%BE%E3%82%93%E3%81%AA%E3%81%8B%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%82%92%E7%94%A8%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E7%B5%8C%E7%B7%AF%E3%81%A8%E8%83%8C%E6%99%AF%E3%81%AB%20%E3%81%A4%E3%81%84%E3%81%A6%E5%BE%A1%E8%AA%AC%E6%98%8E%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "初めに「九州のどまんなか」というキャッチフレーズを用いることになった経緯と背景に ついて御説明いたします。",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【48†L88-L96】",
              "start_idx": 2071,
              "end_idx": 2083,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
              "pub_date": null,
              "snippet": "会派「風」",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【48†L88-L96】",
              "start_idx": 2118,
              "end_idx": 2130,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
              "pub_date": null,
              "snippet": "会派「風」",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【3†L80-L86】",
              "start_idx": 2196,
              "end_idx": 2207,
              "alt": null,
              "type": "webpage_extended",
              "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
              "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=Image%3A%20%E5%9C%9F%E9%BB%92%E8%AD%B0%E5%93%A1%E4%BC%9A%E6%B4%BE%E3%83%BB%E5%85%9A%E6%B4%BE%E5%90%8D%3A%E9%A2%A8",
              "pub_date": null,
              "snippet": "Image: 土黒議員会派・党派名:風",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【50†L145-L150】",
              "start_idx": 2228,
              "end_idx": 2242,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%20%E5%BD%B9%E8%81%B7",
              "pub_date": null,
              "snippet": "宇土市議会議員 役職",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L139-L142】",
              "start_idx": 2333,
              "end_idx": 2347,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=2009%E5%B9%B41%E6%9C%88%EF%BD%9E2015%E5%B9%B48%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%86%85%E3%81%AEIT%E4%BC%9A%E7%A4%BE%E3%81%A7%E5%8B%A4%E5%8B%99%202015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E,%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
              "pub_date": null,
              "snippet": "2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L139-L142】",
              "start_idx": 2409,
              "end_idx": 2423,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=2009%E5%B9%B41%E6%9C%88%EF%BD%9E2015%E5%B9%B48%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E5%86%85%E3%81%AEIT%E4%BC%9A%E7%A4%BE%E3%81%A7%E5%8B%A4%E5%8B%99%202015%E5%B9%B49%E6%9C%88%20IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E,%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
              "pub_date": null,
              "snippet": "2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【52†L24-L26】",
              "start_idx": 2506,
              "end_idx": 2518,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/index.php#message#:~:text=%E3%81%9D%E3%82%93%E3%81%AA%E6%84%9B%E3%81%99%E3%82%8B%E5%AE%87%E5%9C%9F%E3%82%92%E3%82%82%E3%81%A3%E3%81%A8%E5%A4%A2%E3%81%82%E3%82%8B%E3%83%9E%E3%83%81%E3%81%AB%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB",
              "pub_date": null,
              "snippet": "そんな愛する宇土をもっと夢あるマチにするために",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【54†L19-L24】",
              "start_idx": 2715,
              "end_idx": 2727,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=dd4d1f8a99f98c04fcf8c5de2780b169.pdf#:~:text=%EF%BC%91%E7%95%AA%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E8%AD%B0%E5%93%A1%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2021%20%EF%BC%91,%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2030%20%EF%BC%94%20%E5%9C%B0%E5%9F%9F%E9%98%B2%E7%81%BD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B734",
              "pub_date": null,
              "snippet": "１番 土黒功司議員 ············································· 21 １ ローカル・マニフェスト「仕事を支える／賑わい創造」に 関して ················································· 21 ２ 学校教育向けＩＣＴ環境推進に関して ·····················26 ３ 不登校児童に関して ····································· 30 ４ 地域防災に関して ·······································34",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【60†L59-L60】",
              "start_idx": 2790,
              "end_idx": 2802,
              "alt": null,
              "type": "webpage_extended",
              "title": "議員活動報告｜土黒功司（宇土市議会議員）",
              "url": "https://note.com/hijikurokoji/n/n9aa17473e8fb#:~:text=2023%E5%B9%B410%E6%9C%88%E3%82%88%E3%82%8A%E3%80%81%E5%AE%87%E5%9C%9F%E5%B8%82%E8%AD%B0%E4%BC%9A%E8%AD%B0%E5%93%A1%E3%82%92%E3%82%84%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20%E8%8B%A5%E3%81%84%E5%8A%9B%E3%80%81%E6%96%B0%E3%81%97%E3%81%84%E7%99%BA%E6%83%B3%E3%81%A7%E3%80%8C%E5%A4%A2%E3%80%8D%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E3%82%92%EF%BC%81%20%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%A8%E3%80%81%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E6%9E%B6%E3%81%91%E6%A9%8B%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "2023年10月より、宇土市議会議員をやっております。 若い力、新しい発想で「夢」ある宇土を！ これまでと、これからの架け橋となります。",
              "attribution": "note.com",
              "icon_type": null
            },
            {
              "matched_text": "【3†L80-L86】",
              "start_idx": 2924,
              "end_idx": 2935,
              "alt": null,
              "type": "webpage_extended",
              "title": "市議会議員紹介(顔写真付)｜宇土市公式ホームページ",
              "url": "https://www.city.uto.lg.jp/article/view/1258/365.html#:~:text=Image%3A%20%E5%9C%9F%E9%BB%92%E8%AD%B0%E5%93%A1%E4%BC%9A%E6%B4%BE%E3%83%BB%E5%85%9A%E6%B4%BE%E5%90%8D%3A%E9%A2%A8",
              "pub_date": null,
              "snippet": "Image: 土黒議員会派・党派名:風",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【13†L4112-L4115】",
              "start_idx": 2935,
              "end_idx": 2951,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%EF%BC%91%E7%95%AA%E3%80%81%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%E3%80%82%20%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E6%94%B9%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%80%81%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E4%BC%9A%E6%B4%BE%E3%80%81%E9%A2%A8%E3%81%AE%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E4%BB%8A%E6%97%A5%E3%81%AF%E3%80%81%E6%9C%AC%E5%B8%82%E3%81%AE%E9%AD%85%E5%8A%9B%E3%81%82%E3%82%8B%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E3%81%AE%E4%BB%B6%E3%80%81%E3%81%82%E3%81%A8%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%94%AF%20%E6%8F%B4%E3%81%AE%E4%BB%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%EF%BC%92%E7%82%B9%E5%BE%A1%E8%B3%AA%E5%95%8F%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E5%9F%B7%E8%A1%8C%E9%83%A8%E3%81%AE%E7%9A%86%E6%A7%98%E3%80%81%E5%B8%82%E9%95%B7%E3%81%AB%E3%81%8A%E3%81%8B%E3%82%8C%E3%81%BE%E3%81%97%E3%81%A6%E3%81%AF%E3%80%81",
              "pub_date": null,
              "snippet": "１番、土黒功司君。 ○１番（土黒功司君） 改めまして、おはようございます。会派、風の土黒功司でございます。 今日は、本市の魅力ある宇土市に向けた地域経済の件、あと子育て支援の保護者に関する支 援の件について、２点御質問させていただきます。執行部の皆様、市長におかれましては、",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【17†L4198-L4203】",
              "start_idx": 2951,
              "end_idx": 2967,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%9B%BD%E3%81%AE%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E5%9F%BA%E6%9C%AC%E6%B3%95%E3%81%AE%E6%94%B9%E6%AD%A3%E3%81%AB%E4%BC%B4%E3%81%A3%E3%81%A6%E3%80%81%20%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E6%97%A9%E6%80%A5%E3%81%AB%E6%9D%A1%E4%BE%8B%E5%8C%96%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E3%81%BE%E3%81%9F%E3%82%B3%E3%83%AD%E3%83%8A%E7%A6%8D%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%82%82%E5%B8%82%E5%86%85%E3%81%AE%E7%B5%8C%E6%B8%88%E5%9B%A3%E4%BD%93%E3%81%AB%E5%91%BC%20%E3%81%B3%E6%8E%9B%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E8%A9%B1%E3%81%97%E5%90%88%E3%81%84%E3%82%92%E3%81%95%E3%82%8C%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E7%8F%BE%E7%8A%B6%E6%8A%8A%E6%8F%A1%E3%81%AB%E5%8A%AA%E3%82%81%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E3%81%9D%E3%82%93%E3%81%AA%E4%B8%AD%E3%81%A7%E3%80%81%E4%BB%8A%E5%9B%9E%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E6%9D%A1%E4%BE%8B%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%82%82%E3%81%86%E5%B0%91%E3%81%97%E6%B7%B1%E5%A0%80%E3%82%8A%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%E6%9D%A1%E4%BE%8B%E3%81%A8,%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E7%A7%81%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AF%E3%82%84%E3%81%AF%E3%82%8A%E6%9D%A1%E4%BE%8B%E3%81%AE%E4%B8%AD%E8%BA%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%81%A8%E3%81%8B%E3%80%81%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F%E5%88%B6%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%82%20%E3%82%8C%E3%81%B0%E3%80%81%E5%AE%9F%E9%9A%9B%E4%BD%9C%E3%81%A3%E3%81%9F%E5%BE%8C%E3%81%AE%E6%B4%BB%E7%94%A8%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E9%9D%9E%E5%B8%B8%E3%81%AB%E5%A4%A7%E4%BA%8B%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。国の中小企業基本法の改正に伴って、 宇土市のほうでも早急に条例化していただき、またコロナ禍においても市内の経済団体に呼 び掛けられて話し合いをされたということで、本当に現状把握に努められていると思います。 そんな中で、今回少しだけ条例のことについてもう少し深堀りさせていただきます。条例と いうことで、私としてはやはり条例の中身であったりとか、せっかく制定されているのであ れば、実際作った後の活用というのが本当に非常に大事ではないかというふうに感じており",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4314-L4322】",
              "start_idx": 2967,
              "end_idx": 2983,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E8%A6%AA%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%84%E3%81%86%E5%9B%9E%E7%AD%94%E3%82%92%20%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%AE%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%A7%E5%8F%96%E3%82%8A%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%84%E3%81%9F%E3%80%81%E5%AE%B6%20%E5%BA%AD%E8%A8%AA%E5%95%8F%E5%9E%8B%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E4%BA%8B%E6%A5%AD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%E3%80%81%E4%BB%8A%E5%B9%B4%E3%81%AE%E5%A4%8F%E3%80%81%E6%B5%A6%E6%9C%AC%E8%AD%B0%E5%93%A1%E3%81%A8%E3%81%9D%E3%81%AE%E4%BB%96%E5%AE%87%E5%9C%9F%20%E5%B8%82%E3%81%AE%E6%96%B9%EF%BC%92%E5%90%8D%E3%81%A8%E4%BD%B5%E3%81%9B%E3%81%A6%E3%80%81%E6%9D%B1%E4%BA%AC%E3%81%AE%E3%81%BB%E3%81%86%E3%81%AB%E8%A6%96%E5%AF%9F%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%80%81%E7%A7%81%E3%82%82%E3%81%9D%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AB%E5%88%9D%E3%82%81%E3%81%A6%E3%81%93%E3%81%AE%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC,%E3%83%88%E3%81%A8%E3%81%84%E3%81%86%E6%94%AF%E6%8F%B4%E3%81%AE%E4%BA%8B%E6%A5%AD%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%81%9E%E3%81%84%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%99%E3%81%B0%E3%82%89%E3%81%97%E3%81%84%E3%81%AA%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%84%9F%E3%81%98%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20%E6%B0%91%E9%96%93%E3%81%AE%E3%81%9D%E3%81%93%E3%81%AF%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E7%B6%9A%E3%81%91%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E3%81%8A%E4%BC%BA%E3%81%84%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82%E3%80%81%EF%BC%92%EF%BC%90%E5%B9%B4%E5%89%8D%20%E3%81%8B%E3%82%89%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AD%90%E8%82%B2%E3%81%A6%E3%81%AB%E6%82%A9%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%80%81%E6%B0%91%E9%96%93%E3%81%AE%E6%96%B9%E3%81%8C%E6%9C%AC%E5%BD%93%E3%81%AB%E5%AF%84%E3%82%8A%E6%B7%BB%E3%81%A3%E3%81%9F%E6%94%AF%E6%8F%B4%E3%82%92%E7%B6%99%E7%B6%9A%E3%81%95%20%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%E3%80%81%E4%B8%80%E7%95%AA%E5%8D%B0%E8%B1%A1%E3%81%AB%E6%AE%8B%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF%E3%80%81%E3%81%9D%E3%81%93%E3%81%A7%E6%94%AF%E6%8F%B4%E3%82%92%E5%8F%97%E3%81%91%E3%81%9F%E4%BF%9D%E8%AD%B7%E8%80%85%E3%81%95%E3%82%93%E3%81%8C%E3%80%81%E4%BB%8A%E5%BA%A6%E3%81%AF%E3%81%9D%E3%81%93%E3%81%AB%E3%81%A4%E3%81%8F%E3%82%89%20%E3%82%8C%E3%81%9F%E5%B1%85%E5%A0%B4%E6%89%80%E3%81%A5%E3%81%8F%E3%82%8A%E3%81%AE%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AE%E6%96%BD%E8%A8%AD%E9%95%B7%E3%82%92%E3%81%95%E3%82%8C%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%9C%B0%E5%9F%9F%E5%86%85%E3%81%AE",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。親の気持ちに寄り添ったという回答を いただき、本当にありがとうございます。また、今回の御答弁で取り上げていただいた、家 庭訪問型子育て支援ホームスタートという事業に関して、今年の夏、浦本議員とその他宇土 市の方２名と併せて、東京のほうに視察に行って、私もそのときに初めてこのホームスター トという支援の事業があるというのを聞いて、本当にすばらしいなというふうに感じました。 民間のそこは、２０年続けられているというのをお伺いしているのですけれども、２０年前 から本当に子育てに悩んでいる保護者に対して、民間の方が本当に寄り添った支援を継続さ れており、一番印象に残ったのは、そこで支援を受けた保護者さんが、今度はそこにつくら れた居場所づくりのところの施設長をされるまでになっておりました。そういった地域内の",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【27†L4408-L4411】",
              "start_idx": 2983,
              "end_idx": 2999,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=e43a09b33784fab3c46e34b2a4141116.pdf#:~:text=%E2%97%8B%EF%BC%91%E7%95%AA%EF%BC%88%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E5%90%9B%EF%BC%89%20%E5%BE%A1%E7%AD%94%E5%BC%81%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%E3%82%82%E3%80%81%E6%98%A8%E5%B9%B4%E5%BA%A6%E3%82%88%E3%82%8A%EF%BC%99%EF%BC%90%E4%B8%87%E5%86%86%E4%BA%88%E7%AE%97%E3%81%AE%E3%81%BB%E3%81%86%E3%82%92%E5%A2%97%E9%A1%8D%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%80%81%E9%9B%87%E7%94%A8%E6%99%82%E9%96%93%E3%82%92%EF%BC%93%EF%BC%90%EF%BC%90%E6%99%82%E9%96%93%E5%A2%97%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%84%20%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E5%BE%A1%E5%AF%BE%E5%BF%9C%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E4%BB%8A%E5%9B%9E%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%20%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%81%E5%B0%91%E3%81%97%E3%81%A0%E3%81%91%E7%A7%81%E3%81%AE%E3%81%BB%E3%81%86%E3%81%A7%E3%82%82%E7%A6%8F%E5%B2%A1%E7%9C%8C%E6%95%99%E8%82%B2%E5%A7%94%E5%93%A1%E4%BC%9A%E3%81%AE%E8%B3%87%E6%96%99%E3%82%92%E6%8F%90%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F",
              "pub_date": null,
              "snippet": "○１番（土黒功司君） 御答弁ありがとうございます。スクールソーシャルワーカーに関して も、昨年度より９０万円予算のほうを増額していただき、雇用時間を３００時間増加してい るということで、本当に御対応ありがとうございます。また、今回それでスクールソーシャ ルワーカーについて、少しだけ私のほうでも福岡県教育委員会の資料を提示させていただく",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L19-L26】",
              "start_idx": 2999,
              "end_idx": 3011,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=1874ab437dd658d884eef3bd0a7921e1.pdf#:~:text=%E3%83%96%E3%83%AB%E3%81%A7%E3%81%82%E3%81%A3%E3%81%9F%E3%82%8A%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%AB%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E5%AE%87%E5%9C%9F%E5%B8%82%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%8C%E3%81%82%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%B5%E3%81%86%E3%81%AB%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%9F%20%E3%81%A0%E6%AE%8B%E5%BF%B5%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AB%E3%80%81%E7%A7%81%E3%81%8C%E5%AE%87%E5%9C%9F%E5%B8%82%E5%86%85%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E5%8B%95%E3%81%8D%E3%81%AE%E3%81%82%E3%82%8B%E4%B8%AD%E3%81%A7%E3%81%AF%E3%80%81%E3%82%84%E3%81%AF%E3%82%8A%E4%BD%99%E3%82%8A%E3%81%9D%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E5%AE%87%E5%9C%9F%E5%B8%82%20%E3%81%AE%E7%89%B9%E7%94%A3%E5%93%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%8C%E3%81%A9%E3%81%86%E3%81%84%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%82%92%E8%A6%8B%E3%82%8B%E6%A9%9F%E4%BC%9A%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%97%E3%80%81%E5%B8%82%E6%B0%91%E3%81%AE%20%E4%BA%BA%E3%81%9F%E3%81%A1%E3%81%AB%E8%81%9E%E3%81%84%E3%81%A6%E3%82%82%E3%80%81%E5%AE%9F%E3%81%AF%E7%B5%90%E6%A7%8B%E3%81%82%E3%82%93%E3%81%BE%E3%82%8A%E7%9F%A5%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%81%A8%E3%81%84%E3%81%86%E7%8F%BE%E7%8A%B6%E3%82%92%E7%A7%81%E3%81%AE%E4%B8%AD%E3%81%A7%E3%81%AF%E6%84%9F%E3%81%98%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE",
              "pub_date": null,
              "snippet": "ブルであったり、本当にたくさんの宇土市の特産品があるというふうに思っております。た だ残念なことに、私が宇土市内でいろいろ動きのある中では、やはり余りそういった宇土市 の特産品というのがどういったものがあるのかというのを見る機会はありませんし、市民の 人たちに聞いても、実は結構あんまり知られていないという現状を私の中では感じておりま",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            },
            {
              "matched_text": "【48†L88-L96】",
              "start_idx": 3011,
              "end_idx": 3023,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=%E4%BC%9A%E6%B4%BE%E3%80%8C%E9%A2%A8%E3%80%8D",
              "pub_date": null,
              "snippet": "会派「風」",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【50†L134-L142】",
              "start_idx": 3023,
              "end_idx": 3037,
              "alt": null,
              "type": "webpage_extended",
              "title": "ひじくろこうじ後援会",
              "url": "https://hijikurokoji.com/#:~:text=1997%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E7%AB%8B%E5%AE%87%E5%9C%9F%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E5%8D%92%E6%A5%AD%202001%E5%B9%B43%E6%9C%88%20%E7%86%8A%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%B7%A5%E5%AD%A6%E9%83%A8%E6%95%B0%E7%90%86%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E7%A7%91%E5%8D%92%E6%A5%AD%202003%E5%B9%B43%E6%9C%88,IT%E9%96%A2%E4%BF%82%E3%81%AE%E4%BB%95%E4%BA%8B%E3%81%A7%E7%8B%AC%E7%AB%8B%E3%80%82%E3%83%95%E3%83%AA%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%B4%BB%E5%8B%95%E9%96%8B%E5%A7%8B%202016%E5%B9%B44%E6%9C%88%EF%BD%9E%20%E7%86%8A%E6%9C%AC%E5%9C%B0%E9%9C%87%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E6%B4%BB%E5%8B%95%E3%80%82%E3%81%9D%E3%81%AE%E5%BE%8C%E3%80%81%E7%81%BD%E5%AE%B3%E6%94%AF%E6%8F%B4%E5%9B%A3%E4%BD%93%E3%80%8C%E3%82%88%E3%81%8B%E9%9A%8A%E3%83%8D%E3%83%83%E3%83%88%E7%86%8A%E6%9C%AC%E3%80%8D%E4%BB%A3%E8%A1%A8%E7%90%86%E4%BA%8B%202022%E5%B9%B41%E6%9C%88%20IT%E3%82%92%E4%B8%AD%E6%A0%B8%E4%BA%8B%E6%A5%AD%E3%81%A8%E3%81%97%E3%81%9F%E3%80%81UTOMESHI%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E8%A8%AD%E7%AB%8B",
              "pub_date": null,
              "snippet": "1997年3月 熊本県立宇土高等学校卒業 2001年3月 熊本大学工学部数理情報システム工学科卒業 2003年3月 熊本大学大学院自然科学研究科卒業 2003年4月～2007年7月 NECエレクトロニクス入社 神奈川県勤務（2007年8月退社） 2007年9月～2008年8月 ワーキングホリデーでオーストラリア留学 2009年1月～2015年8月 熊本県内のIT会社で勤務 2015年9月 IT関係の仕事で独立。フリーランスとして活動開始 2016年4月～ 熊本地震災害支援活動。その後、災害支援団体「よか隊ネット熊本」代表理事 2022年1月 ITを中核事業とした、UTOMESHI株式会社設立",
              "attribution": "hijikurokoji.com",
              "icon_type": null
            },
            {
              "matched_text": "【54†L19-L24】",
              "start_idx": 3037,
              "end_idx": 3049,
              "alt": null,
              "type": "webpage_extended",
              "title": "",
              "url": "https://www.city.uto.lg.jp/d?q=dd4d1f8a99f98c04fcf8c5de2780b169.pdf#:~:text=%EF%BC%91%E7%95%AA%20%E5%9C%9F%E9%BB%92%E5%8A%9F%E5%8F%B8%E8%AD%B0%E5%93%A1%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2021%20%EF%BC%91,%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%2030%20%EF%BC%94%20%E5%9C%B0%E5%9F%9F%E9%98%B2%E7%81%BD%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6%20%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B7%C2%B734",
              "pub_date": null,
              "snippet": "１番 土黒功司議員 ············································· 21 １ ローカル・マニフェスト「仕事を支える／賑わい創造」に 関して ················································· 21 ２ 学校教育向けＩＣＴ環境推進に関して ·····················26 ３ 不登校児童に関して ····································· 30 ４ 地域防災に関して ·······································34",
              "attribution": "city.uto.lg.jp",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_68474c3326888191b5c09678a9fc3e37",
          "async_task_title": "熊本県宇土市議会議員・土黒功司の公的活動と人物像"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "dcec19f7-4138-49af-8501-30d529b68c73",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "4b5f9ca7-f612-4753-a44b-ec722d67f7a5",
  "plugin_ids": null,
  "conversation_id": "68474bef-b7d8-8003-8172-d897d773a628",
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
  "id": "68474bef-b7d8-8003-8172-d897d773a628"
}
```