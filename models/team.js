var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({ 
    users: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
    name: String,
    logo: String,
    backgroundImage: String,
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Team', TeamSchema);
