const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

//Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, restaurants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register a restaurant
router.post("/", async (req, res) => {
  try {
    const restaurant = new Restaurant({
      name: req.body.name,
    });
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
