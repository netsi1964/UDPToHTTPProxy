/*global $, jQuery, localStorage, window, angular, alert, document, console, confirm, require */
/*jshint unused:false */
/*jshint plusplus: false, devel: true, nomen: true, indent: 4, maxerr: 50 */

var PORT = 33333;
var HOST = '127.0.0.1';
var serverPort = 8000;

var dgram = require("dgram"),
  server = dgram.createSocket("udp4"),
  latestData;

var http = require("http");
var responseCreator = require("./responseCreator.js");
http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(responseCreator(latestData));
}).listen(serverPort);

console.log("HTTP server listening on port " + JSON.stringify(serverPort));

server.on("listening", function() {
  var address = server.address();
  console.log("UDP Server listening on " + address.address + ":" + address.port);
});

server.on("message", function(message, remote) {
  latestData = message.toString();
  // console.log(latestData);

});

server.bind(PORT, HOST);
