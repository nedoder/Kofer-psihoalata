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
        approved: {
            type: Sequelize.BOOLEAN,
            default: false
        }
       
    },
    {
        timestamps: true,
        tableName: 'Answer',
    });
    return Answer;
};
