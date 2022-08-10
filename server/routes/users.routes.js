module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const upload = require("../middleware/upload");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new user
    router.post("/", authorize.verifyToken, upload.single("image"), users.create);
    // Retrieve all users
    router.get("/", users.findAll);
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
    // Update a user with id
    router.put("/:id", authorize.verifyToken, upload.single("image"), users.update);
    // Delete a user with id
    router.delete("/:id", authorize.verifyToken, users.delete);
    // Delete all users
    router.delete("/", authorize.verifyToken, users.deleteAll);
    app.use('/api/users', router);
}