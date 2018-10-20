var studentsRouter = require('express').Router();
var studentsController = require('./StudentsController');

studentsRouter.route('/')
  .get(function(req,res){
	studentsController.retrieve(req,res);
})
studentsRouter.route('/create')
  .post(function (req, res) {
    studentsController.create(req, res);
  })
  
studentsRouter.route('/edit')
.put(function(req,res){
	studentsController.edit(req,res);
})
studentsRouter.route('/:id')
.delete(function(req,res){
	studentsController.deleteOne(req,res);
})

module.exports = studentsRouter;