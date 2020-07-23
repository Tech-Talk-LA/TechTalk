const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();


userRouter.post('/matches', userController.findMatchIds, userController.getMatchProfiles,(req, res) => {
  // if res.locals.matchProfiles does NOT exist, send a message back like 'no matches found'
  if (!res.locals.matchProfiles) {
    res.status(200).send('no matches found')
  }
  // otherwise, send back an array of all matching user profiles
  else {
    res.status(200).json(res.locals.matchProfiles)
  }
})

// route to create a new user
// req.body must include user_name, desc, and email(unique) request sent to /users
userRouter.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user)
})


module.exports = userRouter;