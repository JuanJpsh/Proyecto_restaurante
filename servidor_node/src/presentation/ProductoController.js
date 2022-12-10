const productoService = require("../domain/services/ProductoService");

const getAll = (req, res) => {
  productoService.getAll().then(data => {
    res.status(200).json(data);
  })
};

const getAllByUser = (req, res) => {
  productoService.getByUser(req.userId).then(data => {
    res.json(data);
  }).catch(error => {
    console.log(error.message)
    res.status(204).send(error);
  })
};

const deleteById = (req, res) => {
  res.status(200).send("Logica de eliminar");
};

const update = (req, res) => {
  res.status(200).send("Logica de actualizar");
};

const save = (req, res) => {
  res.status(201).send("Logica de registrar");
};

module.exports = {
  save,
  getAll,
  getAllByUser,
  update,
  deleteById,
};
