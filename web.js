var express = require('express');
fs = require('fs');
var app = express.createServer(express.logger());

// var mybuf = new Buffer(12);

app.get('/', function(request, response) {
   fs.readFileSync(index.html)   
  response.send(buf.toString('utf8',0,10))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
