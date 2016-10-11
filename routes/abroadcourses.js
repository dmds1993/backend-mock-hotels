var express     = require('express');
var app         = express();
var router      = express.Router();
var bodyParser  = require('body-parser');

router.get('/courses/languages', function(req, res, next) {
	res.json(languages);
});

router.get('/courses/categories', function(req, res, next) {
	res.json(categories);
});

router.get('/courses/durations', function(req, res, next) {
	res.json(durations);
});

router.get('/courses/dates', function(req, res, next) {
	res.json(dates);
});

router.get('/courses', function(req, res, next) {
	res.json(courses);
});

router.get('/accommodations', function(req, res, next) {
	res.json(accommodations);
});

router.get('/destinations', function(req, res, next) {
  res.json(destinations);
});

router.get('/', function(req, res, next) {
	res.json(abroadcourses);
});

router.get('/:rate_token', function(req, res, next) {
	var rateToken = new Buffer(req.params.rate_token, 'base64').toString('utf8');
	
	if (rateToken.includes('rateToken')) {
		res.json(rateTokenCourse);
	} else {
		return res.status(500).send({ 
		  code: 500, 
		  message: 'Invalid Rate Token' 
		});
	}
});

module.exports = router;

var languages = {
	"languages": [
		{
			"id": 2,
			"name": "Inglês"
		},
		{
			"id": 3,
			"name": "Espanhol"
		},
		{
			"id": 4,
			"name": "Francês"
		},
		{
			"id": 5,
			"name": "Alemão"
		}
	]
};

var categories = {
  "categories": [
    {
      "id": 1,
      "name": "Geral de Idioma"
    },
    {
      "id": 2,
      "name": "Preparatório para exames"
    },
    {
      "id": 3,
      "name": "Idioma para Negócios"
    },
    {
      "id": 6,
      "name": "Geral com atividades"
    }
  ]
};

var durations = {
  "durations": [
    {
      "id": 1,
      "name": "1 semana"
    },
    {
      "id": 2,
      "name": "2 semanas"
    },
    {
      "id": 3,
      "name": "3 semanas"
    },
    {
      "id": 4,
      "name": "4 semanas"
    }
  ]
};

var dates = {
  "coursesDates": [
    {
      "date": "2016-08-08"
    },
    {
      "date": "2016-08-15"
    },
    {
      "date": "2016-08-22"
    }
  ]
};

