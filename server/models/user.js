'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: "userId",
        targetKey: "id"
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};