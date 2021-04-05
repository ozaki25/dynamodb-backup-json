## DynamoDB backup JSON

### 概要

- DynamoDB のテーブルから Scan で取得したデータを JSON で書き出す

### 準備

- `.env` に取得したテーブル名を設定する

```
DYNAMO_TABLE=table_name
```

- 必要に応じて対象のテーブルにアクセス可能な AWS のプロファイルを `serverless.yml` に設定する
  - `default` でよければ設定は不要

```yml
service:
  name: dynamodb-backup-json
frameworkVersion: '2'
plugins:
  - serverless-webpack
  - serverless-dotenv-plugin
provider:
  name: aws
  runtime: nodejs12.x
  region: ap-northeast-1
  profile: your-profike # ここを必要に応じて設定
  lambdaHashingVersion: 20201221
  environment:
    DYNAMODB_TABLE: ${env:DYNAMO_TABLE}
functions:
  main:
    handler: handler.main
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
├── -2021-04-05T16:21:08.402Z.json
├── table_name-2021-04-05T16:16:47.024Z.json
├── table_name-2021-04-05T16:18:51.486Z.json
├── table_name-2021-04-05T16:27:46.992Z.json
└── table_name-2021-04-05T16:31:15.827Z.json
```
