const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const pyReq = require("./helpers/python");

//fetch to send data back to frontEnd
//const fetch()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.post("/react", async (req, res, next) => {
  let data = req.body;
  let result;
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
  try {
    result = await pyReq("python2", [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log("we can send this number back to front end now", result);
  } catch (err) {
    console.log("error", err);
  }

  res.redirect("/");
  next();
});

app.listen(5000);
