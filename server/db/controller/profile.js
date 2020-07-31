const { profile } = require('../models');

async function fetchAllUserProfile() {
  return await profile.findAll();
}

async function getUserProfile(id) {
  return profile.findOne({
    where: {
      id
    }
  });
}

module.exports = {
  fetchAllUserProfile,
  getUserProfile
};
