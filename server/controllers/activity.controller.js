const db = require("../models");
const Activity = db.activity;
const Op = db.Sequelize.Op;


// Create and Save a new activity
exports.create = (req, res) => {


    // Create an activity
    const activity = {
        activity: req.body.activity,
    };


    // Save activity in the database
    Activity.create(activity)
        .then(data => {
            res.send(`Activity is sucessfully created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the activity."
            });
        });

};
// Retrieve all activities from the database.
exports.findAll = (req, res) => {

    Activity.findAll({
            order: [
                ["createdAt", "desc"]
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving activities."
            });
        });

};