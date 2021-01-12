const express = require("express");
const router = express.Router();
const { Restaurant, Dish } = require("../models/Restaurant");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Get One Restaurant
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json({ success: true, restaurant });
  } catch (error) {}
});

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
      name,
      email,
      password,
      address,
      dishes,
    });
    const newRestaurant = await restaurant.save();
    res.status(201).json({ success: true, newRestaurant });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Adding dishes
router.post("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { email, name, price, description } = req.body;
    const restaurant = await Restaurant.findById({ _id: id });

    restaurant.dishes.push({
      name: name,
      price: price,
      description: description,
    });
    const newDish = await restaurant.save();
    res.status(201).json({ success: true, newDish });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
// router.put("/:id", async (req, res) => {
//   try {
//     const data = req.body;
//     const id = req.params.id;
//     const options = { new: true };
//     const result = await Restaurant.findById(id, data, options);
//     res.status(201).json({success: true, result})
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// });

//Deleting Dishes
router.delete("/delete/", async (req, res) => {
  try {
    const { dishId, restId } = req.body;
    console.log(dishId);
    const restaurant = await Restaurant.findOneAndUpdate(
      { _id: restId },
      {
        $pull: {
          dishes: {
            _id: dishId,
          },
        },
      }
    );

    res.status(201).json({ success: true, restaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// placing an order
// router.post("/order", async (req, res) => {
//   try {
//     const {userId, restId, dishes, total} = req.body
//     const order = New Order(
//     })
//   } catch (error) {

//   }
// })

module.exports = router;
