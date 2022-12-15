const user = require("../models/User");
const { httpErrorServer } = require("../helpers/httpError.helper");

const canGetFoodPlates = async (req, res, next) => {
    const permitedPermission = ["order", "manage_menu"];
    try {
      const userFond = await user
        .findById(req.userId, { contrasenia: 0 })
        .populate("permissions");
  
      const permissions = userFond.permissions
  
      for (const perm of permissions) {
        if (permitedPermission.includes(perm.name)) {
          next();
          return;
        }
      }
    } catch (error) {
      return httpErrorServer(res, error.message);
    }
  
    return res.status(401).send({
      error: "requires permissions to order or manage the menu",
    });
  };

  module.exports = { canGetFoodPlates };