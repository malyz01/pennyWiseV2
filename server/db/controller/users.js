const { user } = require('../models');

async function createUser(data) {
  return await user.create(data);
}

async function fetchAllUser() {
  console.log(await user.comparePassword('12'));
  return await user.findAll({ include: 'profile' });
}

async function getUser(id) {
  return user.findOne({
    where: {
      id
    },
    include: 'profile'
  });
}

module.exports = {
  createUser,
  getUser,
  fetchAllUser
};
