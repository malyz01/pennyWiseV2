const u = require('../db/controller/users');

module.exports = {
  Query: {
    users: async (root, arg, context, info) => {
      return await u.fetchAllUser();
    },
    user: async (root, arg, context, info) => {
      return await u.getUser(arg.id);
    }
  },
  Mutation: {
    createUser: (root, arg, context, info) => {}
  }
};
