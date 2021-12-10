export default function (req, res){
    require("dotenv").config();
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        port: 465,     
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.WORD,
        },
        secure: true,
    });

    transporter.verify((err, success) => {
        err
            ? console.log(err)
            : console.log(`=== Server is ready to take messages: ${success} ===`);
    });
    
    
    let mailOptions = {
        from: `${req.body.mailerState.email}`,
        to: 'Abdellah.bahsine@hotmail.com',
        subject: `Message from: ${req.body.mailerState.email}`,
        text: `${req.body.mailerState.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.json({
              status: "fail",
          });
        } else {
          console.log("== Message Sent ==");
          res.json({
          status: "success",
          });
        }
    });
}