const jwt = require("jsonwebtoken");
const sharp = require('sharp');
const path = require('path');
const fs = require("fs");
const config = require("../config/auth.config.js");
const { Post, Activity } = require("../models");
const models = require('../models/');
const { Op } = models.Sequelize;

// Create and Save new post
exports.create = async (req, res) => {

    const formattedFileName = "resized" + req.file.filename;
    await sharp(req.file.path)
	.toFormat('webp')
    .webp({ quality: 70, force: true })
    .toFile(
        path.resolve('./uploads/'+ formattedFileName)
    )
    // Create a post
    const post = {
        title: req.body.title,
        image: formattedFileName,
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

    fs.unlinkSync(req.file.path)

    // Save post in the database
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

    let page = parseInt(req.query.page) - 1
    let limit = 20

    var condition = null
    const categoryQuery = req.query.category;
    const letterQuery = req.query.letter;
    const titleQuery = req.query.title

    if(titleQuery) {
        condition = {
            title: {
                [Op.like]: `%${titleQuery}%`
            }
        }
    } else if (letterQuery) {
        condition = {
            '$Category.category$': {
                [Op.like]: letterQuery + "%"
            }
        }
    } else if(categoryQuery) {
        condition = {
            categoryId: {
                [Op.like]: `%${categoryQuery}%`
            }
        }
    } else {
        condition  = null;
    }

    Post.findAndCountAll({
        include: [{
            model: models.Category,
            as: 'Category',
            include: [{
                model: models.Post,
                required: true,
                as: 'Posts',
            }]
          },
        {
            model: models.User,
            as: 'User',
        },{
            model: models.Comment,
            as: 'Comments',
            include: [{
                model: models.Answer,
                as: 'Answers',
            },
            {
                model: models.Post,
                as: 'Post',
            }]
        }],
        where: condition,
        order: [
            ["updatedAt", "desc"]
        ],
        distinct:true,
        limit: limit,
        offset: parseInt(page * limit),
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
        const formattedFileName = "resized" + req.file.filename;
        await sharp(req.file.path)
	    .toFormat('webp')
        .webp({ quality: 70, force: true })
        .toFile(
            path.resolve('./uploads/'+ formattedFileName)
        )
        image.image = formattedFileName
        fs.unlinkSync(req.file.path)
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

    var imagePath = null
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
        if (response.image) {
            imagePath = './uploads/' + response.image;
        }
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
            fs.unlinkSync(imagePath)
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