module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new user
    router.post("/", users.create);
    //login
    router.post("/login", users.login);
    // Retrieve all users
    router.get("/", users.findAll);
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
    // Update a user with id
    router.patch("/:id", authorize.verifyToken, users.update);
    // Delete a user with id
    router.delete("/:id", authorize.verifyToken, users.delete);
    // Delete all users
    router.delete("/", authorize.verifyToken, users.deleteAll);
    app.use('/api/user', router);
}