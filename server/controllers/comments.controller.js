const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {Comment,Activity} = require("../models");
// const Comment = db.comments;
// const Activity = db.activity;
// const Op = db.Sequelize.Op;
// Create and Save a new comment
exports.create = (req, res) => {


    // Create a comment
    const comment = {
        comment: req.body.comment,
        author: req.body.author,
        approved: req.body.approved,
        postId: req.body.postId,
    };


    // Save comment in the database
    Comment.create(comment)
        .then(data => {
            Activity.create({ "activity": `Korisnik ${req.body.author} je kreirao komentar ${req.body.comment}` })
                .then(data => {
                    res.status(200);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating activity."
                    });
                });
            res.send(`Comment is sucessfully created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the comment."
            });
        });

};

// Retrieve all comments from the database.
exports.findAll = (req, res) => {
    const query = req.query.comment;
    var condition = query ? {
        comment: {
            [Op.like]: `%${query}%`
        }
    } : null;



    Comment.findAll({
            include: [{all:true}],
            order: [
                ["updatedAt", "desc"]
            ],


        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving comments."
            });
        });

};
// Find a single comment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Comment.findByPk(id, { include: [{all:true}] })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find comment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving comment with id=" + id
            });
        });

};
// Update a comment by the id in the request
exports.update = async(req, res) => {
    const id = req.params.id;

    let newComment = {
        comment: req.body.comment,
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

    let comment = ''

    await Comment.findByPk(id)
        .then(response => {
            comment = response.comment
        })
        .catch(err => {
            console.log(err)
        });

    Comment.update(newComment, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izmijenio komentar ${comment}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });
                res.send({
                    message: "Comment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update comment with id=${id}. Maybe comment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.errors[0].message
            });
        });

};
// Delete a comment with the specified id in the request
exports.delete = async(req, res) => {
    const id = req.params.id;

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

    let comment = ''

    await Comment.findByPk(id)
        .then(response => {
            comment = response.comment
        })
        .catch(err => {
            console.log(err)
        });
    Comment.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izbrisao komentar ${comment}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });

                res.send({
                    message: "Comment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete comment with id=${id}. Maybe comment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete comment with id=" + id
            });
        });
};
// Delete all comments from the database.
exports.deleteAll = (req, res) => {
    Comment.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} comment were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all comments."
            });
        });
};