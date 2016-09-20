var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	if(req.body.from && req.body.subject && req.body.text) {
		res.json({
			"status": "SUCCESS" ,
			"message": "Mesage is sent."
		});
	} else {
		res.json({
			"status": "ERROR" ,
			"message": "A time-out occurred while communicating with the server 0x800ccc19."
		});
	}
});

module.exports = router;