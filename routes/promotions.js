var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	if(req.body.availableItens) {
    setTimeout(function() {
  	 res.json(availableItens);
    }, 2000);
	} else {
  	res.json({ reason: 'Missing body "availableItens" in payload' });
	}
});

module.exports = router;

var availableItens = {
  "availableItens": [
    {
      "rph":"1",
      "rateToken":"PHJhdGVUb2tlbiBwa2c9InVuZGVmaW5lZCIgcGxhPSIzOCIgY21pPSIzOCIgaXpvPSI5NjI2IiBhZ3M9IlciIGJyYz0iMTAwMCIgbGFuPSJwdF9CUiIgZGluPSIyMDE2LTA3LTI4IiBkb3U9IjIwMTYtMDctMjkiIHB4cz0iMzAsMzAiLz4=",
      "percent":0.15,
      "promotion": {
        "priceWithTax": 527.86,
        "priceWithoutTax": 527.86,
        "pricePerDayWithTax": 527.86,
        "pricePerDayWithoutTax": 496.24
      }
    },
    {
      "rph":"2",
      "rateToken":"PHJhdGVUb2tlbiBwa2c9InVuZGVmaW5lZCIgcGxhPSIzOCIgY21pPSIzOCIgaXpvPSI5NjI2IiBhZ3M9IlciIGJyYz0iMTAwMCIgbGFuPSJwdF9CUiIgZGluPSIyMDE2LTA3LTI4IiBkb3U9IjIwMTYtMDctMjkiIHB4cz0iMzAsMzAiLz4=",
      "percent":0.15,
      "promotion": {
        "priceWithTax": 527.86,
        "priceWithoutTax": 527.86,
        "pricePerDayWithTax": 527.86,
        "pricePerDayWithoutTax": 496.24
      }
    }
  ],
  "selectedItens": [
    {
      "rph":"4",
      "rateToken":"PHJhdGVUb2tlbiBwa2c9InVuZGVmaW5lZCIgcGxhPSIzOCIgY21pPSIzOCIgaXpvPSI5NjI2IiBhZ3M9IlciIGJyYz0iMTAwMCIgbGFuPSJwdF9CUiIgZGluPSIyMDE2LTA3LTI4IiBkb3U9IjIwMTYtMDctMjkiIHB4cz0iMzAsMzAiLz4=",
      "percent":0.15,
      "promotion": {
        "priceWithTax": 527.86,
        "priceWithoutTax": 527.86,
        "pricePerDayWithTax": 527.86,
        "pricePerDayWithoutTax": 496.24
      }
    }
  ]
}