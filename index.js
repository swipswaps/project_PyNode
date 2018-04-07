const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("env2")("./config.env");
const pyReq = require("./helpers/python");
const dataReq = require("./helpers/dataFetch");

//fetch to send data back to frontEnd
//const fetch()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.post("/react", dataReq);

app.listen(5000);
