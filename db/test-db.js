'use strict';

const dbConnection = require('./database');
const RideModel = require('./models/ride');

dbConnection()
  .then(() => {
    const ride1 = new RideModel({
      time: 1511512585495,
      energy: 85.14600000000002,
      gps: ["52.08940124511719","5.105764865875244"],
      odo: 5.381999999997788,
      speed: 12,
      soc: 88.00000000000007
    });
    
    
    return ride1.save()
      .then(doc => {
        console.log(doc);
      })
      .catch(err => {
        console.error(err);
      })
  })

