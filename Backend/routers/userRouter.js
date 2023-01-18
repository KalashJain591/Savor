const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")

// register
router.post("/register", async (req, res) => {
  try {
    // console.log("register");
    const { profilePic,name,email,phoneno ,dob, password } = req.body;
    // validation
    // console.log(req.body);
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
    console.error(err);
    res.status(200).send("Login Succesfull");
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





module.exports = router;