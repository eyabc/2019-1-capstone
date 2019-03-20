const execQuery = require('./db.js')
var express = require('express');
var router = express.Router();


// #70
router.post('/api/chat', async (req, res) => {
	const sql = 'insert into chat (idx, cgidx, category, midx, content) values(?,?,?,?,?)'
	const resultJSON= {success: true}
	try {
		resultJSON[chat] = await execQuery(sql, [req.body.idx, req.body.cgidx, req.body.category, req.body.midx, req.body.content])
	} catch (error) {
		resultJSON.success = false
	}
	res.json(resultJSON)
})

// #67
router.post('/api/chat', async (req, res) => {
	const sql = 'select * from chat where cgidx = ? and category = ?'
	const resultJSON= {success: true}
	try {
		resultJSON[chat] = await execQuery(sql, [req.body.cgidx, req.body.category])
	} catch (error) {
		resultJSON.success = false
	}
	res.json(resultJSON)
})
	

module.exports = router;
