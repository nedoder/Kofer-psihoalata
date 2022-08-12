const fs = require("fs");
const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;
// Create and Save a new category
exports.create = (req, res) => {


    // Create a drink
    const post = {
        title: req.body.title,
        image: req.file.filename,
        content: req.body.content,
        categoryId: req.body.categoryId,
        userId: req.body.userId
    };


    // Save category in the database
    Post.create(post)
        .then(data => {
            res.send(`Post is sucessfully created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the post."
            });
        });

};
// Retrieve all posts from the database.
exports.findAll = (req, res) => {
    const query = req.query.title;
    var condition = query ? {
        title: {
            [Op.like]: `%${query}%`
        }
    } : null;
    Post.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving posts."
            });
        });

};
// Find a single post with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Post.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find post with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving post with id=" + id
            });
        });

};
// Update a category by the id in the request
exports.update = async(req, res) => {
    const id = req.params.id;

    let newPost = {
        title: req.body.title,
        image: req.file.filename,
        content: req.body.content,
        categoryId: req.body.categoryId,
        userId: req.body.author
    };


    await Post.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });

    Post.update(newPost, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.errors[0].message
            });
        });

};
// Delete a post with the specified id in the request
exports.delete = async(req, res) => {
    const id = req.params.id;
    await Post.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });
    Post.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete post with id=${id}. Maybe post was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete post with id=" + id
            });
        });
};
// Delete all posts from the database.
exports.deleteAll = (req, res) => {
    Post.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} posts were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all posts."
            });
        });
};