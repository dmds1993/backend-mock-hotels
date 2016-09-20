var express     = require('express');
var router      = express.Router();

router.get('/', function(req, res, next) {
  res.json(vendors);
});

module.exports = router;

var vendors = {
   "vendors":[
      {
         "id":5398,
         "name":"Henrietta Nash"
      },
      {
         "id":3486,
         "name":"Laura Simon"
      },
      {
         "id":9047,
         "name":"Eugenia Cortez"
      },
      {
         "id":6130,
         "name":"Curtis Paul"
      },
      {
         "id":5532,
         "name":"Sophia Summers"
      },
      {
         "id":4057,
         "name":"Chad Bell"
      },
      {
         "id":9312,
         "name":"Josie Obrien"
      },
      {
         "id":5197,
         "name":"Celia Marshall"
      },
      {
         "id":4368,
         "name":"Adelaide Flowers"
      }
   ]
};
