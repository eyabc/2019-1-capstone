const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();


/* #41 */  
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
// router.get('/api', (req, res) => {
// 	const sql = 'select data from sessions where email = ? and password = ?'
// 	const resultJSON = { success: true }
// 	res.json({success: true, data: req.session})
// });

/* # 46 회원가입 - 이메일 중복 체크  */ 
router.post('/api/member/signup/email', async (req, res) => {
	const sql = 'select email from member where email = ?'
	const resultJSON = { success: true, email: false }
	try {
		const email = await execQuery(sql, [req.body.email])
		if(email.length === 0) resultJSON.email = true
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* # 46 회원가입  */ 
router.post('/api/member/signup', async (req, res) => {
	const sql = 'insert into member (email, password, nickname, place, lat, lng) values(?,?,?,?,?,?)'
	const resultJSON = { success: true }
	const data = req.body
	try {
		await execQuery(sql, [data.email, data.password, data.nickname, data.place, data.lat, data.lng])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
