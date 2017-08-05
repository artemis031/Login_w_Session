var express = require('express');
var session = require('express-session');
var router = express.Router();
var app = express();


// router.use(session({secret: 'laderlappen'}));		//Deprecated
router.use(session({
	secret: 'laderlappen', 
	saveUninitialized: true,
	resave: true
}));

var sess;

router.get('/', function(req, res, next){
    sess = req.session;
	if(sess.body) {		//Checks if session is alive
		// console.log('enter1');
    	res.redirect('/users');
	}
	else{
		// console.log('enter2');
		res.render('index', { title: 'Login Page' });	
	}

});

router.post('/login', function(req, res, next){
	sess = req.session;			
	sess.username = req.body.username;	//Assign client username to sess.username.
	sess.password = req.body.password;	//Assign client passowrd to sess.password.
	// res.end('done');

	if(sess.body){		//Checks if session is alive
		// console.log(enter3);
		res.render('index', { title: 'Login Page' });
	}
	else{
		if(req.body.username === "wat" && req.body.password === "wat"){
			sess.body = req.body;
			// console.log('enter4.1');
			res.redirect('/users');
		}
		else{
			res.redirect('/');
			// console.log('enter4.2');
			console.log("Invalid credentials.");		//render error page
		}
	}

});

router.get('/logout',function(req, res){
	// console.log('enter5.');
	req.session.destroy(function(err) {
	  	if(err) {
	    	console.log(err);
	  	}
	  	else {
	    res.redirect('/');
	  	}
	});
});


module.exports = router;