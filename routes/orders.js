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
      "id": 5846,
      "reservations": [{
        "id": 91921042,
        "reservationDate": "2011-12-06T13:56:11.000-02:00",
        "expiresDate": "2011-12-07T13:57:24.000-02:00",
        "isProductTypePackage": false,
        "status": "CONFIRMED",
        "reservationType": "NORMAL",
        "packageGroup": "STANDALONE",
        "excursion": {
          "code": "2.53539.121801",
          "description": null
        },
        "notes": null,
        "updateAvailable": true,
        "vendorId": 11321132,
        "branchId": 1000,
        "agencyId": 0,
        "emitterId": 145346,
        "salesType": "CVC",
        "currency": "BRL",
        "tour": {
          "id": 66763429,
          "description": "CALDAS NOVAS",
          "origin": {
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          },
          "destinations": [{
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          }]
        },
        "contractors": [{
          "id": 1,
          "paxsId": [
            1,
            2
          ],
          "person": {
            "name": "Marcus Vinicius Costa e Paula",
            "birthday": "1991-11-01",
            "email": "m.costa91@hotmail.com",
            "gender": "M",
            "phones": [{
              "internationalCode": 55,
              "localCode": 11,
              "number": "984949658"
            }],
            "documents": [{
              "code": "41052964850",
              "type": "CPF"
            }],
            "addresses": [{
              "cityName": "Guarulhos",
              "number": "820",
              "complement": "Casa",
              "zipCode": "09220000",
              "street": "Av. Varsóvia",
              "countryCode": "BR",
              "stateCode": "SP",
              "district": "Vila Metalurgica"
            }]
          },
          "receipts": [{
            "id": 1000244945,
            "value": 1024.12,
            "type": "NORMAL",
            "status": "ACTIVE",
            "created": {
              "date": "2011-12-06T00:00:00.000-02:00"
            },
            "cancelled": {
              "date": "1900-01-01T00:00:00.000-03:06"
            },
            "discounts": [{
              "modality": "ABATIMENTOS",
              "description": "DESC. CONCEDIDOS",
              "value": 1234.11,
              "discountToken": "234ERFFRW=="
            }],
            "payments": [{
              "plan": {
                "token": "1204-asaqswqw-q20205-qqqqq",
                "value": 3123.87
              },
              "downPayment": {
                "token": "1204-asaqswqw-q20205-qqqaq",
                "value": 5000.87
              },
              "creditCard": {
                "number": "4978523953242222",
                "name": "Marcus Vinicius Costa e Paula",
                "expirationYear": 19,
                "securityCode": 727,
                "value": 5000.87
              }
            }]
          }]
        }],
        "paxs": [{
          "id": 1,
          "firstName": "Flavio",
          "lastName": "Sousa",
          "birthDate": "1991-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false,
          "documents": [{
            "type": "LICENSE_DRIVER",
            "doc": "034556865989",
            "issuingDate": "2004-12-15",
            "expirationDate": "2019-11-18"
          }],
          "email": "teste@gmail.com",
          "phones": [{
            "type": "MOBILE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }, {
            "type": "LANDLINE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }],
          "address": {
            "street": "Rua Lupércio de Miranda",
            "number": "1776",
            "complement": "107B",
            "district": "Campestre",
            "city": "Santo André",
            "state": "SP",
            "county": "Brasil",
            "zipCode": "09070-000"
          },
          "productsData": {
            "abroadCourses": {
              "levelLanguage": 2,
              "acceptAccommodationWithSmokers": false,
              "allergy": [
                "Pó",
                "Poeira",
                "Cisco",
                "Terra"
              ],
              "dietaryRestrictions": [
                "Amendoim"
              ],
              "animalRestrictions": [
                "Cachorro",
                "Gato",
                "Tigre"
              ],
              "guardian": {
                "name": "",
                "email": "teste_guardian@gmail.com",
                "phones": [{
                  "type": "MOBILE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }, {
                  "type": "LANDLINE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }]
              }
            }
          }
        }, {
          "id": 2,
          "firstName": "Marcus Vinicius",
          "lastName": "Costa e Paula",
          "birthDate": "1989-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false
        }],
        "price": {
          "totalValue": 1024,
          "discountValue": 0,
          "chargesValue": 0,
          "paidValue": 1024,
          "points": 0,
          "currency": "BRL"
        },
        "products": [{
          "hotels": [{
            "id": 34306398,
            "updateAvailable": false,
            "rooms": [{
              "channelManager": {
                "id": 34,
                "reservationCode": "128803360723|260633276",
                "price": 123.03,
                "grossProfit": 23.03,
                "currency": "DOLAR_COMERCIAL"
              },
              "player": {
                "id": 5,
                "reservationCode": "12/4323432"
              },
              "price": 2343.03,
              "currency": "REAL",
              "description": "Quarto Twin Standard, 2 camas de Solteiro",
              "checkIn": "2016-06-03",
              "checkOut": "2016-06-04",
              "paxsId": [
                1,
                2
              ],
              "nightsAmount": 1,
              "markup": 0.6,
              "packageGroup": "VHI",
              "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
              "mealPlan": "Sem Café"
            }]
          }],
          "cars": [{
            "updateAvailable": false,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "channelManager": {
              "id": 1,
              "reservationCode": "PZAZHV",
              "price": 123.03,
              "currency": "USD"
            },
            "player": {
              "id": "AL"
            },
            "pickup": {
              "name": "MIAMI INTERNTNL",
              "id": "87645",
              "date": "2016-07-15T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "return": {
              "name": "MIAMI INTERNTNL",
              "id": "43244",
              "date": "2016-07-20T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "paxId": 1,
            "price": 2343.03,
            "currency": "BRL"
          }],
          "flights": [{
            "priceGroup": {
              "fareGroup": {
                "reCharging": false,
                "currency": "BRL",
                "priceWithTax": 354.58,
                "priceWithoutTax": 283.22,
                "fares": [{
                  "passengersType": "ADT",
                  "passengersCount": 2,
                  "priceWithTax": 246.35,
                  "priceWithoutTax": 124.28,
                  "taxes": [{
                    "code": "KRWE",
                    "description": "Classe tarifária",
                    "percent": 65.01,
                    "amount": 77.82
                  }]
                }]
              },
              "segments": [{
                "departure": "MIA",
                "departureDate": "2035-12-31T05:47:39.997Z",
                "arrival": "SAO",
                "arrivalDate": "2058-12-04T06:55:28.799Z",
                "rateToken": "qUkGA2teW",
                "operatedBy": {
                  "name": "TAM",
                  "iata": "JJ"
                },
                "routeRPH": 0,
                "rph": 6,
                "numberOfStops": 1,
                "duration": 311,
                "legs": [{
                  "operatedBy": {
                    "name": "GOL",
                    "iata": "G3"
                  },
                  "flightNumber": 5208,
                  "duration": 186,
                  "numberOfStops": 1,
                  "departure": "Miami",
                  "arrival": "Orlando",
                  "departureDate": "2045-06-10T15:19:28.832Z",
                  "arrivalDate": "2078-08-08T08:24:21.254Z",
                  "aircraftCode": "KSLY",
                  "seatClass": {
                    "code": "WRSM",
                    "description": "Assento de luxo"
                  }
                }]
              }]
            },
            "gds": {
              "provider": "Sabre",
              "reservationCode": "546312563"
            },
            "markup": 60.29,
            "packageGroup": "VHI",
            "updateAvailable": false,
            "reservationToken": "YW55IHNoaXQNCg=="
          }],
          "insurances": {
            "id": 34306398,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "name": "INTERNACIONAL - MUNDO BÁSICO",
            "description": "Serviços de proteção em viagens para qualquer lugar do Brasil.",
            "company": "TravelAce Assistance",
            "price": 838.4,
            "currency": "BRL",
            "type": "TRAVEL",
            "startDate": "2016-07-20T11:00",
            "endDate": "2016-07-25T11:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            },
            "paxs": [
              1,
              2,
              3,
              4
            ]
          }
        }]
      }]
    },
    {
      "id": 5850,
      "reservations": [{
        "id": 91921042,
        "reservationDate": "2011-12-06T13:56:11.000-02:00",
        "expiresDate": "2011-12-07T13:57:24.000-02:00",
        "isProductTypePackage": false,
        "status": "CONFIRMED",
        "reservationType": "NORMAL",
        "packageGroup": "STANDALONE",
        "excursion": {
          "code": "2.53539.121801",
          "description": null
        },
        "notes": null,
        "updateAvailable": true,
        "vendorId": 11321132,
        "branchId": 1000,
        "agencyId": 0,
        "emitterId": 145346,
        "salesType": "CVC",
        "currency": "BRL",
        "tour": {
          "id": 66763429,
          "description": "CALDAS NOVAS",
          "origin": {
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          },
          "destinations": [{
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          }]
        },
        "contractors": [{
          "id": 1,
          "paxsId": [
            1,
            2
          ],
          "person": {
            "name": "Marcus Vinicius Costa e Paula",
            "birthday": "1991-11-01",
            "email": "m.costa91@hotmail.com",
            "gender": "M",
            "phones": [{
              "internationalCode": 55,
              "localCode": 11,
              "number": "984949658"
            }],
            "documents": [{
              "code": "41052964850",
              "type": "CPF"
            }],
            "addresses": [{
              "cityName": "Guarulhos",
              "number": "820",
              "complement": "Casa",
              "zipCode": "09220000",
              "street": "Av. Varsóvia",
              "countryCode": "BR",
              "stateCode": "SP",
              "district": "Vila Metalurgica"
            }]
          },
          "receipts": [{
            "id": 1000244945,
            "value": 1024.12,
            "type": "NORMAL",
            "status": "ACTIVE",
            "created": {
              "date": "2011-12-06T00:00:00.000-02:00"
            },
            "cancelled": {
              "date": "1900-01-01T00:00:00.000-03:06"
            },
            "discounts": [{
              "modality": "ABATIMENTOS",
              "description": "DESC. CONCEDIDOS",
              "value": 1234.11,
              "discountToken": "234ERFFRW=="
            }],
            "payments": [{
              "plan": {
                "token": "1204-asaqswqw-q20205-qqqqq",
                "value": 3123.87
              },
              "downPayment": {
                "token": "1204-asaqswqw-q20205-qqqaq",
                "value": 5000.87
              },
              "creditCard": {
                "number": "4978523953242222",
                "name": "Marcus Vinicius Costa e Paula",
                "expirationYear": 19,
                "securityCode": 727,
                "value": 5000.87
              }
            }]
          }]
        }],
        "paxs": [{
          "id": 1,
          "firstName": "Flavio",
          "lastName": "Sousa",
          "birthDate": "1991-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false,
          "documents": [{
            "type": "LICENSE_DRIVER",
            "doc": "034556865989",
            "issuingDate": "2004-12-15",
            "expirationDate": "2019-11-18"
          }],
          "email": "teste@gmail.com",
          "phones": [{
            "type": "MOBILE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }, {
            "type": "LANDLINE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }],
          "address": {
            "street": "Rua Lupércio de Miranda",
            "number": "1776",
            "complement": "107B",
            "district": "Campestre",
            "city": "Santo André",
            "state": "SP",
            "county": "Brasil",
            "zipCode": "09070-000"
          },
          "productsData": {
            "abroadCourses": {
              "levelLanguage": 2,
              "acceptAccommodationWithSmokers": false,
              "allergy": [
                "Pó",
                "Poeira",
                "Cisco",
                "Terra"
              ],
              "dietaryRestrictions": [
                "Amendoim"
              ],
              "animalRestrictions": [
                "Cachorro",
                "Gato",
                "Tigre"
              ],
              "guardian": {
                "name": "",
                "email": "teste_guardian@gmail.com",
                "phones": [{
                  "type": "MOBILE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }, {
                  "type": "LANDLINE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }]
              }
            }
          }
        }, {
          "id": 2,
          "firstName": "Marcus Vinicius",
          "lastName": "Costa e Paula",
          "birthDate": "1989-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false
        }],
        "price": {
          "totalValue": 1024,
          "discountValue": 0,
          "chargesValue": 0,
          "paidValue": 1024,
          "points": 0,
          "currency": "BRL"
        },
        "products": [{
          "hotels": [{
            "id": 34306398,
            "updateAvailable": false,
            "rooms": [{
              "channelManager": {
                "id": 34,
                "reservationCode": "128803360723|260633276",
                "price": 123.03,
                "grossProfit": 23.03,
                "currency": "DOLAR_COMERCIAL"
              },
              "player": {
                "id": 5,
                "reservationCode": "12/4323432"
              },
              "price": 2343.03,
              "currency": "REAL",
              "description": "Quarto Twin Standard, 2 camas de Solteiro",
              "checkIn": "2016-06-03",
              "checkOut": "2016-06-04",
              "paxsId": [
                1,
                2
              ],
              "nightsAmount": 1,
              "markup": 0.6,
              "packageGroup": "VHI",
              "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
              "mealPlan": "Sem Café"
            }]
          }],
          "cars": [{
            "updateAvailable": false,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "channelManager": {
              "id": 1,
              "reservationCode": "PZAZHV",
              "price": 123.03,
              "currency": "USD"
            },
            "player": {
              "id": "AL"
            },
            "pickup": {
              "name": "MIAMI INTERNTNL",
              "id": "87645",
              "date": "2016-07-15T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "return": {
              "name": "MIAMI INTERNTNL",
              "id": "43244",
              "date": "2016-07-20T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "paxId": 1,
            "price": 2343.03,
            "currency": "BRL"
          }],
          "flights": [{
            "priceGroup": {
              "fareGroup": {
                "reCharging": false,
                "currency": "BRL",
                "priceWithTax": 354.58,
                "priceWithoutTax": 283.22,
                "fares": [{
                  "passengersType": "ADT",
                  "passengersCount": 2,
                  "priceWithTax": 246.35,
                  "priceWithoutTax": 124.28,
                  "taxes": [{
                    "code": "KRWE",
                    "description": "Classe tarifária",
                    "percent": 65.01,
                    "amount": 77.82
                  }]
                }]
              },
              "segments": [{
                "departure": "MIA",
                "departureDate": "2035-12-31T05:47:39.997Z",
                "arrival": "SAO",
                "arrivalDate": "2058-12-04T06:55:28.799Z",
                "rateToken": "qUkGA2teW",
                "operatedBy": {
                  "name": "TAM",
                  "iata": "JJ"
                },
                "routeRPH": 0,
                "rph": 6,
                "numberOfStops": 1,
                "duration": 311,
                "legs": [{
                  "operatedBy": {
                    "name": "GOL",
                    "iata": "G3"
                  },
                  "flightNumber": 5208,
                  "duration": 186,
                  "numberOfStops": 1,
                  "departure": "Miami",
                  "arrival": "Orlando",
                  "departureDate": "2045-06-10T15:19:28.832Z",
                  "arrivalDate": "2078-08-08T08:24:21.254Z",
                  "aircraftCode": "KSLY",
                  "seatClass": {
                    "code": "WRSM",
                    "description": "Assento de luxo"
                  }
                }]
              }]
            },
            "gds": {
              "provider": "Sabre",
              "reservationCode": "546312563"
            },
            "markup": 60.29,
            "packageGroup": "VHI",
            "updateAvailable": false,
            "reservationToken": "YW55IHNoaXQNCg=="
          }],
          "insurances": {
            "id": 34306398,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "name": "INTERNACIONAL - MUNDO BÁSICO",
            "description": "Serviços de proteção em viagens para qualquer lugar do Brasil.",
            "company": "TravelAce Assistance",
            "price": 838.4,
            "currency": "BRL",
            "type": "TRAVEL",
            "startDate": "2016-07-20T11:00",
            "endDate": "2016-07-25T11:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            },
            "paxs": [
              1,
              2,
              3,
              4
            ]
          }
        }]
      }]
    },
    {
      "id": 5853,
      "reservations": [{
        "id": 91921042,
        "reservationDate": "2011-12-06T13:56:11.000-02:00",
        "expiresDate": "2011-12-07T13:57:24.000-02:00",
        "isProductTypePackage": false,
        "status": "CONFIRMED",
        "reservationType": "NORMAL",
        "packageGroup": "STANDALONE",
        "excursion": {
          "code": "2.53539.121801",
          "description": null
        },
        "notes": null,
        "updateAvailable": true,
        "vendorId": 11321132,
        "branchId": 1000,
        "agencyId": 0,
        "emitterId": 145346,
        "salesType": "CVC",
        "currency": "BRL",
        "tour": {
          "id": 66763429,
          "description": "CALDAS NOVAS",
          "origin": {
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          },
          "destinations": [{
            "arrivalDate": "2011-12-18T00:00:00.000-02:00",
            "departureDate": "2011-12-22T00:00:00.000-02:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            }
          }]
        },
        "contractors": [{
          "id": 1,
          "paxsId": [
            1,
            2
          ],
          "person": {
            "name": "Marcus Vinicius Costa e Paula",
            "birthday": "1991-11-01",
            "email": "m.costa91@hotmail.com",
            "gender": "M",
            "phones": [{
              "internationalCode": 55,
              "localCode": 11,
              "number": "984949658"
            }],
            "documents": [{
              "code": "41052964850",
              "type": "CPF"
            }],
            "addresses": [{
              "cityName": "Guarulhos",
              "number": "820",
              "complement": "Casa",
              "zipCode": "09220000",
              "street": "Av. Varsóvia",
              "countryCode": "BR",
              "stateCode": "SP",
              "district": "Vila Metalurgica"
            }]
          },
          "receipts": [{
            "id": 1000244945,
            "value": 1024.12,
            "type": "NORMAL",
            "status": "ACTIVE",
            "created": {
              "date": "2011-12-06T00:00:00.000-02:00"
            },
            "cancelled": {
              "date": "1900-01-01T00:00:00.000-03:06"
            },
            "discounts": [{
              "modality": "ABATIMENTOS",
              "description": "DESC. CONCEDIDOS",
              "value": 1234.11,
              "discountToken": "234ERFFRW=="
            }],
            "payments": [{
              "plan": {
                "token": "1204-asaqswqw-q20205-qqqqq",
                "value": 3123.87
              },
              "downPayment": {
                "token": "1204-asaqswqw-q20205-qqqaq",
                "value": 5000.87
              },
              "creditCard": {
                "number": "4978523953242222",
                "name": "Marcus Vinicius Costa e Paula",
                "expirationYear": 19,
                "securityCode": 727,
                "value": 5000.87
              }
            }]
          }]
        }],
        "paxs": [{
          "id": 1,
          "firstName": "Flavio",
          "lastName": "Sousa",
          "birthDate": "1991-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false,
          "documents": [{
            "type": "LICENSE_DRIVER",
            "doc": "034556865989",
            "issuingDate": "2004-12-15",
            "expirationDate": "2019-11-18"
          }],
          "email": "teste@gmail.com",
          "phones": [{
            "type": "MOBILE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }, {
            "type": "LANDLINE",
            "internationalCode": 55,
            "localCode": 11,
            "number": "987654321"
          }],
          "address": {
            "street": "Rua Lupércio de Miranda",
            "number": "1776",
            "complement": "107B",
            "district": "Campestre",
            "city": "Santo André",
            "state": "SP",
            "county": "Brasil",
            "zipCode": "09070-000"
          },
          "productsData": {
            "abroadCourses": {
              "levelLanguage": 2,
              "acceptAccommodationWithSmokers": false,
              "allergy": [
                "Pó",
                "Poeira",
                "Cisco",
                "Terra"
              ],
              "dietaryRestrictions": [
                "Amendoim"
              ],
              "animalRestrictions": [
                "Cachorro",
                "Gato",
                "Tigre"
              ],
              "guardian": {
                "name": "",
                "email": "teste_guardian@gmail.com",
                "phones": [{
                  "type": "MOBILE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }, {
                  "type": "LANDLINE",
                  "internationalCode": 55,
                  "localCode": 11,
                  "number": "987654321"
                }]
              }
            }
          }
        }, {
          "id": 2,
          "firstName": "Marcus Vinicius",
          "lastName": "Costa e Paula",
          "birthDate": "1989-07-12T21:46:24.726Z",
          "gender": "M",
          "updateAvailable": false
        }],
        "price": {
          "totalValue": 1024,
          "discountValue": 0,
          "chargesValue": 0,
          "paidValue": 1024,
          "points": 0,
          "currency": "BRL"
        },
        "products": [{
          "hotels": [{
            "id": 34306398,
            "updateAvailable": false,
            "rooms": [{
              "channelManager": {
                "id": 34,
                "reservationCode": "128803360723|260633276",
                "price": 123.03,
                "grossProfit": 23.03,
                "currency": "DOLAR_COMERCIAL"
              },
              "player": {
                "id": 5,
                "reservationCode": "12/4323432"
              },
              "price": 2343.03,
              "currency": "REAL",
              "description": "Quarto Twin Standard, 2 camas de Solteiro",
              "checkIn": "2016-06-03",
              "checkOut": "2016-06-04",
              "paxsId": [
                1,
                2
              ],
              "nightsAmount": 1,
              "markup": 0.6,
              "packageGroup": "VHI",
              "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
              "mealPlan": "Sem Café"
            }]
          }],
          "cars": [{
            "updateAvailable": false,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "channelManager": {
              "id": 1,
              "reservationCode": "PZAZHV",
              "price": 123.03,
              "currency": "USD"
            },
            "player": {
              "id": "AL"
            },
            "pickup": {
              "name": "MIAMI INTERNTNL",
              "id": "87645",
              "date": "2016-07-15T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "return": {
              "name": "MIAMI INTERNTNL",
              "id": "43244",
              "date": "2016-07-20T11:00",
              "location": {
                "address": "100 S.E. 4TH STREET , 33131, MIAMI, UNITED STATES - USA"
              }
            },
            "paxId": 1,
            "price": 2343.03,
            "currency": "BRL"
          }],
          "flights": [{
            "priceGroup": {
              "fareGroup": {
                "reCharging": false,
                "currency": "BRL",
                "priceWithTax": 354.58,
                "priceWithoutTax": 283.22,
                "fares": [{
                  "passengersType": "ADT",
                  "passengersCount": 2,
                  "priceWithTax": 246.35,
                  "priceWithoutTax": 124.28,
                  "taxes": [{
                    "code": "KRWE",
                    "description": "Classe tarifária",
                    "percent": 65.01,
                    "amount": 77.82
                  }]
                }]
              },
              "segments": [{
                "departure": "MIA",
                "departureDate": "2035-12-31T05:47:39.997Z",
                "arrival": "SAO",
                "arrivalDate": "2058-12-04T06:55:28.799Z",
                "rateToken": "qUkGA2teW",
                "operatedBy": {
                  "name": "TAM",
                  "iata": "JJ"
                },
                "routeRPH": 0,
                "rph": 6,
                "numberOfStops": 1,
                "duration": 311,
                "legs": [{
                  "operatedBy": {
                    "name": "GOL",
                    "iata": "G3"
                  },
                  "flightNumber": 5208,
                  "duration": 186,
                  "numberOfStops": 1,
                  "departure": "Miami",
                  "arrival": "Orlando",
                  "departureDate": "2045-06-10T15:19:28.832Z",
                  "arrivalDate": "2078-08-08T08:24:21.254Z",
                  "aircraftCode": "KSLY",
                  "seatClass": {
                    "code": "WRSM",
                    "description": "Assento de luxo"
                  }
                }]
              }]
            },
            "gds": {
              "provider": "Sabre",
              "reservationCode": "546312563"
            },
            "markup": 60.29,
            "packageGroup": "VHI",
            "updateAvailable": false,
            "reservationToken": "YW55IHNoaXQNCg=="
          }],
          "insurances": {
            "id": 34306398,
            "reservationToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXRE",
            "name": "INTERNACIONAL - MUNDO BÁSICO",
            "description": "Serviços de proteção em viagens para qualquer lugar do Brasil.",
            "company": "TravelAce Assistance",
            "price": 838.4,
            "currency": "BRL",
            "type": "TRAVEL",
            "startDate": "2016-07-20T11:00",
            "endDate": "2016-07-25T11:00",
            "zone": {
              "id": 9626,
              "Country": {
                "name": "BRASIL",
                "code": "BR"
              },
              "state": {
                "name": "SÃO PAULO",
                "code": "SP"
              },
              "city": {
                "name": "SÃO PAULO",
                "code": "816"
              }
            },
            "paxs": [
              1,
              2,
              3,
              4
            ]
          }
        }]
      }]
    }
  ]
};