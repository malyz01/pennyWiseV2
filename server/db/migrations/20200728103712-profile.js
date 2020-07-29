"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Profiles", {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      },
      fullName: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue:
          "https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Profiles");
  },
};
