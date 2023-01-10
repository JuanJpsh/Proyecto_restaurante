const user = require("../models/User");
const { httpErrorServer } = require("../helpers/httpError.helper");

const getPermissions = async (req, res) => {
  let foundUser;
  try {
    foundUser = await user.findById(req.userId).populate("permissions").select('permissions');
  } catch (error) {
    return httpErrorServer(res, error.message);
  }
  res.json({
    permissions: foundUser.permissions.map((perm) => {
      return perm.name;
    }),
  });
};

module.exports = {
  getPermissions,
};
