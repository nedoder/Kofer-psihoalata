const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const fs = require("fs");
const {Post, Activity} = require("../models");
// const Post = db.posts;
// const Activity = db.activity;
const models = require('../models/');
const { Op } = models.Sequelize;
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


    // Save category in the database
    Post.create(post)
        .then(data => {
            Activity.create({ "activity": `Korisnik ${author} je kreirao post ${req.body.title}` })
                .then(data => {
                    res.status(200);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating activity."
                    });
                });
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
    const query = req.query.category;
    var condition = query ? {
        categoryId: {
            [Op.like]: `%${query}%`
        }
    } : null;

    // let page = ''
    // let limit = 20
    // let offset = parseInt(page * limit)
    // if (req.query.page === undefined) {
    //     page = 1000000000000000
    // } else {
    //     page = parseInt(req.query.page) - 1
    // }



    Post.findAll({
        
            include: [{all:true, include: [{all:true}]}],
            where: condition,
            order: [
                ["updatedAt", "desc"]
            ],

            // limit: limit,
            // offset: offset
        })
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
    Post.findByPk(id, {
            include: [{all:true, include: [{all:true}]}],
        })
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
// Update a post by the id in the request
exports.update = async(req, res) => {
    const id = req.params.id;

    var imagePath = null
        // Edit a post
    let image = { image: req.file ? req.file.filename : '' }

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


    let newPost = {
        title: req.body.title,
        content: req.body.content,
        categoryId: req.body.categoryId,
        userId: req.body.author
    };

    if (image.image !== '') {
        Object.assign(newPost, image);
    }

    await Post.findByPk(id)
        .then(response => {
            if (response.image) {
                imagePath = './uploads/' + response.image;
            }
        })
        .catch(err => {
            console.log(err)
        });

    Post.update(newPost, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izmijenio post ${req.body.title}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });

                if (newPost.image) {
                    fs.unlinkSync(imagePath)
                }
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
                message: err
            });
        });

};
// Delete a post with the specified id in the request
exports.delete = async(req, res) => {
    const id = req.params.id;

    let post = ''

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

    await Post.findByPk(id)
        .then(response => {
            post = response.title
        })
        .catch(err => {
            console.log(err)
        });
    Post.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izbrisao post ${post}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });

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