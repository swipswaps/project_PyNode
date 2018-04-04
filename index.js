const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.post("/react", async (req, res, next) => {
  let data = req.body;
  consol.log("data", data);
  res.redirect("/");
  next();
});

app.listen(5000);
