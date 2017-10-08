var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = require('./userModel');

var meetupModel = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: users.User,
		require: true
	},
	time: {
		type: Date,
		require: true
	},
	location: {
		type: String,
		require: true
	},
	description: {
		type: String
	},
	photo: {
		type: String
	}
});

var Meetup = mongoose.model('Meetup', meetupModel);

module.exports = Meetup;