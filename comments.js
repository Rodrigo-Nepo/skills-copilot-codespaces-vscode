//create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
server.listen(port, function() {
    console.log('Server listening at port %d', port);
});