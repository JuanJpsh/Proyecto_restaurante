const jwt = require("jsonwebtoken");
const usuarioModel = require("../domain/models/Usuario");

const verificarToken = async (req, res, next) => {
  const token = req.headers["x-token-acceso"].split(' ')[1];
  if (!token)
    return res.status(403).json({
      mensaje: "Token no proporcionado",
    });
  let decodificado;
  try {
    decodificado = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.error(error.message);
    return res.status(404).json({
      mensaje: "Acceso denegado",
    });
  }
  req.idUsuario = decodificado.id;

  let usuario = await usuarioModel.findById(req.idUsuario, { contrasenia: 0 });
  if (!usuario)
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
    });

  next();
};

const isAdmin = async (req, res, next) => {
  let user = await usuarioModel.findById(req.userId, { contrasenia: 0 });
  if (user.admin) {
    next();
    return;
  }

  return res.status(403).json({
    success: false,
    message: "Requer Admin role",
  });
};

module.exports = { verificarToken, isAdmin };
