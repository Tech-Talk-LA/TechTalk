const db = require('../db');

const messageController = {};

// GET CONVERSATION MIDDLEWARE
messageController.getConversation = (req, res, next) => {
  // when a user clicks on a user, show all messages between userA and userB
  // each conversation will have a convo_id
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

// SEND MESSAGE MIDDLEWARE 
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

module.exports = messageController;