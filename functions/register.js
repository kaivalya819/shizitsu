

const user = require('../models/user');
const bcrypt = require('bcryptjs');
const person = user.user;
exports.registerUser = (name, phone, password) => 

	new Promise((resolve,reject) => {

	    const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new person({

			name: name,
			phone: phone,
			support:"",
			points:21000,
			rpoints:21000,
			rank:null,
			hashed_password: hash,
			created_at: new Date(),
			matchPersonal       : {
 m1:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m2:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m3:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m4:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m5:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m6:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m7:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m8:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m9:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m10:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m11:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m12:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m13:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m14:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m15:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m16:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m17:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m18:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m19:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m20:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m21:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m22:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0
 ,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m23:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m24:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m25:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m26:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m27:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m28:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m29:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m30:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m31:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m32:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m33:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m34:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m35:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m36:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m37:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m38:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m39:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m40:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m41:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m42:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m43:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m44:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m45:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m46:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m47:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m48:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m49:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m50:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m51:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m52:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m53:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m54:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m55:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m56:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m57:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m58:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m59:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""},
 m60:{'ifcalc':0,'pmstatus':1,'bo1':0,'bo2':0,'bo3':0,'bo4':0,'bo5':0,'bo6':0,'bo7':0,'bs1':"",'bs2':"",'bs3':"",'bs4':"",'bs5':"",'bs6':"",'bs7':""}
}
		});

		newUser.save()

		.then(() => resolve({ status: 201, message: 'User Registered Sucessfully !' }))

		.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {

				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	});


