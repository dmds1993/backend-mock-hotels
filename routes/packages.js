var express = require('express');
var router = express.Router();

router.get('/originZones', function (req, res, next) {
	res.json(zones);
});

router.get('/originZones/:zone_id/destinationzones', function (req, res, next) {
	res.json(zones);
});

router.get('/originZones/:zone_id/destinationzones/:zone_id/baseDestinations', function (req, res, next) {
	res.json(baseDestinations);
});

router.get('/basedestinations/:base_id', function (req, res, next) {
	res.json(baseDestination);
});

router.get('/destinationzones/:destination_id', function (req, res, next) {
	res.json(destinationzones);
});

router.get('/originzones/:originzone_id/destinationzones/:destinationzone_id/dates', function (req, res, next) {
	res.json(destinationzonesdates);
});

router.get('/originzones/:originzone_id/baseDestinations/:baseDestination_id/dates', function (req, res, next) {
	res.json(basedestinationsdates);
});

router.get('/', function (req, res, next) {
  res.json(packages);
});

router.get('/:rate_token', function (req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
  
  if (rateToken.includes('rateToken')) {
    res.json(rateTokenPackage);
  } else {
    return res.status(500).send({ 
      code: 500, 
      message: 'Invalid Rate Token' 
    });
  }
});

router.post('/booking', function(req, res, next) {
    if (req.body.paxs && req.body.orderItens) {
      res.json(booking);
    } else {
      res.json({
        message: 'Error'
      });
    }
});

module.exports = router;

