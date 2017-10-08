var express = require('express');
var userCollection = require('../models/userModel');

var router = ()=>{
	var userRouter = express.Router();
	userRouter.get('/', (req, res, next) => {
		userCollection.find((err, users)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.json(users);
			}
		});
	});
	userRouter.post('/authenticate', (req, res, next)=>{
		userCollection.findOne({username: req.body.username}, (err, user)=>{
			if(err){
				res.status(500).send(err);
			}else{
				if(user && req.body.password === user.password){
					res.json(user);
				}else{
					res.json(false);
				}
			}
		});
	});
	userRouter.get('/:userId', (req, res, next)=>{
		userCollection.findById(req.params.userId, (err, user)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.json(user);
			}
		});
	});
	userRouter.post('/', (req, res, next)=>{
		var newUser = userCollection(req.body);
		newUser.save((err, user)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.json(user);
			}
		});
	});
	userRouter.put('/:userId', (req, res, next)=>{
		userCollection.findById(req.params.userId, (err, user)=>{
			if(err){
				res.status(500).send(err);
			}else{
				user.name = req.body.name;
				user.password = req.body.password;
				user.age = req.body.age;
				user.description = req.body.description;
				user.photo = req.body.photo;
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
	userRouter.delete('/:userId', (req, res, next)=>{
		userCollection.findByIdAndRemove(req.params.userId, (err)=>{
			if(err){
				res.status(500).send(err);
			}else{
				res.status(202).send('User ' + req.params.userId + ' is deleted');
			}
		});
	});
	return userRouter;
};

module.exports = router;
