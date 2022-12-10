const usuarioModel = require("../../domain/models/Usuario");

const getAll = async () => {
  data = await usuarioModel.find()
  return data
};

module.exports = {
  getAll
};
