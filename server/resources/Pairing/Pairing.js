var mongoose =require('mongoose');

var PairingSchema = mongoose.Schema({
	Students1:{
		type: mongoose.Schema.Types.ObjectId, 
	    ref: 'Students'
	}
	Students2:{
		type: mongoose.Schema.Types.ObjectId, 
	    ref: 'Students'
	}
})

var Pairing = mongoose.model('Pairing',PairingSchema);

module.exports = Pairing;