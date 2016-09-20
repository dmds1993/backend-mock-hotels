var express     = require('express');
var router      = express.Router();

router.get('/', function(req, res, next) {
  res.json(salestypes);
});

module.exports = router;

var salestypes = {
   "salesTypes":[
      {
         "id":4009,
         "description":"Zawopo."
      },
      {
         "id":5125,
         "description":"Jutobu."
      },
      {
         "id":5908,
         "description":"Nevmohjob."
      },
      {
         "id":7082,
         "description":"Je."
      },
      {
         "id":1382,
         "description":"Fedrel."
      },
      {
         "id":6668,
         "description":"Pu."
      },
      {
         "id":5364,
         "description":"Hegin."
      },
      {
         "id":2343,
         "description":"Rasboloru."
      },
      {
         "id":6248,
         "description":"Gitano."
      },
      {
         "id":1702,
         "description":"Og."
      }
   ]
};