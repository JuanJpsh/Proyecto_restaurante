const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
  nombre: { type: String, require: true },
  nombreUsuario: { type: String, unique: true },
  contrasenia: { type: String, require: true },
  admin: { type: Boolean, require: true },
});

schema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

schema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(receivedPassword, password);
};

module.exports = mongoose.model("usuarios", schema);
