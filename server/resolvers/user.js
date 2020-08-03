const u = require('../db/controller/users');

module.exports = {
  Query: {
    users: (root, arg, context, info) => u.fetchAllUser(),
    user: (root, arg, context, info) => {
      return u.getUser(arg.id);
    }
  },
  Mutation: {
    createUser: (root, arg, context, info) => u.createUser(arg.userInput)
  }
};
