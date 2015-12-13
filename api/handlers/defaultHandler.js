const Escape = require('../utils/escape');

let defaultHandler = {};

defaultHandler.options = (request, reply) => {
  reply();
};


defaultHandler.index = (request, reply) => {
  reply("OK");
};

defaultHandler.test = (request, reply) => {
  const body = request.payload.content;

  console.log(body);
  let after = Escape(body);
  console.log(after);
  reply(after);

}

module.exports = defaultHandler;
