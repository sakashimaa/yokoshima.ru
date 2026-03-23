const http = require("http");

http
  .createServer(function (_, res) {
    res.write("On the way to beign a full snack engineer! Yokoshima WWW");
    res.end();
  })
  .listen(3000);

console.log("Server started");
