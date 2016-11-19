var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.query.carsPerCategory == 1) {
  	res.json(carsPerCategory);
	} else {
    carReal.cars = normalizeCars(carReal.cars);
  	res.json(carReal);
	}
});

router.get('/locations', function(req, res, next) {
  res.json(locations);
});

router.get('/:rate_token', function(req, res, next) {
  var base64RateToken = req.params.rate_token;
  var rateToken = new Buffer(base64RateToken, 'base64').toString('utf8');
	carReal.cars = normalizeCars(carReal.cars);

	if (rateToken.includes('rateToken')) {
    var _car = findCarByRateToken(carReal.cars, base64RateToken);
    if ( typeof(_car) === 'object') {
      res.json( { car: _car });
    } else {
    	return res.status(500).send({
        code: 500,
        message: 'Car not found'
      });
    }
	} else {
		return res.status(500).send({
		  code: 500,
		  message: 'Invalid Rate Token'
		});
	}
});

router.get('/:rate_token/optionalservices', function(req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');

  //if (rateToken.includes('rateToken')) {
    res.json(carOptions);
  // } else {
  //   return res.status(500).send({
  //     code: 500,
  //     message: 'Invalid Rate Token'
  //   });
  // }
});


router.get('/locations/:location_id', function(req, res, next) {
  res.json(carReal);
});


module.exports = router;

var findCarByRateToken = function(cars, rateToken) {

  for (var i = 0; i < cars.length; i++ ) {
    for (var j = 0; j < cars[i].rates.length; j++) {
      console.log('------')
      console.log(cars[i].rates[j].rateToken);
      console.log('____')
      console.log(rateToken);
      console.log('++++++')
      if (cars[i].rates[j].rateToken === rateToken) {
        return cars[i];
      }
    }
  }
  return undefined;
};

var normalizeCars = function(cars) {
  for (var i = 0; i < cars.length; i++) {
    // Normalize rates token
    for (var j = 0; j < cars[i].rates.length; j++ ) {
      cars[i].rates[j].rateToken = normalizeCarRateToken(cars[i].rates[j].rateToken);
    }
  }

  return cars;
};

var normalizeCarRateToken = function(rateToken) {
  var rateTokenTemplate = '<hot:rateToken xmlns:hot="http://cvc.com.br/model/car" rtk=""/>'

  console.log(rateToken);
  if ( /\w+-\w+-\w+-\w+-\w+/.test(rateToken) ) {
    var s = new Buffer(rateTokenTemplate.replace('rtk=""', `rtk="${rateToken}"`));
    return s.toString('base64');
  } else {
    return rateToken;
  }
};

