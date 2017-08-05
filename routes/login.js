var express = require('express');
var router = express.Router();


//This page just redirects to home.

router.get('/', function(req, res, next) {
  	sess = req.session;
	if(sess.body){
		console.log('sess.bodypasok');
		res.write('<h1>Hello '+sess.username+'</h1>');
		res.end('<a href="/logout">Logout</a>');
	}
	else{
    	res.redirect('/users');
	}
});

module.exports = router;
