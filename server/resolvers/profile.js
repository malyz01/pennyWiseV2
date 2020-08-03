const p = require('../db/controller/profile');

module.exports = {
  Query: {
    profiles: (root, arg) => p.fetchAllUserProfile(),
    profile: (root, arg) => {
      return p.getUserProfile(arg.id);
    }
  },
  Mutation: {
    createUserProfile: (root, { userProfile }) => {
      return p.createProfile(userProfile);
    }
  }
};
