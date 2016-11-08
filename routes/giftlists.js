var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json(giftlists);
});

router.get('/:giftlist_id', function(req, res, next) {
  res.json(giftlistId);
});


router.post('/booking', function(req, res, next) {
  if(req.body.paxs.length) {
    res.json(bookingResponse);
  } else {
    res.json({message: 'Invalid Payload'});
  }
});

router.post('/:giftlist_id/invites', function(req, res, next) {
  if(req.body.invite.name.length) {
    res.json(invitesResponse);
  } else {
    res.json({message: 'Invalid Payload'});
  }
});

module.exports = router;

var giftlists = {
  "giftsLists": [
    {
      "id": 1234,
      "type": "WEDDING",
      "address": "Destiny",
      "date": "2016-12-31T20:00:00",
      "giftsGroupId": 456,
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
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/static/img01.jpg"
        }
      }
    },
    {
      "id": 5678,
      "type": "WEDDING",
      "address": "Destiny",
      "date": "2016-12-31T20:00:00",
      "giftsGroupId": 456,
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
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/static/img01.jpg"
        }
      }
    },
    {
      "id": 9012,
      "type": "WEDDING",
      "address": "Destiny",
      "date": "2016-12-31T20:00:00",
      "giftsGroupId": 456,
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
      "links": {
        "thumbnailImage": {
          "href": "http://www.cvc.com.br/static/img01.jpg"
        }
      }
    }
  ]
};

var giftlistId = {
  "giftsList": {
    "id": 1234,
    "type": "WEDDING",
    "address": "Destiny",
    "date": "2016-12-31T20:00:00",
    "giftsGroupId": 456,
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
          30,
          30,
          45
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