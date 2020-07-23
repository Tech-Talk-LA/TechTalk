const express = require('express');
const messageController = require('../controllers/messageController');

const messageRouter = express.Router();

messageRouter.get('/', messageController.getConversation, (req, res) => {
  res.status(200).json(res.locals.conversation)
})

messageRouter.post('/', messageController.sendMessage, (req, res) => {
  res.status(200).json(res.locals.message)
})

module.exports = messageRouter;