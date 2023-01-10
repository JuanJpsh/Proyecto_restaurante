const { Router } = require("express");
const router = Router();
const foodPlateController = require("../../controllers/food-plate.controller");

const { validateFoodPlate } = require("../../validators/food-plate.validator");
const jwtMiddlewares = require("../../middlewares/authjwt");
const checkPermissions = require("../../middlewares/checkPermissions");

router
  .get(
    "/",
    [
      jwtMiddlewares.verifyToken,
      checkPermissions(
        ["order", "manage_menu"],
        "requires permissions to order or manage the menu"
      ),
    ],
    foodPlateController.getFoodPlates
  )
  .post("/", validateFoodPlate, [
    jwtMiddlewares.verifyToken,
    checkPermissions(
      ["manage_menu"],
      "requires permissions to manage the menu"
    ),
  ],
  foodPlateController.addFoodPlate);

module.exports = router;