var abroadcourses = {
  "AbroadCourses": [{
    "abroadCourseToken": "GFDG897GJSDJKFOIU98SDIZXC98BX98SSSDA==.LKMXVOIUVXCKJLVLKJSZDLKJSD98DFS98XC98BX==",
    "course": {
      "name": "Standard English",
      "language": {
        "id": "2",
        "name": "Inglês"
      },
      "category": {
        "id": "1",
        "name": "Geral de Idioma"
      },
      "institution": "10792060",
      "durationWeeks": 1,
      "classesPerWeek": 20,
      "classPeriod": "manhã",
      "start": "2016-08-22",
      "end": "2016-08-26",
      "minimumProficiency": {
        "id": 2,
        "name": "Básico"
      },
      "minimumAge": 18,
      "maximumAge": 99,
      "description": "No Standard English Course, você concentra na aprendizagem através da comunicação na vida real (fala, escuta, leitura, escrita) dentro e fora da sala de aula. Este é um curso geral de lingua inglesa de 20 aulas por semana, ministrado em turmas pequenas, o que permite que nossos experientes professores fornecerem feedback individual e aconselhamento sobre como melhorar e desenvolver competências linguísticas.",
      "keyFeatures": [{
        "features": [{
          "label": "Duração:",
          "value": "4 semanas + 1 semana grátis20 aulas por semana",
          "note": ""
        }, {
          "value": "20 aulas por semana"
        }]
      }, {
        "features": [{
          "label": "Início:",
          "value": "21/12"
        }, {
          "label": "Término:",
          "value": "01/01"
        }]
      }, {
        "features": [{
          "label": "Nível Mínimo:",
          "value": "Intermediário",
          "note": "O help deverá vir aqui"
        }]
      }, {
        "features": [{
          "label": "Recesso:",
          "value": "de 21/12 a 01/01"
        }]
      }],
      "contents": [{
        "code": "features",
        "items": [{
          "name": "Até 10 alunos por sala."
        }, {
          "name": "A escola oferece um coordenador que dará todo o suporte necessário durante o curso."
        }, {
          "name": "30 aulas de inglês geral por semana, cada uma com 45 minutos de duração"
        }]
      }, {
        "code": "requirements",
        "items": [{
          "name": "Cópia do passaporte"
        }, {
          "name": "Ficha de matrícula CVC"
        }]
      }, {
        "code": "documents",
        "description": "Para realizar este curso você precisará ter o passaporte válido por no mínimo 6 meses e providenciar um visto de turismo junto ao consulado no Brasil. Verifique o tempo necessário junto ao consulado. Recomendamos que a matrícula seja feita com a maior antecedência possível."
      }, {
        "code": "promotional-info",
        "description": "15% de desconto para este curso."
      }],
      "rate": {
        "courseToken": "ZS4R5DFCFDESRDVDDEWEWFZFZEGSREGE4==",
        "currency": "BRL",
        "pricePerPerson": {
          "withTax": 1891.07,
          "withoutTax": 1891.07
        },
        "taxes": [{
          "code": "TX_REM",
          "description": "Taxa de Remessa",
          "percent": 0.06,
          "amount": 31.62,
          "inTotal": true
        }]
      }
    },
    "accommodation": {
      "broker": "ITC",
      "category": {
        "id": 12,
        "name": "Residencia Estudantil"
      },
      "name": "BSL BROOKLYN CROWN HEIGHTS INTERCAMBIO",
      "description": "Esta casa é compartilhada apenas com outros estudantes de Brooklyn School of Languages, e tem 5 quartos (incluindo 3 singles, 1 duplo e 1 twin), 2 banheiros e uma cozinha grande. A cozinha tem uma gama completa de aparelhos modernos, incluindo um grande frigorífico e microondas.",
      "allowExtraDays": true,
      "earliestCheckIn": "2016-08-19",
      "earliestCheckOut": "2016-08-28",
      "latestCheckOut": "2016-08-29",
      "checkIn": "2016-08-21",
      "checkOut": "2016-08-27",
      "zone": {
        "id": 25651,
        "address": "40, RECTOR STREET, NEW YORK, NEW YORK, MANHATTAN, ESTADOS UNIDOS DA AMERICA",
        "latitude": 40.723143,
        "longitude": -74.00764
      },
      "rooms": [{
        "id": "400",
        "category": {
          "id": 1,
          "name": "SINGLE"
        },
        "bathroomCategory": {
          "id": 1,
          "name": "COMPARTILHADO"
        },
        "mealPlan": {
          "id": 1,
          "name": "SEM REFEICOES"
        },
        "capacity": 1,
        "rate": {
          "accommodationToken": "LKJVASDLJIV98WKNL98LKWAEXZ==",
          "currency": "BRL",
          "pricePerPerson": {
            "withTax": 1891.07,
            "withoutTax": 1891.07
          },
          "taxes": [{
            "code": "TX_REM",
            "description": "Taxa de Remessa",
            "percent": 0.06,
            "amount": 31.62,
            "inTotal": true
          }]
        }
      }],
      "contents": [{
        "code": "included-services",
        "items": [{
          "code": "lazer",
          "name": "Lazer",
          "items": [{
            "name": "Sala de TV"
          }, {
            "name": "Sala de Jogos"
          }]
        }, {
          "code": "gastronomy",
          "name": "Gastronomia",
          "items": [{
            "name": "Bar"
          }, {
            "name": "Café da Manhã"
          }]
        }, {
          "code": "services",
          "name": "Serviços",
          "items": [{
            "name": "Wifi"
          }, {
            "name": "Recepção 24h"
          }, {
            "name": "Estacionamento Gratuito"
          }]
        }]
      }]
    },
    "isCustomizable": true,
    "rate": {
      "currency": "BRL",
      "pricePerPerson": {
        "withTax": 1891.07,
        "withoutTax": 1891.07
      },
      "taxes": [{
        "code": "TX_REM",
        "description": "Taxa de Remessa",
        "percent": 0.06,
        "amount": 31.62,
        "inTotal": true
      }]
    },
    "contents": [{
      "code": "features",
      "itens": [{
        "code": "hotel",
        "name": "Hotel"
      }, {
        "code": "car",
        "name": "Aluguel de Carros"
      }, {
        "code": "assistance",
        "name": "Assistência Viagem"
      }]
    }]
  }],
  "meta": {
    "links": {
      "coverImage": {
        "href": "http://img.cvc.com.br/images/369213.jpg",
        "title": "Porto Seguro",
        "description": "Bahia - Brasil"
      },
      "destinationDetail": {
        "href": "http://www.cvc.com.br/destinos/estados-unidos/miami.aspx"
      }
    },
    "countCourses": 100,
    "price": {
      "minWithTax": 1050.18,
      "minWithoutTax": 1050.18,
      "maxWithTax": 1647.75,
      "maxWithoutTax": 1647.75
    },
    "languages": [{
      "id": "2",
      "name": "Inglês",
      "amount": 10
    }],
    "categories": [{
      "id": "1",
      "name": "Geral de Idioma",
      "amount": 10
    }],
    "loadsTimeCourse": [{
      "id": "3",
      "description": "20 a 25 aulas por semana",
      "amount": 10
    }, {
      "id": "4",
      "name": "mais de 26 aulas por semana",
      "amount": 10
    }],
    "institutions": [{
      "id": "10792060",
      "name": "LSI NOVA YORK INTERCAMBIO",
      "description": "É importante questionar o quanto a consulta aos diversos militantes nos obriga à análise do fluxo de informações. As experiências acumuladas demonstram que a determinação clara de objetivos deve passar por modificações independentemente das diretrizes de desenvolvimento para o futuro.",
      "zone": {
        "id": 25651,
        "address": "40, RECTOR STREET, NEW YORK, NEW YORK, MANHATTAN, ESTADOS UNIDOS DA AMERICA",
        "city": {
          "name": "NEW YORK"
        },
        "state": {
          "name": "NEW YORK"
        },
        "country": {
          "name": "ESTADOS UNIDOS DA AMERICA"
        },
        "latitude": 40.723143,
        "longitude": -74.00764
      }
    }]
  }
};  

