module.exports = app => {
    const category = require("../controllers/category.controller");
    const authorize = require("../middleware/authorize.js");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
    // Create a new category
    router.post("/", authorize.verifyToken, upload.single("image"), category.create);
    // Retrieve all categories
    router.get("/", category.findAll);
    // Retrieve a single category with id
    router.get("/:id", category.findOne);
    // Update a category with id
    router.patch("/:id", authorize.verifyToken, upload.single("image"), category.update);
    // Delete a category with id
    router.delete("/:id", authorize.verifyToken, category.delete);
    // Delete all categories
    router.delete("/", authorize.verifyToken, category.deleteAll);

    app.use('/api/category', router);
}