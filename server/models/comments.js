module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Comment cannot be empty"
                }
            }
        },
        approved: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    },
    {
        timestamps: true,
        tableName: 'Comment',
    });
    return Comment;
};
