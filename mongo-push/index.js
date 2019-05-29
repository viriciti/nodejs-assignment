const NATS = require("nats")
const nats = NATS.connect({ json: true });
const inputData = require("./db").inputData

let busId = 'test-bus-1'

nats.subscribe(`vehicle.${busId}`,(c) => {
    inputData(c);
});