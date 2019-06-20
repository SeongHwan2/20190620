var http = require('http');
var fs = require("fs");//file system 표시
var hostname = '127.0.0.1';
var server = http.createServer(function(req, res) {
  // http://localhost/index.html : req.url = index.html
  // http://localhost/  req.url = "/"
  //console.log(require("path").extname(req.url));
  var url = "";
  if(req.url == "/") {
    url = "/index.html"
  }else if (req.url == "/favicon.ico") {
    return res.writeHead(404);
  } else if (require("path").extname(req.url) == ".css") {
     url = req.url;
     res.setHeader('Content-Type', 'text/css');
  } else {
    url = req.url;
    res.setHeader('Content-Type', 'text/html');
  }
  res.statusCode = 200;
  res.end(fs.readFileSync(__dirname + url));
});
server.listen(80, function() {
  console.log('Server running~');
});
