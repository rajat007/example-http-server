var http= require('http')

var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'get',
  };

  const req = http.request(options, function(res) {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', function(){
      console.log('No more data in response.');
    });
  });

  req.on('error', function(e) {
    console.error(`problem with request: ${e.message}`);
  });
  
  // Write data to request body
  req.end();