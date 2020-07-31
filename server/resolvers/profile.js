const p = require('../db/controller/profile');

module.exports = {
  Query: {
    profiles: (root, arg, context, info) => p.fetchAllUserProfile(),
    profile: (root, arg, context, info) => {
      return p.getUserProfile(arg.id);
    }
  }
};
