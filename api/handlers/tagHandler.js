const marked  = require('marked');
const Tag     = require('../models/Tag');

let tagHandler = {};




tagHandler.getTags = (request, reply) => {
  Tag.getAllTag( (err, tags) => {
    reply(tags);
  })
}



tagHandler.getTagById = (request, reply) => {
  reply("OK");
}



tagHandler.addTag = (request, reply) => {

  let form = request.payload;

  let _tag = new Tag({
    name:       form.name,
    name_short: form.name_short
  });

  _tag.save((err, project) => {
    if (err) { throw err};
    reply(project);
  });

}



tagHandler.updateTag = (request, reply) => {
  reply("OK");
}



tagHandler.deleteTag = (request, reply) => {
  reply("OK");
}



module.exports = tagHandler;