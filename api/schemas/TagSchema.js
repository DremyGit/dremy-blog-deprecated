const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

let TagSchema = new Schema({
  name:       {type: String, default: 'N/A'},
  name_short: {type: String, default: 'null'}
});

TagSchema.statics = {

  getAllTag(callback) {
    return this
      .find({}, {__v: 0})
      .exec(callback);
  }
}

module.exports = TagSchema;