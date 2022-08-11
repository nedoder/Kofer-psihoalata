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
    },
    {
        timestamps: false,
        tableName: 'Comment',
    });
    return Comment;
};
