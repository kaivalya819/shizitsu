'use strict';

const auth  = require('basic-auth');
const jwt   = require('jsonwebtoken');


const matchData = require('./functions/matchData');
const register  = require('./functions/register');
const login     = require('./functions/login');
const profile   = require('./functions/profile');
const password  = require('./functions/password');
const config    = require('./config/config.json');

module.exports = router => {

	router.get('/', (req, res) => res.end('Welcome to Hula !'));

router.post('/authenticate', (req, res) => {

		const credentials = auth(req);


		if (!credentials) {

			res.status(400).json({ message: 'Invalid Request !' });

		} else {
			const t=credentials.name;
			const r=credentials.pass;
console.log('after log',t,r);
			login.loginUser(credentials.name, credentials.pass)

			.then(result => {

				const token = jwt.sign(result, config.secret, { expiresIn: 1440 });

				res.status(result.status).json({ message: result.message, token: token });

			})

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	router.post('/users', (req, res) => {
        console.log('inside register');
		const name = req.body.name;
		const phone = req.body.phone;
		const password = req.body.password;

		if (!name || !phone || !password || !name.trim()|| !phone.trim() || !password.trim()) {

			res.status(400).json({message: 'Invalid Request !'});

		} else {

			register.registerUser(name, phone, password)

			.then(result => {

				res.setHeader('Location', '/users/'+phone);
				res.status(result.status).json({ message: result.message })
			}).catch(err => res.status(err.status).json({ message: err.message })
			);
		}
	});

	router.get('/users/:id', (req,res) => {
console.log('inside get');
		if (checkToken(req)) {

			profile.getProfile(req.params.id)

			.then(result => res.json(result))

			.catch(err => res.status(err.status).json({ message: err.message }));

		} else {

			res.status(401).json({ message: 'Invalid Token !' });
		}
	});

	router.put('/users/:id', (req,res) => {
console.log('inside chanePass');
		if (checkToken(req)) {

			const oldPassword = req.body.password;
			const newPassword = req.body.newPassword;

			if (!oldPassword || !newPassword || !oldPassword.trim() || !newPassword.trim()) {

				res.status(400).json({ message: 'Invalid Request !' });

			} else {

				password.changePassword(req.params.id, oldPassword, newPassword)

				.then(result => res.status(result.status).json({ message: result.message }))

				.catch(err => res.status(err.status).json({ message: err.message }));

			}
		} else {

			res.status(401).json({ message: 'Invalid Token !' });
		}
	});

	router.post('/users/:id/password', (req,res) => {
console.log('reset pass');
		const email = req.params.id;
		const token = req.body.token;
		const newPassword = req.body.password;

		if (!token || !newPassword || !token.trim() || !newPassword.trim()) {

			password.resetPasswordInit(email)

			.then(result => res.status(result.status).json({ message: result.message }))

			.catch(err => res.status(err.status).json({ message: err.message }));

		} else {

			password.resetPasswordFinish(email, token, newPassword)

			.then(result => res.status(result.status).json({ message: result.message }))

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	function checkToken(req) {
console.log('inside checkTokkenn');
		const token = req.headers['x-access-token'];

		if (token) {

			try {

  				var decoded = jwt.verify(token, config.secret);

  				return decoded.message === req.params.id;

			} catch(err) {

				return false;
			}

		} else {

			return false;
		}
	}

		router.post('/matchTable/:id',(req,res)=>{
   	console.log('inside matchTable');
	       const d= req.params.id;
		   console.log('',d);
	matchData.getMatchDetails(d)
	.then(result=>{
		res.status(200).json(result);

	}

	).catch(err => res.status(err.status).json({ message: err.message }));


});

router.post('/matchTable',(req,res)=>{
	           console.log('inside matchTable Status');
			   var phone=req.query.phone;
			   console.log('inside matchTable Status',phone);
                matchData.getmatchStatusData(phone)
.then(result=>{
	console.log('inside first request',result);
	res.status(200).json(result);
})	.catch(err => res.status(err.status).json({ message: err.message }));

		  }
		  );


router.get('/matchTable',(req,res)=>{
	var matchId=req.query.matchId;
	var phone=req.query.phone;
	console.log("inside get betStatus",matchId);
	console.log("inside get betStatus",phone);
		matchData.getIndividual(matchId,phone).then(result=>{
		res.status(200).json(result);

	}).catch(err => res.status(err.status).json({ message: err.message }));

}

);
router.get('/match',(req,res)=>{
	var userPhone=req.query.phone;
	var m=req.query.matchId;
	var c=req.query.category;
	console.log("caught",userPhone,m,c);
	matchData.getUserPoints(userPhone,m,c).then(result=>{
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.post('/mat',(req,res)=>{
	var userPhone=req.query.phone;
	var m=req.query.matchId;
	var c=req.query.category;
	var bpoints=req.query.betpoints;
	var bselect=req.query.betselect;
	console.log("post mat");
	matchData.getBetConfirmation(userPhone,m,c,bpoints,bselect).then(result=>{
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/mat',(req,res)=>{
	var userContacts=req.query.contacts;
	var m=req.query.ucontact;
	console.log("caught",userContacts,m);
	matchData.getUserPoints(userPhone,m,c).then(result=>{
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/contacts',(req,res)=>{
	var userContacts=req.query.contacts;
	
	matchData.getUserContactPoints(userContacts).then(result=>{
		console.log("sending",result);
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/noti',(req,res)=>{
	var userContacts=req.query.phone;
	
	matchData.getNotifications(userContacts).then(result=>{
		console.log("sending",result);
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/support',(req,res)=>{
	var userContacts=req.query.phone;
	var supp=req.query.support;
	console.log("here ",userContacts,supp);
	matchData.getSupport(userContacts,supp).then(result=>{
		
		console.log("sending",result);
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/chek',(req,res)=>{
	var userContacts=req.query.phone;
	
	console.log("here ",userContacts);
	matchData.getChecked(userContacts).then(result=>{
		
		console.log("sending",result);
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});

router.get('/prof',(req,res)=>{
	var userContacts=req.query.phone;
	
	console.log("here ",userContacts);
	matchData.getProf(userContacts).then(result=>{
		
		console.log("sending",result);
	res.status(200).json(result);}
	).catch(err => res.status(err.status).json({ message: err.message }));
});




}
