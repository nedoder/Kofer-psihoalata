const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;
// Create and Save a new category
exports.create = (req, res) => {


    // Create category
    const category = {
        category: req.body.category,
    };


    // Save category in the database
    Category.create(category)
        .then(data => {
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

    let newCategory = {
        category: req.body.category,
    };


    await Category.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });

    Category.update(newCategory, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
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
    await Category.findByPk(id)
        .then(response => {})
        .catch(err => {
            console.log(err)
        });
    Category.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
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