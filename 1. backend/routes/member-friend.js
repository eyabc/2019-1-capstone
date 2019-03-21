const execQuery = require('./db.js')
express = require('express');
var router = express.Router();

// #68
router.delete('/api/member-friend', async (req, res) => {
	const sql = 'insert into member-friend (midx, friend) value(?,?)'
	const resultJON = {success: true}
	try {
		await execQuery(sql, [req.body.midx, req.body.friend])
	} catch (error){
		resultJON.success = false
	}
	res.json(resultJON)
})

// #63
router.delete('/api/member-friend', async (req, res) => {
	const sql = 'delete from member where midx=? and friend=?'
	const resultJON = {success: true}
	try {
		await execQuery(sql, [req.body.midx, req.body.friend])
	} catch (error){
		resultJON.success = false
	}
	res.json(resultJON)
})
module.exports = router;
