const { Router } = require("express");
const router = Router();
const authController = require("../../presentation/AuthController");

router
  .post("/signin", authController.signin)
  .post("/signup", authController.signup);

module.exports = router;
