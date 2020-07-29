const { sequelize, Sequelize } = require('../models');
const Users = require('../models/user')(sequelize, Sequelize.DataTypes);

function createUser(data) {
  return Users.create(data);
}

function getUser(id) {
  return Users.findOne({
    where: {
      id
    }
  });
}

module.exports = {
  createUser,
  getUser
};
