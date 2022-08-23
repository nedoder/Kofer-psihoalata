module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "First name cannot be empty"
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Last name cannot be empty"
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Price cannot be empty"
                }
            }
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUnique: (value, next) => {
                    User.findAll({
                            where: { username: value },
                            attributes: ['id'],
                        })
                        .then((user) => {
                            if (user.length != 0)
                                next(new Error('Korisničko ime već postoji!'));
                            next();
                        })
                        .catch((onError) => console.log(onError));
                },
            },
        },
        role: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Role cannot be empty"
                }
            }
        },

    }, {
        timestamps: false,
        tableName: 'Users',
    });
    return User;
};