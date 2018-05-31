import Mongoose from 'mongoose';

var UserSchema = new Mongoose.Schema({ 
    registered: Boolean,
    email: String,
    phone: String,
    name: String,
    avatar: String,
    nickName: String
});

var User = Mongoose.model('User', UserSchema);