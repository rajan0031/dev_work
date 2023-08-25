const fs = require("fs");
let text = fs.readFileSync("del.txt", "utf-8");
text = text.replace("rajan", "rajanbabu");

console.log("the content of the file is here");
console.log(text);

// creating a new file
console.log("creating a new file here.........");
fs.writeFileSync("rajanbabu.txt", text);
