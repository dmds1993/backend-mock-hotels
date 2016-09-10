var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Mock - Pacotes CVC!' });
});

module.exports = router;