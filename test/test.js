const request = require("supertest");
const express = require("express");
const router = require("../restApi/router");

const app = express();

app.use(router);

describe("GET /", function() {
  it("respond with json containing a list of all messages", function(done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500, done);
  });
});

describe("GET /message/:Id", function() {
  it("respond with json containing a single message", function(done) {
    request(app)
      .get("/message/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});

describe("PATCH /message/:Id", function() {
  const data = {
    _id: 4,
    msg: {
      time: 0,
      energy: 0,
      gps: "",
      odo: 0,
      speed: 0,
      soc: 0
    }
  };
  it("respond with json containing updated message", function(done) {
    request(app)
      .patch("/message/4")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(500)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /message/:Id", function() {
  const data = {
    _id: 0,
    msg: {
      time: 0,
      energy: 0,
      gps: "",
      odo: 0,
      speed: 0,
      soc: 0
    }
  };
  it("respond with json containing new message", function(done) {
    request(app)
      .post("/message")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(500)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});

describe("DELETE /message/:Id", function() {
  it("respond with json containing deleted message", function(done) {
    request(app)
      .delete("/message/2")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
