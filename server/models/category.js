module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                }
            }
        },
       
    },
    {
        timestamps: false,
        tableName: 'Category',
    });
    return Category;
};
