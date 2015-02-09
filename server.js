var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<html><body><h1>Hello World!</h1></body></html>\n');
}).listen(port);
