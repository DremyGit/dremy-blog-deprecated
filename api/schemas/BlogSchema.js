const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

let BlogSchema = new Schema({
  title:        {type: String,    default: ''},
  title_short:  {type: String,    default: ''},
  summary:      {type: String,    default: ''},
  source:       {type: String,    default: ''},
  html:         {type: String,    default: ''},
  time:         {type: Date,      default: Date.now},
  tag:          {type: ObjectId,  ref: 'Tag'},
  picture:      {type: String},
  status:       {type: Number,    default: 1}
});

BlogSchema.statics = {

  // For customer
  getAllBlog(fields, callback) {
    return this
      .find({}, fields)
      .populate('tag', {__v: 0, _id: 0})
      .exec(callback);
  },

  getBlogByTitle(title, fields, callback) {
    return this
      .findOne({title_short: title}, fields)
      .populate('tag', {__v: 0, _id: 0})
      .exec(callback);
  },

  deleteBlog(id, callback) {
    return this
      .remove({_id: id})
      .exec(callback);
  }
}

module.exports = BlogSchema;