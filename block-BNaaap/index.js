var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    response.statusCode = 201;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Welcome<h1/>');
}

server.listen(4444, () => {
    console.log('server listening on port 4444');
});