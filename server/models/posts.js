module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                }
            }
        },
        image: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Content cannot be empty"
                }
            }
        },
        userId: {
            type: Sequelize.INTEGER
        },
        categoryId: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: true,
        tableName: 'Post',
    });
    return Post;
};