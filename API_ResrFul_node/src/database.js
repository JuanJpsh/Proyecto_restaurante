const mongoose = require("mongoose");
const { database } = require("./config")

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(`mongodb://${database.host}:${database.port}/${database.bd}`)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new Database();