var path = require('path');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NYT-react');
var db = mongoose.connection;

db.on('error', function(err) {
});









//Setting up port
var PORT = 3000;

app.listen(PORT, function(error) {
  if (error) throw error;
  console.log('App running on port: ' + PORT);
});