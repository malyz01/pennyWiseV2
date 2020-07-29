'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profiles', [
      {
        userId: 'de65d050-4e0e-4a79-8063-74e7b9e53dd4',
        fullName: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '7b85a36f-abd4-4a76-9860-bd88670ef1f0',
        fullName: 'Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '8d96e758-08e6-4d85-adbb-2f5ba8308b85',
        fullName: 'GI Joe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles', null, {});
  }
};
