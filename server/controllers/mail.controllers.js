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

exports.sendMail = (req, res) => {
    
    var mailOptions = {
        from: req.body.email ,
        to: process.env.GMAIL,
        subject: req.body.name,
        text: req.body.message,
    };

      // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.GMAIL, // sender address
      to: req.body.email, // list of receivers
      subject: 'Translation Suggestion', // Subject line
      text: "Hello world?", // plain text body
      html: "<p>Traditional: <br> Simplified: <br> Pinyin: <br> English: "
            
    });

     
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email poslat: ' + info.response);
        }
    });

    next();
}

exports.joinUs = (req, res) => {
    
    var mailOptions = {
        from: req.body.email ,
        to: process.env.GMAIL,
        subject: req.body.name,
        text: req.body.message,
    };

      // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.GMAIL, // sender address
      to: req.body.email, // list of receivers
      subject: 'Translation Suggestion', // Subject line
      text: "Hello world?", // plain text body
      html: "<p>Traditional: <br> Simplified: <br> Pinyin: <br> English: "
            
    });

     
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email poslat: ' + info.response);
        }
    });
    
    next();
}