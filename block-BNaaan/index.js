var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    console.log(request.headers)
    console.log(request.method, request.url);
}

server.listen(3000);