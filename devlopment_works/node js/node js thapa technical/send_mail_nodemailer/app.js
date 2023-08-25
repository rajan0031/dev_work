const express = require("express");

const app = express();

let PORT = 5000;

const sendmail = require("./sendmail");

app.get("/", (req, res) => {
  res.send("i am a server");
});

app.get("/sendmail", sendmail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`i am live on port ${PORT}`);
    });
  } catch (error) {}
};

start();



