module.exports = app => {
    const mail = require("../controllers/mail.controllers.js");
    var router = require("express").Router();
    //send email
    router.post("/", mail.send);
    router.post("/message", mail.message);
    app.use('/api/mail', router);
}