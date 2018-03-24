

const user = require('../models/user');
const mat=user.mat;
const minfo=user.matchinf;
const usersc =user.user;
const { forEach } = require('p-iteration');
const {async} = require('async');

var mcount;





		
	
exports.getBetConfirmation=(phone,matchis,categ,bpoints,bselect)=>

new Promise((resolve,reject)=>{
	var phn=phone;
	var matchId=matchis;
	var categry=categ;
	var bp=bpoints;
	var bsel=bselect;
	var m="m"+matchId;
    var bo="bo"+categry;
	var bs="bs"+categry;
	var upoints,matstat;
	var bYes,msg;
	

	
	mat.findOne({_id:matchId}).then(grab=>{
             matstat=grab.mstatus;
	if(matstat=="open")
	{
	     usersc.findOne({phone:phn}).then(grb=>{
			 var already=grb.matchPersonal[m][bo];
			 var rpnts=grb.rpoints;
			 var change=already-bp;
			 rpnts=rpnts+change;
			  
			  var betp="matchPersonal.m"+matchId+".bo"+categry;
			  var bets="matchPersonal.m"+matchId+".bs"+categry;
          usersc.updateOne({phone:phn},{$set:{rpoints:rpnts,[betp]:bp,[bets]:bsel}}).then(got=>{
			      msg="Success";
				  console.log("msg is",msg);
				  resolve({status:200,msg});
				  
			  
			  
			  
		  }
		  
		  
		  ).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));			  
			 
			 
		 }
		 ) 
      		  
	       	
		
		
	}else{
		msg="yetordone";
		
		resolve({status:200,msg});
		
	}
				   
	}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));
	});	
	

exports.getIndividual=(matchId,phone)=>

     new Promise((resolve,reject)=>{

            var phn=phone;
            var idd=matchId;
            var userGuess=[];
			var userDet=[];
        
            getIndividualDetails(phn,idd).then(userD=>{
        
			for(let e=0;e<7;e++){
			   	
				userDet[e]=userD.mst[e];
			}
            for(let r=7;r<14;r++){
                var l=r-7;
                userGuess[l]=userD.mst[r];

            }
            mat.findOne({_id:idd}).then(grab=>{

        var mStatus=grab.mstatus;
		           

		
             var mResults=[];

            mResults[0]=grab.mResult.mWinner; 
														
            

			mResults[1]=grab.mResult.mRuns1;
            mResults[2]=grab.mResult.mWickets1; 
			mResults[3]=grab.mResult.mRuns2;
            mResults[4]=grab.mResult.mWickets2; 
			mResults[5]=grab.mResult.manMatch;
            mResults[6]=grab.mResult.tsixes;
			

        
        resolve({status:200,userDet,mStatus,mResults,userGuess});}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));


}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));




      });

exports.getUserPoints=(phone,m,c)=>
new Promise((resolve,reject)=>{
	   
	    var matchRatio=[];
		var upoints;
	    var vTeam,hTeam;
	    var matstatus;
		var betStatus;
		var betOption;
	    usersc.findOne({phone:phone}).then(guser=>{
		upoints=guser.rpoints;
		var g="m"+m;
		var y="bo"+c;
		var bs="bs"+c;
		
		 betStatus=guser.matchPersonal[g][y];
		 betOption=guser.matchPersonal[g][bs];
		upoints=upoints+betStatus;
		mat.findOne({_id:m}).then(grab=>{
			
			matchRatio[0]=grab.Ratio.rHteam;
			matchRatio[1]=grab.Ratio.rVteam;
			vTeam=grab.vTeam;
			hTeam=grab.hTeam;
			matstatus=grab.mstatus;
			console.log("lookin into",vTeam,hTeam,upoints,betStatus,betOption,matchRatio);
		resolve({status:200,vTeam,hTeam,matstatus,upoints,betStatus,betOption,matchRatio});

		}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));
		
}).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));});







	
 
 
 
function getIndividualDetails(userPhn,idd){

return new Promise((resolve,reject)=>{

usersc.findOne({phone:userPhn}).then(grab=>{
var e="m"+idd;


var mst=[];


for(let i=1;i<8;i++)    //0-6
{
var f="bo"+i;
	

mst[i-1]=grab.matchPersonal[e][f];
}
for(let y=7;y<14;y++){
		

  var n=y-6;
  var g="bs"+n;
  mst[y]=grab.matchPersonal[e][g];
}

resolve({mst});


}).catch(err => reject({status: 500, message: 'Internal server error !'}));


});

}

 
exports.getUserContactPoints=(recContacts)=>

new Promise((resolve,reject)=>{
	aFunction(recContacts).then(grab=>{
                               var contactPoints=grab.contactPoints;
							   var support=grab.support;
							  
		resolve({status:200,contactPoints,support});
		
	}).catch(err => reject({status: 500, message: 'Internal server error !'}));
	}

);


async function aFunction(Rarray){
	
	var contactPoints=[];
	var support=[];
	var tru;
	for(let p=0;p<Rarray.length;p++){
		
	 tru=await AnotherFunc(Rarray[p]);
	 if(tru==null){
		 support.push("");
	 contactPoints.push(0);}
	 else{
		 support.push(tru.support);
		 contactPoints.push(tru.points);
	 }
 
		}
	return ({contactPoints,support});
}

