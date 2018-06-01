var mongoose = require('mongoose');

var MatchResultSchema = new mongoose.Schema({
    result: [String]
});

module.exports = mongoose.model('MatchResult', MatchResultSchema);
