const express = require('express');
const messageController = require('../controllers/messageController');

const messageRouter = express.Router();

messageRouter.get('/', (req, res) => {
  res.send('sending info from messageRouter')
})

module.exports = messageRouter;