const mongoose    = require( 'mongoose');
const BlogSchema  = require( '../schemas/BlogSchema');

module.exports = mongoose.model('Blog', BlogSchema);