const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/signup', 
  // create device id
  authController.createDeviceId, 
  // generate auth token
  authController.generateAuthToken, 
  // add new device into db
  authController.addNewDevice,
  // send back to front end
  (req, res) => {
    return res.status(200).json({
      ...res.locals.authInfo
    })
}); 

module.exports = authRouter;