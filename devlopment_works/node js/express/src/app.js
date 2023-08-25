const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("the hello");
});

app.get("/about", (req, res) => {
  res.end("the hello ji kaise ho beta  ! this  is is the about page am not i am rajan");
});

app.listen(8000, (err, data) => {
  console.log("the port is listening at 8000");
});
