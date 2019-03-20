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


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
