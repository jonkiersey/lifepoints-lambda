// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamo = new AWS.DynamoDB.DocumentClient();

const GET = async (event) => {
  const params = {
    TableName: 'lifepoints',
    IndexName: 'userId-datetime-index',
    KeyConditionExpression: 'userId = :hkey',
    ExpressionAttributeValues: {
      ':hkey': event.queryStringParameters.userId,
    },
  };

  if (event.queryStringParameters.startDate && event.queryStringParameters.endDate) {
    params.KeyConditionExpression = 'userId = :hkey and #datetime BETWEEN :sdate AND :edate';
    Object.assign(
      params.ExpressionAttributeValues,
      {
        ':sdate': parseInt(event.queryStringParameters.startDate, 10),
        ':edate': parseInt(event.queryStringParameters.endDate, 10),
      },
    );
    params.ExpressionAttributeNames = {
      '#datetime': 'datetime',
    };
  }

  const response = await dynamo.query(params).promise().then((data) => data).catch((err) => err);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response),
  };
};

module.exports = GET;
