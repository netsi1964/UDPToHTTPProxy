var PORT = 33333;
var HOST = '127.0.0.1';
var serverPort = 8080;

var dgram = require("dgram"),
  server = dgram.createSocket("udp4"),
  latestData;

var http = require("http");
http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(latestData));
}).listen(serverPort);

console.log("HTTP server listening on port " + JSON.stringify(serverPort));


server.on("listening", function() {
  var address = server.address();
  console.log("UDP Server listening on " + address.address + ":" + address.port);
});

server.on("message", function(message, remote) {
  latestData = {
    recieved: new Date(),
    message: message.toString(),
    remote: remote
  };
  // console.log(latestData);

});

server.bind(PORT, HOST);
