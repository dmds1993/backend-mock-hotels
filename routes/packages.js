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
  "packages": [{
    "id": 177005589,
    "startDate": "2016-12-01",
    "endDate": "2016-12-05",
    "days": 4,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU1ODkiIHBraT0iMTc3MDA1NTg5IiBwb3Q9IjExMTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIyMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 2237,
      "priceWithoutTax": 2236,
      "pricePerDayWithTax": 559.25,
      "pricePerDayWithoutTax": 559,
      "pricePerPaxWithTax": 2237,
      "pricePerPaxWithoutTax": 2236
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 3872361,
      "name": "COSTA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA SIMPLES ",
      "isPreferential": false,
      "timeSpan": {
        "nights": 3,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-03"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 140",
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
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/368612.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU2MzciIHBraT0iMTc3MDA1NjM3IiBwb3Q9IjE0NzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI5NTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2956
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ1ODciIHBraT0iMTc2OTY0NTg3IiBwb3Q9IjE2MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMyMTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3216
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2MzgiIHBraT0iMTc2OTY0NjM4IiBwb3Q9IjI0MzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjQ4NzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 4876
    }],
    "flight": {
      "id": 179370633,
      "outbound": {
        "number": "92612",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-04T20:30:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-04T22:20:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-04T20:30:00.000Z",
          "arrivalDate": "2016-12-04T22:20:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "92601",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "92601",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 177005432,
    "startDate": "2016-12-01",
    "endDate": "2016-12-05",
    "days": 4,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU0MzIiIHBraT0iMTc3MDA1NDMyIiBwb3Q9IjExODgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIzNzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 2377,
      "priceWithoutTax": 2376,
      "pricePerDayWithTax": 594.25,
      "pricePerDayWithoutTax": 594,
      "pricePerPaxWithTax": 2377,
      "pricePerPaxWithoutTax": 2376
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 7134335,
      "name": "HOTEL SUEDS CABRALIA",
      "description": "POUSADA DE PRAIA SIMPLES",
      "isPreferential": false,
      "timeSpan": {
        "nights": 3,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-03"
      },
      "location": {
        "address": "AVENIDA - BEIRA MAR, 6",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com café da manhã",
        "category": "3266",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/388009.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3266",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQzNDAiIHBraT0iMTc2OTY0MzQwIiBwb3Q9IjE3NTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM1MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3516
    }],
    "flight": {
      "id": 179370633,
      "outbound": {
        "number": "92612",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-04T20:30:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-04T22:20:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-04T20:30:00.000Z",
          "arrivalDate": "2016-12-04T22:20:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "92601",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "92601",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 177005732,
    "startDate": "2016-12-01",
    "endDate": "2016-12-05",
    "days": 4,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU3MzIiIHBraT0iMTc3MDA1NzMyIiBwb3Q9IjEyMDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI0MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 2417,
      "priceWithoutTax": 2416,
      "pricePerDayWithTax": 604.25,
      "pricePerDayWithoutTax": 604,
      "pricePerPaxWithTax": 2417,
      "pricePerPaxWithoutTax": 2416
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 4784341,
      "name": "BAIA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 3,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-03"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 141",
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
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/314087.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU4NTEiIHBraT0iMTc3MDA1ODUxIiBwb3Q9IjE1NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMxMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3136
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "6869",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ3NjciIHBraT0iMTc2OTY0NzY3IiBwb3Q9IjE2NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMzMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3336
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjU1MDAiIHBraT0iMTc2OTY1NTAwIiBwb3Q9IjE4MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM2MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3616
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2NjciIHBraT0iMTc2OTY0NjY3IiBwb3Q9IjI2NDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjUyOTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 5296
    }],
    "flight": {
      "id": 179370633,
      "outbound": {
        "number": "92612",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-04T20:30:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-04T22:20:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-04T20:30:00.000Z",
          "arrivalDate": "2016-12-04T22:20:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "92601",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "92601",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 177005637,
    "startDate": "2016-12-01",
    "endDate": "2016-12-05",
    "days": 4,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU2MzciIHBraT0iMTc3MDA1NjM3IiBwb3Q9IjE0NzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI5NTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 2957,
      "priceWithoutTax": 2956,
      "pricePerDayWithTax": 739.25,
      "pricePerDayWithoutTax": 739,
      "pricePerPaxWithTax": 2957,
      "pricePerPaxWithoutTax": 2956
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 3872361,
      "name": "COSTA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA SIMPLES ",
      "isPreferential": false,
      "timeSpan": {
        "nights": 3,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-03"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 140",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com meia pensão",
        "category": "3",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/368612.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU1ODkiIHBraT0iMTc3MDA1NTg5IiBwb3Q9IjExMTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIyMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2236
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ1ODciIHBraT0iMTc2OTY0NTg3IiBwb3Q9IjE2MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMyMTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3216
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2MzgiIHBraT0iMTc2OTY0NjM4IiBwb3Q9IjI0MzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjQ4NzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 4876
    }],
    "flight": {
      "id": 179370633,
      "outbound": {
        "number": "92612",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-04T20:30:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-04T22:20:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-04T20:30:00.000Z",
          "arrivalDate": "2016-12-04T22:20:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "92601",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "92601",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 177005851,
    "startDate": "2016-12-01",
    "endDate": "2016-12-05",
    "days": 4,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU4NTEiIHBraT0iMTc3MDA1ODUxIiBwb3Q9IjE1NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMxMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 3137,
      "priceWithoutTax": 3136,
      "pricePerDayWithTax": 784.25,
      "pricePerDayWithoutTax": 784,
      "pricePerPaxWithTax": 3137,
      "pricePerPaxWithoutTax": 3136
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 4784341,
      "name": "BAIA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 3,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-03"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 141",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com meia pensão",
        "category": "3",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/314087.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU3MzIiIHBraT0iMTc3MDA1NzMyIiBwb3Q9IjEyMDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI0MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2416
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "6869",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ3NjciIHBraT0iMTc2OTY0NzY3IiBwb3Q9IjE2NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMzMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3336
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjU1MDAiIHBraT0iMTc2OTY1NTAwIiBwb3Q9IjE4MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM2MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3616
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2NjciIHBraT0iMTc2OTY0NjY3IiBwb3Q9IjI2NDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjUyOTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 5296
    }],
    "flight": {
      "id": 179370633,
      "outbound": {
        "number": "92612",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-04T20:30:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-04T22:20:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-04T20:30:00.000Z",
          "arrivalDate": "2016-12-04T22:20:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "92601",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "92601",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176964587,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ1ODciIHBraT0iMTc2OTY0NTg3IiBwb3Q9IjE2MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMyMTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 3217,
      "priceWithoutTax": 3216,
      "pricePerDayWithTax": 402.125,
      "pricePerDayWithoutTax": 402,
      "pricePerPaxWithTax": 3217,
      "pricePerPaxWithoutTax": 3216
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 3872361,
      "name": "COSTA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA SIMPLES ",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 140",
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
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/368612.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU1ODkiIHBraT0iMTc3MDA1NTg5IiBwb3Q9IjExMTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIyMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2236
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU2MzciIHBraT0iMTc3MDA1NjM3IiBwb3Q9IjE0NzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI5NTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2956
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2MzgiIHBraT0iMTc2OTY0NjM4IiBwb3Q9IjI0MzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjQ4NzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 4876
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176964767,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": false,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ3NjciIHBraT0iMTc2OTY0NzY3IiBwb3Q9IjE2NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMzMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 3337,
      "priceWithoutTax": 3336,
      "pricePerDayWithTax": 417.125,
      "pricePerDayWithoutTax": 417,
      "pricePerPaxWithTax": 3337,
      "pricePerPaxWithoutTax": 3336
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 4784341,
      "name": "BAIA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 141",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard - Compre Já",
        "mealPlan": "Diária com café da manhã",
        "category": "6869",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/314087.jpg"
          }
        }
      },
      "category": "Apartamento Standard - Compre Já"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU3MzIiIHBraT0iMTc3MDA1NzMyIiBwb3Q9IjEyMDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI0MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2416
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU4NTEiIHBraT0iMTc3MDA1ODUxIiBwb3Q9IjE1NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMxMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3136
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjU1MDAiIHBraT0iMTc2OTY1NTAwIiBwb3Q9IjE4MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM2MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3616
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2NjciIHBraT0iMTc2OTY0NjY3IiBwb3Q9IjI2NDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjUyOTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 5296
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176964340,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQzNDAiIHBraT0iMTc2OTY0MzQwIiBwb3Q9IjE3NTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM1MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 3517,
      "priceWithoutTax": 3516,
      "pricePerDayWithTax": 439.625,
      "pricePerDayWithoutTax": 439.5,
      "pricePerPaxWithTax": 3517,
      "pricePerPaxWithoutTax": 3516
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 7134335,
      "name": "HOTEL SUEDS CABRALIA",
      "description": "POUSADA DE PRAIA SIMPLES",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "AVENIDA - BEIRA MAR, 6",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com café da manhã",
        "category": "3266",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/388009.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3266",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU0MzIiIHBraT0iMTc3MDA1NDMyIiBwb3Q9IjExODgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIzNzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2376
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176965500,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjU1MDAiIHBraT0iMTc2OTY1NTAwIiBwb3Q9IjE4MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM2MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 3617,
      "priceWithoutTax": 3616,
      "pricePerDayWithTax": 452.125,
      "pricePerDayWithoutTax": 452,
      "pricePerPaxWithTax": 3617,
      "pricePerPaxWithoutTax": 3616
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 4784341,
      "name": "BAIA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 141",
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
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/314087.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU3MzIiIHBraT0iMTc3MDA1NzMyIiBwb3Q9IjEyMDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI0MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2416
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU4NTEiIHBraT0iMTc3MDA1ODUxIiBwb3Q9IjE1NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMxMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3136
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "6869",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ3NjciIHBraT0iMTc2OTY0NzY3IiBwb3Q9IjE2NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMzMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3336
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2NjciIHBraT0iMTc2OTY0NjY3IiBwb3Q9IjI2NDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjUyOTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 5296
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176964638,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2MzgiIHBraT0iMTc2OTY0NjM4IiBwb3Q9IjI0MzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjQ4NzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 4877,
      "priceWithoutTax": 4876,
      "pricePerDayWithTax": 609.625,
      "pricePerDayWithoutTax": 609.5,
      "pricePerPaxWithTax": 4877,
      "pricePerPaxWithoutTax": 4876
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 3872361,
      "name": "COSTA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA SIMPLES ",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 140",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com meia pensão",
        "category": "3",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/368612.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU1ODkiIHBraT0iMTc3MDA1NTg5IiBwb3Q9IjExMTgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjIyMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2236
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU2MzciIHBraT0iMTc3MDA1NjM3IiBwb3Q9IjE0NzgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI5NTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2956
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ1ODciIHBraT0iMTc2OTY0NTg3IiBwb3Q9IjE2MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMyMTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3216
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 176964667,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ2NjciIHBraT0iMTc2OTY0NjY3IiBwb3Q9IjI2NDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjUyOTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
    "price": {
      "priceWithTax": 5297,
      "priceWithoutTax": 5296,
      "pricePerDayWithTax": 662.125,
      "pricePerDayWithoutTax": 662,
      "pricePerPaxWithTax": 5297,
      "pricePerPaxWithoutTax": 5296
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 4784341,
      "name": "BAIA CABRÁLIA HOTEL",
      "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "RUA - SIDRACK CARVALHO, 141",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Standard",
        "mealPlan": "Diária com meia pensão",
        "category": "3",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/314087.jpg"
          }
        }
      },
      "category": "Apartamento Standard"
    }],
    "alternativeRooms": [{
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU3MzIiIHBraT0iMTc3MDA1NzMyIiBwb3Q9IjEyMDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjI0MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 2416
    }, {
      "mealPlan": "Diária com meia pensão",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDUiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNjMzIiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzcwMDU4NTEiIHBraT0iMTc3MDA1ODUxIiBwb3Q9IjE1NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMxMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3136
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "6869",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjQ3NjciIHBraT0iMTc2OTY0NzY3IiBwb3Q9IjE2NjgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjMzMzYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3336
    }, {
      "mealPlan": "Diária com café da manhã",
      "category": "3",
      "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSI2NjgiIGZncj0iMTc5MzcwNzg3IiBta2k9IlBrZ0NWQyBNYXJrdXAgSW1wb3J0XzE4IiBta3A9IjAuNSIgcGFja2FnZVR5cGU9IkFJUiIgcGlkPSIxNzY5NjU1MDAiIHBraT0iMTc2OTY1NTAwIiBwb3Q9IjE4MDgiIHByZD0iUEFDIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTYtMTEtMjdaIiBzb3Q9IjM2MTYuMDAiIHNzdD0iU1AiIHN6aT0iODE2Ii8+",
      "price": 3616
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }, {
    "id": 177942312,
    "startDate": "2016-12-01",
    "endDate": "2016-12-09",
    "days": 8,
    "type": "AIR",
    "isAvailable": true,
    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJkZT0iMjIwNyIgYnJpPSIxMDAwIiBkdGY9IjIwMTYtMTItMDkiIGR0aT0iMjAxNi0xMi0wMSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDIwOSIgZmdyPSIxNzkzNzA3ODciIG1raT0iUGtnQ1ZDIE1hcmt1cCBJbXBvcnRfMTgiIG1rcD0iMC41IiBwYWNrYWdlVHlwZT0iQUlSIiBwaWQ9IjE3Nzk0MjMxMiIgcGtpPSIxNzc5NDIzMTIiIHBvdD0iNDE5OCIgcHJkPSJQQUMiIHB4cz0iMzAiIHNjdD0iQlIiIHNkdD0iMjAxNi0xMS0yN1oiIHNvdD0iODM5Ni4wMCIgc3N0PSJTUCIgc3ppPSI4MTYiLz4=",
    "price": {
      "priceWithTax": 8397,
      "priceWithoutTax": 8396,
      "pricePerDayWithTax": 1049.625,
      "pricePerDayWithoutTax": 1049.5,
      "pricePerPaxWithTax": 8397,
      "pricePerPaxWithoutTax": 8396
    },
    "currency": "BRL",
    "baseDestination": 2207,
    "hotels": [{
      "id": 1041476,
      "name": "COSTA BRASILIS RESORT",
      "description": "RESORT PADRÃO LUXO",
      "isPreferential": false,
      "timeSpan": {
        "nights": 7,
        "checkIn": "2016-12-01",
        "checkOut": "2016-12-07"
      },
      "location": {
        "address": "AVENIDA - BEIRA MAR, 2000",
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "room": {
        "rph": 1,
        "description": "Apartamento Superior",
        "mealPlan": "Diária com meia pensão",
        "category": "239",
        "links": {
          "thumbnailImage": {
            "href": "http://www.cvc.com.br/images/318365.jpg"
          }
        }
      },
      "category": "Apartamento Superior"
    }],
    "flight": {
      "id": 179370787,
      "outbound": {
        "number": "926122",
        "period": "D",
        "departureLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "arrivalLocation": {
          "iata": "GRU",
          "description": "GUARULHOS"
        },
        "departureDate": "2016-12-08T21:10:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-08T23:00:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "arrivalLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "departureDate": "2016-12-08T21:10:00.000Z",
          "arrivalDate": "2016-12-08T23:00:00.000Z",
          "operatedBy": "G3",
          "duration": 110
        }]
      },
      "inbound": {
        "number": "926011",
        "period": "D",
        "arrivalLocation": {
          "iata": "BPS",
          "description": "PORTO SEGURO"
        },
        "departureDate": "2016-12-01T18:50:00.000Z",
        "duration": 110,
        "arrivalDate": "2016-12-01T20:40:00.000Z",
        "operatedBy": "G3",
        "class": "Economico",
        "legs": [{
          "departureLocation": {
            "iata": "GRU",
            "description": "GUARULHOS"
          },
          "arrivalLocation": {
            "iata": "BPS",
            "description": "PORTO SEGURO"
          },
          "departureDate": "2016-12-01T18:50:00.000Z",
          "arrivalDate": "2016-12-01T20:40:00.000Z",
          "flightNumber": "926011",
          "operatedBy": "G3",
          "duration": 110
        }]
      }
    },
    "taxes": [{
      "code": "TE",
      "description": "Taxa de Embarque",
      "percent": 63.44,
      "amount": 1
    }]
  }]
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
						"latitude": -22.7217135,
						"longitude": -45.5905814
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