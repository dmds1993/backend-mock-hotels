var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	if(req.body.username.length && req.body.password.length) {
  	res.json({ secUserToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7InBlcnNvbklkIjo3NjI3ODY1LCJ1c2VySWQiOjk2NzExLCJuYW1lIjoiTUFSQ1VTIFZJTklDSVVTIENPU1RBIEUgUEFVTEEiLCJjcGYiOiI0MTA1Mjk2NDg1MCIsImJyYW5jaElkIjoxMDAwLCJhZ2VudFNpZ24iOiJXRUIiLCJ1c2VyIjoiTVRaQ1BENjAwIn0sInN5c3RlbXMiOlt7InN5c3RlbUNvZGUiOjEsImNsaWVudElEIjo5ODUxOTE0NjcxNzIxODE2LCJleHBpcmVzT24iOiIyMDE2LTA5LTExVDE0OjU5OjQ1LjAwMCswMDowMCIsImFjdGl2ZSI6IlMgIn0seyJzeXN0ZW1Db2RlIjozLCJjbGllbnRJRCI6OTg1MTkxNDY3MTcyMTgxNiwiZXhwaXJlc09uIjoiMjAxNi0wOS0xMVQxNDoxNDo0NS4wMDArMDA6MDAiLCJhY3RpdmUiOiJTICJ9XSwiaWF0IjoxNDczNjEzMTg4fQ.u6e0Pcix_QzSohgh4vcZULOopjN51w-328UGdJ9BHyM' });
	} else {
  	res.json({ reason: 'INVALID_USERNAME-PASSWORD' });
	}
});

module.exports = router;