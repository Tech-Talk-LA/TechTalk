const db = require('../db');

const messageController = {};

// when a user clicks on another connect user, show all messages between userA and userB
messageController.getConversation = (req, res, next) => {
  // each conversation will have some id, when an id is referenced it will show the convo between 2 users
  const { conversation_id } = req.body;
  const params = [conversation_id];

  const queryString = `
    SELECT sender_id, receiver_id, body_text, created_at 
    FROM Messages 
    WHERE conversation_id=($1);`;

  db.query(queryString, params)
  .then(conversationData => {
    console.log('MessageData: ', conversationData.rows)
    res.locals.conversation = conversationData.rows;
    return next();
  })
  .catch(error => {
    return next({
      log: 'error in getConversation middleware',
      error,
    })
  })
}

messageController.sendMessage = (req, res, next) => {
  // const { body_text, receiver_id, conversation_id } = req.body;
  const { sender_id, receiver_id, conversation_id, body_text } = req.body
  // const params = [ body_text, receiver_id, conversation_id ];
  const params = [sender_id, receiver_id, conversation_id, body_text]

  const queryString = `
    INSERT INTO Messages (sender_id, receiver_id, conversation_id, body_text)
    VALUES ($1, $2, $3, $4) RETURNING *;`;

  db.query(queryString, params)
  .then(message => {
    res.locals.message = message.rows[0];
    return next();
  })
  .catch(err => {
    return next({
      log: 'error in sendtMessage middleware',
      err,
    })
  })
}

// -- Chat query Renders when user clicks on a connected person. Should show entire convo

// -- input  user_id(Hideaki): 1 and partner_id(Edwin): 2

// -- SELECT conversation_id FROM Conversations WHERE sender_id = 1 AND receiver_id = 2 OR sender_id = 2 AND receiver_id = 1

// -- now we have the conversatio_id (1), so fetch every message inside messages
// -- SELECT body_text FROM Messages WHERE conversation_id = 1 ORDER BY created_at ASC
// -- all messages will have a sender/receiver but the front end will have to figure out who is who to format the text



// -- 
//   -- 1. Get user's techs (ONE tech)
//        --  const user_learn_id = SELECT tech_id FROM Learn WHERE user_id = ($1);
//        --  const user_teach_idS = SELECT tech_id FROM Teach WHERE user_id = ($1); 
//   -- 2. Search through teach to see who can teach it
//     -- 

// -- 
//   -- 1. Get user's techs (ONE tech)
//        --  const user_learn_id = SELECT tech_id FROM Learn WHERE user_id = ($1);
//        --  const user_teach_idS = SELECT tech_id FROM Teach WHERE user_id = ($1); 
//   -- 2. Search through teach to see who can teach it
//     -- 

// -- 
//   -- 1. Get user's techs (ONE tech)
//        --  const user_learn_id = SELECT tech_id FROM Learn WHERE user_id = ($1);
//        --  const user_teach_idS = SELECT tech_id FROM Teach WHERE user_id = ($1); 
//   -- 2. Search through teach to see who can teach it
//     -- 

// -- 

// when user clicks on the message icon, get names of recipients 
// messageController.get

module.exports = messageController;