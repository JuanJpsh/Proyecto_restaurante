const usuarioService = require("../domain/services/UsuarioService");

const obtenerPermisos = (req, res) => {
  usuarioService.obtenerPermisos(req.idUsuario).then(data => {
    res.json(data);
  })
};

const deleteById = (req, res) => {
  res.send("Logica de eliminar");
};

const update = (req, res) => {
  res.send("Logica de actualizar");
};


module.exports = {
  obtenerPermisos,
  update,
  deleteById,
};
