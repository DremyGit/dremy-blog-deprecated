const authHandler    =  require('./handlers/authorization');
const blogHandler    =  require('./handlers/blogHandler');
const tagHandler     =  require('./handlers/tagHandler');
const defaultHandler =  require('./handlers/defaultHandler');

module.exports = [

  // Default
  {method: 'OPTIONS', path: '/{p*}',          handler: defaultHandler.options},

  {method: 'GET',     path:'/',               handler: defaultHandler.index},


  // Authorization
  {method: 'POST',    path: '/token',         handler: authHandler.getToken,      config: {auth: false}},

  {method: 'GET',     path: '/state',         handler: authHandler.showState},


  // Blogs

  {method: 'GET',     path: '/blogs',         handler: blogHandler.getBlogs},

  {method: 'GET',     path: '/blogs/{title}', handler: blogHandler.getBlogByTitle},
  //
  {method: 'POST',    path: '/blogs',         handler: blogHandler.addBlog,       config: {auth: 'admin'}},
  //
  {method: 'PUT',     path: '/blogs/{id}',    handler: blogHandler.updateBlog,    config: {auth: 'admin'}},
  //
  {method: 'DELETE',  path: '/blogs/{id}',    handler: blogHandler.deleteBlog,    config: {auth: 'admin'}},


  // Tags
  {method: 'GET',     path: '/tags',          handler: tagHandler.getTags},

  {method: 'GET',     path: '/tags/{name}',   handler: tagHandler.getTagById},

  {method: 'POST',    path: '/tags',          handler: tagHandler.addTag},

  {method: 'PUT',     path: '/tags/{id}',     handler: tagHandler.updateTag},

  {method: 'DELETE',  path: '/tags/{id}',     handler: tagHandler.deleteTag}


]

