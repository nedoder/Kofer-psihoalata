module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
        answer: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                }
            }
        },
       
    });
    return Answer;
};
