const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("env2")("./config.env");
const pyReq = require("./helpers/python");
const dataReq = require("./helpers/dataFetch");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/react", dataReq);

app.listen(PORT);
