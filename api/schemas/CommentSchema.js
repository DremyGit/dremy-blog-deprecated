const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

let CommentSchema = new Schema({
  username:     {type: String,    required: true},
  content:      {type: String,    required: true},
  time:         {type: Date,      default: Date.now},
  blog:         {type: ObjectId,  required: true, ref: 'Blog'},
  target:       {type: ObjectId,  default: null}
}, {
  versionKey: false
})

CommentSchema.statics = {
  getAllComments(callback) {
    return this
      .find({})
      .populate('blog', {title: 'true'})
      .exec(callback)
  },

  getCommentById(id, callback) {
    return this
      .findById(id)
      .populate('blog', {title: 'true'})
      .exec(callback)
  },

  getCommentsByBlogId(blogId, callback) {
    return this
      .find({blog: blogId})
      .exec(callback)
  }
}

module.exports = CommentSchema;