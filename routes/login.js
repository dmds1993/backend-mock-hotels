var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	if(req.body.username.length && req.body.password.length) {
		if(req.body.password === 'expired') {
			res.json({
				message: 'PASSWORD_EXPIRED',
				code: 'PXP'
			});
		} else {
			if(req.body.password === 'blocked') {
				res.json({
					message: 'USER_BLOCKED',
					code: 'UBL'
				});
			} else {
				if(req.body.password === 'tokenexpired'){
					res.json({
						message: 'EXPIRED_SEC-USER-TOKEN',
						code: 'ESU'
					});
				}else{
					if(req.body.password === 'lastwarning'){
						res.json({
							message: 'Username ou senha invalida, na proxima tentantiva seu usuário sera bloqueado',
							code: 'ILW'
						});
					}else{
	  			res.json({ secUserToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7InBlcnNvbklkIjo3NjI3ODY1LCJ1c2VySWQiOjk2NzExLCJuYW1lIjoiTUFSQ1VTIFZJTklDSVVTIENPU1RBIEUgUEFVTEEiLCJjcGYiOiI0MTA1Mjk2NDg1MCIsImJyYW5jaElkIjoxMDAwLCJhZ2VudFNpZ24iOiJXRUIiLCJ1c2VyIjoiTVRaQ1BENjAwIn0sInN5c3RlbXMiOlt7InN5c3RlbUNvZGUiOjEsImNsaWVudElEIjo5ODUxOTE0NjcxNzIxODE2LCJleHBpcmVzT24iOiIyMDE2LTA5LTExVDE0OjU5OjQ1LjAwMCswMDowMCIsImFjdGl2ZSI6IlMgIn0seyJzeXN0ZW1Db2RlIjozLCJjbGllbnRJRCI6OTg1MTkxNDY3MTcyMTgxNiwiZXhwaXJlc09uIjoiMjAxNi0wOS0xMVQxNDoxNDo0NS4wMDArMDA6MDAiLCJhY3RpdmUiOiJTICJ9XSwiaWF0IjoxNDczNjEzMTg4fQ.u6e0Pcix_QzSohgh4vcZULOopjN51w-328UGdJ9BHyM',profile:{name:"MARCUS VINICIUS COSTA E PAULA",userType:"VENDOR"} });
	        }
        }
			}
		}
	} else {
  	res.json({
			reason: 'INVALID_USERNAME-PASSWORD',
			message: 'IUP'
		});
	}
});

router.patch('/', function(req, res, next) {
		res.json({secUserToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7InBlcnNvbklkIjo3NjI3ODY1LCJ1c2VySWQiOjk2NzExLCJuYW1lIjoiTUFSQ1VTIFZJTklDSVVTIENPU1RBIEUgUEFVTEEiLCJjcGYiOiI0MTA1Mjk2NDg1MCIsImJyYW5jaElkIjoxMDAwLCJhZ2VudFNpZ24iOiJXRUIiLCJ1c2VyIjoiTVRaQ1BENjAwIn0sInN5c3RlbXMiOlt7InN5c3RlbUNvZGUiOjEsImNsaWVudElEIjoyNzA5OTM3MTE0NzkxMTYwLCJleHBpcmVzT24iOiIyMDE3LTAzLTA4VDA5OjAwOjI4LjAwMC0wMzowMCIsImFjdGl2ZSI6IlMgIn0seyJzeXN0ZW1Db2RlIjozLCJjbGllbnRJRCI6MjcxMTI4MjExNDcxNTIwNiwiZXhwaXJlc09uIjoiMjAxNy0wMy0wOFQwODoxNToyOC4wMDAtMDM6MDAiLCJhY3RpdmUiOiJTICJ9XSwiaWF0IjoxNDg4OTcwODI4fQ.4GVfhkgFGANn5yPQlhShT75Vj4KyvEl2BX2dwlUA_4U",profile:{name:"MARCUS VINICIUS COSTA E PAULA",userType:"VENDOR"}})
});

router.get('/policies', function(req, res, next) {
	res.json({ "policies": [ { "name": "courtesy" }, { "name": "discounts" }, { "name": "salesLimitSeller", "value": "40" } ], "menus": [ { "link": { "name": "Lojas" }, "menus": [ { "link": { "name": "Vendas" }, "menus": [ { "link": { "name": "Aéreo", "href": "http://ig.com.br" } }, { "link": { "name": "Hotel", "href": "http://uol.com.br" } } ] } ] } ] });
});

router.post('/sessionValidate', function(req, res, next) {
  res.status(204);
});

module.exports = router;
