const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Answer = db.answers;
const Activity = db.activity;
const Op = db.Sequelize.Op;
// Create and Save a new answer
exports.create = (req, res) => {


    // Create an answer
    const answer = {
        answer: req.body.answer,
        author: req.body.author,
        approved: req.body.approved,
        commentId: req.body.commentId
    };


    // Save answer in the database
    Answer.create(answer)
        .then(data => {
            Activity.create({ "activity": `Korisnik ${req.body.author} je kreirao odgovor ${req.body.answer}` })
                .then(data => {
                    res.status(200);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating activity."
                    });
                });
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
    Answer.findAll({
            include: [{ model: db.comments, as: 'comment', include: [{ model: db.posts, as: 'post' }] }],
            order: [
                ["updatedAt", "desc"]
            ]
        })
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

    let token = req.headers["authorization"];
    let author = ''

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        author = decoded.name + " " + decoded.lname;
    });

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
                Activity.create({ "activity": `Korisnik ${author} je izmijenio odgovor ${req.body.answer}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });
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

    let answer = ''

    await Answer.findByPk(id)
        .then(response => {
            answer = response.answer

        })
        .catch(err => {
            console.log(err)
        });

    let token = req.headers["authorization"];
    let author = ''

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        author = decoded.name + " " + decoded.lname;
    });

    Answer.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izbrisao odgovor ${answer}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });

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