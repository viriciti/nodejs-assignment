const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myproject", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

app.listen(3000, () => console.log("server started"));
