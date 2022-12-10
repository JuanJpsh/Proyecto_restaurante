const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  idUser: { ref: "usuarios", type: mongoose.Schema.Types.ObjectId },
  nombre: { type: String, require: true },
  precio: { type: Number, require: true },
});

module.exports = mongoose.model("productos", schema);
