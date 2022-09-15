const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {Institution, Activity} = require("../models");
// const Institution = db.institution;
// const Activity = db.activity;
// const Op = db.Sequelize.Op;
// Create and save a new institution
exports.create = (req, res) => {


    // Create an institution
    const institution = {
        name: req.body.name,
        mail: req.body.mail,
        location: req.body.location,
        phone: req.body.phone,
        profession: req.body.profession
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

    // Save institution in the database
    Institution.create(institution)
        .then(data => {
            Activity.create({ "activity": `Korisnik ${author} je kreirao instituciju ${req.body.name}` })
                .then(data => {
                    res.status(200).send(`Institution is sucessfully created.`); 
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating institution."
                    });
                });
            
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the institution."
            });
        });

};

// Retrieve all institutions from the database.
exports.findAll = (req, res) => {
    
    Institution.findAll({
            order: [
                ["createdAt", "desc"]
            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving institutions."
            });
        });

};
// Find a single institution with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Institution.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find institution with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving institution with id=" + id
            });
        });

};

// Update an institution by the id in the request
exports.update = async(req, res) => {
    const id = req.params.id;

    let newInstitution = {
        name: req.body.name,
        mail: req.body.mail,
        location: req.body.location,
        phone: req.body.phone,
        profession: req.body.profession
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


    await Institution.findByPk(id)
        .then(response => {
           console.log(response)
        })
        .catch(err => {
            console.log(err)
        });

        Institution.update(newInstitution, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izmijenio instituciju ${req.body.name}` })
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
// Delete an institution with the specified id in the request
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

    let institution = ''

    await Institution.findByPk(id)
        .then(response => {
            institution = response.name;
            console.log(institution)
        })
        .catch(err => {
            console.log(err)
        });
        Institution.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {

                Activity.create({ "activity": `Korisnik ${author} je izbrisao instituciju ${institution}` })
                    .then(data => {
                        res.status(200);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating activity."
                        });
                    });

                res.send({
                    message: "Institution was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete institution with id=${id}. Maybe institution was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete institution with id=" + id
            });
        });
};
// Delete all institutions from the database.
exports.deleteAll = (req, res) => {
    Institution.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} institutions were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all institutions."
            });
        });
};