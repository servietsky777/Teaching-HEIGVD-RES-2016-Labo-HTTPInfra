var express = require('express');
var app = express();

var books = require('./books.js');

app.get('/', function(req, res){
	res.send(books.generateBooks());
});

app.listen(3000, function(){
	console.log('Accepting HTTP requests on port 3000.')
});