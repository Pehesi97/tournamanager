var mongoose = require('mongoose');

var TournamentSchema = new mongoose.Schema({ 
    name: String,
    type: { type: String, enum: ['Mata mata', 'Chaves'] },
    game: String,
    matches: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    platform: String,
    startDate: Date,
    endDate: Date
}, {
    discriminatorKey: 'kind'
});

var Tournament = mongoose.model('Tournament', TournamentSchema);

var TeamTournament = Tournament.discriminator('TeamTournament', new mongoose.Schema({
    competitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],

}));

var UserTournament = Tournament.discriminator('UserTournament', new mongoose.Schema({
    competitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}));

module.exports = Tournament;
