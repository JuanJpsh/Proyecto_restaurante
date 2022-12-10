const usuarioService = require("../domain/services/UsuarioService");

const getAll = (req, res) => {
  usuarioService.getAll().then(data => {
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
  getAll,
  update,
  deleteById,
};
