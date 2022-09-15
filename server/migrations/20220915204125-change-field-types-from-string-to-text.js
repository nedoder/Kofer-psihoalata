'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Posts', 'content', {
        type: Sequelize.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Content cannot be empty"
            }
        }
      }
    )
    await queryInterface.changeColumn(
      'Posts', 'title', {
        type: Sequelize.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Title cannot be empty"
            }
        }
      }
    )
    await queryInterface.changeColumn(
      'Activities', 'activity', {
        type: Sequelize.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Activity cannot be empty"
            }
        }
      }
    )
    await queryInterface.changeColumn(
      'Answers', 'answer', {
        type: Sequelize.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Answer cannot be empty"
            }
        }
      }
    )
    await queryInterface.changeColumn(
      'Comments', 'comment', {
        type: Sequelize.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Comment cannot be empty"
            }
        }
      }
    )
    await queryInterface.changeColumn(
      'Users', 'username', {
        type: Sequelize.STRING,
          allowNull: false,
          validate: {
              isUnique: (value, next) => {
                  User.findAll({
                          where: { username: value },
                          attributes: ['id'],
                      })
                      .then((user) => {
                          if (user.length != 0)
                              next(new Error('Korisničko ime već postoji!'));
                          next();
                      })
                      .catch((onError) => console.log(onError));
              },
          },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Posts', 'content', {
        type: Sequelize.STRING,
      }
    )
    await queryInterface.changeColumn(
      'Posts', 'title', {
        type: Sequelize.STRING,
      }
    )
    await queryInterface.changeColumn(
      'Activities', 'activity', {
        type: Sequelize.STRING,
      }
    )
    await queryInterface.changeColumn(
      'Answers', 'answer', {
        type: Sequelize.STRING,
      }
    )
    await queryInterface.changeColumn(
      'Comments', 'comment', {
        type: Sequelize.STRING,
      }
    )
    await queryInterface.changeColumn(
      'Users', 'username', {
        type: Sequelize.STRING,
      }
    )
  },
};
