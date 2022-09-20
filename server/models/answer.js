'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Comment, {
        foreignKey: "commentId",
        targetKey: "id"
      });
    }
  }
  Answer.init({
    answer: DataTypes.STRING,
    author: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};