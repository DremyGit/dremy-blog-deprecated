const tagHandler     =  require('./handlers/tagHandler');
const blogHandler    =  require('./handlers/blogHandler');
const authHandler    =  require('./handlers/authorization');
const defaultHandler =  require('./handlers/defaultHandler');
const commentHandler =  require('./handlers/commentHandler');

module.exports = [

  // Default Router

  // route ajax options
  {method: 'OPTIONS', path: '/{p*}',          handler: defaultHandler.options},

  // test
  {method: 'GET',     path:'/',               handler: defaultHandler.index},



  // Authorization Router

  // Get access_token, payload: username, password
  {method: 'POST',    path: '/token',         handler: authHandler.getToken,      config: {auth: false}},

  // Get authorization state
  {method: 'GET',     path: '/state',         handler: authHandler.showState},


  // Blogs Router

  // Get blogs, optional param: tag_name, blog_title
  {method: 'GET',     path: '/blogs',         handler: blogHandler.getBlogs},

  // Get blog by id
  {method: 'GET',     path: '/blogs/{id}', handler: blogHandler.getBlogById},

  // Add new blog, payload: blog object
  {method: 'POST',    path: '/blogs',         handler: blogHandler.addBlog,       config: {auth: 'admin'}},

  // Update blog, payload: some parts of blog object
  {method: 'PUT',     path: '/blogs/{id}',    handler: blogHandler.updateBlog,    config: {auth: 'admin'}},

  // Delete blog
  {method: 'DELETE',  path: '/blogs/{id}',    handler: blogHandler.deleteBlog,    config: {auth: 'admin'}},


  // Comments Router

  // Get comments
  {method: 'GET',     path: '/comments',      handler: commentHandler.getAllComments, config: {auth: 'admin'}},

  // Get comment by comment id
  {method: 'GET',     path: '/comments/{id}', handler: commentHandler.getComment,     config: {auth: 'admin'}},

  // Get comments by blog title
  {method: 'GET',     path: '/blogs/{blog_id}/comments', handler: commentHandler.getCommentsByBlogId},

  // Add new comment, url param: blog_id
  {method: 'POST',    path: '/comments',      handler: commentHandler.addComment},

  // Delete comment
  {method: 'DELETE',  path: '/comments/{id}', handler: commentHandler.deleteComment,  config: {auth: 'admin'}},


  // Tags Router

  // Get tags
  {method: 'GET',     path: '/tags',          handler: tagHandler.getTags},

  // Get tags by id
  {method: 'GET',     path: '/tags/{id}',   handler: tagHandler.getTagById},

  // Add new tag, payload: tag object
  {method: 'POST',    path: '/tags',          handler: tagHandler.addTag,         config: {auth: 'admin'}},

  // Update tag, payload: some parts of tag object
  {method: 'PUT',     path: '/tags/{id}',     handler: tagHandler.updateTag,      config: {auth: 'admin'}},

  // Delete tag
  {method: 'DELETE',  path: '/tags/{id}',     handler: tagHandler.deleteTag,      config: {auth: 'admin'}},

  {method: 'POST',    path: '/test',          handler: defaultHandler.test, config: {auth: false}}

]

