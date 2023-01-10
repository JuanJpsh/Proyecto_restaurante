const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: false },
  price: { type: Number, require: true },
},
{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model("food_plate", schema);