const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { dishSchema } = require("./Restaurant");

const orderModel = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  // restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  cart: [dishSchema],
});

module.exports = mongoose.model("Order", orderModel);
