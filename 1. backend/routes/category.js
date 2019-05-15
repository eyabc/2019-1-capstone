const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

router.get('/api/category/:cgidx', async (req, res) => {
	const sql = `SELECT * FROM category WHERE cgidx = ?`
	const resultJSON = { success: true }
	const { cgidx } = req.params
	try { 
		resultJSON.data = await execQuery(sql, [cgidx])
		console.log(resultJSON.data)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
router.post('/api/category/:cgidx', async (req, res) => {
	const sql = `INSERT INTO category (parent, cgidx, name, description, authority) VALUES (?,?,?,?,?)`
	const resultJSON = { success: true }
	try {
		resultJSON.idx = (await execQuery(sql, [req.body.parent, req.params.cgidx, req.body.name, req.body.description, req.body.authority])).insertId
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
