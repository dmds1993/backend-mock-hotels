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
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 51.68,
          "priceWithoutTax": 28.68,
          "pricePerDayWithTax": 51.68,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 51.68,
          "priceWithoutTax": 28.68,
          "pricePerDayWithTax": 51.68,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 51.68,
          "priceWithoutTax": 28.68,
          "pricePerDayWithTax": 51.68,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 51.68,
          "priceWithoutTax": 28.68,
          "pricePerDayWithTax": 51.68,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "CCAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 52.75,
          "priceWithoutTax": 29.75,
          "pricePerDayWithTax": 52.75,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzUiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "CCAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 52.75,
          "priceWithoutTax": 29.75,
          "pricePerDayWithTax": 52.75,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzUiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "CCAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 52.75,
          "priceWithoutTax": 29.75,
          "pricePerDayWithTax": 52.75,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzUiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "CCAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 52.75,
          "priceWithoutTax": 29.75,
          "pricePerDayWithTax": 52.75,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzUiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ICAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 57.67,
          "priceWithoutTax": 34.67,
          "pricePerDayWithTax": 57.67,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzQiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ICAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 57.67,
          "priceWithoutTax": 34.67,
          "pricePerDayWithTax": 57.67,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzQiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-27T11:00:00"
          },
          "return": {
            "date": "2016-10-28T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 51.68,
      "minWithoutTax": 28.68,
      "maxWithTax": 141.25,
      "maxWithoutTax": 118.25
    },
    "counterCars": 94,
    "categories": [
      {
        "code": "ICAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO"
      },
      {
        "code": "IDAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO"
      },
      {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO "
      },
      {
        "code": "EDAR",
        "name": "CARRO ECONÔMICO "
      },
      {
        "code": "CCAR",
        "name": "CARRO COMPACTO"
      },
      {
        "code": "CDAR",
        "name": "CARRO COMPACTO"
      },
      {
        "code": "XXAR"
      },
      {
        "code": "SCAR",
        "name": "CARRO STANDARD"
      },
      {
        "code": "FCAR",
        "name": "CARRO GRANDE  FULLSIZE"
      },
      {
        "code": "PCAR",
        "name": "CARRO PREMIUM"
      },
      {
        "code": "MVAR",
        "name": "MINI VAN"
      },
      {
        "code": "IFAR",
        "name": "SUV MÉDIO"
      },
      {
        "code": "LCAR",
        "name": "CARRO LUXO"
      }
    ],
    "rentalCompanies": [
      {
        "code": "ZR",
        "name": "DOLLAR"
      },
      {
        "code": "ZT",
        "name": "THRIFTY  EUA"
      },
      {
        "code": "ZI",
        "name": "AVIS"
      },
      {
        "code": "AL",
        "name": "ALAMO  EUA"
      }
    ],
    "features": [
      {
        "code": "ar-condicionado",
        "name": "Ar Condicionado"
      },
      {
        "code": "automatico",
        "name": "Automático"
      }
    ]
  }
};

