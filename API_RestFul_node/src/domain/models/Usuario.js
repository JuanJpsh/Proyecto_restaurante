const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
  nombre: { type: String, require: true },
  correo: { type: String, unique: true },
  contrasenia: { type: String, require: true },
  permisos: [{
    ref: "permisos",
    type: mongoose.Schema.Types.ObjectId
  }]
},
{
  timestamps: true,
  versionKey: false
});

schema.statics.encriptarCont = async (contrasenia) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contrasenia, salt);
};

schema.statics.compararCont = async (contrasenia, contraseniaRecibida) => {
  return await bcrypt.compare(contraseniaRecibida, contrasenia);
};

module.exports = mongoose.model("usuarios", schema);
