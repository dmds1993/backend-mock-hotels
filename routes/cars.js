var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(carReal);
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

var cars = {
	"cars": [{
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ECAR",
			"name": "CARRO ECONÔMICO ",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 172.06,
			"priceWithoutTax": 172.06,
			"pricePerDayWithTax": 57.36,
			"pricePerDayWithoutTax": 57.36,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzMzIiBjbWk9IjIiIGNtYz0iMjAwMDEiIGN1cj0iVVNEIiBta3A9IjAuNSIgbWtpPSIxMSIgbm9uPSIzIiBwZHQ9IjIwMTYtMTEtMTZUMTE6MDA6MDAiIHBrcD0iTUlBIiBwdXA9Ik1JQSIgcGNuPSI4Ni4wMyIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdmN0PSJFQ0FSIiB2Y2Q9IkFMIi8+",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ECAR",
			"name": "CARRO ECONÔMICO ",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 172.06,
			"priceWithoutTax": 172.06,
			"pricePerDayWithTax": 57.36,
			"pricePerDayWithoutTax": 57.36,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzMzIiBjbWk9IjIiIGNtYz0iMjAwMDEiIGN1cj0iVVNEIiBta3A9IjAuNSIgbWtpPSIxMSIgbm9uPSIzIiBwZHQ9IjIwMTYtMTEtMTZUMTE6MDA6MDAiIHBrcD0iTUlBIiBwdXA9Ik1JQSIgcGNuPSI4Ni4wMyIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdmN0PSJFQ0FSIiB2Y2Q9IkFMIi8+",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ECAR",
			"name": "CARRO ECONÔMICO ",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 172.06,
			"priceWithoutTax": 172.06,
			"pricePerDayWithTax": 57.36,
			"pricePerDayWithoutTax": 57.36,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzMzIiBjbWk9IjIiIGNtYz0iMjAwMDEiIGN1cj0iVVNEIiBta3A9IjAuNSIgbWtpPSIxMSIgbm9uPSIzIiBwZHQ9IjIwMTYtMTEtMTZUMTE6MDA6MDAiIHBrcD0iTUlBIiBwdXA9Ik1JQSIgcGNuPSI4Ni4wMyIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdmN0PSJFQ0FSIiB2Y2Q9IkFMIi8+",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389706.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "CCAR",
			"name": "CARRO COMPACTO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 178.48,
			"priceWithoutTax": 178.48,
			"pricePerDayWithTax": 59.5,
			"pricePerDayWithoutTax": 59.5,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM1IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249Ijg5LjI0IiBydGM9Ik1CMyIgcnRrPSI0NzYwMDUzODEwIiBydG49Ik1JQSIgcmR0PSIyMDE2LTExLTE5VDExOjAwOjAwIiBzZHQ9IjIwMTYtMDktMDdaIiB0cmM9Iko3NjE0MDAiIHZjdD0iQ0NBUiIgdmNkPSJBTCIvPg==",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "CCAR",
			"name": "CARRO COMPACTO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 178.48,
			"priceWithoutTax": 178.48,
			"pricePerDayWithTax": 59.5,
			"pricePerDayWithoutTax": 59.5,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM1IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249Ijg5LjI0IiBydGM9Ik1CMyIgcnRrPSI0NzYwMDUzODEwIiBydG49Ik1JQSIgcmR0PSIyMDE2LTExLTE5VDExOjAwOjAwIiBzZHQ9IjIwMTYtMDktMDdaIiB0cmM9Iko3NjE0MDAiIHZjdD0iQ0NBUiIgdmNkPSJBTCIvPg==",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "CCAR",
			"name": "CARRO COMPACTO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 178.48,
			"priceWithoutTax": 178.48,
			"pricePerDayWithTax": 59.5,
			"pricePerDayWithoutTax": 59.5,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM1IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249Ijg5LjI0IiBydGM9Ik1CMyIgcnRrPSI0NzYwMDUzODEwIiBydG49Ik1JQSIgcmR0PSIyMDE2LTExLTE5VDExOjAwOjAwIiBzZHQ9IjIwMTYtMDktMDdaIiB0cmM9Iko3NjE0MDAiIHZjdD0iQ0NBUiIgdmNkPSJBTCIvPg==",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389707.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ICAR",
			"name": "CARRO MÉDIO  INTERMEDIARIO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 208,
			"priceWithoutTax": 208,
			"pricePerDayWithTax": 69.34,
			"pricePerDayWithoutTax": 69.34,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM0IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249IjEwNC4wMCIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdHJjPSJKNzYxNDAwIiB2Y3Q9IklDQVIiIHZjZD0iQUwiLz4=",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ICAR",
			"name": "CARRO MÉDIO  INTERMEDIARIO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 208,
			"priceWithoutTax": 208,
			"pricePerDayWithTax": 69.34,
			"pricePerDayWithoutTax": 69.34,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM0IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249IjEwNC4wMCIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdHJjPSJKNzYxNDAwIiB2Y3Q9IklDQVIiIHZjZD0iQUwiLz4=",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "F2 *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
		"category": {
			"code": "ICAR",
			"name": "CARRO MÉDIO  INTERMEDIARIO",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 208,
			"priceWithoutTax": 208,
			"pricePerDayWithTax": 69.34,
			"pricePerDayWithoutTax": 69.34,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzM0IiBjbWk9IjIiIGNkbj0iSjc2MTQwMCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249IjEwNC4wMCIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdHJjPSJKNzYxNDAwIiB2Y3Q9IklDQVIiIHZjZD0iQUwiLz4=",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389750.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO F2*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}, {
		"description": "COMPLETO - Quilometragem livre- Proteção do veículo (CDW)- Proteção a terceiros (EP)- 1 tanque de combustível- 1 motorista adicional- GPS",
		"category": {
			"code": "SCAR",
			"name": "CARRO STANDARD",
			"numberDoors": 2,
			"contents": [{
				"code": "optional-items",
				"name": "Itens Opcionais",
				"items": [{
					"code": "automatico",
					"name": "Automático"
				}]
			}]
		},
		"player": {
      "code": "ZT"
    },
		"rates": [{
			"description": "Km Livre",
			"currency": "USD",
			"priceWithTax": 223.42,
			"priceWithoutTax": 223.42,
			"pricePerDayWithTax": 74.48,
			"pricePerDayWithoutTax": 74.48,
			"rateToken": "PGNhcjpyYXRlVG9rZW4geG1sbnM6Y2FyPSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9jYXJzIiBhZ2M9IjAiIGFncz0iVyIgYnJjPSIxMDAwIiBjdGc9IkNhciIgY2djPSI4NzQyIiBjbWk9IjIiIGNkbj0iMzg3NDVHUCIgY21jPSIyMDAwMSIgY3VyPSJVU0QiIG1rcD0iMC41IiBta2k9IjExIiBub249IjMiIHBkdD0iMjAxNi0xMS0xNlQxMTowMDowMCIgcGtwPSJNSUEiIHB1cD0iTUlBIiBwY249IjExMS43MSIgcnRjPSJNQjMiIHJ0az0iNDc2MDA1MzgxMCIgcnRuPSJNSUEiIHJkdD0iMjAxNi0xMS0xOVQxMTowMDowMCIgc2R0PSIyMDE2LTA5LTA3WiIgdHJjPSIzODc0NUdQIiB2Y3Q9IlNDQVIiIHZjZD0iQUwiLz4=",
			"pickup": {
				"date": "2016-11-16T11:00:00"
			},
			"return": {
				"date": "2016-11-19T11:00:00"
			}
		}],
		"links": {
			"thumbnailImage": {
				"href": "http://img.cvc.com.br/carros/locadoras/389543.jpg"
			}
		},
		"contents": [{
			"code": "car-full-descriptions",
			"name": "Descrição Completa",
			"description": "*PLANO GP* COM GPS: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS; PRIMEIRO TANQUE DE COMBUSTIVEL: o veículo pode ser devolvido com o tanque vazio E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
		}]
	}],
	"meta": {
		"price": {
			"minWithTax": 172.06,
			"minWithoutTax": 172.06,
			"maxWithTax": 486,
			"maxWithoutTax": 486
		},
		"counterCars": 56,
		"categories": [{
			"code": "ICAR",
			"name": "CARRO MÉDIO  INTERMEDIARIO"
		}, {
			"code": "IDAR",
			"name": "CARRO MÉDIO  INTERMEDIARIO"
		}, {
			"code": "ECAR",
			"name": "CARRO ECONÔMICO "
		}, {
			"code": "EDAR",
			"name": "CARRO ECONÔMICO "
		}, {
			"code": "CCAR",
			"name": "CARRO COMPACTO"
		}, {
			"code": "CDAR",
			"name": "CARRO COMPACTO"
		}, {
			"code": "XXAR"
		}, {
			"code": "SCAR",
			"name": "CARRO STANDARD"
		}, {
			"code": "FCAR",
			"name": "CARRO GRANDE  FULLSIZE"
		}, {
			"code": "PCAR",
			"name": "CARRO PREMIUM"
		}, {
			"code": "MVAR",
			"name": "MINI VAN"
		}, {
			"code": "LCAR",
			"name": "CARRO LUXO"
		}],
		"rentalCompanies": [{
			"code": "2",
			"name": "TRAVELPORT"
		}],
		"features": [{
			"code": "automatico",
			"name": "Automático"
		}]
	}
};

var carReal = {
  "cars": [
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "SCAR",
        "name": "CARRO STANDARD"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 279.7,
          "priceWithoutTax": 279.7,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlNDQVIiIGNnYz0iODc0MiIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjI3OS43MCIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374909.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "FVAR",
        "name": "MAXI VAN"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 551.16,
          "priceWithoutTax": 551.16,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IkZWQVIiIGNnYz0iNzc5NiIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjU1MS4xNiIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374969.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "FCAR",
        "name": "CARRO GRANDE  FULLSIZE"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 291.26,
          "priceWithoutTax": 291.26,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IkZDQVIiIGNnYz0iODczNiIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjI5MS4yNiIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374903.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "IFAR",
        "name": "SUV MÉDIO"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 291.26,
          "priceWithoutTax": 291.26,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IklGQVIiIGNnYz0iODc0MyIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjI5MS4yNiIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374930.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "PCAR",
        "name": "CARRO PREMIUM"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 310.23,
          "priceWithoutTax": 310.23,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlBDQVIiIGNnYz0iODczOCIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjMxMC4yMyIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374908.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "LCAR",
        "name": "CARRO LUXO"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 386.14,
          "priceWithoutTax": 386.14,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IkxDQVIiIGNnYz0iMzE1NyIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjM4Ni4xNCIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374939.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "MVAR",
        "name": "MINI VAN"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 344.89,
          "priceWithoutTax": 344.89,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9Ik1WQVIiIGNnYz0iNzc5NSIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjM0NC44OSIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374940.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "STAR",
        "name": "CARRO CONVERSIVEL"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 374.59,
          "priceWithoutTax": 374.59,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlNUQVIiIGNnYz0iMzA3OSIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjM3NC41OSIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374927.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "SFAR",
        "name": "SUV"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 327.56,
          "priceWithoutTax": 327.56,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlNGQVIiIGNnYz0iNzc5OCIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjMyNy41NiIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374941.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "RFAR",
        "name": "SUV"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 416.67,
          "priceWithoutTax": 416.67,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlJGQVIiIGNnYz0iNzc5OCIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjQxNi42NyIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374952.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "FFAR",
        "name": "SUV GRANDE"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 494.23,
          "priceWithoutTax": 494.23,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IkZGQVIiIGNnYz0iODc0NCIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjQ5NC4yMyIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374970.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional",
      "category": {
        "code": "PFAR",
        "name": "SUV LUXO"
      },
      "player": {
        "code": "ZD",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 600.67,
          "priceWithoutTax": 600.67,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IlBGQVIiIGNnYz0iODc0NSIgY21pPSIxIiBjZG49Iko0OTg0MDAiIGNpZD0iMTAwMDEiIGR0Zj0iMjAxNi0xMS0xNlQxMjowMCIgZWljPSJNSUEiIHB1cD0iTUlBIiBwb3Q9IjYwMC42NyIgcGlkPSI4MjYiIHNkdD0iMjAxNi0wOS0xOS0wMzowMCIgZHRpPSIyMDE2LTExLTE1VDEyOjAwIiBzaWM9Ik1JQSIgdHJjPSJKNDk4NDAwIiB2cGY9IlpEIi8+",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/374928.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "BZ *NECESSÁRIO VOUCHER DA LOCADORA*- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (ALI)- 1 tanque de combustível- 1 motorista adicional"
        }
      ]
    },
    {
      "description": "ALL INCLUSIVE LIGHT- Quilometragem livre- Proteção do veículo (LDW)- Proteção a terceiros (LIS)- 1 motorista adicional",
      "category": {
        "code": "EDAR",
        "name": "CARRO ECONÔMICO "
      },
      "player": {
        "code": "ZE",
        "name": null
      },
      "rates": [
        {
          "currency": "BRL",
          "priceWithTax": 160.53,
          "priceWithoutTax": 105.61,
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyaT0iMjAwIiBjYXQ9IkVEQVIiIGNnYz0iODczMyIgY21pPSIxIiBjaWQ9IjEwMDAxIiBkdGY9IjIwMTYtMTEtMTZUMTI6MDAiIGVpYz0iTUlBIiBwdXA9Ik1JQSIgcG90PSIxMDUuNjEiIHBpZD0iNzIxIiBzZHQ9IjIwMTYtMDktMTktMDM6MDAiIGR0aT0iMjAxNi0xMS0xNVQxMjowMCIgc2ljPSJNSUEiIHZwZj0iWkUiLz4=",
          "pickup": {
            "name": "MIA",
            "date": "2016-11-15T12:00"
          },
          "return": {
            "name": "MIA",
            "date": "2016-11-16T12:00"
          }
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://img.cvc.com.br/carros/locadoras/282773.jpg"
        }
      },
      "contents": [
        {
          "code": "car-full-descriptions",
          "name": "Descrição Completa",
          "description": "*PLANO UF*: INCLUI QUILOMETRAGEM LIVRE; PROTEÇÃO AO VEÍCULO: com cobertura contra roubo, furto, colisão e incêndio até o valor do veículo locado; PROTEÇÃO A TERCEIROS: com cobertura de danos materiais e corporais (consulte valores e condições de cobertura); IMPOSTOS LOCAIS E PRIMEIRO MOTORISTA ADICIONAL - NÃO INCLUI TAXA DE ONE WAY quando o veículo é retirado em um local e devolvido em outro E EQUIPAMENTO PARA NÃO PARAR NO PEDÁGIO que devem ser pagos no balcão da locadora no momento da devolução do veículo."
        }
      ]
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 160.53,
      "minWithoutTax": 105.61,
      "maxWithTax": 600.67,
      "maxWithoutTax": 600.67
    },
    "counterCars": 13,
    "categories": [
      {
        "code": "SCAR",
        "name": "CARRO STANDARD"
      },
      {
        "code": "FVAR",
        "name": "MAXI VAN"
      },
      {
        "code": "FCAR",
        "name": "CARRO GRANDE  FULLSIZE"
      },
      {
        "code": "IFAR",
        "name": "SUV MÉDIO"
      },
      {
        "code": "PCAR",
        "name": "CARRO PREMIUM"
      },
      {
        "code": "LCAR",
        "name": "CARRO LUXO"
      },
      {
        "code": "MVAR",
        "name": "MINI VAN"
      },
      {
        "code": "STAR",
        "name": "CARRO CONVERSIVEL"
      },
      {
        "code": "SFAR",
        "name": "SUV"
      },
      {
        "code": "RFAR",
        "name": "SUV"
      },
      {
        "code": "FFAR",
        "name": "SUV GRANDE"
      },
      {
        "code": "PFAR",
        "name": "SUV LUXO"
      },
      {
        "code": "EDAR",
        "name": "CARRO ECONÔMICO "
      }
    ],
    "rentalCompanies": [
      {
        "code": "ZD",
        "name": null
      },
      {
        "code": "ZE",
        "name": null
      }
    ]
  }
};