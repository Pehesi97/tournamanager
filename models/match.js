var mongoose = require('mongoose');

var MatchResult = mongoose.model('MatchResult').schema;

var MatchSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        validate: {
            validator: function(v) {
                return this.endDate >= this.startDate;
            },
            message: 'A data de término do campeonato não pode ser antes do início.'
        }
    },
    results: [MatchResult],
    competitorType: String,
    competitors: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'competitorType'}]
});

var Match = mongoose.model('Match', MatchSchema);

module.exports = Match;