var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({ 
    users: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
    name: String,
    logo: String,
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var Team = mongoose.model('Team', TeamSchema);