var express = require('express');
var router = express.Router();

router.get('/search', function(req, res, next) {
	res.json(search);
});

module.exports = router;

var search = [
  {
    "id": 275279,
    "name": "São Paulo",
    "fullname": "São Paulo / SP, Brasil (SAO)",
    "hits": 1121303,
    "IATA": "SAO",
    "latitude": -23.5333,
    "longitude": -46.6166,
    "masterCode": "9626",
    "type": "CITY",
    "_id": "9080"
  },
  {
    "id": 275098,
    "name": "São Luís",
    "fullname": "São Luís / MA, Brasil (SLZ)",
    "hits": 167806,
    "IATA": "SLZ",
    "latitude": -2.5166,
    "longitude": -44.2666,
    "masterCode": "2749",
    "type": "CITY",
    "_id": "9107"
  },
  {
    "id": 2702986,
    "name": "Morro de São Paulo",
    "fullname": "Morro de São Paulo / BA, Brasil",
    "hits": 164094,
    "IATA": "",
    "latitude": -12.8666,
    "longitude": -38.8,
    "masterCode": "938",
    "type": "CITY",
    "_id": "2774"
  },
  {
    "id": 264984,
    "name": "Mata de São João",
    "fullname": "Mata de São João / BA, Brasil",
    "hits": 135623,
    "IATA": "",
    "latitude": -12.5166,
    "longitude": -38.2833,
    "masterCode": "915",
    "type": "CITY",
    "_id": "9522"
  },
  {
    "id": 275516,
    "name": "São Sebastião",
    "fullname": "São Sebastião / SP, Brasil (QHF)",
    "hits": 11514,
    "IATA": "QHF",
    "latitude": -23.8,
    "longitude": -45.4166,
    "masterCode": "9631",
    "type": "CITY",
    "_id": "9023"
  },
  {
    "id": 275057,
    "name": "São Lourenço",
    "fullname": "São Lourenço / MG, Brasil (SSO)",
    "hits": 7470,
    "IATA": "SSO",
    "latitude": -22.1166,
    "longitude": -45.05,
    "masterCode": "4058",
    "type": "CITY",
    "_id": "9111"
  },
  {
    "id": 274977,
    "name": "São José dos Campos",
    "fullname": "São José dos Campos / SP, Brasil (SJK)",
    "hits": 7119,
    "IATA": "SJK",
    "latitude": -23.1833,
    "longitude": -45.8833,
    "masterCode": "9618",
    "type": "CITY",
    "_id": "9122"
  },
  {
    "id": 274971,
    "name": "São José do Rio preto",
    "fullname": "São José do Rio preto / SP, Brasil (SJP)",
    "hits": 6285,
    "IATA": "SJP",
    "latitude": -20.8,
    "longitude": -49.3833,
    "masterCode": "9617",
    "type": "CITY",
    "_id": "9124"
  },
  {
    "id": 246519,
    "name": "Águas de São Pedro",
    "fullname": "Águas de São Pedro / SP, Brasil",
    "hits": 5027,
    "IATA": "",
    "latitude": -22.6,
    "longitude": -47.8833,
    "masterCode": "8819",
    "type": "CITY",
    "_id": "2620"
  },
  {
    "id": 249221,
    "name": "Barra de São Miguel",
    "fullname": "Barra de São Miguel / AL, Brasil",
    "hits": 4393,
    "IATA": "",
    "latitude": -9.8333,
    "longitude": -35.9,
    "masterCode": "115",
    "type": "CITY",
    "_id": "2164"
  }
];