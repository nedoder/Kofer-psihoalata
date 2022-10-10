const jwt = require("jsonwebtoken");
const sharp = require('sharp');
const config = require("../config/auth.config.js");
const { Category,Activity } = require("../models");
const models = require("../models");
const Op = models.Sequelize.Op;
const fs = require("fs");

// Create and Save a new category
exports.create = (req, res) => {

    // Create category
    const category = {
        category: req.body.category,
        image: req.file.filename,
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

    const formattedFileName = req.file.filename
    try {
        sharp(req.file.buffer)
        .webp({ quality: 70 })
        .toFile('./uploads/'+ formattedFileName); //upload to /upload folder
    } catch (error) {
        console.log(error);
    }

    // Save category in the database
    Category.create(category)
    .then(data => {
        Activity.create({ "activity": `Korisnik ${author} je kreirao kategoriju ${req.body.category}` })
        .then(data => {
            res.status(200);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating activity."
            });
        });
        res.send(`Category is sucessfully created.`);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the category."
        });
    });

};

// Retrieve all categories from the database.
exports.findAll = (req, res) => {
    const query = req.query.category;
    var condition = query ? {
        category: {
            [Op.like]: `%${query}%`
        }
    } : null;
    Category.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });

};

// Find a single category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Category.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find category with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving category with id=" + id
        });
    });

};

// Update a category by the id in the request
exports.update = async(req, res) => {

    const id = req.params.id;

    var imagePath = null
    // Edit a category
    let image = { image: req.file ? req.file.filename : '' }

    let newCategory = {
        category: req.body.category,
    };

    if (image.image !== '') {
        Object.assign(newCategory, image);
    }

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

    await Category.findByPk(id)
    .then(response => {
        if (response.image) {
            imagePath = './uploads/' + response.image;
        }
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    });

    Category.update(newCategory, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            Activity.create({ "activity": `Korisnik ${author} je izmijenio kategoriju ${req.body.category}` })
            .then(data => {
                res.status(200);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating activity."
                });
            });
            if (newCategory.image) {
                fs.unlinkSync(imagePath)
            }
            res.send({
                message: "Category was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update category with id=${id}. Maybe category was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.errors[0].message
        });
    });

};

// Delete a category with the specified id in the request
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

    let category = ''

    await Category.findByPk(id)
    .then(response => {
        category = response.category
    })
    .catch(err => {
        console.log(err)
    });

    Category.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            Activity.create({ "activity": `Korisnik ${author} je izbrisao kategoriju ${category}` })
            .then(data => {
                res.status(200);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating activity."
                });
            });
            res.send({
                message: "Category was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete category with id=${id}. Maybe category was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete category with id=" + id
        });
    });
};

// Delete all categories from the database.
exports.deleteAll = (req, res) => {
    Category.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} category were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all categories."
        });
    });
};