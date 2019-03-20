var express = require('express');
var router = express.Router();

/* #42 test */
router.get('/api', (req, res) => {
	if(req.session.member == undefined){
		res.json({success: false})
	} else {
		res.json({success: true, data: req.session})

	}
});

module.exports = router;
