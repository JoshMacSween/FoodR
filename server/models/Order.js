const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {Dish, dishSchema, Restaurrant, restaurantSchema} = require("./Restaurant")

const orderModel = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  // dishes: [{ type: Schema.Types.ObjectId, ref: "Restaurant.Dishes" }],
  dishes: [dishSchema]
});

module.exports = mongoose.model("Order", orderModel);
