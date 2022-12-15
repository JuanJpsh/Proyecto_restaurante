const foodPlate = require("../models/FoodPlate");
const { httpErrorServer } = require("../helpers/httpError.helper");

const getFoodPlates = async (req, res) => {
  let allFoodPlates;
  try {
    allFoodPlates = await foodPlate.find();
  } catch (error) {
    return httpErrorServer(res, error.message);
  }
  res.json({
    food_plates: allFoodPlates,
  });
};

module.exports = {
  getFoodPlates,
};
