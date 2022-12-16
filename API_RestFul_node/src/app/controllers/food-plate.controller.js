const foodPlate = require("../models/FoodPlate");
const { httpErrorServer } = require("../helpers/httpError.helper");

const getFoodPlates = async (req, res) => {
  let allFoodPlates;
  try {
    allFoodPlates = await foodPlate.find();
  } catch (error) {
    return httpErrorServer(res, error.message);
  }
  res.json(
    allFoodPlates.map((fp) => {
      const { _id, name, description, image, price } = fp;
      return {
        id: _id,
        name,
        description,
        image,
        price,
      };
    })
  );
};

module.exports = {
  getFoodPlates,
};
