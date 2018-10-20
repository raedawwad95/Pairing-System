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