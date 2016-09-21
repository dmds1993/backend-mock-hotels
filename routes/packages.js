var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.json(packages);
});

// router.get('/:package_id', function (req, res, next) {
//   res.json(packages);
// });

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

module.exports = router;

var packages = {
  "packages": [
    {
      "id": 172384640,
      "startDate": "2016-11-04",
      "endDate": "2016-11-07",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172383669,
      "startDate": "2016-10-21",
      "endDate": "2016-10-24",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172383672,
      "startDate": "2016-10-28",
      "endDate": "2016-10-31",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172384874,
      "startDate": "2016-12-09",
      "endDate": "2016-12-12",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-09",
            "checkOut": "2016-12-10"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172383656,
      "startDate": "2016-10-14",
      "endDate": "2016-10-17",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-09",
            "checkOut": "2016-12-10"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172384685,
      "startDate": "2016-11-25",
      "endDate": "2016-11-28",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-09",
            "checkOut": "2016-12-10"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-25",
            "checkOut": "2016-11-26"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172384628,
      "startDate": "2016-11-18",
      "endDate": "2016-11-21",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-09",
            "checkOut": "2016-12-10"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-25",
            "checkOut": "2016-11-26"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-18",
            "checkOut": "2016-11-19"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    },
    {
      "id": 172384872,
      "startDate": "2016-12-02",
      "endDate": "2016-12-05",
      "days": 3,
      "type": "Rodoviários",
      "isAvailable": true,
      "packageRateToken": "PHJhdGVUb2tlbiBuZXRQcmljZT0iMTIwIiBtYXJrdXA9IjAuNSIgbWFya3VwSWQ9IjgiIG9yaWdpbkNvdW50cnk9IkJSIiBvcmlnaW5TdGF0ZT0iU1AiIG9yaWdpbkNpdHk9IjgxNiIgZGVzdGluYXRpb25Db3VudHJ5PSJCUiIgZGVzdGluYXRpb25TdGF0ZT0iUkoiIGRlc3RpbmF0aW9uQ2l0eT0iNyIgYWdlbnRTaWduPSJXIiBicmFuY2hDb2RlPSIxMDAwIiBzYWxlRGF0ZT0iMjAxNi0wOS0xNVoiLz4=",
      "price": 240,
      "currency": "BRL",
      "baseDestination": 225683,
      "hotels": [
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-04",
            "checkOut": "2016-11-05"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-21",
            "checkOut": "2016-10-22"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-28",
            "checkOut": "2016-10-29"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-09",
            "checkOut": "2016-12-10"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-10-14",
            "checkOut": "2016-10-15"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-25",
            "checkOut": "2016-11-26"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-11-18",
            "checkOut": "2016-11-19"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        },
        {
          "id": 9729160,
          "name": "POUSADA DALESTE",
          "description": "TRÊS ESTRELAS",
          "award": 5,
          "isPreferential": true,
          "timeSpan": {
            "nights": 2,
            "checkIn": "2016-12-02",
            "checkOut": "2016-12-03"
          },
          "location": {
            "address": " - ANTÔNIO BERTHOLDO DA SILVA JORDÃO, 0",
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "room": {
            "rph": 1,
            "description": "Standard - Duplo",
            "mealPlan": "Diária com café da manhã",
            "category": "2434",
            "links": {
              "thumbnailImage": {
                "href": "http://www.cvc.com.br/images/290605.jpg"
              }
            }
          },
          "category": "Standard - Duplo"
        }
      ],
      "flight": {
        "id": 175937871,
        "outbound": {
          "number": "37951",
          "period": "D",
          "departureLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "arrivalLocation": {
            "iata": "CGH",
            "description": "SÃO PAULO- CONGONHAS"
          },
          "departureDate": "2016-11-30T16:05:00.000Z",
          "arrivalDate": "2016-11-30T17:15:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "arrivalLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "departureDate": "2016-11-30T16:05:00.000Z",
              "arrivalDate": "2016-11-30T17:15:00.000Z",
              "operatedBy": "JJ"
            }
          ]
        },
        "inbound": {
          "number": "31521",
          "period": "D",
          "arrivalLocation": {
            "iata": "GIG",
            "description": "RIO DE JAN -GALEÃO"
          },
          "departureDate": "2016-11-26T06:00:00.000Z",
          "duration": 60,
          "arrivalDate": "2016-11-26T07:00:00.000Z",
          "operatedBy": "JJ",
          "class": "Economico",
          "legs": [
            {
              "departureLocation": {
                "iata": "CGH",
                "description": "SÃO PAULO- CONGONHAS"
              },
              "arrivalLocation": {
                "iata": "GIG",
                "description": "RIO DE JAN -GALEÃO"
              },
              "departureDate": "2016-11-26T06:00:00.000Z",
              "arrivalDate": "2016-11-26T07:00:00.000Z",
              "flightNumber": "31521",
              "operatedBy": "JJ",
              "duration": 60
            }
          ]
        }
      }
    }
  ]
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
        "departureDate": "2016-11-10Z"
      },
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
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
      "type": "AEREO",
      "contents": [
        {
          "items": [
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 05 diárias com café da manhã"
            },
            {
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
      "type": "AEREO",
      "contents": [
        {
          "items": [
            {
              "code": "hotelIcon",
              "name": "Hospedagem - 05 diárias com café da manhã"
            },
            {
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
      "departureDate": "2016-11-10Z"
    },
    "type": "AEREO",
    "links": [
      {
        "href": "http://cvc.com.br/images/375872.jpg",
        "title": "são paulo",
        "description": " FORMULA 1",
        "tooltip": "São Paulo - São Paulo - Brasil"
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
          "href": "http://www.cvc.com.br/images/337787.jpg",
          "title": "Rio de janeiro - resultado - de- pacote",
          "description": " As belíssimas paisagens, o charme dos botequins, a vibração das praias e a simpatia do povo carioca são só alguns dos elementos que fazem do Rio de Janeiro uma cidade fascinante e muito fácil de amar. Não é à toa que o Rio atrai anualmente cerca de dois milhões de turistas estrangeiros, todos interessados em conferir o encanto do Pão de Açúcar, Corcovado, Ipanema e outras belezas que já serviram de cenário para diversos filmes e transformaram o Rio de Janeiro no cartão-postal do Brasil.",
          "tooltip": "Rio de Janeiro - Rio de Janeiro - Brasil"
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