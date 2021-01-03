const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
});

module.exports.restaurantSchema = restaurantSchema;
module.exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
