/*global $, jQuery, localStorage, window, angular, alert, document, console, confirm, require */
/*jshint unused:false */
/*jshint plusplus: false, devel: true, nomen: true, indent: 4, maxerr: 50 */

// TEST FLIGHT DATA - START
var flightData = [],
  dateIndex = 0;
var fs = require("fs");
var data = fs.readFileSync('./testFlightData.txt', 'utf8');
console.log(data);
flightData = data.split("\n");
// TEST FLIGHT DATA - END

var PORT = 33333;
var HOST = "127.0.0.1";

var dgram = require('dgram');

var client = dgram.createSocket("udp4");
var time = 0,
  interval = 1000;

function broadcastMessage() {
  var rawMessage = flightData[dateIndex];
  flightData[dateIndex].split(",").map(function(e) {
    return (parseFloat(e)+(Math.random()-Math.random())/10).toString();
  }).join(",");
  console.log(dateIndex, rawMessage);
  var message = new Buffer(rawMessage);
  dateIndex++;

  if (dateIndex > flightData.length || rawMessage === "") {
    dateIndex = 0;
  }

  client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) {
      throw err;
    } else {
      setTimeout(broadcastMessage, interval);
    }
  });
}

broadcastMessage();
console.log("UDP source is publishing on " + HOST + ':' + PORT);
