const Boom    = require('boom');
const marked  = require('marked');
const _       = require('underscore');
const Escape  = require('../utils/escape');
const Blog    = require('../models/Blog');
const Comment = require('../models/Comment');

let commentHandler = {};




commentHandler.getAllComments = (request, reply) => {
  Comment.getAllComments( (err, fields, comments) => {
    if (err) {
      console.log(err);
      return reply(Boom.internal());
    }

    let obj = {};
    comments.forEach( item => obj[item._id] = item );
    reply(obj);
  })
};


commentHandler.getComment = (request, reply) => {
  let id = request.params.id;

  Comment.getCommentById(id, (err, comment) => {
    if (err) {
      console.log(err);
      return reply(Boom.internal());
    }

    reply(comment);
  })
}



commentHandler.getCommentsByBlogId = (request, reply) => {
  let blogId = request.params.blog_id;

  Comment.getCommentsByBlogId(blogId, (err, comment) => {
    let obj = {};

    comment.forEach( item => obj[item._id] = item );
    reply(obj);
  });
};



commentHandler.addComment = (request, reply) => {

  let form = request.payload;
  let blogId = request.query.blog_id;
  let target = request.query.target;

  let _comment = new Comment({
    username: Escape(form.username),
    content: Escape(form.content),
    blog: blogId,
    target: target
  });
  _comment.save( (err, comment) => {
    if (err) {
      console.log(err);
      return reply(Boom.badData());
    }
    reply({comment}).code(201);
  });

};

commentHandler.deleteComment = (request, reply) => {

  let id = request.params.id;
  Comment.deleteComment(id, (err, res) => {
    if (err) {
      console.log(err);
      return reply(Boom.badData());
    }

    const rows = res.result.n;
    if (rows == 0) {
      return reply(Boom.notFound());
    }
    reply().code(204);
  })

};

module.exports = commentHandler;