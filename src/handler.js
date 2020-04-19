const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});
const dynamo = new AWS.DynamoDB.DocumentClient();


const handler = async (event) => {
    console.log(event);
    const params = {
        TableName: 'lifepoints',
        Item: { ...JSON.parse(event.body), datetime: Date.now() }
    };
    const response = await dynamo.put(params).promise().then(data => data).catch(err => err);
    console.log(response);
    return {
        statusCode: 200
    };
};

module.exports = { handler };
