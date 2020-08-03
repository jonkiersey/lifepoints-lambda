const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamo = new AWS.DynamoDB.DocumentClient();


const handler = async (event) => {
    console.log('event', event);
    if (event.httpMethod === 'OPTIONS') {
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*'
            },

        };
        console.log('response', response);
        return response;
    }
    const params = {
        TableName: 'lifepoints',
        Item: { ...JSON.parse(event.body), datetime: Date.now() }
    };
    const response = await dynamo.put(params).promise().then(data => data).catch(err => err);
    console.log(response);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(response)
    };
};

module.exports = { handler };
