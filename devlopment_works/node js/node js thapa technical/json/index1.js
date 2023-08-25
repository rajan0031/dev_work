const fs = require("fs");

const bioData = {
  name: "rajan",
  age: 26,
  channel: "rajan-babu",
  father: "yogendra",
  mother: "asha devi",
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  console.log("readed");
  const orgData = JSON.parse(data);
  console.log(orgData);
});
