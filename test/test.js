const request = require("supertest");
const express = require("express");
const router = require("../restApi/router");

const app = express();

app.use(router);

app.get("/", function(req, res) {
  res.status(200).json({ name: "john" });
});

request(app)
  .get("/")
  .expect("Content-Type", /json/)
  .expect(500)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
  .get("/id/:Id")
  .expect("Content-Type", /json/)
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
  .patch("/:Id")
  .expect("Content-Type", /json/)
  .expect(404)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
  .post("/message")
  .expect("Content-Type", /json/)
  .expect(500)
  .end(function(err, res) {
    if (err) throw err;
  });
