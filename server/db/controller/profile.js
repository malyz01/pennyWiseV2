const { profile } = require('../models');

async function createProfile(data) {
  return await profile.create(data);
}

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
  createProfile,
  fetchAllUserProfile,
  getUserProfile
};
