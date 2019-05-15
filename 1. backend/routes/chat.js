const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

/* 채팅 input */
router.post('/api/chat/:midx/:cgidx', async (req, res) => {
	const sql = `INSERT INTO chat (cgidx, category, midx, content, reg_date) values (?,?,?,?,?)`
	const resultJSON = { success: true }
	let category
	req.body.category === undefined ? category = null : category = req.body.category
	try { 
		resultJSON.data = await execQuery(sql, [req.params.cgidx, category, req.params.midx, req.body.content, req.body.datetime])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;

