var Pairing = require('./Pairing');

exports.retrieve=function(req,res){
  Pairing.find({})
  	.populate('Student1')
  	.populate('Student2')
  	.exec(function(err,data){
  		if(err){
  			console.log(err);
  		}else if(!data){
  			res.json('there is no Data');
  		}else{
  			res.json(data);
  		}
  	})
}

exports.create=function(req,res){
	var newPairing = {
		Student1:req.body.student1,
		Student2:req.body.student2
	}
	var pairing = new Pairing(newPairing);
	pairing.save(function(err,data){
		if(err){
			console.log(err);
		}else{
			res.json(data);
		}
	})
}