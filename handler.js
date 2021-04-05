import { DynamoDB } from 'aws-sdk';

const { DYNAMODB_TABLE } = process.env;

const dynamo = new DynamoDB.DocumentClient();

let items = [];

function scan(lastEvaluatedKey) {
  const params = {
    TableName: DYNAMODB_TABLE,
    LastEvaluatedKey: lastEvaluatedKey || null,
  };
  return dynamo.scan(params).promise();
}

async function getAll(lastEvaluatedKey) {
  const { Items, LastEvaluatedKey } = await scan(lastEvaluatedKey);
  items = [...items, ...Items];
  if (LastEvaluatedKey) {
    getAll(LastEvaluatedKey);
  }
}

export async function main() {
  await getAll();
  console.log(items.length);
  console.log(items);
  return { statusCode: 200 };
}
