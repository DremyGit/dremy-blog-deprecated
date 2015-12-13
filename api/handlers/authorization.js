const Boom          = require('boom');
const jwt           = require('jsonwebtoken');
const Admin         = require('../models/Admin');
const privateConfig = require('../configs/private.js');

let authHandler = {};

authHandler.getToken = (request, reply) => {
  let form = request.payload;
  if (form == null) {
    return reply(Boom.badRequest());
  }

  Admin.getAdmin(form.username, form.password, (err, admin) => {
    if (err) {
      console.log(err);
      return reply(Boom.internal());
    }
    if (admin == null) {
      return reply(Boom.notFound("wrong"));
    }
    let token = jwt.sign(
      {username: admin.username, _id: admin._id},
      privateConfig.secret,
      {
        algorithm: 'HS256',
        expiresIn: '30m'
      }
    );
    reply({token});
  })
}

authHandler.showState = (request, reply) => {
  reply(request.auth);
}



authHandler.validate = (decoded, request, callback) => {

  //if (request.) {
    return callback(null, true);
  //}
  //return callback(null, false);
}

module.exports = authHandler;