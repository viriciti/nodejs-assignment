'use strict';

const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'rides';

const dbConnection = () => {
  return mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
    .then(() => {
      console.log('Database connection successful');
    })
    .catch(err => {
      console.error('Database connection error');
    }) 
}

module.exports = dbConnection;



// const mongoose = require('mongoose');
// const RideModel = require('./models/ride');

// const server = '127.0.0.1:27017';
// const database = 'rides';

// mongoose.connect(`mongodb://${server}/${database}`, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Database connection successful');
//   })
//   .catch(err => {
//     console.error('Database connection error');
//   })

// // test that records are added in the db
// const ride1 = new RideModel({
//   time: 1511512585495,
//   energy: 85.14600000000002,
//   gps: ["52.08940124511719","5.105764865875244"],
//   odo: 5.381999999997788,
//   speed: 12,
//   soc: 88.00000000000007
// });


// ride1.save()
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
