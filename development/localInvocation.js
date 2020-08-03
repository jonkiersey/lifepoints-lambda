process.env.AWS_SDK_LOAD_CONFIG = true;
const { handler } = require('../src/handler');

const body = {
    "userId": "jon",
    "category": "HOUSEHOLD",
    "points": 1,
    "name": "Breakfast",
    "description": "Made breakfast sandwiches, coffee and tea"
};

const event = {
  version: '1.0',
  resource: '/lifepoints',
  path: '/lifepoints',
  httpMethod: 'PUT',
  headers: {
    'Content-Length': '44',
    'Content-Type': 'application/json',
    Host: 'si4hsvyhpl.execute-api.us-east-1.amazonaws.com',
    'Postman-Token': '1d86cca4-9962-4e48-ba97-7d4ab6d7ecb3',
    'User-Agent': 'PostmanRuntime/7.24.1',
    'X-Amzn-Trace-Id': 'Root=1-5e9cd0a3-43d0b5483670d23270188786',
    'X-Forwarded-For': '71.56.144.59',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https',
    accept: '*/*',
    'accept-encoding': 'gzip, deflate, br'
  },
  multiValueHeaders: {
    'Content-Length': [ '44' ],
    'Content-Type': [ 'application/json' ],
    Host: [ 'si4hsvyhpl.execute-api.us-east-1.amazonaws.com' ],
    'Postman-Token': [ '1d86cca4-9962-4e48-ba97-7d4ab6d7ecb3' ],
    'User-Agent': [ 'PostmanRuntime/7.24.1' ],
    'X-Amzn-Trace-Id': [ 'Root=1-5e9cd0a3-43d0b5483670d23270188786' ],
    'X-Forwarded-For': [ '71.56.144.59' ],
    'X-Forwarded-Port': [ '443' ],
    'X-Forwarded-Proto': [ 'https' ],
    accept: [ '*/*' ],
    'accept-encoding': [ 'gzip, deflate, br' ]
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  requestContext: {
    accountId: '574826305450',
    apiId: 'si4hsvyhpl',
    domainName: 'si4hsvyhpl.execute-api.us-east-1.amazonaws.com',
    domainPrefix: 'si4hsvyhpl',
    extendedRequestId: 'LQWJojqhIAMEMMw=',
    httpMethod: 'PUT',
    identity: {
      accessKey: null,
      accountId: null,
      caller: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      principalOrgId: null,
      sourceIp: '71.56.144.59',
      user: null,
      userAgent: 'PostmanRuntime/7.24.1',
      userArn: null
    },
    path: '/lifepoints',
    protocol: 'HTTP/1.1',
    requestId: 'LQWJojqhIAMEMMw=',
    requestTime: '19/Apr/2020:22:28:51 +0000',
    requestTimeEpoch: 1587335331903,
    resourceId: 'ANY /lifepoints',
    resourcePath: '/lifepoints',
    stage: '$default'
  },
  pathParameters: null,
  stageVariables: null,
  body: JSON.stringify(body),
  isBase64Encoded: false
}

const invoke = async (event) => {
    const response = await handler(event);
    console.log(response);
}

invoke(event);