const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");
const usuarioModel = require("../domain/models/Usuario");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(403).json({
      success: false,
      message: "no token provided",
    });
  let decoded;
  try {
    decoded = jwt.verify(token, SECRET);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({
      success: false,
      message: "access denied",
    });
  }
  console.log(decoded)
  req.userId = decoded.id;

  let user = await usuarioModel.findById(req.userId, { contrasenia: 0 });
  if (!user)
    return res.status(404).json({
      success: false,
      message: "no user found",
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
  })
};

module.exports = {verifyToken, isAdmin};
