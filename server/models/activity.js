module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
        activity: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Activity cannot be empty"
                }
            }
        },

    }, {
        timestamps: true,
        tableName: 'Activity',
    });
    return Activity;
};