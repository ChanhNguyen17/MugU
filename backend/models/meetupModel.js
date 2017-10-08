const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = require('./userModel');

const responseSchema = new Schema({
	user: {
		type: Object,
		ref: users.User,
		require: true
	},
	comment: {
		type: String,
		require: true
	}
});

const meetupModel = new Schema({
	user: {
		type: Object,
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
	},
	response: [responseSchema]
});

const Meetup = mongoose.model('Meetup', meetupModel);

module.exports = Meetup;