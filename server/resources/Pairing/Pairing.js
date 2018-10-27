var mongoose =require('mongoose');

var PairingSchema = mongoose.Schema({
	student1:{
		type: mongoose.Schema.Types.ObjectId, 
	    ref: 'Students',
	    required:true,
	},
	student2:{
		type: mongoose.Schema.Types.ObjectId, 
	    ref: 'Students',
	    required:true,
	}
})

var Pairing = mongoose.model('Pairing',PairingSchema);

module.exports = Pairing;