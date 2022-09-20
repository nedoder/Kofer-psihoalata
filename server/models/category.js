'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Post, {
        foreignKey: "categoryId",
        targetKey: "id"
    });
    }
  }
  Category.init({
    category: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};