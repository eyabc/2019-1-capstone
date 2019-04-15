const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

/* #174 map group search */
router.get('/api/search-group', async (req, res) => {
	console.log('test')
	const sql = `
	SELECT idx AS cgidx, name, description, image, place, lat, lng FROM chatting_group 
	WHERE visibility = ? AND ( name LIKE ? or description LIKE ? )
	`
	const resultJSON = { success :true }
	try {
		resultJSON.data = await execQuery(sql, [1, '%' + req.query.name + '%', '%' + req.query.description + '%'])
		console.log(sql)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
/* #174 search by group-description */



module.exports = router;
