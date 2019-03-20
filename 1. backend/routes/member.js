const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

// #41 
router.post('/api/member/signin', async (req, res) => {
	const sql = 'select * from member where email = ? and password = ?'
	const resultJSON = {success: true}
	try {
		req.session.member = resultJSON['member'] = (await execQuery(sql, [req.body.email, req.body.password]))[0]
	} catch (error) {
		resultJSON.success = false
	}
	console.log(resultJSON)
	res.json(resultJSON)
})

router.get('/api', function(req,res){
	console.log(req.session)
})
module.exports = router;
