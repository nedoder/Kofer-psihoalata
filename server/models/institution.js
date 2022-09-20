'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institution extends Model {
    static associate(models) {
    }
  }
  Institution.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mail: DataTypes.STRING,
    location: DataTypes.STRING,
    profession: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Institution',
  });
  return Institution;
};