const request = require("supertest");
const express = require("express");
const router = require("../restApi/router");

const app = express();

app.use(router);

// app.get("/user", function(req, res) {
//   res.status(200).json({ name: "john" });
// });

request(app)
  .get("/")
  .expect("Content-Type", /json/)
  //.expect("Content-Length", "15")
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
