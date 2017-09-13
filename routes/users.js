var express = require('express');

var router = function(User){
	var userRouter = express.Router();
	userRouter.get('/', function(req, res, next) {
		User.find(function(err, users){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(users);
			}
		});
	});
	return userRouter;
};

module.exports = router;
