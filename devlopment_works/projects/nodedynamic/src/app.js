const express = require("express");

const app = express();

const port = process.env.port || 3000;
app.get("/", (req, res) => {
  res.send("hello ji");
});

app.listen(port, (err, data) => {
  console.log(`the port is running at port no ${port}`);
});
