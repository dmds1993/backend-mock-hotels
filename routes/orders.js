var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');

router.get('/', function(req, res, next) {
  res.json(orders);
});

router.post('/', function(req, res, next) {
	console.log(req.body);

  res.json({
  'orderId': (Math.floor(Math.random()*90000) + 10000),
  'status': 'SUCCESS'
	});
});

module.exports = router;

var orders = {
  "orders": [
    {
      "id": 650,
      "reservations": [
        {
          "id": 177668623,
          "departureDate": "2016-06-06T00:00:00.000-03:00",
          "arrivalDate": "2016-06-11T00:00:00.000-03:00",
          "reservationDate": "2016-03-14T14:33:24.000-03:00",
          "expiresDate": "2016-03-19T14:33:24.000-03:00",
          "type": "DYNAMIC",
          "status": "CONFIRMADA",
          "reservationType": "ESPECIAL",
          "packageGroup": "TERRESTRE",
          "productType": "B",
          "itineraryId": 174164973,
          "tourCode": "2.33141.060601",
          "notes": null,
          "updateAvailable": "false",
          "saleInfo": {
            "branchCode": 4720,
            "branchDesc": "MARILIA",
            "saleTypeId": 1,
            "saleTypeDesc": "CVC",
            "sellerId": 3630563,
            "sellerDesc": "VANIA CHINCOA LEMES"
          },
          "contractors": [
            {
              "id": 1,
              "internalId": 4464671,
              "name": "Antonio Sebastiao Verones",
              "documents": [
                {
                  "type": "CPF",
                  "doc": "233818179",
                  "docDigit": null,
                  "docDigit2": "49",
                  "issuingState": "PR",
                  "issuingCountry": "BR",
                  "expirationDate": null
                },
                {
                  "type": "RG",
                  "doc": "1395955",
                  "issuingState": "PR",
                  "issuingCountry": "BR",
                  "expirationDate": null
                }
              ],
              "receipts": [
                {
                  "id": 47200000107534,
                  "originId": 47200000107534,
                  "status": "3 - BAIXADO NO CAIXA",
                  "value": 8144.52,
                  "date": "2016-03-14T00:00:00.000-03:00",
                  "cancelDate": "1900-01-01T00:00:00.000-03:06",
                  "type": "NORMAL",
                  "payments": [
                    {
                      "modality": "FINANCIAMENTO",
                      "operationId": 4803,
                      "operationDesc": "BOLETO SANTANDER",
                      "value": 8144.52
                    }
                  ]
                },
                {
                  "id": 47200000107533,
                  "originId": 47200000107534,
                  "status": "3 - BAIXADO NO CAIXA",
                  "value": 5548,
                  "date": "2016-03-14T00:00:00.000-03:00",
                  "cancelDate": "1900-01-01T00:00:00.000-03:06",
                  "type": "RECIBO PAI",
                  "payments": [
                    {
                      "modality": "FINANCIAMENTO",
                      "operationId": 4803,
                      "operationDesc": "BOLETO SANTANDER",
                      "value": 5548
                    }
                  ]
                },
                {
                  "id": 47200000107532,
                  "originId": 47200000107534,
                  "status": "3 - BAIXADO NO CAIXA",
                  "value": 2596.52,
                  "date": "2016-03-14T00:00:00.000-03:00",
                  "cancelDate": "1900-01-01T00:00:00.000-03:06",
                  "type": "RECIBO PAI",
                  "payments": [
                    {
                      "modality": "FINANCIAMENTO",
                      "operationId": 4803,
                      "operationDesc": "BOLETO SANTANDER",
                      "value": 2596.52
                    }
                  ]
                }
              ],
              "passengers": [
                {
                  "passengerId": 1,
                  "updateAvailable": false
                },
                {
                  "passengerId": 2,
                  "updateAvailable": false
                }
              ]
            }
          ],
          "passengers": [
            {
              "id": 1,
              "firstName": "Antonio",
              "lastName": "Verones",
              "birthDate": "1957-01-21T00:00:00.000-03:00",
              "sex": "M",
              "type": "ADT",
              "notes": null,
              "documents": [
                {
                  "type": "RG",
                  "doc": "1395955",
                  "issuingState": "PR",
                  "issuingCountry": "BR",
                  "expirationDate": null
                }
              ]
            },
            {
              "id": 2,
              "firstName": "Aparecida",
              "lastName": "Verones",
              "birthDate": "1959-07-27T00:00:00.000-03:00",
              "sex": "F",
              "type": "ADT",
              "notes": null,
              "documents": [
                {
                  "type": "RG",
                  "doc": "529967601",
                  "issuingState": "SP",
                  "issuingCountry": "BR",
                  "expirationDate": null
                }
              ]
            }
          ],
          "travelItinerary": {
            "itineraryDesc": "MARAGOGI",
            "itineraryId": 174164973,
            "internalItineraryId": 233141,
            "departure": {
              "locationOrderId": 9306,
              "stateCode": "SP",
              "state": "SÃO PAULO",
              "cityCode": 496,
              "city": "MARÍLIA",
              "countryCode": "BR",
              "country": "BRASIL",
              "arrivalDate": "2016-06-06T00:00:00.000-03:00",
              "departureDate": "2016-06-11T00:00:00.000-03:00"
            },
            "destinations": [
              {
                "locationOrderId": 188,
                "stateCode": "AL",
                "state": "ALAGOAS",
                "cityCode": 88,
                "city": "MARAGOGI",
                "countryCode": "BR",
                "country": "BRASIL",
                "arrivalDate": "2016-06-06T00:00:00.000-03:00",
                "departureDate": "2016-06-11T00:00:00.000-03:00"
              }
            ]
          },
          "products": {
            "hotels": [
              {
                "id": 1497608,
                "name": "SALINAS DO MARAGOGI ALL INCLUSIVE RESORT",
                "hotelInfo": null,
                "category": "RESORT DE PRAIA MUITO CONFORTÁVEL",
                "locationOrderId": 188,
                "imgUrl": null,
                "rooms": [
                  {
                    "id": 1,
                    "type": "APTO VISTA LATERAL MAR",
                    "mealPlan": "DIÁRIA(S) ALL INCLUSIVE",
                    "honeyMoon": null,
                    "checkIn": "2016-06-06T00:00:00.000-03:00",
                    "checkOut": "2016-06-11T00:00:00.000-03:00",
                    "cortesyDesc": "02 (Duas) Criança(s) grátis para CHD (0-12)",
                    "updateAvailable": false,
                    "price": {
                      "code": "1497608-1",
                      "description": "DIÁRIA(S) ALL INCLUSIVE",
                      "channel": null,
                      "channelLoc": null,
                      "provider": null,
                      "providerLoc": null,
                      "nonRefundable": true,
                      "value": 11096,
                      "currency": "BRL",
                      "exchangeValue": 1,
                      "exchangeCurrency": null,
                      "reservationToken": null,
                      "priceDetail": {
                        "saleFactor": null,
                        "costPrice": 7654,
                        "markup": 0.69,
                        "commission": null,
                        "currency": "BRL"
                      }
                    },
                    "passengers": [
                      {
                        "passengerId": 1,
                        "updateAvailable": false
                      },
                      {
                        "passengerId": 2,
                        "updateAvailable": false
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "price": {
            "totalValue": 5548,
            "discountValue": 0,
            "chargesValue": 0,
            "paidValue": 5548,
            "points": 110960,
            "currency": "BRL"
          },
          "history": [
            {
              "modifyDate": "2016-07-22T16:55:53.000-03:00",
              "status": "EM ALTERAÇÃO",
              "itineraryId": 174164973,
              "products": {
                "hotels": [
                  {
                    "id": 1497608,
                    "name": "SALINAS DO MARAGOGI ALL INCLUSIVE RESORT",
                    "hotelInfo": null,
                    "category": "RESORT DE PRAIA MUITO CONFORTÁVEL",
                    "locationOrderId": 188,
                    "imgUrl": null,
                    "rooms": [
                      {
                        "id": 1,
                        "type": "APTO VISTA LATERAL MAR",
                        "mealPlan": "DIÁRIA(S) ALL INCLUSIVE",
                        "honeyMoon": null,
                        "checkIn": "2016-06-06T00:00:00.000-03:00",
                        "checkOut": "2016-06-11T00:00:00.000-03:00",
                        "cortesyDesc": "02 (Duas) Criança(s) grátis para CHD (0-12)",
                        "updateAvailable": false,
                        "price": {
                          "code": "1497608-1",
                          "description": "DIÁRIA(S) ALL INCLUSIVE",
                          "channel": null,
                          "channelLoc": null,
                          "provider": null,
                          "providerLoc": null,
                          "nonRefundable": true,
                          "value": 11096,
                          "currency": "BRL",
                          "exchangeValue": 1,
                          "exchangeCurrency": null,
                          "reservationToken": null,
                          "priceDetail": {
                            "saleFactor": null,
                            "costPrice": 7654,
                            "markup": 0.69,
                            "commission": null,
                            "currency": "BRL"
                          }
                        },
                        "passengers": [
                          {
                            "passengerId": 1,
                            "updateAvailable": false
                          },
                          {
                            "passengerId": 2,
                            "updateAvailable": false
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};