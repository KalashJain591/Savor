const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")
const nodemailer = require("nodemailer");

// register
router.post("/register", async (req, res) => {
  try {
    // console.log("register");
    const { profilePic,name,email,phoneno ,dob, password } = req.body;
    // validation/
    console.log(req.body);
    if (!name||!email ||!phoneno ||!password )
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });
    const existingUser = await User.findOne({ phoneno });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    // save a new user account to the db
    const newUser = new User({
      profilePic,
      name,
      email,
      phoneno,
      dob,
      passwordHash,
    });

    const savedUser = await newUser.save();
    // sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(200).send("Successfully Registered");
  }
});
 
// log in

router.post("/login", async (req, res) => {
  try {
    
    const { phoneno, password } = req.body;
    // validate
    if (!phoneno || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ phoneno });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    // console.error(err);
    res.status(200).send(err);
  }
});

router.post("/editinfo/:id", async (req, res) => {
  const userId= req.params.id;
  try {
    // console.log(req.body);
    const { profilePic,name,email,phoneno ,dob, password } = req.body;
    const olddetails= await User.findOne({_id:userId});;
    if(!profilePic){
      profilePic:olddetails.profilePic;
    }
    if(!name){
      name:olddetails.name;
    }
    if(!email){
      email:olddetails.email;
    }
    if(!phoneno){
      phoneno:olddetails.phoneno;
    }
    if(!dob){
      dob:olddetails.dob;
    }
    if(!password){
      let usersaved=await User.findOneAndUpdate({_id:userId},{profilePic,name,email,phoneno ,dob});
      res.status(200).send(usersaved);
    }
    else{
    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    let usersaved=await User.findOneAndUpdate({_id:userId},{profilePic,name,email,phoneno ,dob,passwordHash});
    res.status(200).send(usersaved);
    }
  } catch (err) {
    res.status(200).send(err);
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});


router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    var decoded = jwt_decode(token);
    const userdetails=await User.findById(decoded.user);
    // console.log(decoded);
    res.send(userdetails);
  } catch (err) {
    res.json(false);
  }
});



router.post("/changeprofilepic/:id", async (req, res) => {
  const userId= req.params.id;
  try {
    // console.log(req.body);
    const {profilePic}=req.body;
    let usersaved=await User.findOneAndUpdate({_id:userId},{profilePic});
    res.status(200).send(usersaved);
    } catch (err) {
    res.status(200).send(err);
  }
});



router.post("/signinwithgoogle", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log("SIGN IN WITH GOOGLE");
    const { profilePic,name,email } = req.body;
    // validation
    if (!profilePic||!name||!email)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    //existing user
    // console.log("Existing User" ,existingUser);
    if (existingUser){
      // sign the token
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
      
    }
    else{
      //register
    const newUser = new User({
      profilePic,
      name,
      email
    });
    const savedUser = await newUser.save();
    // sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  }
  } catch (err) {
    console.error(err);
    res.status(200).send("Successfully google sigin");
  }
});



// forget password

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log("forget password",email)
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    console.log("forget password Valid user");
    const link = `https://www.savornaturals.in/reset-password/${oldUser._id}/`; 
        
   let testAccount = await nodemailer.createTestAccount();
   let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info.savornaturals@gmail.com', // generated gmail user
      pass: "oqqvracamdjlpetw", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `info.savornaturals@gmail.com`, // sender address
    to: email, // list of receivers
    subject:"Reset Password (SavorNaturals)", // Subject line
    text: 
    `Dear ${oldUser.name},
Your Reset Password link is ${link}    
Best regards,
Mukesh Kumawat
+91 9827141324
Savor Naturals`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  // let info1 = await transporter.sendMail({
  //   from: `info.savornaturals@gmail.com`, // sender address
  //   to: useremail, // list of receivers
  //   subject:recieverSubject, // Subject line
  //   text: receiverText, // plain text body
  //   // html: "<b>Hello world?</b>", // html body
  // });

  console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("I am sending mail");

    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "info.savornaturals@gmail.com",
    //     pass: "oqqvracamdjlpetw",
    //   },
    // });
    
    // var mailOptions = {
    //   from: "info.savornaturals@gmail.com",
    //   to: email,
    //   subject: "Password Reset (Savor Naturals)",
    //   text: link,
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.status(200).send("Email sent: " + info.response);
    //   }
    // });
    // res.status(200).send();
    // console.log(link);
  } catch (error) {
    console.log(error)
  }
});

router.post("/passwordreseted/:id", async (req, res) => {
  const { id } = req.params;
  const {password} = req.body;
  // console.log(id,password);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    let usersaved=await User.findOneAndUpdate({_id:id},{passwordHash});
    res.status(200).send(usersaved);
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

module.exports = router;