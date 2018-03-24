const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const person   = mongoose.Schema({

	name 	     		  : String,
	support            :String,
	phone         	: {type:String,index:{ unique:true}},
	points          : Number,
	support          :String,
temp_password	: String,
	temp_password_time: String,
	email           :String,
	rank          :Number,
	
	rpoints         :  Number,
	hashed_password	: String,
	created_at		  : String,
matchPersonal     : {
 m1:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
     ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m2:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m3:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m4:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m5:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m6:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m7:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m8:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
 m9:{ifcalc:Number,pmstatus:Number, bo1:Number, bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
 ,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m10:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m11:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m12:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m13:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m14:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m15:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m16:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m17:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m18:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m19:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m20:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m21:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m22:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m23:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m24:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m25:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m26:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m27:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m28:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m29:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m30:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m31:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m32:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m33:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m34:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m35:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m36:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m37:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m38:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m39:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m40:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m41:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m42:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m43:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m44:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m45:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m46:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m47:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m48:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m49:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m50:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m51:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m52:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m53:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m54:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m55:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m56:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m57:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m58:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m59:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
m60:{ifcalc:Number,pmstatus:Number,bo1:Number,bo2:Number,bo3:Number,bo4:Number,bo5:Number,bo6:Number,bo7:Number,bo8:Number
,bs1:String,bs2:String,bs3:String,bs4:String,bs5:String,bs6:String,bs7:String,bs8:String},
}
},{strict:false});

const match = mongoose.Schema({

	_id         :String,
	Ratio: {
		rHteam:String,
		rVteam:String
		
	},
	hTeam       :String,
	vTeam       :String,
	result      :String,
	sDate       :Date,
	eDate       :Date,
	mstatus     :String,
	mResult:{
	mSix        :String,
		mWinner   :String,

	manMatch     :String,
	
	mWickets1    :String,
	mRuns1       :String,
	mWickets2    :String,
	mRuns2       :String,
	tsixes       :String
	}
	
	});

const matchinfo = mongoose.Schema({
	_id:String,
	team:[{type:String,index:true}]

});




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/noddd');

const user = mongoose.model('user', person,'users');
const mat = mongoose.model('mat',match,'matchTable');
const matchinf=mongoose.model('matchinf',matchinfo,'teamInfo');

var models = {

	'mat' : mat,
	'user': user,
	'matchinf':matchinf
};
module.exports=models;
