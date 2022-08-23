module.exports = app => {
    const activity = require("../controllers/activity.controller.js");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new activity
    router.post("/", authorize.verifyToken, activity.create);
    // Retrieve all activities
    router.get("/:page?", activity.findAll);

    app.use('/api/activity/', router);
};