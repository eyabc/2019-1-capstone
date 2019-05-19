var express = require('express');
var router = express.Router();
const execQuery = require('../db.js')


/* delete group-participant */
router.delete('/api/group-participant', async (req, res) => {
	const sql = 'DELETE FROM group_participant where midx = ? and cgidx = ?'
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.body.midx, req.body.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
router.get('/api/group-participant/:cgidx', async (req,res) => {
	const sql = `SELECT A.*, B.nickname, B.profile_message, B.reg_date, B.place, B.lat, B.lng, B.info_visibility FROM group_participant A 
				LEFT JOIN member B
				ON A.midx = B.idx
				WHERE A.cgidx = ?`
	const resultJSON = { success: true }
				
	try {
		resultJSON.data = await execQuery(sql, [req.params.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)		
})

/* #179 relation check between group and member */
router.get('/api/group-participant/relation/:midx/:cgidx', async (req, res) => {
	const sql = 'SELECT * FROM group_participant WHERE midx = ? and cgidx = ?'
	const resultJSON = { success: true }
	try {
		resultJSON.data = await execQuery(sql, [req.params.midx, req.params.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #179 insert participant */
router.post('/api/group-participant/:midx/:cgidx', async (req, res) => {
	const sql = `INSERT INTO group_participant (midx, cgidx, authority, request) values(?, ?, ?, ?)`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.params.midx, req.params.cgidx, req.body.authority, req.body.request])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
