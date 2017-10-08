var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	},
	name: {
		type: String
	},
	age: {
		type: String
	},
	description: {
		type: String
	},
	photo: {
		type: String
	}
});

var User = mongoose.model('User', userModel);

module.exports = User;