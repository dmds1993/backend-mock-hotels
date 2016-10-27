var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  normalizedFlights();
	res.json(aeroHotelFlights);
});

router.get('/calendar', function(req,res) {
  res.json(aeroHotelFares);
});

router.get('/:rate_token', function(req, res, next) {
  var rateToken = req.params.rate_token;
  var base64RateToken = new Buffer(rateToken, 'base64').toString('utf8');

  if (base64RateToken.includes('rateToken')) {
    // Look first for the flight in the structure
    var _flight = findFlightByRateToken(rateToken);

    // If rate token found in old list
    if (typeof(_flight) === 'object') {
      res.json({ flight: keepOnlyRateToken(_flight, rateToken)});
    } else {
      res.json(flights);
      // res.json({flight: aeroHotelFlights.flights[0]});
    }
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

var aeroHotelFares = {
  "fares": [
    {
      "outboundDate": "2016-09-28T00:00:00.000Z",
      "inboundDate": "2016-09-29T00:00:00.000Z",
      "price": 515.7035352895036
    },
    {
      "outboundDate": "2016-09-29T00:00:00.000Z",
      "inboundDate": "2016-09-30T00:00:00.000Z",
      "price": 679.7453679377213
    },
    {
      "outboundDate": "2016-09-30T00:00:00.000Z",
      "inboundDate": "2016-10-01T00:00:00.000Z",
      "price": 215.37649258971214
    },
    {
      "outboundDate": "2016-10-01T00:00:00.000Z",
      "inboundDate": "2016-10-02T00:00:00.000Z",
      "price": 493.8587755197659
    },
    {
      "outboundDate": "2016-10-02T00:00:00.000Z",
      "inboundDate": "2016-10-03T00:00:00.000Z",
      "price": 242.54051609896123
    },
    {
      "outboundDate": "2016-10-03T00:00:00.000Z",
      "inboundDate": "2016-10-04T00:00:00.000Z",
      "price": 176.64681314490736
    },
    {
      "outboundDate": "2016-10-04T00:00:00.000Z",
      "inboundDate": "2016-10-05T00:00:00.000Z",
      "price": 674.2332850815728
    },
    {
      "outboundDate": "2016-10-05T00:00:00.000Z",
      "inboundDate": "2016-10-06T00:00:00.000Z",
      "price": 150.21624804940075
    },
    {
      "outboundDate": "2016-10-06T00:00:00.000Z",
      "inboundDate": "2016-10-07T00:00:00.000Z",
      "price": 154.58545559085906
    },
    {
      "outboundDate": "2016-10-07T00:00:00.000Z",
      "inboundDate": "2016-10-08T00:00:00.000Z",
      "price": 376.1220187181607
    },
    {
      "outboundDate": "2016-10-08T00:00:00.000Z",
      "inboundDate": "2016-10-09T00:00:00.000Z",
      "price": 503.5014384193346
    },
    {
      "outboundDate": "2016-10-09T00:00:00.000Z",
      "inboundDate": "2016-10-10T00:00:00.000Z",
      "price": 587.5670007197186
    },
    {
      "outboundDate": "2016-10-10T00:00:00.000Z",
      "inboundDate": "2016-10-11T00:00:00.000Z",
      "price": 36.46645366679877
    },
    {
      "outboundDate": "2016-10-11T00:00:00.000Z",
      "inboundDate": "2016-10-12T00:00:00.000Z",
      "price": 333.78637679852545
    },
    {
      "outboundDate": "2016-10-12T00:00:00.000Z",
      "inboundDate": "2016-10-13T00:00:00.000Z",
      "price": 271.8035643454641
    },
    {
      "outboundDate": "2016-10-13T00:00:00.000Z",
      "inboundDate": "2016-10-14T00:00:00.000Z",
      "price": 5.03513019066304
    },
    {
      "outboundDate": "2016-10-14T00:00:00.000Z",
      "inboundDate": "2016-10-15T00:00:00.000Z",
      "price": 480.5201690644026
    },
    {
      "outboundDate": "2016-10-15T00:00:00.000Z",
      "inboundDate": "2016-10-16T00:00:00.000Z",
      "price": 450.78412191942334
    },
    {
      "outboundDate": "2016-10-16T00:00:00.000Z",
      "inboundDate": "2016-10-17T00:00:00.000Z",
      "price": 635.5965040856972
    },
    {
      "outboundDate": "2016-10-17T00:00:00.000Z",
      "inboundDate": "2016-10-18T00:00:00.000Z",
      "price": 159.51451549772173
    },
    {
      "outboundDate": "2016-10-18T00:00:00.000Z",
      "inboundDate": "2016-10-19T00:00:00.000Z",
      "price": 582.1616193745285
    },
    {
      "outboundDate": "2016-10-19T00:00:00.000Z",
      "inboundDate": "2016-10-20T00:00:00.000Z",
      "price": 495.75579061638564
    },
    {
      "outboundDate": "2016-10-20T00:00:00.000Z",
      "inboundDate": "2016-10-21T00:00:00.000Z",
      "price": 322.9007873684168
    },
    {
      "outboundDate": "2016-10-21T00:00:00.000Z",
      "inboundDate": "2016-10-22T00:00:00.000Z",
      "price": 665.3710806975141
    },
    {
      "outboundDate": "2016-10-22T00:00:00.000Z",
      "inboundDate": "2016-10-23T00:00:00.000Z",
      "price": 648.0769279645756
    },
    {
      "outboundDate": "2016-10-23T00:00:00.000Z",
      "inboundDate": "2016-10-24T00:00:00.000Z",
      "price": 453.3631276804954
    },
    {
      "outboundDate": "2016-10-24T00:00:00.000Z",
      "inboundDate": "2016-10-25T00:00:00.000Z",
      "price": 386.3396764267236
    },
    {
      "outboundDate": "2016-10-25T00:00:00.000Z",
      "inboundDate": "2016-10-26T00:00:00.000Z",
      "price": 85.89265232440084
    },
    {
      "outboundDate": "2016-10-26T00:00:00.000Z",
      "inboundDate": "2016-10-27T00:00:00.000Z",
      "price": 251.5338579658419
    },
    {
      "outboundDate": "2016-10-27T00:00:00.000Z",
      "inboundDate": "2016-10-28T00:00:00.000Z",
      "price": 517.7592804655433
    },
    {
      "outboundDate": "2016-10-28T00:00:00.000Z",
      "inboundDate": "2016-10-29T00:00:00.000Z",
      "price": 49.1601140005514
    },
    {
      "outboundDate": "2016-10-29T00:00:00.000Z",
      "inboundDate": "2016-10-30T00:00:00.000Z",
      "price": 201.02415080182254
    },
    {
      "outboundDate": "2016-10-30T00:00:00.000Z",
      "inboundDate": "2016-10-31T00:00:00.000Z",
      "price": 491.2713232450187
    },
    {
      "outboundDate": "2016-10-31T00:00:00.000Z",
      "inboundDate": "2016-11-01T00:00:00.000Z",
      "price": 533.9414371643215
    },
    {
      "outboundDate": "2016-11-01T00:00:00.000Z",
      "inboundDate": "2016-11-02T00:00:00.000Z",
      "price": 675.5979010602459
    },
    {
      "outboundDate": "2016-11-02T00:00:00.000Z",
      "inboundDate": "2016-11-03T00:00:00.000Z",
      "price": 398.900861851871
    },
    {
      "outboundDate": "2016-11-03T00:00:00.000Z",
      "inboundDate": "2016-11-04T00:00:00.000Z",
      "price": 522.4980601808056
    },
    {
      "outboundDate": "2016-11-04T00:00:00.000Z",
      "inboundDate": "2016-11-05T00:00:00.000Z",
      "price": 3.1683264765888453
    },
    {
      "outboundDate": "2016-11-05T00:00:00.000Z",
      "inboundDate": "2016-11-06T00:00:00.000Z",
      "price": 447.78296975418925
    },
    {
      "outboundDate": "2016-11-06T00:00:00.000Z",
      "inboundDate": "2016-11-07T00:00:00.000Z",
      "price": 288.9605254866183
    },
    {
      "outboundDate": "2016-11-07T00:00:00.000Z",
      "inboundDate": "2016-11-08T00:00:00.000Z",
      "price": 621.7681049602106
    },
    {
      "outboundDate": "2016-11-08T00:00:00.000Z",
      "inboundDate": "2016-11-09T00:00:00.000Z",
      "price": 622.3751671845093
    },
    {
      "outboundDate": "2016-11-09T00:00:00.000Z",
      "inboundDate": "2016-11-10T00:00:00.000Z",
      "price": 491.05721516534686
    },
    {
      "outboundDate": "2016-11-10T00:00:00.000Z",
      "inboundDate": "2016-11-11T00:00:00.000Z",
      "price": 298.24344399385154
    },
    {
      "outboundDate": "2016-11-11T00:00:00.000Z",
      "inboundDate": "2016-11-12T00:00:00.000Z",
      "price": 686.7188211996108
    },
    {
      "outboundDate": "2016-11-12T00:00:00.000Z",
      "inboundDate": "2016-11-13T00:00:00.000Z",
      "price": 611.0666154650971
    },
    {
      "outboundDate": "2016-11-13T00:00:00.000Z",
      "inboundDate": "2016-11-14T00:00:00.000Z",
      "price": 265.4682416468859
    },
    {
      "outboundDate": "2016-11-14T00:00:00.000Z",
      "inboundDate": "2016-11-15T00:00:00.000Z",
      "price": 488.10148218180984
    },
    {
      "outboundDate": "2016-11-15T00:00:00.000Z",
      "inboundDate": "2016-11-16T00:00:00.000Z",
      "price": 55.07071795873344
    },
    {
      "outboundDate": "2016-11-16T00:00:00.000Z",
      "inboundDate": "2016-11-17T00:00:00.000Z",
      "price": 290.2556971879676
    },
    {
      "outboundDate": "2016-11-17T00:00:00.000Z",
      "inboundDate": "2016-11-18T00:00:00.000Z",
      "price": 16.051511745899916
    },
    {
      "outboundDate": "2016-11-18T00:00:00.000Z",
      "inboundDate": "2016-11-19T00:00:00.000Z",
      "price": 236.78353731520474
    },
    {
      "outboundDate": "2016-11-19T00:00:00.000Z",
      "inboundDate": "2016-11-20T00:00:00.000Z",
      "price": 543.9398722723126
    },
    {
      "outboundDate": "2016-11-20T00:00:00.000Z",
      "inboundDate": "2016-11-21T00:00:00.000Z",
      "price": 261.56239297706634
    },
    {
      "outboundDate": "2016-11-21T00:00:00.000Z",
      "inboundDate": "2016-11-22T00:00:00.000Z",
      "price": 177.50741159543395
    },
    {
      "outboundDate": "2016-11-22T00:00:00.000Z",
      "inboundDate": "2016-11-23T00:00:00.000Z",
      "price": 685.9567650826648
    },
    {
      "outboundDate": "2016-11-23T00:00:00.000Z",
      "inboundDate": "2016-11-24T00:00:00.000Z",
      "price": 204.58139404654503
    },
    {
      "outboundDate": "2016-11-24T00:00:00.000Z",
      "inboundDate": "2016-11-25T00:00:00.000Z",
      "price": 395.9937579696998
    },
    {
      "outboundDate": "2016-11-25T00:00:00.000Z",
      "inboundDate": "2016-11-26T00:00:00.000Z",
      "price": 510.8301682630554
    },
    {
      "outboundDate": "2016-11-26T00:00:00.000Z",
      "inboundDate": "2016-11-27T00:00:00.000Z",
      "price": 403.7193753523752
    }
  ]
}

/*
  Remove all other rateTokens excepto the one passed.
  Also remove all other segments
*/
keepOnlyRateToken = function(flight, rateToken) {
  var foundRateToken;
  var foundSegments = [];

  for (var i=0; i < flight.rateTokens.length; i++) {
    if (flight.rateTokens[i].rateToken === rateToken) {
      foundRateToken = flight.rateTokens[i];
    }
  }

  for (var i=0; i < flight.segments.length; i++) {
    for (var j=0; j < 2; j++ ) {
      if (flight.segments[i].rph === foundRateToken.segmentRPHGroup[j]) {
        foundSegments[j] = flight.segments[i];
      }
    }
  }

  flight.rateTokens = [ foundRateToken ];
  flight.segments = foundSegments;

  return {
    rateTokens: [ foundRateToken ],
    segments: foundSegments,
    fareGroup: flight.fareGroup,
  }
}
/*
  Returns the flights with a valid rateToken format
*/
normalizedFlights = function() {

  for( var i=0; i < aeroHotelFlights.flights.length; i++ ) {
    var _flight = aeroHotelFlights.flights[i];

    var _rateTemplate = '<hot:rateToken xmlns:hot="http://cvc.com.br/model/hotels" pla="36" cmi="36" cmc="36001" rtk="" rtp="482040" rtc="204778755" cha="775.60" nad="1" bet="13" cur="BRL" izo="33830" ags="W" brc="1000" lan="pt_BR" din="2016-10-28" dou="2016-10-29" pkg="VHI" pxs="30"/>';

    // Replace old rateToken UUID format with new base64 format
    for (var j=0; j < _flight.rateTokens.length; j++) {
      var _rateToken = _flight.rateTokens[j].rateToken;
      if ( /\w+-\w+-\w+-\w+-\w+/.test(_rateToken) ) {
        _rateToken = _rateTemplate.replace('rtk=""', `rtk="${_rateToken}"`);
        _flight.rateTokens[j].rateToken = new Buffer(_rateToken).toString('base64');
      }
    }
  }

  return aeroHotelFlights.flights;
};

/*
  Returns the flight with the given rateToken
  This function doesnt change the flight object
*/
findFlightByRateToken = function(rateToken) {
  var _flights = normalizedFlights();

  for (var i = 0; i < _flights.length; i++ ) {
    var flight = _flights[i];

    for (var j = 0; j < flight.rateTokens.length; j++ ) {
      if (rateToken === flight.rateTokens[j].rateToken) {
        return flight;
      }
    }
  }

  return undefined;
};

var aeroHotelFlights = {
  "flights": [
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 529.8796,
        "priceWithoutTax": 321.164,
        "fares": [
          {
            "priceWithTax": 199.7377,
            "priceWithoutTax": 160.582,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KKXW",
                "description": "V6Jcu(qX^NFM&Oxu",
                "percent": 36.5439,
                "amount": 65.2021
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:38:00.000Z",
          "arrival": "VCP",
          "arrivalDate": "2016-09-28T17:43:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 1,
          "duration": 127,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 9697,
              "duration": 65,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "VCP",
              "departureDate": "2016-09-28T16:38:00.000Z",
              "arrivalDate": "2016-09-28T17:43:00.000Z",
              "aircraftCode": "WNBT",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T16:13:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:44:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 312,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 5676,
              "duration": 31,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:13:00.000Z",
              "arrivalDate": "2016-09-20T16:44:00.000Z",
              "aircraftCode": "WKDX",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:17:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T17:20:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 2,
          "duration": 93,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 7838,
              "duration": 63,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:17:00.000Z",
              "arrivalDate": "2016-09-28T17:20:00.000Z",
              "aircraftCode": "WGCD",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:13:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T15:37:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 0,
          "duration": 138,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 8571,
              "duration": 24,
              "numberOfStops": 1,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:13:00.000Z",
              "arrivalDate": "2016-09-20T15:37:00.000Z",
              "aircraftCode": "WBBS",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:11:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T16:26:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 1,
          "duration": 284,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 2221,
              "duration": 33,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T15:11:00.000Z",
              "arrivalDate": "2016-09-28T15:44:00.000Z",
              "aircraftCode": "WMTM",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 1314,
              "duration": 24,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:02:00.000Z",
              "arrivalDate": "2016-09-28T16:26:00.000Z",
              "aircraftCode": "WIPP",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "aabfb951-7397-4724-a0c7-169ddcd9b0db",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "f521f8ce-fba4-4a20-b15e-d0eeeb1a2693",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "bacb679a-ffb6-4ecd-9b3f-f7c8111cb6a7",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "7523507b-98ae-4dfa-aec8-8b706c129460",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "da59a2ed-13cc-4234-a34d-fa79c44f377d",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "e0cc5b6f-574f-4543-af6e-605989848d0c",
          "segmentRPHGroup": [
            4,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 531.3868,
        "priceWithoutTax": 377.0042,
        "fares": [
          {
            "priceWithTax": 210.251,
            "priceWithoutTax": 188.5021,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KZEX",
                "description": "L0K2tMSx",
                "percent": 70.8985,
                "amount": 55.4424
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:38:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T19:13:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 0,
          "duration": 212,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 8818,
              "duration": 87,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T16:38:00.000Z",
              "arrivalDate": "2016-09-28T18:05:00.000Z",
              "aircraftCode": "KVLH",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 2751,
              "duration": 46,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "VCP",
              "departureDate": "2016-09-28T17:43:00.000Z",
              "arrivalDate": "2016-09-28T18:29:00.000Z",
              "aircraftCode": "KPSE",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 8679,
              "duration": 66,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "CGH",
              "departureDate": "2016-09-28T18:07:00.000Z",
              "arrivalDate": "2016-09-28T19:13:00.000Z",
              "aircraftCode": "KYCM",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:34:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:03:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 169,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 9687,
              "duration": 29,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:34:00.000Z",
              "arrivalDate": "2016-09-20T16:03:00.000Z",
              "aircraftCode": "KFRF",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:53:00.000Z",
          "arrival": "VCP",
          "arrivalDate": "2016-09-28T16:38:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 61,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 3568,
              "duration": 45,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "VCP",
              "departureDate": "2016-09-28T15:53:00.000Z",
              "arrivalDate": "2016-09-28T16:38:00.000Z",
              "aircraftCode": "KTZC",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:00:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T18:16:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 1,
          "duration": 399,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 3507,
              "duration": 13,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "CNF",
              "departureDate": "2016-09-20T16:00:00.000Z",
              "arrivalDate": "2016-09-20T16:13:00.000Z",
              "aircraftCode": "KFGA",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5122,
              "duration": 16,
              "numberOfStops": 1,
              "departure": "CNF",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:20:00.000Z",
              "arrivalDate": "2016-09-20T17:36:00.000Z",
              "aircraftCode": "KQOC",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 2834,
              "duration": 41,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:35:00.000Z",
              "arrivalDate": "2016-09-20T18:16:00.000Z",
              "aircraftCode": "WVJQ",
              "seatClass": 1
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "893f4cc2-e29c-4b1f-91bb-452523480044",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "e78b18b6-ac6a-437f-b4f1-c74e3bb14c9d",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "d16d492c-237a-4908-8003-ee1d36e15659",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "489a5b52-6e9d-4ee3-a511-5a4fe8f3f978",
          "segmentRPHGroup": [
            2,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 535.8604,
        "priceWithoutTax": 361.1938,
        "fares": [
          {
            "priceWithTax": 207.2942,
            "priceWithoutTax": 180.5969,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "WEZT",
                "description": "cPJfU8Y8",
                "percent": 58.997,
                "amount": 60.636
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:35:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T17:06:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 2,
          "duration": 334,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 2623,
              "duration": 91,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "CGH",
              "departureDate": "2016-09-28T15:35:00.000Z",
              "arrivalDate": "2016-09-28T17:06:00.000Z",
              "aircraftCode": "WXTG",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:12:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T15:43:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 2,
          "duration": 343,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 1295,
              "duration": 31,
              "numberOfStops": 0,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:12:00.000Z",
              "arrivalDate": "2016-09-20T15:43:00.000Z",
              "aircraftCode": "KBXC",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:04:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T20:21:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 2,
          "duration": 136,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 4349,
              "duration": 30,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T16:04:00.000Z",
              "arrivalDate": "2016-09-28T16:34:00.000Z",
              "aircraftCode": "WPWF",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 2854,
              "duration": 21,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "VCP",
              "departureDate": "2016-09-28T17:41:00.000Z",
              "arrivalDate": "2016-09-28T18:02:00.000Z",
              "aircraftCode": "KFGX",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 6329,
              "duration": 72,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "GRU",
              "departureDate": "2016-09-28T19:09:00.000Z",
              "arrivalDate": "2016-09-28T20:21:00.000Z",
              "aircraftCode": "WLJF",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:15:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T15:27:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 1,
          "duration": 313,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 8079,
              "duration": 12,
              "numberOfStops": 1,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:15:00.000Z",
              "arrivalDate": "2016-09-20T15:27:00.000Z",
              "aircraftCode": "KTRQ",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:42:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T17:40:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 0,
          "duration": 204,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 7315,
              "duration": 70,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:42:00.000Z",
              "arrivalDate": "2016-09-28T16:52:00.000Z",
              "aircraftCode": "WUYE",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 8474,
              "duration": 85,
              "numberOfStops": 1,
              "departure": "GIG",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:15:00.000Z",
              "arrivalDate": "2016-09-28T17:40:00.000Z",
              "aircraftCode": "KHWK",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T15:48:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T19:15:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 5,
          "numberOfStops": 2,
          "duration": 232,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 6548,
              "duration": 22,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "CNF",
              "departureDate": "2016-09-20T15:48:00.000Z",
              "arrivalDate": "2016-09-20T16:10:00.000Z",
              "aircraftCode": "WEJY",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 4947,
              "duration": 50,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:11:00.000Z",
              "arrivalDate": "2016-09-20T18:01:00.000Z",
              "aircraftCode": "WVQR",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 2187,
              "duration": 44,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "SSA",
              "departureDate": "2016-09-20T18:31:00.000Z",
              "arrivalDate": "2016-09-20T19:15:00.000Z",
              "aircraftCode": "WXDT",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "e8309424-af03-4ead-8494-928389d5e646",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "1620947e-d9bd-40bf-a265-ac2ec6491b93",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "664e38b9-3884-4156-b3c6-d9b6e2e2031f",
          "segmentRPHGroup": [
            0,
            5
          ]
        },
        {
          "rateToken": "40d8a059-05b1-4b0c-afb6-6d80272a07e4",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "4fb6cdb0-eda7-4c9c-b5e3-ecd807c3bd2c",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "a9e88bef-6af3-4dee-adef-1af7bdfd2c46",
          "segmentRPHGroup": [
            2,
            5
          ]
        },
        {
          "rateToken": "e4de4809-9e6a-4ad2-9003-01ebb629bb13",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "cee348b2-64cb-4518-8fcb-d102fe29baf4",
          "segmentRPHGroup": [
            4,
            3
          ]
        },
        {
          "rateToken": "325fef3c-dd77-4c09-b764-bcf8d9d8871d",
          "segmentRPHGroup": [
            4,
            5
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 555.782,
        "priceWithoutTax": 337.139,
        "fares": [
          {
            "priceWithTax": 213.6841,
            "priceWithoutTax": 168.5695,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "WYVF",
                "description": "M[3[k6Y!g6v8nkz",
                "percent": 53.1539,
                "amount": 64.2069
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:33:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T17:27:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 0,
          "duration": 374,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 5743,
              "duration": 54,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:33:00.000Z",
              "arrivalDate": "2016-09-28T17:27:00.000Z",
              "aircraftCode": "WVNI",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:07:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T17:02:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 294,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 2139,
              "duration": 55,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:07:00.000Z",
              "arrivalDate": "2016-09-20T17:02:00.000Z",
              "aircraftCode": "KUCF",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:36:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T18:17:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 237,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 1130,
              "duration": 66,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:36:00.000Z",
              "arrivalDate": "2016-09-28T16:42:00.000Z",
              "aircraftCode": "WCAY",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5882,
              "duration": 99,
              "numberOfStops": 1,
              "departure": "GIG",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:33:00.000Z",
              "arrivalDate": "2016-09-28T18:12:00.000Z",
              "aircraftCode": "KYFP",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 9220,
              "duration": 89,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:48:00.000Z",
              "arrivalDate": "2016-09-28T18:17:00.000Z",
              "aircraftCode": "WELB",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:54:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:27:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 1,
          "duration": 229,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 3734,
              "duration": 33,
              "numberOfStops": 1,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:54:00.000Z",
              "arrivalDate": "2016-09-20T16:27:00.000Z",
              "aircraftCode": "KBCR",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:23:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T17:15:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 1,
          "duration": 305,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5764,
              "duration": 37,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:23:00.000Z",
              "arrivalDate": "2016-09-28T16:00:00.000Z",
              "aircraftCode": "WIJR",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 1974,
              "duration": 27,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:48:00.000Z",
              "arrivalDate": "2016-09-28T17:15:00.000Z",
              "aircraftCode": "KAJT",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:46:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:13:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 0,
          "rph": 5,
          "numberOfStops": 1,
          "duration": 253,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 2913,
              "duration": 27,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:46:00.000Z",
              "arrivalDate": "2016-09-20T16:13:00.000Z",
              "aircraftCode": "KJRD",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "1005a6f5-1266-42c6-b4ed-cfcc415aec40",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "cf8200d0-3e93-4eae-9a9a-156fcb97beab",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "3d85d8b4-74af-4802-ad47-146149524c10",
          "segmentRPHGroup": [
            0,
            5
          ]
        },
        {
          "rateToken": "cec55ced-d900-4e7e-9f35-8e4131be77b2",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "dc08c298-948e-4805-9035-b4254a354720",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "48773538-69e1-4b72-a665-6081c32bfed6",
          "segmentRPHGroup": [
            2,
            5
          ]
        },
        {
          "rateToken": "444526f5-32f2-4e79-9430-99084269b8ce",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "73ed0b47-8287-43db-8efd-d782d81bc079",
          "segmentRPHGroup": [
            4,
            3
          ]
        },
        {
          "rateToken": "d6648cb0-5cdc-4f4e-8e9a-5759946c8de7",
          "segmentRPHGroup": [
            4,
            5
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 561.587,
        "priceWithoutTax": 258.0444,
        "fares": [
          {
            "priceWithTax": 219.9648,
            "priceWithoutTax": 129.0222,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "WPAG",
                "description": "q]LIoSIwPpl)",
                "percent": 92.9602,
                "amount": 60.8287
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:15:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T15:38:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 2,
          "duration": 388,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 8130,
              "duration": 23,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CGH",
              "departureDate": "2016-09-28T15:15:00.000Z",
              "arrivalDate": "2016-09-28T15:38:00.000Z",
              "aircraftCode": "KVEM",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T16:28:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T18:03:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 1,
          "duration": 189,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 4604,
              "duration": 95,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:28:00.000Z",
              "arrivalDate": "2016-09-20T18:03:00.000Z",
              "aircraftCode": "WSKA",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:30:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T18:38:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 2,
          "duration": 212,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 2281,
              "duration": 4,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T16:30:00.000Z",
              "arrivalDate": "2016-09-28T16:34:00.000Z",
              "aircraftCode": "WMLO",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 4982,
              "duration": 72,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "GRU",
              "departureDate": "2016-09-28T17:58:00.000Z",
              "arrivalDate": "2016-09-28T19:10:00.000Z",
              "aircraftCode": "KIRY",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 8436,
              "duration": 4,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "GRU",
              "departureDate": "2016-09-28T18:34:00.000Z",
              "arrivalDate": "2016-09-28T18:38:00.000Z",
              "aircraftCode": "WNHW",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:14:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:33:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 0,
          "duration": 268,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 3073,
              "duration": 19,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:14:00.000Z",
              "arrivalDate": "2016-09-20T16:33:00.000Z",
              "aircraftCode": "WHNM",
              "seatClass": 3
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "f3ee8be4-16f7-4f30-87f6-11c7b089096a",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "b5a7ad75-4225-4f56-928b-d9b4479184ae",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "dcb473cc-c8a4-40c5-b413-8b911ecc6383",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "93613617-b4e5-4269-9948-4956264b4bca",
          "segmentRPHGroup": [
            2,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 571.8482,
        "priceWithoutTax": 254.2338,
        "fares": [
          {
            "priceWithTax": 209.4737,
            "priceWithoutTax": 127.1169,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KIHK",
                "description": "jRB#qVzq7ko5",
                "percent": 23.4435,
                "amount": 76.4504
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:28:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T17:16:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 1,
          "duration": 282,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 7022,
              "duration": 33,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T15:28:00.000Z",
              "arrivalDate": "2016-09-28T16:01:00.000Z",
              "aircraftCode": "WXUW",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 2902,
              "duration": 59,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:17:00.000Z",
              "arrivalDate": "2016-09-28T17:16:00.000Z",
              "aircraftCode": "WWXO",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:52:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:55:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 60,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 9443,
              "duration": 63,
              "numberOfStops": 1,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:52:00.000Z",
              "arrivalDate": "2016-09-20T16:55:00.000Z",
              "aircraftCode": "WLDS",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:03:00.000Z",
          "arrival": "VCP",
          "arrivalDate": "2016-09-28T16:36:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 57,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 5035,
              "duration": 93,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "VCP",
              "departureDate": "2016-09-28T15:03:00.000Z",
              "arrivalDate": "2016-09-28T16:36:00.000Z",
              "aircraftCode": "WCMO",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T15:09:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T15:47:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 2,
          "duration": 242,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 2258,
              "duration": 38,
              "numberOfStops": 0,
              "departure": "CGH",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:09:00.000Z",
              "arrivalDate": "2016-09-20T15:47:00.000Z",
              "aircraftCode": "WANJ",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "fb2bf132-86e9-4cb0-ac1a-4e83568f2404",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "9de82f5a-e8cc-4b9d-8f36-fcdb457181dc",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "726a0376-4639-4e13-b43c-95ad634b4dda",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "7c5ce63a-8602-4e1e-9d9a-161bf66053f2",
          "segmentRPHGroup": [
            2,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 577.0862,
        "priceWithoutTax": 281.485,
        "fares": [
          {
            "priceWithTax": 217.7256,
            "priceWithoutTax": 140.7425,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KSOB",
                "description": "g]j@Iuek^SW",
                "percent": 45.8906,
                "amount": 70.8175
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:08:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T16:56:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 1,
          "duration": 271,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 4632,
              "duration": 6,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T15:08:00.000Z",
              "arrivalDate": "2016-09-28T15:14:00.000Z",
              "aircraftCode": "WAHK",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 5431,
              "duration": 19,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:37:00.000Z",
              "arrivalDate": "2016-09-28T16:56:00.000Z",
              "aircraftCode": "WLYB",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:08:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:42:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 2,
          "duration": 286,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 6393,
              "duration": 94,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:08:00.000Z",
              "arrivalDate": "2016-09-20T16:42:00.000Z",
              "aircraftCode": "KCFY",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:37:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T18:57:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 221,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 7204,
              "duration": 11,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:37:00.000Z",
              "arrivalDate": "2016-09-28T15:48:00.000Z",
              "aircraftCode": "WHHD",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 9287,
              "duration": 36,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "VCP",
              "departureDate": "2016-09-28T17:12:00.000Z",
              "arrivalDate": "2016-09-28T17:48:00.000Z",
              "aircraftCode": "WLZW",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 2378,
              "duration": 90,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "CGH",
              "departureDate": "2016-09-28T17:27:00.000Z",
              "arrivalDate": "2016-09-28T18:57:00.000Z",
              "aircraftCode": "KPAY",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:36:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:48:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 1,
          "duration": 359,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5759,
              "duration": 12,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:36:00.000Z",
              "arrivalDate": "2016-09-20T16:48:00.000Z",
              "aircraftCode": "WHGQ",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:02:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T15:49:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 2,
          "duration": 335,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 9598,
              "duration": 11,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:02:00.000Z",
              "arrivalDate": "2016-09-28T15:13:00.000Z",
              "aircraftCode": "WBZC",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 5558,
              "duration": 47,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "GRU",
              "departureDate": "2016-09-28T15:20:00.000Z",
              "arrivalDate": "2016-09-28T16:07:00.000Z",
              "aircraftCode": "WLIK",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 3866,
              "duration": 1,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "GRU",
              "departureDate": "2016-09-28T15:48:00.000Z",
              "arrivalDate": "2016-09-28T15:49:00.000Z",
              "aircraftCode": "KSAX",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:22:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T17:35:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 0,
          "rph": 5,
          "numberOfStops": 0,
          "duration": 346,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 8768,
              "duration": 73,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:22:00.000Z",
              "arrivalDate": "2016-09-20T17:35:00.000Z",
              "aircraftCode": "KOSX",
              "seatClass": 1
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "6144a477-5111-48a7-96ed-366412a9e766",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "bebac107-62ff-4213-a36f-e6561c749db3",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "fd102e9f-76a0-40a1-8896-6824999448b1",
          "segmentRPHGroup": [
            0,
            5
          ]
        },
        {
          "rateToken": "c4efd583-b133-46b9-9f3e-dcf0142dd31f",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "42db679f-4a7b-4b59-8cba-71b464e74e67",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "159b4ae9-a5be-47b4-a77e-8cdd476ad8cf",
          "segmentRPHGroup": [
            2,
            5
          ]
        },
        {
          "rateToken": "33a22514-fa2b-434a-bec6-353be3845c72",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "7142ddc5-b5d5-4e4f-975a-4a907b7e5146",
          "segmentRPHGroup": [
            4,
            3
          ]
        },
        {
          "rateToken": "67212632-c836-4de1-b57c-dabbd902704a",
          "segmentRPHGroup": [
            4,
            5
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 593.7594,
        "priceWithoutTax": 336.3282,
        "fares": [
          {
            "priceWithTax": 212.435,
            "priceWithoutTax": 168.1641,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KAQF",
                "description": "NmaChhswi6!Bse@D",
                "percent": 5.9112,
                "amount": 84.4447
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:23:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T17:14:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 0,
          "duration": 247,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 9034,
              "duration": 88,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T15:23:00.000Z",
              "arrivalDate": "2016-09-28T16:51:00.000Z",
              "aircraftCode": "KYGG",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 4182,
              "duration": 91,
              "numberOfStops": 1,
              "departure": "CNF",
              "arrival": "GRU",
              "departureDate": "2016-09-28T15:43:00.000Z",
              "arrivalDate": "2016-09-28T17:14:00.000Z",
              "aircraftCode": "WFIH",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:39:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T18:23:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 332,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 5941,
              "duration": 26,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "GIG",
              "departureDate": "2016-09-20T16:39:00.000Z",
              "arrivalDate": "2016-09-20T17:05:00.000Z",
              "aircraftCode": "KTLQ",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 2930,
              "duration": 96,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:47:00.000Z",
              "arrivalDate": "2016-09-20T18:23:00.000Z",
              "aircraftCode": "WTCD",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:26:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T18:07:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 224,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5469,
              "duration": 47,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T16:26:00.000Z",
              "arrivalDate": "2016-09-28T17:13:00.000Z",
              "aircraftCode": "WSZW",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 9120,
              "duration": 15,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "GRU",
              "departureDate": "2016-09-28T16:42:00.000Z",
              "arrivalDate": "2016-09-28T16:57:00.000Z",
              "aircraftCode": "KWXW",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 8705,
              "duration": 53,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "GRU",
              "departureDate": "2016-09-28T17:14:00.000Z",
              "arrivalDate": "2016-09-28T18:07:00.000Z",
              "aircraftCode": "KYVW",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:33:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T19:46:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 0,
          "duration": 392,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 3976,
              "duration": 46,
              "numberOfStops": 1,
              "departure": "GRU",
              "arrival": "CNF",
              "departureDate": "2016-09-20T16:33:00.000Z",
              "arrivalDate": "2016-09-20T17:19:00.000Z",
              "aircraftCode": "KYRS",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 6080,
              "duration": 56,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:57:00.000Z",
              "arrivalDate": "2016-09-20T18:53:00.000Z",
              "aircraftCode": "WHYL",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 4047,
              "duration": 58,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "SSA",
              "departureDate": "2016-09-20T18:48:00.000Z",
              "arrivalDate": "2016-09-20T19:46:00.000Z",
              "aircraftCode": "WXDE",
              "seatClass": 1
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "630c7c0c-fa40-46bf-8ea4-3e6882e3e00c",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "a60d0c81-3306-4da0-8c60-02811335df49",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "3d9437f6-9d74-4e2b-8927-45d4d32db2ca",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "e8af717b-ffba-412f-ae83-c51908bf9e26",
          "segmentRPHGroup": [
            2,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 596.0652,
        "priceWithoutTax": 229.7404,
        "fares": [
          {
            "priceWithTax": 229.532,
            "priceWithoutTax": 114.8702,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "WYWV",
                "description": "mt@f&[B!Tbi0Pq(u!",
                "percent": 77.4449,
                "amount": 68.5006
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:16:00.000Z",
          "arrival": "GRU",
          "arrivalDate": "2016-09-28T20:41:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 0,
          "duration": 301,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 4939,
              "duration": 67,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T16:16:00.000Z",
              "arrivalDate": "2016-09-28T17:23:00.000Z",
              "aircraftCode": "KMGW",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 5732,
              "duration": 80,
              "numberOfStops": 0,
              "departure": "CNF",
              "arrival": "VCP",
              "departureDate": "2016-09-28T17:40:00.000Z",
              "arrivalDate": "2016-09-28T19:00:00.000Z",
              "aircraftCode": "WOKF",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 3433,
              "duration": 84,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "GRU",
              "departureDate": "2016-09-28T19:17:00.000Z",
              "arrivalDate": "2016-09-28T20:41:00.000Z",
              "aircraftCode": "WBQJ",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:44:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T18:26:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 0,
          "duration": 377,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 6113,
              "duration": 90,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "GIG",
              "departureDate": "2016-09-20T15:44:00.000Z",
              "arrivalDate": "2016-09-20T17:14:00.000Z",
              "aircraftCode": "KSUI",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 3631,
              "duration": 78,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:51:00.000Z",
              "arrivalDate": "2016-09-20T18:09:00.000Z",
              "aircraftCode": "KNNN",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 8806,
              "duration": 59,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:27:00.000Z",
              "arrivalDate": "2016-09-20T18:26:00.000Z",
              "aircraftCode": "WZCL",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:09:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T16:29:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 0,
          "duration": 219,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 5873,
              "duration": 20,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:09:00.000Z",
              "arrivalDate": "2016-09-28T16:29:00.000Z",
              "aircraftCode": "WMZO",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "CGH",
          "departureDate": "2016-09-20T16:31:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T19:25:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 1,
          "duration": 251,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 6183,
              "duration": 25,
              "numberOfStops": 1,
              "departure": "CGH",
              "arrival": "CNF",
              "departureDate": "2016-09-20T16:31:00.000Z",
              "arrivalDate": "2016-09-20T16:56:00.000Z",
              "aircraftCode": "WFUF",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 7807,
              "duration": 30,
              "numberOfStops": 1,
              "departure": "CNF",
              "arrival": "SSA",
              "departureDate": "2016-09-20T17:34:00.000Z",
              "arrivalDate": "2016-09-20T18:04:00.000Z",
              "aircraftCode": "WXYD",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 3795,
              "duration": 22,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "SSA",
              "departureDate": "2016-09-20T19:03:00.000Z",
              "arrivalDate": "2016-09-20T19:25:00.000Z",
              "aircraftCode": "KBYA",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T16:31:00.000Z",
          "arrival": "VCP",
          "arrivalDate": "2016-09-28T17:02:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 2,
          "duration": 51,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 1539,
              "duration": 28,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "CNF",
              "departureDate": "2016-09-28T16:31:00.000Z",
              "arrivalDate": "2016-09-28T16:59:00.000Z",
              "aircraftCode": "KVSR",
              "seatClass": 1
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 1936,
              "duration": 0,
              "numberOfStops": 1,
              "departure": "CNF",
              "arrival": "VCP",
              "departureDate": "2016-09-28T17:02:00.000Z",
              "arrivalDate": "2016-09-28T17:02:00.000Z",
              "aircraftCode": "WLPP",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "39848eb6-ca78-4f09-9227-8c196b19ecda",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "a35726a6-fef2-4acb-883c-d8269986783d",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "61f109a0-8a72-4505-95cb-87a991ae9900",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "8d58adeb-bbc8-478d-b355-e77d5bb79ee2",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "d4a72552-59ce-4040-9d35-49df3b48e8f0",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "e237b323-1e2e-4075-9765-7b5fb9e0fbea",
          "segmentRPHGroup": [
            4,
            3
          ]
        }
      ]
    },
    {
      "fareGroup": {
        "currency": "BRL",
        "priceWithTax": 596.2556,
        "priceWithoutTax": 323.6752,
        "fares": [
          {
            "priceWithTax": 211.2804,
            "priceWithoutTax": 161.8376,
            "passengersCount": 2,
            "passengersType": "ADT",
            "taxes": [
              {
                "code": "KIBR",
                "description": "11nMBwZzOf%2!",
                "percent": 25.9359,
                "amount": 86.8474
              }
            ]
          }
        ]
      },
      "segments": [
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:17:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T16:16:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 0,
          "numberOfStops": 1,
          "duration": 264,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 1162,
              "duration": 41,
              "numberOfStops": 1,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:17:00.000Z",
              "arrivalDate": "2016-09-28T15:58:00.000Z",
              "aircraftCode": "KTKX",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 4915,
              "duration": 44,
              "numberOfStops": 0,
              "departure": "GIG",
              "arrival": "CGH",
              "departureDate": "2016-09-28T15:32:00.000Z",
              "arrivalDate": "2016-09-28T16:16:00.000Z",
              "aircraftCode": "KSVY",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "GRU",
          "departureDate": "2016-09-20T16:32:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T17:31:00.000Z",
          "operatedBy": {
            "iata": "AD",
            "name": "AZUL"
          },
          "routeRPH": 0,
          "rph": 1,
          "numberOfStops": 1,
          "duration": 236,
          "legs": [
            {
              "operatedBy": {
                "iata": "AD",
                "name": "AZUL"
              },
              "flightNumber": 9479,
              "duration": 59,
              "numberOfStops": 0,
              "departure": "GRU",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:32:00.000Z",
              "arrivalDate": "2016-09-20T17:31:00.000Z",
              "aircraftCode": "KJHF",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:42:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T18:23:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 1,
          "rph": 2,
          "numberOfStops": 1,
          "duration": 146,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 6972,
              "duration": 16,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:42:00.000Z",
              "arrivalDate": "2016-09-28T15:58:00.000Z",
              "aircraftCode": "KFFT",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 7704,
              "duration": 29,
              "numberOfStops": 1,
              "departure": "GIG",
              "arrival": "CGH",
              "departureDate": "2016-09-28T16:14:00.000Z",
              "arrivalDate": "2016-09-28T16:43:00.000Z",
              "aircraftCode": "KWUD",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 6905,
              "duration": 37,
              "numberOfStops": 0,
              "departure": "CGH",
              "arrival": "CGH",
              "departureDate": "2016-09-28T17:46:00.000Z",
              "arrivalDate": "2016-09-28T18:23:00.000Z",
              "aircraftCode": "WORS",
              "seatClass": 3
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:23:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T17:40:00.000Z",
          "operatedBy": {
            "iata": "AV",
            "name": "AVIANCA"
          },
          "routeRPH": 0,
          "rph": 3,
          "numberOfStops": 2,
          "duration": 249,
          "legs": [
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 4874,
              "duration": 83,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "GIG",
              "departureDate": "2016-09-20T15:23:00.000Z",
              "arrivalDate": "2016-09-20T16:46:00.000Z",
              "aircraftCode": "WBNY",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "AV",
                "name": "AVIANCA"
              },
              "flightNumber": 8653,
              "duration": 54,
              "numberOfStops": 1,
              "departure": "GIG",
              "arrival": "SSA",
              "departureDate": "2016-09-20T16:46:00.000Z",
              "arrivalDate": "2016-09-20T17:40:00.000Z",
              "aircraftCode": "WDRZ",
              "seatClass": 1
            }
          ]
        },
        {
          "departure": "SSA",
          "departureDate": "2016-09-28T15:11:00.000Z",
          "arrival": "CGH",
          "arrivalDate": "2016-09-28T18:59:00.000Z",
          "operatedBy": {
            "iata": "JJ",
            "name": "TAM"
          },
          "routeRPH": 1,
          "rph": 4,
          "numberOfStops": 1,
          "duration": 199,
          "legs": [
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 1214,
              "duration": 61,
              "numberOfStops": 0,
              "departure": "SSA",
              "arrival": "GIG",
              "departureDate": "2016-09-28T15:11:00.000Z",
              "arrivalDate": "2016-09-28T16:12:00.000Z",
              "aircraftCode": "WEGV",
              "seatClass": 2
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 5476,
              "duration": 97,
              "numberOfStops": 1,
              "departure": "GIG",
              "arrival": "VCP",
              "departureDate": "2016-09-28T16:10:00.000Z",
              "arrivalDate": "2016-09-28T17:47:00.000Z",
              "aircraftCode": "WWXN",
              "seatClass": 3
            },
            {
              "operatedBy": {
                "iata": "JJ",
                "name": "TAM"
              },
              "flightNumber": 5333,
              "duration": 74,
              "numberOfStops": 0,
              "departure": "VCP",
              "arrival": "CGH",
              "departureDate": "2016-09-28T17:45:00.000Z",
              "arrivalDate": "2016-09-28T18:59:00.000Z",
              "aircraftCode": "WSWL",
              "seatClass": 2
            }
          ]
        },
        {
          "departure": "VCP",
          "departureDate": "2016-09-20T15:07:00.000Z",
          "arrival": "SSA",
          "arrivalDate": "2016-09-20T16:25:00.000Z",
          "operatedBy": {
            "iata": "G3",
            "name": "GOL"
          },
          "routeRPH": 0,
          "rph": 5,
          "numberOfStops": 1,
          "duration": 320,
          "legs": [
            {
              "operatedBy": {
                "iata": "G3",
                "name": "GOL"
              },
              "flightNumber": 2096,
              "duration": 78,
              "numberOfStops": 1,
              "departure": "VCP",
              "arrival": "SSA",
              "departureDate": "2016-09-20T15:07:00.000Z",
              "arrivalDate": "2016-09-20T16:25:00.000Z",
              "aircraftCode": "KFZA",
              "seatClass": 2
            }
          ]
        }
      ],
      "rateTokens": [
        {
          "rateToken": "c39c53a1-be6e-4a8f-b556-d94197624ab4",
          "segmentRPHGroup": [
            0,
            1
          ]
        },
        {
          "rateToken": "edc7a2d6-dd5e-42a7-9bf9-4288e231159f",
          "segmentRPHGroup": [
            0,
            3
          ]
        },
        {
          "rateToken": "e70aad1a-6b07-47be-b2e7-ddbae77e2084",
          "segmentRPHGroup": [
            0,
            5
          ]
        },
        {
          "rateToken": "b8507df9-660f-4a11-aa5b-704f86b5ebeb",
          "segmentRPHGroup": [
            2,
            1
          ]
        },
        {
          "rateToken": "63ca349f-8f48-46f4-b6e3-3f6dbe736ce2",
          "segmentRPHGroup": [
            2,
            3
          ]
        },
        {
          "rateToken": "1b07f6e0-a2e1-4c82-a8a7-7b9f06cf075c",
          "segmentRPHGroup": [
            2,
            5
          ]
        },
        {
          "rateToken": "a52286d8-4e0b-4ee2-811f-6eb20d6ebfe7",
          "segmentRPHGroup": [
            4,
            1
          ]
        },
        {
          "rateToken": "a586ab87-4f4c-4f0d-96e6-cbde464855a2",
          "segmentRPHGroup": [
            4,
            3
          ]
        },
        {
          "rateToken": "04d5aede-a26d-46e6-b36e-555359687b25",
          "segmentRPHGroup": [
            4,
            5
          ]
        }
      ]
    }
  ],
  "meta": {
    "countFlights": 200,
    "price": {
      "minWithoutTax": 199.5132,
      "maxWithoutTax": 397.7194,
      "minWithtTax": 529.8796,
      "maxWithtTax": 1580.1886
    },
    "routes": [
      {
        "rph": 0,
        "airports": [
          {
            "iata": "VCP",
            "name": "Aeroporto Internacional de Viracopos/Campinas"
          },
          {
            "iata": "CGH",
            "name": "Aeroporto de Congonhas"
          },
          {
            "iata": "GRU",
            "name": "Aeroporto Internacional de SÃ£o Paulo-Guarulhos"
          }
        ],
        "airCompanies": [
          {
            "iata": "AV",
            "name": "AVIANCA"
          },
          {
            "iata": "AD",
            "name": "AZUL"
          },
          {
            "iata": "G3",
            "name": "GOL"
          },
          {
            "iata": "JJ",
            "name": "TAM"
          }
        ],
        "numberOfStops": [
          0,
          2,
          1
        ],
        "flightDuration": {
          "minimum": 50,
          "maximum": 400
        },
        "departureDates": {
          "minimum": "2016-09-20T15:00:00.000Z",
          "maximum": "2016-09-20T16:39:00.000Z"
        }
      },
      {
        "rph": 1,
        "airports": [
          {
            "iata": "SSA",
            "name": "Aeroporto Internacional de Salvador"
          }
        ],
        "airCompanies": [
          {
            "iata": "G3",
            "name": "GOL"
          },
          {
            "iata": "AD",
            "name": "AZUL"
          },
          {
            "iata": "JJ",
            "name": "TAM"
          },
          {
            "iata": "AV",
            "name": "AVIANCA"
          }
        ],
        "numberOfStops": [
          0,
          1,
          2
        ],
        "flightDuration": {
          "minimum": 50,
          "maximum": 399
        },
        "departureDates": {
          "minimum": "2016-09-28T15:00:00.000Z",
          "maximum": "2016-09-28T16:39:00.000Z"
        }
      }
    ],
    "priceMatrix": {
      "columns": [
        {
          "airCompanies": [
            // "[object Object]"
          ],
          "rows": [
            {
              "numberOfStops": "0",
              "price": 531.3868
            },
            {
              "numberOfStops": "1",
              "price": 555.782
            },
            {
              "numberOfStops": "2+",
              "price": 624.0048
            }
          ]
        }
      ]
    }
  }
}