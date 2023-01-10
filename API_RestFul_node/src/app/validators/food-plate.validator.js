const { check } = require("express-validator");
const { validateResult } = require("../helpers/validate.helper");

const validateFoodPlate = [
  check("name").exists(),
  check("description").exists(),
  check("price").exists().isNumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateFoodPlate };
