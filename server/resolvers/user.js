const { fetchAllUser } = require('./db/controller/users');

const resolvers = {
  Query: {
    users: async (root, arg, context, info) => await fetchAllUser()
  }
};

module.exports = resolvers;
