var express = require('express');
var path = require('path');
var app = express();
var port = 80;

app.use(express.static(path.join(__dirname, "../public")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

var server = app.listen(port);