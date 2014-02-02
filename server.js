var express = require('express');

var app = express();
var port = 8000;
app.listen(port);
console.log("Express app listening on port " + port);
app.get("/", function(req, res){
res.send('Hello, Welcome to CS1501')
});