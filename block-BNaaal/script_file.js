var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    response.end('Welcome');
}

server.listen(4000, () => {
    console.log('server listening on port 4000');
})