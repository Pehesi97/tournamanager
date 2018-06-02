var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({ 
    registered: Boolean,
    email: String,
    phone: String,
    name: String,
    avatar: String,
    nickName: String
});

module.exports = mongoose.model('User', UserSchema);
