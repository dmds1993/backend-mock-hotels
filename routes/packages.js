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
            "id": 176900277,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMDI3NyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMDI3NyIgcG90PSIxMTI0LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMTI0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTI2NS43OCIgc3N0PSJTUCIgc3d0PSIxMzIxLjk4IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1379.5,
                "priceWithoutTax": 1265.78,
                "pricePerDayWithTax": 172.4375,
                "pricePerDayWithoutTax": 158.2225,
                "pricePerPaxWithTax": 1379.5,
                "pricePerPaxWithoutTax": 1265.78
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 451019672,
                    "name": "HOTEL ARRAIAL SOL",
                    "description": "TRÊS ESTRELAS",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - ESTRADA DO ARRAIAL, 1556",
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
                                "href": "http://www.cvc.com.br/images/313021.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3266",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMDI3NyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMDI3NyIgcG90PSIxMTI0LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMTI0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTI2NS43OCIgc3N0PSJTUCIgc3d0PSIxMzIxLjk4IiBzemk9Ijk2MjYiLz4=",
                    "price": 1265.78
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3266",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2MSIgcG90PSIxMTI0LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMTI0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTI2NS43OCIgc3N0PSJTUCIgc3d0PSIxMzIxLjk4IiBzemk9Ijk2MjYiLz4=",
                    "price": 1265.78
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91559",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 56.2
                }
            ]
        },
        {
            "id": 176965719,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcxOSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcxOSIgcG90PSIxMjM0IiBwcmQ9IlBBQyIgcHd0PSIxMjM0IiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTM4OS42NCIgc3N0PSJTUCIgc3d0PSIxNDUxLjM0IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1508.8600000000001,
                "priceWithoutTax": 1389.64,
                "pricePerDayWithTax": 188.60750000000002,
                "pricePerDayWithoutTax": 173.705,
                "pricePerPaxWithTax": 1508.8600000000001,
                "pricePerPaxWithoutTax": 1389.64
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 451004638,
                    "name": "TRAVEL INN VILLAGE ARRAIAL ´ANTIGA XÃO´",
                    "description": "POUSADA URBANA SIMPLES",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - JEQUITIBÁ, 73",
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
                                "href": "http://www.cvc.com.br/images/313417.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcxOSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcxOSIgcG90PSIxMjM0IiBwcmQ9IlBBQyIgcHd0PSIxMjM0IiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTM4OS42NCIgc3N0PSJTUCIgc3d0PSIxNDUxLjM0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1389.64
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNTM2MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNTM2MiIgcG90PSIxMjM0IiBwcmQ9IlBBQyIgcHd0PSIxMjM0IiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTM4OS42NCIgc3N0PSJTUCIgc3d0PSIxNDUxLjM0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1389.64
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 61.7
                }
            ]
        },
        {
            "id": 176938041,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzODA0MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzODA0MSIgcG90PSIxMjk5LjUyIiBwcmQ9IlBBQyIgcHd0PSIxMjk5LjUyIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTQ2My40MiIgc3N0PSJTUCIgc3d0PSIxNTI4LjQwIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1585.92,
                "priceWithoutTax": 1463.42,
                "pricePerDayWithTax": 198.24,
                "pricePerDayWithoutTax": 182.9275,
                "pricePerPaxWithTax": 1585.92,
                "pricePerPaxWithoutTax": 1463.42
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 451019672,
                    "name": "HOTEL ARRAIAL SOL",
                    "description": "TRÊS ESTRELAS",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - ESTRADA DO ARRAIAL, 1556",
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
                                "href": "http://www.cvc.com.br/images/313021.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3266",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzODA0MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzODA0MSIgcG90PSIxMjk5LjUyIiBwcmQ9IlBBQyIgcHd0PSIxMjk5LjUyIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTQ2My40MiIgc3N0PSJTUCIgc3d0PSIxNTI4LjQwIiBzemk9Ijk2MjYiLz4=",
                    "price": 1463.42
                }
            ],
            "flight": {
                "id": 179370837,
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
                    "departureDate": "2017-06-01T21:10:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "departureDate": "2017-06-01T21:10:00.000-03:00",
                            "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                            "flightNumber": "926122",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                },
                "inbound": {
                    "number": "926011",
                    "period": "D",
                    "departureLocation": {
                        "iata": "GRU",
                        "description": "GUARULHOS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2017-05-25T18:50:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "arrivalLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "departureDate": "2017-05-25T18:50:00.000-03:00",
                            "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                            "flightNumber": "926011",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 64.98
                }
            ]
        },
        {
            "id": 176965674,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY3NCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY3NCIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1632.3600000000001,
                "priceWithoutTax": 1507.89,
                "pricePerDayWithTax": 204.04500000000002,
                "pricePerDayWithoutTax": 188.48625,
                "pricePerPaxWithTax": 1632.3600000000001,
                "pricePerPaxWithoutTax": 1507.89
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 456767588,
                    "name": "BOSSA NOVA ARRAIAL QUINTA DO PORTO",
                    "description": "HOTEL DE PRAIA CONFORTAVEL",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "TRAVESSIA - DO PORTO, ",
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
                                "href": "http://www.cvc.com.br/images/314626.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY3NCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY3NCIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1507.89
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMDY2MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMDY2MiIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1507.89
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 66.95
                }
            ]
        },
        {
            "id": 176965672,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY3MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY3MiIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1632.3600000000001,
                "priceWithoutTax": 1507.89,
                "pricePerDayWithTax": 204.04500000000002,
                "pricePerDayWithoutTax": 188.48625,
                "pricePerPaxWithTax": 1632.3600000000001,
                "pricePerPaxWithoutTax": 1507.89
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 45976198,
                    "name": "HOTEL ANCORADOURO",
                    "description": "POUSADA DE PRAIA SIMPLES",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "ESTRADA - DO ARRAIAL D´AJUDA, 450",
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
                                "href": "http://www.cvc.com.br/images/312912.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY3MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY3MiIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1507.89
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjM2MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjM2MSIgcG90PSIxMzM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxMzM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTUwNy44OSIgc3N0PSJTUCIgc3d0PSIxNTc0Ljg0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1507.89
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 66.95
                }
            ]
        },
        {
            "id": 176965692,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY5MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY5MiIgcG90PSIxNDIzLjAxIiBwcmQ9IlBBQyIgcHd0PSIxNDIzLjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTYwMi40OSIgc3N0PSJTUCIgc3d0PSIxNjczLjY0IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1731.16,
                "priceWithoutTax": 1602.49,
                "pricePerDayWithTax": 216.395,
                "pricePerDayWithoutTax": 200.31125,
                "pricePerPaxWithTax": 1731.16,
                "pricePerPaxWithoutTax": 1602.49
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 451591,
                    "name": "POUSADA ERVA DOCE",
                    "description": "POUSADA URBANA SIMPLES",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - DO MUCUGE, 200",
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
                                "href": "http://www.cvc.com.br/images/312985.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY5MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY5MiIgcG90PSIxNDIzLjAxIiBwcmQ9IlBBQyIgcHd0PSIxNDIzLjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTYwMi40OSIgc3N0PSJTUCIgc3d0PSIxNjczLjY0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1602.49
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjM5OCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjM5OCIgcG90PSIxNDIzLjAxIiBwcmQ9IlBBQyIgcHd0PSIxNDIzLjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTYwMi40OSIgc3N0PSJTUCIgc3d0PSIxNjczLjY0IiBzemk9Ijk2MjYiLz4=",
                    "price": 1602.49
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 71.15
                }
            ]
        },
        {
            "id": 176937691,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzNzY5MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzNzY5MSIgcG90PSIxNDczLjUzIiBwcmQ9IlBBQyIgcHd0PSIxNDczLjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTY1OS4zOCIgc3N0PSJTUCIgc3d0PSIxNzMzLjA2IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1790.5800000000002,
                "priceWithoutTax": 1659.38,
                "pricePerDayWithTax": 223.82250000000002,
                "pricePerDayWithoutTax": 207.4225,
                "pricePerPaxWithTax": 1790.5800000000002,
                "pricePerPaxWithoutTax": 1659.38
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 451591,
                    "name": "POUSADA ERVA DOCE",
                    "description": "POUSADA URBANA SIMPLES",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - DO MUCUGE, 200",
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
                                "href": "http://www.cvc.com.br/images/312985.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzNzY5MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzNzY5MSIgcG90PSIxNDczLjUzIiBwcmQ9IlBBQyIgcHd0PSIxNDczLjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTY1OS4zOCIgc3N0PSJTUCIgc3d0PSIxNzMzLjA2IiBzemk9Ijk2MjYiLz4=",
                    "price": 1659.38
                }
            ],
            "flight": {
                "id": 179370837,
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
                    "departureDate": "2017-06-01T21:10:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "departureDate": "2017-06-01T21:10:00.000-03:00",
                            "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                            "flightNumber": "926122",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                },
                "inbound": {
                    "number": "926011",
                    "period": "D",
                    "departureLocation": {
                        "iata": "GRU",
                        "description": "GUARULHOS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2017-05-25T18:50:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "arrivalLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "departureDate": "2017-05-25T18:50:00.000-03:00",
                            "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                            "flightNumber": "926011",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 73.68
                }
            ]
        },
        {
            "id": 176965665,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY2NSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY2NSIgcG90PSIxNTA3LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTA3LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTY5Ny4wOCIgc3N0PSJTUCIgc3d0PSIxNzcyLjQzIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1829.9499999999998,
                "priceWithoutTax": 1697.08,
                "pricePerDayWithTax": 228.74374999999998,
                "pricePerDayWithoutTax": 212.135,
                "pricePerPaxWithTax": 1829.9499999999998,
                "pricePerPaxWithoutTax": 1697.08
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 453721321,
                    "name": "SANTA FÉ HOTEL",
                    "description": "HOTEL DE PRAIA CONFORTAVEL",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "ESTRADA - DO ARRAIAL, 2020",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Suíte Standard",
                        "mealPlan": "Diária com café da manhã",
                        "category": "19",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/313319.jpg"
                            }
                        }
                    },
                    "category": "Suíte Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Suíte Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "19",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY2NSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY2NSIgcG90PSIxNTA3LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTA3LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTY5Ny4wOCIgc3N0PSJTUCIgc3d0PSIxNzcyLjQzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1697.08
                },
                {
                    "description": "Suíte Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "19",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMDYzNCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMDYzNCIgcG90PSIxNTA3LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTA3LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTY5Ny4wOCIgc3N0PSJTUCIgc3d0PSIxNzcyLjQzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1697.08
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 75.35
                }
            ]
        },
        {
            "id": 176902161,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjE2MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjE2MSIgcG90PSIxNTI4LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTI4LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTcyMC43MyIgc3N0PSJTUCIgc3d0PSIxNzk3LjEzIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1854.65,
                "priceWithoutTax": 1720.73,
                "pricePerDayWithTax": 231.83125,
                "pricePerDayWithoutTax": 215.09125,
                "pricePerPaxWithTax": 1854.65,
                "pricePerPaxWithoutTax": 1720.73
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 452234061,
                    "name": "POUSADA CHEIRO VERDE",
                    "description": "POUSADA URBANA MÉDIO CONFORTO",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - ESTR. DA PRAIA DO MUCUGÊ, 448",
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
                                "href": "http://www.cvc.com.br/images/313118.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjE2MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjE2MSIgcG90PSIxNTI4LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTI4LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTcyMC43MyIgc3N0PSJTUCIgc3d0PSIxNzk3LjEzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1720.73
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2MiIgcG90PSIxNTI4LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTI4LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTcyMC43MyIgc3N0PSJTUCIgc3d0PSIxNzk3LjEzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1720.73
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91559",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 76.4
                }
            ]
        },
        {
            "id": 176965564,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2NCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2NCIgcG90PSIxNTQ5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTQ5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTc0NC4zOCIgc3N0PSJTUCIgc3d0PSIxODIxLjgzIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 1879.3500000000001,
                "priceWithoutTax": 1744.38,
                "pricePerDayWithTax": 234.91875000000002,
                "pricePerDayWithoutTax": 218.0475,
                "pricePerPaxWithTax": 1879.3500000000001,
                "pricePerPaxWithoutTax": 1744.38
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 454348732,
                    "name": "MANACÁ POUSADA PARQUE - ARRAIAL D´AJUDA",
                    "description": "POUSADA URBANA MÉDIO CONFORTO",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "ESTRADA - ESTRADA ARRAIAL/TRANCOSO, 500",
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
                                "href": "http://www.cvc.com.br/images/313035.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2NCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2NCIgcG90PSIxNTQ5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTQ5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTc0NC4zOCIgc3N0PSJTUCIgc3d0PSIxODIxLjgzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1744.38
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMDc1NyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMDc1NyIgcG90PSIxNTQ5LjAxIiBwcmQ9IlBBQyIgcHd0PSIxNTQ5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTc0NC4zOCIgc3N0PSJTUCIgc3d0PSIxODIxLjgzIiBzemk9Ijk2MjYiLz4=",
                    "price": 1744.38
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 77.45
                }
            ]
        },
        {
            "id": 176937031,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzNzAzMSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzNzAzMSIgcG90PSIxNjgzLjUzIiBwcmQ9IlBBQyIgcHd0PSIxNjgzLjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTg5NS44NyIgc3N0PSJTUCIgc3d0PSIxOTgwLjA1IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 2037.57,
                "priceWithoutTax": 1895.87,
                "pricePerDayWithTax": 254.69625,
                "pricePerDayWithoutTax": 236.98375,
                "pricePerPaxWithTax": 2037.57,
                "pricePerPaxWithoutTax": 1895.87
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 453721321,
                    "name": "SANTA FÉ HOTEL",
                    "description": "HOTEL DE PRAIA CONFORTAVEL",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "ESTRADA - DO ARRAIAL, 2020",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Suíte Standard",
                        "mealPlan": "Diária com café da manhã",
                        "category": "19",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/313319.jpg"
                            }
                        }
                    },
                    "category": "Suíte Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Suíte Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "19",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzNzAzMSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzNzAzMSIgcG90PSIxNjgzLjUzIiBwcmQ9IlBBQyIgcHd0PSIxNjgzLjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMTg5NS44NyIgc3N0PSJTUCIgc3d0PSIxOTgwLjA1IiBzemk9Ijk2MjYiLz4=",
                    "price": 1895.87
                }
            ],
            "flight": {
                "id": 179370837,
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
                    "departureDate": "2017-06-01T21:10:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "departureDate": "2017-06-01T21:10:00.000-03:00",
                            "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                            "flightNumber": "926122",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                },
                "inbound": {
                    "number": "926011",
                    "period": "D",
                    "departureLocation": {
                        "iata": "GRU",
                        "description": "GUARULHOS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2017-05-25T18:50:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "arrivalLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "departureDate": "2017-05-25T18:50:00.000-03:00",
                            "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                            "flightNumber": "926011",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 84.18
                }
            ]
        },
        {
            "id": 176965563,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2MyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2MyIgcG90PSIyMDM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjI5Ni4xOCIgc3N0PSJTUCIgc3d0PSIyMzk4LjEzIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 2455.6499999999996,
                "priceWithoutTax": 2296.18,
                "pricePerDayWithTax": 306.95624999999995,
                "pricePerDayWithoutTax": 287.0225,
                "pricePerPaxWithTax": 2455.6499999999996,
                "pricePerPaxWithoutTax": 2296.18
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 453665552,
                    "name": "HOTEL ENSEADA DOS CORAIS",
                    "description": "HOTEL DE PRAIA MÉDIO CONFORTO",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "RUA - RUA DA PRAIA DO MUCUGÊ, 100",
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
                                "href": "http://www.cvc.com.br/images/302302.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Standard"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTU2MyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTU2MyIgcG90PSIyMDM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjI5Ni4xOCIgc3N0PSJTUCIgc3d0PSIyMzk4LjEzIiBzemk9Ijk2MjYiLz4=",
                    "price": 2296.18
                },
                {
                    "description": "Apartamento Standard",
                    "mealPlan": "Diária com café da manhã",
                    "category": "3",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjY3MiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjY3MiIgcG90PSIyMDM5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDM5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjI5Ni4xOCIgc3N0PSJTUCIgc3d0PSIyMzk4LjEzIiBzemk9Ijk2MjYiLz4=",
                    "price": 2296.18
                },
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "2",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwMjg4MCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwMjg4MCIgcG90PSIyMzU0LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMzU0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjY1MC45MSIgc3N0PSJTUCIgc3d0PSIyNzY4LjYxIiBzemk9Ijk2MjYiLz4=",
                    "price": 2650.91
                },
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "2",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcwNyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcwNyIgcG90PSIyMzU0LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMzU0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjY1MC45MSIgc3N0PSJTUCIgc3d0PSIyNzY4LjYxIiBzemk9Ijk2MjYiLz4=",
                    "price": 2650.91
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 101.95
                }
            ]
        },
        {
            "id": 176905255,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNTI1NSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNTI1NSIgcG90PSIyMDc0LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDc0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjMzNS42MCIgc3N0PSJTUCIgc3d0PSIyNDM5LjMwIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 2496.8199999999997,
                "priceWithoutTax": 2335.6,
                "pricePerDayWithTax": 312.10249999999996,
                "pricePerDayWithoutTax": 291.95,
                "pricePerPaxWithTax": 2496.8199999999997,
                "pricePerPaxWithoutTax": 2335.6
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 457228501,
                    "name": "POUSADA VILA DO BECO",
                    "description": "POUSADA URBANA MÉDIO CONFORTO",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": " - BECO DOS JEGUES, 173",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Apartamento Luxo",
                        "mealPlan": "Diária com café da manhã",
                        "category": "2",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/313142.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Luxo"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "2",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNTI1NSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNTI1NSIgcG90PSIyMDc0LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDc0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjMzNS42MCIgc3N0PSJTUCIgc3d0PSIyNDM5LjMwIiBzemk9Ijk2MjYiLz4=",
                    "price": 2335.6
                },
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "2",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcwNiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcwNiIgcG90PSIyMDc0LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMDc0LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjMzNS42MCIgc3N0PSJTUCIgc3d0PSIyNDM5LjMwIiBzemk9Ijk2MjYiLz4=",
                    "price": 2335.6
                },
                {
                    "description": "Apartamento Especial",
                    "mealPlan": "Diária com café da manhã",
                    "category": "1251",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNTMzMSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNTMzMSIgcG90PSIyNTI5IiBwcmQ9IlBBQyIgcHd0PSIyNTI5IiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjg0Ny45NyIgc3N0PSJTUCIgc3d0PSIyOTc0LjQyIiBzemk9Ijk2MjYiLz4=",
                    "price": 2847.97
                },
                {
                    "description": "Apartamento Especial",
                    "mealPlan": "Diária com café da manhã",
                    "category": "1251",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcxNyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcxNyIgcG90PSIyNTI5IiBwcmQ9IlBBQyIgcHd0PSIyNTI5IiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjg0Ny45NyIgc3N0PSJTUCIgc3d0PSIyOTc0LjQyIiBzemk9Ijk2MjYiLz4=",
                    "price": 2847.97
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91559",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 103.7
                }
            ]
        },
        {
            "id": 176904722,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNDcyMiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNDcyMiIgcG90PSIyMTA5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMTA5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjM3NS4wMSIgc3N0PSJTUCIgc3d0PSIyNDgwLjQ2IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 2537.98,
                "priceWithoutTax": 2375.01,
                "pricePerDayWithTax": 317.2475,
                "pricePerDayWithoutTax": 296.87625,
                "pricePerPaxWithTax": 2537.98,
                "pricePerPaxWithoutTax": 2375.01
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 455023996,
                    "name": "MAR PARAÍSO HOTEL",
                    "description": "HOTEL DE PRAIA CONFORTAVEL",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "PRAIA - DO MUCUGÊ, 476",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Apartamento Luxo",
                        "mealPlan": "Diária com café da manhã",
                        "category": "1208",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/313070.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Luxo"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "1208",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNDcyMiIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNDcyMiIgcG90PSIyMTA5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMTA5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjM3NS4wMSIgc3N0PSJTUCIgc3d0PSIyNDgwLjQ2IiBzemk9Ijk2MjYiLz4=",
                    "price": 2375.01
                },
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "1208",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY5MSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY5MSIgcG90PSIyMTA5LjAxIiBwcmQ9IlBBQyIgcHd0PSIyMTA5LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjM3NS4wMSIgc3N0PSJTUCIgc3d0PSIyNDgwLjQ2IiBzemk9Ijk2MjYiLz4=",
                    "price": 2375.01
                },
                {
                    "description": "Suíte Master",
                    "mealPlan": "Diária com café da manhã",
                    "category": "17",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTY5MyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTY5MyIgcG90PSIyOTA3LjAxIiBwcmQ9IlBBQyIgcHd0PSIyOTA3LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzI3My42NiIgc3N0PSJTUCIgc3d0PSIzNDE5LjAxIiBzemk9Ijk2MjYiLz4=",
                    "price": 3273.66
                },
                {
                    "description": "Suíte Master",
                    "mealPlan": "Diária com café da manhã",
                    "category": "17",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNDcwOSIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNDcwOSIgcG90PSIyOTA3LjAxIiBwcmQ9IlBBQyIgcHd0PSIyOTA3LjAxIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzI3My42NiIgc3N0PSJTUCIgc3d0PSIzNDE5LjAxIiBzemk9Ijk2MjYiLz4=",
                    "price": 3273.66
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91559",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 105.45
                }
            ]
        },
        {
            "id": 176938388,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": false,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzODM4OCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzODM4OCIgcG90PSIyMjg1LjUzIiBwcmQ9IlBBQyIgcHd0PSIyMjg1LjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjU3My44MCIgc3N0PSJTUCIgc3d0PSIyNjg4LjA4IiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 2745.6000000000004,
                "priceWithoutTax": 2573.8,
                "pricePerDayWithTax": 343.20000000000005,
                "pricePerDayWithoutTax": 321.725,
                "pricePerPaxWithTax": 2745.6000000000004,
                "pricePerPaxWithoutTax": 2573.8
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 455023996,
                    "name": "MAR PARAÍSO HOTEL",
                    "description": "HOTEL DE PRAIA CONFORTAVEL",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "PRAIA - DO MUCUGÊ, 476",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Apartamento Luxo",
                        "mealPlan": "Diária com café da manhã",
                        "category": "1208",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/313070.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Luxo"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Luxo",
                    "mealPlan": "Diária com café da manhã",
                    "category": "1208",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzODM4OCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzODM4OCIgcG90PSIyMjg1LjUzIiBwcmQ9IlBBQyIgcHd0PSIyMjg1LjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMjU3My44MCIgc3N0PSJTUCIgc3d0PSIyNjg4LjA4IiBzemk9Ijk2MjYiLz4=",
                    "price": 2573.8
                },
                {
                    "description": "Suíte Master",
                    "mealPlan": "Diária com café da manhã",
                    "category": "17",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkyNjAxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkzODU2OCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkzODU2OCIgcG90PSIzMTUzLjUzIiBwcmQ9IlBBQyIgcHd0PSIzMTUzLjUzIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzU1MS4yNyIgc3N0PSJTUCIgc3d0PSIzNzA4Ljk1IiBzemk9Ijk2MjYiLz4=",
                    "price": 3551.27
                }
            ],
            "flight": {
                "id": 179370837,
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
                    "departureDate": "2017-06-01T21:10:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "departureDate": "2017-06-01T21:10:00.000-03:00",
                            "arrivalDate": "2017-06-01T23:00:00.000-03:00",
                            "flightNumber": "926122",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                },
                "inbound": {
                    "number": "926011",
                    "period": "D",
                    "departureLocation": {
                        "iata": "GRU",
                        "description": "GUARULHOS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2017-05-25T18:50:00.000-03:00",
                    "duration": 110,
                    "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "GRU",
                                "description": "GUARULHOS"
                            },
                            "arrivalLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "departureDate": "2017-05-25T18:50:00.000-03:00",
                            "arrivalDate": "2017-05-25T20:40:00.000-03:00",
                            "flightNumber": "926011",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 110
                        }
                    ]
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 114.28
                }
            ]
        },
        {
            "id": 176965718,
            "startDate": "2017-05-25",
            "endDate": "2017-06-01",
            "days": 8,
            "type": "AIR",
            "isAvailable": true,
            "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcxOCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcxOCIgcG90PSIzMDgyIiBwcmQ9IlBBQyIgcHd0PSIzMDgyIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzQ3MC43MiIgc3N0PSJTUCIgc3d0PSIzNjI0LjgyIiBzemk9Ijk2MjYiLz4=",
            "price": {
                "priceWithTax": 3682.3399999999997,
                "priceWithoutTax": 3470.72,
                "pricePerDayWithTax": 460.29249999999996,
                "pricePerDayWithoutTax": 433.84,
                "pricePerPaxWithTax": 3682.3399999999997,
                "pricePerPaxWithoutTax": 3470.72
            },
            "currency": "BRL",
            "baseDestination": 25,
            "hotels": [
                {
                    "id": 458835631,
                    "name": "SAINT TROPEZ PRAIA HOTEL",
                    "description": "TRÊS ESTRELAS",
                    "isPreferential": false,
                    "timeSpan": {
                        "nights": 7,
                        "checkIn": "2017-05-25",
                        "checkOut": "2017-05-31"
                    },
                    "location": {
                        "address": "ESTRADA - ESTRADA DA PITINGA, 100",
                        "coordinates": {
                            "latitude": 0,
                            "longitude": 0
                        }
                    },
                    "room": {
                        "rph": 1,
                        "description": "Apartamento Luxo Vista Jardim",
                        "mealPlan": "Diária com café da manhã",
                        "category": "6797",
                        "links": {
                            "thumbnailImage": {
                                "href": "http://www.cvc.com.br/images/384390.jpg"
                            }
                        }
                    },
                    "category": "Apartamento Luxo Vista Jardim"
                }
            ],
            "alternativeRooms": [
                {
                    "description": "Apartamento Luxo Vista Jardim",
                    "mealPlan": "Diária com café da manhã",
                    "category": "6797",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3Njk2NTcxOCIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3Njk2NTcxOCIgcG90PSIzMDgyIiBwcmQ9IlBBQyIgcHd0PSIzMDgyIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzQ3MC43MiIgc3N0PSJTUCIgc3d0PSIzNjI0LjgyIiBzemk9Ijk2MjYiLz4=",
                    "price": 3470.72
                },
                {
                    "description": "Apartamento Luxo Vista Jardim",
                    "mealPlan": "Diária com café da manhã",
                    "category": "6797",
                    "packageRateToken": "PHJhdGVUb2tlbiBhZ3M9IldFQiIgYmRlPSIyNSIgYnJpPSIxMDAwIiBkdGY9IjIwMTctMDYtMDEiIGR0aT0iMjAxNy0wNS0yNSIgZWN0PSJCUiIgZXN0PSJCQSIgZXppPSIxMDMyIiBmZ3I9IjkxNTUxIiBta2k9IjIxNDEiIG1rcD0iMC44ODgiIHBhY2thZ2VUeXBlPSJBSVIiIHBjcT0iMS4wMDAwMDAwMDAwIiBwaWQ9IjE3NjkwNDkwNyIgcGtnPSJQQUNLQUdFIiBwa2k9IjE3NjkwNDkwNyIgcG90PSIzMDgyIiBwcmQ9IlBBQyIgcHd0PSIzMDgyIiBweHM9IjMwIiBzY3Q9IkJSIiBzZHQ9IjIwMTctMDYtMzAtMDM6MDAiIHNvdD0iMzQ3MC43MiIgc3N0PSJTUCIgc3d0PSIzNjI0LjgyIiBzemk9Ijk2MjYiLz4=",
                    "price": 3470.72
                }
            ],
            "flight": {
                "id": 180802711,
                "outbound": {
                    "number": "13982",
                    "period": "D",
                    "departureLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "arrivalLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "departureDate": "2016-11-28T11:00:00.000-02:00",
                    "duration": 175,
                    "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico",
                    "legs": [
                        {
                            "departureLocation": {
                                "iata": "BPS",
                                "description": "PORTO SEGURO"
                            },
                            "arrivalLocation": {
                                "iata": "CGH",
                                "description": "SÃO PAULO- CONGONHAS"
                            },
                            "departureDate": "2016-11-28T11:00:00.000-02:00",
                            "arrivalDate": "2016-11-28T13:55:00.000-02:00",
                            "flightNumber": "13982",
                            "operatingAirline": {
                                "code": "G3",
                                "name": null
                            },
                            "duration": 175
                        }
                    ]
                },
                "inbound": {
                    "number": "91551",
                    "period": "D",
                    "departureLocation": {
                        "iata": "CGH",
                        "description": "SÃO PAULO- CONGONHAS"
                    },
                    "arrivalLocation": {
                        "iata": "BPS",
                        "description": "PORTO SEGURO"
                    },
                    "departureDate": "2016-11-21T14:40:00.000-02:00",
                    "arrivalDate": "2016-11-21T15:41:00.000-02:00",
                    "operatingAirline": {
                        "code": "G3",
                        "name": null
                    },
                    "class": "Economico"
                }
            },
            "taxes": [
                {
                    "code": "E",
                    "description": "TAXA DE EMBARQUE",
                    "amount": 57.52
                },
                {
                    "code": "TAXA_5PCT_COST",
                    "description": "TAXA_5%",
                    "percent": 0.05,
                    "amount": 154.1
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
  "baseDestinations": [{
    "id": 209283,
    "name": "(PROT MCO-209283) ORLANDO 12 NOITES E 14 DIAS Bloqueio TAM - Malha 4980",
    "description": "<P>Passagens aéreas com preços incríveis. Aproveite!</P>",
    "days": 14,
    "lowestPackage": {
      "price": 1407.85,
      "departureDate": "2017-04-05Z"
    },
    "type": "AIR",
    "contents": [{
      "items": [{
        "code": "flightIcon",
        "name": "Transporte aéreo - ",
        "description": "São Paulo / Orlando / São Paulo"
      }, {
        "name": "Atenção -",
        "description": " Este produto não inclui nenhum outro tipo de serviço.<BR>"
      }]
    }]
  },
  {
    "id": 209284,
    "name": "ORLANDO 15 NOITES E 17 DIAS Bloqueio TAM - Malha 4980",
    "description": "<P>Passagens aéreas com preços incríveis. Aproveite!</P>",
    "days": 14,
    "lowestPackage": {
      "price": 1507.85,
      "departureDate": "2017-04-05Z"
    },
    "type": "AIR",
    "contents": [{
      "items": [{
        "code": "flightIcon",
        "name": "Transporte aéreo - ",
        "description": "São Paulo / Orlando / São Paulo"
      }, {
        "name": "Atenção -",
        "description": " Este produto não inclui nenhum outro tipo de serviço.<BR>"
      }]
    }]
  }],
  "meta": {
    "coverImage": {
      "href": "http://www.cvc.com.br/images/376061.jpg"
    },
    "price": {
      "min": 1407.85,
      "max": 1507.85
    },
    "features": [{
      "code": "flightIcon",
      "name": "flightIcon",
      "amount": 1
    }],
    "days": [{
      "code": "14",
      "name": "14",
      "amount": 1
    }],
    "types": [{
      "code": "AIR",
      "name": "AIR",
      "amount": 1
    }],
    "count": 1
  }
}

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
      "date": "2017-07-15",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-08-05",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-08-12",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-08-19",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-08-26",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-09-02",
      "isAvailable": true,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-09-16",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-09-23",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-09-30",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-10-07",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-10-14",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-10-21",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-10-28",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-11-04",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-11-18",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-11-25",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-12-02",
      "isAvailable": false,
      "isPromotional": false,
      "bestPrice": 1076
    },
    {
      "date": "2017-12-09",
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
