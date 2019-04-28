var express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getGroups*/
router.get('/api/group/:midx/:request', async (req, res) => {
	const sql = `select A.cgidx, A.authority, A.favorite, A.request,
	B.name, B.image, B.place, B.description
	from group_participant A 
	JOIN chatting_group B 
	on A.cgidx = B.idx
	where midx = ? and request = ?
	order by name asc`
	const resultJSON = { success: true, data: []}
	try { 
		console.log(req)
		resultJSON.data = await execQuery(sql, [req.params.midx, req.params.request])
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

/* change group Request */
router.put('/api/group-request', async (req, res) => {
	const sql = `UPDATE group_participant SET 
				request = ? 
				WHERE midx = ? and cgidx = ?`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.body.request, req.body.midx, req.body.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
		console.log(err)
	}
	res.json(resultJSON)
})


/* delete group-participant */
router.delete('/api/group-participant', async (req, res) => {
	const sql = 'DELETE FROM group_participant where midx = ? and cgidx = ?'
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.body.midx, req.body.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #176 get group infomation */
router.get('/api/group-info/:cgidx', async (req, res) => {
	const sql = 'SELECT idx, name, permission, image, place, manager, default_authority, lat, lng, description, reg_date FROM chatting_group WHERE idx = ?'
	const resultJSON = {success: true}
	try {
		resultJSON.data = await execQuery(sql, [req.params.cgidx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
 	res.json(resultJSON)
})
module.exports = router;


