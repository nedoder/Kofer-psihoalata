'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id"
      });
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id"
      });
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        targetKey: "id"
      });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};