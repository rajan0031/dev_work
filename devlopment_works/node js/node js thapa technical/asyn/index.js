const fs = require("fs");

fs.writeFile(
  "read.txt",
  "we have to do practice for getting a good perfection in our work ",
  (err) => {
    console.log("created");
    console.log(err);
  }
);
const data = fs.readFile("read.txt", "utf8", (err, data) => {
  console.log("read");
  console.log(data);
});
