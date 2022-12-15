const permission = require("../models/Permission");

createPermissions = async () => {
  try {
    let count = await permission.estimatedDocumentCount();

    if (count > 0) return false;

    const valores = await Promise.all([
      new permission({
        name: "manage_menu",
      }).save(),
      new permission({
        name: "order",
      }).save(),
      new permission({
        name: "manage_restaurant",
      }).save(),
    ]);

    console.info("************* Added permissions *************");
    console.log(valores);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

module.exports = createPermissions();
