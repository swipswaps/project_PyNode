const express = require("express");
const app = express();

console.log(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(1234);
