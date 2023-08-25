const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello ji ye header hai</h1>");
});

app.get("/about", (req, res) => {
  res.send("hello ji !! welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.send("hello ji !! welcome to my contact page");
});

app.get("/temp", (req, res) => {
  //res.send("hello ji !! welcome to my temp page");
  res.send([
    {
      name: "temp of the area",
      temp: "its about cold and 20 degree celcoius",
    },
  ]);
});

app.listen(8000, (err, data) => {
  console.log("port listining at 8000");
});
