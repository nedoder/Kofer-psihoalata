module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        comment: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Comment cannot be empty"
                }
            }
        },
        author: {
            type: Sequelize.STRING
        },
        approved: {
            type: Sequelize.BOOLEAN,
            default: false
        },
        postId: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: true,
        tableName: 'Comment',
    });
    return Comment;
};