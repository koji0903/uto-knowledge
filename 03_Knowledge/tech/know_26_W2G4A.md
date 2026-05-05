---
id: knowledge_202605051026_Z1M4Z
type: knowledge_note
domain: tech
source: chatgpt_import
source_id: a8482e9d-ee10-4dbf-b122-cba374fc95dd
source_group: E
created: 2026-05-05
status: active
tags: [chatgpt, tech, group-E]
---

# chatgpt_import_20250415_knowledge_388


## 📋 要約

- **元タイトル:** Hi-net データ取得要求
- **グループ:** E (情報整理・ナレッジ)
- **信頼度:** 10%
- **メッセージ数:** 9
- **作成日時:** 2025-04-15 21:28:39
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
  "title": "Hi-net データ取得要求",
  "create_time": 1744752519.645212,
  "update_time": 1744753701.008918,
  "mapping": {
    "a8482e9d-ee10-4dbf-b122-cba374fc95dd": {
      "id": "a8482e9d-ee10-4dbf-b122-cba374fc95dd",
      "message": null,
      "parent": null,
      "children": [
        "26244951-ed8b-4d74-b913-3373694a614d"
      ]
    },
    "26244951-ed8b-4d74-b913-3373694a614d": {
      "id": "26244951-ed8b-4d74-b913-3373694a614d",
      "message": {
        "id": "26244951-ed8b-4d74-b913-3373694a614d",
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
      "parent": "a8482e9d-ee10-4dbf-b122-cba374fc95dd",
      "children": [
        "7ecfe936-589b-4a64-b0fc-124372b9f44c"
      ]
    },
    "7ecfe936-589b-4a64-b0fc-124372b9f44c": {
      "id": "7ecfe936-589b-4a64-b0fc-124372b9f44c",
      "message": {
        "id": "7ecfe936-589b-4a64-b0fc-124372b9f44c",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744752518.6218119,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "防災科学技術研究所ののhi-netデータをとってきてください"
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
          "request_id": "930e88addedad1ba-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "26244951-ed8b-4d74-b913-3373694a614d",
      "children": [
        "244b9562-5107-4f57-a25d-bd297f8a5e1a"
      ]
    },
    "244b9562-5107-4f57-a25d-bd297f8a5e1a": {
      "id": "244b9562-5107-4f57-a25d-bd297f8a5e1a",
      "message": {
        "id": "244b9562-5107-4f57-a25d-bd297f8a5e1a",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744752523.049655,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "Hi-netのどのようなデータを取得したいか教えてください。例えば、地震波形データ、イベントカタログ、観測点情報などがあります。また、特定の期間や地域、フォーマットの指定があれば、それも教えてください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "7ecfe936-589b-4a64-b0fc-124372b9f44c",
          "request_id": "930e88addedad1ba-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "7ecfe936-589b-4a64-b0fc-124372b9f44c",
      "children": [
        "f7cdb5ed-ba22-4b51-9c28-87c35a8ab819"
      ]
    },
    "f7cdb5ed-ba22-4b51-9c28-87c35a8ab819": {
      "id": "f7cdb5ed-ba22-4b51-9c28-87c35a8ab819",
      "message": {
        "id": "f7cdb5ed-ba22-4b51-9c28-87c35a8ab819",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.clarify_with_text",
          "metadata": {}
        },
        "create_time": 1744752523.049801,
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
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "244b9562-5107-4f57-a25d-bd297f8a5e1a",
          "request_id": "930e88addedad1ba-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "244b9562-5107-4f57-a25d-bd297f8a5e1a",
      "children": [
        "4e77eb18-59d8-416e-896d-ab69d2ebd45e"
      ]
    },
    "4e77eb18-59d8-416e-896d-ab69d2ebd45e": {
      "id": "4e77eb18-59d8-416e-896d-ab69d2ebd45e",
      "message": {
        "id": "4e77eb18-59d8-416e-896d-ab69d2ebd45e",
        "author": {
          "role": "user",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744752558.879101,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "地震波形データを三ヶ月分"
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
          "request_id": "930e89a809ded1ba-KIX",
          "message_source": null,
          "timestamp_": "absolute",
          "message_type": null
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "f7cdb5ed-ba22-4b51-9c28-87c35a8ab819",
      "children": [
        "c1b43ad5-8127-4afb-9860-67430f40d0ba"
      ]
    },
    "c1b43ad5-8127-4afb-9860-67430f40d0ba": {
      "id": "c1b43ad5-8127-4afb-9860-67430f40d0ba",
      "message": {
        "id": "c1b43ad5-8127-4afb-9860-67430f40d0ba",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744752571.654179,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "了解しました。防災科学技術研究所（NIED）のHi-netから、過去3ヶ月分の地震波形データを取得する方法を調査します。具体的には、データの取得手順、利用条件、対応フォーマット、ダウンロードに必要なツールやアカウントの有無なども含めてご案内します。\n少しお待ちください。"
          ]
        },
        "status": "finished_successfully",
        "end_turn": null,
        "weight": 1,
        "metadata": {
          "message_type": null,
          "model_slug": "research",
          "default_model_slug": "gpt-4o",
          "parent_id": "4e77eb18-59d8-416e-896d-ab69d2ebd45e",
          "request_id": "930e89a809ded1ba-KIX",
          "timestamp_": "absolute"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "4e77eb18-59d8-416e-896d-ab69d2ebd45e",
      "children": [
        "6b4aadb2-d41e-436d-8076-39d4e2b7ab03"
      ]
    },
    "6b4aadb2-d41e-436d-8076-39d4e2b7ab03": {
      "id": "6b4aadb2-d41e-436d-8076-39d4e2b7ab03",
      "message": {
        "id": "6b4aadb2-d41e-436d-8076-39d4e2b7ab03",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744752559.666546,
        "update_time": null,
        "content": {
          "content_type": "code",
          "language": "json",
          "response_format_name": null,
          "text": "{\n  \"task_violates_safety_guidelines\": false,\n  \"user_def_doesnt_want_research\": false,\n  \"response\": \"了解しました。防災科学技術研究所（NIED）のHi-netから、過去3ヶ月分の地震波形データを取得する方法を調査します。具体的には、データの取得手順、利用条件、対応フォーマット、ダウンロードに必要なツールやアカウントの有無なども含めてご案内します。\\n少しお待ちください。\",\n  \"title\": \"Hi-netの地震波形データの3ヶ月分取得方法\",\n  \"prompt\": \"防災科学技術研究所（NIED）のHi-netから、直近3ヶ月分の地震波形データを取得する方法を調査してください。取得対象は以下の通りです：\\n\\n- 地震波形データ（3ヶ月分）\\n- 必要な条件（例：研究目的での利用申請、アカウント登録など）\\n- データ取得手順\\n- 対応フォーマット（MiniSEEDなど）\\n- ダウンロード手段（Webポータル、FTP、APIなど）\\n- 地震波形ビューワや解析ツールがあれば、それも紹介してください\\n\\n出典は公式のHi-netサイト（https://www.hinet.bosai.go.jp/）およびNIED関連サイトを優先してください。\\n回答は日本語でお願いします。\"\n}"
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
          "parent_id": "c1b43ad5-8127-4afb-9860-67430f40d0ba",
          "request_id": "930e89a809ded1ba-KIX",
          "timestamp_": "absolute",
          "is_loading_message": true
        },
        "recipient": "research_kickoff_tool.start_research_task",
        "channel": null
      },
      "parent": "c1b43ad5-8127-4afb-9860-67430f40d0ba",
      "children": [
        "f3842d97-6982-471a-a081-3ab96e3e40d8"
      ]
    },
    "f3842d97-6982-471a-a081-3ab96e3e40d8": {
      "id": "f3842d97-6982-471a-a081-3ab96e3e40d8",
      "message": {
        "id": "f3842d97-6982-471a-a081-3ab96e3e40d8",
        "author": {
          "role": "tool",
          "name": "research_kickoff_tool.start_research_task",
          "metadata": {}
        },
        "create_time": 1744752572.760332,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": []
        },
        "status": "finished_successfully",
        "end_turn": false,
        "weight": 1,
        "metadata": {
          "async_task_title": "Hi-netの地震波形データの3ヶ月分取得方法",
          "async_task_prompt": "防災科学技術研究所（NIED）のHi-netから、直近3ヶ月分の地震波形データを取得する方法を調査してください。取得対象は以下の通りです：\n\n- 地震波形データ（3ヶ月分）\n- 必要な条件（例：研究目的での利用申請、アカウント登録など）\n- データ取得手順\n- 対応フォーマット（MiniSEEDなど）\n- ダウンロード手段（Webポータル、FTP、APIなど）\n- 地震波形ビューワや解析ツールがあれば、それも紹介してください\n\n出典は公式のHi-netサイト（https://www.hinet.bosai.go.jp/）およびNIED関連サイトを優先してください。\n回答は日本語でお願いします。",
          "async_task_type": "research",
          "async_task_status_messages": {
            "initial": "Hi-netの地震波形データの3ヶ月分取得方法",
            "completed_with_time": "Research completed in 15m",
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
          "parent_id": "6b4aadb2-d41e-436d-8076-39d4e2b7ab03",
          "request_id": "930e89a809ded1ba-KIX",
          "timestamp_": "absolute",
          "async_task_id": "deepresch_67fecfbcda4c819181e2060c0df2ad8a",
          "async_task_conversation_id": "67fecfbc-ec64-8003-825a-ad695d292152",
          "async_task_created_at": "2025-04-15 21:29:33.496735+00:00"
        },
        "recipient": "all",
        "channel": null
      },
      "parent": "6b4aadb2-d41e-436d-8076-39d4e2b7ab03",
      "children": [
        "01a71112-3324-4716-87ca-8eea7188655f"
      ]
    },
    "01a71112-3324-4716-87ca-8eea7188655f": {
      "id": "01a71112-3324-4716-87ca-8eea7188655f",
      "message": {
        "id": "01a71112-3324-4716-87ca-8eea7188655f",
        "author": {
          "role": "assistant",
          "name": null,
          "metadata": {}
        },
        "create_time": 1744753467.128131,
        "update_time": null,
        "content": {
          "content_type": "text",
          "parts": [
            "# Hi-net（防災科研）から直近3ヶ月分の地震波形データを取得する方法\n\n## データ公開範囲と提供内容\n防災科学技術研究所（NIED）が運用する高感度地震観測網（Hi-net）では、全国の地震波形データを収集しており、研究者向けに過去の波形データを公開しています【30†L1-L3】。現在、**2004年4月1日以降**に観測された連続波形データおよび2002年6月3日以降のイベント波形データがインターネット経由で取得可能です【30†L1-L3】。直近3ヶ月程度のデータはデータサーバ上に保持されており速やかにダウンロードできますが、一定期間を過ぎた古いデータは順次テープ装置（DLTなど）に移行して保管されています【37†L1-L4】。テープ保存のみになった過去データを利用する際には、ダウンロード要求に応じて一度HDD上に展開する作業が必要となるため、取得に時間がかかる場合があります【37†L1-L4】。したがって**直近3ヶ月分**程度の波形データであれば比較的容易に取得できます（それより古いデータも入手可能ですが、準備に時間を要する可能性があります）。\n\nHi-netが提供する地震波形データには、大きく分けて以下の2種類があります。\n\n- **連続波形データ**：観測網の全観測点での連続的な地震波形記録（常時記録）。任意の期間・観測点を指定して取得できます。  \n- **イベント波形データ**：気象庁や防災科研が決定した地震の発生時刻・震源に基づき、その地震の発生前後の波形を切り出したデータセットです。イベント毎にまとめられており、地震発生約5日後に気象庁一元化震源を用いて作成・公開されます【25†L0-L2】。  \n\n直近3ヶ月分の波形データを取得したい場合、特定の地震のみを対象とするのであればイベント波形データを活用できます。一方、期間内の**全ての地震**や連続的な揺れ（例：常時微動）の解析が目的であれば、連続波形データを指定期間分まとめて取得するとよいでしょう。\n\n## データ利用の条件（ユーザ登録等）\nHi-netの詳細波形データをダウンロードするには**ユーザ登録が必須**です【32†L59-L62】。ユーザ登録自体は無料ですが、防災科研のウェブサイトで所定の登録手続きを行い、利用目的などを申請する必要があります。申請後、通常**2～3営業日以内**に承認通知メールが届き、ユーザIDとパスワードが発行されます【39†L61-L69】。登録されたユーザID/パスワードでログインすることで、データ取得用の各種ページにアクセス可能となります。\n\nデータ利用時には、防災科研から提示される利用規約に同意する必要があります【8†L25-L33】。主な条件は以下の通りです。\n\n- **研究目的での利用**：主に学術研究や教育目的での利用が想定されており、商用利用などの場合には別途許可が必要な場合があります（申請時に利用目的を明記）。  \n- **成果の報告義務**：取得したデータを用いて研究成果を得た場合、論文別刷りや報告書などを防災科研に提出し、データ提供元（防災科研や共同観測機関）への謝辞を記載することが求められます【32†L54-L58】。防災科研Hi-netデータの利用にあたっては、論文中で出典（例えばデータのDOI番号）を明示することが推奨されています【32†L54-L58】。  \n- **データの再配布禁止**：取得した生データを許可なく第三者へ再配布することは禁止されています【8†L47-L50】（共同研究者内での利用は問題ありませんが、不特定多数への公開は不可）。  \n\n以上の条件に同意・遵守することを前提に、ユーザ登録者はHi-netの波形データを自由にダウンロードし、研究に利用することができます。\n\n## データ取得の手順\n以下に、Hi-netから直近3ヶ月分の地震波形データ（連続波形データ）を取得する一般的な手順を示します。\n\n1. **ユーザ登録とログイン**：前述のとおり防災科研のサイトでユーザ登録を完了し、Hi-netデータ取得用サイトにログインします。登録ユーザ専用のログインページ（「地震観測網ログイン」）にIDとパスワードを入力してログインしてください【30†L1-L3】【30†L4-L6】。\n\n2. **連続波形データダウンロードページへアクセス**：ログイン後、防災科研Hi-netの「連続波形データダウンロード」ページに進みます。これは登録ユーザ向けに提供されるページで、Hi-netや参加各機関（気象庁・大学など）の**連続地震波形データ**をダウンロードできるインターフェースです【25†L4-L7】。  \n\n3. **観測点・期間の指定**：ダウンロードページでは、取得したいデータの**観測点（ステーション）**やネットワーク、期間を指定します。画面上部に「切り出し観測点設定」等の項目があり、ここで目的の観測点を選択可能です【39†L69-L77】。日本全国のHi-net観測点から、特定の局を選ぶことも、ある地域の複数観測点をまとめて選ぶこともできます。また、「データの種類」として高感度地震計（Hi-net）の連続波形を選択し、開始日時と終了日時（またはデータ長）で希望する3ヶ月間の範囲を入力します【39†L69-L77】。直近3ヶ月分すべてを一度に指定することも可能ですが、後述の通り一度のリクエストで取得できるデータ量に制限があるため、期間を適宜分割して複数回に分けてリクエストすることをおすすめします。\n\n4. **データの検索とリクエスト送信**：観測点と期間を設定したら検索を実行し、その条件で取得可能な波形データをサーバにリクエストします。サーバ側では指定された時間区間の波形ファイルをまとめて準備します。**Hi-netの連続波形データは1ファイルが1分間の記録**となるよう構成されており、指定した時間範囲に含まれる多数の1分ファイルをまとめて取得する形になります【29†L5-L7】。例えば3ヶ月（約90日）のデータを1局について取得する場合、約90日×24時間×60分 = 129600本もの1分ファイルを対象とすることになるため、サーバでの準備に時間がかかります。そのため、Hi-netのシステム上**一度のダウンロード要求で取得できるデータ期間には上限**があります（公式には明示されていませんが、実質的にリクエスト可能なファイル数に制約があります）。長期間を指定した場合はサーバ処理に失敗する可能性もあるため、例えば**1日～数日単位**に期間を区切って順次ダウンロード要求を出す方が確実です。  \n\n5. **データのダウンロード**：リクエスト送信後、サーバ側で波形データがまとめられると、ダウンロードリンクが提供されます。多くの場合、圧縮ファイル（例えば `.zip` もしくは日本で一般的な `.lzh` 形式）で一括ダウンロードする形になります。ユーザインターフェース上でダウンロードリンクをクリックし、圧縮ファイルを取得してください。圧縮ファイルの展開後には、指定期間・観測点の**WIN32形式**の波形データファイル群と、対応する**チャンネル情報ファイル**（観測点や成分のメタデータを含むテーブル）が含まれています【18†L9-L11】。各波形ファイルは1分間のデータですので、長時間の連続波形を扱うには後述するツールでこれらを結合・変換する必要があります。\n\n6. **（イベント波形データの取得）**：特定の地震イベントの波形だけが必要な場合は、Hi-netの「イベント波形データダウンロード」機能を利用することもできます。ログイン後のメニューでイベント波形の一覧（気象庁一元化震源リストに基づく地震一覧）から目的の地震を選択すると、その地震の発生時刻を中心とした各観測点の波形データを一括ダウンロードできます【25†L0-L2】。イベント波形は防災科研によりあらかじめ時間切り出し処理されているため、ユーザ側で時間指定する手間がなく便利です。ただし、データ形式や後処理の必要性は連続波形と同様です。\n\n以上が基本的な取得手順です。特に連続データを大量にダウンロードする際は、ウェブインターフェース上で手作業すると手間がかかります。この場合、後述する専用ツールやスクリプトを用いて自動化することも検討してください。\n\n## データ形式と対応フォーマット\nHi-netから提供される地震波形データは**「WIN32形式」**と呼ばれる独自のデータフォーマットで保存されています【29†L5-L7】。WIN32形式は、日本の地震観測で標準的に使われてきた「WIN形式」を拡張したバイナリ形式で、高感度地震計や強震計のデジタル波形データを効率よく格納するためのものです【42†L7-L10】。Hi-netウェブサイトからダウンロードされる全ての波形ファイルはこのWIN32形式のまま提供されます【18†L1-L3】。\n\n**MiniSEED**（Mini-SEED）とは国際的な標準フォーマットですが、Hi-netデータを直接MiniSEEDで取得するオプションは現在のところ基本的にありません。ユーザは提供されたWIN32形式データを、自身で必要に応じて変換する必要があります。防災科研ではこのための公式ツール群「**WIN32関連ツール**」を提供しています【38†L11-L17】【38†L27-L30】。これらのツール（一部ソースコード）はユーザ登録者向けに公開されており、例えば次のような機能があります。\n\n- **win2sac_32**：WIN32形式の波形ファイルを読み込み、汎用的な**SAC形式**（Seismic Analysis Codeのデータ形式）に変換します【27†L9-L17】。変換時に感度（A/D値を物理量に換算する係数）の補正を自動で適用し、SACファイルに出力します【27†L1-L7】。SAC形式にすれば後述のSACソフトウェアや他の地震解析ソフトで直接読み込み・解析が可能です。  \n- **dewin_32**：WIN32ファイルから**テキスト形式**で波形データを取り出すツールです。指定したチャンネルのA/Dカウント値列をテキストファイル（時間と値の列）として抽出できます【29†L1-L4】。抽出後に自分でスケーリングを適用して物理量に直したり、独自処理にかけたりできます。  \n- **catwin32**：複数のWIN32ファイルを連結して一つの長いWIN形式ファイルにまとめるツールです。1分ごとに分割された多数のファイルを連続データに結合する際に利用します。  \n\nこれらのツールは防災科研のサイト内「WIN32関連ツール（要ユーザ認証）」ページからダウンロードできます【38†L27-L30】。基本的にはコマンドライン上で動作する小規模なプログラム群で、Windows/Linux上で利用可能です（Windows向けバイナリも用意されています【39†L79-L87】）。まずダウンロードした圧縮ファイルを展開し、必要なツールを実行できるよう準備してください【39†L79-L87】。たとえば、連続波形データを解析する場合には、まず`catwin32`で1分ファイルを結合して長時間のWIN形式にまとめ、それを`win2sac_32`でSAC形式に変換するといった手順を踏みます。得られたSACファイルを用いれば、震源からの距離や方位、振幅や周波数特性の分析など各種解析をSACソフト上で実施できます。\n\nなお、強震観測網（KiK-netやK-NET）のデータについては、防災科研が直接MiniSEED形式で提供するケースもありますが（例えばF-netでは一部MiniSEED配布を再開【14†L1-L3】）、Hi-net高感度地震計の波形は上述の通りWIN32形式での提供が基本です。必要に応じて自前でMiniSEEDに変換することも可能です。SAC形式に変換したデータをさらにObsPyなどのプログラムで読み込んでMiniSEEDに書き出す、あるいはWIN→MiniSEED変換用のスクリプトを利用するといった方法があります。例えば、ObsPy（Pythonの地震学ライブラリ）を使えばSACやSEED形式への変換・出力が可能です。いずれにせよ、一度WIN32を標準的な形式に変換すれば、以降は国際標準フォーマット(MiniSEED)として汎用のソフトウェアで扱えるようになります。\n\n## データのダウンロード手段（Webポータル・API等）\n**Hi-netの波形データ取得は主にWebポータル経由**で行います。上述したように、防災科研Hi-netのサイト上でユーザログインし、ブラウザから必要なデータを選択・リクエストする方法です【25†L4-L7】。公式にはFTPによる公開ディレクトリなどは提供されておらず、ユーザが自由にサーバ内のファイルを一覧・直接取得することはできません。必ずWeb上のフォームからダウンロード要求を出す形になります。このため、大量データを取得する際に手動で操作するのはやや煩雑です。\n\nしかし、防災科研は**データ取得用のAPI（公開Webサービス）**自体は提供していないものの、有志開発のスクリプトやツールを用いてWebインターフェースを自動操作することが可能です。例えば**HinetPy**というPythonパッケージは、ユーザID・パスワードを用いて背後でHi-netのウェブサービスにアクセスし、連続波形やイベント波形をプログラムから直接ダウンロードできるようにしたものです【6†L10-L13】【6†L27-L35】。HinetPyを使うと、観測網コード（例：「0101」は北海道の特定地域コード）と時刻を指定して自動的にデータをリクエストし、サーバ準備完了後にZIPファイルをダウンロード、さらにWIN32→SAC変換まで一括して行うこともできます【20†L39-L47】【20†L88-L92】。実際、HinetPyは「防災科研Hi-netのデータ取得・処理を容易にする神ツール」として紹介されており【32†L45-L53】、多くの研究者が大量データ処理の際に活用しています。HinetPyのような非公式ツールを利用する場合でも、防災科研へのユーザ登録と規約遵守は必要ですので、事前に登録情報（ID/PW）を取得した上でスクリプトに組み込んでください【22†L59-L68】。\n\n要約すると、**公式にはWebポータルからのダウンロードが唯一の手段**であり、FTP配信やREST APIは提供されていません。ただし、自動化のニーズに応えるため、ユーザコミュニティによってWebポータルをラップする形のツールが作成・公開されています。直近3ヶ月分程度のデータ取得であれば、まずは公式サイトから必要な範囲を指定して手動ダウンロードし、手順を把握した上で、必要に応じてHinetPyなどのスクリプトによる自動取得を検討すると良いでしょう。\n\n## 波形ビューワ・解析ツール\n取得した波形データの可視化や解析には、いくつかの方法があります。まず、防災科研が提供する**WIN32関連ツール**は前述の通りデータ変換用ですが、簡易的な解析も可能です。例えば`dewin_32`で出力したテキスト波形をエクセルやプログラミング言語でプロットするといった方法もあります。しかし、より専門的な波形解析や波形表示には、データを標準形式に変換した上で既存の地震解析ソフトウェアを利用するのが一般的です。\n\n代表的なツールとしては**SAC (Seismic Analysis Code)**があります。SACは地震学で広く使われている解析プログラムで、SAC形式の波形データを読み込みフィルタ処理やフーリエ変換、震源距離の計算、プロット表示など多彩な解析が行えます。Hi-netデータはwin2sac_32でSACフォーマットに変換できるため、SACソフトウェア上でそのまま可視化・解析することが可能です【27†L9-L17】。SACはコマンドラインベースですが、波形を画面に描画する機能も備えており、時系列波形やスペクトルを確認できます。\n\nまた、**WINシステム**と呼ばれる日本独自の波形処理ソフトウェアも存在します。WINシステムはWIN/WIN32形式のデータを直接扱うために開発されたプログラム群で、波形表示用のGUIソフトウェアを含んでいます【42†L7-L10】【43†L1-L4】。フリーソフトとして公開されており、適切にインストールすればHi-netのWIN32ファイルとチャンネル情報を読み込んで波形を閲覧することができます【43†L1-L4】。具体的には、任意の観測点の波形を画面上に連続的に表示し、時間軸の拡大縮小や振幅の測定などが可能です。WIN形式は日本の地震研究機関で標準的に用いられてきた経緯があり、もしGUIで直観的に波形を見たい場合にはWINシステムの利用も選択肢になります。\n\nさらに、近年は**ObsPy**などのオープンソース・ライブラリを用いた解析も盛んです。ObsPyはPython上で地震データの入出力・処理・可視化を行うためのライブラリで、WIN32形式そのものは直接サポートしていませんが、SACやMiniSEEDに変換したデータであれば容易に読み込んで解析できます。例えば、ObsPyを用いて波形を読み込み、時間波形やスペクトログラムをプロットしたり、自動ピッキングやフィルタ処理を施したりといった高度な解析もプログラム上で実行可能です。\n\nまとめると、Hi-netの生データ（WIN32形式）はそのままでは汎用ソフトで読みづらいため、**公式ツールでSAC等に変換してから**標準的な解析ソフトで扱うのが基本となります【38†L27-L30】。簡易な波形確認であればWINシステムのビューアを使って直接閲覧する方法もあります。いずれの場合も、防災科研Hi-netのデータを利用する際には、適切な出典表示と謝辞を添えることを忘れないようにしてください【32†L54-L58】。以上の手順とツールを活用することで、直近3ヶ月分のHi-net地震波形データを取得し、有効に解析することができるでしょう。\n\n**Sources:**\n\n- 防災科研 Hi-net 公式サイト「データ公開について」【30†L1-L3】【37†L1-L4】【25†L0-L2】【25†L4-L7】【29†L5-L7】  \n- 防災科研 Hi-net 公式サイト「ユーザ登録案内・利用規約」【8†L25-L33】【8†L47-L50】  \n- Hi-netデータ取得解説（有志によるまとめ）【32†L54-L62】【39†L61-L69】  \n- Hi-netデータ形式・ツール解説（有志によるまとめ）【38†L27-L30】【29†L1-L4】【27†L9-L17】  \n- Hi-netデータ自動取得ツール HinetPy に関する解説【32†L45-L53】【22†L59-L68】  \n- WIN形式データ処理システムに関する説明【42†L7-L10】【43†L1-L4】"
          ]
        },
        "status": "finished_successfully",
        "end_turn": true,
        "weight": 1,
        "metadata": {
          "citations": [
            {
              "start_ix": 134,
              "end_ix": 144,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
                "text": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 30,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 217,
              "end_ix": 227,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
                "text": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 30,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 312,
              "end_ix": 322,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
                "text": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 398,
              "end_ix": 408,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
                "text": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 710,
              "end_ix": 720,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
                "text": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 0,
                  "end_line_num": 2
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 913,
              "end_ix": 925,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=%E3%81%AA%E3%81%8A%E3%80%81%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97%E3%81%AB%E3%81%AF%E9%98%B2%E7%81%BD%E7%A7%91%E5%AD%A6%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E6%89%80%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E7%99%BB%E9%8C%B2%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%99%E3%80%82",
                "text": "なお、データ取得には防災科学技術研究所ユーザー登録が必要です。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 59,
                  "end_line_num": 62
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1031,
              "end_ix": 1043,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=Image%3A%20image",
                "text": "Image: image.png",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 61,
                  "end_line_num": 69
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1134,
              "end_ix": 1145,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "NIED Registration form",
                "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=",
                "text": "* * *",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 8,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 33
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1336,
              "end_ix": 1348,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=",
                "text": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 58
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1408,
              "end_ix": 1420,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=",
                "text": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 58
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1473,
              "end_ix": 1484,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "NIED Registration form",
                "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=Image%20Prohibition",
                "text": "Image Prohibition",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 8,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1776,
              "end_ix": 1786,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
                "text": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 30,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1786,
              "end_ix": 1796,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "地震観測網ログイン - 防災科研",
                "url": "https://hinetwww11.bosai.go.jp/auth/?LANG=ja#:~:text=%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E7%B6%B2%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%20,net%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99",
                "text": "地震観測網ログイン - 防災科研 2004年4月1日以降のデータが取得可能です。 長期間および2004年4月1日以前の連続波形データをダウンロードできます。 Hi- netのイベント波形データダウンロードが行えます ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 30,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4,
                  "end_line_num": 6
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 1946,
              "end_ix": 1956,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
                "text": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4,
                  "end_line_num": 7
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
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=%E5%88%87%E3%82%8A%E5%87%BA%E3%81%97%E8%A6%B3%E6%B8%AC%E7%82%B9%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%80%81%E8%A6%B3%E6%B8%AC%E7%82%B9%E3%82%92%E6%8C%87%E5%AE%9A%E5%8F%AF%E8%83%BD%20%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%82%84%E3%82%89%E6%9C%9F%E9%96%93%E3%82%84%E3%82%89%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6%E6%A4%9C%E7%B4%A2%20Image%3A%20image",
                "text": "切り出し観測点設定で、観測点を指定可能 データの種類やら期間やらを指定して検索 Image: image.png",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 69,
                  "end_line_num": 77
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2211,
              "end_ix": 2223,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=%E5%88%87%E3%82%8A%E5%87%BA%E3%81%97%E8%A6%B3%E6%B8%AC%E7%82%B9%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%80%81%E8%A6%B3%E6%B8%AC%E7%82%B9%E3%82%92%E6%8C%87%E5%AE%9A%E5%8F%AF%E8%83%BD%20%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%82%84%E3%82%89%E6%9C%9F%E9%96%93%E3%82%84%E3%82%89%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6%E6%A4%9C%E7%B4%A2%20Image%3A%20image",
                "text": "切り出し観測点設定で、観測点を指定可能 データの種類やら期間やらを指定して検索 Image: image.png",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 69,
                  "end_line_num": 77
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 2502,
              "end_ix": 2512,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
                "text": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 5,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3042,
              "end_ix": 3053,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Temporary suspension of data release - fnet.bosai.go.jp",
                "url": "https://www.fnet.bosai.go.jp/notice/Notice.20230413.php?LANG=en#:~:text=fnet,the%20data%20and%20the",
                "text": "fnet.bosai.go.jp www.fnet.bosai.go.jp  As announced on March 14, 2023, a bug was found in the data conversion system from WIN32 format to other formats. To correct the data and the ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 18,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 9,
                  "end_line_num": 11
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3292,
              "end_ix": 3302,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
                "text": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 0,
                  "end_line_num": 2
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3574,
              "end_ix": 3584,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
                "text": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 5,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3668,
              "end_ix": 3679,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
                "text": "WINシステムとは",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 7,
                  "end_line_num": 10
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3731,
              "end_ix": 3741,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "How to use the Hi-net data",
                "url": "https://www.hinet.bosai.go.jp/about_data/#:~:text=All%20waveform%20data%20provided%20from,or%20SAC%20files%20are",
                "text": "All waveform data provided from our website are in the 'WIN32' data file format. Utility programs to convert WIN32 files into WIN files or SAC files are ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 18,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3915,
              "end_ix": 3927,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について",
                "url": "https://www.vnet.bosai.go.jp/about_data/?page=6#:~:text=win32%E3%81%8B%E3%82%89win%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB%E7%AD%89%E3%81%AF%EF%BC%8C%20%E3%80%8CWIN32%E9%96%A2%E9%80%A3%E3%83%84%E3%83%BC%E3%83%AB%E3%80%8D%28%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20%E3%81%AA%E3%81%8A%EF%BC%8C%E3%81%93%E3%82%8C%E3%82%89%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AB%E4%B8%8D%E5%85%B7%E5%90%88%E7%AD%89%E7%99%BA%E8%A6%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%82%89%EF%BC%8C%20",
                "text": "win32からwinに変換するツール等は， 「WIN32関連ツール」(要ユーザ認証) として公開されていますのでご利用ください。 なお，これらのツールに不具合等発見されましたら， ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 11,
                  "end_line_num": 17
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 3927,
              "end_ix": 3939,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
                "text": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 30
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4078,
              "end_ix": 4089,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPy/docs/installation.rst at main - GitHub",
                "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
                "text": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 9,
                  "end_line_num": 17
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4137,
              "end_ix": 4147,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPy.win32 module",
                "url": "https://seisman.github.io/HinetPy/api/HinetPy.win32.html#:~:text=This%20function%20calls%20the%20win2sac_32,win32%20format%20to%20SAC%20fomrat",
                "text": "This function calls the win2sac_32 command, available in the Hi-net win32tools package, to convert data files from win32 format to SAC fomrat.",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4296,
              "end_ix": 4306,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=%E3%81%93%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%A8%EF%BC%8C%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%ABWIN32%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%EF%BC%8C%E4%BB%BB%E6%84%8F%E3%81%AE%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%E3%81%AEA%2FD%E5%80%A4%E3%82%92%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%25%20dewin_32%20,",
                "text": "このツールを使用すると，以下のようにWIN32データファイルから，任意のチャネルのA/D値をテキスト形式で取り出すことが可能です。 % dewin_32 -c WINチャネル番号(16 ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4500,
              "end_ix": 4512,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
                "text": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 30
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4587,
              "end_ix": 4599,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=2",
                "text": "2-1. 変換ツールの入手",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 79,
                  "end_line_num": 87
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
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=2",
                "text": "2-1. 変換ツールの入手",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 79,
                  "end_line_num": 87
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 4908,
              "end_ix": 4918,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "F-net 更新履歴",
                "url": "https://www.fnet.bosai.go.jp/news_archive/?LANG=ja#:~:text=miniSEED%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E7%AD%89%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E5%86%8D%E9%96%8B%EF%BC%882024%E5%B9%B41%E6%9C%8829%E6%97%A5%E6%9B%B4%E6%96%B0%EF%BC%89,2023%2F04%2F13%2C%20miniSEED%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E7%AD%89%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E4%B8%80%E6%99%82",
                "text": "miniSEEDフォーマット等のデータ公開再開（2024年1月29日更新）. ◯ 2023/11/08, システムメンテナンスのお知らせ. ◯ 2023/04/13, miniSEEDフォーマット等のデータ公開一時 ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 14,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5336,
              "end_ix": 5346,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
                "text": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5678,
              "end_ix": 5689,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "[PDF] HinetPy: A Python package for accessing and processing NIED Hi ...",
                "url": "https://www.theoj.org/joss-papers/joss.06840/10.21105.joss.06840.pdf#:~:text=,However%2C%20accessing%20them%20can",
                "text": "[PDF] HinetPy: A Python package for accessing and processing NIED Hi ... The NIED Hi-net data is available for free through the NIED Hi-net website after users register for an account. However, accessing them can ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 6,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 10,
                  "end_line_num": 13
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5689,
              "end_ix": 5700,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPy: A Python package for accessing and processing NIED Hi ...",
                "url": "https://www.researchgate.net/publication/381712155_HinetPy_A_Python_package_for_accessing_and_processing_NIED_Hi-net_seismic_data#:~:text=HinetPy%3A%20A%20Python%20package%20for,provides%20several%20functions%20for",
                "text": "HinetPy: A Python package for accessing and processing NIED Hi ... Hi-net data, allowing users to access data without any manual operations on the Hi-net website. The win32 module provides several functions for ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 6,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 35
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5817,
              "end_ix": 5829,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Hi-net Seismograph Network User Interface: Downloading Waveform Data with Python for One Earthquake Example – Quantifying the Strength of Subsurface Heterogeneity Using Seismic Envelope Inversion",
                "url": "https://geophysicsseismicblog.wordpress.com/2020/02/04/__trashed-2/#:~:text=3,then%20finally%20plot%20the%20trace",
                "text": "3. Request waveform data using HinetPy, specifying the start-time and duration of the record. 4. Convert downloaded data into the SAC format through HinetPy interface. This will use WIN32 Tool which is available from the the Hi-net website. 5. Remove instrument response using supplementary data downloaded in step 3, and then finally plot the trace.",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 39,
                  "end_line_num": 47
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5829,
              "end_ix": 5841,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Hi-net Seismograph Network User Interface: Downloading Waveform Data with Python for One Earthquake Example – Quantifying the Strength of Subsurface Heterogeneity Using Seismic Envelope Inversion",
                "url": "https://geophysicsseismicblog.wordpress.com/2020/02/04/__trashed-2/#:~:text=",
                "text": "# Get waveform data",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 20,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 88,
                  "end_line_num": 92
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 5894,
              "end_ix": 5906,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=HinetPy%20%E3%81%A8%E3%81%AF%E7%A5%9E%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%99%E3%80%82%20Hi",
                "text": "HinetPy とは神ツールです。 Hi-netやF-netのデータを簡単に取得することができます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 45,
                  "end_line_num": 53
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 6019,
              "end_ix": 6031,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Get Started — HinetPy v0.10.1.dev3+gc87c685b documentation",
                "url": "https://seisman.github.io/HinetPy/tutorial/get-started.html#:~:text=HinetPy%20provide%20a%20Client%20class%2C,help%20you%20get%20waveform%20data",
                "text": "HinetPy provide a Client class, which provide several methods to help you get waveform data.",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 22,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 59,
                  "end_line_num": 68
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 6687,
              "end_ix": 6698,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPy/docs/installation.rst at main - GitHub",
                "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
                "text": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 9,
                  "end_line_num": 17
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 6864,
              "end_ix": 6875,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
                "text": "WINシステムとは",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 7,
                  "end_line_num": 10
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 6875,
              "end_ix": 6885,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
                "text": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 43,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 6959,
              "end_ix": 6969,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
                "text": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 43,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7424,
              "end_ix": 7436,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
                "text": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 30
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7539,
              "end_ix": 7551,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=",
                "text": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 58
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7659,
              "end_ix": 7669,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
                "text": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 30,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 3
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7669,
              "end_ix": 7679,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
                "text": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 37,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7679,
              "end_ix": 7689,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
                "text": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 0,
                  "end_line_num": 2
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7689,
              "end_ix": 7699,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
                "text": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 25,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 4,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7699,
              "end_ix": 7709,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
                "text": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 5,
                  "end_line_num": 7
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7745,
              "end_ix": 7756,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "NIED Registration form",
                "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=",
                "text": "* * *",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 8,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 25,
                  "end_line_num": 33
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7756,
              "end_ix": 7767,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "NIED Registration form",
                "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=Image%20Prohibition",
                "text": "Image Prohibition",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 8,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 47,
                  "end_line_num": 50
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7795,
              "end_ix": 7807,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=",
                "text": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 54,
                  "end_line_num": 62
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7807,
              "end_ix": 7819,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
                "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=Image%3A%20image",
                "text": "Image: image.png",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 39,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 61,
                  "end_line_num": 69
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7851,
              "end_ix": 7863,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "データ公開について - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
                "text": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 38,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 27,
                  "end_line_num": 30
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7863,
              "end_ix": 7873,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
                "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=%E3%81%93%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%A8%EF%BC%8C%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%ABWIN32%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%EF%BC%8C%E4%BB%BB%E6%84%8F%E3%81%AE%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%E3%81%AEA%2FD%E5%80%A4%E3%82%92%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%25%20dewin_32%20,",
                "text": "このツールを使用すると，以下のようにWIN32データファイルから，任意のチャネルのA/D値をテキスト形式で取り出すことが可能です。 % dewin_32 -c WINチャネル番号(16 ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 29,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7873,
              "end_ix": 7884,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPy/docs/installation.rst at main - GitHub",
                "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
                "text": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 27,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 9,
                  "end_line_num": 17
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7920,
              "end_ix": 7932,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
                "url": "https://dandango.pw/archives/422#:~:text=HinetPy%20%E3%81%A8%E3%81%AF%E7%A5%9E%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%99%E3%80%82%20Hi",
                "text": "HinetPy とは神ツールです。 Hi-netやF-netのデータを簡単に取得することができます。",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 32,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 45,
                  "end_line_num": 53
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7932,
              "end_ix": 7944,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "Get Started — HinetPy v0.10.1.dev3+gc87c685b documentation",
                "url": "https://seisman.github.io/HinetPy/tutorial/get-started.html#:~:text=HinetPy%20provide%20a%20Client%20class%2C,help%20you%20get%20waveform%20data",
                "text": "HinetPy provide a Client class, which provide several methods to help you get waveform data.",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 22,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 59,
                  "end_line_num": 68
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7969,
              "end_ix": 7980,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
                "text": "WINシステムとは",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 42,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 7,
                  "end_line_num": 10
                },
                "og_tags": null
              }
            },
            {
              "start_ix": 7980,
              "end_ix": 7990,
              "citation_format_type": "tether_v4",
              "metadata": {
                "type": "webpage",
                "title": "WINシステム（地震学）の使い方 - K-Notes",
                "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
                "text": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
                "pub_date": null,
                "extra": {
                  "cited_message_idx": 43,
                  "search_result_idx": null,
                  "evidence_text": "",
                  "start_line_num": 1,
                  "end_line_num": 4
                },
                "og_tags": null
              }
            }
          ],
          "content_references": [
            {
              "matched_text": "【30†L1-L3】",
              "start_idx": 134,
              "end_idx": 144,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
              "pub_date": null,
              "snippet": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【30†L1-L3】",
              "start_idx": 217,
              "end_idx": 227,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
              "pub_date": null,
              "snippet": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L1-L4】",
              "start_idx": 312,
              "end_idx": 322,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
              "pub_date": null,
              "snippet": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L1-L4】",
              "start_idx": 398,
              "end_idx": 408,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
              "pub_date": null,
              "snippet": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L0-L2】",
              "start_idx": 710,
              "end_idx": 720,
              "alt": null,
              "type": "webpage_extended",
              "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
              "pub_date": null,
              "snippet": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【32†L59-L62】",
              "start_idx": 913,
              "end_idx": 925,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=%E3%81%AA%E3%81%8A%E3%80%81%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97%E3%81%AB%E3%81%AF%E9%98%B2%E7%81%BD%E7%A7%91%E5%AD%A6%E6%8A%80%E8%A1%93%E7%A0%94%E7%A9%B6%E6%89%80%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E7%99%BB%E9%8C%B2%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%99%E3%80%82",
              "pub_date": null,
              "snippet": "なお、データ取得には防災科学技術研究所ユーザー登録が必要です。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【39†L61-L69】",
              "start_idx": 1031,
              "end_idx": 1043,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=Image%3A%20image",
              "pub_date": null,
              "snippet": "Image: image.png",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【8†L25-L33】",
              "start_idx": 1134,
              "end_idx": 1145,
              "alt": null,
              "type": "webpage_extended",
              "title": "NIED Registration form",
              "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=",
              "pub_date": null,
              "snippet": "* * *",
              "attribution": "hinetwww11.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【32†L54-L58】",
              "start_idx": 1336,
              "end_idx": 1348,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=",
              "pub_date": null,
              "snippet": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【32†L54-L58】",
              "start_idx": 1408,
              "end_idx": 1420,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=",
              "pub_date": null,
              "snippet": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【8†L47-L50】",
              "start_idx": 1473,
              "end_idx": 1484,
              "alt": null,
              "type": "webpage_extended",
              "title": "NIED Registration form",
              "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=Image%20Prohibition",
              "pub_date": null,
              "snippet": "Image Prohibition",
              "attribution": "hinetwww11.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【30†L1-L3】",
              "start_idx": 1776,
              "end_idx": 1786,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
              "pub_date": null,
              "snippet": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【30†L4-L6】",
              "start_idx": 1786,
              "end_idx": 1796,
              "alt": null,
              "type": "webpage_extended",
              "title": "地震観測網ログイン - 防災科研",
              "url": "https://hinetwww11.bosai.go.jp/auth/?LANG=ja#:~:text=%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E7%B6%B2%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%20,net%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99",
              "pub_date": null,
              "snippet": "地震観測網ログイン - 防災科研 2004年4月1日以降のデータが取得可能です。 長期間および2004年4月1日以前の連続波形データをダウンロードできます。 Hi- netのイベント波形データダウンロードが行えます ...",
              "attribution": "hinetwww11.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4-L7】",
              "start_idx": 1946,
              "end_idx": 1956,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【39†L69-L77】",
              "start_idx": 2071,
              "end_idx": 2083,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=%E5%88%87%E3%82%8A%E5%87%BA%E3%81%97%E8%A6%B3%E6%B8%AC%E7%82%B9%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%80%81%E8%A6%B3%E6%B8%AC%E7%82%B9%E3%82%92%E6%8C%87%E5%AE%9A%E5%8F%AF%E8%83%BD%20%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%82%84%E3%82%89%E6%9C%9F%E9%96%93%E3%82%84%E3%82%89%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6%E6%A4%9C%E7%B4%A2%20Image%3A%20image",
              "pub_date": null,
              "snippet": "切り出し観測点設定で、観測点を指定可能 データの種類やら期間やらを指定して検索 Image: image.png",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【39†L69-L77】",
              "start_idx": 2211,
              "end_idx": 2223,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=%E5%88%87%E3%82%8A%E5%87%BA%E3%81%97%E8%A6%B3%E6%B8%AC%E7%82%B9%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%80%81%E8%A6%B3%E6%B8%AC%E7%82%B9%E3%82%92%E6%8C%87%E5%AE%9A%E5%8F%AF%E8%83%BD%20%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%82%84%E3%82%89%E6%9C%9F%E9%96%93%E3%82%84%E3%82%89%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6%E6%A4%9C%E7%B4%A2%20Image%3A%20image",
              "pub_date": null,
              "snippet": "切り出し観測点設定で、観測点を指定可能 データの種類やら期間やらを指定して検索 Image: image.png",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【29†L5-L7】",
              "start_idx": 2502,
              "end_idx": 2512,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
              "pub_date": null,
              "snippet": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【18†L9-L11】",
              "start_idx": 3042,
              "end_idx": 3053,
              "alt": null,
              "type": "webpage_extended",
              "title": "Temporary suspension of data release - fnet.bosai.go.jp",
              "url": "https://www.fnet.bosai.go.jp/notice/Notice.20230413.php?LANG=en#:~:text=fnet,the%20data%20and%20the",
              "pub_date": null,
              "snippet": "fnet.bosai.go.jp www.fnet.bosai.go.jp  As announced on March 14, 2023, a bug was found in the data conversion system from WIN32 format to other formats. To correct the data and the ...",
              "attribution": "fnet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L0-L2】",
              "start_idx": 3292,
              "end_idx": 3302,
              "alt": null,
              "type": "webpage_extended",
              "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
              "pub_date": null,
              "snippet": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L5-L7】",
              "start_idx": 3574,
              "end_idx": 3584,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
              "pub_date": null,
              "snippet": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【42†L7-L10】",
              "start_idx": 3668,
              "end_idx": 3679,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
              "pub_date": null,
              "snippet": "WINシステムとは",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【18†L1-L3】",
              "start_idx": 3731,
              "end_idx": 3741,
              "alt": null,
              "type": "webpage_extended",
              "title": "How to use the Hi-net data",
              "url": "https://www.hinet.bosai.go.jp/about_data/#:~:text=All%20waveform%20data%20provided%20from,or%20SAC%20files%20are",
              "pub_date": null,
              "snippet": "All waveform data provided from our website are in the 'WIN32' data file format. Utility programs to convert WIN32 files into WIN files or SAC files are ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【38†L11-L17】",
              "start_idx": 3915,
              "end_idx": 3927,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について",
              "url": "https://www.vnet.bosai.go.jp/about_data/?page=6#:~:text=win32%E3%81%8B%E3%82%89win%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%AB%E7%AD%89%E3%81%AF%EF%BC%8C%20%E3%80%8CWIN32%E9%96%A2%E9%80%A3%E3%83%84%E3%83%BC%E3%83%AB%E3%80%8D%28%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20%E3%81%AA%E3%81%8A%EF%BC%8C%E3%81%93%E3%82%8C%E3%82%89%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AB%E4%B8%8D%E5%85%B7%E5%90%88%E7%AD%89%E7%99%BA%E8%A6%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%82%89%EF%BC%8C%20",
              "pub_date": null,
              "snippet": "win32からwinに変換するツール等は， 「WIN32関連ツール」(要ユーザ認証) として公開されていますのでご利用ください。 なお，これらのツールに不具合等発見されましたら， ...",
              "attribution": "vnet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【38†L27-L30】",
              "start_idx": 3927,
              "end_idx": 3939,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【27†L9-L17】",
              "start_idx": 4078,
              "end_idx": 4089,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPy/docs/installation.rst at main - GitHub",
              "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
              "pub_date": null,
              "snippet": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
              "attribution": "github.com",
              "icon_type": null
            },
            {
              "matched_text": "【27†L1-L7】",
              "start_idx": 4137,
              "end_idx": 4147,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPy.win32 module",
              "url": "https://seisman.github.io/HinetPy/api/HinetPy.win32.html#:~:text=This%20function%20calls%20the%20win2sac_32,win32%20format%20to%20SAC%20fomrat",
              "pub_date": null,
              "snippet": "This function calls the win2sac_32 command, available in the Hi-net win32tools package, to convert data files from win32 format to SAC fomrat.",
              "attribution": "seisman.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【29†L1-L4】",
              "start_idx": 4296,
              "end_idx": 4306,
              "alt": null,
              "type": "webpage_extended",
              "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=%E3%81%93%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%A8%EF%BC%8C%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%ABWIN32%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%EF%BC%8C%E4%BB%BB%E6%84%8F%E3%81%AE%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%E3%81%AEA%2FD%E5%80%A4%E3%82%92%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%25%20dewin_32%20,",
              "pub_date": null,
              "snippet": "このツールを使用すると，以下のようにWIN32データファイルから，任意のチャネルのA/D値をテキスト形式で取り出すことが可能です。 % dewin_32 -c WINチャネル番号(16 ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【38†L27-L30】",
              "start_idx": 4500,
              "end_idx": 4512,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【39†L79-L87】",
              "start_idx": 4587,
              "end_idx": 4599,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=2",
              "pub_date": null,
              "snippet": "2-1. 変換ツールの入手",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【39†L79-L87】",
              "start_idx": 4644,
              "end_idx": 4656,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=2",
              "pub_date": null,
              "snippet": "2-1. 変換ツールの入手",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【14†L1-L3】",
              "start_idx": 4908,
              "end_idx": 4918,
              "alt": null,
              "type": "webpage_extended",
              "title": "F-net 更新履歴",
              "url": "https://www.fnet.bosai.go.jp/news_archive/?LANG=ja#:~:text=miniSEED%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E7%AD%89%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E5%86%8D%E9%96%8B%EF%BC%882024%E5%B9%B41%E6%9C%8829%E6%97%A5%E6%9B%B4%E6%96%B0%EF%BC%89,2023%2F04%2F13%2C%20miniSEED%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E7%AD%89%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E4%B8%80%E6%99%82",
              "pub_date": null,
              "snippet": "miniSEEDフォーマット等のデータ公開再開（2024年1月29日更新）. ◯ 2023/11/08, システムメンテナンスのお知らせ. ◯ 2023/04/13, miniSEEDフォーマット等のデータ公開一時 ...",
              "attribution": "fnet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4-L7】",
              "start_idx": 5336,
              "end_idx": 5346,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【6†L10-L13】",
              "start_idx": 5678,
              "end_idx": 5689,
              "alt": null,
              "type": "webpage_extended",
              "title": "[PDF] HinetPy: A Python package for accessing and processing NIED Hi ...",
              "url": "https://www.theoj.org/joss-papers/joss.06840/10.21105.joss.06840.pdf#:~:text=,However%2C%20accessing%20them%20can",
              "pub_date": null,
              "snippet": "[PDF] HinetPy: A Python package for accessing and processing NIED Hi ... The NIED Hi-net data is available for free through the NIED Hi-net website after users register for an account. However, accessing them can ...",
              "attribution": "theoj.org",
              "icon_type": null
            },
            {
              "matched_text": "【6†L27-L35】",
              "start_idx": 5689,
              "end_idx": 5700,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPy: A Python package for accessing and processing NIED Hi ...",
              "url": "https://www.researchgate.net/publication/381712155_HinetPy_A_Python_package_for_accessing_and_processing_NIED_Hi-net_seismic_data#:~:text=HinetPy%3A%20A%20Python%20package%20for,provides%20several%20functions%20for",
              "pub_date": null,
              "snippet": "HinetPy: A Python package for accessing and processing NIED Hi ... Hi-net data, allowing users to access data without any manual operations on the Hi-net website. The win32 module provides several functions for ...",
              "attribution": "researchgate.net",
              "icon_type": null
            },
            {
              "matched_text": "【20†L39-L47】",
              "start_idx": 5817,
              "end_idx": 5829,
              "alt": null,
              "type": "webpage_extended",
              "title": "Hi-net Seismograph Network User Interface: Downloading Waveform Data with Python for One Earthquake Example – Quantifying the Strength of Subsurface Heterogeneity Using Seismic Envelope Inversion",
              "url": "https://geophysicsseismicblog.wordpress.com/2020/02/04/__trashed-2/#:~:text=3,then%20finally%20plot%20the%20trace",
              "pub_date": null,
              "snippet": "3. Request waveform data using HinetPy, specifying the start-time and duration of the record. 4. Convert downloaded data into the SAC format through HinetPy interface. This will use WIN32 Tool which is available from the the Hi-net website. 5. Remove instrument response using supplementary data downloaded in step 3, and then finally plot the trace.",
              "attribution": "geophysicsseismicblog.wordpress.com",
              "icon_type": null
            },
            {
              "matched_text": "【20†L88-L92】",
              "start_idx": 5829,
              "end_idx": 5841,
              "alt": null,
              "type": "webpage_extended",
              "title": "Hi-net Seismograph Network User Interface: Downloading Waveform Data with Python for One Earthquake Example – Quantifying the Strength of Subsurface Heterogeneity Using Seismic Envelope Inversion",
              "url": "https://geophysicsseismicblog.wordpress.com/2020/02/04/__trashed-2/#:~:text=",
              "pub_date": null,
              "snippet": "# Get waveform data",
              "attribution": "geophysicsseismicblog.wordpress.com",
              "icon_type": null
            },
            {
              "matched_text": "【32†L45-L53】",
              "start_idx": 5894,
              "end_idx": 5906,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=HinetPy%20%E3%81%A8%E3%81%AF%E7%A5%9E%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%99%E3%80%82%20Hi",
              "pub_date": null,
              "snippet": "HinetPy とは神ツールです。 Hi-netやF-netのデータを簡単に取得することができます。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【22†L59-L68】",
              "start_idx": 6019,
              "end_idx": 6031,
              "alt": null,
              "type": "webpage_extended",
              "title": "Get Started — HinetPy v0.10.1.dev3+gc87c685b documentation",
              "url": "https://seisman.github.io/HinetPy/tutorial/get-started.html#:~:text=HinetPy%20provide%20a%20Client%20class%2C,help%20you%20get%20waveform%20data",
              "pub_date": null,
              "snippet": "HinetPy provide a Client class, which provide several methods to help you get waveform data.",
              "attribution": "seisman.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【27†L9-L17】",
              "start_idx": 6687,
              "end_idx": 6698,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPy/docs/installation.rst at main - GitHub",
              "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
              "pub_date": null,
              "snippet": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
              "attribution": "github.com",
              "icon_type": null
            },
            {
              "matched_text": "【42†L7-L10】",
              "start_idx": 6864,
              "end_idx": 6875,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
              "pub_date": null,
              "snippet": "WINシステムとは",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【43†L1-L4】",
              "start_idx": 6875,
              "end_idx": 6885,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
              "pub_date": null,
              "snippet": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【43†L1-L4】",
              "start_idx": 6959,
              "end_idx": 6969,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
              "pub_date": null,
              "snippet": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【38†L27-L30】",
              "start_idx": 7424,
              "end_idx": 7436,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【32†L54-L58】",
              "start_idx": 7539,
              "end_idx": 7551,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=",
              "pub_date": null,
              "snippet": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【30†L1-L3】",
              "start_idx": 7659,
              "end_idx": 7669,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%8C%202002%E5%B9%B46%E6%9C%883%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E7%B5%8C%E7%94%B1%E3%81%A7%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%20",
              "pub_date": null,
              "snippet": "2004年4月1日以降の連続波形データ， 2002年6月3日以降のイベント波形データはインターネット経由で取得可能です。 波形データは，HDD上で一定期間保持した後，テープメディア ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【37†L1-L4】",
              "start_idx": 7669,
              "end_idx": 7679,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8CHDD%E4%B8%8A%E3%81%A7%E4%B8%80%E5%AE%9A%E6%9C%9F%E9%96%93%E4%BF%9D%E6%8C%81%E3%81%97%E3%81%9F%E5%BE%8C%EF%BC%8C%E3%83%86%E3%83%BC%E3%83%97%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%EF%BC%88DLT%EF%BC%89%E7%AD%89%E3%81%A7%E3%81%AE%E4%BF%9D%E7%AE%A1%E3%81%AB%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20DLT%E3%81%AB%E3%81%AE%E3%81%BF%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AB%E3%81%AF%EF%BC%8CHDD%E3%81%AB%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E4%BD%9C%E6%A5%AD%E3%81%8C%20",
              "pub_date": null,
              "snippet": "波形データは，HDD上で一定期間保持した後，テープメディア（DLT）等での保管に移行します。 DLTにのみ保存されているデータを使用する際には，HDDに展開する作業が ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L0-L2】",
              "start_idx": 7679,
              "end_idx": 7689,
              "alt": null,
              "type": "webpage_extended",
              "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=Q%26A%20%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E3%81%94%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%20,%E9%98%B2%E7%81%BD%E7%A7%91%E7%A0%94%20%E5%BD%93WEB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E9%9A%9B%E3%81%AE%E5%8F%82%E8%80%83%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E4%B8%80%E5%85%83%E5%8C%96%E9%9C%87%E6%BA%90%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%BE%93%E3%81%84%E3%81%BE%E3%81%97%E3%81%A6%EF%BC%8C%E9%AB%98%E6%84%9F%E5%BA%A6%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E3%83%87%20%E3%83%BC%E3%82%BF",
              "pub_date": null,
              "snippet": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研 当WEBサイトでは，高感度地震観測波形データをダウンロードしていただく際の参考データとして，気象庁一元化震源リストを利用しています。従いまして，高感度地震観測デ ータ ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【25†L4-L7】",
              "start_idx": 7689,
              "end_idx": 7699,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,net%EF%BC%8C%E5%90%84%E5%A4%A7%E5%AD%A6%EF%BC%8C%E6%B0%97%E8%B1%A1%E5%BA%81%E7%AD%89%E3%81%AE%EF%BC%8C%E5%9C%B0%E9%9C%87%E8%A6%B3%E6%B8%AC%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%E3%80%82%20%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AF%EF%BC%8C%E7%99%BB%E9%8C%B2%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AE%E3%81%BF%E3%81%A8",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 Hi-net，各大学，気象庁等の，地震観測連続波形データのダウンロードが行えます。 ダウンロードは，登録ユーザのみと ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L5-L7】",
              "start_idx": 7699,
              "end_idx": 7709,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E9%80%A3%E7%B6%9A%E6%B3%A2%E5%BD%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AF%EF%BC%8C%E6%A9%9F%E9%96%A2%E6%AF%8E%E3%81%AE1%E5%88%86%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E6%A7%8B%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A%EF%BC%8Cwin32%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%8E%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%20%E7%8F%BE%E6%99%82%E7%82%B9%E3%81%A7%E3%81%AF%EF%BC%8C2004%E5%B9%B44%E6%9C%881%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%8F%96%E5%BE%97%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%82%E3%82%8A%EF%BC%8C%201%E5%9B%9E%E3%81%AE%20",
              "pub_date": null,
              "snippet": "連続波形データは，機関毎の1分ファイルとして構成されており，win32形式で収録されています。 現時点では，2004年4月1日以降のデータが取得可能であり， 1回の ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【8†L25-L33】",
              "start_idx": 7745,
              "end_idx": 7756,
              "alt": null,
              "type": "webpage_extended",
              "title": "NIED Registration form",
              "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=",
              "pub_date": null,
              "snippet": "* * *",
              "attribution": "hinetwww11.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【8†L47-L50】",
              "start_idx": 7756,
              "end_idx": 7767,
              "alt": null,
              "type": "webpage_extended",
              "title": "NIED Registration form",
              "url": "https://hinetwww11.bosai.go.jp/nied/registration/#:~:text=Image%20Prohibition",
              "pub_date": null,
              "snippet": "Image Prohibition",
              "attribution": "hinetwww11.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【32†L54-L62】",
              "start_idx": 7795,
              "end_idx": 7807,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=",
              "pub_date": null,
              "snippet": "* 防災科学技術研究所のデータを使用した場合は、出典を明示し謝辞を記すこと。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【39†L61-L69】",
              "start_idx": 7807,
              "end_idx": 7819,
              "alt": null,
              "type": "webpage_extended",
              "title": "日本の地震の波形データをゲットする手順（備忘録 #地震波形 - Qiita",
              "url": "https://qiita.com/m010xx69/items/d08c36d74cec90f47030#:~:text=Image%3A%20image",
              "pub_date": null,
              "snippet": "Image: image.png",
              "attribution": "qiita.com",
              "icon_type": null
            },
            {
              "matched_text": "【38†L27-L30】",
              "start_idx": 7851,
              "end_idx": 7863,
              "alt": null,
              "type": "webpage_extended",
              "title": "データ公開について - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/about_data/?LANG=ja#:~:text=%E3%83%87%E3%83%BC%E3%82%BF%E5%85%AC%E9%96%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%20,%E8%A6%81%E3%83%A6%E3%83%BC%E3%82%B6%E8%AA%8D%E8%A8%BC%29%E3%80%8D%20%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%AE%E3%81%A7%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%20win32%E5%BD%A2%E5%BC%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%20%E3%82%82%E3%81%94%E8%A6%A7%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
              "pub_date": null,
              "snippet": "データ公開について - NIED Hi-net - 防災科研 win32からwinに変換するツール等は， 「WIN32関連ツール (要ユーザ認証)」 として公開されていますのでご利用ください。 win32形式についてはこちら もご覧下さい。",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【29†L1-L4】",
              "start_idx": 7863,
              "end_idx": 7873,
              "alt": null,
              "type": "webpage_extended",
              "title": "Q&A よくあるご質問と回答 - NIED Hi-net - 防災科研",
              "url": "https://www.hinet.bosai.go.jp/faq/?LANG=ja#:~:text=%E3%81%93%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%A8%EF%BC%8C%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%ABWIN32%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%EF%BC%8C%E4%BB%BB%E6%84%8F%E3%81%AE%E3%83%81%E3%83%A3%E3%83%8D%E3%83%AB%E3%81%AEA%2FD%E5%80%A4%E3%82%92%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E5%BD%A2%E5%BC%8F%E3%81%A7%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%20%25%20dewin_32%20,",
              "pub_date": null,
              "snippet": "このツールを使用すると，以下のようにWIN32データファイルから，任意のチャネルのA/D値をテキスト形式で取り出すことが可能です。 % dewin_32 -c WINチャネル番号(16 ...",
              "attribution": "hinet.bosai.go.jp",
              "icon_type": null
            },
            {
              "matched_text": "【27†L9-L17】",
              "start_idx": 7873,
              "end_idx": 7884,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPy/docs/installation.rst at main - GitHub",
              "url": "https://github.com/seisman/HinetPy/blob/master/docs/installation.rst#:~:text=HinetPy%2Fdocs%2Finstallation.rst%20at%20main%20,commands%20to%20process%20the",
              "pub_date": null,
              "snippet": "HinetPy/docs/installation.rst at main - GitHub win32tools is a collection of tools provided by NIED Hi-net to process win32 format data. HinetPy needs the catwin32 and win2sac_32 commands to process the ...",
              "attribution": "github.com",
              "icon_type": null
            },
            {
              "matched_text": "【32†L45-L53】",
              "start_idx": 7920,
              "end_idx": 7932,
              "alt": null,
              "type": "webpage_extended",
              "title": "HinetPyの使い方（抜粋） | はじめよう！GMT6",
              "url": "https://dandango.pw/archives/422#:~:text=HinetPy%20%E3%81%A8%E3%81%AF%E7%A5%9E%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%99%E3%80%82%20Hi",
              "pub_date": null,
              "snippet": "HinetPy とは神ツールです。 Hi-netやF-netのデータを簡単に取得することができます。",
              "attribution": "dandango.pw",
              "icon_type": null
            },
            {
              "matched_text": "【22†L59-L68】",
              "start_idx": 7932,
              "end_idx": 7944,
              "alt": null,
              "type": "webpage_extended",
              "title": "Get Started — HinetPy v0.10.1.dev3+gc87c685b documentation",
              "url": "https://seisman.github.io/HinetPy/tutorial/get-started.html#:~:text=HinetPy%20provide%20a%20Client%20class%2C,help%20you%20get%20waveform%20data",
              "pub_date": null,
              "snippet": "HinetPy provide a Client class, which provide several methods to help you get waveform data.",
              "attribution": "seisman.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【42†L7-L10】",
              "start_idx": 7969,
              "end_idx": 7980,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=WIN%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A8%E3%81%AF",
              "pub_date": null,
              "snippet": "WINシステムとは",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            },
            {
              "matched_text": "【43†L1-L4】",
              "start_idx": 7980,
              "end_idx": 7990,
              "alt": null,
              "type": "webpage_extended",
              "title": "WINシステム（地震学）の使い方 - K-Notes",
              "url": "https://is-enaga.github.io/k-notes/win/#:~:text=%E5%9C%B0%E9%9C%87%E6%B3%A2%E5%BD%A2%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AEGUI%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%84%EF%BC%8C%E3%81%9D%E3%82%8C%E3%82%92%E8%A3%9C%E5%8A%A9%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E6%88%90%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E",
              "pub_date": null,
              "snippet": "地震波形を読み取るためのGUIソフトウェアや，それを補助するためのプログラムから成ります．",
              "attribution": "is-enaga.github.io",
              "icon_type": null
            }
          ],
          "timestamp_": "absolute",
          "message_type": null,
          "is_async_task_result_message": true,
          "b1de6e2_rm": true,
          "async_task_id": "deepresch_67fecfbcda4c819181e2060c0df2ad8a",
          "async_task_title": "Hi-netの地震波形データの3ヶ月分取得方法"
        },
        "recipient": "all",
        "channel": "final"
      },
      "parent": "f3842d97-6982-471a-a081-3ab96e3e40d8",
      "children": []
    }
  },
  "moderation_results": [],
  "current_node": "01a71112-3324-4716-87ca-8eea7188655f",
  "plugin_ids": null,
  "conversation_id": "67fecf87-6e6c-8003-9562-6a7bf9451239",
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
  "is_do_not_remember": null,
  "memory_scope": "global_enabled",
  "context_scopes": null,
  "sugar_item_id": null,
  "sugar_item_visible": false,
  "is_study_mode": false,
  "owner": null,
  "id": "67fecf87-6e6c-8003-9562-6a7bf9451239"
}
```