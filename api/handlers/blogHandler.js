const Boom    = require('boom');
const marked  = require('marked');
const _       = require('underscore');
const Tag     = require('../models/Tag');
const Blog    = require('../models/Blog');
const Page    = require('../utils/Page');



let blogHandler = {};



blogHandler.options = (request, reply) => {
  reply();
};


blogHandler.index = (request, reply) => {
  reply("OK");
};



blogHandler.getBlogs = (request, reply) => {

  const tagName   = request.query.tag_name;
  const blogTitle = request.query.blog_title;
  const fields    = request.auth.isAuthenticated ? null : {source: 0};
  const page = new Page(request.query);


  if (blogTitle) {
    return Blog.getBlog({title_short: blogTitle}, fields, (err, blog) => {
      if (blog == null) {
        return reply(Boom.notFound())
      }
      return reply(blog);
    });
  }

  if (tagName) {
    return Tag.getTagByName(tagName, (err, tag) => {
      if (tag == null) {
        return reply(Boom.notFound())
      }
      sendBlogs({tag: tag.id});
    })
  }
  sendBlogs({});

  function sendBlogs(param) {
    Blog.getBlogs(param, fields, page, (err, blogs) => {
      return reply(blogs);
    })
  }
};



blogHandler.getBlogById = (request, reply) => {

  const fields = request.auth.isAuthenticated ? null : {source: 0};

  Blog.getBlog({_id: request.params.id}, fields, (err, blog) => {
    if (blog == null) {
      return reply(Boom.notFound());
    }
    return reply(blog);
  })

};



blogHandler.addBlog = (request, reply) => {

  let form = request.payload;
  let _blog = new Blog({
    title:        form.title,
    title_short:  form.title_short,
    summary:      form.summary,
    source:       form.source,
    html:         marked(form.source),
    tag:          form.tag_id,
    picture:      form.picture
  });
  _blog.save((err, project) => {
    if (err) {
      console.log(err);
      return reply(Boom.badData());
    }
    reply(project).code(201);
  });

};



blogHandler.updateBlog = (request, reply) => {

  let id   = request.params.id;
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