var mongoose = require('mongoose');
var express = require('express');

var router = express.Router();

var Team = require('../models/Team');

/* READ - All */
router.get('/', function(req, res, next) {
	Team.find({}, function(err, docs) {        
        res.status(200).json(docs);
    });
});

/* READ */
router.get('/:id', function(req, res, next) {
	Team.findById(req.params.id, function(err, doc) {
		if(err)
			return res.status(500).send(err.message);
		
		if(doc)
			res.status(200).json(doc);
		else
			res.status(404).json({});
	});
});

/* UPDATE */
router.put('/:id', function(req, res, next) {

});

/* CREATE */
router.post('/', function(req, res, next) {
	Team.create(req.body, function(err, doc) {
		if(err)
			 return res.status(400).send(err.message);

		res.status(200).json(doc);
	});	
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
	Team.deleteOne({ _id: req.params.id }, function(err) {
		if (err)
			return res.status(404).json({});
		
		res.status(200).json({});
	})
});

module.exports = router;
