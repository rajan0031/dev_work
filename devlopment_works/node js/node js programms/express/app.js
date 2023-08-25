const express = require("express");
const path = require("path");
const app = express();

const port = 80;
// make static things
app.use("/static", express.static("static"));
// set the template engine for pug

app.set("view engine", "pug");

// set the view directry
app.set("view", path.join(__dirname, "views"));

// our pug demo end point
app.get("/demo", (req, res) => {
  res
    .status(200)
    .render("demo", {
      title: "hey harry",
      message: "hello there and thanks for telling me how to use pug",
    });
});
app.get("/", () => {
  res.send("this is my first app with rajan ji now");
});

app.listen(port, () => {
  console.log(
    `the applicaion has started successfully on port and post man is not working here in this acse ${port}`
  );
});
