var express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getGroups*/
router.get('/api/group/:midx', async (req, res) => {
	const sql = `select A.midx, A.cgidx, A.authority, A.favorite, A.request, 
	B.name, B.image, B.place, B.description
	from group_participant A 
	JOIN chatting_group B 
	on A.cgidx = B.idx
	where midx = ?
	order by name asc`
	const resultJSON = { success: true, data: []}
	try {
		resultJSON.data = await execQuery(sql, [req.params.midx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #69 insertGroup*/
router.post('/api/group', async (req, res) => {
	const sql1 = `INSERT INTO chatting_group set ? `
	const sql2 = `INSERT INTO group_participant (midx, cgidx, authority, request) values(?,?,?,?)`
	const sql3 = `INSERT INTO group_participant (midx, cgidx, authority) values(?,?,?)`
	const resultJSON = { success: true }
	const f = req.body
	console.log(f.data2)
	try {
		const resultSql1 = await execQuery(sql1, f.data)
		await execQuery(sql2, [f.data.manager, resultSql1.insertId, 0, 0])
		if(f.data.visibility === 2) {
			f.data2.friends.map(async (item, index) => await execQuery(sql3, [item.idx, resultSql1.insertId, f.data.default_authority]))
		}
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
		console.log(err)
	}
	res.json(resultJSON)
})

module.exports = router;


