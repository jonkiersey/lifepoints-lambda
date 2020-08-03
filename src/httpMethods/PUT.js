// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamo = new AWS.DynamoDB.DocumentClient();

const PUT = async (event) => {
  const params = {
    TableName: 'lifepoints',
    Item: { ...JSON.parse(event.body), datetime: Date.now() },
  };
  const response = await dynamo.put(params).promise().then((data) => data).catch((err) => err);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response),
  };
};

module.exports = PUT;
