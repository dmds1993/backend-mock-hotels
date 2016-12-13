var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Finans' });
});

router.post('/calculate', function(req, res, next) {
  res.json(finans);
});

module.exports = router;

let finans = {
	"finans": [{
		"productTypes": [
			"HOT",
			"AIR"
		],
		"maxInstallments": 10,
		"totalValue": 2000,
		"bonusPoints": 0,
		"settingsBonusPoints": {
			"min": 100,
			"max": 10000,
			"granularity": 50
		},
		"modalities": [{
			"type": "PAYMENT_MODALITY_FINANCING",
			"description": "Financiamento",
			"operations": [{
				"description": "BOLETO",
				"plans": [{
					"planToken": "ec596259-68e4-5c6c-a2be-a0f24a38caf2",
					"description": "0 + 2x c/ juros",
					"installments": 2,
					"packageGroup": "VHI",
					"value": 1000
				}, {
					"planToken": "cdc667ec-a01c-50e2-9c95-430d71b44428",
					"description": "0 + 3x c/ juros",
					"installments": 3,
					"packageGroup": "VHI",
					"value": 666.66
				}, {
					"planToken": "9cb0660d-99db-5050-a5c9-2e1ef773762c",
					"description": "0 + 4x c/ juros",
					"installments": 4,
					"packageGroup": "STANDALONE",
					"value": 500
				}]
			}, {
				"description": "DEPOSITO",
				"plans": [{
					"planToken": "74b47867-c31e-5118-b3bb-8b63499ad94e",
					"description": "0 + 1x c/ juros",
					"installments": 1,
					"packageGroup": "VHI",
					"value": 2000
				}, {
					"planToken": "ec596259-68e4-5c6c-a2be-a0f24a38caf2",
					"description": "0 + 2x c/ juros",
					"installments": 2,
					"packageGroup": "VHI",
					"value": 1000
				}, {
					"planToken": "cdc667ec-a01c-50e2-9c95-430d71b44428",
					"description": "0 + 3x c/ juros",
					"installments": 3,
					"packageGroup": "STANDALONE",
					"value": 666.66
				}, {
					"planToken": "9cb0660d-99db-5050-a5c9-2e1ef773762c",
					"description": "0 + 4x c/ juros",
					"installments": 4,
					"packageGroup": "STANDALONE",
					"value": 500
				}]
			}]
		}, {
			"type": "PAYMENT_MODALITY_CREDIT_CARD",
			"description": "Cartão de Crédito",
			"operations": [{
				"description": "Mastercard",
				"plans": [{
					"planToken": "74b47867-c31e-5118-b3bb-8b63499ad94e",
					"description": "0 + 1x c/ juros",
					"installments": 1,
					"packageGroup": "VHI",
					"value": 2000
				}, {
					"planToken": "ec596259-68e4-5c6c-a2be-a0f24a38caf2",
					"description": "0 + 2x c/ juros",
					"installments": 2,
					"packageGroup": "VHI",
					"value": 1000
				}, {
					"planToken": "cdc667ec-a01c-50e2-9c95-430d71b44428",
					"description": "0 + 3x c/ juros",
					"installments": 3,
					"packageGroup": "STANDALONE",
					"value": 666.66
				}, {
					"planToken": "9cb0660d-99db-5050-a5c9-2e1ef773762c",
					"description": "0 + 4x c/ juros",
					"installments": 4,
					"packageGroup": "STANDALONE",
					"value": 500
				}]
			}, {
				"description": "Visa",
				"plans": [{
					"planToken": "74b47867-c31e-5118-b3bb-8b63499ad94e",
					"description": "0 + 1x c/ juros",
					"installments": 1,
					"packageGroup": "VHI",
					"value": 2000
				}, {
					"planToken": "ec596259-68e4-5c6c-a2be-a0f24a38caf2",
					"description": "0 + 2x c/ juros",
					"installments": 2,
					"packageGroup": "VHI",
					"value": 1000
				}, {
					"planToken": "cdc667ec-a01c-50e2-9c95-430d71b44428",
					"description": "0 + 3x c/ juros",
					"installments": 3,
					"packageGroup": "VHI",
					"value": 666.66
				}, {
					"planToken": "9cb0660d-99db-5050-a5c9-2e1ef773762c",
					"description": "0 + 4x c/ juros",
					"installments": 4,
					"packageGroup": "STANDALONE",
					"value": 500
				}]
			}]
		}]
	}]
}