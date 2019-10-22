const express = require("express");
const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose");

//router.use(express.json());
mongoose.connect("mongodb://localhost:27017/myproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

const collection = db.collection("vehicleData");

//Getting all the data
router.get("/", async (req, res) => {
  try {
    await collection.find({}).toArray(function(err, result) {
      res.json(result);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting message by id

//Update message by id number

//Posting new message

//Delete message by id

module.exports = router;
