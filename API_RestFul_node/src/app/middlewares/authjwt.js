const jwt = require("jsonwebtoken");
const user = require("../models/User");
const { httpErrorServer } = require("../helpers/httpError.helper");

const verifyToken = async (req, res, next) => {
  const bearerToken = req.headers["x-access-token"];
  if (!bearerToken)
    return res.status(403).json({
      message: "Token no provided",
    });
  let decoded;
  try {
    const token = bearerToken.split(" ")[1];
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.error(error.message);
    return res.status(401).send({
      error: "Access denied",
    });
  }
  req.userId = decoded.id;

  let foundUser;
  try {
    foundUser = await user.findById(req.userId, { password: 0 });
  } catch (error) {
    return httpErrorServer(res, error.message);
  }

  if (!foundUser)
    return res.status(401).send({
      error: "Access denied",
    });

  next();
};

const isAdmin = async (req, res, next) => {
  let foundUser = await user.findById(req.userId, { contrasenia: 0 });
  if (foundUser.admin) {
    next();
    return;
  }

  return res.status(403).json({
    success: false,
    message: "Requer Admin role",
  });
};

module.exports = { verifyToken, isAdmin };
