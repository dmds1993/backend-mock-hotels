var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');

router.get('/', function(req, res, next) {
  res.json({
    'status': 'VALID'
  });
});

module.exports = router;
