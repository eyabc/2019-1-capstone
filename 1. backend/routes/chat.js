const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

router.post('/api/chat/:midx/:cgidx', async (req, res) => {
	const sql = `INSERT INTO chat (cgidx, category, midx, content, datetime, nickname) values (?,?,?,?,?, ?)`
	const resultJSON = { success: true }
	const category = req.body.category || null
	try { 
		resultJSON.idx = (await execQuery(sql, [req.params.cgidx, category, req.params.midx, req.body.content, req.body.datetime, req.body.nickname])).insertId
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
router.get('/api/chat/:cgidx', async (req, res) => {
	const resultJSON = { success: true }
	const sql = `SELECT * FROM chat WHERE cgidx = ? `
	try { 
		resultJSON.data = await execQuery(sql, [req.params.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

router.post('/api/push/:midx/:cgidx/:category', async (req, res) => {
	const sql = `INSERT INTO push_notificataion (midx, chat_idx) values (?,?,?,?,?, ?)`
	const resultJSON = { success: true }
	const category = req.body.category || null
	try { 
		resultJSON.idx = (await execQuery(sql, [req.params.cgidx, category, req.params.midx, req.body.content, req.body.datetime, req.body.nickname])).insertId
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
 