module.exports = app => {
    const mail = require("../controllers/mail.controllers.js");
    var router = require("express").Router();
    // Create a new post
    router.post("/", mail.send);
    app.use('/api/mail', router);
}