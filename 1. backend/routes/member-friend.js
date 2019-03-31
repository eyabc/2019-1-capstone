express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getFrineds*/
router.get('/api/friend/:midx', async (req, res) => {
	const sql = `select A.midx, A.friend, A.favorite, A.request, 
						B.nickname, B.profile_message, B.email, B.profile_img
					from friend A 
					JOIN member B 
					on A.friend = B.idx
					where midx = ?
					order by nickname asc`
	const resultJSON = { success: true, data: []}
	try {
		resultJSON.data = await execQuery(sql, [req.params.midx])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #132 deleteFriend */
router.delete('/api/friend/:midx/:friend', async (req, res) => {
	const sql = `DELETE FROM friend WHERE midx = ? and friend = ?`
	const resultJSON = { success: true }
	try {
		resultJSON.data = await execQuery(sql, [req.params.midx, req.params.friend])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #59 setFavorite */
router.put('/api/friend/favorite/:midx/:friend', async (req, res) => {
	const sql = `UPDATE friend SET favorite = ? WHERE midx =? and friend = ?`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.body.favorite, req.params.midx, req.params.friend])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})


module.exports = router;