var carReal = {
  "cars": [
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "G5ucL4qw-vcdW-2Ies-9Yp4-y2WQZaozmrGJ",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "05qFXLWi-nBl2-bbrq-0DNk-4h8TNvWo16OH",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "xGCWB0H6-IaAZ-5gcq-Q5Gu-V9E1bhJxC4Rv",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "dLu7mQD9-AJW2-w90C-FsSD-ybuf1fKC2VjG",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "LRXmL2ba-dwFf-A2e5-ItEX-pe8JD6G2SKzV",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "CtVAhksI-mQsr-Q7yo-1EvS-MQcWiRfnWX3v",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "ILoB8kb6-dGo6-vQ69-1Xat-6OrHZEbFiYAz",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "AedWS28C-Wsnu-1pw4-WynH-U7wSD0lZpIUM",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "8LqMzMla-LGkS-9zAp-lLqI-Js8mGvl8fJyH",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "GOL 1.0 OR SI",
      "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
      "category": {
        "code": "CDAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
        "numberBags": 1,
        "maxPassengers": 5,
        "contents": [
          {
            "code": "optional-items",
            "name": "Itens Opcionais",
            "items": [
              {
                "code": "ar-condicionado",
                "name": "Ar Condicionado"
              },
              {
                "code": "automatico",
                "name": "Automático"
              },
              {
                "code": "radio-am-fm",
                "name": "Rádio AM/FM"
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "BRL",
          "priceWithTax": 527.86,
          "priceWithoutTax": 527.86,
          "pricePerDayWithTax": 527.86,
          "pricePerDayWithoutTax": 496.24,
          "rateToken": "pbaTKZtX-VJ5y-kzcy-UL5R-csfK6Kstcwod",
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
          "taxes": [
            {
              "code": "TX_REM",
              "description": "Taxa de Remessa",
              "percent": 0.06,
              "amount": 31.62,
              "inTotal": true
            }
          ],
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
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 326.03,
      "minWithoutTax": 306.03,
      "maxWithTax": 726.03,
      "maxWithoutTax": 706.03
    },
    "countCars": 10,
    "categories": [
      {
        "code": "carro-economico",
        "name": "Carro econômico"
      },
      {
        "code": "carro-economico-com-ar",
        "name": "Carro econômico com ar"
      },
      {
        "code": "suv",
        "name": "SUV"
      },
      {
        "code": "utilitario",
        "name": "Utilitário"
      }
    ],
    "rentalCompanies": [
      {
        "code": "hertz",
        "name": "Hertz"
      },
      {
        "code": "unidas",
        "name": "Unidas"
      },
      {
        "code": "localiza",
        "name": "Localiza"
      }
    ],
    "features": [
      {
        "code": "ar-condicionado",
        "name": "Ar condicionado"
      },
      {
        "code": "direcao-hidraulica",
        "name": "Direção hidráulica"
      },
      {
        "code": "radio-am-fm",
        "name": "Rádio AM/FM"
      },
      {
        "code": "vidro-eletrico",
        "name": "Vidro elétrico"
      }
    ]
  }
}
var carsPerCategory = {
  "cars": [
  {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQosdfsdfJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "ICAR",
      "name": "CARRO MÉDIO  INTERMEDIARIO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYxcxcvxcvXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "ECAR",
      "name": "CARRO ECONÔMICO ",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZG21213UNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "EDAR",
      "name": "CARRO ECONÔMICO ",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCsdf231sdf1glzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "CCAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyqweqwDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdqweqwelbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "XXAR",
      "name": "CARRO COMPACTO 2",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "SCAR",
      "name": "CARRO STANDARD",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "FCAR",
      "name": "CARRO GRANDE  FULLSIZE",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "SMCAR",
      "name": "CARRO MUITO STANDARD",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }, {
    "name": "GOL 1.0 OR SI",
    "description": "BÁSICO II - Quilometragem livre- Seguro total do veículo (CDW)- Seguro a terceiros (EP)- Taxas de serviço inclusas- 1 motorista adicional",
    "category": {
      "code": "FCARM",
      "name": "CARRO GRANDE FULLSIZE MASTER",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "items": [{
          "code": "ar-condicionado",
          "name": "Ar Condicionado"
        }, {
          "code": "automatico",
          "name": "Automático"
        }, {
          "code": "radio-am-fm",
          "name": "Rádio AM/FM"
        }]
      }]
    },
    "player": {
      "code": "AL"
    },
    "rates": [{
      "description": "Km Livre",
      "currency": "BRL",
      "priceWithTax": 527.86,
      "priceWithoutTax": 527.86,
      "pricePerDayWithTax": 527.86,
      "pricePerDayWithoutTax": 496.24,
      "rateToken": "CWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNlCWNoYW5uZWxNYW5hZ2VyDQoJcGxheWVyDQoJem9uZUNvZGUNCglzZWFyY2hEYXRlVGltZQ0KCWNoZWNrSW5EYXRlDQoJY2hlY2tPdXREYXRlDQoJYWdlbnRTaWduDQoJYnJhbmNoQ29kZQ0KCXBhY2thZ2VHcm91cA0KCXJvb20NCglkb3VibGVCZWQNCglob25leW1vb24NCgljdXJyZW5jeQ0KCXByaWNl",
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
    "links": {
      "thumbnailImage": {
        "href": "http://img.cvc.com.br/carros/locadoras/393072.jpg"
      }
    },
    "contents": [{
      "code": "car-full-descriptions",
      "name": "Descrição Completa",
      "description": "*PLANO L8MLB*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condi��es de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o ve�culo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
    }]
  }],
  "meta": {
    "price": {
      "minWithTax": 326.03,
      "minWithoutTax": 306.03,
      "maxWithTax": 726.03,
      "maxWithoutTax": 706.03
    },
    "countCars": 10,
    "categories": [
      {
        "code": "carro-economico",
        "name": "Carro econômico"
      }, {
        "code": "carro-economico-com-ar",
        "name": "Carro econômico com ar"
      }, {
        "code": "suv",
        "name": "SUV"
      }, {
        "code": "utilitario",
        "name": "Utilitário"
      }
    ],
    "rentalCompanies": [
      {
        "code": "hertz",
        "name": "Hertz"
      }, {
        "code": "unidas",
        "name": "Unidas"
      }, {
        "code": "localiza",
        "name": "Localiza"
      }
    ],
    "features": [
      {
        "code": "ar-condicionado",
        "name": "Ar condicionado"
      }, {
        "code": "direcao-hidraulica",
        "name": "Direção hidráulica"
      }, {
        "code": "radio-am-fm",
        "name": "Rádio AM/FM"
      }, {
        "code": "vidro-eletrico",
        "name": "Vidro elétrico"
      }
    ]
  }
};

var carOptions = {
  "optionalServices": [
    {
      "id": 1,
      "name": "Cadeirinha para bebê",
      "description": "Recomendavel até 9kg (0 a 12 meses)"
    },
    {
      "id": 2,
      "name": "Cadeirinha para crianças",
      "description": "Recomendavel até 18kg (1 a 4 anos)"
    },
    {
      "id": 3,
      "name": "GPS",
      "description": "Selecione esse campo caso o seu plano não possua a inclusão do equipamento"
    },
    {
      "id": 4,
      "name": "Seguro proteção veículo",
      "description": "Pacote que contempla Proteção contra roubo, furto, incêndio e perda total do veículo, danos e/ou avarias."
    },
    {
      "id": 5,
      "name": "Assento para criança",
      "description": "Recomendável para bebês com peso entre 40 lbs e 100 lbs / 18 kg a 45 kg (4 a 12 anos)"
    }
  ]
};

var locations = {
  "locations": [{
    "id": "N06",
    "name": "MIAMI",
    "description": {
      "DS_LOCAL_RETIRADA": "North of City - 16211 NW 57TH AVE - 16211 N W 57Th Ave "
    },
    "type": "6",
    "phone": "877-283-0898",
    "player": {
      "code": "ZT"
    },
    "location": {
      "address": "16211 NW 57TH AVE"
    },
    "hoursOfOperation": [{
      "day": "Segunda-Feira",
      "openingTime": "08:00",
      "closingTime": "18:00"
    }, {
      "day": "Terça-Feira",
      "openingTime": "08:00",
      "closingTime": "18:00"
    }, {
      "day": "Quarta-Feira",
      "openingTime": "08:00",
      "closingTime": "18:00"
    }, {
      "day": "Quinta-Feira",
      "openingTime": "08:00",
      "closingTime": "18:00"
    }, {
      "day": "Sexta-Feira",
      "openingTime": "08:00",
      "closingTime": "18:00"
    }, {
      "day": "Sábado",
      "openingTime": "09:00",
      "closingTime": "12:00"
    }]
  }, {
    "id": "C52",
    "name": "MIAMI",
    "description": {
      "DS_LOCAL_RETIRADA": "City Center - 1520 COLLINS AVENUE - 1520 Collins Avenue "
    },
    "type": "2",
    "phone": "877-283-0898",
    "player": {
      "code": "ZT"
    },
    "location": {
      "address": "16211 NW 57TH AVE"
    },
    "hoursOfOperation": [{
      "day": "Domingo",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Segunda-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Terça-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Quarta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Quinta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Sexta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Sábado",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }]
  }, {
    "id": "P52",
    "name": "MIAMI",
    "description": {
      "DS_LOCAL_RETIRADA": "Port or Ferry - 3900 NW 25TH STREET - 3900 Nw 25Th Street "
    },
    "type": "2",
    "phone": "877-283-0898",
    "player": {
      "code": "ZT"
    },
    "location": {
      "address": "16211 NW 57TH AVE"
    },
    "hoursOfOperation": [{
      "day": "Domingo",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Segunda-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Terça-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Quarta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Quinta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Sexta-Feira",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }, {
      "day": "Sábado",
      "openingTime": "08:00",
      "closingTime": "17:00"
    }]
  }, {
    "id": "S01",
    "name": "MIAMI",
    "description": {
      "DS_LOCAL_RETIRADA": "South of City - 91831 OVERSEAS HWY - 91831 Overseas Highway "
    },
    "type": "1",
    "phone": "877-283-0898",
    "player": {
      "code": "ZT"
    },
    "location": {
      "address": "16211 NW 57TH AVE"
    },
    "hoursOfOperation": [{
      "day": "Domingo",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Segunda-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Terça-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Quarta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Quinta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Sexta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Sábado",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }]
  }, {
    "id": "T01",
    "name": "MIAMI",
    "description": {
      "DS_LOCAL_RETIRADA": "On Airport - 3900 NORTHWEST 25TH STREET - 3900 NORTHWEST 25TH STREET "
    },
    "type": "1",
    "phone": "877-283-0898",
    "player": {
      "code": "ZT"
    },
    "location": {
      "address": "16211 NW 57TH AVE"
    },
    "hoursOfOperation": [{
      "day": "Domingo",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Segunda-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Terça-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Quarta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Quinta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Sexta-Feira",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }, {
      "day": "Sábado",
      "openingTime": "00:00",
      "closingTime": "23:59"
    }]
  }]
};