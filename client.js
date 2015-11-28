/*global $, jQuery, localStorage, window, angular, alert, document, console, confirm, require */
/*jshint unused:false */
/*jshint plusplus: false, devel: true, nomen: true, indent: 4, maxerr: 50 */

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');


var client = dgram.createSocket('udp4');
var runForTimes = 100,
  time = 0,
  interval = 1000;

function sendUDPMessage() {
  var rawMessage = 'UDP message sent to ' + HOST + ':' + PORT + " " + new Date(),
    message = new Buffer(rawMessage);
  console.log(rawMessage);
  client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) {
      throw err;
    } else {
      if (++time > runForTimes) {
        console.log("Ending client");
        client.close();
      } else {
        setTimeout(sendUDPMessage, interval);
      }
    }
  });
}

sendUDPMessage();
console.log("Started client");
