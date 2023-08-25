const fs = require("fs");

const http = require("http");

const server = http.createServer();

// this is old way of showing data such as download files
/*
server.on("request", (req, res) => {
  
  var fs = require("fs");
  fs.readFile("input.txt", (err, data) => {
    if (err) return console.error(err);
    res.end(data.toString());
  });
  



});
*/
// 2ndway streaming tarika

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", () => {
    res.end("error hai ji");
  });
});

server.listen(8000, "127.0.0.1");
