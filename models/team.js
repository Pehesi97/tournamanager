import Mongoose from 'mongoose';

var TeamSchema = new Mongoose.Schema({ 
    users: [{ type : Mongoose.Schema.Types.ObjectId, ref: 'User' }],
    name: String,
    logo: String,
    admins: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Team', TeamSchema);
