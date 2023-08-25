const fs = require("fs");

// fs.mkdir("thapa", (err) => {
//   console.log("created");
// });

// fs.writeFile("thapa/read.txt", "the file is created successfully", (err) => {
//   console.log("the file is created successfully");
// });

// fs.appendFile(
//   "thapa/read.txt",
//   "   i am adding some extra data into the file system ",
//   (err) => {
//     console.log("the the document is updated successfully");
//   }
// );

//  fs.readFile("thapa/read.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log(err);
// });

// fs.rename("thapa/read.txt", "thapa/read_01.txt", (err) => {
//   console.log("rename successful");
// });

// fs.unlink("thapa/read_01.txt", (err) => {
//   console.log("the folder has been deleted");
// });

fs.rmdir("thapa", (err) => {
  console.log("the folder thapa is delted");
});
