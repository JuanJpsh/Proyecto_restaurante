const { Router } = require("express");
const router = Router();
const usuarioController = require("../../presentation/UsuarioController");

const jwtMiddlewares = require("../../middlewares/authjwt")

router
  .get("/permisos", jwtMiddlewares.verificarToken, usuarioController.obtenerPermisos)

module.exports = router;
