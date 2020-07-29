const { sequelize, Sequelize } = require("../models");
const Users = require("../models/user")(sequelize, Sequelize.DataTypes);

function getUser(id) {
  return Users.findOne({
    where: {
      id,
    },
  });
}

module.exports = {
  getUser,
};
