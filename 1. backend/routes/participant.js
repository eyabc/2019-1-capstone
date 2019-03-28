var express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getGroups*/
router.get('/api/group/:midx', async (req, res) => {
	const sql = `select A.midx, A.cgidx, A.authority, A.favorite, 
						B.name, B.image, B.themeidx, B.location, B.manager, B.default_authority, B.description
					from group_participant A 
					JOIN chatting_group B 
					on A.cgidx = B.idx
					where midx = ?
					order by name asc`
	const resultJSON = { success: true, group: []}
	try {
		resultJSON.group = await execQuery(sql, [req.params.midx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
