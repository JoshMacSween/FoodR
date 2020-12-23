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
    unique: true,
    index: true,
  },
  dishes: [dishSchema],
});

module.exports.restaurantSchema = restaurantSchema;
module.exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
