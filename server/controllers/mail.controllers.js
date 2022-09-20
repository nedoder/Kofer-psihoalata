const nodemailer = require("nodemailer");
require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: 'gmail',
    secure: true, 
    auth: {
      user: process.env.GMAIL, 
      pass: process.env.GPASS, 
    },
});

exports.send = (req, res) => {
    
    var mailOptions = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: "Prijava za volontere",
        text: req.body.message,
    };

     
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Email error: ' + error);
            res.status(500).send({err : error})
        } else {
            console.log('Email poslat: ' + info.response);
            res.status(200).send({success : info.response})
        }
    });

}

exports.message = (req, res) => {
    
    var mailOptions = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: req.body.name,
        text: req.body.message,
    };

     
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Email error: ' + error);
            res.status(500).send({err : error})
        } else {
            console.log('Email poslat: ' + info.response);
            res.status(200).send({success : info.response})
        }
    });

}