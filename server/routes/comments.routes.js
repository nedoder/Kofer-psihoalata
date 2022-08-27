module.exports = app => {
    const comments = require("../controllers/comments.controller.js");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new comment
    router.post("/", comments.create);
    // Retrieve all comments
    router.get("/", comments.findAll);
    // Retrieve a single comment with id
    router.get("/:id", comments.findOne);
    // Update a comment with id
    router.patch("/:id", authorize.verifyToken, comments.update);
    // Delete a comment with id
    router.delete("/:id", authorize.verifyToken, comments.delete);
    // Delete all comments
    router.delete("/", authorize.verifyToken, comments.deleteAll);
    app.use('/api/comment', router);
}