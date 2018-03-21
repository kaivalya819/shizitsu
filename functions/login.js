'use strict';

const user = require('../models/user');
const bcrypt = require('bcryptjs');
var k=user.user;

exports.loginUser = (phone, password) => 
	new Promise((resolve,reject) => {

k.find({phone: phone})

		.then(users => {

			if (users.length == 0) {

				reject({ status: 404, message: 'User Not Found !' });

			} else {
                
				return users[0];
				
			}
		})

		.then(user=> {

			const hashed_password = user.hashed_password;
			

			if (bcrypt.compareSync(password, hashed_password)) {
                 console.log('password matched success');
				resolve({ status: 200, message: phone });

			} else {

				reject({ status: 401, message: 'Invalid Credentials !' });
			}
		})

		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }));

	});

	

	
