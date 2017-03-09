var express = require('express');
var router = express.Router();

router.post('/passwordResetTokens', function(req, res, next) {
  	res.json({message:"Um e-mail foi enviado para email@e-mail.com"});
});

module.exports = router;
