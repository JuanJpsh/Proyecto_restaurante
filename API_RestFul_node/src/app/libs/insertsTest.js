const foodPlate = require("../models/FoodPlate");
const permission = require("../models/Permission");
const user = require("../models/User");

const createUsers = async () => {
  try {
    const countPermissions = await permission.estimatedDocumentCount();
    if (countPermissions < 1) return;

    const countUsers = await user.estimatedDocumentCount();
    if (countUsers > 0) return;

    const permissions = await permission.find();
    const permissionsIds = permissions.map((perm) => {
      return perm._id.toString();
    });
    const permissionManageRest = permissions.find(
      (perm) => perm.name == "manage_restaurant"
    );

    const values = await Promise.all([
      new user({
        name: "Juan Pablo Solarte",
        email: "juan.jpsh17@gmail.com",
        password: await user.encryptPassword("Cont1234"),
        permissions: permissionsIds,
      }).save(),
      new user({
        name: "Natalia Andrea Medina",
        email: "nataliamed@unicauca.edu.co",
        password: await user.encryptPassword("Cont1234"),
        permissions: permissionManageRest._id.toString(),
      }).save(),
    ]);

    console.info("************* Added Users *************");
    console.log(values);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

const createFoodPlates = async () => {
  try {
    const count = await foodPlate.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new foodPlate({
        name: "Lomo caracho",
        description: "100 gr de lomo caracho con ensalada de brocoli",
        image:
          "http://indianywok.weebly.com/uploads/5/0/6/7/50670067/s589705927513296688_p10_i1_w450.jpeg",
        price: 40000,
      }).save(),
      new foodPlate({
        name: "Hamburguesa doble carne",
        description:
          "Hammburguesa con doble carne Angus acompañada de papas a la francesa",
        image:
          "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/186268/cd4e98329a4bae0c65ef151283f2acc82b318c8d.XL2.jpg",
        price: 35000,
      }).save(),
      new foodPlate({
        name: "Mazorcada especial",
        description:
          "Maiz tierno desgranado acompañado con trozos de carne y queso gratinado",
        image:
          "https://uploads.candelaestereo.com/1/2021/08/como-hacer-una-mazorcada-la-manera-mas-facil-destacada.jpg",
        price: 30000,
      }).save(),
    ]);

    console.info("************* Added Food Plates *************");
    console.log(values);
  } catch (error) {
    console.log(error.message);
  }
};

createUsers();
createFoodPlates();
