var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    console.log(request.headers)
    console.log(request.method, request.url);
    response.end('Welcome');
}

server.listen(3000, () => {
    console.log('server listening on port 3000');
})