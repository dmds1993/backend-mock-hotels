var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  carReal.cars = normalizeCars(carReal.cars);
  res.json(carReal);
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
        "code": "CDAR2",
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
        "code": "CDAR3",
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
        "code": "CDAR4",
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
        "code": "CDAR5",
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
        "code": "CDAR6",
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
        "code": "CDAR7",
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
        "code": "CDAR8",
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
        "code": "CDAR9",
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
        "code": "CDAR10",
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

var carOptions = {
  "optionalServices": [{
    "id": "BST",
    "name": "ChildBoosterSeat",
    "description": "ASSENTO -VENDAS NACIONAIS: CRIANÇAS DE 4 A 8 ANOS // INTERN. 4 A 12 ANOS -  PAGAMENTO NO DESTINO"
  }, {
    "id": "CSI",
    "name": "InfantSeat",
    "description": "CADEIRINHA PARA BEBÊ - VENDAS NACIONAIS E INTERNACIONAIS: DE 0 A 12 MESES - PAGAMENTO NO DESTINO"
  }, {
    "id": "CST",
    "name": "BabySeat",
    "description": "CADEIRINHA PARA BEBÊ - VENDAS NACIONAIS E INTER. CRIANÇAS DE 1 A 4 ANOS - PAGAMENTO NO DESTINO"
  }, {
    "id": "NAV",
    "name": "NavigationalSystem",
    "description": "GPS: RESERVE-O APENAS SE NÃO HOUVER PLANO QUE O INCLUA. NESSE CASO, O MESMO DEVE SER PAGO NO DESTINO"
  }]
}

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