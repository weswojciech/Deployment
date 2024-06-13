const userServise = require('../servises/users.servise.js');

const getAll = (req, res) => {
  const users = userServise.getAll();
  res.send(users);
};
const getOne = (req, res) => {
  const { id } = req.params;
  const user = userServise.getUserById(+id);
  res.send(user);
}
const create = (req, res) => {
  const { name } = req.body;
  const newUser = userServise.addUser(name);
  res.status(201).send(newUser);
}

module.exports = {
  getAll,
  getOne,
  create,
}