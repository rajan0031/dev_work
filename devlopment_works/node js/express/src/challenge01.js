const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my home");
});

app.get("/about", (req, res) => { 
  res.send("welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.send("welcome to my contact page");
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },

    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
    {
      id: 123,
      name: "rajan",
      class: "b tech cse",
    },
  ]);
});

app.listen(8000, (err, data) => {
  console.log("the port is listening at 8000");
});
