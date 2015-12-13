module.exports = function (server) {

  server.ext('onRequest', function (request, reply) {

    if (request.method == 'options') {
      reply()
        .header('Access-Control-Allow-Headers', 'content-type')
        .header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
      return;
    }
    reply.continue();

  })

   server.ext('onPreResponse', function(request, reply) {

    // handle Boom
    if (request.response.isBoom) {
      request.response.output.headers['Access-Control-Allow-Origin']= '*';
      reply.continue();
      return;
    }

    // handle 2xx response
    request.response.header('Access-Control-Allow-Origin', '*');
    let message = request.response.source;

    request.response.source = {
      message: message,
      statusCode: request.response.statusCode
    };

    if (request.response.source.message === null) {
      delete request.response.source.message;
    }

    reply.continue();
  });

}