var rateTokenCourse = {
  "AbroadCourse": {
    "abroadCourseToken": "GFDG897GJSDJKFOIU98SDIZXC98BX98SSSDA==.LKMXVOIUVXCKJLVLKJSZDLKJSD98DFS98XC98BX==",
    "course": {
      "@TODO": "ADD SAMPLE COURSE"
    },
    "accommodation": {
      "@TODO": "ADD SAMPLE ACCOMMODATION"
    },
    "isCustomizable": true,
    "rate": {
      "pricePerPerson": {
        "currency": "BRL",
        "withTax": 1891.07,
        "withoutTax": 1891.07
      },
      "taxes": [
        {
          "code": "TX_REM",
          "description": "Taxa de Remessa",
          "percent": 0.06,
          "amount": 31.62,
          "inTotal": true
        }
      ]
    }
  }
};

var courses = {
  "courses": [
    {
      "courseToken": "ZS4R5DFCFDESRDVDDEWEWFZFZEGSREGE4==",
      "name": "Standard English",
      "language": {
        "id": "2",
        "name": "Inglês"
      },
      "category": {
        "id": "1",
        "name": "Geral de Idioma"
      },
      "institution": "10792060",
      "durationWeeks": 1,
      "classesPerWeek": 20,
      "classPeriod": "manhã",
      "start": "2016-08-22",
      "end": "2016-08-26",
      "minimumProficiency": {
        "id": 2,
        "name": "Básico"
      },
      "minimumAge": 18,
      "maximumAge": 99,
      "description": "No Standard English Course, você concentra na aprendizagem através da comunicação na vida real (fala, escuta, leitura, escrita) dentro e fora da sala de aula. Este é um curso geral de lingua inglesa de 20 aulas por semana, ministrado em turmas pequenas, o que permite que nossos experientes professores fornecerem feedback individual e aconselhamento sobre como melhorar e desenvolver competências linguísticas.",
      "contents": [
        {
          "code": "requirements",
          "items": [
            {
              "name": "Cópia do passaporte"
            },
            {
              "name": "Ficha de matrícula CVC"
            }
          ]
        },
        {
          "code": "documents",
          "description": "Para realizar este curso você precisará ter o passaporte válido por no mínimo 6 meses e providenciar um visto de turismo junto ao consulado no Brasil. Verifique o tempo necessário junto ao consulado. Recomendamos que a matrícula seja feita com a maior antecedência possível."
        },
        {
          "code": "promotional-info",
          "description": "15% de desconto para este curso."
        }
      ],
      "rate": {
        "pricePerPerson": {
          "currency": "BRL",
          "withTax": 1891.07,
          "withoutTax": 1891.07
        },
        "taxes": [
          {
            "code": "TX_REM",
            "description": "Taxa de Remessa",
            "percent": 0.06,
            "amount": 31.62,
            "inTotal": true
          }
        ]
      }
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 1050.18,
      "minWithoutTax": 1050.18,
      "maxWithTax": 1647.75,
      "maxWithoutTax": 1647.75
    },
    "languages": [
      {
        "id": "2",
        "name": "Inglês",
        "amount": 10
      }
    ],
    "categories": [
      {
        "id": "1",
        "name": "Geral de Idioma",
        "amount": 10
      }
    ],
    "loadsTimeCourse": [
      {
        "id": "3",
        "description": "20 a 25 aulas por semana",
        "amount": 10
      },
      {
        "id": "4",
        "name": "mais de 26 aulas por semana",
        "amount": 10
      }
    ],
    "institutions": [
      {
        "id": "10792060",
        "name": "LSI NOVA YORK INTERCAMBIO",
        "description": "É importante questionar o quanto a consulta aos diversos militantes nos obriga à análise do fluxo de informações. As experiências acumuladas demonstram que a determinação clara de objetivos deve passar por modificações independentemente das diretrizes de desenvolvimento para o futuro.",
        "zone": {
          "id": 25651,
          "address": "40, RECTOR STREET, NEW YORK, NEW YORK, MANHATTAN, ESTADOS UNIDOS DA AMERICA",
          "city": {
            "name": "NEW YORK"
          },
          "state": {
            "name": "NEW YORK"
          },
          "country": {
            "name": "ESTADOS UNIDOS DA AMERICA"
          },
          "latitude": 40.723143,
          "longitude": -74.00764
        }
      }
    ]
  }
};

