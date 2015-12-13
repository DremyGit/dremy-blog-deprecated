const mongoose  = require( 'mongoose');
const TagSchema = require( '../schemas/TagSchema');

module.exports = mongoose.model('Tag', TagSchema);