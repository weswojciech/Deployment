const express = require('express');
const { userRouter } = require('./rourters/user.router.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/users', userRouter);

app.listen(process.env.PORT, err => {
	if (!err) {
		console.log('server running on ', process.env.PORT);
	} else {
		console.log('Error');
	}
});
