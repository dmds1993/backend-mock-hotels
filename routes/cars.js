var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(cars);
});

router.get('/locations', function(req, res, next) {
  res.json(cars);
});

router.get('/:rate_token', function(req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
	
	if (rateToken.includes('rateToken')) {
		res.json(cars);
	} else {
		return res.status(500).send({ 
		  code: 500, 
		  message: 'Invalid Rate Token' 
		});
	}
});


router.get('/locations/:location_id', function(req, res, next) {
  res.json(cars);
});


module.exports = router;

var cars = {};