var packages = {
  "packages": [
    {
      "id": 177528727,
      "startDate": "2016-11-04",
      "endDate": "2016-11-07",
      "days": 3,
      "type": "ROAD",
      "isAvailable": true,
      "currency": "BRL",
      "baseDestination": 128776,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMS0wNyIgZHRpPSIyMDE2LTExLTA0IiBlY3Q9IkJSIiBlc3Q9IlNQIiBlemk9IjE3NiIgbWtpPSJQa2dDVkMgTWFya3VwIEltcG9ydF8xOCIgbWtwPSIwLjUiIHBpZD0iMTc3NTI4NzI3IiBwa2k9IjE3NzUyODcyNyIgcG90PSIxMjAiIHByZD0iQ1ZDIFBhY2thZ2UiIHB4cz0iMzAiIHNjdD0iQlIiIHNkdD0iMjAxNi0wOS0yNloiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "hotels": [
        {
          "id": 8078041,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "category": "Apartamento Luxo",
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "mealPlan": "Diária com café da manhã",
            "category": "310"
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          }
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": null,
      "taxes": [
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 174669688,
      "startDate": "2016-11-08",
      "endDate": "2016-11-15",
      "days": 7,
      "type": "AIR",
      "isAvailable": false,
      "currency": "BRL",
      "baseDestination": 128776,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMS0xNSIgZHRpPSIyMDE2LTExLTA4IiBlY3Q9IkJSIiBlc3Q9IlBFIiBlemk9IjM3OSIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NDY2OTY4OCIgcGtpPSIxNzQ2Njk2ODgiIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "hotels": [
        {
          "id": 8078031,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "category": "Apartamento Luxo",
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "mealPlan": "Diária com café da manhã",
            "category": "310"
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          }
        },
        {
          "id": 3146461,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "mealPlan": "Diária com meia pensão",
            "category": "238"
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 167476768,
      "startDate": "2016-10-14",
      "endDate": "2016-10-17",
      "days": 3,
      "type": "ROAD",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMC0xNyIgZHRpPSIyMDE2LTEwLTE0IiBlY3Q9IkJSIiBlc3Q9Ik1HIiBlemk9IjEwMTMiIGZncj0iMTc2NjUyMDIzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGlkPSIxNjc0NzY3NjgiIHBraT0iMTY3NDc2NzY4IiBwb3Q9IjEyMCIgcHJkPSJDVkMgUGFja2FnZSIgcHhzPSIzMCIgc2N0PSJCUiIgc2R0PSIyMDE2LTA5LTI2WiIgc3N0PSJTUCIgc3ppPSI4MTYiLz4=",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "currency": "BRL",
      "baseDestination": 128776,
      "hotels": [
        {
          "id": 8078043,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7213217,
              "longitude": -45.5715443
            }
          },
          "room": {
            "rph": 1,
            "mealPlan": "Diária com café da manhã",
            "category": "310"
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 3146462,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "mealPlan": "Diária com meia pensão",
            "category": "238",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 5608756,
          "name": "JOIA HOTEL",
          "description": "TRÊS ESTRELAS SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - RIO GRANDE DO SUL, 1223",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "description": "*Apartamento Standard*",
            "mealPlan": "Diária com café da manhã",
            "category": "2262",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/275345.jpg"
            }
          },
          "category": "*Apartamento Standard*"
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 177528667,
      "startDate": "2016-10-14",
      "endDate": "2016-10-17",
      "days": 3,
      "type": "AIR",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMC0xNyIgZHRpPSIyMDE2LTEwLTE0IiBlY3Q9IkJSIiBlc3Q9IlNQIiBlemk9IjE3NiIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NzUyODY2NyIgcGtpPSIxNzc1Mjg2NjciIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "currency": "BRL",
      "baseDestination": 128776,
      "hotels": [
        {
          "id": 8078044,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 3146463,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento. Standard ",
            "mealPlan": "Diária com meia pensão",
            "category": "238",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 5608757,
          "name": "JOIA HOTEL",
          "description": "TRÊS ESTRELAS SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - RIO GRANDE DO SUL, 1223",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "*Apartamento Standard*",
            "mealPlan": "Diária com café da manhã",
            "category": "2262",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/275345.jpg"
            }
          },
          "category": "*Apartamento Standard*"
        },
        {
          "id": 8078042,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7242144,
              "longitude": -45.5718352
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 177528645,
      "startDate": "2016-10-21",
      "endDate": "2016-10-24",
      "days": 3,
      "type": "ROAD",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMC0yNCIgZHRpPSIyMDE2LTEwLTIxIiBlY3Q9IkJSIiBlc3Q9IlNQIiBlemk9IjE3NiIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NzUyODY0NSIgcGtpPSIxNzc1Mjg2NDUiIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "currency": "BRL",
      "baseDestination": 128776,
      "hotels": [
        {
          "id": 8078045,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7213093,
              "longitude": -45.5717363
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 3146464,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": -22.7213093,
              "longitude": -45.5717363
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento. Standard ",
            "mealPlan": "Diária com meia pensão",
            "category": "238",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 5608758,
          "name": "JOIA HOTEL",
          "description": "TRÊS ESTRELAS SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - RIO GRANDE DO SUL, 1223",
            "coordinates": {
              "latitude": -22.7213093,
              "longitude": -45.5717363
            }
          },
          "room": {
            "rph": 1,
            "description": "*Apartamento Standard*",
            "mealPlan": "Diária com café da manhã",
            "category": "2262",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/275345.jpg"
            }
          },
          "category": "*Apartamento Standard*"
        },
        {
          "id": 8078055,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7213093,
              "longitude": -45.5717363
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 8078056,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 177528590,
      "startDate": "2016-10-28",
      "endDate": "2016-10-31",
      "days": 3,
      "type": "ROAD",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMC0zMSIgZHRpPSIyMDE2LTEwLTI4IiBlY3Q9IkJSIiBlc3Q9IlNQIiBlemk9IjE3NiIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NzUyODU5MCIgcGtpPSIxNzc1Mjg1OTAiIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "currency": "BRL",
      "baseDestination": 128776,
      "hotels": [
        {
          "id": 8078046,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.7217135,
              "longitude": -45.5905814
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 3146465,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento. Standard ",
            "mealPlan": "Diária com meia pensão",
            "category": "238",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 5608759,
          "name": "JOIA HOTEL",
          "description": "TRÊS ESTRELAS SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - RIO GRANDE DO SUL, 1223",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "*Apartamento Standard*",
            "mealPlan": "Diária com café da manhã",
            "category": "2262",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/275345.jpg"
            }
          },
          "category": "*Apartamento Standard*"
        },
        {
          "id": 8078095,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 8078026,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 8078047,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    },
    {
      "id": 174439074,
      "startDate": "2016-11-05",
      "endDate": "2016-11-21",
      "days": 16,
      "type": "ROAD",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMS0yMSIgZHRpPSIyMDE2LTExLTA1IiBlY3Q9IkJSIiBlc3Q9IlNDIiBlemk9IjEzNCIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NDQzOTA3NCIgcGtpPSIxNzQ0MzkwNzQiIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
      "price": {
        "priceWithTax": 1100,
        "priceWithoutTax": 1000,
        "pricePerDayWithTax": 220,
        "pricePerDayWithoutTax": 200,
        "pricePerPaxWithTax": 500,
        "pricePerPaxWithoutTax": 550
      },
      "currency": "BRL",
      "baseDestination": 128776,
      "hotels": [
        {
          "id": 8078077,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": -22.723573,
              "longitude": -45.5583256
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 3146466,
          "name": "HOTEL BEST WESTERN VIVÁ PORTO",
          "description": "HOTEL DE PRAIA CONFORTAVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 6,
            "checkIn": "2016-11-08",
            "checkOut": "2016-11-13"
          },
          "location": {
            "address": "AVENIDA - BEIRA MAR, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento. Standard ",
            "mealPlan": "Diária com meia pensão",
            "category": "238",
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/266886.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 5608766,
          "name": "JOIA HOTEL",
          "description": "TRÊS ESTRELAS SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - RIO GRANDE DO SUL, 1223",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "*Apartamento Standard*",
            "mealPlan": "Diária com café da manhã",
            "category": "2262",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/275345.jpg"
            }
          },
          "category": "*Apartamento Standard*"
        },
        {
          "id": 8078048,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 8078049,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 8078051,
          "name": "POUSADA CONDADO BRASILEIRO",
          "description": "POUSADA DE CHARME MÉDIO CONFORTO",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": "RUA - EDGAR AZEVEDO SOARES, 226",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "310",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/292855.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 1016992,
          "name": "RIO BRANCO APART HOTEL",
          "description": "HOTEL URBANO SIMPLES",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-05",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "AVENIDA - RIO BRANCO, 369",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Apartamento Standard",
            "mealPlan": "Diária com café da manhã",
            "category": "3",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/286516.jpg"
            }
          },
          "category": "Apartamento Standard"
        },
        {
          "id": 1869,
          "name": "PLAZA SÃO RAFAEL HOTEL",
          "description": "HOTEL URBANO CONFORTÁVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-05",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ALBERTO BINS, 514",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 2,
            "description": "Apartamento. Standard ",
            "mealPlan": "Diária com café da manhã",
            "category": "238",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/296574.jpg"
            }
          },
          "category": "Apartamento. Standard "
        },
        {
          "id": 2233,
          "name": "BERTELLI HOTEL",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-05",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": "RODOVIA - BR 471, 471",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 3,
            "description": "Apartamento Standard",
            "mealPlan": "Diária com meia pensão",
            "category": "3",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/306120.jpg"
            }
          },
          "category": "Apartamento Standard"
        },
        {
          "id": 2030,
          "name": "FALLS GALLI HOTEL",
          "description": "HOTEL URBANO CONFORTÁVEL",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-05",
            "checkOut": "2016-11-06"
          },
          "location": {
            "address": "AVENIDA - COSTA E SILVA, 1602",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 4,
            "description": "Apartamento Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "1208",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/310645.jpg"
            }
          },
          "category": "Apartamento Luxo"
        },
        {
          "id": 10491759,
          "name": "CRYSTAL PALACE MONTEVIDÉU NACIONAL",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-06",
            "checkOut": "2016-11-07"
          },
          "location": {
            "address": " - INDUSTRIAL, 600",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 5,
            "description": "* Apartamento ",
            "mealPlan": "Diária com café da manhã",
            "category": "6480",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/350586.jpg"
            }
          },
          "category": "* Apartamento "
        },
        {
          "id": 3716527,
          "name": "HOTEL OBELISCO CENTER - NACIONAL",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 3,
            "checkIn": "2016-11-07",
            "checkOut": "2016-11-09"
          },
          "location": {
            "address": " - ROQUE SAENZ PEÑA, 991",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 6,
            "description": "Apartamento Standard",
            "mealPlan": "Diária com café da manhã",
            "category": "3",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/350786.jpg"
            }
          },
          "category": "Apartamento Standard"
        },
        {
          "id": 8957408,
          "name": "BOURBON CONMEBOL ASSUNCION NACIONAL",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-09",
            "checkOut": "2016-11-10"
          },
          "location": {
            "address": " - INDUSTRIAL, 600",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 7,
            "description": "Apartamento Superior",
            "mealPlan": "Diária com café da manhã",
            "category": "1752",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/350805.jpg"
            }
          },
          "category": "Apartamento Superior"
        },
        {
          "id": 2381419,
          "name": "HOTEL PRESIDENTE ROSÁRIO-NACIONAL",
          "description": "TURÍSTICA SUPERIOR",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-10",
            "checkOut": "2016-11-10"
          },
          "location": {
            "address": " - AV. CORRIENTES 919, ",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 8,
            "description": "Apartamento Standard",
            "mealPlan": "Diária com café da manhã",
            "category": "3",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/356071.jpg"
            }
          },
          "category": "Apartamento Standard"
        },
        {
          "id": 5341597,
          "name": "AMERIAN HOTEL CASINO GALA NACIONAL",
          "description": "SUPERIOR",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-10",
            "checkOut": "2016-11-10"
          },
          "location": {
            "address": " - J D PERON, 330",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 9,
            "description": "Luxo",
            "mealPlan": "Diária com café da manhã",
            "category": "218",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/359487.jpg"
            }
          },
          "category": "Luxo"
        },
        {
          "id": 10056247,
          "name": "HARBOR SAINT MICHEL",
          "description": "QUATRO ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 1,
            "checkIn": "2016-11-10",
            "checkOut": "2016-11-10"
          },
          "location": {
            "address": " - LAMENHA LINS, 712",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 10,
            "description": "Apartamento Superior",
            "mealPlan": "Diária com café da manhã",
            "category": "1752",
            
          },
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/images/343988.jpg"
            }
          },
          "category": "Apartamento Superior"
        }
      ],
      "alternativeRooms": [
        {
          "mealPlan": "Diária com café da manhã",
          "category": "Apartamento Standard",
          "packageRateToken": "ldjkfsapdflj==",
          "links": {
            "thumbnailImage": {
              "href": "http://www.cvc.com.br/static/img01.jpg"
            }
          }
        }
      ],
      "flight": {
        "inbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-08-29T15:50:00-03:00",
          "duration": 190,
          "arrivalDate": "2016-08-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "arrivalLocation": {
            "iata": "OPO",
            "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-08-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-08-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "arrivalLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            },
            {
              "flightNumber": "4321",
              "departureDate": "2016-08-29T18:50:00-03:00",
              "duration": 60,
              "arrivalDate": "2016-08-29T19:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "OPO",
                "description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        },
        "outbound": {
          "period": "NIGHTLY",
          "departureDate": "2016-09-29T15:50:00-03:00",
          "duration": 130,
          "arrivalDate": "2016-09-29T19:00:00-03:00",
          "class": "Económico",
          "departureLocation": {
            "iata": "LIS",
            "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "Aeroporto Internacional de São Paulo-Guarulhos"
          },
          "operatingAirline": {
            "code": "G3",
            "name": "GOL"
          },
          "legs": [
            {
              "flightNumber": "1234",
              "departureDate": "2016-09-29T15:50:00-03:00",
              "duration": 130,
              "arrivalDate": "2016-09-29T18:00:00-03:00",
              "class": "Económico",
              "departureLocation": {
                "iata": "LIS",
                "description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
              },
              "arrivalLocation": {
                "iata": "GRU",
                "description": "Aeroporto Internacional de São Paulo-Guarulhos"
              },
              "operatingAirline": {
                "code": "G3",
                "name": "GOL"
              }
            }
          ]
        }
      },
      "taxes": [
        {
          "code": "TE",
          "description": "Taxa de Embarque",
          "percent": 69.36,
          "amount": 1
        },
        {
          "code": "PackageTaxes_11",
          "description": "TAXA DE REMESSA",
          "percent": 0.5
        }
      ]
    }
  ]
};

