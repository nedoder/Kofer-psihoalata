const dotenv = require("dotenv").config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}