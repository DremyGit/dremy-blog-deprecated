const mongoose    = require( 'mongoose');
const AdminSchema = require( '../schemas/AdminSchema');

module.exports = mongoose.model('Admin', AdminSchema);