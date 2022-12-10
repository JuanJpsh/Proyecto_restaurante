const express = require("express");
const morgan = require(`morgan`);
const cors = require("cors");
const initialDB = require("./libs/initialSetup")

const corsOrigin = "http://localhost:3000";
const app = express();

//Initial DB
initialDB()

//settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);
app.use(
  cors({
    origin: corsOrigin,
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