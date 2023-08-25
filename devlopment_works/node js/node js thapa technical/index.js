const fs = require("fs");

// // creating a file;

// //fs.writeFileSync("read.txt", "welcome to my dark side");
// // if i update the written documents then i got the all values;

// //fs.writeFileSync("read.txt", "welcome you all to my dark side");

// // how to append extra info in a files

// //fs.appendFileSync("read.txt", "how are you all ");

// const data = fs.readFileSync("read.txt");
// // console.log(data);

// const org_data = data.toString();
// console.log(org_data);

// // rename the file name;

// fs.renameSync("read.txt", "read_write.txt");

// const foldername = "thapa";
// const val = fs.mkdirSync(foldername);

//fs.writeFileSync("thapa.txt", "this is good");

//fs.appendFileSync("thapa.txt", " this is goging crazy beta ji");

fs.readFileSync("thapa.txt", utf8, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
