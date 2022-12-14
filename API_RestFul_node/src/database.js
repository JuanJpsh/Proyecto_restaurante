const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(`mongodb://${process.env.BD_HOST}:${process.env.BD_PORT}/${process.env.BD_NAME}`)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new Database();