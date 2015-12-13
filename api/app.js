const Hapi =  require('hapi');
const Good = require('good');
const mongoose = require('mongoose');
const privateConfig = require('./configs/private.js');
const jwt = require('jsonwebtoken');
const hapiAuthJWT = require('hapi-auth-jwt2');
const server = new Hapi.Server();

const lifeHandle = require('./middlewares/middleware');
const authHandler = require('./handlers/authorization');

const routes = require('./routes');

mongoose.connect('mongodb://localhost/dremy_blog');

server.connection({ port: 4000});

lifeHandle(server);

let debugRegister = null;

const env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  mongoose.set('debug', true);
  debugRegister = {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }]
    }
  }
}






server.register(
  [debugRegister,hapiAuthJWT],
  function (err) {
    if (err) {
      throw err;
    }

    server.auth.strategy('try', 'jwt', 'optional', {
      key: privateConfig.secret,
      validateFunc: authHandler.validate,
      verifyOptions: {algorithms: ['HS256']}
    });

    server.auth.strategy('admin', 'jwt', {
      key: privateConfig.secret,
      validateFunc: authHandler.validate,
      verifyOptions: {algorithms: ['HS256']}
    });

    server.route(routes);

    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
});



