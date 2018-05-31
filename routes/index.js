import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
	res.sendFile('index.html' , { root : __dirname + 'public' });
});

export default router;