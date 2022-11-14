'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Answers', 'postId', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Answers', 'postId'
    )
  }
};
