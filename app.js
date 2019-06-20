var ex = require("express");
var app = ex(); //express 생성
app.use(require("serve-static")(__dirname + "/static"));//사용자 정의 정적파일 위치 정의(html, css는 정적파일이기 때문에)
var server = require('http').createServer(app);
server.listen(80, function() {
  console.log('Server running~');
});
