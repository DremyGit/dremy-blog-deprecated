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
}, {
  versionKey: false
});

BlogSchema.statics = {



  getBlogs(param, fields, page, callback) {
    return this
      .find(param, fields)
      .skip(page.offset)
      .limit(page.limit)
      .populate('tag')
      .exec(callback)
  },

  getBlog(param, fields, callback) {
    return this
      .findOne(param, fields)
      .populate('tag', {_id: 0})
      .exec(callback)
  },


  deleteBlog(id, callback) {
    return this
      .remove({_id: id})
      .exec(callback);
  }
}

module.exports = BlogSchema;