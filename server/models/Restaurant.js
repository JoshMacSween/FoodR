const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const Dish = mongoose.model("Dish", dishSchema);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = {
  Dish,
  dishSchema,
  Restaurant,
  restaurantSchema,
};

// module.exports.Dish = mongoose.model("Dish", dishSchema);
// module.exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
