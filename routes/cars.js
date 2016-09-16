var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(cars);
});

router.get('/locations', function(req, res, next) {
  res.json(cars);
});

router.get('/:rate_token', function(req, res, next) {
  var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
	
	if (rateToken.includes('rateToken')) {
		res.json(cars);
	} else {
		return res.status(500).send({ 
		  code: 500, 
		  message: 'Invalid Rate Token' 
		});
	}
});


router.get('/locations/:location_id', function(req, res, next) {
  res.json(cars);
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