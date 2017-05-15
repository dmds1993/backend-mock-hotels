var express = require('express');
var router = express.Router();

router.get('/finans', function(req, res, next) {
  res.json({name: 'payments/finans API'});
});

router.get('/finans/plans', function(req, res, next) {
  res.json(plans);
});

router.post('/finans/calculate', function(req, res, next) {
  if (req.body.orderItems || req.body.orderId) {
    res.json(calculate);
  } else {
    res.json({
      "status": "ERROR" ,
      "message": "Expected the orderItems or orderId."
    });
  }
});

module.exports = router;

var finans = {};
var plans = {
 "plans": [
   {
     "installments": 4,
     "packageGroup": "VHI",
     "description": "0 + 4x c/ juros"
   },
   {
     "installments": 10,
     "packageGroup": "STANDALONE",
     "description": "0 + 10x c/ juros"
   }
 ],
 "meta": {
   "productType": "HOT"
 }
};

var calculate = {
  "finans": [
    {
      "finanKeys": [
        {
          "productType": "ALL",
          "packageGroup": "ALL"
        }
      ],
      "maxInstallments": null,
      "totalValue": 3706.41,
      "modalities": [
        {
          "description": "Depósito",
          "type": "PAYMENT_MODALITY_BANK_TRANSFER",
          "operations": [
            {
              "description": "DEPÓSITO BRADESCO SND",
              "plans": [
                {
                  "planToken": "PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjM3MDYuNDEiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                  "value": 3706.41,
                  "countInstallments": 0,
                  "description": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "finanKeys": [
        {
          "productType": "AIR",
          "packageGroup": "PACKAGE"
        }
      ],
      "maxInstallments": null,
      "totalValue": 3380.38,
      "modalities": [
        {
          "description": "Depósito",
          "type": "PAYMENT_MODALITY_BANK_TRANSFER",
          "operations": [
            {
              "description": "DEPÓSITO BRADESCO SND",
              "plans": [
                {
                  "planToken": "PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjMzODAuMzgiPjxmaW5hbiBwcmQ9IkFJUiIgcGtnPSJQQUNLQUdFIiB2YWw9IjMzODAuMzgiLz48L2ZpbmFucz4=",
                  "value": 3380.38,
                  "countInstallments": 0,
                  "description": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "finanKeys": [
        {
          "productType": "HOT",
          "packageGroup": "PACKAGE"
        }
      ],
      "maxInstallments": null,
      "totalValue": 326.03,
      "modalities": [
        {
          "description": "Depósito",
          "type": "PAYMENT_MODALITY_BANK_TRANSFER",
          "operations": [
            {
              "description": "DEPÓSITO BRADESCO SND",
              "plans": [
                {
                  "planToken": "PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjMyNi4wMyI+PGZpbmFuIHByZD0iSE9UIiBwa2c9IlBBQ0tBR0UiIHZhbD0iMzI2LjAzIi8+PC9maW5hbnM+",
                  "value": 326.03,
                  "countInstallments": 0,
                  "description": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
