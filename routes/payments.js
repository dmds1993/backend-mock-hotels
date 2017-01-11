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
      "maxInstallments": 6,
      "totalValue": 367.84,
      "bonusPoints": 8,
      "settingsBonusPoints": {
        "min": 123,
        "max": 789,
        "granularity": 12
      },
      "modalities": [
        {
          "description": "Cartão de Crédito",
          "operations": [
            {
              "description": "AMEX",
              "plans": {
                "planToken": "PGZpbmFucyBwbGFuSWQ9IjIiIG9wZXJhdGlvbklEPSIxMiIgbW9kYWxpdHlJRD0iMzIiIGNvdW50SW5zdGFsbG1lbnRzPSIyIiB2YWx1ZT0iMjAwMCIgb3JkZXJJZD0iMTQzMiIgYW1vdW50Qm9udXNQb2ludHM9IjUwMCI+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlZISSIgdmFsdWU9IjE0MDAiIC8+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlNUQU5EQUxPTkUiIHZhbHVlPSIxMDAwIiAvPg0KICAgICAgICA8ZmluYW4gcHJvZHVjdFR5cGU9IkFJUiIgcGFja2FnZUdyb3VwPSJWSEkiIHZhbHVlPSI3MDAiIC8+DQogICAgICA8L2ZpbmFucz4=",
                "value": 1234,
                "bonusPoints": 321,
                "countInstallments": 12,
                "description": "Site CVC Demais Cartoes"
              }
            },
            {
              "description": "AMEX",
              "plans": {
                "planToken": "PGZpbmFucyBwbGFuSWQ9IjIiIG9wZXJhdGlvbklEPSIxMiIgbW9kYWxpdHlJRD0iMzIiIGNvdW50SW5zdGFsbG1lbnRzPSIyIiB2YWx1ZT0iMjAwMCIgb3JkZXJJZD0iMTQzMiIgYW1vdW50Qm9udXNQb2ludHM9IjUwMCI+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlZISSIgdmFsdWU9IjE0MDAiIC8+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlNUQU5EQUxPTkUiIHZhbHVlPSIxMDAwIiAvPg0KICAgICAgICA8ZmluYW4gcHJvZHVjdFR5cGU9IkFJUiIgcGFja2FnZUdyb3VwPSJWSEkiIHZhbHVlPSI3MDAiIC8+DQogICAgICA8L2ZpbmFucz4=",
                "value": 1234,
                "bonusPoints": 321,
                "countInstallments": 12,
                "description": "Site CVC Demais Cartoes"
              }
            },
            {
              "description": "AMEX",
              "plans": {
                "planToken": "PGZpbmFucyBwbGFuSWQ9IjIiIG9wZXJhdGlvbklEPSIxMiIgbW9kYWxpdHlJRD0iMzIiIGNvdW50SW5zdGFsbG1lbnRzPSIyIiB2YWx1ZT0iMjAwMCIgb3JkZXJJZD0iMTQzMiIgYW1vdW50Qm9udXNQb2ludHM9IjUwMCI+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlZISSIgdmFsdWU9IjE0MDAiIC8+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlNUQU5EQUxPTkUiIHZhbHVlPSIxMDAwIiAvPg0KICAgICAgICA8ZmluYW4gcHJvZHVjdFR5cGU9IkFJUiIgcGFja2FnZUdyb3VwPSJWSEkiIHZhbHVlPSI3MDAiIC8+DQogICAgICA8L2ZpbmFucz4=",
                "value": 1234,
                "bonusPoints": 321,
                "countInstallments": 12,
                "description": "Site CVC Demais Cartoes"
              }
            },
            {
              "description": "AMEX",
              "plans": {
                "planToken": "PGZpbmFucyBwbGFuSWQ9IjIiIG9wZXJhdGlvbklEPSIxMiIgbW9kYWxpdHlJRD0iMzIiIGNvdW50SW5zdGFsbG1lbnRzPSIyIiB2YWx1ZT0iMjAwMCIgb3JkZXJJZD0iMTQzMiIgYW1vdW50Qm9udXNQb2ludHM9IjUwMCI+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlZISSIgdmFsdWU9IjE0MDAiIC8+DQogICAgICAgIDxmaW5hbiBwcm9kdWN0VHlwZT0iSE9UIiBwYWNrYWdlR3JvdXA9IlNUQU5EQUxPTkUiIHZhbHVlPSIxMDAwIiAvPg0KICAgICAgICA8ZmluYW4gcHJvZHVjdFR5cGU9IkFJUiIgcGFja2FnZUdyb3VwPSJWSEkiIHZhbHVlPSI3MDAiIC8+DQogICAgICA8L2ZpbmFucz4=",
                "value": 1234,
                "bonusPoints": 321,
                "countInstallments": 12,
                "description": "Site CVC Demais Cartoes"
              }
            }
          ]
        }
      ]
    },
    
  ]
}