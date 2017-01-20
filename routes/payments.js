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
  "finans":[
    {
      "finanKeys":[
        {
          "productType":"ALL",
          "packageGroup":"ALL"
        }
      ],
      "maxInstallments":1
    },
    {
      "finanKeys":[
        {
          "productType":"HOT",
          "packageGroup":"STANDALONE"
        }
      ],
      "maxInstallments":1,
      "totalValue":471.35,
      "modalities":[
        {
          "description":"Cartão de Crédito",
          "type":"PAYMENT_MODALITY_CREDIT_CARD",
          "operations":[
            {
              "description":"AMEX",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"MASTERCARD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                },
                {
                  "planToken":"PGZpbmFucyBwbG49IjEwMDIxIiBvcGU9IjU0MDIiIG1vZD0iNSIgbWlzPSIxIiB2YWw9IjQ3MS4zNSI+PGZpbmFuIHByZD0iSE9UIiBwa2c9IlNUQU5EQUxPTkUiIHZhbD0iNDcxLjM1Ii8+PC9maW5hbnM+",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC CartÃÂÃÂ£o com entrada"
                }
              ]
            },
            {
              "description":"VISA ",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                },
                {
                  "planToken":"PGZpbmFucyBwbG49IjEwMDIxIiBvcGU9IjU0MDQiIG1vZD0iNSIgbWlzPSIxIiB2YWw9IjQ3MS4zNSI+PGZpbmFuIHByZD0iSE9UIiBwa2c9IlNUQU5EQUxPTkUiIHZhbD0iNDcxLjM1Ii8+PC9maW5hbnM+",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC CartÃÂÃÂ£o com entrada"
                }
              ]
            },
            {
              "description":"HIPERCARD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"CABAL CRÉDITO",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQxOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"DINERS",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"CVC VISA GOLD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC VISA INTER",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC MASTER GOLD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC MASTER INTER",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxMyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"ELO CRÉDITO",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iU1RBTkRBTE9ORSIgdmFsPSI0NzEuMzUiLz48L2ZpbmFucz4=",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "finanKeys":[
        {
          "productType":"HOT",
          "packageGroup":"VHI"
        }
      ],
      "maxInstallments":1,
      "totalValue":471.35,
      "modalities":[
        {
          "description":"Cartão de Crédito",
          "type":"PAYMENT_MODALITY_CREDIT_CARD",
          "operations":[
            {
              "description":"AMEX",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"MASTERCARD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"VISA ",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"HIPERCARD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"CABAL CRÉDITO",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQxOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"DINERS",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIwODgiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Demais Cartoes"
                }
              ]
            },
            {
              "description":"CVC VISA GOLD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC VISA INTER",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC MASTER GOLD",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"CVC MASTER INTER",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQxMyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            },
            {
              "description":"ELO CRÉDITO",
              "plans":[
                {
                  "planToken":"PGZpbmFucyBwbG49IjIxMDAiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iNDcxLjM1Ij48ZmluYW4gcHJkPSJIT1QiIHBrZz0iVkhJIiB2YWw9IjQ3MS4zNSIvPjwvZmluYW5zPg==",
                  "value":"471.35",
                  "countInstallments":1,
                  "description":"Site CVC Cartao CVC e Elo"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}