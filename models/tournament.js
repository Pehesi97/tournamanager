import Mongoose from 'mongoose';

var TournamentSchema = new Mongoose.Schema({ 
    name: String,
    type: Number,
    game: String,
    startDate: Date,
    endDate: Date
}, {
    discriminatorKey: 'kind'
});

var Tournament = Mongoose.model('Tournament', TournamentSchema);

var TeamTournament = Tournament.discriminator('TeamTournament', new Mongoose.Schema({
    competitors: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'Team' }],

}));

var UserTournament = Tournament.discriminator('UserTournament', new Mongoose.Schema({
    competitors: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'User' }],
}));