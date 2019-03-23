const execQuery = require('./db.js')
var express = require('express');
var router = express.Router();
// #79
router.delete('/api/member', async (req, res) => {
	const sql = 'delete from member where idx = ?'
	const resultJSON = {success: true}
	try {
		await execQuery(sql, [req.body.idx])
	} catch (error){
		resultJSON.success = false
	}
	res.json(resultJSON)
})

// #80
router.update('api/member', async (req, res) => {
	const sql = 'update member'
				'set email = 'value1', password = 'value2', nickname = 'value3', place = 'value4''
				'where idx = 1'
	const resultJSON = {success: true}
	try {
		await execQuery(sql, [req.body.email, req.body.password, req.body.nickname, req.body.place])
	} catch (error){
		resultJSON.success = false
	}
	res.json(resultJSON)
})


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
