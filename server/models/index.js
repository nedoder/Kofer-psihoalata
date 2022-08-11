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

db.posts.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "post",
});

db.users.hasMany(db.posts, { as: "posts" });
db.posts.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

db.comments.hasMany(db.answers, { as: "answers" });
db.answers.belongsTo(db.comments, {
  foreignKey: "answerId",
  as: "answer",
});

db.category.hasMany(db.posts, { as: "posts" });
db.posts.belongsTo(db.category, {
  foreignKey: "postId",
  as: "post",
});

module.exports = db;