const express = require("express");
const morgan = require(`morgan`);
const cors = require("cors");

//Previous database config
if(process.env.DEPLOY === 'false'){
  require("./libs/initialSetup")
}

const app = express();

//settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//Middlewares
app.use(morgan("dev")); //combined
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/v1/user", require("./v1/routes/UsuarioRouter"));
app.use("/api/v1/prod", require("./v1/routes/ProductoRouter"));
app.use("/api/v1/auth", require("./v1/routes/AuthRouter"));

module.exports = app