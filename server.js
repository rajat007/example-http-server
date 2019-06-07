var http = require('http'); 

function callback(req, res) {
  console.log(req.url,req.method)   
 res.write("hello world ");
 res.end();
}

http
    .createServer(callback)
    .listen(3000)