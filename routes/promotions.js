var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

router.post('/', function(req, res, next) {
  let response = buildResponse(req.body.availableItems);
  res.json(response);
});

module.exports = router;

function buildResponse(items) {
  items.forEach(function(item) {
    var rateToken = undefined;

    parser.parseString(new Buffer(item.rateToken, 'base64').toString('ascii'), function(err, result) {
      rateToken = result.rateToken.$;
    });

    let daysDiff = daysDifference(new Date(rateToken.dti), new Date(rateToken.dtf));

    item.promotion = {
      priceWithTax: rateToken.pwt * 0.8,
      priceWithoutTax: rateToken.pot * 0.8,
      pricePerDayWithTax: (rateToken.pwt * 0.8) / daysDiff,
      pricePerDayWithoutTax: (rateToken.pot * 0.8) / daysDiff,
      percentage: 0.2
    }
  });
  return {
    availableItems: items
  };
};

function daysDifference(startDate, endDate) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));
}
