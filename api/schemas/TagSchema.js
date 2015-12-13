const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

let TagSchema = new Schema({
  name:       {type: String, default: 'N/A'},
  name_short: {type: String, default: 'null'}
}, {
  versionKey: false
});

TagSchema.statics = {

  getAllTag(callback) {
    return this
      .find({})
      .exec(callback);
  },

  getTagByName(name, callback) {
    return this
      .findOne({name_short: name})
      .exec(callback)
  }
}

module.exports = TagSchema;