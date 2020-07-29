const { User } = require('../models');

async function createUser(data) {
  return await User.create(data);
}

async function getUser(id) {
  return User.findOne({
    where: {
      id
    }
  });
}

module.exports = {
  createUser,
  getUser
};
