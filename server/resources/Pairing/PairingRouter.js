var pairingRouter = require("express").Router();

var pairingController = require('./PairingController');

pairingRouter.route('/')
	.get(function(req,res){
		pairingController.retrieve(req,res);
	})
	.post(function(req,res){
		pairingController.create(req,res);
	})
module.exports = pairingRouter;