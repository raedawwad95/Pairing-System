var mongoose =require('mongoose');

var PairingSchema = mongoose.Schema({
	student1:{
		type: String,
	    required:true,
	},
	student2:{
		type: String,
	    required:true,
	}
})

var Pairing = mongoose.model('Pairing',PairingSchema);

module.exports = Pairing;