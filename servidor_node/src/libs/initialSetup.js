const user = require("../domain/models/Usuario");
const prod = require("../domain/models/Producto");

const initialDB = async () => {
  let ids = await createUsers();
  if (ids) {
    createProdcts(ids)
  }
};

const createUsers = async () => {
  try {
    let count = await user.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new user({
        nombre: "Juan Solarte",
        nombreUsuario: "JuanSo",
        contrasenia: await user.encryptPassword("juanArte"),
        admin: false
      }).save(),
      new user({
        nombre: "Pablo Hoyos",
        nombreUsuario: "PabloHo",
        contrasenia: await user.encryptPassword("pabloYos"),
        admin: true
      }).save(),
    ]);

    console.log("************* Usuarios añadidos *************");
    console.log(values);
    return [values[0]._id.toString(), values[1]._id.toString()];
  } catch (error) {
    console.log(error);
  }
};

const createProdcts = async (userIds) => {
  try {
    let count = await prod.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new prod({
        nombre: "manzana",
        precio: 2000,
        idUser: userIds[0]
      }).save(),
      new prod({
        nombre: "pera",
        precio: 3000,
        idUser: userIds[0]
      }).save(),
      new prod({
        nombre: "banano",
        precio: 4000,
        idUser: userIds[1]
      }).save(),
    ]);

    console.log("************* Productos añadidos *************");
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

module.exports = initialDB;
