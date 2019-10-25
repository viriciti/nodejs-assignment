const mongo = require("mongodb").MongoClient;

const NATS = require("nats");
const nats = NATS.connect({ json: true });

// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "myproject";

const vehicleName = "test-bus-1";
let idnum = 0;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function(err, client) {
    if (err) {
      return console.dir(err);
    } else {
      console.log("We are connected");
    }

    const db = client.db(dbName);

    const collection = db.collection("vehicleData");

    nats.subscribe(`vehicle.${vehicleName}`, function(msg) {
      collection.insertOne({ _id: idnum, msg });
      idnum += 1;
    });
    client.close();
  }
);
