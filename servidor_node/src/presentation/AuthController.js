const authService = require("../domain/services/AuthService");

const signin = (req, res) => {
  const { username, password } = req.body;
  authService.signin(username, password).then(resp => {
    if (resp) return res.json(resp)
    res.status(401).json({
      logged: false,
      message: "Incorrect credentials"
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
