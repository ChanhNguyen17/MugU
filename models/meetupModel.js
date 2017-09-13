var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meetupModel = new Schema({
	time: {
		type: Date,
		require: true
	},
	place: {
		type: String,
		require: true
	}
});

var Meetup = mongoose.model('Meetup', meetupModel);

module.exports = Meetup;