const httpMethods = require('./httpMethods');

const methodNotFound = (method) => ({
  statusCode: 405,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: `http method ${method} not supported.`,
});

const handler = async (event) => {
  if (['GET', 'OPTIONS', 'PUT'].includes(event.httpMethod)) {
    return httpMethods[event.httpMethod];
  }
  return methodNotFound(event.httpMethod);
};

module.exports = handler;
