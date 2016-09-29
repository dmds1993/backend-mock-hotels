var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	if (req.body.body) {
		res.json({
			message: 'Success'
  	});
	} else {
		res.json({
			message: 'Error'
  	});
	}
});


router.get('/subjects', function(req, res, next) {
	res.json({
		subjects: ['Hotel', 'Aéreo', 'Rodoviário', 'Navio', 'Receptivo', 'Loja CVC', 'Agente de Viagem', 'Cadastro', 'Lista de Presentes', 'Publicidade', 'Portal CVC', 'Outros']
	})
});

module.exports = router;