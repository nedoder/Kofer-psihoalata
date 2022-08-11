const fs = require("fs");
const db = require("../models");
// const Op = require("sequelize").Op;
const Category = db.category;
const Op = db.Sequelize.Op;
// Create and Save a new category
exports.create = (req, res) => {


    // Create a drink
    const category = {
        // name: req.body.name,
    };


    // Save category in the database
    Category.create(category)
        .then(data => {
            return res.send(`Drink is sucessfully created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the drink."
            });
        });

};
// Retrieve all categories from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
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
        // Edit a drink

    let image = { image: req.file ? req.file.filename : '' }
    let category = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
    };

    if (image.image !== '') {
        Object.assign(drink, image);
    }

    await Category.findByPk(id)
        .then(response => {
            if (response.image) {
                imagePath = './uploads/' + response.image;
            }
        })
        .catch(err => {
            console.log(err)
        });

    Category.update(drink, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                if (drink.image) {
                    fs.unlinkSync(imagePath)
                }
                res.send({
                    message: "Category was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update category with id=${id}. Maybe drink was not found or req.body is empty!`
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
    var path = null
    await Category.findByPk(id)
        .then(response => {
            if (response.image) {
                path = './uploads/' + response.image;
            }
        })
        .catch(err => {
            console.log(err)
        });
    Category.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                fs.unlinkSync(path)
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
