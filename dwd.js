var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("noddd");
  var mysort = { points: -1 };
  dbo.collection("users").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
	
	for(let i=0;i<result.length;i++){
		var r=result[0].phone;
		dbo.collection("users").updateOne({phone:r},{$set:{rank:(i+1)}});
		
	}
    console.log(result);
    db.close();
  });
});