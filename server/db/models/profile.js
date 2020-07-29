'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      this.belongsTo(models.User);
    }
  }

  Profile.init(
    {
      userId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id'
        },
        type: DataTypes.STRING
      },
      fullName: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue:
          'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Profile'
    }
  );
  return Profile;
};
