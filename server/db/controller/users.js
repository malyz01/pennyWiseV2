const { user: User } = require('../models');

async function createUser(data) {
  return await User.create(data);
}

async function loginUser(data) {
  const { dataValues: user } = await User.findByPk(data.id);
  if (user.isValid(data.password)) {
    return user;
  } else {
    return null;
  }
}

async function fetchAllUser() {
  return await User.findAll({ include: 'profile' });
}

async function getUser(id) {
  const user = await User.findOne({
    where: {
      id
    },
    include: 'profile'
  });
  return user;
}

module.exports = {
  createUser,
  getUser,
  fetchAllUser
};
