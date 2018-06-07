var mongoose = require('mongoose');
var express = require('express');

var router = express.Router();

var Tournament = require('../models/tournament');
var MatchResult = require('../models/matchResult');
var Match = require('../models/match');

router.get('/', function(req, res, next) {
	res.status(200).json({});
});

router.get('/totalMatches', function(req, res, next) {
    Match.count({}, function(err, count) {
        res.status(200).json({
            count: count
        });
    });
});

router.get('/:id', function(req, res, next) {
	Match.findById(req.params.id, function(err, doc) {
		if(err)
			return res.status(500).send(err.message);
		
		if(doc)
			res.status(200).json(doc);
		else
			res.status(404).json({});
	});
});

router.put('/:id', function(req, res, next) {

});

router.post('/', function(req, res, next) {
	Match.create(req.body, function(err, doc) {
		if(err)
			 return res.status(400).send(err.message);

		res.status(200).json(doc);
	});	
});

router.delete('/:id', function(req, res, next) {
	Match.deleteOne({ _id: req.params.id }, function(err) {
		if (err)
			return res.status(404).json({});
		
		res.status(200).json({});
	})
});

module.exports = router;
