const { Router } = require("express");
const router = Router();
const foodPlateController = require("../../controllers/food-plate.controller");

const jwtMiddlewares = require("../../middlewares/authjwt");
const permissionsMiddlewares = require("../../middlewares/checkPermissions");

router.get(
  "/",
  [jwtMiddlewares.verifyToken, permissionsMiddlewares.canGetFoodPlates],
  foodPlateController.getFoodPlates
);

module.exports = router;
