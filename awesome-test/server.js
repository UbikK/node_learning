//grab express
var express = require('express');

//create express app
var app = express();

//create express route for homepage
//http://localhost:8080/
app.get('/', function(req, res){
	res.sendFile('C:/Dev/node_learning/awesome-test/index.html');
});

//start server on port 8080
app.listen(8080);

//send message
console.log('Server started');