var rateTokenPackage = {
  "package": {
		"id": 174669688,
		"startDate": "2016-11-08",
		"endDate": "2016-11-15",
		"days": 7,
		"type": "AIR",
		"isAvailable": true,
		"currency": "BRL",
		"baseDestination": 128776,
		"packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMTI4Nzc2IiBicmk9IjEwMDAiIGR0Zj0iMjAxNi0xMS0xNSIgZHRpPSIyMDE2LTExLTA4IiBlY3Q9IkJSIiBlc3Q9IlBFIiBlemk9IjM3OSIgZmdyPSIxNzY2NTIwMjMiIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwaWQ9IjE3NDY2OTY4OCIgcGtpPSIxNzQ2Njk2ODgiIHBvdD0iMTIwIiBwcmQ9IkNWQyBQYWNrYWdlIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMDktMjZaIiBzc3Q9IlNQIiBzemk9IjgxNiIvPg==",
		"price": {
			"priceWithTax": 1100,
			"priceWithoutTax": 1000,
			"pricePerDayWithTax": 220,
			"pricePerDayWithoutTax": 200,
			"pricePerPaxWithTax": 500,
			"pricePerPaxWithoutTax": 550
		},
		"hotels": [
			{
				"id": 8078031,
				"name": "POUSADA CONDADO BRASILEIRO",
				"description": "POUSADA DE CHARME MÉDIO CONFORTO",
				"award": 5,
				"isPreferential": true,
				"category": "Apartamento Luxo",
				"timeSpan": {
					"nights": 2,
					"checkIn": "2016-11-04",
					"checkOut": "2016-11-05"
				},
				"location": {
          "address": "RUA - EDGAR AZEVEDO SOARES, 226",
          "coordinates": {
            "latitude": -22.7242144,
            "longitude": -45.5718352
          }
        },
				"room": {
					"rph": 1,
					"mealPlan": "Diária com café da manhã",
					"category": "310"
				},
				"links": {
					"thumbnailImage": {
						"href": "http://www.cvc.com.br/images/292855.jpg"
					}
				}
			},
			{
				"id": 3146461,
				"name": "HOTEL BEST WESTERN VIVÁ PORTO",
				"description": "HOTEL DE PRAIA CONFORTAVEL",
				"award": 5,
				"isPreferential": true,
				"timeSpan": {
					"nights": 6,
					"checkIn": "2016-11-08",
					"checkOut": "2016-11-13"
				},
				"location": {
					"address": "AVENIDA - BEIRA MAR, 0",
					"coordinates": {
						"latitude": 0,
						"longitude": 0
					}
				},
				"room": {
					"rph": 1,
					"mealPlan": "Diária com meia pensão",
					"category": "238"
				},
				"links": {
					"thumbnailImage": {
						"href": "http://www.cvc.com.br/images/266886.jpg"
					}
				},
				"category": "Apartamento. Standard "
			}
		],
		"alternativeRooms": [
			{
				"mealPlan": "Diária com café da manhã",
				"category": "Apartamento Standard",
				"packageRateToken": "ldjkfsapdflj==",
				"links": {
					"thumbnailImage": {
						"href": "http://www.cvc.com.br/static/img01.jpg"
					}
				}
			}
		],
		"flight": {
			"inbound": {
				"period": "NIGHTLY",
				"departureDate": "2016-08-29T15:50:00-03:00",
				"duration": 190,
				"arrivalDate": "2016-08-29T19:00:00-03:00",
				"class": "Económico",
				"departureLocation": {
					"iata": "GRU",
					"description": "Aeroporto Internacional de São Paulo-Guarulhos"
				},
				"arrivalLocation": {
					"iata": "OPO",
					"description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
				},
				"operatingAirline": {
					"code": "G3",
					"name": "GOL"
				},
				"legs": [
					{
						"flightNumber": "1234",
						"departureDate": "2016-08-29T15:50:00-03:00",
						"duration": 130,
						"arrivalDate": "2016-08-29T18:00:00-03:00",
						"class": "Económico",
						"departureLocation": {
							"iata": "GRU",
							"description": "Aeroporto Internacional de São Paulo-Guarulhos"
						},
						"arrivalLocation": {
							"iata": "LIS",
							"description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
						},
						"operatingAirline": {
							"code": "G3",
							"name": "GOL"
						}
					},
					{
						"flightNumber": "4321",
						"departureDate": "2016-08-29T18:50:00-03:00",
						"duration": 60,
						"arrivalDate": "2016-08-29T19:00:00-03:00",
						"class": "Económico",
						"departureLocation": {
							"iata": "LIS",
							"description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
						},
						"arrivalLocation": {
							"iata": "OPO",
							"description": "Aeroporto Francisco Sá Carneiro, Aeroporto na telha Villa Nova, Portugal"
						},
						"operatingAirline": {
							"code": "G3",
							"name": "GOL"
						}
					}
				]
			},
			"outbound": {
				"period": "NIGHTLY",
				"departureDate": "2016-09-29T15:50:00-03:00",
				"duration": 130,
				"arrivalDate": "2016-09-29T19:00:00-03:00",
				"class": "Económico",
				"departureLocation": {
					"iata": "LIS",
					"description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
				},
				"arrivalLocation": {
					"iata": "GRU",
					"description": "Aeroporto Internacional de São Paulo-Guarulhos"
				},
				"operatingAirline": {
					"code": "G3",
					"name": "GOL"
				},
				"legs": [
					{
						"flightNumber": "1234",
						"departureDate": "2016-09-29T15:50:00-03:00",
						"duration": 130,
						"arrivalDate": "2016-09-29T18:00:00-03:00",
						"class": "Económico",
						"departureLocation": {
							"iata": "LIS",
							"description": "Aeroporto Humberto Delgado, Aeroporto em Lisboa, Portugal"
						},
						"arrivalLocation": {
							"iata": "GRU",
							"description": "Aeroporto Internacional de São Paulo-Guarulhos"
						},
						"operatingAirline": {
							"code": "G3",
							"name": "GOL"
						}
					}
				]
			}
		},
		"taxes": [
			{
				"code": "TE",
				"description": "Taxa de Embarque",
				"percent": 69.36,
				"amount": 1
			},
			{
				"code": "PackageTaxes_11",
				"description": "TAXA DE REMESSA",
				"percent": 0.5
			}
		]
	}
};

