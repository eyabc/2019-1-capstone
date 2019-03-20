const execQuery = require('./db.js')
var express = require('express');
var router = express.Router();

// #41 
router.post('/api/member/signin', async (req, res) => {
	const sql = 'select * from member where email = ? and password = ?'
	const resultJSON = {success: true}
	try {
		resultJSON[member] = await execQuery(sql, [req.body.email, req.body.password])
	} catch (error) {
		resultJSON.success = false
	}
	res.json(resultJSON)
})

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
