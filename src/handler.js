const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    console.log(event);
    const params = {
        TableName: 'lifepoints',
        Item: { ...event.body, datetime: Date.now() }
    }
    const response = await dynamo.put(params).promise();
    console.log(response);
};

module.exports = { handler };
