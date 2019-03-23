const execQuery = require('./db.js')
var express = require('express');
var router = express.Router();

// #31
router.post('/api/search-group', async (req, res) => {
	const sql = 'select * from chatting_group where name = ?'
	const resultJSON= {success: true}
	try {
		resultJSON[chatting_group] = await execQuery(sql, [req.body.name])
	} catch (error) {
		resultJSON.success = false
	}
	res.json(resultJSON)
})
	





module.exports = router;

