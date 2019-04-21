const handler = (event, context, callback) => {
  const REQUIRED_NAME = 'James';
  const { name } = JSON.parse(event.body);

  if (name === REQUIRED_NAME) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({message: `Thanks for visiting us ${name}`})
    });
  }
  callback(new Error(`You're not James!`));
};

module.exports.handler = handler;
