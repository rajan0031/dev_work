const fs = require("fs");

// console.log(fs.readFileSync("read.txt", "utf-8"));

// console.log("after the data is done");

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

console.log("this is asynchronous way of writting files");
