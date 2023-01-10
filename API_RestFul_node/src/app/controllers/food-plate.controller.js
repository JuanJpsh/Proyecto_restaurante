const foodPlate = require("../models/FoodPlate");
const { httpErrorServer } = require("../helpers/httpError.helper");

const getFoodPlates = async (req, res) => {
  let allFoodPlates;
  try {
    allFoodPlates = await foodPlate.find().sort("name");
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

const addFoodPlate = async (req, res) => {
  const { name, description, image, price } = req.body;

  try {
    let foodFound = await foodPlate.exists({ name });
    if (foodFound)
      return res.status(405).send({
        error: "duplicate name not allowed",
      });
  } catch (error) {
    return httpErrorServer(res, error.message);
  }

  let newFoodPlate = new foodPlate({
    name,
    description,
    image,
    price,
  });
  let id;
  try {
    id = (await newFoodPlate.save()).id;
  } catch (error) {
    return httpErrorServer(res, error.message);
  }
  res.status(201).json({
    id,
    name,
    description,
    image,
    price,
  });
};

module.exports = {
  getFoodPlates,
  addFoodPlate,
};
