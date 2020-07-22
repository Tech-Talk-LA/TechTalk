const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

// route to create a new user
// req.body must include user_name, desc, and email(unique) request sent to /users
userRouter.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user)
})

userRouter.post('/matches', userController.findMatches, (req, res) => {
  res.sendStatus(200)
})

module.exports = userRouter;