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
      if(req.body.orderItems.value){
        calculate.finans.forEach(function(finan) {
            finan.totalValue = req.body.orderItems.value;

        finan.modalities.forEach(function(modality) {
          modality.operations.forEach(function(operation) {
            operation.plans.forEach(function(plan){
              plan.value = req.body.orderItems.value;
            });
          });
        });

    });
    }
      res.json(calculate);


  } else {
    res.json({
      "status": "ERROR" ,
      "message": "Expected the orderItems or orderId."
    });
  }
});

router.get('/finans/plans/:plan_token/validate', function(req, res, next) {
  if (req.query.value != 666) {
    res.json(validate);
  } else {
    res.json({
  "code": "500",
  "message": "Unexpected error",
  "errors": [
    {
      "code": "OSB-380001",
      "message": "Internal Server Error",
      "route": "route to destination"
    }
  ]
})
  }
});

router.post('/finans/orders/:orderId', function(req, res, next) {
  res.json(postOrderResponse);
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

var validate = {
  "downPayment": {
    "value": 250.01,
    "dueDate": "2017-02-04T00:00:00.000Z",
    "minValue": 12,
    "maxValue": 200,
    "types": [
      {
        "description": "ARREDONDAMENTO",
        "token": "955a7f41-55fb-4880-94f9-737ba4b4106c"
      },
      {
        "description": "DEPÓSITO BRADESCO SND",
        "token": "955a7f41-55fb-4880-94f9-737ba4b4106c"
      },
      {
        "description": "CHEQUE PRÉ - CURTO PRAZO",
        "token": "955a7f41-55fb-4880-94f9-737ba4b4106c"
      },
      {
        "description": "DEPÓSITO DIA SEGUINTE",
        "token": "955a7f41-55fb-4880-94f9-737ba4b4106c"
      },
      {
        "description": "VISA ELECTRON",
        "token": "955a7f41-55fb-4880-94f9-737ba4b4106c"
      }
    ]
  },
  "installments": {
    "minDueDate": "2017-02-01T00:00:00.000Z",
    "maxDueDate": "2017-02-30T00:00:00.000Z",
    "values": [
      {
        "value": 125.01,
        "interestFreeValue": 120.01,
        "dueDate": "2017-03-04T00:00:00.000Z"
      }
    ]
  }
}

var calculate = {
   "finans":[
      {
         "finanKeys":[
            {
               "productType":"ALL",
               "packageGroup":"ALL"
            }
         ],
         "maxInstallments":10,
         "totalValue":3706.41,
         "modalities":[
            {
               "description":"Depósito",
               "type":"PAYMENT_MODALITY_BANK_TRANSFER",
               "operations":[
                  {
                     "description":"DEPÓSITO BRADESCO SND",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjM3MDYuNDEiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":3706.41,
                           "countInstallments":0,
                           "description":null
                        }
                     ]
                  }
               ]
            },
            {
               "description": "Boleto",
               "type": "PAYMENT_MODALITY_BANK_BILLET",
               "operations": [
                  {
                       "description": "BOLETO A VISTA / ENTRADA",
                       "plans": [
                          {
                              "planToken": "PGZpbmFucyBwbG49IjIyMjEyIiBvcGU9IjU3MDQiIG1vZD0iOCIgbWlzPSIwIiB2YWw9IjY1Mi4wNiI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSI2NTIuMDYiLz48L2ZpbmFucz4=",
                              "value": 3706.41,
                              "countInstallments": 0,
                              "description": "A Vista"
                          }
                      ]
                  }
               ]
            },
            {
               "description":"Cartão de Crédito",
               "type":"PAYMENT_MODALITY_CREDIT_CARD",
               "operations":[
                  {
                     "description":"AMEX",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"MASTERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"VISA",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"HIPERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"DINERS",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"ELO CRÉDITO",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
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
               "productType":"AIR",
               "packageGroup":"PACKAGE"
            }
         ],
         "maxInstallments":8,
         "totalValue":3380.38,
         "modalities":[
            {
               "description":"Depósito",
               "type":"PAYMENT_MODALITY_BANK_TRANSFER",
               "operations":[
                  {
                     "description":"DEPÓSITO BRADESCO SND",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjMzODAuMzgiPjxmaW5hbiBwcmQ9IkFJUiIgcGtnPSJQQUNLQUdFIiB2YWw9IjMzODAuMzgiLz48L2ZpbmFucz4=",
                           "value":3380.38,
                           "countInstallments":0,
                           "description": "A Vista"
                        }
                     ]
                  }
               ]
            },
            {
               "description":"Cartão de Crédito",
               "type":"PAYMENT_MODALITY_CREDIT_CARD",
               "operations":[
                  {
                     "description":"AMEX",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"MASTERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"VISA",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"HIPERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"DINERS",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"ELO CRÉDITO",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
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
               "packageGroup":"PACKAGE"
            }
         ],
         "maxInstallments":10,
         "totalValue":326.03,
         "modalities":[
            {
               "description":"Depósito",
               "type":"PAYMENT_MODALITY_BANK_TRANSFER",
               "operations":[
                  {
                     "description":"DEPÓSITO BRADESCO SND",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjIyNzk3IiBvcGU9IjUxMDEiIG1vZD0iMiIgbWlzPSIwIiB2YWw9IjMyNi4wMyI+PGZpbmFuIHByZD0iSE9UIiBwa2c9IlBBQ0tBR0UiIHZhbD0iMzI2LjAzIi8+PC9maW5hbnM+",
                           "value":326.03,
                           "countInstallments":0,
                           "description":"A Vista"
                        }
                     ]
                  }
               ]
            },
            {
               "description":"Cartão de Crédito",
               "type":"PAYMENT_MODALITY_CREDIT_CARD",
               "operations":[
                  {
                     "description":"AMEX",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"MASTERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwMiIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"VISA",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNCIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"HIPERCARD",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"DINERS",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwNyIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  },
                  {
                     "description":"ELO CRÉDITO",
                     "plans":[
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEiIHZhbD0iMzcwNi40MSI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":3706.41,
                           "countInstallments":1,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjIiIHZhbD0iMTg1My4yIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":1853.2,
                           "countInstallments":2,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjMiIHZhbD0iMTIzNS40NyI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":1235.47,
                           "countInstallments":3,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjQiIHZhbD0iOTI2LjYiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":926.6,
                           "countInstallments":4,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjUiIHZhbD0iNzQxLjI4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":741.28,
                           "countInstallments":5,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjYiIHZhbD0iNjE3LjczIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":617.73,
                           "countInstallments":6,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjciIHZhbD0iNTI5LjQ4Ij48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":529.48,
                           "countInstallments":7,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjgiIHZhbD0iNDYzLjMiPjxmaW5hbiBwcmQ9IkFMTCIgcGtnPSJBTEwiIHZhbD0iMzcwNi40MSIvPjwvZmluYW5zPg==",
                           "value":463.3,
                           "countInstallments":8,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjkiIHZhbD0iNDExLjgyIj48ZmluYW4gcHJkPSJBTEwiIHBrZz0iQUxMIiB2YWw9IjM3MDYuNDEiLz48L2ZpbmFucz4=",
                           "value":411.82,
                           "countInstallments":9,
                           "description":"Site CVC Demais Cartoes"
                        },
                        {
                           "planToken":"PGZpbmFucyBwbG49IjU2NTMiIG9wZT0iNTQwOSIgbW9kPSI1IiBtaXM9IjEwIiB2YWw9IjM3MC42NCI+PGZpbmFuIHByZD0iQUxMIiBwa2c9IkFMTCIgdmFsPSIzNzA2LjQxIi8+PC9maW5hbnM+",
                           "value":370.64,
                           "countInstallments":10,
                           "description":"Site CVC Demais Cartoes"
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}

var postOrderResponse = {
  "status": "SUCCESS",
  "contractors":[
     {
        "id":53569,
        "payments":[
           {
              "plan":{
                 "token":"1204-asaqswqw-q20205-qqqqq",
                 "value":3123.87,
                 "dueDate":"2017-06-19T00:00:00",
                 "paxs":[
                    {

                    },
                 ]
              }
           }
        ]
     }
  ]
};
