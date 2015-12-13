var  mongoose = require( 'mongoose');
var  CommentSchema = require( '../schemas/CommentSchema');

module.exports = mongoose.model('Comment', CommentSchema);