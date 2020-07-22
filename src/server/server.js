const express = require('express'); 
const app = express(); 

const PORT = 3000; 

const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter')

// without this, I cannot console log any req.body on any controller file
app.use(express.json()) // accesses request body

app.use('/auth', authRouter);

app.use('/users', userRouter);


app.use((err, req, res, next) => {
  const defaultErr = {
    log : 'Express encountered unknown error',
    message : {
      error: 'There was an error. Check server logs for details.'
    }
  };

  const errObj = Object.assign({}, defaultErr, err); 
  console.log(errObj.log, errObj.message.error)
  res.status(500).send(`There was an error`); 
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));