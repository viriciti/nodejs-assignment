const express = require("express");
const app = express();
//const mongoose = require("mongoose");

const router = require("./router");

// mongoose.connect("mongodb://localhost:27017/myproject", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on("error", error => console.error(error));
// db.once("open", () => console.log("connected to database"));
// app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`server started, listening on port: ${port}`)
);
