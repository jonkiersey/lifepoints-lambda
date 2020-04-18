const { handler } = require('./src/handler');

exports.handler = async (event) => await handler(event);