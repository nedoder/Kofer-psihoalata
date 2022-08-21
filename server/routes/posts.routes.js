module.exports = app => {
    const posts = require("../controllers/posts.controller.js");
    const upload = require("../middleware/upload");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new post
    router.post("/", authorize.verifyToken, upload.single("image"), posts.create);
    // Retrieve all posts
    router.get("/", posts.findAll);
    // Retrieve a single post with id
    router.get("/:id", posts.findOne);
    // Update a post with id
    router.patch("/:id", authorize.verifyToken, upload.single("image"), posts.update);
    // Delete a posts with id
    router.delete("/:id", authorize.verifyToken, posts.delete);
    // Delete all posts
    router.delete("/", authorize.verifyToken, posts.deleteAll);
    app.use('/api/post', router);
}