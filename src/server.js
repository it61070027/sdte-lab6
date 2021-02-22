const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("อย่างอื่น");
});

module.exports = app;
