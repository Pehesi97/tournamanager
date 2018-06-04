var mongoose = require('mongoose');

var TournamentSchema = new mongoose.Schema({ 
    name: String,
    type: { type: String, enum: ['Mata mata', 'Chaves'] },
    game: String,
    publishImage: String,
    matches: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    platform: String,
    startDate: Date,
    endDate: Date,
    competitorType: String,
    competitors: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'competitorType' }]
});

var Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = Tournament;
