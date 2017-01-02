var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  text = "Starting Node.js:" + process.versions.node
  text += "Mongo DB Servers: " + process.env.MONGODB

  response.end(text);

});

var port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://127.0.0.1:" + port + "/");