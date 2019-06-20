var http = require('http');
var fs = require("fs");//file system 표시
var hostname = '127.0.0.1';
var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // http://localhost/index.html : req.url = index.html
  // http://localhost/  req.url = "/"
  var url = "";
  if(req.url == "/") {
    url = "/index.html"
  } else {
    url = req.url;
  }


  res.end(fs.readFileSync(__dirname + url));
});
server.listen(80, function() {
  console.log('Server running~');
});
