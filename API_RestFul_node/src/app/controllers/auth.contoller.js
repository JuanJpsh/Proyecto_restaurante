const user = require("../models/User");
const jwt = require("jsonwebtoken");
const { httpErrorServer } = require("../helpers/httpError.helper");

const signin = async (req, res) => {
  const { email, password } = req.body;

  let userFound;
  try {
    userFound = await user.findOne({ email }).populate("permissions");
  } catch (error) {
    return httpErrorServer(res, error.message);
  }

  if (!userFound)
    return res.status(401).send({ error: "Incorrect credentials" });

  const correctPassword = await user.checkPassword(
    userFound.password,
    password
  );

  if (!correctPassword)
    return res.status(401).send({ error: "Incorrect credentials" });

  const token = jwt.sign(
    {
      id: userFound._id,
    },
    process.env.SECRET,
    {
      expiresIn: 43200, //12 hours
    }
  );

  res.json({
    name: userFound.name,
    access_token: `Bearer ${token}`,
  });
};

module.exports = {
  signin,
};
