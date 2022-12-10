const { Router } = require("express");
const router = Router();
const usuarioController = require("../../presentation/UsuarioController");

router
  .get("/", usuarioController.getAll)
  
module.exports = router;
