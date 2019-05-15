const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

/* 채팅*/
router.post('/api/chat/:midx/:cgidx', async (req, res) => {
	const sql = `INSERT INTO chat (cgidx, category, midx, content, datetime, nickname) values (?,?,?,?,?, ?)`
	const resultJSON = { success: true }
	const category = req.body.category || null
	try { 
		await execQuery(sql, [req.params.cgidx, category, req.params.midx, req.body.content, req.body.datetime, req.body.nickname])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
router.get('/api/chat/:cgidx/:category', async (req, res) => {
	const resultJSON = { success: true }
	const { category, cgidx } = req.params
	console.log("category : " + category)
	console.log("cgidx : " + cgidx)
	const add_sql = []
	const execArr = [cgidx]
	let category_idx
	if (category === 'undefined') {
		add_sql.push('category IS NULL')
	} else {
		add_sql.push('category = ?')
		execArr.push(`${category}`)
	}
	const add_sql_joined = add_sql.length ? ` and ${add_sql}` : ''
	const sql = `SELECT * FROM chat WHERE cgidx = ? ${add_sql_joined}`

	try { 
		resultJSON.data = await execQuery(sql, execArr)
		console.log(resultJSON.data)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
 