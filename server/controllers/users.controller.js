const { User, Activity }  = require("../models");
const bcrypt = require('bcrypt')
var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

// Create and Save new user
exports.create = (req, res) => {

    if (!req.body.password) {
        res.status(400).send({
            message: "Password cannot be empty!"
        });
        return;
    }

    // Create a user
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10, function(err, hash) {
            if (err) {
                console.log(err)
            } else {
                console.log(hash)
            }
        }),
        role: req.body.role,
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

    // Save user in the database
    User.create(user)
    .then(data => {
        Activity.create({ "activity": `Korisnik ${author} je kreirao usera ${req.body.username}` })
        .then(data => {
            res.status(200) 
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating activity."
            });
        });
        res.send(`User is sucessfully created.`);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });

};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    
    User.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });

};

// Find a single user with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    User.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find user with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving user with id=" + id
        });
    });

};

// Update user by the id in the request
exports.update = async(req, res) => {

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

    if (!req.body.password) {
        res.status(400).send({
            message: "Password cannot be empty!"
        });
        return;
    }

    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10, function(err, hash) {
            if (err) {
                console.log(err)
            } else {
                console.log(hash)
            }
        }),
        role: req.body.role,
    };


    await User.findByPk(id)
    .then(response => {})
    .catch(err => {
        console.log(err)
    });

    User.update(user, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            Activity.create({ "activity": `Korisnik ${author} je izmijenio usera ${req.body.username}` })
            .then(data => {
                res.status(200);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating activity."
                });
            });
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.errors[0].message
        });
    });

};

// Delete user with the specified id in the request
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

    let username = ''

    await User.findByPk(id)
    .then(response => {
        username = response.username
    })
    .catch(err => {
        console.log(err)
    });

    User.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            Activity.create({ "activity": `Korisnik ${author} je izbrsao usera ${username}` })
            .then(data => {
                res.status(200);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating activity."
                });
            });
            res.send({
                message: "User was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete user with id=${id}. Maybe user was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete user with id=" + id
        });
    });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} users were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all users."
        });
    });
};

//login
exports.login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id, role: user.role, name: user.firstName, lname: user.lastName }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: token
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};