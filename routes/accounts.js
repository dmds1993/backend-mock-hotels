var express = require('express');
var router = express.Router();

router.patch('/', function(req, res, next) {
  res.status(204).json({ error: 'message' })
});

router.post('/passwordResetTokens', function(req, res, next) {
  	res.json({message:"Um e-mail foi enviado para email@e-mail.com"});
});

module.exports = router;
