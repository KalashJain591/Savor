const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post('/contactus',  async (req, res) => {
  
  // console.log(req.body);
try{
  const { name, subject, text ,userID,useremail,phone} = req.body;
          console.log("reached contactus",userID)  
    
        let testAccount = await nodemailer.createTestAccount();
        let recieverSubject="We Successfully recieved your Mail"
        let receiverText=
        `Dear ${name},

        Thank you for contacting us through our website's savornaturals.in Contact Us page. We have received your message and appreciate the opportunity to assist you.    
        We have documented your inquiry in our database with your ID number  ${userID}, and a member of our support team will be in touch with you shortly to address your concerns.     
        If you have any additional information that you would like to provide, please reply to this email, and we will make sure to forward it to the relevant department.
        Thank you again for your patience and for giving us the opportunity to help.
    
        
        Best regards,
        Mukesh Kumawat
        +91 9827141324
        Savor Naturals`
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
        to: 'info.savornaturals@gmail.com', // list of receivers
        subject:subject, // Subject line
        text: text, // plain text body
        // html: "<b>Hello world?</b>", // html body
      });
      let info1 = await transporter.sendMail({
        from: `thekalash52@gmail.com`, // sender address
        to: useremail, // list of receivers
        subject:recieverSubject, // Subject line
        text: receiverText, // plain text body
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