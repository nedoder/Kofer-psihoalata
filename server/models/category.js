module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        image: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Category cannot be empty"
                }
            }
        },

    }, {
        timestamps: false,
        tableName: 'Category',
    });
    return Category;
};