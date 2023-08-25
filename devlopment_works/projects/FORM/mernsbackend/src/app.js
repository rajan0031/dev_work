// ye hai tumhara express application
// sab ka sab kam yahi se hota hai
// express app is all you need to know about

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/conn");
const path = require("path");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
const Register = require("./models/registers");

const templates_path = path.join(__dirname, "../views");
// console.log(path.join(__dirname, "/..public"));
// app.use(express.static(static_path));
const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(cors());
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index"); 
});

// create  new user in our data base
app.post("/signup", async (req, res) => {
  try {
    const data = new Register(req.body);
    await data.save();
    res.send("save Data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login is successfull");
});

app.listen(port, (error, data) => {
  console.log(`server is running at port no ${port}`);
});
