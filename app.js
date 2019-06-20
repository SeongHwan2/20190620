var http = require('http');
var hostname = '127.0.0.1';
var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(80, function() {
  console.log('Server running~');
});
