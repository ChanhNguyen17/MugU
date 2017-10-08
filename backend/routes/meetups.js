var express = require('express');
var meetupCollection = require('../models/meetupModel');

var router = () => {
	var meetupRouter = express.Router();
	meetupRouter.get('/', (req, res, next) => {
		meetupCollection.find(function(err, meetups){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetups);
			}
		});
	});
	meetupRouter.get('/:meetupId', (req, res, next) => {
		meetupCollection.findById(req.params.meetupId, (err, meetup)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetup);
			}
		});
	});
	meetupRouter.post('/', (req, res, next)=>{
		var newMeetup = meetupCollection(req.body);
		newMeetup.save((err, meetup)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.json(meetup);
			}
		});
	});
	meetupRouter.put('/:meetupId', (req, res, next)=>{
		meetupCollection.findById(req.params.meetupId, (err, meetup)=>{
			if(err){
				res.status(500).send(err);
			}else{
				meetup.time = req.body.time;
				meetup.location = req.body.location;
				meetup.description = req.body.description;
				meetup.photo = req.body.photo;
				user.save((err, user)=>{
					if(err){
						res.status(500).send(err);
					}else{
						res.json(user);
					}
				});
			}
		});
	});
	meetupRouter.delete('/:meetupId', (req, res, next)=>{
		meetupCollection.findByIdAndRemove(req.params.meetupId, (err)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.status(202).send('Meet up ' + req.params.meetupId + ' is deleted');
			}
		});
	});
	return meetupRouter;
};

module.exports = router;