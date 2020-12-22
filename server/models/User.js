const mongoose = require("mongoose");
const restaurantSchema = require("./Restaurant")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: [restaurantSchema],
});

module.exports = mongoose.model("User", userSchema);
