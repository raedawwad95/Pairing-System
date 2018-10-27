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