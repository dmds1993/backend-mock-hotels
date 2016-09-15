var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json(flights);
});

router.get('/:rate_token', function(req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
  
  if (rateToken.includes('rateToken')) {
  	res.json(flights);
  } else {
    return res.status(500).send({ 
      code: 500, 
      message: 'Invalid Rate Token' 
    });
  }
});

router.get('/priceHistory', function(req, res, next) {
	res.json(flights);
});

router.get('/bookings/:source/:locatorCode', function(req, res, next) {
	res.json(flights);
});


module.exports = router;

var flights = {
  "flights": [
    {
      "fareGroup": {
        "reCharging": false,
        "currency": "BRL",
        "priceWithTax": 354.58,
        "priceWithoutTax": 283.22,
        "fares": [
          {
            "passengersType": "ADT",
            "passengersCount": 2,
            "priceWithTax": 246.35,
            "priceWithoutTax": 124.28,
            "taxes": [
              {
                "code": "KRWE",
                "description": "Classe tarifária",
                "percent": 65.01,
                "amount": 77.82
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "MIA",
          "departureDate": "2016-12-01T05:47:39.997Z",
          "arrival": "SAO",
          "arrivalDate": "2016-12-01T06:55:28.799Z",
          "rateToken": "PGhvdDpyYXRlVG9rZW4geG1sbnM6aG90PSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9ob3RlbHMiIHBsYT0iMzYiIGNtaT0iMzYiIGNtYz0iMzYwMDEiIHJ0az0iZDM5MWEyNzktMzlkNC00MDAxLThjYzctMjMzZmEzM2ZmOWFlLTUwMDMiIHJ0cD0iNDgyMDQwIiBydGM9IjIwNDc3ODc1NSIgY2hhPSI3NzUuNjAiIG5hZD0iMSIgYmV0PSIxMyIgY3VyPSJCUkwiIGl6bz0iMzM4MzAiIGFncz0iVyIgYnJjPSIxMDAwIiBsYW49InB0X0JSIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgcGtnPSJWSEkiIHB4cz0iMzAiLz4",
          "operatedBy": {
            "name": "TAM",
            "iata": "JJ"
          },
          "routeRPH": 0,
          "numberOfStops": 1,
          "duration": 311,
          "legs": [
            {
              "operatedBy": {
                "name": "GOL",
                "iata": "G3"
              },
              "flightNumber": 5208,
              "duration": 186,
              "numberOfStops": 1,
              "departure": "Miami",
              "arrival": "Orlando",
              "departureDate": "2016-12-01T15:19:28.832Z",
              "arrivalDate": "2016-12-01T08:24:21.254Z",
              "aircraftCode": "KSLY",
              "seatClass": {
                "code": "WRSM",
                "description": "Assento de luxo"
              }
            }
          ]
        } ,
        {
          "departure": "SAO",
          "departureDate": "2016-12-05T05:47:39.997Z",
          "arrival": "MIA",
          "arrivalDate": "2016-12-05T06:55:28.799Z",
          "rateToken": "PGhvdDpyYXRlVG9rZW4geG1sbnM6aG90PSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9ob3RlbHMiIHBsYT0iMzYiIGNtaT0iMzYiIGNtYz0iMzYwMDEiIHJ0az0iZDM5MWEyNzktMzlkNC00MDAxLThjYzctMjMzZmEzM2ZmOWFlLTUwMDMiIHJ0cD0iNDgyMDQwIiBydGM9IjIwNDc3ODc1NSIgY2hhPSI3NzUuNjAiIG5hZD0iMSIgYmV0PSIxMyIgY3VyPSJCUkwiIGl6bz0iMzM4MzAiIGFncz0iVyIgYnJjPSIxMDAwIiBsYW49InB0X0JSIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgcGtnPSJWSEkiIHB4cz0iMzAiLz4",
          "operatedBy": {
            "name": "TAM",
            "iata": "JJ"
          },
          "routeRPH": 1,
          "numberOfStops": 1,
          "duration": 311,
          "legs": [
            {
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
            }
          ]
        }
      ]
    }
  ]
};	