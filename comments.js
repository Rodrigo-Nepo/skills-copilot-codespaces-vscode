//create web server
//create a web server that listens on port 3000
//create a route that listens for a GET request on the path /comments
//send back a list of comments as JSON

var express = require('express');
var app = express();

var comments = [
  'My first comment',
  'My second comment',
  'My third comment'
];

app.get('/comments', function(request, response) {
  response.json(comments);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
