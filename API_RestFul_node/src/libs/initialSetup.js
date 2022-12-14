const usuario = require("../domain/models/Usuario");
const permiso = require("../domain/models/Permiso");

crearPermisos = async () => {
  try {
    let cantidad = await permiso.estimatedDocumentCount();

    if (cantidad > 0) return;

    const valores = await Promise.all([
      new permiso({
        nombre: "gestionar_menu"
      }).save(),
      new permiso({
        nombre: "ordenar"
      }).save(),
      new permiso({
        nombre: "ver_propinas"
      }).save(),
      new permiso({
        nombre: "analizar"
      }).save(),
      new permiso({
        nombre: "gestionar_personal"
      }).save(),
      new permiso({
        nombre: "gestionar_aplicacion"
      }).save(),
      new permiso({
        nombre: "gestionar_restaurantes"
      }).save()
    ]);

    console.log("************* Permisos añadidos *************");
    console.log(valores);
  } catch (error) {
    console.log(error);
    return undefined
  }
};

const crearUsuarios = async () => {
  try {
    let cantidadPermisos = await permiso.estimatedDocumentCount();
    if (cantidadPermisos < 1){};

    let cantidadUsuarios = await usuario.estimatedDocumentCount();
    if (cantidadUsuarios > 0) return;

    const valores = await new usuario({
      nombre: "Juan Pablo Solarte",
      correo: "juan.jpsh17@gmail.com",
      contrasenia: await usuario.encriptarCont("Cont1234"),
      permisos: idsPermisos
    }).save()

    console.log("************* Usuarios añadidos *************");
    console.log(valores);
  } catch (error) {
    console.log(error);
  }
};

crearPermisos().then(() => {
  crearUsuarios();
})