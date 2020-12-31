const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Not all fields have been entered" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No account with this email on file" });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        favourites: user.favourites,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register User
router.post("/", async (req, res) => {
  const { name, email, password, favourites } = req.body;
  const user = new User({
    name: name,
    email: email,
    password: password,
    favourites: favourites,
  });

  if (!name || !email || !password || !favourites) {
    res.status(400).json({ message: "Not all fields have been entered" });
  }

  if (email === User.find({email: email})) {
    res.status(400).json({message: "An account already exists for this email"})
  }

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

///
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find().populate({
//       path: "jobPostings",
//       select: "details service initHour addHour",
//     });

//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
