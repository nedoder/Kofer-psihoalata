'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
    }
  }
  Activity.init({
    activity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};