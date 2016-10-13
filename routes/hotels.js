var express     = require('express');
var app         = express();
var router      = express.Router();
var bodyParser  = require('body-parser');

router.get('/', function(req, res, next) {
  res.json(hotels);
});

router.get('/:hotel_id', function(req, res, next) {
	res.json(hotel);
});

router.get('/:hotel_id/rooms', function(req, res, next) {
	res.json(rooms);
});

router.get('/:hotel_id/rooms/:rate_token', function(req, res, next) {
	var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
	
	res.json(rateTokenRoom);
 //  if (rateToken.includes('rateToken')) {
	// } else {
	// 	return res.status(500).send({ 
	// 	  code: 500, 
	// 	  message: 'Invalid Rate Token' 
	// 	});
	// }

});

module.exports = router;

var hotels = {
  "hotels": [
    {
      "id": "4510660023",
      "priority": 6,
      "name": "HOTEL AMERICANO",
      "description": "Localizado no centro da cidade, ao lado dos Arcos da Lapa, o hotel fica junto ao metrô e próximo ao Corcovado, Pão de Açúcar e praias da Zona Sul. Conta com estacionamento e internet wi-fi gratuitos. Todas as suítes possuem ar-condicionado, frigobar, TV a cabo e cofre digital.",
      "isPreferential": false,
      "location": {
        "address": "JOAQUIM SILVA 69   205 RIO DE JANEIRO RJ BR 20241110",
        "coordinates": {
          "latitude": "-22.914846",
          "longitude": "-43.178349"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD - SINGLE|DIÁRIA(S) SEM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) SEM CAFÉ DA MANHÃ",
          "category": "STANDARD - SINGLE",
          "minPax": 1,
          "maxPax": 1,
          "quantityAvailable": 5,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBwa2c9InVuZGVmaW5lZCIgcGxhPSIzOCIgY21pPSIzOCIgaXpvPSI5NjI2IiBhZ3M9IlciIGJyYz0iMTAwMCIgbGFuPSJwdF9CUiIgZGluPSIyMDE2LTA3LTI4IiBkb3U9IjIwMTYtMDctMjkiIHB4cz0iMzAsMzAiLz4+",
              "currency": "BRL",
              "priceWithTax": 694.71,
              "priceWithoutTax": 694.71,
              "pricePerDayWithTax": 694.71,
              "pricePerDayWithoutTax": 694.71,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) SEM CAFÉ DA MANHÃ - CANCELAMENTO ATE 24 HORAS ANTES DO CHECK-IN, PACOTES, REVEILLON, CARNAVAL, FERIADOS E PERIODO DE OLIMPIADAS DE 04/08 Á 21/08 NÃO REEMBOLSAVEL.  Check-in as 13:00 e Check-out até 12:00\r\n"
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyNDMzIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgLSBTSU5HTEUiIGZlZT0iMCIgaG90PSI0NTEwNjYwMDIzIiBpem89IjcxMTAiIGxhbj0icHRfQlIiIGxvZD0iSG90ZWwiIG1lbD0iREnDgVJJQShTKSBTRU0gQ0FGw4kgREEgTUFOSMODIiBta3A9IjAuNjM0OCIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjQ1IiBwcmM9IjQ0MSIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iNjE0NjY2NSIvPg==",
              "currency": "BRL",
              "priceWithTax": 694.71,
              "priceWithoutTax": 694.71,
              "pricePerDayWithTax": 694.71,
              "pricePerDayWithoutTax": 694.71,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) SEM CAFÉ DA MANHÃ - CANCELAMENTO ATE 24 HORAS ANTES DO CHECK-IN, PACOTES, REVEILLON, CARNAVAL, FERIADOS E PERIODO DE OLIMPIADAS DE 04/08 Á 21/08 NÃO REEMBOLSAVEL.  Check-in as 13:00 e Check-out até 12:00\r\n"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/355698.jpg"
        }
      }
    },
    {
      "id": "4510663610",
      "priority": 6,
      "name": "HOTEL GALICIA",
      "description": "Perto do centro da cidade, o Hotel Galicia oferece fácil acesso a empresas, centros de convenções e ao estádio do Maracanã. Aproveite a praticidade e o conforto dos quartos equipados com ar-condicionado, frigobar, cofre e internet wi-fi. Em cerca de 20 minutos de carro você chegará a pontos turísticos como o Pão de Açúcar e a praia de Copacabana.",
      "isPreferential": false,
      "location": {
        "address": "RUA CARLOS DE CARVALHO 6  CENTRO 205 RIO DE JANEIRO RJ BR 20230180",
        "coordinates": {
          "latitude": "-22.891102",
          "longitude": "-43.343704"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD TWIN|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "STANDARD TWIN",
          "minPax": 1,
          "maxPax": 4,
          "quantityAvailable": 10,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTA2NjM2MTAiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlZISSIgcGxhPSI0NSIgcHJjPSI1NzAiIHB4cz0iMzAiIHJldD0iIiByb209IjYxMzg3MjMiLz4=",
              "currency": "BRL",
              "priceWithTax": 897.93,
              "priceWithoutTax": 897.93,
              "pricePerDayWithTax": 897.93,
              "pricePerDayWithoutTax": 897.93,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CANCELAMENTO PERMITIDO ATE 24 HORAS DE ANTECEDENCIA EXCETO CARNAVAL E REVEILLON CANCELAMENTO PERMITIDO ATE 30 DIAS ANTES, APOS NAO REEMBOLSAVEL, PERIODO DE OLIMPIADAS DE 01/08/2016 a 21/08/2016 NÃO SÃO REEMBOLSAVEIS.1 CHD FREE ATE 3 ANOS NA MESMA CAMA DOS PAIS."
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTA2NjM2MTAiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iNDUiIHByYz0iNTcwIiBweHM9IjMwIiByZXQ9IiIgcm9tPSI2MTM4NzIzIi8+",
              "currency": "BRL",
              "priceWithTax": 897.93,
              "priceWithoutTax": 897.93,
              "pricePerDayWithTax": 897.93,
              "pricePerDayWithoutTax": 897.93,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CANCELAMENTO PERMITIDO ATE 24 HORAS DE ANTECEDENCIA EXCETO CARNAVAL E REVEILLON CANCELAMENTO PERMITIDO ATE 30 DIAS ANTES, APOS NAO REEMBOLSAVEL, PERIODO DE OLIMPIADAS DE 01/08/2016 a 21/08/2016 NÃO SÃO REEMBOLSAVEIS.1 CHD FREE ATE 3 ANOS NA MESMA CAMA DOS PAIS."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/384029.jpg"
        }
      }
    },
    {
      "id": "455615568",
      "priority": 6,
      "name": "RIO´S NICE",
      "description": "O Rio's Nice Hotel está a poucos minutos da praia do Flamengo e de vários pontos turísticos do Rio de Janeiro, como os Arcos da Lapa. A infraestrutura do hotel inclui piscina, sauna, bar, restaurante e internet wi-fi nas áreas sociais.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "RIACHUELO 201   205 RIO DE JANEIRO RJ BR 20230011",
        "coordinates": {
          "latitude": "-22.914598",
          "longitude": "-43.185612"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "APTO STANDARD|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "APTO STANDARD",
          "minPax": 1,
          "maxPax": 2,
          "quantityAvailable": 3,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iQVBUTyBTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NTYxNTU2OCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iVkhJIiBwbGE9IjQ1IiBwcmM9IjU5NCIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iNjI5MzkwIi8+",
              "currency": "BRL",
              "priceWithTax": 935.73,
              "priceWithoutTax": 935.73,
              "pricePerDayWithTax": 935.73,
              "pricePerDayWithoutTax": 935.73,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL E REVEILLON E PARAOLIMPIADAS NÃO SÃO REMBOLSÁVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO. "
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iQVBUTyBTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NTYxNTU2OCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iU1RBTkRBTE9ORSIgcGxhPSI0NSIgcHJjPSI1OTQiIHB4cz0iMzAiIHJldD0iIiByb209IjYyOTM5MCIvPg==",
              "currency": "BRL",
              "priceWithTax": 935.73,
              "priceWithoutTax": 935.73,
              "pricePerDayWithTax": 935.73,
              "pricePerDayWithoutTax": 935.73,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL E REVEILLON E PARAOLIMPIADAS NÃO SÃO REMBOLSÁVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO. "
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/144662.jpg"
        }
      }
    },
    {
      "id": "455101068",
      "priority": 6,
      "name": "POUSO REAL",
      "description": "Com localização estratégica no centro histórico do Rio de Janeiro, o Hotel Pouso Real dá fácil acesso aos principais pontos turísticos e praias do Rio de Janeiro.",
      "isPreferential": false,
      "location": {
        "address": "RUA DO RESENDE 35  LAPA 205 RIO DE JANEIRO RJ BR 20000000",
        "coordinates": {
          "latitude": "-1",
          "longitude": "-1"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "APTO STANDARD|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "APTO STANDARD",
          "minPax": 1,
          "maxPax": 2,
          "quantityAvailable": 10,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iQVBUTyBTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NTEwMTA2OCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iVkhJIiBwbGE9IjQ1IiBwcmM9IjYyMSIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iNDYyODYzMyIvPg==",
              "currency": "BRL",
              "priceWithTax": 978.27,
              "priceWithoutTax": 978.27,
              "pricePerDayWithTax": 978.27,
              "pricePerDayWithoutTax": 978.27,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CAMA DE CASAL - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL, REVEILLON E OU GRANDES EVENTOS, NÃO SÃO REEMBOLSÁVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO - ACOMODAÇÃO SERA FEITA EM CAMA DE CASAL. - BRASIL FÁCIL -  NÃO ACOMODA CHD E NÃO POSSUI FRIGOBAR."
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iQVBUTyBTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NTEwMTA2OCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iU1RBTkRBTE9ORSIgcGxhPSI0NSIgcHJjPSI2MjEiIHB4cz0iMzAiIHJldD0iIiByb209IjQ2Mjg2MzMiLz4=",
              "currency": "BRL",
              "priceWithTax": 978.27,
              "priceWithoutTax": 978.27,
              "pricePerDayWithTax": 978.27,
              "pricePerDayWithoutTax": 978.27,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CAMA DE CASAL - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL, REVEILLON E OU GRANDES EVENTOS, NÃO SÃO REEMBOLSÁVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO - ACOMODAÇÃO SERA FEITA EM CAMA DE CASAL. - BRASIL FÁCIL -  NÃO ACOMODA CHD E NÃO POSSUI FRIGOBAR."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/252984.jpg"
        }
      }
    },
    {
      "id": "4510663591",
      "priority": 6,
      "name": "HOTEL VINA DEL MAR",
      "description": "Localizado no centro da cidade, ao lado dos Arcos da Lapa, o hotel oferece estacionamento, internet wi-fi gratuito em todas as dependências, business center, serviço de quarto 24h e restaurante. Todas as suítes contam com TV por assinatura, ar-condicionado, frigobar, rádio-relógio, cofre, secador de cabelos e telefone.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "JOAQUIM SILVA 57   205 RIO DE JANEIRO RJ BR 20241110",
        "coordinates": {
          "latitude": "-22.914846",
          "longitude": "-43.178349"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD TWIN|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "STANDARD TWIN",
          "minPax": 1,
          "maxPax": 4,
          "quantityAvailable": 6,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTA2NjM1OTEiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlZISSIgcGxhPSI0NSIgcHJjPSI2MzYiIHB4cz0iMzAiIHJldD0iIiByb209IjYxNTA1ODAiLz4=",
              "currency": "BRL",
              "priceWithTax": 1001.9,
              "priceWithoutTax": 1001.9,
              "pricePerDayWithTax": 1001.9,
              "pricePerDayWithoutTax": 1001.9,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ-  CANCELAMENTO ISENTO DE MULTA DESDE QUE ATE 24 HORAS DE ANTECEDENCIA, PERIODO DE OLIMPIADAS DE 04/08 Á 21/08, REVEILLON E CARNAVAL NÃO REEMBOLSAVEL."
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTA2NjM1OTEiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iNDUiIHByYz0iNjM2IiBweHM9IjMwIiByZXQ9IiIgcm9tPSI2MTUwNTgwIi8+",
              "currency": "BRL",
              "priceWithTax": 1001.9,
              "priceWithoutTax": 1001.9,
              "pricePerDayWithTax": 1001.9,
              "pricePerDayWithoutTax": 1001.9,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ-  CANCELAMENTO ISENTO DE MULTA DESDE QUE ATE 24 HORAS DE ANTECEDENCIA, PERIODO DE OLIMPIADAS DE 04/08 Á 21/08, REVEILLON E CARNAVAL NÃO REEMBOLSAVEL."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/355816.jpg"
        }
      }
    },
    {
      "id": "4510915429",
      "priority": 6,
      "name": "APA HOTEL COPACABANA",
      "description": "O hotel está próximo da famosa praia de Copacabana e oferece fácil acesso a estações de metrô, restaurantes, bares e shoppings. Aproveite a beleza natural e a localização privilegiada da região com o conforto dos quartos do APA Hotel Copacabana, que contam com internet wi-fi gratuita, ar-condicionado, TV e frigobar. Internet wi-fi gratuita em todo o hotel, café da manhã e estacionamento (custo adicional) também estão disponíveis.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "REPÚBLICA DO PERU 305   205 RIO DE JANEIRO RJ BR 22021040",
        "coordinates": {
          "latitude": "-22.96694",
          "longitude": "-43.18198"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "STANDARD",
          "minPax": 1,
          "maxPax": 3,
          "quantityAvailable": 6,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyMjIiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1MTA5MTU0MjkiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlZISSIgcGxhPSI0NSIgcHJjPSI3MTciIHB4cz0iMzAiIHJldD0iIiByb209IjY2NjE1NzQiLz4=",
              "currency": "BRL",
              "priceWithTax": 1129.49,
              "priceWithoutTax": 1129.49,
              "pricePerDayWithTax": 1129.49,
              "pricePerDayWithoutTax": 1129.49,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ -  ACOMODA SOMENTE 1 PESSOA E UMA CRIANÇA ATÉ 6 ANOS CORTESIA NA CAMA COM OS PAIS - CHECK IN 14HS E CHECK OUT 12HS - BRASIL FACIL"
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyMjIiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1MTA5MTU0MjkiIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iNDUiIHByYz0iNzE3IiBweHM9IjMwIiByZXQ9IiIgcm9tPSI2NjYxNTc0Ii8+",
              "currency": "BRL",
              "priceWithTax": 1129.49,
              "priceWithoutTax": 1129.49,
              "pricePerDayWithTax": 1129.49,
              "pricePerDayWithoutTax": 1129.49,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ -  ACOMODA SOMENTE 1 PESSOA E UMA CRIANÇA ATÉ 6 ANOS CORTESIA NA CAMA COM OS PAIS - CHECK IN 14HS E CHECK OUT 12HS - BRASIL FACIL"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/371026.jpg"
        }
      }
    },
    {
      "id": "454881096",
      "priority": 6,
      "name": "AUGUSTOS PAYSANDU",
      "description": "O clima hospitaleiro do Augustus Paysandu agrada a todos os tipos de visitantes. Próximo da praia do Flamengo e de outros pontos turísticos cariocas, como o Pão de Açúcar, o hotel oferece diversão para crianças e as acomodações possuem TV por assinatura e acesso à internet.",
      "isPreferential": false,
      "location": {
        "address": "PAISSANDU 23   205 RIO DE JANEIRO RJ BR 22210080",
        "coordinates": {
          "latitude": "-22.935137",
          "longitude": "-43.178955"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "STANDARD",
          "minPax": 1,
          "maxPax": 2,
          "quantityAvailable": 6,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyMjIiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NDg4MTA5NiIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iVkhJIiBwbGE9IjQ1IiBwcmM9IjcyNiIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iODcxNjM0Ii8+",
              "currency": "BRL",
              "priceWithTax": 1143.67,
              "priceWithoutTax": 1143.67,
              "pricePerDayWithTax": 1143.67,
              "pricePerDayWithoutTax": 1143.67,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL E REVEILLON Cancelamento sem ônus até 30 dias antes da data de check in, a partir de 29 dias de antecedência ao período de check in será cobrado 100% de multa"
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyMjIiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJTVEFOREFSRCIgZmVlPSIwIiBob3Q9IjQ1NDg4MTA5NiIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iU1RBTkRBTE9ORSIgcGxhPSI0NSIgcHJjPSI3MjYiIHB4cz0iMzAiIHJldD0iIiByb209Ijg3MTYzNCIvPg==",
              "currency": "BRL",
              "priceWithTax": 1143.67,
              "priceWithoutTax": 1143.67,
              "pricePerDayWithTax": 1143.67,
              "pricePerDayWithoutTax": 1143.67,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - DIÁRIAS OU PACOTE EM FERIADOS, CARNAVAL E REVEILLON Cancelamento sem ônus até 30 dias antes da data de check in, a partir de 29 dias de antecedência ao período de check in será cobrado 100% de multa"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/267976.jpg"
        }
      }
    },
    {
      "id": "4511245047",
      "priority": 6,
      "name": "BRISTOL EASY PLUS HOTEL",
      "description": "Próximo ao centro da cidade, o hotel é ótimo para quem quer ficar perto de museus, estações de metrô e do Teatro Municipal do Rio de Janeiro. Aproveite os quartos equipados com ar-condicionado, TV e secador de cabelo. Também há restaurante, serviço de passar roupa e internet wi-fi gratuita.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "RIACHUELO 242   205 RIO DE JANEIRO RJ BR 20230015",
        "coordinates": {
          "latitude": "-22.914787",
          "longitude": "-43.186825"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "STANDARD TWIN|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "STANDARD TWIN",
          "minPax": 1,
          "maxPax": 2,
          "quantityAvailable": 2,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTEyNDUwNDciIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlZISSIgcGxhPSI0NSIgcHJjPSI3NDQiIHB4cz0iMzAiIHJldD0iIiByb209Ijc4Nzk1MzUiLz4=",
              "currency": "BRL",
              "priceWithTax": 1172.03,
              "priceWithoutTax": 1172.03,
              "pricePerDayWithTax": 1172.03,
              "pricePerDayWithoutTax": 1172.03,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - cama de solteiro - Check in 14h e Check out 12h -"
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSI0OTU4IiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI2IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgVFdJTiIgZmVlPSIwIiBob3Q9IjQ1MTEyNDUwNDciIGl6bz0iNzExMCIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iNDUiIHByYz0iNzQ0IiBweHM9IjMwIiByZXQ9IiIgcm9tPSI3ODc5NTM1Ii8+",
              "currency": "BRL",
              "priceWithTax": 1172.03,
              "priceWithoutTax": 1172.03,
              "pricePerDayWithTax": 1172.03,
              "pricePerDayWithoutTax": 1172.03,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - cama de solteiro - Check in 14h e Check out 12h -"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/382401.jpg"
        }
      }
    },
    {
      "id": "4510892028",
      "priority": 6,
      "name": "HOTEL SAN MARCO IPANEMA",
      "description": "O Hotel San Marco fica no coração do Rio de Janeiro, a apenas  duas quadras da Praia de Ipanema. Oferece café da manhã, serviço de quarto, recepção 24h e internet wi-fi gratuita nas áreas comuns. Os 56 apartamentos são equipados com ar-condicionado, frigobar, TV e cofre.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "VISCONDE DE PIRAJÁ 524   205 RIO DE JANEIRO RJ BR 22410002",
        "coordinates": {
          "latitude": "-22.983801",
          "longitude": "-43.210423"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "ECONÔMICA|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "ECONÔMICA",
          "minPax": 1,
          "maxPax": 3,
          "quantityAvailable": 1,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyNzciIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJFQ09Ow5RNSUNBIiBmZWU9IjAiIGhvdD0iNDUxMDg5MjAyOCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iVkhJIiBwbGE9IjQ1IiBwcmM9Ijc1MyIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iNjYwNzQ0OCIvPg==",
              "currency": "BRL",
              "priceWithTax": 1186.21,
              "priceWithoutTax": 1186.21,
              "pricePerDayWithTax": 1186.21,
              "pricePerDayWithoutTax": 1186.21,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - UMA CRIANÇA CORTESIA NA CAMA COM OS PAIS ATÉ 4 ANOS.BRASIL FACIL"
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIyNzciIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJFQ09Ow5RNSUNBIiBmZWU9IjAiIGhvdD0iNDUxMDg5MjAyOCIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iU1RBTkRBTE9ORSIgcGxhPSI0NSIgcHJjPSI3NTMiIHB4cz0iMzAiIHJldD0iIiByb209IjY2MDc0NDgiLz4=",
              "currency": "BRL",
              "priceWithTax": 1186.21,
              "priceWithoutTax": 1186.21,
              "pricePerDayWithTax": 1186.21,
              "pricePerDayWithoutTax": 1186.21,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - UMA CRIANÇA CORTESIA NA CAMA COM OS PAIS ATÉ 4 ANOS.BRASIL FACIL"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/370557.jpg"
        }
      }
    },
    {
      "id": "459383275",
      "priority": 6,
      "name": "HOTEL HARMONYA",
      "description": "O Harmonya Hotel fica a 10 quilômetros da praia da Barra da Tijuca e oferece quartos e lounges com vista para seu jardim. Os quartos são bem iluminados e têm janelas grandes, internet wi-fi gratuita, ar-condicionado, TV, guarda-roupa e frigobar. O hotel oferece café da manhã, tem estacionamento gratuito e fica a 20 quilômetros do aeroporto internacional do Rio de Janeiro.",
      "award": 3,
      "isPreferential": false,
      "location": {
        "address": "ESTRADA DOS BANDEIRANTES 20008 0 JACAREPAGUÁ 205 RIO DE JANEIRO RJ BR 22783114",
        "coordinates": {
          "latitude": "-22.9869",
          "longitude": "-43.480125"
        }
      },
      "rooms": [
        {
          "rph": 1,
          "group": "APARTAMENTO|DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
          "category": "APARTAMENTO",
          "minPax": 1,
          "maxPax": 2,
          "quantityAvailable": 3,
          "isAvailable": true,
          "rates": [
            {
              "packageGroup": "VHI",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzMjgiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJBUEFSVEFNRU5UTyIgZmVlPSIwIiBob3Q9IjQ1OTM4MzI3NSIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iVkhJIiBwbGE9IjQ1IiBwcmM9IjgxMyIgcHhzPSIzMCIgcmV0PSIiIHJvbT0iMzk1MzI3NCIvPg==",
              "currency": "BRL",
              "priceWithTax": 1280.72,
              "priceWithoutTax": 1280.72,
              "pricePerDayWithTax": 1280.72,
              "pricePerDayWithoutTax": 1280.72,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CHECK IN AS 14:00 HRS E CHECK OUT AS 12:00 HRS - DIÁRIAS OU PACOTES EM RÉVEILLON, CARNAVAL  NOS PERÍODOS NÃO SÃO REEMBOLSAVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO."
                    }
                  ]
                }
              ]
            },
            {
              "packageGroup": "STANDALONE",
              "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIzMjgiIGNtYz0iNDUwMDEiIGNtaT0iNDUiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjYiIGRvdT0iMjAxNi0xMC0yOSIgZHNjPSJBUEFSVEFNRU5UTyIgZmVlPSIwIiBob3Q9IjQ1OTM4MzI3NSIgaXpvPSI3MTEwIiBsYW49InB0X0JSIiBsb2Q9IkhvdGVsIiBtZWw9IkRJw4FSSUEoUykgQ09NIENBRsOJIERBIE1BTkjDgyIgbWtwPSIwLjYzNDgiIHBrZz0iU1RBTkRBTE9ORSIgcGxhPSI0NSIgcHJjPSI4MTMiIHB4cz0iMzAiIHJldD0iIiByb209IjM5NTMyNzQiLz4=",
              "currency": "BRL",
              "priceWithTax": 1280.72,
              "priceWithoutTax": 1280.72,
              "pricePerDayWithTax": 1280.72,
              "pricePerDayWithoutTax": 1280.72,
              "contents": [
                {
                  "items": [
                    {
                      "code": "description-agreement",
                      "name": "Description Agreement",
                      "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ - CHECK IN AS 14:00 HRS E CHECK OUT AS 12:00 HRS - DIÁRIAS OU PACOTES EM RÉVEILLON, CARNAVAL  NOS PERÍODOS NÃO SÃO REEMBOLSAVEIS EM CASO DE CANCELAMENTO OU NÃO COMPARECIMENTO."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/images/252805.jpg"
        }
      }
    }
  ],
  "meta": {
    "nightsNumber": 3,
    "statusExecution": {
      "started": "2016-09-12T01:14:35.54Z",
      "total": 1
    },
    "countHotels": 48,
    "price": {
      "minWithTax": 694.71,
      "maxWithTax": 14050.1,
      "minWithoutTax": 694.71,
      "maxWithoutTax": 14050.1
    },
    "mealPlan": [
      {
        "name": "DIÁRIA(S) COM PENSÃO COMPLETA",
        "amount": 1
      },
      {
        "name": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
        "amount": 45
      },
      {
        "name": "DIÁRIA(S) SEM CAFÉ DA MANHÃ",
        "amount": 2
      }
    ],
    "awards": [
      {
        "name": "3",
        "amount": 21
      },
      {
        "name": "4",
        "amount": 5
      }
    ]
  }
};

