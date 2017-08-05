var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	sess = req.session;
	if(sess.body){
		res.write('<h1>Hello '+sess.username+'</h1>');
		res.end('<a href="/logout">Logout</a>');
	}
	else{
    	res.write('<h1>Please login first.</h1>');
    	res.end('<a href="/">Login</a>');
	}
});

module.exports = router;
