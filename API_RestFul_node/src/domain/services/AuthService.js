const usuarioModel = require("../../domain/models/Usuario");
const jwt = require("jsonwebtoken");

const signin = async (correo, contrasenia) => {
  const usuarioEncontrado = await usuarioModel
    .findOne({ correo: correo })
    .populate("permisos");

  if (!usuarioEncontrado) return;

  let contraseniaCorrecta = await usuarioModel.compararCont(
    usuarioEncontrado.contrasenia,
    contrasenia
  );

  if (!contraseniaCorrecta) return;

  const token = jwt.sign(
    {
      id: usuarioEncontrado._id,
      permisos: usuarioEncontrado.permisos.map((perm) => {
        return perm._id;
      }),
    },
    process.env.SECRET,
    {
      expiresIn: 43200, //12 horas
    }
  );

  return {
    nombre: usuarioEncontrado.nombre,
    tokenAcceso: `Bearer ${token}`
  };
};

const signup = async (name, username, password, admin) => {
  let newUser;
  if (admin) {
    newUser = new usuarioModel({
      nombre: name,
      nombreUsuario: username,
      contrasenia: await usuarioModel.encriptarCont(password),
      admin: admin,
    });
  } else {
    newUser = new usuarioModel({
      nombre: name,
      nombreUsuario: username,
      contrasenia: await usuarioModel.encriptarCont(password),
      admin: false,
    });
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
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
