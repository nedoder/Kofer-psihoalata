'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Comments', // name of Source model
      'postId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    await queryInterface.changeColumn(
      'Answers', // name of Source model
      'commentId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Comments', // name of Source model
      'postId' // key we want to remove
    );
    await queryInterface.removeColumn(
      'Answers', // name of Source model
      'commentId' // key we want to remove
    );
  }
};
