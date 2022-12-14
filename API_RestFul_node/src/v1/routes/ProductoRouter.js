const { Router } = require("express");
const router = Router();
const productoController = require("../../presentation/ProductoController");

const jwtMiddlewares = require("../../middlewares/authjwt")

router
  .get("/", [jwtMiddlewares.verificarToken, jwtMiddlewares.isAdmin], productoController.getAll)
  .get("/user", jwtMiddlewares.verificarToken, productoController.getAllByUser)
  .post("/", jwtMiddlewares.verificarToken, productoController.save)
  .put("/", jwtMiddlewares.verificarToken, productoController.update)
  .delete("/", jwtMiddlewares.verificarToken, productoController.deleteById);

module.exports = router;
