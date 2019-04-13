express = require('express');
var router = express.Router();
const execQuery = require('../db.js')

/* #54 getFrineds*/
router.get('/api/friend/:midx', async (req, res) => {
	const sql1 = `select A.midx, A.friend from friend A WHERE A.midx = ?`
	const sql2 = `select * A.favorite,
	B.nickname, B.idx, B.email, B.profile_message, B.profile_img, B.place, B.lat, B.lng
	FROM friend A JOIN member B 
	ON A.midx = B.idx
	WHERE midx = ? AND friend = ?
	ORDER BY B.nickname ASC
	`
	const resultJSON = { success: true, data: []}
	let resultSql1
	let resultSql2
	try {
		resultSql1 = await execQuery(sql1, [req.params.midx])
		resultSql1.forEach(friend => {
			console.log(friend)
		})
		resultSql2 = await execQuery(sql2, [16, req.params.midx])
		console.log("test")
		console.log(resultSql2)
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #132 deleteFriend */
router.delete('/api/friend/:midx/:friend', async (req, res) => {
	const sql1 = `DELETE FROM friend WHERE midx = ? and friend = ?`
	const resultJSON = { success: true }
	try {
		resultJSON.data = await execQuery(sql1, [req.params.midx, req.params.friend])
		resultJSON.data = await execQuery(sql1, [req.params.friend, req.params.midx])
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


/* #158 get member-friend relation */
router.get('/api/friend/:midx/:friend', async (req, res) => {
	// 나 -> 친구
	const sql1 = `SELECT * FROM friend where midx = ? and friend = ?`
	// 친구 -> 나
	const sql2 = `SELECT * FROM friend where midx = ? and friend = ?`
	const resultJSON = { success: true, message: '', state: null}
	try {
		const values = await Promise.all([
			execQuery(sql1, [req.params.midx, req.params.friend]),
			execQuery(sql2, [req.params.friend, req.params.midx])
		])
		const result1 = values[0][0]
		const result2 = values[1][0]

		if (!result1 && !result2) {
			// 서로 아무 관계가 없을 때
			resultJSON.message = '친구 요청'
			resultJSON.state = 0
		} else if (result1 && result2) {
			// 서로 친구 관계 일 때
			resultJSON.message = '친구 삭제'
			resultJSON.state = 1
		} else if (result1 && !result2) {
			resultJSON.message = '친구 요청 취소'
			resultJSON.state = 2
		} else if (!result1 && result2) {
			resultJSON.message = '나에게 친구 요청을 보냈습니다'
			resultJSON.state = 3
		}
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

/* #158 insert member-friend request active relation*/
router.post('/api/friend/:midx/:friend', async (req, res) => {
	const sql = `INSERT INTO friend (midx, friend) values(?, ?)`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.params.midx, req.params.friend])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})
/* #158 cancel member-friend request active relation */
router.delete('/api/friend-cancel/:midx/:friend', async (req, res) => {
	const sql = `DELETE FROM friend WHERE midx = ? and friend =?`
	const resultJSON = { success: true }
	try {
		await execQuery(sql, [req.params.midx, req.params.friend])
	} catch (err) {
		resultJSON.success = false
		resultJSON.err = err.stack
	}
	res.json(resultJSON)
})

module.exports = router;
