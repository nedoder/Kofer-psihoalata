module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        answer: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Answer cannot be empty"
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
        commentId: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: true,
        tableName: 'Answer',
    });
    return Answer;
};