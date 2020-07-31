const u = require('../db/controller/users');

module.exports = {
  Query: {
    profiles: (root, arg, context, info) => u.fetchAllUser(),
    profile: (root, arg, context, info) => {
      return u.getUser(arg.id);
    }
  }
};
