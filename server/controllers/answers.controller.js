const db = require("../models");
const Answer = db.answer;
const Op = db.Sequelize.Op;
// Create and Save a new answer
exports.create = (req, res) => {


    // Create an answer
    const answer = {
        answer: req.body.answer,
        approved: req.body.approved
    };


    // Save answer in the database
    Answer.create(answer)
        .then(data => {
            res.send(`Answer is sucessfully created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the answer."
            });
        });

};
// Retrieve all answers from the database.
exports.findAll = (req, res) => {
    const query = req.query.answer;
    var condition = query ? {
        answer: {
            [Op.like]: `%${query}%`
        }
    } : null;
    Answer.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving answers."
            });
        });

};
// Find a single answer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Answer.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find answer with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving answer with id=" + id
            });
        });

};
// Update an answer by the id in the request
exports.update = async(req, res) => {
    const id = req.params.id;

    let newAnswer = {
        answer: req.body.answer,
        approved: req.body.approved
    };


    await Answer.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });

    Answer.update(newAnswer, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Answer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update answer with id=${id}. Maybe answer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.errors[0].message
            });
        });

};
// Delete an answer with the specified id in the request
exports.delete = async(req, res) => {
    const id = req.params.id;
    await Answer.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });
    Answer.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Answer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete answer with id=${id}. Maybe answer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete answer with id=" + id
            });
        });
};
// Delete all answers from the database.
exports.deleteAll = (req, res) => {
    Answer.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} answers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all answers."
            });
        });
};