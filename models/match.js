var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    results: [[String]],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {
    discriminatorKey: 'kind'
});

var Match = mongoose.model('Match', MatchSchema);

var TeamMatch = Match.discriminator('TeamMatch', new mongoose.Schema({
    competitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],

}));

var UserMatch = Match.discriminator('UserMatch', new mongoose.Schema({
    competitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}));

module.exports = Match;