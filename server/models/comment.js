'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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