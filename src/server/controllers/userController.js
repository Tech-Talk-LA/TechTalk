const db = require('../db');

const userController = {};

// MIDDLEWARE FUNCTIONS
// create a new user onto the database
userController.createUser = (req, res, next) => {
  // destructure user_name, desc, email from req.body (use postman)
  const { user_name, description, email } = req.body;
  const params = [user_name, description, email];

  // adds new user onto the database (Note: adding 'RETURN *' returns the new user)
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

// show recommended people to connect with based on interests/experience  

// when user clicks on the message icon, get names of recipients 

// when a user clicks on a recipient from message icon, show all messages between userA and userB


module.exports = userController;
