const handler = (event, context, callback) => {
  const constants = require('../constants/constants');
  const REQUIRED_NAME = constants.requiredName;
  const { name } = JSON.parse(event.body);

  if (name === REQUIRED_NAME) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({message: `Thanks for visiting us ${name}`})
    });
  }
  callback(new Error(constants.testError));
};

module.exports.handler = handler;
