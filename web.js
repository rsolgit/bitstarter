var express = require('express');

var app = express.createServer(express.logger());

var mybuf = new Buffer(12);

app.get('/', function(request, response) {
   mybuf = fs.readFileSync(index.html);   
  response.send('mybuf.toString('utf8')');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
