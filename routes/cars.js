var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.query.carsPerCategory == 1) {
  	res.json(carsPerCategory);
	} else {
  	res.json(carReal);
	}
});

router.get('/locations', function(req, res, next) {
  res.json(carReal);
});

router.get('/:rate_token', function(req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
	
	if (rateToken.includes('rateToken')) {
		res.json(carReal);
	} else {
		return res.status(500).send({ 
		  code: 500, 
		  message: 'Invalid Rate Token' 
		});
	}
});


router.get('/locations/:location_id', function(req, res, next) {
  res.json(carReal);
});


module.exports = router;

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
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
      "code": "CDAR",
      "name": "CARRO COMPACTO",
      "numberDoors": 2,
      "numberBags": 1,
      "maxPassengers": 5,
      "contents": [{
        "code": "optional-items",
        "name": "Itens Opcionais",
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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
        "itens": [{
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