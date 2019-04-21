const handler = (event, context, callback) => {
  const constants = require('../constants/constants');
  console.log('woah', event);
  callback(null, {
    statusCode: 200,
    body: constants.letsPlay,
  });
};

module.exports.handler = handler;
