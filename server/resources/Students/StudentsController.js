var Students = require('./Students');

exports.retrieve=function(req,res){
  Students.find({},function(err,data){
   if(err){
    res.send(err);
   }
   res.json(data);
  });
}

exports.create = function (req, res) {
  var newStudent = {
    fullName:req.body.fullName,
    level : req.body.level
  }
  var student = new Students(newStudent);
  student.save(function(err, student) {

    if (err) {
      console.error(err);
    }
    res.send(student);
    })
};

exports.edit =function(req,res){
  Students.findOne({_id:req.body.id}).exec(function (err,student){
    if(err){
    console.error(err);
  }
  if(!student){
    console.error("No student found");
  } else {
    student.level = req.body.level;
    student.save();
    res.json("Updated");
  }
})
}

exports.deleteOne=function(req,res){
  var id=req.params.id;
  Students.findOneAndRemove({_id:id},function(err,deleted){

  if(err){
    console.log("error");
   }

  res.send(deleted)
  })
}