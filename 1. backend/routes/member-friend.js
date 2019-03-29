express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getFrineds*/
router.get('/api/friend/:midx', async (req, res) => {
	const sql = `select A.midx, A.friend, A.favorite, A.request, 
						B.nickname, B.profile_message, B.email, B.profile_img
					from member_friend A 
					JOIN member B 
					on A.friend = B.idx
					where midx = ?
					order by nickname asc`
	const resultJSON = { success: true, friend: []}
	try {
		resultJSON.friend = await execQuery(sql, [req.params.midx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
