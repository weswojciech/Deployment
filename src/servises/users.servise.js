const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let users = [
	{
		id: 1,
		name: 'John',
	},
	{
		id: 2,
		name: 'Ann',
	},
	{
		id: 3,
		name: 'Poll',
	},
];

const getMaxId = () => {
	const ids = users.map(u => u.id);
	return Math.max(...ids);
};
const getAll = async () => {
	const users = await prisma.user.findMany();

	return users;
};
const getUserById = async id => {
	const user = await prisma.user.findUnique({
		where: {
			id: +id,
		},
	});

	return user;
};
const deleteUser = id => {
	const exists = users.some(u => u.id === id);
	if (exists) {
		users = users.filter(u => u.id !== +id);
		return true;
	} else throw new Error('No user with id ', id);
};

const addUser = async (name, email) => {
	const newUser = await prisma.user.create({
		data: {
			name,
			email,
		},
	});
	console.log(newUser);
	return newUser;
};

module.exports = {
	getAll,
	getUserById,
	deleteUser,
	addUser,
};
