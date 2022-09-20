module.exports = app => {
    const mail = require("../controllers/mail.controllers.js");
    var router = require("express").Router();
    //send join-us form
    router.post("/", mail.send);
    //send message
    router.post("/message", mail.message);

    app.use('/api/mail', router);
}