var zones = {
  "zones": [
    {
      "id": 33919,
      "name": "ANGRA DOS REIS"
    },
    {
      "id": 8726,
      "name": "ARACAJU"
    },
    {
      "id": 108,
      "name": "ARAPIRACA"
    },
    {
      "id": 33964,
      "name": "BALNEÁRIO CAMBORIÚ"
    },
    {
      "id": 8919,
      "name": "BAURU"
    },
    {
      "id": 1324,
      "name": "BEBERIBE"
    },
    {
      "id": 2920,
      "name": "BELO HORIZONTE"
    },
    {
      "id": 4693,
      "name": "BELÉM"
    },
    {
      "id": 33984,
      "name": "BLUMENAU"
    },
    {
      "id": 7382,
      "name": "BOA VISTA"
    },
    {
      "id": 8950,
      "name": "BRAGANÇA PAULISTA"
    },
    {
      "id": 1911,
      "name": "BRASÍLIA"
    },
    {
      "id": 28,
      "name": "BUENOS AIRES"
    },
    {
      "id": 8983,
      "name": "CAMPINAS"
    },
    {
      "id": 4349,
      "name": "CAMPO GRANDE"
    },
    {
      "id": 8986,
      "name": "CAMPOS DO JORDÃO"
    },
    {
      "id": 5356,
      "name": "CARUARU"
    },
    {
      "id": 1220,
      "name": "CHAPADA DIAMANTINA"
    },
    {
      "id": 34026,
      "name": "CHAPECÓ"
    },
    {
      "id": 3137,
      "name": "CONFINS"
    },
    {
      "id": 4462,
      "name": "CUIABÁ"
    },
    {
      "id": 6162,
      "name": "CURITIBA"
    },
    {
      "id": 5391,
      "name": "FERNANDO DE NORONHA"
    },
    {
      "id": 8400,
      "name": "FLORIANÓPOLIS"
    },
    {
      "id": 1463,
      "name": "FORTALEZA"
    },
    {
      "id": 6236,
      "name": "FOZ DO IGUAÇU"
    },
    {
      "id": 2330,
      "name": "GOIÂNIA"
    },
    {
      "id": 7752,
      "name": "GRAMADO"
    },
    {
      "id": 9140,
      "name": "GUARUJÁ"
    },
    {
      "id": 9141,
      "name": "GUARULHOS"
    },
    {
      "id": 5104,
      "name": "JOÃO PESSOA"
    },
    {
      "id": 6412,
      "name": "LONDRINA"
    },
    {
      "id": 922,
      "name": "LUÍS EDUARDO MAGALHÃES"
    },
    {
      "id": 185,
      "name": "MACEIÓ"
    },
    {
      "id": 322,
      "name": "MANAUS"
    },
    {
      "id": 6452,
      "name": "MARINGÁ"
    },
    {
      "id": 9306,
      "name": "MARÍLIA"
    },
    {
      "id": 9312,
      "name": "MATÃO"
    },
    {
      "id": 9313,
      "name": "MAUÁ"
    },
    {
      "id": 34584,
      "name": "NATAL"
    },
    {
      "id": 8519,
      "name": "NAVEGANTES"
    },
    {
      "id": 9383,
      "name": "OLÍMPIA"
    },
    {
      "id": 9786,
      "name": "PALMAS"
    },
    {
      "id": 9445,
      "name": "PINHALZINHO"
    },
    {
      "id": 8002,
      "name": "PORTO ALEGRE"
    },
    {
      "id": 5648,
      "name": "PORTO DE GALINHAS"
    },
    {
      "id": 1032,
      "name": "PORTO SEGURO"
    },
    {
      "id": 7357,
      "name": "PORTO VELHO"
    },
    {
      "id": 3798,
      "name": "POÇOS DE CALDAS"
    },
    {
      "id": 7313,
      "name": "PRAIA DA PIPA"
    },
    {
      "id": 9490,
      "name": "PRESIDENTE PRUDENTE"
    },
    {
      "id": 5541,
      "name": "RECIFE"
    },
    {
      "id": 9518,
      "name": "RIBEIRÃO PRETO"
    },
    {
      "id": 93,
      "name": "RIO BRANCO"
    },
    {
      "id": 7110,
      "name": "RIO DE JANEIRO"
    },
    {
      "id": 1076,
      "name": "SALVADOR"
    },
    {
      "id": 9559,
      "name": "SANTA CRUZ DAS PALMEIRAS"
    },
    {
      "id": 4902,
      "name": "SANTARÉM"
    },
    {
      "id": 9594,
      "name": "SANTOS"
    },
    {
      "id": 9601,
      "name": "SÃO CARLOS"
    },
    {
      "id": 9617,
      "name": "SÃO JOSÉ DO RIO PRETO"
    },
    {
      "id": 2749,
      "name": "SÃO LUÍS"
    },
    {
      "id": 9626,
      "name": "SÃO PAULO"
    },
    {
      "id": 5871,
      "name": "TERESINA"
    },
    {
      "id": 4214,
      "name": "UBERLÂNDIA"
    },
    {
      "id": 4257,
      "name": "VIRGÍNIA"
    },
    {
      "id": 2181,
      "name": "VITÓRIA"
    }
  ]
};

