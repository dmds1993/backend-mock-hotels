var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');

router.get('/', function(req, res, next) {
  res.json(orders);
});

router.post('/', function(req, res, next) {
  res.json({
  'orderId': (Math.floor(Math.random()*90000) + 10000),
  'status': 'SUCCESS'
	});
});

router.get('/estimates', function(req, res, next) {
  if(req.query.orderId) {
    res.json(
    {
      "orderId": req.query.orderId,
      "opportunityId": 123432,
      "hotels": [{
        "meta": {
          "checkIn": "2016-11-03",
          "checkOut": "2016-11-04",
          "rooms": [
            [
              30,
              30,
              7
            ],
            [
              30,
              30
            ]
          ]
        },
        "item": {
          "id": "34121985",
          "name": "River Park Hotel & Suites",
          "description": "O hotel, renovado em 2005, compreende 10 andares com um total de 284 quartos. À sua espera, um hall de entrada climatizado com recepção (disponível 24 h por dia), cofre, guichet para câmbio monetário e elevadores. As instalações gastronómicas do hotel contam com um bar e um restaurante com cadeiras para crianças e área exterior. Terá também um quiosque e acesso à Internet à disposição. Os serviços de quartos e de lavandaria completam as ofertas do hotel. Poderá estacionar o seu automóvel no parque de estacionamento do hotel.",
          "award": 3,
          "isPreferential": false,
          "location": {
            "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA",
            "coordinates": {
              "latitude": -30.055,
              "longitude": -51.22972
            }
          },
          "rooms": [{
            "description": "Este quarto possui ampla sacada",
            "mealPlan": "Café da Manhã",
            "minPax": 0,
            "maxPax": 4,
            "quantityAvailable": 1,
            "isAvailable": true,
            "rates": [{
              "packageGroup": "STANDALONE",
              "currency": "BRL",
              "priceWithTax": 527.86,
              "priceWithoutTax": 527.86,
              "pricePerDayWithTax": 527.86,
              "pricePerDayWithoutTax": 496.24,
              "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
              "taxes": [{
                "code": "TX_REM",
                "description": "Taxa de Remessa",
                "percent": 0.06,
                "amount": 31.62,
                "inTotal": true
              }],
              "loyalty": {
                "parity": 0.025,
                "min": {
                  "points": 2000,
                  "discount": 0.05
                },
                "max": {
                  "points": 30021,
                  "discount": 0.5
                }
              }
            }],
            "cancellationPolicies": [{
              "nonRefundable": false
            }],
            "contents": [{
              "code": "extras",
              "name": "Extras",
              "items": [{
                "code": "MT",
                "name": "Mesa de Trabalho"
              }, {
                "code": "WG",
                "name": "Wifi Grátis"
              }]
            }, {
              "code": "amenities",
              "name": "Amenities",
              "items": [{
                "code": "MT",
                "name": "Mesa de Trabalho"
              }, {
                "code": "WG",
                "name": "Wifi Grátis"
              }]
            }]
          }],
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            },
            "images": [{
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }, {
              "href": "http://www.cvc.com.br/static/img02.jpg"
            }, {
              "href": "http://www.cvc.com.br/static/img03.jpg"
            }, {
              "href": "http://www.cvc.com.br/static/img04.jpg"
            }]
          },
          "contents": [{
            "code": "optional-items",
            "items": [{
              "code": "MT",
              "name": "Mesa de Trabalho"
            }, {
              "code": "WG",
              "name": "Wifi Grátis"
            }]
          }, {
            "code": "resort-fee",
            "description": "A prática cotidiana prova que a expansão dos mercados mundiais maximiza as possibilidades por conta do fluxo de informações."
          }, {
            "code": "setting-cancellation-policies",
            "name": "Politicas de Cancelamento",
            "description": "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o fenômeno da Internet possibilita uma melhor visão global da gestão inovadora da qual fazemos parte"
          }, {
            "code": "Descrição Completa",
            "name": "full-description",
            "description": "Caros amigos, a estrutura atual da organização causa impacto indireto na reavaliação do processo de comunicação como um todo."
          }]
        }
      }],
      "packages": [{
        "meta": {
          "rooms": [
            [
              30,
              30,
              7
            ],
            [
              30,
              30
            ]
          ]
        },
        "item": {
          "id": 173171109,
          "type": "AIR",
          "isAvailable": true,
          "startDate": "2016-07-25",
          "endDate": "2016-07-30",
          "days": 5,
          "baseDestination": 363,
          "hotels": [{
            "id": 3713945,
            "name": "HOTEL PORTAL DO MUNDAÍ _ REDE SOBERANO",
            "description": "Localizado a apenas 300 metros do Complexo de Lazer Tôa Tôa, o hotel fica a 5 quilômetros do centro da cidade e a 5,7 quilômetros do aeroporto de Porto Seguro. Oferece restaurante, bar, café da manhã, internet wi-fi, 2 piscinas para adultos e uma para crianças, sauna, playground, salão de jogos e quadra de vôlei. Os quartos são equipados com TV a cabo, ar-condicionado, varanda, frigobar, cofre e telefone.",
            "award": 3,
            "isPreferential": "false",
            "location": {
              "address": "PORTO SEGURO",
              "coordinates": {
                "latitude": -16.469255,
                "longitude": -39.156742
              }
            },
            "category": "HOTEL DE PRAIA CONFORTAVEL",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/static/img01.jpg"
              }
            }
          }, {
            "award": 2,
            "location": {
              "address": "PORTO SEGURO",
              "coordinates": {
                "latitude": -16.469255,
                "longitude": -39.156742
              }
            },
            "id": 4947747,
            "name": "HOTEL PRAIA MAR _ REDE SOBERANO",
            "category": "HOTEL URBANO SIMPLES",
            "room": {
              "mealPlan": "Diária com café da manhã",
              "category": "Apartamento Standard"
            },
            "description": "Localizado no centro de Porto Seguro, o hotel fica próximo a famosa Passarela do Álcool, shoppings, restaurantes e com fácil acesso as principais praias. Oferece piscinas adulto e infantil, estacionamento, internet wi-fi, café da manhã, room service, churrasqueira, lan house e baby copa. Os quartos são equipados com TV, ar-condicionado, telefone e frigobar.",
            "isPreferential": "false",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/static/img01.jpg"
              }
            }
          }],
          "alternativeRooms": [{
            "mealPlan": "Diária com café da manhã",
            "category": "Apartamento Standard",
            "packageId": 124356
          }],
          "flights": [{
            "id": "167427368",
            "number": "91559",
            "period": "Nightly",
            "departure": {
              "date": "2016-08-29T15:50:00-03:00",
              "code": "GRU",
              "description": "SÃO PAULO- GUARULHOS"
            },
            "arrival": {
              "date": "2016-08-29T17:40:00-03:00",
              "code": "BPS",
              "description": "PORTO SEGURO"
            },
            "operatingAirline": {
              "code": "G3",
              "name": "GOL"
            }
          }, {
            "id": "167427369",
            "number": "17732",
            "period": "Nightly",
            "departure": {
              "date": "2016-09-05T18:20:00-03:00",
              "code": "BPS",
              "description": "PORTO SEGURO"
            },
            "arrival": {
              "date": "2016-09-05T20:30:00-03:00",
              "code": "GRU",
              "description": "SÃO PAULO- GUARULHOS"
            },
            "operatingAirline": {
              "code": "G3",
              "name": "GOL"
            }
          }]
        }
      }],
      "contents": [{
        "code": "alerts",
        "items": [{
          "description": "Os serviços prestados nos hotéis são de inteira responsabilidade do estabelecimento e podem ou não estar incluídos no valor da compra."
        }, {
          "description": "Não inclui taxas."
        }, {
          "description": "Para voos dentro do Brasil, é preciso apresentar-se com pelo menos 1 hora de antecedência ao voo. Para voos internacionais, procure chegar com 2 horas de antecedência."
        }]
      }]
    });
  } else {
    return res.status(400).send({ 
      code: 400, 
      message: 'Missing orderId parameter' 
    });
  }
});

router.post('/estimates', function(req, res, next) {
  res.json(orderEstimates);
});

module.exports = router;

var orders = {
  "orders": [
    {
      "id": 650,
      "reservations": [
        {
          "id": 177668623,
          "departureDate": "2016-11-06T00:00:00.000-03:00",
          "arrivalDate": "2016-11-11T00:00:00.000-03:00",
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