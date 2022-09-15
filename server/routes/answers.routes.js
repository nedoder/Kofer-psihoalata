module.exports = app => {
    const answers = require("../controllers/answers.controller.js");
    const upload = require("../middleware/upload");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new answer
    router.post("/", answers.create);
    // Retrieve all answers
    router.get("/", answers.findAll);
    // Retrieve a single answer with id
    router.get("/:id", answers.findOne);
    // Update an answer with id
    router.patch("/:id", authorize.verifyToken, answers.update);
    // Delete an answer with id
    router.delete("/:id", authorize.verifyToken, answers.delete);
    // Delete all answers
    router.delete("/", authorize.verifyToken, answers.deleteAll);
    app.use('/api/answer', router);
};