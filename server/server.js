require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

const app = express()

app.use(history({
    // verbose: true
}));

app.use(express.static(__dirname + '/dist'));


global.__basedir = __dirname;


var corsOptions = {
    // origin: "https://koferpsihoalata.me"
    origin: "*"
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));


// Json Body Middleware
app.use(bodyParser.json());



require("./routes/category.routes")(app);
require("./routes/answers.routes")(app);
require("./routes/comments.routes")(app);
require("./routes/posts.routes")(app);
require("./routes/users.routes")(app);
require("./routes/activity.routes")(app);



app.use(express.static("uploads"))



const db = require("./models");

// db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
//     .then(function() {
//         return db.sequelize.sync({ force: true });
//     })
//     .then(function() {
//         return db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
//     })
//     .then(function() {
//         console.log('Database synchronised.');
//     }, function(err) {
//         console.log(err);
//     });

db.sequelize.sync();


app.get("/", (req, res) => {
    res.json({ message: "Kofer psihoalata" });
});

const PORT = process.env.PORT;
// port where app is served
app.listen(PORT, () => {
    console.log('The web server has started on port 3000');
});

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORTDB,
    password: process.env.PASSWORD,
});



connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

connection.query('CREATE DATABASE IF NOT EXISTS kofer', function(err, result) {
    if (err) throw err;
    console.log("Database created!");
})



module.exports = connection;