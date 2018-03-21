



yet
done
noresult









const user = require('../models/user');
const mat=user.mat;
const minfo=user.matchinf;
const usersc =user.user;

var mcount;



exports.getIndividual=(matchId,phone)=>
new Promise((resolve,reject)=>{
	var e="matchPersonal.m"+1+".bo1";

	query={};
	query[e]=1;
var mNum="m"+1;
var we="bo"+1;
var quer=usersc.findOne({phone:phone}).select(query);
quer.exec(function (err, matc) {

var k=matc.toObject();
var mNum="m"+1;
var we="bo"+1;
var b=k.matchPersonal[mNum][we];
console.log('',b);



resolve({status:200,k});
if(err){reject({status:500,message:'Internal Server Error'});}
});
});

exports.getUserPoints=(phone,m,c)=>
new Promise((resolve,reject)=>{
	usersc.findOne({phone:phone}).then(guser=>{
		var points=guser.points;
		var g=""+m;

		var HpEleven=[];
		var VpEleven=[];
		var teams=[];
		mat.findOne({_id:"2"}).then(grab=>{
			teams.push(grab.hTeam);

			teams.push(grab.vTeam);
			console.log("",teams);
			minfo.findOne({_id:grab.hTeam}).then(gr=>{

				for(var t in gr.team){
					HpEleven.push(gr.team[0]);

				}

			});
			minfo.findOne({_id:grab.vTeam}).then(gr=>{
				var r=gr.toObject();
				console.log("",r.team);
				for(var e in gr.team){
					VpEleven.push(gr.team[e]);
				}

			});
		});

		console.log("",points);
		console.log("",teams);
		console.log("",HpEleven);
		console.log("",VpEleven);


		resolve({status:200,points,teams,HpEleven,VpEleven});

	}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));


});




exports.getmatchStatusData=()=>

   new Promise((resolve,reject)=>{

	   mat.find({})

	   .then(grab=>{
		            var sDates=[];
					var eDates=[];
              		var statusArray=[];
for(var i=1;i<=55;i++){
console.log("inside status");
				var d=new Date();
				sDates.push(grab[i].sDate);
				eDates.push(grab[i].eDate);
				console.log("before",d,grab[i].eDate);
				if(d.getTime()>=grab[i].sDate.getTime() && d.getTime()<=grab[i].eDate.getTime()){
				console.log("after");
				statusArray.push("open")}else if(d.getTime()>grab[i].eDate.getTime()){
	   statusArray.push("closed");}
	   else
		   statusArray.push("not available");

	   }


		   console.log('',statusArray);


		resolve({status:200,r,statusArray,sDates,eDates});
	   }

	   )




.catch(err => reject({ status: 500, message: 'Internal Server Error !' }));
   });


	function getFirstDetails(u){
		console.log("working");
	 return new Promise((resolve,reject)=>{

	 usersc.find({phone:"4545454545"},{matchPersonal:0}).then(grab =>{
		              console.log("found");
		 var pnts="400";
		 resolve({pnts});
	 }).catch(err => reject({status: 500, message: 'Internal server error !'}));



 });}