var carsPerCategory = {
  "cars": [
    {
      "carsPerCategory": true,
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "LCAR",
        "name": "CARRO LUXO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "AL",
        "name": "ALAMO  EUA"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 82.28,
          "priceWithoutTax": 59.28,
          "pricePerDayWithTax": 82.28,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9IjMxNTciIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IkFMIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389761.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "TOYOTA COROLLA OR SIMILAR",
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ICAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 90,
          "priceWithoutTax": 67,
          "pricePerDayWithTax": 90,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzQiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "CHEVROLET AVEO OR SIMILAR",
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 101,
          "priceWithoutTax": 78,
          "pricePerDayWithTax": 101,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "CHEVY AVEO OR SIMILAR",
      "description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
      "category": {
        "code": "EDAR",
        "name": "CARRO ECONÔMICO ",
        "numberDoors": 4,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 101,
          "priceWithoutTax": 78,
          "pricePerDayWithTax": 101,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzMiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389541.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "FORD FOCUS OR SIMILAR",
      "description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "CCAR",
        "name": "CARRO COMPACTO",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 103,
          "priceWithoutTax": 80,
          "pricePerDayWithTax": 103,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzUiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "COMPACT OR HIGHER OR SIMILAR",
      "category": {
        "code": "XXAR",
        "name": "CARRO COMPACTO 2",
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 103,
          "priceWithoutTax": 80,
          "pricePerDayWithTax": 103,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iU3BlY2lhbCIgY21pPSIyIiBjdXI9IlVTRCIgcHVwPSJNSUEiIHZwZj0iWlIiLz4=",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ]
    },
    {
      "name": "MITSUBISHI GALANT OR SIMILAR",
      "description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
      "category": {
        "code": "SCAR",
        "name": "CARRO STANDARD",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 104,
          "priceWithoutTax": 81,
          "pricePerDayWithTax": 104,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3NDIiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389543.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "FORD FUSION FWD/SIMILAR",
      "description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
      "category": {
        "code": "FCAR",
        "name": "CARRO GRANDE  FULLSIZE",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZI",
        "name": "AVIS"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 122.5,
          "priceWithoutTax": 99.5,
          "pricePerDayWithTax": 122.5,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzYiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpJIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389616.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "MITSUBISHI GALANT OR SIMILAR",
      "description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
      "category": {
        "code": "SMCAR",
        "name": "CARRO MUITO STANDARD",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZR",
        "name": "DOLLAR"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 104,
          "priceWithoutTax": 81,
          "pricePerDayWithTax": 104,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3NDIiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpSIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389543.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    },
    {
      "name": "FORD FUSION FWD/SIMILAR",
      "description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
      "category": {
        "code": "FCARM",
        "name": "CARRO GRANDE FULLSIZE MASTER",
        "numberDoors": 2,
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
              }
            ]
          }
        ]
      },
      "player": {
        "code": "ZI",
        "name": "AVIS"
      },
      "rates": [
        {
          "description": "Km Livre",
          "currency": "USD",
          "priceWithTax": 122.5,
          "priceWithoutTax": 99.5,
          "pricePerDayWithTax": 122.5,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGNhdD0iQ2FyIiBjZ2M9Ijg3MzYiIGNtaT0iMiIgY3VyPSJVU0QiIHB1cD0iTUlBIiB2cGY9IlpJIi8+",
          "pickup": {
            "date": "2016-10-24T11:00:00"
          },
          "return": {
            "date": "2016-10-25T11:00:00"
          },
          "taxes": [
            {
              "code": "CarTaxes_13",
              "description": "TAXA DE REMESSA",
              "amount": 23
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/389616.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 82.28,
      "minWithoutTax": 59.28,
      "maxWithTax": 141.25,
      "maxWithoutTax": 118.25
    },
    "counterCars": 13,
    "categories": [
      {
        "code": "ICAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO"
      },
      {
        "code": "IDAR",
        "name": "CARRO MÉDIO  INTERMEDIARIO"
      },
      {
        "code": "ECAR",
        "name": "CARRO ECONÔMICO "
      },
      {
        "code": "EDAR",
        "name": "CARRO ECONÔMICO "
      },
      {
        "code": "CCAR",
        "name": "CARRO COMPACTO"
      },
      {
        "code": "CDAR",
        "name": "CARRO COMPACTO"
      },
      {
        "code": "XXAR"
      },
      {
        "code": "SCAR",
        "name": "CARRO STANDARD"
      },
      {
        "code": "FCAR",
        "name": "CARRO GRANDE  FULLSIZE"
      },
      {
        "code": "PCAR",
        "name": "CARRO PREMIUM"
      },
      {
        "code": "MVAR",
        "name": "MINI VAN"
      },
      {
        "code": "IFAR",
        "name": "SUV MÉDIO"
      },
      {
        "code": "LCAR",
        "name": "CARRO LUXO"
      }
    ],
    "rentalCompanies": [
      {
        "code": "ZR",
        "name": "DOLLAR"
      },
      {
        "code": "ZI",
        "name": "AVIS"
      },
      {
        "code": "AL",
        "name": "ALAMO  EUA"
      }
    ],
    "features": [
      {
        "code": "ar-condicionado",
        "name": "Ar Condicionado"
      },
      {
        "code": "automatico",
        "name": "Automático"
      }
    ]
  }
};