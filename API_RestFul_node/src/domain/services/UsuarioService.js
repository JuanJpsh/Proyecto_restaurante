const usuarioModel = require("../../domain/models/Usuario");

const obtenerPermisos = async (idUsuario) => {
  data = await usuarioModel.findById(idUsuario).populate("permisos");
  return data.permisos.map((perm) => {
    return perm.nombre;
  })
};

module.exports = {
  obtenerPermisos
};
