const userServise = require('../servises/users.servise.js');

const getAll = async (req, res) => {
	const users = await userServise.getAll();
	res.send(users);
};
const getOne = async (req, res) => {
	const { id } = req.params;
	const user = await userServise.getUserById(+id);
	res.send(user);
};
const create = async (req, res) => {
	const { name, email } = req.body;
	try {
		const newUser = await userServise.addUser(name, email);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	getAll,
	getOne,
	create,
};
