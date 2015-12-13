var  mongoose = require( 'mongoose');
var  BlogSchema = require( '../schemas/BlogSchema');

module.exports = mongoose.model('Blog', BlogSchema);