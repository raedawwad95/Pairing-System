var studentsRouter = require('express').Router();
var studentsController = require('./StudentsController');

studentsRouter.route('/create')
  .post(function (req, res) {
    studentsController.create(req, res);
  })
 .get(function(req,res){
	studentsController.retrieve(req,res);
})
module.exports = studentsRouter;