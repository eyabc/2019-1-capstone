const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();


// #41 
router.post('/api/member/signin', async (req, res) => {
	const sql = 'select * from member where email = ? and password = ?'
	const resultJSON = { success: true }
	var member
	try {
		member =  await execQuery(sql, [req.body.email, req.body.password])

		if(!member.length){
			resultJSON.member = false
		} else {
			req.session.member = resultJSON['member']  = member[0]
		}
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err
	}
	res.json(resultJSON)
})

/* #41 session get */
router.get('/api', (req, res) => {
	const sql = 'select * from member where email = ? and password = ?'
	const resultJSON = { success: true }
	res.json({success: true, data: req.session})
});


module.exports = router;