var hotel = {
  "hotel": {
    "id": "4511405115",
    "name": "ALDEIA DAS AGUAS PARK RESORT",
    "isPreferential": false,
    "location": {
      "address": "BARÃO DO TURVO, DORÂNDIA, RJ, BRASIL"
    },
    "contents": [
      {
        "code": "lazer",
        "name": "lazer",
        "items": [
          {
            "code": "256",
            "description": "Arvorismo"
          },
          {
            "code": "120",
            "description": "Campo de futebol society"
          },
          {
            "code": "997",
            "description": "Entretenimento para crianças"
          },
          {
            "code": "922",
            "description": "Lago para pesca esportiva"
          },
          {
            "code": "339",
            "description": "Parede de escalada"
          },
          {
            "code": "199",
            "description": "Parque aquático"
          },
          {
            "code": "290",
            "description": "Piscinas"
          },
          {
            "code": "45",
            "description": "Quadra poliesportiva"
          },
          {
            "code": "282",
            "description": "Rapel"
          },
          {
            "code": "1397",
            "description": "Rio artificial"
          },
          {
            "code": "1130",
            "description": "SPA"
          },
          {
            "code": "257",
            "description": "Tirolesa"
          },
          {
            "code": "55",
            "description": "Toboágua"
          }
        ]
      },
      {
        "code": "acomodacoes",
        "name": "acomodações",
        "items": [
          {
            "code": "6",
            "description": "Ar-condicionado"
          },
          {
            "code": "644",
            "description": "Cofre"
          },
          {
            "code": "27",
            "description": "Frigobar"
          },
          {
            "code": "319",
            "description": "Internet wi-fi"
          },
          {
            "code": "97",
            "description": "Secador de cabelo"
          },
          {
            "code": "58",
            "description": "TV por assinatura"
          },
          {
            "code": "52",
            "description": "Telefone"
          }
        ]
      },
      {
        "code": "gastronomia",
        "name": "gastronomia",
        "items": [
          {
            "code": "125",
            "description": "Bar molhado"
          },
          {
            "code": "775",
            "description": "Lanchonete"
          },
          {
            "code": "703",
            "description": "Restaurantes"
          }
        ]
      },
      {
        "code": "servicos",
        "name": "serviços",
        "items": [
          {
            "code": "588",
            "description": "Centro de convenções"
          },
          {
            "code": "602",
            "description": "Recepção 24h"
          },
          {
            "code": "866",
            "description": "Serviço diário de limpeza"
          }
        ]
      }
    ],
    "links": {
      "thumbnailImage": {
        "href": "http://www.cvc.com.br/images/387190.jpg"
      },
      "images": [
        {
          "href": "http://www.cvc.com.br/images/387163.jpg"
        },
        {
          "href": "http://www.cvc.com.br/images/387189.jpg"
        },
        {
          "href": "http://www.cvc.com.br/images/387181.jpg"
        },
        {
          "href": "http://www.cvc.com.br/images/387182.jpg"
        },
        {
          "href": "http://www.cvc.com.br/images/387190.jpg"
        },
        {
          "href": "http://www.cvc.com.br/images/387183.jpg"
        }
      ]
    }
  }
};

