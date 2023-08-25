const fs = require("fs");
fs.readFile("del.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("this is a message");
