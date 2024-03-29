'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "id"
      });
      Comment.hasMany(models.Answer, {
        foreignKey: "commentId",
        targetKey: "id"
      });
    }
  }
  Comment.init({
    comment: DataTypes.STRING,
    author: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};