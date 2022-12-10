const { Router } = require("express");
const router = Router();
const productoController = require("../../presentation/ProductoController");

const jwtMiddlewares = require("../../middlewares/authjwt")

router
  .get("/", [jwtMiddlewares.verifyToken, jwtMiddlewares.isAdmin], productoController.getAll)
  .get("/user", jwtMiddlewares.verifyToken, productoController.getAllByUser)
  .post("/", jwtMiddlewares.verifyToken, productoController.save)
  .put("/", jwtMiddlewares.verifyToken, productoController.update)
  .delete("/", jwtMiddlewares.verifyToken, productoController.deleteById);

module.exports = router;
