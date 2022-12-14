const authService = require("../domain/services/AuthService");

const signin = (req, res) => {
  const { correo, contrasenia } = req.body;
  authService.signin(correo, contrasenia).then(resp => {
    if (resp) return res.json(resp)
    res.status(401).json({
      mensaje: "Credenciales incorrectas"
    });
  })
};

const signup = (req, res) => {
  const { name, username, password, admin } = req.body;
  authService.signup(name, username, password, admin).then(resp => {
    res.status(201).json(resp);
  });
};

module.exports = {
  signin,
  signup,
};
