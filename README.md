## DynamoDB backup JSON

### 概要

- DynamoDB のテーブルから Scan で取得したデータを JSON で書き出す

### 準備

- `.env` を修正する
    - DYNAMO_TABLE に取得したいテーブル名を設定する
    - PROFILE に必要に応じて対象のテーブルにアクセス可能な AWS のプロファイルを設定する
        - `default` でよければそのままで

```
DYNAMO_TABLE=table_name
PROFILE=my-profile
```

## 実行

- ライブラリのインストール

```sh
yarn
```

- 実行

```sh
yarn start
```

- 実行結果が `results` 配下に生成される

```
% tree results
results
├── table_name-2021-04-05T16:21:08.402Z.json
├── table_name-2021-04-05T16:16:47.024Z.json
├── table_name-2021-04-05T16:18:51.486Z.json
├── table_name-2021-04-05T16:27:46.992Z.json
└── table_name-2021-04-05T16:31:15.827Z.json
```
