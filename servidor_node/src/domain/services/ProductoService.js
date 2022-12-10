const productoModel = require("../models/Producto");

const getAll = async () => {
  data = await productoModel.find();
  return data;
};

const getByUser = async (idUser) => {
  if (idUser && idUser !== "0") {
    data = await productoModel.find({
      idUser: idUser,
    });
    return data;
  }
  throw new Error('Param "idUser" cannot be "0", null or undefined');
};

module.exports = {
  getAll,
  getByUser,
};
