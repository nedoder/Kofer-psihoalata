const nodemailer = require("nodemailer");
require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: 'gmail',
    secure: true, 
    auth: {
      user: process.env.GMAIL, // generated ethereal user
      pass: process.env.GPASS, // generated ethereal password
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
        } else {
            console.log('Email poslat: ' + info.response);
        }
    });

}
