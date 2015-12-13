var  mongoose = require( 'mongoose');
var  AdminSchema = require( '../schemas/AdminSchema');

module.exports = mongoose.model('Admin', AdminSchema);