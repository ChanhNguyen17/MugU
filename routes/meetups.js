var express = require('express');
var meetupCollection = require('../models/meetupModel');

var router = function(){
	var meetupRouter = express.Router();
	meetupRouter.get('/', function(req, res, next){
		meetupCollection.find(function(err, meetups){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetups);
			}
		});
	});
	meetupRouter.get('/:meetupId', function(req, res, next){
		meetupCollection.findById(req.params.meetupId, function(err, meetup){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetup);
			}
		});
	});
	meetupRouter.post('/', function(req, res, next){
		var newMeetup = meetupCollection(req.body);
		newMeetup.save(function(err, meetup){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetup);
			}
		});
	});
	meetupRouter.put('/:meetupId', function(req, res, next){
		meetupCollection.findById(req.params.meetupId, function(err, meetup){
			if(err){
				res.status(500).send(err);
			}else{
				meetup.time = req.body.time;
				meetup.location = req.body.location;
				meetup.description = req.body.description;
				meetup.photo = req.body.photo;
				user.save(function(err, user){
					if(err){
						res.status(500).send(err);
					}else{
						res.json(user);
					}
				});
			}
		});
	});
	meetupRouter.delete('/:meetupId', function(req, res, next){
		meetupCollection.findByIdAndRemove(req.params.meetupId, function(err){
			if(err){
				res.status(500).send(err);
			}else{
				res.status(204);
			}
		});
	});
	return meetupRouter;
};

module.exports = router;