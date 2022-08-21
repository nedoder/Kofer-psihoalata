const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.category = require("./category")(sequelize, Sequelize);
db.answers = require("./answers")(sequelize, Sequelize);
db.comments = require("./comments")(sequelize, Sequelize);
db.posts = require("./posts")(sequelize, Sequelize);
db.users = require("./users")(sequelize, Sequelize);
db.activity = require("./activity")(sequelize, Sequelize);


db.category.hasMany(db.posts, {
    foreignKey: "categoryId",
    targetKey: "id"
});
db.posts.belongsTo(db.category, {
    foreignKey: "categoryId",
    targetKey: "id"
});


db.users.hasMany(db.posts, {
    foreignKey: "userId",
    targetKey: "id"
});
db.posts.belongsTo(db.users, {
    foreignKey: "userId",
    targetKey: "id"
});


db.posts.hasMany(db.comments, {
    foreignKey: "postId",
    targetKey: "id"
});
db.comments.belongsTo(db.posts, {
    foreignKey: "postId",
    targetKey: "id"
});


// db.comments.hasOne(db.posts, {
//     foreignKey: "commentId",
//     targetKey: "id"
// });

// db.posts.belongsTo(db.comments, {
//     foreignKey: "commentId",
//     targetKey: "id"
// });


db.comments.hasMany(db.answers, {
    foreignKey: "commentId",
    targetKey: "id"
});
db.answers.belongsTo(db.comments, {
    foreignKey: "commentId",
    targetKey: "id"
});




module.exports = db;