const express = require('express');
const { userRouter } = require('./rourters/user.router.js');


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRouter);

app.listen(PORT, (err) => {
  if (!err) {
    console.log('server running on ', PORT);
  } else {
    console.log("Error")
  }
})