var accommodations = {
  "accommodations": [
    {
      "broker": "ITC",
      "category": {
        "id": 12,
        "name": "Residencia Estudantil"
      },
      "name": "BSL BROOKLYN CROWN HEIGHTS INTERCAMBIO",
      "description": "Esta casa é compartilhada apenas com outros estudantes de Brooklyn School of Languages, e tem 5 quartos (incluindo 3 singles, 1 duplo e 1 twin), 2 banheiros e uma cozinha grande. A cozinha tem uma gama completa de aparelhos modernos, incluindo um grande frigorífico e microondas.",
      "allowExtraDays": true,
      "earliestCheckIn": "2016-08-19",
      "earliestCheckOut": "2016-08-28",
      "latestCheckOut": "2016-08-29",
      "checkIn": "2016-08-21",
      "checkOut": "2016-08-27",
      "zone": {
        "id": 25651,
        "address": "40, RECTOR STREET, NEW YORK, NEW YORK, MANHATTAN, ESTADOS UNIDOS DA AMERICA",
        "latitude": 40.723143,
        "longitude": -74.00764
      },
      "rooms": [
        {
          "id": "400",
          "category": {
            "id": 1,
            "name": "SINGLE"
          },
          "bathroomCategory": {
            "id": 1,
            "name": "COMPARTILHADO"
          },
          "mealPlan": {
            "id": 1,
            "name": "SEM REFEICOES"
          },
          "capacity": 1,
          "rate": {
            "accommodationToken": "LKJVASDLJIV98WKNL98LKWAEXZ==",
            "pricePerPerson": {
              "currency": "BRL",
              "withTax": 1891.07,
              "withoutTax": 1891.07
            },
            "taxes": [
              {
                "code": "TX_REM",
                "description": "Taxa de Remessa",
                "percent": 0.06,
                "amount": 31.62,
                "inTotal": true
              }
            ]
          }
        }
      ],
      "contents": [
        {
          "code": "included-services",
          "items": [
            {
              "code": "lazer",
              "name": "Lazer",
              "items": [
                {
                  "name": "Sala de TV"
                },
                {
                  "name": "Sala de Jogos"
                }
              ]
            },
            {
              "code": "gastronomy",
              "name": "Gastronomia",
              "items": [
                {
                  "name": "Bar"
                },
                {
                  "name": "Café da Manhã"
                }
              ]
            },
            {
              "code": "services",
              "name": "Serviços",
              "items": [
                {
                  "name": "Wifi"
                },
                {
                  "name": "Recepção 24h"
                },
                {
                  "name": "Estacionamento Gratuito"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "price": {
      "minWithTax": 1050.18,
      "minWithoutTax": 1050.18,
      "maxWithTax": 1647.75,
      "maxWithoutTax": 1647.75
    },
    "mealPlans": [
      {
        "id": 1,
        "name": "SEM REFEICOES",
        "amount": 10
      },
      {
        "id": 1,
        "name": "COM CAFÉ",
        "amount": 1
      }
    ],
    "bathroomCategories": [
      {
        "id": 1,
        "name": "COMPARTILHADO",
        "amount": 10
      },
      {
        "id": 1,
        "name": "INDIVIDUAL",
        "amount": 1
      }
    ],
    "roomCategories": [
      {
        "id": 1,
        "name": "SINGLE",
        "amount": 10
      },
      {
        "id": 1,
        "name": "DOUBLE",
        "amount": 1
      }
    ],
    "categories": [
      {
        "id": 1,
        "name": "Residencia Estudantil",
        "amount": 10
      }
    ]
  }
};

var destinations = {
  "destinations": [
    {
      "id": 9860,
      "name": "CALGARY - ALBERTA, CANADA, Todos os aeroportos (YYC)",
      "iata": "YYC"
    },
    {
      "id": 9866,
      "name": "VANCOUVER - BRITISH COLUMBIA, CANADA, Todos os aeroportos (YVR)",
      "iata": "YVR"
    },
    {
      "id": 9871,
      "name": "VICTORIA - BRITISH COLUMBIA, CANADA, Todos os aeroportos (YYJ)",
      "iata": "YYJ"
    }
  ]
};