const crypto = require('crypto'); 
const uuid = require('uuid/v1'); 

const db = require('../db'); 

const authController = {}; 

authController.addNewDevice = (req, res, next) => {
  // adds new device to devices table, with auth token and current_timestamp
  const query = `INSERT into DEVICES (device_id, auth_token) VALUES ($1, $2) RETURNING *`;

  // pulls deviceid and authToken from res.locals
  const { deviceId, authToken } = res.locals; 
  const values = [deviceId, authToken]; 

  db.query(query, values)
  .then(data => {
    console.log('data getting back : ', data)
    // store data in res.locals so front end can render it
    res.locals.authInfo = data.rows[0];
    console.log('just got back : ', res.locals.authInfo)
    return next();
  })
  .catch(err => {
    return next({
      log : `Error in authController.generateAuthToken. Err : ${err}`,
      message : { error : err }
    });
  })
};

// ON CREATION of ACCOUNT, create a DEVICE ID
authController.createDeviceId = (req, res, next) => {
  // uuid is a unique id based on the current timeStamp (uuid/v1) that will uniquely identify this device;
  const deviceId = uuid();

  // ADD deviceId to device table
  res.locals.deviceId = deviceId;
  return next(); 
}; 

// adds new user to db
// authController.addUser = (req, res, next) => {
//   // get username and password from req.body
//   const { username, password } = req.body; 

//   const query = `INSERT INTO Users (user_name, description, email) VALUES ($1, $2, $3) RETURNING *`;
//   const values = [username, password]; 

//   db.query(query, values)
//   .then(user => {
//     // store user info in res.locals so we can send back to UI
//     res.locals.userInfo = data.rows[0]; 
//   })
// };

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
    res.locals.authToken = token.toString('base64');
    return next();
  }); 
}; 








module.exports = authController; 