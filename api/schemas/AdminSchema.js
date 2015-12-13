const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

let AdminSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
}, {
  versionKey: false
})

AdminSchema.statics = {
  getAdmin(username, password, callback) {
    return this
      .findOne({username, password})
      .exec(callback)
  }
}

module.exports = AdminSchema;