var baseDestinations = {
  "baseDestinations": [
    {
      "id": 128776,
      "name": "F1 2016 - 4D SETOR A - 03 DIAS DE AUTODROMO EMBARQUE QUINTA",
      "description": " FORMULA 1",
      "days": 4,
      "lowestPackage": {
        "price": 3736,
        "departureDate": "2016-12-09Z"
      },
      "type": "AIR",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre. (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 4,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 131276,
      "name": "F1 2016 - 4D SETOR G - 03 DIAS DE AUTODROMO EMBARQUE QUINTA",
      "description": " FORMULA 1",
      "days": 4,
      "lowestPackage": {
        "price": 3196,
        "departureDate": "2016-11-10Z"
      },
      "type": "AIR_ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 4,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 131376,
      "name": "F1 2016 - 3D SETOR M - 02 DIAS DE AUTODROMO EMBARQUE SEXTA",
      "description": " FORMULA 1",
      "days": 3,
      "lowestPackage": {
        "price": 5696,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR_ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem. (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 131976,
      "name": "F1 2016 - 3D SETOR G - 02 DIAS DE AUTODROMO EMBARQUE SEXTA",
      "description": " FORMULA 1  ",
      "days": 3,
      "lowestPackage": {
        "price": 2896,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR_ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 132076,
      "name": "F1 2016 - 3D SETOR A - 02  DIAS DE AUTODROMO EMBARQUE SEXTA",
      "description": " FORMULA 1",
      "days": 3,
      "lowestPackage": {
        "price": 3456,
        "departureDate": "2016-11-11Z"
      },
      "type": "ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 133476,
      "name": "F1 2016 - 4D SETOR M - 02 DIAS DE AUTODROMO - FL URUGUAI Uruguai",
      "description": " F1 2015 - 4d Setor M - 02 Dias De Autodromo - Fl Uruguai ",
      "days": 4,
      "lowestPackage": {
        "price": 6116,
        "departureDate": "2016-11-11Z"
      },
      "type": "ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Retorno ao Hotel"
        },
        {
          "label": 4
        },
        {
          "label": 5,
          "description": "Café da manhã em horário definido, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 133576,
      "name": "F1 2016 - 4D SETOR A - 02 DIAS DE AUTODROMO * FL URUGUAI ",
      "description": " FORMULA 1 ",
      "days": 4,
      "lowestPackage": {
        "price": 3876,
        "departureDate": "2016-11-11Z"
      },
      "type": "ROAD",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Retorno ao Hotel"
        },
        {
          "label": 4
        },
        {
          "label": 5,
          "description": "Café da manhã em horário definido, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 133577,
      "name": "F1 2016 - 4D SETOR G - 02 DIAS DE AUTODROMO * FL URUGUAI ",
      "description": " F1 2015 - 4d Setor G - 02 Dias De Autodromo * Fl Uruguai ",
      "days": 4,
      "lowestPackage": {
        "price": 3336,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "&nbsp3 noites no hotel escolhido e&nbsp3 cafés da manhã."
        },
        {
          "label": 2,
          "description": " traslado Aeroporto / Hotel, traslado Hotel / Autódromo / Hotel, ingresso no setor escolhido no ato da compra e assistência de guia de turismo."
        }
      ]
    },
    {
      "id": 134476,
      "name": "F1 2016 - 4D - SETOR M 03 DIAS DE AUTODROMO EMBARQUE QUINTA",
      "description": " FORMULA 1",
      "days": 4,
      "lowestPackage": {
        "price": 5976,
        "departureDate": "2016-11-10Z"
      },
      "type": "AIR",
      "contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "1º dia - São PauloRecepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "2º dia - São PauloCafé da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "3º dia - São PauloCafé da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 4,
          "description": "4º dia - São PauloCafé da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 135677,
      "name": "F1 2016 - SETOR G - 02 DIAS DE  AUTODROMO*FL.ARGENTINA Específico Filial Argentina",
      "days": 4,
      "lowestPackage": {
        "price": 3896,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Retorno ao Hotel"
        },
        {
          "label": 4
        },
        {
          "label": 5,
          "description": "Café da manhã em horário definido, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 135776,
      "name": "F1 2016 - SETOR A - 02 DIAS DE AUTODROMO*FL.ARGENTINA Específico Filial Argentina",
      "days": 4,
      "lowestPackage": {
        "price": 4036,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Retorno ao Hotel"
        },
        {
          "label": 4
        },
        {
          "label": 5,
          "description": "Café da manhã em horário definido, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 135777,
      "name": "F1 2016 - SETOR M - 02 DIAS DE AUTODROMO*FL.ARGENTINA Específico Filial Argentina",
      "days": 4,
      "lowestPackage": {
        "price": 6276,
        "departureDate": "2016-11-11Z"
      },
      "type": "AIR",
			"contents": [
        {
          "items": [
            {
              "code": "flightIcon",
              "name": "Transporte aéreo - ida e volta."
            },
            {
              "code": "transferIcon",
              "name": "Transporte - aeroporto / hotel / aeroporto."
            },
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - passeio aos principais pontos turísticos da cidade."
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre (passagem aérea não inclusa)."
        },
        {
          "label": 2,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Retorno ao Hotel"
        },
        {
          "label": 4
        },
        {
          "label": 5,
          "description": "Café da manhã em horário definido, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
        }
      ]
    },
    {
      "id": 238083,
      "name": "CIRCUITO RELIGIOSO 6D/5N - SAÍDA DE SP Inicio em S.Paulo. Não inclui transfer e aéreo",
      "days": 6,
      "lowestPackage": {
        "price": 2196,
        "departureDate": "2016-12-10Z"
      },
      "type": "AIR",
      "contents": [
        {
          "items": [
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 05 diárias com café da manhã"
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - Visita ao Santuário Mãe de Deus, Campos do Jordão, Guaratinguetá e Aparecida"
            },
            {
              "name": "Serviço - Guia acompanhante"
            },
            {
              "name": "Atenção - Este roteiro não inclui passagens aéreas e traslados de chegada e saída <BR>"
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Apresentação diretamente no hotel previsto, no qual a diária inicia ao meio dia. São Paulo tem restaurantes com cozinhas do mundo todo, ótimas opções de compras e uma intensa vida cultural. Hospedagem. Não inclui traslado"
        },
        {
          "label": 2,
          "description": "Saída para assistir Missa no Santuário Mãe de Deus, realizada pelo Padre Marcelo, com inicio previsto para as 05H45. Logo após, retorno ao hotel para café da manhã. No inicio da tarde, viagem para Campos do Jordão. Chegada e hospedagem. Restante do dia livre."
        },
        {
          "label": 3,
          "description": "Após café da manhã, saída para conhecer os principais pontos turísticos de Campos do Jordão, Vilas Abernésia, Jaguaribe, Capivari, Duchas de Prata e o Alto do Capivari. Tempo livre para compras no centro de Capivari e sugerimos subida opcional de teleférico ao Morro do Elefante. Retorno ao hotel no final da tarde."
        },
        {
          "label": 4,
          "description": "Após café da manhã, saída com destino a Aparecida. No percurso, visita ao Santuário de Frei Galvão em Guaratinguetá. Chegada em Aparecida no Inicio da tarde e hospedagem."
        },
        {
          "label": 5,
          "description": "Café da manhã e tempo livre para visitar a Basílica de Aparecida. A tarde, saída para o Santuário da Canção Nova, localizado em Cachoeira Paulista. Tempo para visitação e missa que será realizada as 17 horas (conforme programação do santuário). Logo após, retorno ao hotel."
        },
        {
          "label": 6,
          "description": "Café da manhã e viagem de retorno a São Paulo. Desembarque nos Aeroportos de Guarulhos e Congonhas e Terminal Barra Funda. Sugerimos que os voos sejam reservados a partir das 17 horas."
        }
      ]
    },
    {
      "id": 248393,
      "name": "CIRC.RELIG C/S.J.CAMPOS 6D/5N - SAÍDA DE SP Inicio em S.Paulo. Não inclui transfer e aéreo",
      "days": 6,
      "lowestPackage": {
        "price": 1996,
        "departureDate": "2016-10-08Z"
      },
      "type": "AIR",
      "contents": [
        {
          "items": [
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 05 diárias com café da manhã"
            },
            {
							"code": "activitiesIcon",
              "name": "Atividades - Visita ao Santuário Mãe de Deus, Campos do Jordão, Guaratinguetá e Aparecida"
            },
            {
              "name": "Serviço - Guia acompanhante"
            },
            {
              "name": "Atenção - Este roteiro não inclui passagens aéreas e traslados de chegada e saída"
            }
          ]
        }
      ],
      "dayByDay": [
        {
          "label": 1,
          "description": "Apresentação diretamente no hotel previsto, no qual a diária inicia ao meio dia. São Paulo tem restaurantes com cozinhas do mundo todo, ótimas opções de compras e uma intensa vida cultural. Hospedagem. Não inclui traslado"
        },
        {
          "label": 2,
          "description": "Saída para assistir Missa no Santuário Mãe de Deus, realizada pelo Padre Marcelo, com inicio previsto para as 05H45. Logo após, retorno ao hotel para café da manhã. Restante do dia livre. Sugere-se visita a feirinha de artesanato na Praça da República ou Museu de Arte de São Paulo. Noite livre."
        },
        {
          "label": 3,
          "description": "Café da manhã e city tour panorâmico na capital paulista. Destacamos Teatro Municipal,Vale do Anhangabaú,Largo de São Bento,Catedral da Sé,bairro da Liberdade, Avenida Paulista, etc. Em seguida, visita ao Mercado Municipal, para conhecer o famoso pastel de bacalhau e o volumoso sanduíche de mortadela. Tempo livre para compras na Rua 25 de Março. Retorno ao hotel no final da tarde. Noite livre."
        },
        {
          "label": 4,
          "description": "Após café da manhã, saída com destino a São José dos Campos. No percurso, visita a Campos do Jordão. Destacamos Vila Abernésia, Jaguaribe, Capivari, Duchas de Prata e o Alto do Capivari. Tempo livre para compras no centro de Capivari e sugerimos subida opcional de teleférico ao Morro do Elefante. No final da tarde, chegada em São José dos Campos e hospedagem."
        },
        {
          "label": 5,
          "description": "Após café da manhã, saída com destino a Aparecida. No percurso, visita ao Santuário de Frei Galvão em Guaratinguetá. Chegada em Aparecida e visita a Basílica. No final da tarde, retorno a São José dos Campos. Noite livre."
        },
        {
          "label": 6,
          "description": "Café da manhã e viagem de retorno a São Paulo. Desembarque nos Aeroportos de Guarulhos e Congonhas e Terminal Barra Funda. Sugerimos que os voos sejam reservados a partir das 17 horas."
        }
      ]
    }
  ],
  "meta": {
    "coverImage": {
      "href": "http://www.cvc.com.br/images/375872.jpg"
    },
    "price": {
      "min": 1996,
      "max": 6276
    },
    "features": [
      {
        "name": "hotelIcon",
        "amount": 2
      }
    ],
    "days": [
      {
        "name": "3",
        "amount": 3
      },
      {
        "name": "4",
        "amount": 9
      },
      {
        "name": "6",
        "amount": 2
      }
    ],
    "types": [
      {
        "name": "AEREO",
        "amount": 14
      }
    ]
  }
};

var baseDestination = {
  "baseDestination": {
    "id": 128776,
    "name": "F1 2016 - 4D SETOR A - 03 DIAS DE AUTODROMO EMBARQUE QUINTA",
    "description": " FORMULA 1",
    "days": 4,
    "lowestPackage": {
      "price": 1868,
      "departureDate": "2016-12-09Z"
    },
    "type": "AIR",
    "contents": [
      {
        "items": [
          {
            "code": "flightIcon",
            "name": "Transporte aéreo - ida e volta."
          },
          {
            "code": "transferIcon",
            "name": "Transporte - aeroporto / hotel / aeroporto."
          },
          {
            "code": "hotelIcon",
            "name": "Hospedagem - 7 diárias com café da manhã ou meia pensão (de acordo com o pacote escolhido)."
          },
          {
            "code": "activitiesIcon",
            "name": "Atividades - passeio aos principais pontos turísticos da cidade."
          }
        ]
      }
    ],
    "links": {
      "images": [
        {
          "href": "http://www.cvc.com.br/images/201672.jpg",
          "tooltip": "Natal vista aéria da praia do forte sectur"
        },
        {
          "href": "http://www.cvc.com.br/images/201661.jpg",
          "tooltip": "Natal vista aéria da praia do forte sectur"
        }
      ]
    },
    "oldDayByDay": [
      {
        "label": 1,
        "description": "Recepção pela equipe CVC no aeroporto e traslado ao hotel. Restante do dia livre. (passagem aérea não inclusa)."
      },
      {
        "label": 2,
        "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
      },
      {
        "label": 3,
        "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Treino do Grande Prêmio de F1. Retorno ao hotel após o encerramento do treino. Noite livre."
      },
      {
        "label": 4,
        "description": "Café da manhã. Em horário definido, traslado ao Autódromo de Interlagos para assistir ao Grande Prêmio de F1. Após o encerramento, traslado ao aeroporto. Retorno à cidade de origem (passagem aérea não inclusa)."
      }
    ]
  }
};

var destinationzones = {
  "destinationZone": {
    "id": 7110,
    "name": "RIO DE JANEIRO",
    "description": " As belíssimas paisagens, o charme dos botequins, a vibração das praias e a simpatia do povo carioca são só alguns dos elementos que fazem do Rio de Janeiro uma cidade fascinante e muito fácil de amar. Não é à toa que o Rio atrai anualmente cerca de dois milhões de turistas estrangeiros, todos interessados em conferir o encanto do Pão de Açúcar, Corcovado, Ipanema e outras belezas que já serviram de cenário para diversos filmes e transformaram o Rio de Janeiro no cartão-postal do Brasil.",
    "contents": [
      null
    ],
    "links": {
      "images": [
        {
          "href": "http://www.cvc.com.br/images/201672.jpg",
          "tooltip": "Natal vista aéria da praia do forte sectur"
        },
        {
          "href": "http://www.cvc.com.br/images/201661.jpg",
          "tooltip": "Natal vista aéria da praia do forte sectur"
        }
      ]
    }
  }
};

var destinationzonesdates = {
  "departureDates": [
    {
      "date": "2016-07-15",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-05",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-12",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-19",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-26",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-02",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-16",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-23",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-30",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-07",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-14",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-21",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-28",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-04",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-18",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-25",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-12-02",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-12-09",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    }
  ]
};

var basedestinationsdates = {
  "departureDates": [
    {
      "date": "2016-07-15",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-05",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-12",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-19",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-08-26",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-02",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-16",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-23",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-09-30",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-07",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-14",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-21",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-10-28",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-04",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-18",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-11-25",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-12-02",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2016-12-09",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    }
  ]
};

var booking = {
  "packages": {
    "accommodations": [
      [
        1
      ],
      [
        2,
        3
      ]
    ],
    "reservationToken": "ACSLKDJF92383R98FSIUDF9S8DSUIDFHKJSHKVCH",
    "package": {
      "id": "73255"
    }
  }
}