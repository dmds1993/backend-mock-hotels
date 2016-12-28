var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json(giftslists);
});

router.get('/giftgroup', function(req, res, next) {
  res.json(giftGroup);
});

router.get('/:giftslist_id', function(req, res, next) {
  res.json(giftslistId);
});

router.post('/booking', function(req, res, next) {
  if(req.body.paxs.length) {
    res.json(bookingResponse);
  } else {
    res.json({message: 'Invalid Payload'});
  }
});

router.post('/:giftslist_id/invites', function(req, res, next) {
  if(req.body.invite.name.length) {
    res.json(invitesResponse);
  } else {
    res.json({message: 'Invalid Payload'});
  }
});

module.exports = router;

var giftslists = {
  "giftsList": [
    {
      "id": 674156,
      "type": "WEDDING",
      "address": "RUA SAO GREGORIO 36",
      "date": "25/11/2016",
      "giftsGroupId": 2,
      "paxs": [
        {
          "firstName": "VINICIUS CARLOTTI DE SA",
          "birthDate": "08/07/1985",
          "email": "viniciussa@cvc.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "1.123"
        }
      }
    },
    {
      "id": 674060,
      "type": "WEDDING",
      "address": "RUA SAO GREGORIO 36",
      "date": "25/11/2016",
      "giftsGroupId": 1,
      "paxs": [
        {
          "firstName": "VINICIUS CARLOTTI DE SA",
          "birthDate": "08/07/1985",
          "email": "viniciussa@cvc.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "1.123"
        }
      }
    },
    {
      "id": 673860,
      "type": "WEDDING",
      "address": "BUFFET DINIZ",
      "date": "02/07/2016",
      "giftsGroupId": 3,
      "paxs": [
        {
          "firstName": "GLAUCIA PETRACHIM FORATTO",
          "birthDate": "22/10/1969",
          "email": "GPFORATTO@HOTMAIL.COM"
        },
        {
          "firstName": "JOSE CARLOS FORATTO",
          "birthDate": "19/03/1964",
          "email": "JCFORATTO@HOTMAIL.COM"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673859,
      "type": "WEDDING",
      "address": "IGREJA MATRIZ DE CAPÃO DA CANOA",
      "date": "15/10/2016",
      "giftsGroupId": 1,
      "paxs": [
        {
          "firstName": "CRISTIANE DE SOUZA MACHADO",
          "birthDate": "23/01/1985",
          "email": "cristiane_s.machado@hotmail.com"
        },
        {
          "firstName": "IVAN MARQUES KILPP",
          "birthDate": "15/04/1989",
          "email": "ivan.kilpp@gmail.com"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673858,
      "type": "WEDDING",
      "address": "IGREJA NOSSA SRA DO ROSARIO",
      "date": "18/02/2017",
      "giftsGroupId": 2,
      "paxs": [
        {
          "firstName": "REGINA CELIA M FERREIRA",
          "birthDate": "24/05/1991",
          "email": "reginamicha@hotmail.com"
        },
        {
          "firstName": "RODRIGO BIASINI",
          "birthDate": "07/12/1987",
          "email": "rbiasini@yahoo.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "390393.jpg"
        }
      }
    },
    {
      "id": 673857,
      "type": "WEDDING",
      "address": "the house",
      "date": "08/10/2016",
      "giftsGroupId": 3,
      "paxs": [
        {
          "firstName": "ALESSANDRA MARINHO RAYMO",
          "birthDate": "08/10/1978",
          "email": "ALESSANDRA.RAYMO@BOL.COM.BR"
        },
        {
          "firstName": "ANDRE LUIZ MENZES DA SILVA",
          "birthDate": "05/10/1981",
          "email": "scries@zipmail.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673856,
      "type": "WEDDING",
      "address": "Victor's  buffet",
      "date": "23/07/2016",
      "giftsGroupId": 1,
      "paxs": [
        {
          "firstName": "RICARDO GOMES ABREU",
          "birthDate": "05/12/1978",
          "email": "ricardoabreusp@hotmail.com"
        },
        {
          "firstName": "VANESSA PINA DE ANDRADE",
          "birthDate": "21/12/1982",
          "email": "vanessavonbosh@gmail.com"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673762,
      "type": "WEDDING",
      "address": "SITIO CANTO VERDE /  LAURO DE FREITAS",
      "date": "12/11/2016",
      "giftsGroupId": 2,
      "paxs": [
        {
          "firstName": "FABIO NASCIMENTO DOS SANTOS",
          "birthDate": "08/01/1986",
          "email": "micheleoliveira_adm@yahoo.com.br"
        },
        {
          "firstName": "MICHELE OLIVEIRA ALMEIDA",
          "birthDate": "27/08/1986",
          "email": "micheleoliveira_adm@yahoo.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": "390392.jpg"
        }
      }
    },
    {
      "id": 673761,
      "type": "WEDDING",
      "address": "Chacará Bem me quer ",
      "date": "17/09/2016",
      "giftsGroupId": 3,
      "paxs": [
        {
          "firstName": "BARBARA SANTOS",
          "birthDate": "03/01/1985",
          "email": "barbaranazato@hotmail.com"
        },
        {
          "firstName": "LUCAS NAZATO",
          "birthDate": "25/06/1982",
          "email": "barbaranazato@hotmail.com"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673760,
      "type": "WEDDING",
      "address": "PARÓQUIA SÃO BENEDITO",
      "date": "17/12/2016",
      "giftsGroupId": 1,
      "paxs": [
        {
          "firstName": "ESTEFANIA RODRIGUES VEIGA",
          "birthDate": "05/07/1973",
          "email": "estefaniaehelio@gmail.com"
        },
        {
          "firstName": "HELIO SILVA DE VASCONCELOS MENDES",
          "birthDate": "12/07/1977",
          "email": "dr.heliomendes@yahoo.com.br"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673759,
      "type": "WEDDING",
      "address": "ESPAÇO PARTIE PARTIE",
      "date": "05/08/2016",
      "giftsGroupId": 3,
      "paxs": [
        {
          "firstName": "ELISANGELA",
          "birthDate": "17/01/1990",
          "email": "ELIS_CDD15@HOTMAIL.COM"
        },
        {
          "firstName": "LEANDRO",
          "birthDate": "25/01/1986",
          "email": "ELIS_CDD15@HOTMAIL.COM"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    },
    {
      "id": 673758,
      "type": "WEDDING",
      "address": "IGREJA SANTANA RIO VERMELHO SSA",
      "date": "19/06/2016",
      "giftsGroupId": 1,
      "paxs": [
        {
          "firstName": "DANIEL PAULO COSTA JUNIOR",
          "birthDate": "19/02/1977",
          "email": "casamentojoedan@gmail.com"
        },
        {
          "firstName": "JOANA KARLA SOUSA",
          "birthDate": "30/03/1981",
          "email": "casamentojoedan@gmail.com"
        }
      ],
      "links": {
        "thumbnailImage": {
          "href": null
        }
      }
    }
  ]
};

var giftslistId = {
  "giftsList": {
    "id": 1234,
    "type": "WEDDING",
    "address": "Destiny",
    "date": "2016-12-31T20:00:00",
    "giftsGroupId": 1,
    "paxs": [
      {
        "firstName": "Flavio",
        "lastName": "Sousa",
        "birthDate": "1986-07-12",
        "email": "test@gmail.com"
      },
      {
        "firstName": "Jana",
        "lastName": "Correia",
        "birthDate": "1986-07-12",
        "email": "test@gmail.com"
      }
    ],
    "giftsGroup": {
      "id": 1,
      "name": "AVERAGE",
      "gifts": [
        {
          "name": "Prata",
          "value": 50
        },
        {
          "name": "Ouro",
          "value": 100
        },
        {
          "name": "Diamante",
          "value": 150
        }
      ]
    },
    "invites": [
      {
        "id": 1,
        "name": "Cristiano Camillo",
        "relationship": "Gerente",
        "email": "test@gmail.com",
        "phone": "46875468794",
        "status": "NOT_SENT"
      }
    ],
    "giftsOrders": [
      {
        "gifts": [
          50,
          50,
          150
        ],
        "message": "Message to the Event Owner",
        "benefactor": {
          "firstName": "Flavio",
          "lastName": "Sousa",
          "birthDate": "1991-07-12T21:46:24.726Z",
          "gender": "M",
          "email": "teste@gmail.com",
          "phones": [
            {
              "type": "MOBILE",
              "internationalCode": 55,
              "localCode": 11,
              "number": "987654321"
            }
          ],
          "address": {
            "street": "Rua Lupércio de Miranda",
            "number": "1776",
            "complement": "107B",
            "district": "Campestre",
            "city": "Santo André",
            "state": "SP",
            "county": "Brasil",
            "zipCode": "09070-000"
          }
        }
      }
    ],
    "links": {
      "thumbnailImage": {
        "href": "http://www.cvc.com.br/static/img01.jpg"
      }
    }
  }
};

var giftGroup = {
  "giftsGroups": [
    {
      "id": 1,
      "name": "AVERAGE",
      "gifts": [
        {
          "name": "Prata",
          "value": 50
        },
        {
          "name": "Ouro",
          "value": 100
        },
        {
          "name": "Diamante",
          "value": 150
        }
      ]
    },
    {
      "id": 2,
      "name": "BASIC",
      "gifts": [
        {
          "name": "Bronze",
          "value": 30
        },
        {
          "name": "Prata",
          "value": 60
        },
        {
          "name": "Ouro",
          "value": 120
        },
        {
          "name": "Diamante",
          "value": 180
        }
      ]
    },
    {
      "id": 3,
      "name": "TOP",
      "gifts": [
        {
          "name": "Bronze",
          "value": 100
        },
        {
          "name": "Prata",
          "value": 200
        },
        {
          "name": "Ouro",
          "value": 300
        },
        {
          "name": "Diamante",
          "value": 400
        }
      ]
    }
  ]
};

var bookingResponse = {
  "giftsList": {
    "id": 1234,
    "type": "WEDDING",
    "address": "Destiny",
    "date": "2016-12-31T20:00:00",
    "giftsGroupId": 123,
    "paxs": [
      {
        "firstName": "Flavio",
        "lastName": "Sousa",
        "birthDate": "1986-07-12",
        "email": "test@gmail.com"
      },
      {
        "firstName": "Jana",
        "lastName": "Correia",
        "birthDate": "1986-07-12",
        "email": "test@gmail.com"
      }
    ],
    "giftsGroup": {
      "id": 123,
      "name": "Básica",
      "gifts": [
        {
          "name": "Bronze",
          "value": 30
        },
        {
          "name": "Prata",
          "value": 60
        },
        {
          "name": "Ouro",
          "value": 120
        },
        {
          "name": "Diamante",
          "value": 180
        }
      ]
    },
    "links": {
      "thumbnailImage": {
        "href": "http://www.cvc.com.br/static/img01.jpg"
      }
    }
  }
};

var invitesResponse = {
  "invite": {
    "id": 1,
    "name": "Cristiano Camillo",
    "relationship": "Gerente",
    "email": "test@gmail.com",
    "phone": "46875468794",
    "status": "NOT_SENT"
  }
};