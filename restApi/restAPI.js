const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);

const router = require("./router");

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`server started, listening on port: ${port}`)
);
