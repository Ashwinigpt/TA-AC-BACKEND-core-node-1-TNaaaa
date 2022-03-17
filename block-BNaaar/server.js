var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response){
    console.log(request.method, request.url);
    if(request.method === 'GET' && request.url === '/'){
        request.write('Welcome to homepage');
        request.end()
    }else if(request.method === 'GET' && request.url === '/about'){
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>this is all about NodeJS<h2/>');
    }else if(request.method === 'POST' && request.url === '/about'){
        response.end(`{message: this is a post request}`);
    }
    
}

server.listen(5000, () => {
    console.log('server listening on port 5k');
});