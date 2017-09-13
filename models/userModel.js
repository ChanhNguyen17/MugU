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
	}
});

var User = mongoose.model('User', userModel);

module.exports = User;