const mongoose      = require( 'mongoose');
const CommentSchema = require( '../schemas/CommentSchema');

module.exports = mongoose.model('Comment', CommentSchema);