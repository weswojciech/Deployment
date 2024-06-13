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
  }
];

const getMaxId = () => {
  const ids = users.map(u => u.id);
  return Math.max(...ids);
}
const getAll = () => users;
const getUserById = (id) => {
  return users.find(u => u.id === id);
};
const deleteUser = (id) => {
  const exists = users.some(u => u.id === id);
  if (exists) {
    users = users.filter(u => u.id !== +id);
    return true;
  } else
    throw new Error('No user with id ', id);
};

const addUser = (userName) => {
  const newUser = {
    id: getMaxId() + 1,
    name: userName
  }
  users.push(newUser);
  return newUser;
}


module.exports = {
  getAll,
  getUserById,
  deleteUser,
  addUser
}