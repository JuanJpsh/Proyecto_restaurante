const user = require("../models/User");
const permission = require("../models/Permission");

const createUsers = async () => {
  try {
    let countPermissions = await permission.estimatedDocumentCount();
    if (countPermissions < 1) return;

    let countUsers = await user.estimatedDocumentCount();
    if (countUsers > 0) return;

    let permissions = (await permission.find()).map((perm) => {
      return perm._id.toString();
    });

    const values = await new user({
      name: "Juan Pablo Solarte",
      email: "juan.jpsh17@gmail.com",
      password: await user.encryptPassword("Cont1234"),
      permissions,
    }).save();

    console.info("************* Added Users *************");
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

createUsers();
