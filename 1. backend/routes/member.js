const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();
// #79
router.delete('/api/member', async (req, res) => {
	const sql = 'delete from member where idx = ?'
	const resultJSON = {success: true}
	try {
		await execQuery(sql, [req.body.idx])
	} catch (error){
		resultJSON.success = false
	}
	res.json(resultJSON)
})


/* #41 로그인 */  
router.post('/api/member/signin', async (req, res) => {
	const sql = 'select * from member where email = ? and password = ?'
	const resultJSON = { success: true }
	let member
	const data = req.body
	try {
		member =  await execQuery(sql, [data.email, data.password])
		if(!member.length){
			resultJSON.member = false
		} else {
			// req.session.member = resultJSON['member']  = member[0]
			resultJSON['member']  = member[0]
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
	const resultJSON = { success: true, msg: false }
	const data = req.body
	try {
		const chk = await execQuery(`select email from member where email = ?`, [data.email])
		if(chk.length === 0) {
			await execQuery(sql, [data.email, data.password, data.nickname, data.place, data.lat, data.lng])
		} else {
			resultJSON.msg = true
		}
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})



/* #80 update my information  */
router.put('/api/member/:idx', async (req, res) => {
	const sql = `UPDATE member SET 
				profile_img = ?,
				one_chat_available = ?,
				place_visibility = ?,
				password = ?,
				nickname = ?,
				place = ?, lat = ?, lng = ?,
				profile_message = ? 
				WHERE idx = ? 
	`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.body.profile_img, req.body.one_chat_available, req.body.place_visibility, req.body.password, req.body.nickname, req.body.place, req.body.lat, req.body.lng, req.body.profile_message, req.params.idx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* # 132 get friend infomation */
router.get('/api/member/:friend', async (req, res) => {
	const sql = `SELECT A.favorite,
				B.idx, B.email, B.place_visibility, B.reg_date, B.info_visibility, B.one_chat_available, B.nickname, B.profile_img, B.profile_message, B.place, B.lat, B.lng   
				FROM member B LEFT
				JOIN friend A
				ON A.friend = B.idx
				WHERE A.friend = ? 
				`
	const resultJSON = { success: true, data: false }
	try {
		resultJSON.data = (await execQuery(sql, [req.params.friend]))[0]
	} catch (err) {
		resultJSON.success = false

		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})


/* #158 get members by email (searchMember by email) */
router.get('/api/member-search', async (req, res) => {
		const sql = `SELECT idx, nickname, email, reg_date, profile_message 
					FROM member where email = ?
		`
		const resultJSON = { success: true, memberInfo: [] }
		try {
			resultJSON.memberInfo = await execQuery(sql, [req.query.email])
		} catch (err) {
			resultJSON.success = false
			resultJSON.err = err.stack
		}
		res.json(resultJSON)
})

/* #170 logout */
router.delete('/api/member-session', (req, res) => {
	// Ver2.0에서 session sql을 사용 할 때 쓰입니다. 
})
router.get('/api/member-info/:idx', async (res, req) => {
	const sql = `SELECT idx, nickname, profile_message, reg_date, place, lat, lng, info_visibility FROM member WHERE idx =?`
	const resultJSON = { success: true }
	try {
		resultJSON.data = await execQuery(sql, [req.params.idx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
module.exports = router;

