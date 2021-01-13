const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Creating an order
router.post("/", async (req, res) => {
  const { user, cart, restaurant, dishes, total, status } = req.body;
  const order = new Order({
    user: user.id,
    cart,
  });

  if (!user) {
    res.status(400).json({ message: "User object not provided" });
  }

  if (!cart) {
    res.status(400).json({ message: "Cart object not provided" });
  }

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
