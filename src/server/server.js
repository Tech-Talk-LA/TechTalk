const express = require('express'); 
const app = express(); 

const PORT = 3000; 

const authRouter = require('./routers/authRouter');

app.use('/auth', authRouter); 

app.use((err, req, res, next) => {
  const defaultErr = {
    log : 'Express encountered unknown error',
    message : {
      error: 'There was an error. Check server logs for details.'
    }
  };

  const errObj = Object.assign({}, defaultErr, err); 
  console.log('There was an error : ', errObj.message.error)
  res.status(500).send(`There was an error`); 
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));