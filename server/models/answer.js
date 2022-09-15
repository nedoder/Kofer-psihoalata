'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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