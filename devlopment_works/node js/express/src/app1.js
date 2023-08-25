const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("the hello");
});

app.get("/epaint.ml", (req, res) => {
  res.end(
    "the hello ! this is the about page i am rajan and this is my website known as e paint . ml"
  );
});

app.listen(8000, (err, data) => {
  console.log("the port is listening at 8000");
});
