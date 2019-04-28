const execQuery = require('../db.js')
var express = require('express');
var router = express.Router();

/* #174 map group search */
router.get('/api/search-group', async (req, res) => {
	const add_sql = []
	const execArr = [1]
	const resultJSON = { success :true }
	const { name, description } = req.query
	try {
		if (name !== '') {
			add_sql.push('name LIKE ?')
			execArr.push(`%${name}%`)
		}
		if (description !== '') {
			add_sql.push('description LIKE ?')
			execArr.push(`%${description}%`)
		}
		const add_sql_joined = add_sql.length ? ` and (${add_sql.join(' or ')})` : ''
 		const sql = `
			SELECT idx AS cgidx, name, description, image, place, lat, lng FROM
			chatting_group  WHERE visibility = ? ${add_sql_joined}
		`
		resultJSON.data = await execQuery(sql, execArr)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
/* #174 get all group */
router.get('/api/map-group', async (req, res) => {
	const sql = `
	SELECT idx AS cgidx, name, description, image, place, lat, lng FROM chatting_group 
	WHERE visibility = ? 
	`
	const resultJSON = { success :true }
	try {
		resultJSON.data = await execQuery(sql, [1])
		console.log(sql)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})




module.exports = router;
