var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if (req.method === 'GET' && http.request.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.method === 'GET' && http.request.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./about.html').pipe(res);
    } else if (req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./assets/stylesheets/style.css' + req.url, (err, content) => {
            if (err) return console.log(err);
            res.end(content)
        })
    } else if (req.method === 'GET' && http.req.url === '/images') {
        res.setHeader('Content-Type', 'image/png');
        fs.readFile('./assets/images' + req.url, (err, content) => {
            if (err) return console.log(err);
            res.end(content)
        })
    } 
};

server.listen(5000, () => {
    console.log('Server listening on port 5000');
})