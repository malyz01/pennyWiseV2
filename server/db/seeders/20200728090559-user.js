'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 'de65d050-4e0e-4a79-8063-74e7b9e53dd4',
        email: 'johndoe@testing.com',
        password:
          '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7b85a36f-abd4-4a76-9860-bd88670ef1f0',
        email: 'janedoe@testing.com',
        password:
          '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '8d96e758-08e6-4d85-adbb-2f5ba8308b85',
        email: 'GI@testing.com',
        password:
          '$2b$10$E42ZIELPHZiIN.2DjHbywuhHDONKSRK7/jppFiJU/wtm2EGV0Fszu',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
