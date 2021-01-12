const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Creating an order
router.post("/", async (req, res) => {
  try {
    const { user, restaurant, dishes, total, status } = req.body;
    const order = new Order({
      user,
      dishes,
    });

    const newOrder = await order.save();
    res.status(201).json({ success: true, newOrder });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Could not post new order" });
  }
});

// Completing an order

// Cancelling an order

module.exports = router;
