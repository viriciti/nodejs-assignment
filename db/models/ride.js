const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  time: { type: Number, required: true },
  energy: { type: Number, required: true },
  gps: [{ type: String, required: true }],
  odo: { type: Number, required: true },
  speed: { type: Number, required: true },
  soc: { type: Number, required: true },
});

module.exports = mongoose.model('Ride', rideSchema);
