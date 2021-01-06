const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  description: {
    type: String,
  },
  style: {
    type: String,
  },
  dishes: [dishSchema],
  //dishes: [{name: String}]
});

module.exports.restaurantSchema = restaurantSchema;
module.exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
