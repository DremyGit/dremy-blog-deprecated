let defaultHandler = {};

defaultHandler.options = (request, reply) => {
  reply();
};


defaultHandler.index = (request, reply) => {
  reply("OK");
};

module.exports = defaultHandler;
