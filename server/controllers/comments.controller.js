const db = require("../models");
const Comment = db.comment;
const Op = db.Sequelize.Op;
// Create and Save a new comment
exports.create = (req, res) => {


    // Create a drink
    const comment = {
        comment: req.body.comment,
        approved: req.body.approved,
    };


    // Save category in the database
    Comment.create(comment)
        .then(data => {
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
    Comment.findAll({ where: condition })
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
    Comment.findByPk(id)
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


    await Comment.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });

    Comment.update(newComment, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
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
    await Comment.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });
    Comment.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
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