async function AnotherFunc(s){
		
		return new Promise((resolve,reject)=>{
		usersc.findOne({phone:s}).then(grab=>{
		if(grab!=null){resolve(grab);}
		
		else{resolve(null);}
		
		}).catch(err=>reject("error"));
		
		});
     	}
	
	
	
exports.getNotifications=(phn)=>
 
new Promise((resolve,reject)=>{
	
	 var winlos=[];
	 var q,ix;
	 var qr="ifcalc";
	 var qrr="matchPersonal";
	 var qr2="pmstatus";
	usersc.findOne({phone:phn}).then(grab=>{
		console.log("here",grab);
	      for(let i=0;i<60;i++)
		  {
			  ix=i+1;
			  q="m"+ix;
			  
			  if(grab[qrr][q][qr]==1)
			  {
				  winlos.push(grab[qrr][q][qr2]);
				  
			  }
			  
			  
		  }
		        console.log("winlos",winlos);
		  		resolve({status:200,winlos});

		  
	
	
	}).catch(err => reject({status: 500, message: 'Internal server error !'}));
	
	
	
}); 
	
	
	
	
	
	
	
	
exports.getmatchStatusData=(phne)=>

 new Promise((resolve,reject)=>{
	 syncMatch(phne).then(caught=>{
        		 
		var points=caught.twArray.pnts[0];
		var rank=caught.twArray.pnts[1];
         var htbc=caught.obj.htbc; 
                 var vtbc=caught.obj.vtbc;
				 var statusArray=caught.obj.statusArray;
				 var sDates=caught.obj.sDates;
		 
		 resolve({status:200,htbc,vtbc,statusArray,sDates,points,rank});
	 }).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));
	 
	 
 });


async function syncMatch(phn){
	var twArray    = await getthem(phn);
	var obj  = await getHeavy();
	
	return({twArray,obj});
}




async function getHeavy(){
return new Promise((resolve,reject)=>{
    var sDates=[];
	
					   
				      	var htbc=[];
						var vtbc=[];
						var statusArray=[];
	
   
	  heavy().then(grab=>{
			          
      for(let i=0;i<60;i++)
      {		

                sDates.push(grab.grab[i].sDate);
				           
				statusArray.push(grab.grab[i].mstatus);
				
				if(i>55)
				{ 
					htbc.push(grab.grab[i].hTeam);
					vtbc.push(grab.grab[i].vTeam);
					
				}
				

	   }
	       
		   resolve({htbc,vtbc,statusArray,sDates}); 
	  }).catch(err => reject({ status: 500, message: 'Internal Server Error !' }));
	  
	  });
}
	   
	   async function heavy(){
		   
           return new Promise((resolve,reject)=>{
			   mat.find({}).then(grab=>{
				   
				   resolve({grab});
				   
			   }).catch(e=>reject("reject"));
			   
			   
		   });	   
		   

	   }
   
   
   async function getthem(phn){
	   var r;
	   	

	   r = await getthemfast(phn);
	   
	  return (r);	   
   }
   
   async function getthemfast(phn){
	   return new Promise((resolve,reject)=>{
		   usersc.findOne({phone:phn}).then(grab=>{
                     var pnts=[];	
					 
			   pnts.push(grab.points);
			   pnts.push(grab.rank);
			   
		   resolve({pnts});
			   
		   }
		   
	   ).catch(err => reject({message: 'Internal Server Error !' }));
		   
	   }
	   
	   );
	   
	   
   }
	
exports.getSupport=(phn,sut)=>

new Promise((resolve,reject)=>{
	usersc.updateOne({phone:phn},{$set:{support:sut}}).then(grab=>{
		
		if(grab!=null){
			   var msg="Success!"
					 resolve({status:200,msg});

		}
		
		
	}
	
	
	).catch(err => reject({status: 500, message: 'Internal server error !'}));
	
	
});
exports.getChecked=(phn)=>

new Promise((resolve,reject)=>{
	var ifuExist;
	usersc.findOne({phone:phn}).then(grab=>{
		if(grab!=null){
			
			ifuExist="yes";
		}else{
			ifuExist="no";
			
		}
		resolve({status:200,ifuExist});
		
	}).catch(err => reject({status: 500, message: 'Internal server error !'}));
	
	
	
});


exports.getProf=(phn)=>

new Promise((resolve,reject)=>{
	
        usersc.findOne({phone:phn}).then(grab=>{
			
			var qr="ifcalc";
           var qrr="matchPersonal";
		   var qr2="pmstatus";
            var q,ix;
			
			var winloss=[];
			var pnts=grab.points;
			var name=grab.name;
			var rpnts=grab.rpoints;
			var supporting=grab.support;
			for(let tt=0;tt<60;tt++){
			   
			  ix=tt+1;
			   q="m"+ix;
			   
			if(grab[qrr][q][qr]==1){
				
				winloss.push(grab[qrr][q][qr2]);
			}	
			
				
			}
			
			resolve({status:200,winloss,name,pnts,rpnts,supporting});
			
		}
		
		).catch(err => reject({status: 500, message: 'Internal server error !'}));
	
	
	
	
});




	 
