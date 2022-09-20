module.exports = app => {
    const institutions = require("../controllers/institutions.controller.js");
    const authorize = require("../middleware/authorize.js")
    var router = require("express").Router();
    // Create a new institution
    router.post("/", authorize.verifyToken, institutions.create);
    // Retrieve all institutions
    router.get("/:page?", institutions.findAll);
    // Retrieve a single institution with id
    router.get("/find/:id", institutions.findOne);
    // Update an institution with id
    router.patch("/:id", authorize.verifyToken, institutions.update);
    // Delete an institution with id
    router.delete("/:id", authorize.verifyToken, institutions.delete);
    // Delete all institutions
    router.delete("/", authorize.verifyToken, institutions.deleteAll);
    
    app.use('/api/institution', router);
};