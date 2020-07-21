const crypto = require('crypto'); 
const uuid = require('uuid/v1'); 

const db = require('./db'); 

const authController = {}; 

// ON LOGIN/CREATION OF NEW ACCOUNT, an AUTH TOKEN IS GENERATED
authController.generateAuthToken = (req, res, next) => {
  // create authToken with an unguessable secret token
  crypto.randomBytes(64, (err, token) => {
    if (err) {
      return next({
        log : `Error in authController.generateAuthToken. Err : ${err}`,
        message : { message : err }
      });
    };
    // ADD AUTHTOKEN to 
    // store on res.locals as a string
    res.locals.authToken = token.toString();
    return next();
  }); 
}; 

authController.addNewDevice = (req, res, next) => {
  // adds new device to devices table, with auth token and current_timestamp
  const query = `INSERT into DEVICES (device_id, auth_token) VALUES ($1, $2) RETURNING *`

  // pulls deviceid and authToken from res.locals
  const { deviceId, authToken } = res.locals; 

  
  const values = [deviceId, authToken]; 

  db.query(query, values)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      return next({
        log : `Error in authController.generateAuthToken. Err : ${err}`,
        message : { message : err }
      });
    })
}

// ON CREATION of ACCOUNT, create a DEVICE ID
authController.createDeviceId = (req, res, next) => {
  // uuid is a unique id based on the current timeStamp (uuid/v1) that will uniquely identify this device;
  const deviceId = uuid();
  // ADD deviceId to device table
  res.locals.deviceId = deviceId;
  return next(); 
}; 











module.exports = authController; 