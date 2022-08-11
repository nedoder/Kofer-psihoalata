module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                }
            }
        },
        image: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Content cannot be empty"
                }
            }
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
       
    },
    {
        timestamps: false,
        tableName: 'Post',
    });
    return Post;
};
