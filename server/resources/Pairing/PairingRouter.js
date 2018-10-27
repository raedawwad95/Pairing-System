var PairingRouter = require("express").Router();

var PairingController = require('./PairingController');

PairingRouter.route('/')
	.get(function(req,res){
		PairingRouter.retrieve(req,res);
	})