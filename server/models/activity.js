module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
        activity: {
            type: Sequelize.TEXT('long'),
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