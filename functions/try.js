const user = require('../models/user');
const mat=user.mat;
const minfo=user.matchinf;
const usersc =user.user;
const { forEach } = require('p-iteration');
const {async} = require('async');

var results=[];





async function getUpdated(doc){
	return new Promise((resolve,reject)=>{
		console.log("are we here yet");
		 usersc.findOne({phone:doc.phone}).then(got=>{
			    var bs1=got.matchPersonal.m60.bs1;
				var bs2=got.matchPersonal.m60.bs2;
			    var bs3=got.matchPersonal.m60.bs3;
			    var bs4=got.matchPersonal.m60.bs4;
			    var bs5=got.matchPersonal.m60.bs5;
			    var bs6=got.matchPersonal.m60.bs6;
			    var bs7=got.matchPersonal.m60.bs7;
			   
                 var calc=got.matchPersonal.m60.ifcalc;
			   
				var bo1=got.matchPersonal.m60.bo1;
				var bo2=got.matchPersonal.m60.bo2;
			    var bo3=got.matchPersonal.m60.bo3;
			    var bo4=got.matchPersonal.m60.bo4;
			    var bo5=got.matchPersonal.m60.bo5;
			    var bo6=got.matchPersonal.m60.bo6;
			    var bo7=got.matchPersonal.m60.bo7;
                
				var points=got.points;
				var rpoints=got.rpoints;
			 var pm1=bo1+bo2+bo3+bo4+bo5+bo6+bo7;

				
				if(bs1==results[0])
				{
					if(bs1==results[9])
					{
						bo1=(bo1*results[7]);
						
					}else
						bo1=(bo1*results[8]);
					
					
				}else{bo1=(-bo1);}
				
				
				if(bs2==results[1]){bo2=(bo2*3);}else{bo2=(-bo2);}
				
				if(bs3==results[2]){bo3=(bo3*3);}else{bo3=(-bo3);}
				
				if(bs4==results[3]){bo4=(bo4*3);}else{bo4=(-bo4);}
				
				if(bs5==results[4]){bo5=(bo5*3);}else{bo5=(-bo5);}

				if(bs6==results[5]){bo6=(bo6*5);}else{bo6=(-bo6);}
				
				if(bs7==results[6]){bo7=(bo7*3);}else{bo7=(-bo7);}

				var fpoints=bo1+bo2+bo3+bo4+bo5+bo6+bo7+rpoints+pm1;
				var pm=bo1+bo2+bo3+bo4+bo5+bo6+bo7+points;
				var pmsts=bo1+bo2+bo3+bo4+bo5+bo6+bo7;
                
			if(calc==0)	{
				
		       usersc.updateOne({phone:doc.phone},{$set:{"matchPersonal.m60.bo1":bo1,"matchPersonal.m60.bo2":bo2,
			  "matchPersonal.m60.bo3":bo3,"matchPersonal.m60.bo4":bo4,"matchPersonal.m60.bo5":bo5,"matchPersonal.m60.bo6":bo6,"matchPersonal.m60.bo7":bo7,"rpoints":fpoints,"points":pm,"matchPersonal.m60.ifcalc":1,"matchPersonal.m60.pmstatus":pmsts
			  
			  
			  }}).then(result=>{
                              
					console.log("result",result);
                    resolve({result});        


					
				  
			  }
			  
			               
					
					
			).catch(err=>reject({status:500}));}
					else{
						resolve({});
						
					}
			
		}
		     
		
		).catch(err=>reject({status:500,message:"Internal server Error!"}));
		
		
	});
	
}


async function anotFunc(){
	
	var docs=await usersc.find({});
	for(let doc of docs){
		
		await getUpdated(doc);
	}
	
}









exports.getSorted=()=>

new Promise((resolve,reject)=>{
	afunc().then(ge=>{
		
		anotFunc().then(ree=>{
		
		resolve({status:200});}).catch(err=>reject({status:500,message:"Internal server Error!"}));
		
	}
	
	).catch(err=>reject({status:500,message:"Internal server Error!"}));
	
	
	
}

);


async function afunc(){
	return new Promise((resolve,reject)=>{
		

		mat.findOne({_id:"60"}).then(grab=>{
				
				console.log("here as well2",grab);
			var d=grab.mResult.mWinner;
			
							console.log("here as well4",d);
			results[0]=grab.mResult.mWinner;

			results[1]=grab.mResult.mRuns1;
			results[2]=grab.mResult.mWickets1;
				console.log("here as well2",grab);

			results[3]=grab.mResult.mRuns2;
			results[4]=grab.mResult.mWickets2;
			
			results[5]=grab.mResult.manMatch;
			results[6]=grab.mResult.tsixes;
			
			results[7]=parseInt(grab.Ratio.rHteam);
			results[8]=parseInt(grab.Ratio.rVteam);
			
			results[9]=grab.hTeam;
			results[10]=grab.vTeam;
			
				console.log("here as well 3",results);
			
			resolve({results});
		}
	                   	
		
		).catch(err=>reject({status:500,message:"Internal server Error!"}));
	        	
		
	}
	
	);
	
	
}
