const fs = require("fs");

// fs.mkdirSync("thapa");

fs.writeFileSync("thapa/boi.txt", "we are humans");

const data = fs.readFileSync("thapa/boi.txt", "utf8");
console.log(data);

fs.appendFileSync("thapa/boi.txt", "and let us survive with our pets ");

const data1 = fs.readFileSync("thapa/boi.txt", "utf8");
console.log(data1);

fs.renameSync("thapa/boi.txt", "thapa/boi_01.txt");

const data2 = fs.readFileSync("thapa/boi_01.txt", "utf8");
console.log(data2);

fs.unlinkSync("thapa/boi_01.txt");
