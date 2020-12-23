const mongoose = require("mongoose");

var restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

// (module.exports =
//   (mongoose.model("Restaurant", restaurantSchema), restaurantSchema)),
//   restaurantSchema;
