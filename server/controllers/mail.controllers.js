const nodemailer = require("nodemailer");
require('dotenv').config();

exports.create = (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.GMAIL, // generated ethereal user
          pass: process.env.GPASS, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.user, // sender address
        to: process.env.email, // list of receivers
        subject: 'Translation Suggestion', // Subject line
        text: "Hello world?", // plain text body
        html: "<p>Traditional: <br> Simplified: <br> Pinyin: <br> English: "
              
      });
}