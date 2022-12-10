const usuarioModel = require("../../domain/models/Usuario");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../../config");

const signin = async (username, password) => {
  const userFound = await usuarioModel.findOne({nombreUsuario: username});

  if (!userFound) return;

  let matchPassword = await usuarioModel.comparePassword(
    userFound.contrasenia,
    password
  );

  if (!matchPassword) return;

  const token = jwt.sign({ id: userFound._id }, SECRET, {
    expiresIn: 43200, //12 horas
  });

  return {
    nombre: userFound.nombre,
    accessToken: token,
  };
};

const signup = async (name, username, password, admin) => {
  let newUser
  if (admin){
    newUser = new usuarioModel({
      nombre: name,
      nombreUsuario: username,
      contrasenia: await usuarioModel.encryptPassword(password),
      admin: admin
    });
  }else{
    newUser = new usuarioModel({
      nombre: name,
      nombreUsuario: username,
      contrasenia: await usuarioModel.encryptPassword(password),
      admin: false
    });
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, SECRET, {
    expiresIn: 43200, //12 horas
  });

  return {
    nombre: savedUser.nombre,
    accessToken: token,
  };
};

module.exports = {
  signin,
  signup,
};