var rooms = {
  "rooms": [
    {
      "rph": 1,
      "group": "204778755|Sem café|true",
      "description": "1 cama Casal | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Quarto Superior, 1 cama de Casal ou 2 camas de Solteiro",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjY4NC43MSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMjA0Nzc4NzU1IiBydGs9ImMxMGYwYjUzLWQxOTYtNDZiMS04ZDgxLTFhMmVjYzkyYzE3NS01MDAzIiBydHA9IjQ4MjA0MCIvPg==",
          "currency": "BRL",
          "priceWithTax": 1107.59,
          "priceWithoutTax": 1006.91,
          "pricePerDayWithTax": 1107.59,
          "pricePerDayWithoutTax": 1006.91,
          "taxes": [
            {
              "percent": 9.998875447812747,
              "amount": 62.24
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjY4NC43MSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwNDc3ODc1NSIgcnRrPSJjMTBmMGI1My1kMTk2LTQ2YjEtOGQ4MS0xYTJlY2M5MmMxNzUtNTAwMyIgcnRwPSI0ODIwNDAiLz4=",
          "currency": "BRL",
          "priceWithTax": 1241.1,
          "priceWithoutTax": 1128.28,
          "pricePerDayWithTax": 1241.1,
          "pricePerDayWithoutTax": 1128.28,
          "taxes": [
            {
              "percent": 9.998875447812747,
              "amount": 62.24
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "18765|Sem café|false",
      "description": "1 cama Casal | 1 cama Twin",
      "mealPlan": "Sem café",
      "category": "Classic Double Room - BAR",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjczMi4wMSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMTg3NjUiIHJ0az0iNDE1YTZmMGYtY2M1OS00MDMyLWI1ZTctYWVlNGEwM2Y1YWNmLTUwMDMiIHJ0cD0iMTg3NjUiLz4=",
          "currency": "BRL",
          "priceWithTax": 1184.1,
          "priceWithoutTax": 1076.47,
          "pricePerDayWithTax": 1184.1,
          "pricePerDayWithoutTax": 1076.47,
          "taxes": [
            {
              "percent": 9.99894811186079,
              "amount": 66.54
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjczMi4wMSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjE4NzY1IiBydGs9IjQxNWE2ZjBmLWNjNTktNDAzMi1iNWU3LWFlZTRhMDNmNWFjZi01MDAzIiBydHA9IjE4NzY1Ii8+",
          "currency": "BRL",
          "priceWithTax": 1326.83,
          "priceWithoutTax": 1206.22,
          "pricePerDayWithTax": 1326.83,
          "pricePerDayWithoutTax": 1206.22,
          "taxes": [
            {
              "percent": 9.99894811186079,
              "amount": 66.54
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "1872529|Sem café|false",
      "description": "1 cama Casal | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Superior Room, 1 Double or 2 Single Beds - BAR",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjgwNS43MiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMTg3MjUyOSIgcnRrPSIyZTU2YWE3OC02YjIwLTQ3MWItOTkyNC1iYWUxODg2NWExNWUtNTAwMyIgcnRwPSI0ODIwNDAiLz4=",
          "currency": "BRL",
          "priceWithTax": 1303.34,
          "priceWithoutTax": 1184.85,
          "pricePerDayWithTax": 1303.34,
          "pricePerDayWithoutTax": 1184.85,
          "taxes": [
            {
              "percent": 10.000409573088318,
              "amount": 73.25
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjgwNS43MiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjE4NzI1MjkiIHJ0az0iMmU1NmFhNzgtNmIyMC00NzFiLTk5MjQtYmFlMTg4NjVhMTVlLTUwMDMiIHJ0cD0iNDgyMDQwIi8+",
          "currency": "BRL",
          "priceWithTax": 1460.44,
          "priceWithoutTax": 1327.66,
          "pricePerDayWithTax": 1460.44,
          "pricePerDayWithoutTax": 1327.66,
          "taxes": [
            {
              "percent": 10.000409573088318,
              "amount": 73.25
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "202142932|Sem café|true",
      "description": "1 cama King | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Quarto Deluxe",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijg0MC45MSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMjAyMTQyOTMyIiBydGs9IjExODRlNTAyLTliOTktNGE4Ny1hOTAyLTYzYzZkYjhjMDVkZi01MDAzIiBydHA9IjQ4MjA0MSIvPg==",
          "currency": "BRL",
          "priceWithTax": 1360.26,
          "priceWithoutTax": 1236.61,
          "pricePerDayWithTax": 1360.26,
          "pricePerDayWithoutTax": 1236.61,
          "taxes": [
            {
              "percent": 9.999084332936544,
              "amount": 76.44
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijg0MC45MSIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwMjE0MjkzMiIgcnRrPSIxMTg0ZTUwMi05Yjk5LTRhODctYTkwMi02M2M2ZGI4YzA1ZGYtNTAwMyIgcnRwPSI0ODIwNDEiLz4=",
          "currency": "BRL",
          "priceWithTax": 1524.22,
          "priceWithoutTax": 1385.67,
          "pricePerDayWithTax": 1524.22,
          "pricePerDayWithoutTax": 1385.67,
          "taxes": [
            {
              "percent": 9.999084332936544,
              "amount": 76.44
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "208137889|Sem café|true",
      "description": "3 camas Twin | 1 cama King e 1 Solteiro",
      "mealPlan": "Sem café",
      "category": "Quarto Família",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijk2Ni4zMiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMjA4MTM3ODg5IiBydGs9IjQ4ZDdjMTgyLWJkYmUtNDNjZS1hOWJjLTI0YjMyNmQ2Yzk1MC01MDAzIiBydHA9IjIwMTYyNjYzNiIvPg==",
          "currency": "BRL",
          "priceWithTax": 1563.12,
          "priceWithoutTax": 1421.02,
          "pricePerDayWithTax": 1563.12,
          "pricePerDayWithoutTax": 1421.02,
          "taxes": [
            {
              "percent": 10.000341502840165,
              "amount": 87.85
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijk2Ni4zMiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwODEzNzg4OSIgcnRrPSI0OGQ3YzE4Mi1iZGJlLTQzY2UtYTliYy0yNGIzMjZkNmM5NTAtNTAwMyIgcnRwPSIyMDE2MjY2MzYiLz4=",
          "currency": "BRL",
          "priceWithTax": 1751.54,
          "priceWithoutTax": 1592.3,
          "pricePerDayWithTax": 1751.54,
          "pricePerDayWithoutTax": 1592.3,
          "taxes": [
            {
              "percent": 10.000341502840165,
              "amount": 87.85
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "1872533|Sem café|false",
      "description": "1 cama King | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Deluxe Room - BAR",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijk4OS40MiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNjE4MiIgbmFkPSIxIiBwa2c9IlZISSIgcGxhPSIzNiIgcHhzPSIzMCIgcmV0PSIiIHJ0Yz0iMTg3MjUzMyIgcnRrPSI5NDI0YjdmZi1kMjdkLTRlNDItYmI3NC1lZTI4NjBiZTg3MTQtNTAwMyIgcnRwPSI0ODIwNDEiLz4=",
          "currency": "BRL",
          "priceWithTax": 1600.49,
          "priceWithoutTax": 1454.99,
          "pricePerDayWithTax": 1600.49,
          "pricePerDayWithoutTax": 1454.99,
          "taxes": [
            {
              "percent": 10.000333529745294,
              "amount": 89.95
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9Ijk4OS40MiIgY21jPSIzNjAwMSIgY21pPSIzNiIgY3VyPSJCUkwiIGRpbj0iMjAxNi0xMC0yOCIgZG91PSIyMDE2LTEwLTI5IiBpem89IjMzODMwIiBsYW49InB0X0JSIiBta3A9IjAuNTUxNyIgbmFkPSIxIiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjE4NzI1MzMiIHJ0az0iOTQyNGI3ZmYtZDI3ZC00ZTQyLWJiNzQtZWUyODYwYmU4NzE0LTUwMDMiIHJ0cD0iNDgyMDQxIi8+",
          "currency": "BRL",
          "priceWithTax": 1793.41,
          "priceWithoutTax": 1630.37,
          "pricePerDayWithTax": 1793.41,
          "pricePerDayWithoutTax": 1630.37,
          "taxes": [
            {
              "percent": 10.000333529745294,
              "amount": 89.95
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "208137880|Sem café|false",
      "description": "3 camas Twin | 1 cama King e 1 Solteiro",
      "mealPlan": "Sem café",
      "category": "Quarto Família",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjExMzYuODIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwODEzNzg4MCIgcnRrPSIyMzk2OTA2My00MzFmLTRjOWYtYmVmYi03YmRiNjQ0MTE2YTEtNTAwMyIgcnRwPSIyMDE2MjY2MzYiLz4=",
          "currency": "BRL",
          "priceWithTax": 1838.92,
          "priceWithoutTax": 1671.75,
          "pricePerDayWithTax": 1838.92,
          "pricePerDayWithoutTax": 1671.75,
          "taxes": [
            {
              "percent": 10.000290284188221,
              "amount": 103.35
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjExMzYuODIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIyMDgxMzc4ODAiIHJ0az0iMjM5NjkwNjMtNDMxZi00YzlmLWJlZmItN2JkYjY0NDExNmExLTUwMDMiIHJ0cD0iMjAxNjI2NjM2Ii8+",
          "currency": "BRL",
          "priceWithTax": 2060.58,
          "priceWithoutTax": 1873.25,
          "pricePerDayWithTax": 2060.58,
          "pricePerDayWithoutTax": 1873.25,
          "taxes": [
            {
              "percent": 10.000290284188221,
              "amount": 103.35
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "204252473|Sem café|true",
      "description": "1 cama King | 2 camas",
      "mealPlan": "Sem café",
      "category": "Suíte Júnior",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjExNTQuNDIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwNDI1MjQ3MyIgcnRrPSIyMzMwNDFlNi1jYjg5LTQ5NTItYThjOS1jNDY1NmM0MzEzN2YtNTAwMyIgcnRwPSI2MjU4NiIvPg==",
          "currency": "BRL",
          "priceWithTax": 1867.39,
          "priceWithoutTax": 1697.63,
          "pricePerDayWithTax": 1867.39,
          "pricePerDayWithoutTax": 1697.63,
          "taxes": [
            {
              "percent": 10.000285858576234,
              "amount": 104.95
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjExNTQuNDIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIyMDQyNTI0NzMiIHJ0az0iMjMzMDQxZTYtY2I4OS00OTUyLWE4YzktYzQ2NTZjNDMxMzdmLTUwMDMiIHJ0cD0iNjI1ODYiLz4=",
          "currency": "BRL",
          "priceWithTax": 2092.48,
          "priceWithoutTax": 1902.25,
          "pricePerDayWithTax": 2092.48,
          "pricePerDayWithoutTax": 1902.25,
          "taxes": [
            {
              "percent": 10.000285858576234,
              "amount": 104.95
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "143417|Sem café|false",
      "description": "1 cama King | 2 camas",
      "mealPlan": "Sem café",
      "category": "Junior Suite - BAR",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjEzNTcuOTEiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjE0MzQxNyIgcnRrPSIwZTVmM2M3Ny1lMDExLTRlZDktOWQ0YS02ODg0MzQ2YWQ5NDYtNTAwMyIgcnRwPSI2MjU4NiIvPg==",
          "currency": "BRL",
          "priceWithTax": 2196.56,
          "priceWithoutTax": 1996.88,
          "pricePerDayWithTax": 2196.56,
          "pricePerDayWithoutTax": 1996.88,
          "taxes": [
            {
              "percent": 9.999432955033335,
              "amount": 123.44
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjEzNTcuOTEiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIxNDM0MTciIHJ0az0iMGU1ZjNjNzctZTAxMS00ZWQ5LTlkNGEtNjg4NDM0NmFkOTQ2LTUwMDMiIHJ0cD0iNjI1ODYiLz4=",
          "currency": "BRL",
          "priceWithTax": 2461.32,
          "priceWithoutTax": 2237.58,
          "pricePerDayWithTax": 2461.32,
          "pricePerDayWithoutTax": 2237.58,
          "taxes": [
            {
              "percent": 9.999432955033335,
              "amount": 123.44
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "204252472|Sem café|true",
      "description": "1 cama King | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Duplex",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjE0NjYuODIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwNDI1MjQ3MiIgcnRrPSIyOGM3MjFlNC00NWE1LTRlN2UtYjUzMy1jZTRiOTk1N2Y5MjgtNTAwMyIgcnRwPSI0ODIwNDMiLz4=",
          "currency": "BRL",
          "priceWithTax": 2372.73,
          "priceWithoutTax": 2157.03,
          "pricePerDayWithTax": 2372.73,
          "pricePerDayWithoutTax": 2157.03,
          "taxes": [
            {
              "percent": 10.000224976939863,
              "amount": 133.35
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjE0NjYuODIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIyMDQyNTI0NzIiIHJ0az0iMjhjNzIxZTQtNDVhNS00ZTdlLWI1MzMtY2U0Yjk5NTdmOTI4LTUwMDMiIHJ0cD0iNDgyMDQzIi8+",
          "currency": "BRL",
          "priceWithTax": 2658.73,
          "priceWithoutTax": 2417.03,
          "pricePerDayWithTax": 2658.73,
          "pricePerDayWithoutTax": 2417.03,
          "taxes": [
            {
              "percent": 10.000224976939863,
              "amount": 133.35
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "1872567|Sem café|false",
      "description": "1 cama King | 2 camas Twin",
      "mealPlan": "Sem café",
      "category": "Duplex - BAR",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjE3MjUuMzIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjE4NzI1NjciIHJ0az0iNmQwMDk4NWQtYzRiYy00NzJiLWJkOTUtZDg4OWQ5ZmZmZjdkLTUwMDMiIHJ0cD0iNDgyMDQzIi8+",
          "currency": "BRL",
          "priceWithTax": 2790.88,
          "priceWithoutTax": 2537.16,
          "pricePerDayWithTax": 2790.88,
          "pricePerDayWithoutTax": 2537.16,
          "taxes": [
            {
              "percent": 10.000191269198647,
              "amount": 156.85
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjE3MjUuMzIiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIxODcyNTY3IiBydGs9IjZkMDA5ODVkLWM0YmMtNDcyYi1iZDk1LWQ4ODlkOWZmZmY3ZC01MDAzIiBydHA9IjQ4MjA0MyIvPg==",
          "currency": "BRL",
          "priceWithTax": 3127.28,
          "priceWithoutTax": 2842.98,
          "pricePerDayWithTax": 3127.28,
          "pricePerDayWithoutTax": 2842.98,
          "taxes": [
            {
              "percent": 10.000191269198647,
              "amount": 156.85
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    },
    {
      "rph": 1,
      "group": "208137890|Sem café|true",
      "description": "1 cama Queen 1 sofá-cama",
      "mealPlan": "Sem café",
      "category": "Suíte (Prestige )",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjMwMjkuOTEiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwODEzNzg5MCIgcnRrPSI2ZTg1NGFmNy02MDJmLTQ3NzAtOTAyMS0xYTUyYmRhYTY2MmYtNTAwMyIgcnRwPSIyMDE2MjY2MzciLz4=",
          "currency": "BRL",
          "priceWithTax": 4901.19,
          "priceWithoutTax": 4455.63,
          "pricePerDayWithTax": 4901.19,
          "pricePerDayWithoutTax": 4455.63,
          "taxes": [
            {
              "percent": 9.999745867626077,
              "amount": 275.44
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjMwMjkuOTEiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIyMDgxMzc4OTAiIHJ0az0iNmU4NTRhZjctNjAyZi00NzcwLTkwMjEtMWE1MmJkYWE2NjJmLTUwMDMiIHJ0cD0iMjAxNjI2NjM3Ii8+",
          "currency": "BRL",
          "priceWithTax": 5491.96,
          "priceWithoutTax": 4992.7,
          "pricePerDayWithTax": 5491.96,
          "pricePerDayWithoutTax": 4992.7,
          "taxes": [
            {
              "percent": 9.999745867626077,
              "amount": 275.44
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": true
        }
      ]
    },
    {
      "rph": 1,
      "group": "208137881|Sem café|false",
      "description": "1 cama Queen 1 sofá-cama",
      "mealPlan": "Sem café",
      "category": "Suíte (Prestige )",
      "rates": [
        {
          "packageGroup": "VHI",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjM1NjQuNTMiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjYxODIiIG5hZD0iMSIgcGtnPSJWSEkiIHBsYT0iMzYiIHB4cz0iMzAiIHJldD0iIiBydGM9IjIwODEzNzg4MSIgcnRrPSJiZTk5MDA5Zi0yMDI3LTRmZjctYmMxNy0wMzlmZWMzYzE5OTktNTAwMyIgcnRwPSIyMDE2MjY2MzciLz4=",
          "currency": "BRL",
          "priceWithTax": 5765.99,
          "priceWithoutTax": 5241.8,
          "pricePerDayWithTax": 5765.99,
          "pricePerDayWithoutTax": 5241.8,
          "taxes": [
            {
              "percent": 10.00006171925147,
              "amount": 324.05
            }
          ]
        },
        {
          "packageGroup": "STANDALONE",
          "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2FnPSIwIiBjaGE9IjM1NjQuNTMiIGNtYz0iMzYwMDEiIGNtaT0iMzYiIGN1cj0iQlJMIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgaXpvPSIzMzgzMCIgbGFuPSJwdF9CUiIgbWtwPSIwLjU1MTciIG5hZD0iMSIgcGtnPSJTVEFOREFMT05FIiBwbGE9IjM2IiBweHM9IjMwIiByZXQ9IiIgcnRjPSIyMDgxMzc4ODEiIHJ0az0iYmU5OTAwOWYtMjAyNy00ZmY3LWJjMTctMDM5ZmVjM2MxOTk5LTUwMDMiIHJ0cD0iMjAxNjI2NjM3Ii8+",
          "currency": "BRL",
          "priceWithTax": 6461,
          "priceWithoutTax": 5873.63,
          "pricePerDayWithTax": 6461,
          "pricePerDayWithoutTax": 5873.63,
          "taxes": [
            {
              "percent": 10.00006171925147,
              "amount": 324.05
            }
          ]
        }
      ],
      "contents": [
        {
          "code": "amenities",
          "items": [
            {
              "code": "2192",
              "name": "Internet sem fio grátis"
            }
          ]
        }
      ],
      "cancellationPolicy": [
        {
          "nonRefundable": false
        }
      ]
    }
  ],
  "meta": {
    "nightsNumber": 1
  }
};

var rateTokenRoom = {
  "room": {
    "name": "STANDARD CASAL DIÁRIA(S) COM CAFÉ DA MANHÃ",
    "mealPlan": "DIÁRIA(S) COM CAFÉ DA MANHÃ",
    "category": "STANDARD CASAL",
    "minPax": 1,
    "maxPax": 3,
    "quantityAvailable": 5,
    "isAvailable": true,
    "rates": [
      {
        "packageGroup": "STANDALONE",
        "rateToken": "PHJhdGVUb2tlbiBhZ3M9IlciIGJyYz0iMTAwMCIgY2F0PSIxNDcwIiBjbWM9IjQ1MDAxIiBjbWk9IjQ1IiBjdXI9IkJSTCIgZGluPSIyMDE2LTEwLTI4IiBkb3U9IjIwMTYtMTAtMjkiIGRzYz0iU1RBTkRBUkQgQ0FTQUwiIGZlZT0iMCIgaG90PSI0NTY1OTA3MjQiIGl6bz0iOTYyNiIgbGFuPSJwdF9CUiIgbG9kPSJIb3RlbCIgbWVsPSJEScOBUklBKFMpIENPTSBDQUbDiSBEQSBNQU5Iw4MiIG1rcD0iMC42MzQ4IiBwa2c9IlNUQU5EQUxPTkUiIHBsYT0iNDUiIHByYz0iMTgxIiBweHM9IjMwIiByZXQ9IiIgcm9tPSIyMDgzMjAiLz4=",
        "currency": "BRL",
        "priceWithTax": 285.13,
        "priceWithoutTax": 285.13,
        "pricePerDayWithTax": 285.13,
        "pricePerDayWithoutTax": 285.13,
        "contents": [
          {
            "code": "description-agreement",
            "description": "Description Agreement",
            "items": [
              {
                "code": "description-agreement",
                "description": "DIÁRIA(S) COM CAFÉ DA MANHÃ (APARTAMENTO COM 1 CAMA DE CASAL + 1 SOFÁ CAMA) - BRASIL FÁCIL"
              }
            ]
          }
        ]
      }
    ]
  }
};