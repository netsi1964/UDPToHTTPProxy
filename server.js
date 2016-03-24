var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/dashboard.html');
  //res.send('<h1>Welcome</h1><a href="/dashboard.html">View plaines on map</a>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var open = require('open');
open('http://localhost:3000/');
