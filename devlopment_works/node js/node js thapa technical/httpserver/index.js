const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("this is home page of the site");
  } else if (req.url == "/about") {
    res.end("this is about page of the site");
  } else if (req.url == "/services") {
    res.end("this is services page of the site");
  } else if (req.url == "/contact") {
    res.end("this is contact page of the site");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      const objData = JSON.parse(data);
      console.log(objData[0].name);
      res.end(objData[2].name);
      //res.end("this is not working why ?");
    });
  } else {
    res.writeHead(404);
    res.end("****404*****");
  }
});

server.listen(800, "127.0.0.1", () => {
  console.log(`listening to the port number ${800}`);
});
