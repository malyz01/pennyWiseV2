const { fetchAllUser } = require('./db/controller/users');

module.exports = {
  Query: {
    users: async (root, arg, context, info) => await fetchAllUser()
  }
};
