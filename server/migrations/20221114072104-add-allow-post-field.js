'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Posts', 'showPost', {
        type: Sequelize.BOOLEAN,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Posts', 'showPost', {
        type: Sequelize.BOOLEAN,
      }
    )
  }
};
