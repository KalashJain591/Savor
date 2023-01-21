const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post('/contactus',  async (req, res) => {
  console.log(req.body);
try{
  const { name, subject, text ,userID,useremail,phone} = req.body;
          console.log("reached contactus")  
        let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP gmail transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'thekalash52@gmail.com', // generated gmail user
          pass: "zfkfkiryzwnrohkf", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `thekalash52@gmail.com`, // sender address
        to: `kalashj93@gmail.com, baz@example.com`, // list of receivers
        subject:subject, // Subject line
        text: text, // plain text body
        // html: "<b>Hello world?</b>", // html body
      });
    
    //   console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.send("I am sending mail");
    
    }

catch(err){
console.log(err);
}
});
module.exports = router;