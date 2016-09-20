var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Backend Mock CVC is up!' });
});

module.exports = router;