const Blog = require('../models/Blog');
const Boom = require('boom');
const marked = require('marked');
const _ = require('underscore');

let blogHandler = {};


blogHandler.options = (request, reply) => {
  reply();
};


blogHandler.index = (request, reply) => {
  reply("OK");
};



blogHandler.getBlogs = (request, reply) => {

  const fields = request.auth.isAuthenticated ? null : {source: 0, __v: 0};

  Blog.getAllBlog(fields, (err, blogs) => {

    let obj = {};
    blogs.forEach( item => obj[item.title_short] = item );
    reply(obj);
  })
};



blogHandler.getBlogByTitle = (request, reply) => {

  let title = request.params.title;

  const fields = request.auth.isAuthenticated ? null : {source: 0, __v: 0};

  Blog.getBlogByTitle(title, fields, (err, blog) => {
    if (blog === null) {
      return reply(Boom.notFound());
    }
    reply(blog);
  })

};



blogHandler.addBlog = (request, reply) => {

  let form = request.payload;

  let a = new Blog({
    title: form.title,
    title_short: form.title_short,
    summary: form.summary,
    source: form.source,
    html: marked(form.source),
    time: form.time,
    tag: form.tag_id,
    picture: form.picture
  });
  a.save((err, project) => {
    if (err) {
      console.log(err);
      return reply(Boom.badData());
    }
    reply(project).code(201);
  });

};



blogHandler.updateBlog = (request, reply) => {

  let id = request.params.id;
  let form = request.payload;
  Blog.findById(id, (err, blog) => {
    if (err) {
      console.log(err);
      return reply(Boom.notFound());
    }
    let _form = _.extend(blog, form);
    _form.save();
    reply(_form).code(201);
  })

};



blogHandler.deleteBlog = (request, reply) => {

  let id = request.params.id;
  Blog.deleteBlog(id, (err, res) => {
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



module.exports = blogHandler;