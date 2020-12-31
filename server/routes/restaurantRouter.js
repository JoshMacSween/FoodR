const express = require("express");
const router = express.Router();
const { Restaurant } = require("../models/Restaurant");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, restaurants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Restaurant
router.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Not all fields have been entered" });
    }
    const restaurant = await Restaurant.findOne({ email: email });
    if (!restaurant) {
      return res
        .status(400)
        .json({ message: "No account associated with this email" });
    }
    const isMatch = bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET);
    res.json({
      token,
      restaurant: {
        id: restaurant._id,
        name: restaurant.name,
        email: restaurant.email,
        dishes: restaurant.dishes,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register a restaurant
router.post("/", async (req, res) => {
  try {
    const { name, email, password, address, dishes } = req.body;
    const restaurant = new Restaurant({
      name: name,
      email: email,
      password: password,
      address: address,
      dishes: dishes,
    });
    const newRestaurant = await restaurant.save();
    res.status(201).json({ success: true, newRestaurant });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
