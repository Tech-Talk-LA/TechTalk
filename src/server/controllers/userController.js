const db = require('../db');
const { param } = require('../routers/authRouter');

const userController = {};

// CREATE NEW USER MIDDLEWARE
userController.createUser = (req, res, next) => {
  // destructure user_name, desc, email from req.body (use postman)
  const { user_name, description, email } = req.body;
  const params = [user_name, description, email];

  // adds new user onto the database (Note: adding 'RETURNING *' returns the new user)
  const queryString = 
    `INSERT INTO Users (user_name, description, email)
     VALUES ($1, $2, $3) RETURNING *;`;

  db.query(queryString, params)
  .then(user => {
    // store data in res.locals so front end can render it
    res.locals.user = user.rows[0];
    return next()
  })
  .catch(error => {
    return next({
      log: 'Error in userController.createUser Middleware:',
      message: {error,}
    })
  })
}



// get user info at the feed page 
// GET USER INFO MIDDLEWARE (name, description, teaching stack, learning stack)
// userController.getUserInfo = (req, res, next) => {

// }

// show recommended people to connect with based on interests/experience  
// GET MATCHED USERS MIDDLEWARE
userController.findMatchIds = (req, res, next) => {
  const { learn_tech_id, teach_tech_id_array } = req.body;
  const params = [learn_tech_id, ...teach_tech_id_array];
  let queryString = 
  `SELECT user_id FROM Teach WHERE tech_id=($1) 
  INTERSECT
  SELECT user_id FROM Learn WHERE tech_id=($2)`
  
  // loop through params only if length > 2; this indicates teach_tech_id_array has more than one val
  if (params.length > 2) {
    for (let i = 2; i < params.length; i++) {
      queryString += ` OR tech_id=($${i + 1})`
    }
  }

  db.query(queryString, params)
  .then(data => {
    // data.rows is an array of objects like { user_id: 1}, { user_id: 40 }, etc..
    const idArray = data.rows.map(obj => obj.user_id)
    res.locals.matchIds = idArray; // array of matching userIds 
    return next()
  })
  .catch(error => {
    return next({
      log: 'Error in userController.createUser Middleware:',
      message: {error,}
    })
  })
}

userController.getMatchProfiles = (req, res, next) => {
  // res.locals.matchIds is an array of user_id numbers [1,4,6];

  // if there were no matches
  if (!res.locals.matchIds.length) return next();
  else {
    const params = [...res.locals.matchIds];
    // params is an array of ids [1,3,4]
    let queryString = `SELECT * FROM Users WHERE user_id IN `
    for (let i = 0; i < params.length; i++) {
      // if first item, add '('   and $1, which is $${i + 1}
      // if last item, add $${i+1} and ')'
      if (i === 0) {
        queryString += `($${i+1}, `
      }
      else if (i === params.length - 1) {
        queryString += `$${i+1})`
      }
      else {
        queryString += `$${i+1}, `
      }
    }
    db.query(queryString, params)
    .then((data) => {
      // data.rows is the array of profiles
      console.log(data.rows)
      res.locals.matchProfiles = data.rows
      // eventually res.locals.matchProfiles will be an array of profiles.
      return next()

    })
    .catch(error => {
      return next({
        log: 'Error in userController.getMatchProfile Middleware:',
        message: {error}
      })
    })
  }
}











// might go on a different file
  // when user clicks on the message icon, get names of recipients 
  // when a user clicks on a recipient from message icon, show all messages between userA and userB


module.exports = userController;
