var mongoose =require('mongoose');

var StudentSchema = mongoose.Schema({
	fullName :{
		type:String,
		required:true,
	},
	level :{
		type:Number,
		required:true,
	}
})

var Students = mongoose.model('Students',StudentSchema);

module.exports = Students;