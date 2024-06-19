const express = require('express');
const { userRouter } = require('./rourters/user.router.js');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dotenv.config();
const app = express();

app.get('/', (req, res) => {
	res.send('Zmiana!');
});

app.get('/test', async (req, res) => {
	try {
		await prisma.$queryRaw`SELECT 1`;
		res.status(200).send('polączenie z bazą poprawne');
	} catch (error) {
		res.status(500).send(error.message);
	}
});
app.use('/users', userRouter);

app.listen(process.env.PORT, err => {
	if (!err) {
		console.log('server running on ', process.env.PORT);
	} else {
		console.log('Error');
	}
});
