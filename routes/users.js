var express = require('express');
var userCollection = require('../models/userModel');

var router = function(){
	var userRouter = express.Router();
	userRouter.get('/', function(req, res, next) {
		userCollection.find(function(err, users){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(users);
			}
		});
	});
	userRouter.get('/:userId', function(req, res, next){
		userCollection.findById(req.params.userId, function(err, user){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(user);
			}
		});
	});
	userRouter.post('/', function(req, res, next){
		var newUser = userCollection(req.body);
		newUser.save(function(err, user){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(user);
			}
		});
	});
	userRouter.put('/:userId', function(req, res, next){
		userCollection.findById(req.params.userId, function(err, user){
			if(err){
				res.status(500).send(err);
			}else{
				user.password = req.body.password;
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
	userRouter.delete('/:userId', function(req, res, next){
		userCollection.findByIdAndRemove(req.params.userId, function(err){
			if(err){
				res.status(500).send(err);
			}else{
				res.status(204);
			}
		});
	});
	return userRouter;
};

module.exports = router;
